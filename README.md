# Project Title

## Overview

This project is a web application designed to help users select the appropriate skip service based on their location and requirements. The application is built with modern React (using functional components and hooks) and TypeScript, leveraging best practices and libraries such as React Query for data fetching and Tailwind CSS for styling.

## Features

- **Skip Selection:** Browse available skip sizes and select the one that suits your needs.
- **Permit Management:** Depending on the skip placement (public or private), the app guides users through the permit process.
- **Responsive UI:** Built with Tailwind CSS to ensure a responsive design across devices.
- **Efficient Data Fetching:** Uses React Query to handle API requests, caching, and error management.
- **State Management:** Utilizes React hooks and a component-based architecture for clean, maintainable state management. since this project was not a high scale project with massive prop drilling and since the components are closely related, I opted for a simpler approach using react hooks like useState and useReducer

## Tech Stack

- **React** (Functional Components & Hooks)
- **TypeScript** for type safety and maintainability
- **React Query** for data fetching, caching, and background updates
- **Tailwind CSS** for rapid, responsive styling
- **React Icons** for iconography

## Architecture & Approach

- **Component-Based Design:**  
  The application is divided into modular components (e.g., `SelectSkip`, `SELECT`, `PERMIT`, `SkipCard`). Each component is responsible for a specific part of the UI and logic.
- **State Lifting & Prop Drilling:**  
  The main state (e.g., selected skip, current step) is managed in the top-level `SelectSkip` component. This state is then passed down to child components via props to ensure data consistency and easy navigation.
- **Data Fetching with React Query:**  
  The application fetches skip data from an external API using React Query. This provides built-in caching, error handling, and refetching, reducing the need for manual state management related to API calls.
- **Conditional Rendering:**  
  The UI changes dynamically based on user interaction. For example, when a skip card is selected, it is highlighted with a light purple border; and based on the selected option, the permit section appears or disappears.
- **Responsive & Accessible Design:**  
   Tailwind CSS ensures that the application layout is responsive and optimized for various screen sizes. Accessibility considerations are built into the design to improve usability.
  **Performance and UI changes**:
  - Lazy loading for non-critical assets
  - realised what skips were from the begining due to my civil engineering background and decided to add skip images per sizes to create a more visually appealing and understandable webpage
  - Optimized image assets by converting images to easily readable formats for browsers like webp and avif and completely reducing their sizes
  - made cards smaller and have a more rounded edge to improve the overall UI look
  - added a summary of selected skip options for easy readability by user before clicking to go to this next page
  -
