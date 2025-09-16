# pearr

A civic tech platform for discovering community enrichment programs and resources, designed to make exploration, growth, and play more accessible for everyone.

> Originally launched as **PEAR (Parent Experiences and Resources)**, pearr is a creative reimagining of the original concept with a modern tech stack, new design language, and broader audience. This solo rewrite is focused on delivering a more polished and extensible experience.

---

## 🛠️ Tech Stack

## 🛠️ Tech Stack

**Frontend (current):**  
- React (TypeScript, Vite)  
- Tailwind CSS  
- SCSS (legacy styles)  
- TanStack Query (server state)  
- shadcn/ui (planned for UI components)  

**Frontend (planned):**  
- React Native (via Expo)  

**Backend (current):**  
- Node.js + Express (TypeScript)  
- PostgreSQL (with Knex.js for queries/migrations)  
- dotenv (config)  

**Backend (planned):**  
- Redis (caching)  
- Cloudflare (CDN/proxy)  
- JWT authentication  
- File uploads  

---

## 🚀 Setup

To get started with the project:

1.  Clone the repository:
    `git clone https://github.com/tailsmonster/pearr.git`
2.  Install dependencies (both frontend + backend):
    `cd pearr/frontend && npm install`
    `cd ../backend && npm install`
3.  Run the dev servers:
    ```
    # in frontend/
    npm run dev
    # in backend/
    npm run dev

    ```

---

## 📦 Roadmap

### Milestone 1: Core Web App
- Scaffold project structure
- Integrate Tailwind + shadcn/ui
- Build landing page + program directory
### Milestone 2: Core Features
- User auth (JWT)
- File uploads (flyers, banners)
- API caching / Redis
- Admin Dashboard (manage programs, users)
### Milestone 3: Extensions
- React Native app (via Expo)
- Cloudflare deployment + caching
---

## 🧾 Acknowledgments

This project is built upon the groundwork and inspiration of the original PEAR project.  
A special thank you to the original team members: [Cris Martinez](https://github.com/CrisM05), [Allan Ramirez](https://github.com/Allancool9), and [myself](https://github.com/tailsmonster).

---

## 🔍 Legacy Version

The original PEAR project can be found in a separate repository [here](https://github.com/NCA-Association/PEAR).

---

## 🧭 License

This project is open-source under the [MIT](LICENSE.md) License.
