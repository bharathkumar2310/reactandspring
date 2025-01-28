import Welcome from "./Welcome";
import Name from "./Name";
import UserCard from "./UserCard";
import CounterApp from "./CounterApp";
import ToDoListApp from "./ToDoListApp";
import Calculator from "./Calculator";
import ConditionalRendering from "./ConditionalRendering";
import ApiAndUseEffectHook from "./ApiAndUseEffectHook";
function Header() {
    const today = new Date().toDateString();
    const time = new Date().toLocaleTimeString();
    return(

        <div>
            <h1> Hello this is Header Component</h1>
            <Welcome  today={today} time ={time} />
            <Name name ="John"/> 
{/* 
            <UserCard name = "John" age = "10"  hobby = "cricket"/>
            <CounterApp/>
            <ToDoListApp/>
            <Calculator/>
            <ConditionalRendering/> */}
            <ApiAndUseEffectHook/>
            
        </div>
    );
}
export default Header