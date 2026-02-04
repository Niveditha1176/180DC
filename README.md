
# 180DC Consulting frontend
using react vite and typescript 


## how to Quick start 

1. Fork the repo on GitHub or clone the main repo:

   ```bash
   git clone https://github.com/Niveditha1176/180DC.git
   cd 180DC
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root with at least the following keys:

   ```env
   DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>
   SESSION_SECRET=your-secret-here
   PORT=5000   # optional, defaults to 5000
   ```

   - The server will throw if `DATABASE_URL` is missing.
   - Do NOT commit your real `.env` to the repo; the repository already ignores `.env`.

4. Run in development (serves API + client on port 5000 by default):

   ```bash
   npm run dev
   ```

   Then open: http://localhost:5000

5. Database schema (optional):

   If you have Postgres set up and `DATABASE_URL` configured, apply schema changes:

   ```bash
   npm run db:push
   ```

6. Build for production:

   ```bash
   npm run build
   npm start
   ```


## Notes 

- The server defaults to port `5000` unless `PORT` is set.
- Required env vars: `DATABASE_URL` and `SESSION_SECRET`.


