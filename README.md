# Prisma Blog App 🚀

A full-featured backend blog application built with **Express**, **TypeScript**, and **Prisma**.  
This project supports **users**, **posts**, **comments**, **replies**, and **admin moderation** with a clean and scalable architecture.

---

## ✨ Features

### 👤 User
- User registration & authentication
- Create, read, update posts
- Comment on posts
- Reply to comments
- Delete own comments & replies

### 📝 Post
- Create, update, delete posts
- Featured posts support
- Status-based posts (Draft / Published)
- Pagination, sorting, filtering, search
- View count tracking

### 💬 Comment & Reply
- Comment on posts
- Nested replies on comments
- Comment status control
- Comment deletion rules

### 🛡️ Admin
- Admin user seeding
- Highlight / moderate comments
- Manage users and posts
- Control comment visibility

---

## 🧰 Tech Stack

- **Node.js**
- **Express 5**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **npm**
- **Better Auth**
- **Nodemailer**

---

## 📦 Packages Used

### Dependencies
- `express`
- `@prisma/client`
- `@prisma/adapter-pg`
- `pg`
- `better-auth`
- `cors`
- `nodemailer`

### Dev Dependencies
- `prisma`
- `typescript`
- `tsx`
- `dotenv`
- `@types/node`
- `@types/express`
- `@types/pg`
- `@types/cors`
- `@types/nodemailer`

---

## ⚙️ Scripts

```bash
# Run development server
npm dev

# Seed admin user
npm seed:admin

#####==================####
Prisma Commands
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Open Prisma Studio
npx prisma studio


#####==================####
📂 Project Structure (Simplified)
src/
 ├── modules/
 │   ├── auth/
 │   ├── user/
 │   ├── post/
 │   ├── comment/
 │   └── admin/
 ├── routes/
 ├── services/
 ├── controllers/
 ├── middlewares/
 ├── utils/
 └── server.ts