/* 
Fundamentals concept
npx parcel index.html : creates development build and it hosting on 1234 port
npx means in above command execute parcel package with source file index.html
-how to create scripts in react?
1. package.json in section "scripts" you can add new scripts
2. Added new scripts  "start": "parcel index.html",
    "build": "parcel build index.html", 
3. to run scripts npm run start (npm run start == npm start * It will work only for start script)
What is react elements?
React elements is nothing but dom elements.
const heading = React.createElement("h1", {id: "heading"}, "Namaste React !");
CerateElement function creates an object when we render its on to DOM then it becomes html element. 
by default its not HTML element. It was an object.
It will replace by root html elements
JSX : Javascript syntax tto create react element 
When we are using React.createElement then code becomes clumsy so for developer community Facebook developers
developed JSX elements like HTML elements
JSX is not part of React it is separate part. = HTML + JAVASCRIPT
We can develop application  without JSX.
Earlier Web APP before React
HTML : skeleton of page
JAVASCRIPT :  logic ex: onclick of button
CSS : Styling class.
React is trying to merge all three thing together in one file. JSX is not HTML in javascript. JSX looks like HTML.
JSX is different syntax.
JSX elements is equivalent to React Elements.
Programmer write codes for first humans and later for machines
JSX =>(transpiler) parcel => Babel => ECMA script code => JS Engine => Browser 
JSX code => React element => JAvascript Object => Html element
Babeljs.io : explore sites
Babel is javascript compiler 
Difference between JSX and HTML element
1. When you esh to give class to tag then in HTML we write class="abc" & in JSX we can write className="abc".
2. JSX : camelCase Attributes : tabIndex
3. If you re write multiple lines in JSX then wrap it into parenthesis ( ) because Babel will understand where start
and endpoint of JSX.

Extensions : 
#Prettier - Code Formatter : Prettier is an opinionated code formatter.
 It enforces a consistent style by parsing your code and re-printing 
it with its own rules that take the maximum line length into account, wrapping code when necessary.
#Bracket Pair Colorization Toggler -
#Eslint - The extension uses the ESLint library installed in the opened workspace folder.
#BetterComments :  The Better Comments extension will help you create more human-friendly comments in your code.
With this extension, you will be able to categories your annotations into:

### REACT COMPONENT ###
There are two components in react
1. Class based component - OLD way
2. Functional component - NEW way - Is is just javascript normal arrow function which returns some JSX
element / React element
3. { } We can write javascript code in to this 

Component Composition : Two component composing inside component.
const HeadingComponent = () =>{
    return (
        <Title />
    )
};
You can use normal javascript inside component
Your Code is readable thats why react is fast application.
Write purpose of code 












*/