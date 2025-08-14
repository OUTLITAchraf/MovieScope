export default function About() {
  return (
    <div className="min-h-screen text-white py-10 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold border-b border-gray-700 pb-2">
          About This Website
        </h1>

        <p className="text-lg leading-relaxed text-gray-300">
          Welcome to <span className="font-bold text-xl text-[#0097b2]">MovieScope </span> — 
          your personal gateway to the world of cinema.  
          Here you can explore trending movies, check ratings, discover upcoming releases, 
          and dive deep into detailed movie information.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          We use the{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            TMDb API
          </a>{" "}
          to bring you accurate and up-to-date movie data, including ratings, trailers, 
          cast details, and more.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Top Rated, Popular, and Upcoming movie lists</li>
          <li>Detailed movie pages with synopsis, ratings, and production info</li>
          <li>Search functionality to quickly find your favorite films</li>
          <li>Responsive design for mobile, tablet, and desktop</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">About the Developer</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          This website was built by <span className="font-semibold">OUTLIT Achraf</span> using React, Tailwind CSS, and modern web technologies. The goal was to create a fast, visually appealing, and easy-to-use platform for all movie lovers.
        </p>
      </div>
    </div>
  );
}
