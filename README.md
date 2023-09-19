# Requirements

The stack used is NestJs for the backend and React for the frontend.

- Node.js
- Git

# Folder structure

```
./
backend-app/
    ...
landing-app/
    ...
```

Each folder contains a separate module.

# Installation

First clone the project in your desired folder.

```
git clone https://github.com/alva1612/fulltime-repo-app.git
```

Move into the repo.

```
cd fulltime-repo-app
```

## Backend

Go inside the `backend-app` folder.

```
cd backend-app
```

Run in your CLI the following script in order to install all the required packages.

```
npm i
```

While the installation is taking place. Create a `.env` file and copy the contents from `.env.example` into the `.env` file.

Once the installation is done, you can start development mode by running the following command.

```
npm run start:dev
```

After the project starts running succesfully. You can continue with the frontend project.

## Frontend

Go inside the `landing-app` folder.

If continuing from previous steps

```
cd ../landing-app
```

Open your CLI and install all modules.

```
npm i
```

While the installation is taking place. Create a `.env` file and copy the contents from `.env.example` into the `.env` file.

After the installation is done. You can run the project with the following script.

```
npm run dev
```

Access the link provided by vite and you should see the app working.
