import React, {useState} from 'react'

export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [inconpleteTodos, setInconpleteTodos ] = useState([])
  const [conpleteTodos, setConpleteTodos] = useState([])

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value)
  }

  const onClickAdd = () => {
    if (todoText === "") return; 
    const newTodos = [...inconpleteTodos, todoText]
    setInconpleteTodos(newTodos)
    setTodoText('')
  }

  const onClickDelete = (index) =>{
    const newTodos = [...inconpleteTodos]
    newTodos.splice(index, 1)
    setInconpleteTodos(newTodos) 
  }

  const onClickConplete = (index) =>{
    const newinconpleteTodos = [...inconpleteTodos]
    newinconpleteTodos.splice(index,1)
    const newconpleteTodos = [...conpleteTodos, inconpleteTodos[index]]
    setInconpleteTodos(newinconpleteTodos)
    setConpleteTodos(newconpleteTodos)
  }

  const onClickBack = (index) => {
    const newConpleteTodos = [...conpleteTodos]
    newConpleteTodos.splice(index,1)
    const newInconpleteTodos = [...inconpleteTodos, conpleteTodos[index]]

    setConpleteTodos(newConpleteTodos)
    setInconpleteTodos(newInconpleteTodos)
  }


  return (
    <>
      <div className="container-fluid">
        <div className="bg-dark text-white p-2 my-2 ">
          <h2>TODOリスト</h2>
        </div>
        <div className="d-flex flex-row alert alert-info mb-2">
          <input placeholder='TODOを入力' value={todoText} onChange={onChangeTodoText} className="form-control w-50 pr-3" />
          <button onClick={onClickAdd} className="btn btn-primary mx-2">追加</button>
        </div>
        <div className="alert alert-success mb-2" >
          <p className="text-center text-dark h3 mb-3">未完了のTODO</p>
          <ul className="list-unstyled">
            {inconpleteTodos.map((todo,index)=>{
              return(
                <div key={todo} className="d-flex flex-row align-items-center my-2">
                  <li>{todo}</li>
                  <button onClick={() => onClickConplete(index)} className="btn-sm btn-success mx-2">完了</button>
                  <button onClick={() => onClickDelete(index)} className="btn-sm btn-danger">削除</button>
                </div>
              )
            })}
          </ul >
        </div>
        <div className="form-group alert alert-warning">
          <p className="text-center text-darkss h3 mb-3">完了のTODO</p>
          <ul className="list-unstyled">
            {conpleteTodos.map((todo, index) => {
              return(
                <div key={todo} className="d-flex flex-row align-items-center my-2">
                  <li >{todo}</li>
                  <button onClick={() => {onClickBack(index)}} className="btn-sm btn-warning mx-2">戻す</button>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

