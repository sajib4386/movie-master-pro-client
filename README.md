# 🎬 Movie Master Pro  

## Project Name
Movie Master Pro  

## Purpose  
Movie Master Pro is a modern movie website where users can explore movies, manage their personal collections, and keep track of their watchlist.

---


## Live Site
Live URL: https://movie-master-pro-2891c.web.app

---

## Features

- **Browse All Movies:** Users can view all movies in a clean and responsive card layout.  
- **My Collection:** Logged-in users can manage their personal movie collections.  
- **Watchlist:** Users can add their favorite movies to a watchlist and watch them later.  
- **Add / Update Movies:** Users can add new movies and update existing ones (private routes for authenticated users).  
- **Responsive Design:** Fully responsive design with using TailwindCSS and DaisyUI.  
- **Beautiful Animations & Alerts:** Smooth animations with Framer Motion and stylish pop-up alerts using SweetAlert2.  

---

## Tech Stack

- **Frontend:** React.js, React Router  
- **Styling:** TailwindCSS, DaisyUI  
- **Icons & Animations:** React Icons, Framer Motion  
- **Alerts:** SweetAlert2  
- **Hosting:** Firebase Hosting / Vercel  

---  

## Setup Instructions

1. Clone the client repository  
   git clone https://github.com/your-username/movie-master-pro-client.git

2. Navigate to the project directory  
   cd movie-master-pro-client

3. Install all dependencies  
   npm install

4. Run the development server  
   npm run dev

5. Open the project in your browser  
   http://localhost:5173  

---  

## Environment Variables Configuration  
Create a `.env` file in the root directory of the client project and add the following variables:  

VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain 
VITE_PROJECTID=your_firebase_project_id  
VITE_STORAGEBUCKET=your_firebase_storage_bucket  
VITE_MESSAGINGSENDERID=your_firebase_sender_id  
VITE_APPID=your_firebase_app_id  
