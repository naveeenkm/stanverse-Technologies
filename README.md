# STAN Internship Challenge: Conversational AI Chatbot 

This project is a submission for the STAN Internship Challenge, focusing on Conversational AI / Full-Stack development. The objective is to create a human-like conversational chatbot that demonstrates empathy, contextual awareness, and memory.

The application is built with a React frontend and a Django backend, utilizing the Google Gemini API for its conversational capabilities and MongoDB for data persistence.

## Live Demo:


**Live Demo:** [tinyai-v1.vercel.app](https://tinyai-v1.vercel.app/#/)  

_Reminder: The backend is hosted on Render’s free tier, so it may take 1–2 minutes to spin up after login. Please be patient._




##  Features

* **Human-Like Interaction:** Delivers natural, emotionally engaging conversations and avoids robotic replies to make the experience feel authentic.
* **Personalized Memory:** Implements long-term memory to recall user preferences and past chat history, allowing responses to evolve over time.
* **Context-Aware Tone Adaptation:** Intelligently adapts its tone and behavior based on the context of the conversation.
* **Scalable & Modular Architecture:** The core logic is designed to be modular, scalable, and ready to plug into any user-generated content platform.

---

##  Tech Stack

| Area      | Technology                                                                                                |
| :-------- | :-------------------------------------------------------------------------------------------------------- |
| **Frontend** | ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| **Backend** | ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray) |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)                                                                                                              |
| **AI Model** | **Google Gemini API** |

##  Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed:
* Node.js (which includes npm) or Bun
* Python & pip
* Git
* A code editor like VS Code

---

### 1. MongoDB Atlas Setup

The backend uses MongoDB Atlas for the database.

1.  **Create an Account:** Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account.
2.  **Create a Free Cluster:** Follow the on-screen instructions to create a new free-tier cluster.
3.  **Create a Database User:** In the "Database Access" section, create a new user with a username and password. Make sure to grant it read/write access.
4.  **Allow Network Access:** In the "Network Access" section, add your current IP address to the access list to allow connections from your machine.
5.  **Get Connection String:** Go to your cluster's "Overview" page, click `Connect` -> `Drivers`, and copy the **Connection String (URI)**. It will look something like this:
    ```
    mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
    ```
    Replace `<username>` and `<password>` with the credentials you created in step 3. You will need this URI for the backend setup.

---

### 2. Backend Setup (`aiserver`)

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/naveeenkm/stanverse-Technologies.git
    cd stanverse-Technologies/aiserver
    ```

2.  **Create a Virtual Environment:**
    ```bash
    # For Windows
    python -m venv env
    .\env\Scripts\activate

    # For macOS/Linux
    python3 -m venv env
    source env/bin/activate
    ```

3.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Create Environment File:**
    Create a new file named `.env` in the `aiserver` root directory and add the following variables: or edit existing .env file by adding api key

    ```env
    # Get your key from Google AI Studio: https://aistudio.google.com/app/apikey
    GEMINI_API_KEY="YOUR_GOOGLE_GEMINI_API_KEY"

    # Your MongoDB Atlas connection string from the previous step
    MONGO_URI="mongodb+srv://user:password@cluster0.xxxxx.mongodb.net/your_db_name?retryWrites=true&w=majority"

    add mongo uri in aiserver/server/app/views.py 36th line

    # JWT configuration
    JWT_SIGNING_KEY="your-jwt-secret"
    JWT_ALGORITHM="HS256"
    ```

5.  **Run the Backend Server:**
    ```bash
    python manage.py runserver
    ```
    The Django server will start running at `http://127.0.0.1:8000`.

---

### 3. Frontend Setup (`aiclient`)

1.  **Navigate to the Frontend Directory:**
    Open a new terminal and navigate to the `aiclient` folder.
    ```bash
    cd ../aiclient
    ```

2.  **Install Dependencies:**
    *If you are using npm:*
    ```bash
    npm install
    ```
    *If you are using bun (recommended as `bun.lockb` exists):*
    ```bash
    bun install
    ```

3.  **Create Environment File:**
    Create a new file named `.env` in the `aiclient` root directory and add the following: or edit existing .env file add your own api key

    ```env
    # The URL where your Django backend is running
    VITE_API_BASE_URL=http://127.0.0.1:8000

    # Get your Google Client ID from Google Cloud Console for OAuth
    # Follow this guide: https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid
    VITE_GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com"
    ```

4.  **Run the Frontend Development Server:**
    *If you are using npm:*
    ```bash
    npm run dev
    ```
    
    The React application will be accessible at `http://localhost:5173` (or another port if 5173 is busy).
