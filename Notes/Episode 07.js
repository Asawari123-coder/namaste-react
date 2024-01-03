/* 
useEffect: this function is called after every render of component.
Dependency array changes the behavior of render cycle. It takes 2 arguments
1. call back function : mandatory
2. Dependency array : optional
If no dependency array that means useEffect called on every render of component
If the dependency array is empty then useEffect is called on initial render and only once
If dependency array [btnNameReact] => called every time  btnNameReact changes

useState
Javascript is single threaded, synchronous language. code will execute line by line
Never create useState variable outside of the body of FC and if else,  for loop, function definition it will create inconsistency.
Try to do put all state variable always on top of component.
It is used for creating local state variable of FC.


## ROUTING ##
Part3
1. npm i react-router-dom
2. Whenever you have to use routes first do routing configuration using createBrowser from react-router-dom
3. Now we have to render that particular component using RouterProvider
4. If you entered wrong route or any random text then it shows 404 page not found on web page 
5. We can create our own error page using errorelement in createBrowser and useRouterError;

part4
How can we make children routes
1. First add property children and in that add all paths and use Outlet

How can we Link our routes ?
There are two approaches 
1. We can use Anchor tag <a> </a> because when we are doing this way the whole page is got refreshed
2. Without reloading page we can use Link component
Single Page application : Component interchange no whole page is not get reloading 

2 types of routing
1. Client side routing : React using this approach 
2. Server side routing : makes network call -> get the data -> fetch page -> renders page -> refresh  

Part 5
Never use ternary operator blindly
to read id from routes we have super power provided by react-router-dom is useParam hook 
Link and anchor tag is different it is wrapper over anchor tag . It did not refresh the evrytime when 
you click on. Behind the scene it is anchor tag because broser did not 








*/