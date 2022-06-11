import { BrowserRouter, Route, Routes } from "react-router-dom"
import { OldTodoPage } from "../components/pages/OldTodoPage"
import { TodoListPage } from "../components/pages/TodoListPage"


export const TodoRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<TodoListPage />} />
        <Route exact path='/oldtodos' element={<OldTodoPage />} />
      </Routes>
    </BrowserRouter>
  )
}