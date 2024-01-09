import AddTask from "@/features/AddTask";
import Tasks from "@/entities/Tasks";
import { getAllTodos } from "@/shared/api/TaskApi";


export default async function Home() {
  const tasks = await getAllTodos()
  return (
    <main className="max-w-4xl mx-auto mt-4">

        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold"> ToDo list app for learning next 14</h1>
          <AddTask />
        </div>

        <div className="">
          <Tasks tasks = {tasks}/>
        </div>
          
    </main>
  )
}
