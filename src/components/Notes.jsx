import React from 'react';

function Notes() {

    let example = "{{ color: red }}";
    let bracket = "{}";

    return (
        <div id="notes" className="container-fluid">
            <h1>Notes</h1>
            <ul>
                <li>React uses Babel to convert Next Gen Javascript into Javascript that every browser can read</li>
                <li>When add attributes to HTML Elements in JSX use className (class works but will show an error in console) and camel casing for regular attributes so they work</li>
                <li>Wrap Javascript Expressions or variables with {bracket} to display the variable in your HTML. This feature does not work for Statements. </li>
                <li>For Inline Styling in JSX use {example}  or create a variable of styles you would like to add to it as if it was a Javascript object with the style methods as the keys. This is the main reason for this and  allows you to dynamically update the styling of HTML elements. Though the use of Statements and/or directly changing your variables value.
                <br></br><br></br><a href="https://codesandbox.io/embed/react-styling-practice-hjhl2?fontsize=14&hidenavigation=1&theme=dark">Code Example</a></li>
                <li>Link to see Best Practices React/JSX guide by Airbnb - <a href="https://github.com/airbnb/javascript/tree/master/react">Click Here</a></li>
                <li>Set up components to make your code clean and easily readable. Make sure you have all your components in your components folder imported into the App component and then import the App component into your JS file to render so all the sections load.</li>
            </ul>
        </div>
    );
}

export default Notes;