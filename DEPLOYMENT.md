# Deployment Instructions

You have a few options to deploy your "Ferpa Simulador Financiero" app.

## Option 1: StackBlitz (Easiest for quick sharing)
1.  Go to [StackBlitz](https://stackblitz.com/).
2.  Click "New Project" -> "Upload from Computer" (if available) or simply drag and drop the folder `C:\Users\ASUS\Downloads\Kimi_Agent_Ferpa Simulador Financiero\app` into the dashboard.
    *   *Note:* StackBlitz works best if you import from GitHub.

## Option 2: GitHub + Vercel (Recommended for production)
This is the standard way to host modern web apps for free.

1.  **Create a GitHub Repository**:
    *   Go to GitHub.com and create a new empty repository (named e.g., `ferpa-simulador`).
2.  **Push your code**:
    *   Open your terminal in the app folder.
    *   Run:
        ```bash
        git remote add origin https://github.com/your-username/ferpa-simulador.git
        git branch -M main
        git push -u origin main
        ```
3.  **Deploy on Vercel**:
    *   Go to [Vercel.com](https://vercel.com) and sign up/login.
    *   Click "Add New..." -> "Project".
    *   Import your `ferpa-simulador` repository.
    *   Vercel will detect it's a Vite app and set everything up automatically. Click "Deploy".

## Option 3: Google Cloud (If you really meant Vertex/GCP)
"Vertex" is usually for AI models. For hosting a web app on Google Cloud, use **Cloud Run** or **App Engine**.

1.  Install Google Cloud CLI.
2.  Run `gcloud init`.
3.  Run `gcloud run deploy` and follow the prompts.

## Local Backup
I have created a zip file `ferpa-app.zip` in the project directory which contains all your source code (excluding heavy `node_modules`). You can keep this as a backup or use it to upload to other services.
