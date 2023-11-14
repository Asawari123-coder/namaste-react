/* 
    #Best Practices
    1. Don't write code in single file. Make small code in one particular file
    2. Folder structure : src
    3. Make separate file for each component.
    4. Always use file extension .js and while importing no need to add extension
    5. Never ever use hard coded data and put it into mockData.js in separate file
    6. Should not exceed more than 100 lines in each file
    7. Keep it your component small


    There are 2 types of export import
    1. Default export import
    2. Named export import 

    Default export import 
    syntax :  export default component_name / variable_name
    import Component_name from 'file'
    In file only one default export 

    Named import export 
     Suppose you have to use multiple exports in same file then you can use named export 
    syntax : export variable name :  declaration
    import { variable_name } from 'file name'; : usage


    Part2 
    MAke our website Dynamic 
    Top Rated Restaurants
    Button => Click =>  filtered with rating more than 4
    Config driven UI

    # React Hooks
    React is fast and efficient in DOM manipulation. UI layer and Data layer should be consistent React solving this problem
    Virtual DOM
    React super power is state variables.
    Hook is nothing but its just normal utility javascript function.
    functional component is normal javascript function.
    React element is javascript object.
    As soon my list of restaurants is changes my UI is 
    Whenever state variable updates React rerender component
    useState returns array 
     const arr =useState(resList)
     const [listOfRestaurants, setListOfRestaturant] = arr;
     const listOfRestaurants = arr[0];
     const setListOfRestaturant = arr[1];

     we are doing destructuring on fly.  

    #React algorithm
    React uses algorithm reconcilation known as React Fiber algorithm.
    ex: Res container contains 15 cards. Now suppose after filtering it should be 7 cards. 
    While doing this its stored it into Virtual DOM. Virtual DOM is nothing but representation of actual DOM.
    Virtual Dom contains react element. 
    DIFf Algorithm : it finds out difference between updated DOM and previous DOM.
    Its same like git diff command.






*/