# React + Express Single-Server Scaffold

This is a minimal full-stack scaffold with this structure:

- `/client` - React frontend built with Vite
- `/server` - Node.js + Express backend

Important design rule: **the backend is the only running server**.

There is **no frontend dev server** in this scaffold.

## Folder structure

```text
fullstack-scaffold/
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── README.md
```

## What this scaffold demonstrates

- React frontend using Vite for build only
- Express backend with two sample API routes:
  - `GET /api/hello`
  - `GET /api/status`
- Express serving the built frontend from `../client/dist`
- SPA fallback so non-API routes return `index.html`

## Install steps

Install client dependencies:

```bash
cd client
npm install
```

Install server dependencies:

```bash
cd ../server
npm install
```

## Build steps

Build the frontend only:

```bash
cd client
npm run build
```

This creates `client/dist`.

## Run steps

Copy the example environment file and edit it if needed:

```bash
cd ../server
cp .env.example .env
```

Then start the server:

```bash
npm start
```

The server reads `PORT` from `server/.env`.

For example:

```env
PORT=4101
```

The intended production pattern is `41xx`, where `xx` is the last two digits of the student ID.

## One-server architecture

Use only these commands:

```bash
cd client && npm install && npm run build
cd server && npm install && npm start
```

Do **not** run:

```bash
npm run dev
```

in the client.

Why?

- The frontend is not meant to be served separately.
- Vite is used only to build static files.
- Express serves both the API and the built frontend.
- This keeps deployment simple and matches a single-server production model.

## Ubuntu deployment steps for server `10.192.145.179`

1. Copy the project to the Ubuntu server.
2. On the server, install Node.js and npm if needed.
3. Build the frontend:

```bash
cd fullstack-scaffold/client
npm install
npm run build
```

4. Configure the backend:

```bash
cd ../server
npm install
cp .env.example .env
```

5. Edit `.env` and set the correct port, for example:

```env
PORT=4101
```

6. Start the server:

```bash
npm start
```

7. Open the app in a browser:

```text
http://10.192.145.179:4101
```

## Notes for students

- Build the React app first.
- Then run the Express server.
- If `client/dist` does not exist, the backend will not have frontend files to serve.
- All API routes start with `/api`.
- All other routes are treated as frontend routes and return `index.html`.
