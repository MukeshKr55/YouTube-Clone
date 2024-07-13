# YouTube Clone

A YouTube clone built with React and TypeScript, utilizing modern web technologies like Tailwind CSS for styling and various React hooks for state management.

## Table of Contents
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Components](#components)

## Features
- Display categories and videos dynamically
- Video hover effects and auto-play previews
- Sidebar with collapsible sections
- Search functionality with full-width search bar toggle

## Folder Structure
├── src/
│   ├── assets/
│   │   └── youtube_logo.png
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── CategoryPills.tsx
│   │   └── VideoItem.tsx
│   ├── context/
│   │   └── SidebarContext.tsx
│   ├── data/
│   │   ├── home.ts
│   │   └── sidebar.ts
│   ├── layouts/
│   │   ├── PageHeader.tsx
│   │   └── Sidebar.tsx
│   ├── utils/
│   │   ├── formatDuration.ts
│   │   └── formatTimeAgo.ts
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx


## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/youtube-clone.git
   cd youtube-clone
   ```
2. Install dependencies:
   ```bash
   npm install
 ```
3. Run the development server:
      ```bash
   npm run dev
 ```

## Components

### App.tsx
The root component that sets up the main layout, including the `PageHeader`, `Sidebar`, and the main content area which displays the `CategoryPills` and `VideoItem` components.

### Button.tsx
A customizable button component with different variants and sizes, utilizing `class-variance-authority` for styling variations.

### CategoryPills.tsx
A component that displays categories as pills. Users can scroll through the categories and select one to filter the videos displayed.

### VideoItem.tsx
A component that displays individual video items, including thumbnail, title, channel information, views, and duration. Videos auto-play on hover.

### PageHeader.tsx
The header component that includes the logo, search bar, and user action buttons (e.g., upload, notifications).

### Sidebar.tsx
The sidebar component that includes links to various sections like Home, Subscriptions, Library, and dynamically loaded playlists and subscriptions.

### SidebarContext.tsx
A context provider for managing the sidebar's open/close state across the application.
