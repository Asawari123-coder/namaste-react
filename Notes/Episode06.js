/* 
Monolith Architecture 
Earlier we use to have big project. Its self has code of APIs, UI code, Database connectivity, authentication code.

Micro services Architecture
WE have different services for each section like UI, API, DB, Auth.
Single responsibility principle. 

DummyData -> Mock Data -> resList

Dummy Data is not good approach

#How we can fetch data dynamically (API)
There are 2 approaches
1. As soon as your app loads make an aPI call (500 ms) (lags) -> render in UI 
2. Page Loads -> Render UI (Fake UI/ Shimmer / Skeleton) -> make API call -> Rerender UI

2 nd approach it gives better UX. 
React has best render mechanism. 

useEffect : its is called as soon as component loads
component called -> then useEffect called
fetch is given by browsers not JS

*********  Code Slow ************



*/