## Frontify: A React Blog Powered by Appwrite

**Frontify** is a modern blog website built with React on the frontend and Appwrite as a Backend-as-a-Service (BaaS) solution. This combination offers a powerful and scalable architecture for managing content and user interactions.

### Technologies Used

* Frontend: React
* Backend: Appwrite
* Styling Library (e.g., Tailwind CSS)

### Features (Add features specific to your blog)

* User Authentication (Login, Signup)
* Blog Post Creation and Editing
* Markdown Support for Rich Text Editing
* User Management (Profiles, Comments) 
* Image Uploads and Storage (Appwrite Storage)

### Getting Started

**Prerequisites:**

* Node.js and npm (or yarn) installed on your system.
* A basic understanding of React and JavaScript.

**1. Clone the Repository:**

```bash
git clone https://github.com/alok-x0s1/frontify.git
```

**2. Install Dependencies:**

```bash
cd frontify
npm install
```

**3. Appwrite Configuration:**

* Create an Appwrite instance or use an existing one. 
* Update the `.env` file with your Appwrite project information:

```
VITE_APPWRITE_URL = YOUR_APPWRITE_URL
VITE_APPWRITE_PROJECT_ID = YOUR_APPWRITE_PROJECT_ID
VITE_APPWRITE_DATABASE_ID = YOUR_APPWRITE_DATABASE_ID
VITE_APPWRITE_COLLECTION_ID = YOUR_APPWRITE_COLLECTION_ID
VITE_APPWRITE_BUCKET_ID = YOUR_APPWRITE_BUCKET_ID
```

**4. Development Server:**

```bash
npm run dev
```

This will start the development server, typically accessible at http://localhost:5173 by default.

**5. Build for Production:**

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

### Contributing

We welcome contributions to this project! Please see the CONTRIBUTING.md file for guidelines on how to contribute.
