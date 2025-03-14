# Job Finder Cyprus

A multilingual job search platform connecting talented professionals with leading employers across Cyprus.

## Overview

Job Finder Cyprus is a modern web application designed to streamline the job search process in Cyprus. The platform supports multiple languages (English, Greek, Russian, Spanish, and French) to serve a diverse international audience.

## Features

-   **Multilingual Support**: Full interface available in multiple languages
-   **Interactive Application Form**: User-friendly job application process
-   **Responsive Design**: Seamless experience across all devices
-   **Admin Dashboard**: Secure backend for managing applications

## Tech Stack

### Frontend

-   React
-   Vite
-   CSS

### Backend

-   Flask
-   SQLite Database

## Getting Started

### Prerequisites

-   Node.js
-   Python 3.x
-   npm or yarn

### Installation

1.  Clone the repository

2.  Install frontend dependencies:

    ```bash
    cd jobfind
    npm install
    ```

3.  Set up the Flask backend:

    ```bash
    cd flask-backend
    python3 -m venv venv
    source venv/bin/activate  # On Windows use: venv\Scripts\activate
    pip install -r requirements.txt
    ```

### Running the Application

**To run only the frontend:**

1.  Start the frontend development server:

    ```bash
    cd jobfind
    npm run dev
    ```

**To run the full application (frontend and backend):**

1.  Start the frontend development server in a separate terminal:

    ```bash
    cd jobfind
    npm run dev
    ```

2.  Start the Flask backend server in another terminal:

    ```bash
    cd flask-backend
    source venv/bin/activate  # On Windows use: venv\Scripts\activate
    python app.py
    ```

## Project Structure

```
├── src/                  # Frontend source files
│   ├── components/       # React components
│   ├── translations.json # Language translations
│   └── assets/          # Static assets
├── flask-backend/       # Backend server
│   ├── app.py           # Main Flask application
│   ├── templates/       # HTML templates
│   └── static/          # Static files
└── public/             # Public assets
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.