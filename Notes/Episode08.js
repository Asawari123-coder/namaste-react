/* 
Why Class based on Component ?
1. Interview
2. Understanding of React is much deeper and stronger
3. It will exact React work. 

Part 01
Here in About US page we will showcase Team member information using Github API and class based component

Part 02
How to use state variables and props in class based component

part 03
How to update state variable in CC
Never update state variable directly. We have to use setState method

part 04
Lifecycle methods of Class component
loading : Mounting is similar
Whenever 

part 05
constructor -> render -> componentDidMount
Parent constructor -> Parent render -> Child constructor render componentDidMount -> Parent ComponentDidMount
UseCase of componentDidMount 
    - Make an API call

Render phase and Commit phase
first render phase is executed and later commit phase

part 06

----- MOUNTING --------
Constructor(dummy)
render(dummy)
    <HTML loading with dummy>
ComponentDidMount
    <API call>
    <this.setState> - state variable is updated

---- UPDATING ------
render(API data)
    <HTML with with new api data>
componentDidUpdate

---- UNMOUNTING -----
componentWillUnmount()





*/