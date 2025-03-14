from flask import Flask, render_template, redirect, url_for, request, flash, send_from_directory
from flask_sqlalchemy import SQLAlchemy
import os
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user

app = Flask(__name__, static_folder='../dist', static_url_path='/')
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)

class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    position = db.Column(db.String(100), nullable=False)
    experience = db.Column(db.Text, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    languages = db.Column(db.String(100), nullable=False)
    skills = db.Column(db.Text, nullable=False)
    salary = db.Column(db.String(20), nullable=False)
    start_date = db.Column(db.String(20), nullable=False)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        user = User.query.filter_by(username=username).first()
        if user and bcrypt.check_password_hash(user.password, password):
            login_user(user)
            # Redirect based on user role.
            if user.is_admin:
                return redirect(url_for('admin'))
            else:
                return redirect(url_for('dashboard'))
        else:
            flash('Login Unsuccessful. Please check username and password', 'danger')
    return render_template('login.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))

@app.route('/admin')
@login_required
def admin():
    # If a non-admin somehow accesses /admin, redirect them to their dashboard.
    if not current_user.is_admin:
        return redirect(url_for('dashboard'))
    applications = Application.query.all()
    return render_template('admin.html', applications=applications)

@app.route('/admin/create_user', methods=['GET', 'POST'])
@login_required
def create_user():
    if not current_user.is_admin:
        return redirect(url_for('dashboard'))
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        # Determine if the new user should be an admin
        is_admin = True if request.form.get('is_admin') == 'on' else False
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        user = User(username=username, password=hashed_password, is_admin=is_admin)
        db.session.add(user)
        db.session.commit()
        flash('User account has been created!', 'success')
        return redirect(url_for('admin'))
    return render_template('create_user.html')

@app.route('/dashboard')
@login_required
def dashboard():
    # If an admin user somehow accesses the dashboard, redirect them.
    if current_user.is_admin:
        return redirect(url_for('admin'))
    # Non-admin users can view the applications
    applications = Application.query.all()
    return render_template('dashboard.html', applications=applications)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    application = Application(
        name=data['name'],
        email=data['email'],
        phone=data['phone'],
        position=data['position'],
        experience=data['experience'],
        location=data['location'],
        languages=data['languages'],
        skills=data['skills'],
        salary=data['salary'],
        start_date=data['start_date']
    )
    db.session.add(application)
    db.session.commit()
    return {'message': 'Application submitted successfully'}, 201

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

def create_initial_admin():
    admin = User.query.filter_by(username='admin').first()
    if not admin:
        hashed_password = bcrypt.generate_password_hash('admin').decode('utf-8')
        admin = User(username='admin', password=hashed_password, is_admin=True)
        db.session.add(admin)
        db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        create_initial_admin()
    app.run(debug=True)