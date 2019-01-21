# Geckos-Team-05

we dem geckos | Voyage-7 | https://chingu.io/

## Team:
@Lauren Fosgett, 
@Jaffacake, 
@rachel, 
@Stu Finn

## Developer instructions

### Setup

Assuming the Chingu-team-5 repository is already downloaded/cloned to your local machine, perform a `git pull` to make sure everything is up to date.

With the feature/addNodeJS branch checked out, open the terminal and run `npm install`.  This will download all of the project's dependencies into the node_modules folder.

### To run the server

In the terminal run `node server.js` to start up the server. It's configured to run on port 3000. Now open a browser and navigate to http://localhost:3000/ in order to view the live, locally-hosted website!

Alternatively, you can run `nodemon server.js` which will behave the same as above except it will live-reload when the server.js file is saved. Any HTML & CSS changes you make should be automatically reflected here too. **If nodemon is not working for you, try intalling it as a global dependency using `npm install nodemon -g`

** Note: Links to static files like image assets and the main.css file should work without issue. Many of the URLs linking to internal pages however still need be updated to `/` for the home page, `/about` for the About page, `/rooms` for the Rooms page and so on.