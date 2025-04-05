# Movie API with Prisma and Express

This is a simple RESTful API built using **Express** and **Prisma ORM**, which allows you to manage **Users**, **Movies**, and **Comments**.

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup your `.env` file with your database URL:
   ```
   DATABASE_URL="your_database_url_here"
   ```

4. Run Prisma migration and generate client:
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

---

## 🚀 Running the Server

```bash
npm run dev
# or
ts-node index.ts
```

Server runs on: `http://localhost:7999`

---

## 📘 API Endpoints

### 👤 User Routes

- `POST /createuser` – Create new user
- `PUT /updateuser/:userid` – Update user by ID
- `DELETE /deleteuser/:userid` – Delete user and their comments
- `GET /gettallusers` – Get all users
- `GET /getallcomments/:userid` – Get all comments by a user

---

### 🎬 Movie Routes

- `GET /getallmovies` – Get all movies
- `POST /createmovie` – Create a new movie
- `GET /getmoviecomments/:movieid` – Get all comments on a movie
- `GET /getmoviewithratings/:rate` – Get movies with a specific rating
- `GET /getmovies/:movieid` – Get a movie by ID

---

### 💬 Comment Routes

- `POST /createcomment` – Create a new comment
- `PUT /updatecomment/:commentid` – Update a comment by ID
- `DELETE /deletecomment/:commentid` – Delete a comment
- `GET /gettallcomments` – Get all comments

---

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **TypeScript**
- **Prisma ORM**
- **SQLite / PostgreSQL / MySQL** (any supported DB)

---

## 📄 License

This project is licensed under the MIT License.
