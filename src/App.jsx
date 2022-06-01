import React from 'react'

export const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="bg-dark text-white p-2 my-2 ">
          <h2>TODOリスト</h2>
        </div>
        <div className="d-flex flex-row alert alert-info mb-2">
          <input placeholder='TODOを入力' className="form-control w-50 pr-3" />
          <button class="btn btn-primary mx-2">追加</button>
        </div>
        <div className="alert alert-success mb-2" >
          <p className="text-center text-dark">未完了のTODO</p>
          <ul className="list-unstyled">
            <div className="d-flex flex-row align-items-center my-2">
              <li>ああああaaaaaa</li>
              <button className="btn-sm btn-primary mx-2">完了</button>
              <button className="btn-sm btn-warning">未完了</button>
              </div>
            <div className="d-flex flex-row align-items-center my-2">
              <li>いいいい</li>
              <button className="btn-sm btn-primary mx-2">完了</button>
              <button className="btn-sm btn-warning">未完了</button>
            </div>
          </ul >
        </div>
        <div className="form-group alert alert-warning">
          <p className="text-center text-darkss">完了のTODO</p>
          <ul className="list-unstyled">
            <div className="d-flex flex-row align-items-center my-2">
              <li >うううう</li>
              <button className="btn-sm btn-success mx-2">戻す</button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

