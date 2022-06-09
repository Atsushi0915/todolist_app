import React, { memo } from 'react';


export const InputTodo = memo((props) => {
  
  const { todoText, onClick, onChange, disabled } = props;

  return(
    <>
      <div className="d-flex flex-row alert alert-info mb-2">
        <input disabled={disabled} placeholder='TODOを入力' value={todoText} onChange={onChange} className="form-control w-50 pr-3" />
        <button disabled={disabled} onClick={onClick} className="btn btn-primary mx-2">追加</button>
      </div>
    </>
    
  )
})