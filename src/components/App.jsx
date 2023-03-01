import { StatusFilter } from "./StatusFilter/StatusFilter";
import { TaskList } from "./TaskList/TaskList";
import { TaskForm } from "./TaskForm/TaskForm";
 function App() {
   return ( 
     <>
       <h1>Redux App</h1>
       <TaskForm />
       <StatusFilter />
       <TaskList />
     </>
   );
 }
 
 export default App;
