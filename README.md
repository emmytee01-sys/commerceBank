# 💳 Commerce Bank MERN Application

A modern online banking platform built with the MERN stack (MongoDB, Express, React, Node.js). **Commerce Bank** offers a seamless, secure, and intuitive banking experience where users can manage their accounts, perform transactions, and view their financial activity—all from a beautiful, responsive dashboard. Admin controls, secure authentication, and identity verification features are included.

---

## 🚀 Features

- 🔐 **User Authentication** — Register and login securely using JWT.
- 💼 **Account Management** — View account balances and wallet details.
- 💸 **Wallet Transactions** — Credit, debit, transfer funds, and send payment requests.
- 📊 **Transaction History** — View and filter detailed transaction logs.
- 👤 **Profile Management** — Update username, email, phone, address, and password.
- 🧑‍💼 **Admin Panel** — Admin can view all registered users.
- 📂 **File Upload** — Upload ID documents for verification (via Multer).
- 📱 **Responsive Design** — Built with React and Tailwind CSS for a modern look and feel.

---

## 🛠️ Tech Stack

| Category       | Technologies                  |
|----------------|-------------------------------|
| **Frontend**   | React, Tailwind CSS           |
| **Backend**    | Node.js, Express.js           |
| **Database**   | MongoDB Atlas                 |
| **Authentication** | JSON Web Tokens (JWT)     |
| **File Uploads**   | Multer                    |

---

## 📦 Getting Started

### 1. Clone the Repository

git clone https://github.com/emmytee01-sys/commerceBank.git
cd commerceBank

## 2. Set Up Environment Variables

Create a .env file in the backend directory with the following keys:
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
SENDGRID_API_KEY=your_sendgrid_api_key
EMAIL_USER=your_email_address

## 3. Install Dependencies
----> Backend
cd backend
npm install
----> Frontend
cd ../frontend
npm install

## 4. Run the Application Locally
----> Backend
cd backend
npm start
---->Frontend
cd ../frontend
npm start

🌐 Frontend: http://localhost:3000

🔗 Backend: http://localhost:5000

## 🌍 Deployment
You can deploy the platform using the following services:

Frontend: Vercel, Netlify

Backend: Render, Railway

Database: MongoDB Atlas

## 🔌 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/wallet/accounts	Get user wallet info
GET	/api/wallet/transactions	Get user transactions
POST	/api/wallet/credit	Credit wallet
POST	/api/wallet/debit	Debit wallet
POST	/api/wallet/transfer	Transfer funds
POST	/api/wallet/request	Request payment
GET	/api/auth/profile	Get user profile
PUT	/api/auth/profile	Update user profile
GET	/api/accounts/admin/users	Get all users (admin only)

## 🔐 Security Best Practices
✅ Never push .env files or API keys to GitHub.

✅ Use strong, unique secrets for JWT and DB credentials.

✅ Enable GitHub's secret scanning and push protection.

## 📄 License
This project is licensed under the MIT License.
Feel free to use, modify, and contribute.

## 🙌 Credits
Built and maintained by Tosin Emmanuel Oke (Emmytee)
