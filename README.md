# GitHub Search App

A web application that allows users to search for GitHub users and repositories using the GitHub API. The app features two main routes: one for searching users and another for searching repositories, with results displayed on the same page. The application provides a clean, mobile-first design, and is deployed for easy access.

Explore the app here: [GitHub Search App](https://search-gh-app.netlify.app/)

## Features

- **Search GitHub Users**: Enter a GitHub username to view a list of matching users with relevant details.
- **Search GitHub Repositories**: Search for repositories based on a keyword or name.
- **Mobile-First Design**: Optimized for a smooth experience on mobile devices but responsive for all screen sizes.
- **Clean User Interface**: Intuitive design using Chakra UI components for styling.
- **Fast Loading**: Implemented lazy loading and prefetching to improve the user experience.
- **Deployed on Netlify**: Easily accessible from any browser.

## Technology Stack

- **React**: For building the user interface and managing state.
- **Chakra UI**: Component library for creating a clean and responsive design.
- **React Router**: For routing and navigation between pages.
- **React Query**: For fetching data from the GitHub API and caching results.
- **GitHub API**: For querying user and repository data.
- **Netlify**: For deployment and hosting.

## Installation and Setup

### Prerequisites

- Node.js (v16 or higher)
- Git

### Clone the repository

```bash
git clone https://github.com/marianaLz/github-search-app.git
cd github-search-app
```

### Install dependencies

```bash
npm install
```

### Run the application locally

```bash
npm run dev
```

This will start the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build for production

```bash
npm run build
```

This will create an optimized production build in the `dist/` directory.

## Deployment

The application is deployed on Netlify. You can deploy your own version by following these steps:

1. Create a [Netlify](https://www.netlify.com/) account.
2. Link your GitHub repository to Netlify.
3. Set the build command as `npm run build` and the publish directory as `dist/`.
4. Deploy the site.
