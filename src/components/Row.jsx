const Row = ({ title, storyPoints,setTasks,id,done}) => {
    const hanleDelete = () => {
        setTasks(o => o.filter(e=>e.id !==id))

    }
    const handleStoryPoints = (diff) => {
        setTasks (o => o.map (e =>
            e.id === id ?
            {...e , storyPoints: e.storyPoints + diff}:
            e
         ))
    }
    const handleCheckPoint = (diff) => {
        setTasks (o => o.map (e =>
            e.id === id ?
            {...e , done: !e.done}:
            e
        
        ))
    }
    return (
        <div className="task-row">
            <button onClick = {handleCheckPoint}className={`task-check${done ? " checked" : ""}`}></button>
            <span className={`task-title${done ? " done" : ""}`}>
                {title}
            </span>
            <div className="estimate-stepper">
                <button onClick={() => handleStoryPoints(-1)}className="stepper-btn">−</button>
                <span className="stepper-value">{storyPoints}</span>
                <button onClick={() => handleStoryPoints(1)}className="stepper-btn">+</button>
            </div>
            <button onClick={() => handleStoryPoints(2)} className="quick-bump">+2</button>
            <button onClick ={hanleDelete} className="icon-danger">✕</button>

        </div>
    )
}
export default Row