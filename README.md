Movie Search Chrome Extension

This Chrome extension enhances the Google search experience for movie queries by displaying detailed information about movies from the TMDB API.

> FEATURES

- Movie Search: Search for movies directly from the extension.
- Movie Details: View detailed movie information, including title, release date, overview, and poster.
- Search History: Maintain and view a searchable history of movie queries.

> INSTALLATION

  Prerequisites

   - Ensure you have [Node.js](https://nodejs.org/) and npm installed on your machine.
   - Obtain a TMDB API key from [The Movie Database](https://www.themoviedb.org/documentation/api).

> STEPS

1. Clone the Repository

   Clone the repository to your local machine using the following command:
     git clone https://github.com/Sarang-BS-6/Chrome-Extension.git

2. Install Dependencies
   npm install

3. Add your TMDB API Key in place of :
   const TMDB_API_KEY = 'YOUR_TMDB_API_KEY';

4. Build the application using :
   npm run build (Make sure you test it before building)

5. Load the Extension in Chrome
   - Open Chrome and navigate to chrome://extensions/
   - Enable "Developer mode" using the toggle in the top right corner.
   - Click "Load unpacked" and select the build directory inside your project.

> USAGE
   
1. Open the Extension

2. Click on the extension icon in the Chrome toolbar to open the popup.

3. Search for a Movie
   - Enter the name of a movie in the search bar.
   - Click the "Search" button.
   - The extension will fetch and display detailed information about the movie.
   - View Search History
      
      - The extension maintains a history of all movie queries.
      - You can view the search history in the popup.
      - Click on a movie title in the search history to view its details.


DATA FLOW :-


   ![Screenshot 2024-07-03 004318](https://github.com/Sarang-BS-6/Chrome-Extension/assets/162328333/1da717b2-6502-4751-b148-7e7cdd87bd95)
