
# Solid Web Creations - Portfolio Website

This repository contains the source code for the official portfolio website of Solid Web Creations, a web design and SEO agency based in Hanover, Ontario. The site is a modern, single-page application built with React and TypeScript, designed to showcase services, portfolio projects, and technical capabilities.

## Features

- **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS for a type-safe, scalable, and beautifully styled application.
- **Responsive Design**: Fully responsive layout that looks great on all devices, from mobile phones to desktops.
- **Smooth Animations**: Engaging user experience with subtle animations on scroll and interactive elements, implemented with Intersection Observer and CSS transitions.
- **Dynamic Portfolio**: A sleek, interactive carousel to display featured work, with detailed case study modals.
- **SEO Optimized**:
    -   Global and per-project JSON-LD structured data for rich search results.
    -   Semantic HTML5 and proper meta tags for optimal search engine crawling.
- **Netlify-Ready Forms**: Integrated contact and newsletter forms that work seamlessly with Netlify's form handling.
- **Performance Focused**: Optimized with lazy loading for images and code splitting to ensure fast load times.

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Netlify, Vercel, Render

---

## Local Development

To run the project locally, follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/solid-web-creations.git
    cd solid-web-creations
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:3000`.

### Build for Production

To create a production-ready build of the application, run:

```bash
npm run build
```

This command will generate a `build` directory with optimized static assets, ready for deployment.

---

## Deployment Instructions

This project is configured for easy deployment on several popular hosting platforms.

### 1. Netlify

Netlify is the recommended hosting platform for this project due to its seamless Git integration and built-in form handling.

#### Method A: Git Integration (Recommended)

1.  **Push your code** to a GitHub, GitLab, or Bitbucket repository.
2.  **Log in to Netlify** and select "Add new site" -> "Import an existing project".
3.  **Connect your Git provider** and select the repository.
4.  **Configure the build settings:**
    -   **Build command**: `npm run build`
    -   **Publish directory**: `build`
5.  Click **"Deploy site"**. Netlify will automatically build and deploy your application.

#### Method B: Using `netlify.toml`

For more granular control, you can add a `netlify.toml` file to the root of your project with the following configuration. Netlify will automatically detect and use this file.

**`netlify.toml`**

```toml
# Netlify build configuration
[build]
  # Build command
  command = "npm run build"
  
  # Directory to publish
  publish = "build"
  
  # Environment settings (if needed)
  # [build.environment]
  #   NODE_VERSION = "18"

# Redirect rule for Single-Page Applications (SPA)
# This ensures that all routes are handled by index.html and React Router.
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Netlify Forms

The contact and newsletter forms in this project are pre-configured for Netlify. Simply add the `data-netlify="true"` attribute to your `<form>` tag in the HTML, and Netlify will automatically handle submissions. You can view them in your Netlify site dashboard under the "Forms" tab.

### 2. Vercel

Vercel offers excellent support for React applications with zero-configuration deployments.

1.  **Push your code** to a Git repository.
2.  **Log in to Vercel** and click "Add New..." -> "Project".
3.  **Import your Git repository**.
4.  **Configure Project**: Vercel will automatically detect that it's a Create React App project and configure the settings for you.
    -   **Framework Preset**: Should be auto-detected as `Create React App`.
    -   **Build Command**: `npm run build`
    -   **Output Directory**: `build`
5.  Click **"Deploy"**. Vercel handles SPA routing automatically, so no extra redirect rules are needed.

### 3. Render

Render is another excellent platform for deploying static sites.

1.  **Push your code** to a Git repository.
2.  **Log in to Render** and go to your Dashboard.
3.  Click **"New +"** -> **"Static Site"**.
4.  **Connect your repository**.
5.  **Configure the settings:**
    -   **Name**: Give your site a name.
    -   **Build Command**: `npm run build`
    -   **Publish Directory**: `build`
6.  **Add a Rewrite Rule for SPA**: This is crucial for React Router to work correctly on direct navigation.
    -   Scroll down to the **"Redirects/Rewrites"** section.
    -   Click **"Add Rule"**.
    -   **Source**: `/*`
    -   **Destination**: `/index.html`
    -   **Action**: `Rewrite`
7.  Click **"Create Static Site"**.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
