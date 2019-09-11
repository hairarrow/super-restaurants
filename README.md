This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) _Even though it's [explicitly prohibited in this project's brief](https://github.com/superformula/frontend-test#tech-stack)_. In lieu of that blatant disregard of the rules, I thought I would make up for it by hitting all of the [items on the **Bonus** section](https://github.com/superformula/frontend-test#bonus) to have this repository as a useful scaffold for future applications.

To meet the requirements of this challenge, this project uses **React ^16, Styled Components, and Apollo** to create highly composable modules. In order to make this into a scaffold for future projects, I've also configured a variety of developer experience focused tools like **TypeScript, Prettier, TSLint, and Storybook** with addons for **component documentation (Knobs), accessibility testing (A11y)**, and integrated **Jest** results.

# TODO

- [ ] Define each module file (e.g. `Module.stories.tsx`)
- [ ] Optimize the categories query by creating a custom resolver that will filter non-restaurant or food related categories

## Set Up

Before you run the project, please make sure you've installed the latest version of Yarn.

1. Install firebase-cli and login with your account. **Note: This requires permission to the firebase project for this repo (Ask [Emmanuel](mailto:hello@hairarrow.dev)), or a cloned Firebase project you have permissions to.**

```
$ npm install -g firebase-tools (or yarn global add firebase-tools)
$ firebase login
```

2. Install dependencies. This command will install everything you need to run the server, client, and create the configuration for the firebase functions.

```
$ yarn
```

3. Rename `env.default` to `.env` and make sure you have a valid `API_SECRET` from **Yelp**. If you have access to the firebase project, you should have the development secret in `functions/.runtimeconfig.json`

4. **`yarn start`**

## Structure

## Developer Experience

### IDE

Use whatever makes you the fastest, but I highly recommend using an IDE that supports intelligent code completion. The plugins I'll recommend here are specific to [VS Code](https://code.visualstudio.com) which includes IntelliSense (code completion), embedded Git, and a variety of tools that facilitate debugging and refactoring... but it runs on Electron 😅.

The entirety of the code in this project is written in _TypeScript_ which often means you're more than likely going to have to write a significant amount of _CSS_ and _GraphQL_ using a `*.ts` file instead of the appropriate `.graphql` or `.s?css` file. There are a variety of extensions available for _VS Code_ that enable appropriate syntax highlighting for these kinds of code.

### Extensions

These can all be found by searching for their name in the VS Code Marketplace

- **TSLint** to check code for readability, maintainability, and functionality errors
- **Prettier** to enforce a consistent code-style
- **Apollo GraphQL** to add syntax highlighting to GraphQL templates, get instant feedback and intelligent autocomplete for fields, arguments, types, and variables as you write queries.
- **vscode-styled-components** to add syntax highlighting CSS in styled-components
- **Debugger for Chrome** to improve debugging experience
- **Jest** to automatically run tests in the background
- **JavaScript Booster** which provides various code actions (quick fixes) when editing TS code. (e.g. Replace string with template strings, add braces to arrow function)
- **Vim**: _gottagofast_ (Try **amVim** if you notice any input lag)

> All formatting discrepancies and most TSLint errors can be automatically fixed whenever a file is saved. To do this in VS Code add the following to your `settings.json`.

```
{
	"editor.codeActionsOnSave": {
		"source.fixAll": true
	},
	"editor.formatOnSave": true,
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
