/* 
useEffect: this function is called after every render of component.
Dependency array changes the behavior of render cycle. It takes 2 arguments
1. call back function : mandatory
2. Dependency array : optional
If no dependency array that means useEffect called every render of component
If the dependency array is empty then useEffect is called on initial render and only once
If dependency array [btnNameReact] => called every time  btnNameReact changes

useState
Javascript is single threaded, synchronous language. code will execute line by line
Never create useState variable outside of the body of FC and if else,  for loop, function definition it will create inconsistency.
Try to do put all state variable always on top.
It is used for creating local state variable of FC.


## ROUTING ##
1. npm i react-router-dom
2. Whenever you have to use routes first do routing configuration using createBrowser from react-router-dom
3. Now we have to render that particular component using RouterProvider
4. If you entered wrong route or any random text then it shows 404 page not found on web page 
5. We can create our own error page using errorelement in createBrowser and useRouterError;







*/