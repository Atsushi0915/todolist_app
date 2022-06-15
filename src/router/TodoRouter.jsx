import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DefaultLayout } from "../components/layout/DefaultLayout";
import { OldTodoPage } from "../components/pages/OldTodoPage";
import { TodoListPage } from "../components/pages/TodoListPage";
import { TopPage } from "../components/pages/TopPage";


export const TodoRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<TopPage />} />
        <Route exact path='/todos' element={
          <DefaultLayout >
            <TodoListPage />
          </DefaultLayout>} />
        <Route exact path='/oldtodos' element={
          <DefaultLayout>
            <OldTodoPage />
          </DefaultLayout>} />
      </Routes>
    </BrowserRouter>
  )
}