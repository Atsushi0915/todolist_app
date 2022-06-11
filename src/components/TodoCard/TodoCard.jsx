export const TodoCard = (props) => {
  const { children, 
          cardHeadColor,  
          cardBodyColor, 
          cardTitle, 
          cardMessage } = props
  
  return (
    <div className="card my-2" >
      <h4 className="card-header" style={{backgroundColor: cardHeadColor}}>{cardTitle}</h4>
      <div className="card-body" style={{backgroundColor: cardBodyColor}}>
        <h6 className="pb-2">{cardMessage}</h6>
        <ul className="list-unstyled">
          {children}
        </ul >
      </div>
    </div>
  )
}