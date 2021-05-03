# Poketch

## About this project: 
This project is a counter to keep track of Shiny Hunting in the Pokemon games. It is being built with both offline players and streamers in mind.
It was created as an open source project so that future developers can continue to add and change features so the project doesn't die. 

## Developers
This project is being built in React.js using Typescript. There are plans to have a dotnet core microsevice backend in the future. Please feel free to make a pull request into the repository, or ask Snowcart for repo access. We still require pull requests to be made to the dev branch. Do not commit directly to the dev branch.

### Arcitecture
There is a master object kept inside a context in the root of the application. This master object holds current hunts, and past hunts of the user. When it is updated it gets saved into the browser's local storage. The user can export this file as a JSON file, and import JSON files to move across browsers as a temp workaround. All paged components will access this context.

### Paged Components
Paged components are components that take reusable components and render them. They handle the logic of the page. Using a lego analogy, these components are the instructions on how to build the set. They are the containers of reusable components. They are not necessarily generic, but can be. They generally do not take props because of their dependency on Context.

### Reusable Components
These components should be able to be reused everywhere. They are completely generic and should only need the props they take. In the lego analogy they are the bricks used. Their only dependency should be the props they take.

### Handling global state
The global state can be accessed from any paged component. It is accessed through context like this: `const context = React.useContext(userDataContext);`. This context object now holds the global state, and all relevent functions in it.

In the global state there is a `UserData` object that holds two arrays of hunts. The `completedHunts` and `currentHunts`. There are also helper functions stored in this global context, and those helper functions are the only way this data should ever be updated, as any other manipulation of the data will not be saved to global state.

There is: 
- addActiveHunt: this adds a new Hunt Object to the `currentHunts` array
- finishHunt: this takes a hunt Id and the hunt from `currentHunts` to `completedHunts`
- addFinishedHunt: this takes a hunt object, and adds it to the `completedHunts` array
- removeActiveHunt: this takes a hunt id and removes the hunt from `currentHunts` array
- removeFinishedHunt: this takes a hunt id and removes the hunt from `completedHunts` array

Every time any of these functions are called, the data will update in the local storage, and will persist across application refreshes and browser closing for the most part.

### Coding Standards:
- Use Functional Components, do not use Javascript Classes
- Use hooks where appropriate
- Use the included prietter and follow the eslint rules; make sure your eslint is working
- Use context in a interface/hook handler solution
- Styles to be done using Styled Components so components handle themselves completely
