<h1 align="center">Simple Tabs</h1>


<p align="center">
  <strong>A simple React application that implements a tab component.</strong>
</p>

##  Getting Started

To use this application, follow these steps:

1. Clone the repository: `git clone git@github.com:Nik0Sp/simple_tabs.git`
2. Change directory to the project folder: `cd simple_tabs`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Usage

The application displays a set of tabs, and each tab corresponds to a specific content section. By clicking on a tab, the corresponding content section is displayed while hiding the other sections.

## Components

The main component of the application is `App`, which manages the state for the active tab and handles the tab click event.

### State

The component uses the `useState` hook to manage the following state:

- `activeTab`: Stores the index of the currently active tab.

### Event Handling

The `handleTabClick` function is called whenever a tab is clicked. It updates the `activeTab` state with the index of the clicked tab, causing the corresponding content section to be displayed.

### JSX Markup

The JSX markup in the `return` statement defines the structure and appearance of the application's user interface. It includes a set of buttons representing the tabs and a set of `<div>` elements representing the content sections. The active tab and corresponding content section are determined based on the `activeTab` state.

##  Contributions

Contributions to this project are welcome. If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

##  License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as per the license terms.