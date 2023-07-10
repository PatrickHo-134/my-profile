# Vinh Phat Ho (Patrick) - Profile
This is now my main profile which is built using React.js. Please follow this [link](https://patrickho-134.github.io/my-profile/) to access my profile page

The original profile was built using an HTML template, then I converted it to a React project. The repo of original profile can be found [here](https://github.com/PatrickHo-134/portfolio) and the original [site](https://patrickho-134.github.io/portfolio/) is now abandonned.

These are 2 articles that I use to convert my profile from an HTML template to a React.js project:
- [How to create your portfolio website using React.js](https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/) - This is the main source that I use for this project.
- [Converting Templates to React Project](https://medium.com/tech-that-works/converting-templates-to-react-project-b737b0456fb8) - Additional resource which provides more details and coincidently it uses the same HTML template the I used for my original profile.

## A brief description of the steps I did in this project:
### 1. Setting up React-app
- Install `npm` and `create-react-app` (if they are not installed yet).
- Start a new React project by running `npm create-react-app my-profile`
- Copy all resources including images, HTML, and CSS files from old directory to the new project.
- Start the React app on `localhost`. The app should run on `https://localhost:3000`

### 2. Breaking-down the HTML page into React components
- Convert all sections of the HTML template into React components including NavBar, Hero, About, Skills, Resume, Blogs, Certificates, Hobbies and Contact.
- Combine all those components to make the profile page

### 3. Deploy React-app to Github pages
- Install `gh-pages` package by running `npm install gh-pages`
- Make changes to `package.json` file.
     - Add the `homepage` field — value will be in the following format — `https://{github_id}.github.io/{github_repo}`
     - Add predeploy and deploy fields under `scripts`
- In a terminal, run `npm run deploy` and the app will be deployed to Github.


