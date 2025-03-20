# Mentor@ - Career & Mindset Coaching

Mentor@ is a web application that provides career and mindset coaching through AI-powered insights and professional human coaches. Users can engage in live chats, read valuable resources, and access expert guidance to improve their personal and professional lives.

## 🚀 Features

- **AI-Powered Coaching**: Get career and mindset insights instantly.
- **Human Experts**: Connect with professional career and mindset coaches.
- **Live Chat**: Engage in real-time conversations with AI and human mentors.
- **Blog & Resources**: Read expert articles on career growth and mental resilience.
- **Social Authentication**: Sign in using Google, Facebook, or Email/Password.
- **Fully Responsive**: Designed to work seamlessly across devices.

---

## 📁 Project Structure

```plaintext
mentor@
│── src/
│   ├── app/
│   │   ├── page.tsx             # Homepage
│   │   ├── about/page.tsx       # About Page
│   │   ├── chat/page.tsx        # Chat Page
│   │   ├── auth/
│   │   │   ├── signin/page.tsx  # Authentication Page
│   │   ├── pricing/page.tsx     # Pricing Page
│   │   ├── faq/page.tsx         # FAQ Page
│   │   ├── contact/page.tsx     # Contact Page
│   │   ├── dashboard/page.tsx   # User Dashboard
│   │   ├── blog/page.tsx        # Blog Page
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/route.ts  # NextAuth authentication API
│   │   │   ├── chat/route.ts    # Chat API routes
│   ├── components/              # UI Components
│   ├── lib/                     # Utility and helper functions
│   ├── styles/                  # Global styles
│── public/                      # Static assets (logos, favicons, etc.)
│── .env.local                    # Environment variables
│── next.config.js                 # Next.js Configuration
│── tailwind.config.ts             # Tailwind Configuration
│── README.md                      # Project Documentation
│── package.json                    # Dependencies and Scripts
```

## ⚙️ Setup & Installation

## 🛠 Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (>= 18.x) 👉 [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** 👉 Installed with Node.js (or install [Yarn](https://yarnpkg.com/))
- **Git** 👉 [Download Git](https://git-scm.com/)

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/carlylechia/ai-career-coach.git
cd ai-career-coach
```

## 2️⃣ Install Dependencies

```sh
npm install
# or
yarn install
```

### 3️⃣ Configure Environment Variables

Create a `.env.local` file at the root of the project and add the following:

```env
# NextAuth Config
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Facebook OAuth
FACEBOOK_CLIENT_ID=your_facebook_client_id
FACEBOOK_CLIENT_SECRET=your_facebook_client_secret
```

Replace your_*_id and your_*_secret with the actual values from Google and Facebook developer portals.

### 4️⃣ Run the Development Server

Run the following command to start the development server:

```sh
npm run dev
# or
yarn dev
```
The app should now be running on http://localhost:3000.

## 🔐 Authentication

Mentor@ uses **NextAuth.js** for authentication. Supported providers:

- **Google**
- **Facebook**
- **Email/Password (Credentials Auth)**

### Setting Up Authentication
1. Ensure you have valid OAuth credentials for **Google** and **Facebook**.
2. Store them in the `.env.local` file.
3. The authentication logic is handled in `src/app/api/auth/[...nextauth]/route.ts`.

---

## 📜 Available Scripts

| Script          | Description                                      |
|----------------|--------------------------------------------------|
| `npm run dev`  | Starts the development server.                  |
| `npm run build`| Builds the application for production.          |
| `npm run start`| Runs the built application.                     |
| `npm run lint` | Lints the project files.                        |

---

## 🧪 Testing

### Running Tests
This project uses **Jest** and **React Testing Library** for testing. To run tests, use:

```sh
npm test
```
# Or with yarn:
```bash
yarn test
```
## 📝 Writing Tests

- Unit tests go inside the `src/__tests__/` directory.
- Ensure all components and utilities have test coverage.

---

## 🚀 Deployment

### Deploying to Vercel

#### 1️⃣ Install Vercel CLI:

```sh
npm install -g vercel
```
### 2️⃣ Link your project:

```sh
vercel link
```
### 3️⃣ Deploy:
```sh
vercel deploy
```
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🚀 Deploying to Other Platforms

You can also deploy Mentor@ on:

- **Netlify**
- **AWS**
- **DigitalOcean**
- **Render**

Ensure environment variables are set up in your hosting provider.

---

## 🤝 Contributing

1. **Fork the repository.**
2. **Create a new branch:**

   ```sh
   git checkout -b feature-name
    ```
3. **Make changes and commit:**

    ```sh
    git commit -m "Add new feature"
    ```
4. **Push to your branch:**

    ```sh
    git push origin feature-name
5. **Open a Pull Request.**

## 📄 License

This project is licensed under the **MIT License**.

---

## 🌟 Acknowledgments

- **Next.js** for providing an amazing React framework.
- **Tailwind CSS** for modern UI styling.
- **NextAuth.js** for easy authentication.
- **OpenAI** for AI-driven insights.
- **All contributors** who help improve this project!

---

## 📞 Contact

For any inquiries, feel free to reach out:

- **Email**: [support@mentorapp.com](mailto:support@mentorapp.com)
- **Twitter**: [@MentorApp](https://twitter.com/MentorApp)
- **LinkedIn**: [Mentor@ LinkedIn](https://linkedin.com/company/mentorapp)

