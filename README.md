# MovieScope

MovieScope is a modern movie discovery application built with React and Vite. It allows users to browse popular movies, view detailed information about each film, search for specific titles, and explore top-rated movies. The application features a responsive design that works well on both desktop and mobile devices.

## Features

- **Movie Discovery**: Browse trending, popular, and upcoming movies
- **Movie Details**: View comprehensive information about each movie including description, ratings, release date, and more
- **Search Functionality**: Find movies by title
- **Top Lists**: Explore top 100 popular and top-rated movies
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Movie Recommendations**: Discover similar movies based on your viewing preferences

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **React Router** - Declarative routing for React
- **Tailwind CSS** - Utility-first CSS framework
- **TMDB API** - Movie database API for fetching movie information
- **React Slick** - Carousel component for React

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/brief_moviescoper.git
   ```

2. Navigate to the project directory:
   ```bash
   cd brief_moviescoper
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. Create a `.env` file in the root directory and add your TMDB API key:
   ```env
   VITE_API_KEY=your_tmdb_api_key_here
   ```
   
   You can obtain a free API key by registering at [The Movie Database (TMDB)](https://www.themoviedb.org/settings/api).

5. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

6. Open your browser and visit `http://localhost:5173` to view the application.

## Usage

### Navigation

- **Home Page**: Features trending movies and sections for popular, top-rated, and upcoming movies
- **List Movies**: Access top 100 popular and top-rated movies from the navigation menu
- **Search**: Use the search bar to find specific movies by title
- **Movie Details**: Click on any movie poster to view detailed information about the film

### Mobile Responsiveness

The application is fully responsive and optimized for mobile devices:
- Navigation menu collapses into a hamburger menu on small screens
- Movie grids adjust to single column layout on mobile
- Text sizes and icons are appropriately scaled for mobile viewing
- Touch-friendly interface with proper spacing for mobile interactions

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run lint` - Runs ESLint to check for code issues
- `npm run preview` - Previews the production build locally

## Project Structure

```
brief_moviescoper/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and fonts
│   ├── components/      # React components
│   │   ├── SectionMovie/ # Movie section components
│   │   └── css/         # Component-specific CSS
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global CSS
├── .env                 # Environment variables
├── .gitignore           # Git ignore file
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## Environment Variables

The application requires the following environment variable:

- `VITE_API_KEY`: Your TMDB API key for fetching movie data

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them
4. Push your changes to your fork
5. Submit a pull request with a detailed description of your changes

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [React](https://reactjs.org/) for the frontend library
- [Vite](https://vitejs.dev/) for the build tool
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
