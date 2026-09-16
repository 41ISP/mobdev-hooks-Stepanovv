import {nanoid} from "nanoid"
import {useEffect, useState} from "react"
import Row from "../../components/Row"

const PageBoard = () => {
    const [taskField, setTaskField] = useState('') 
    const [tasks,setTasks] = useState([])
    const [shownTasks, setShownTasks] = useState(tasks)
    const [showComplited, setShowComplited] = useState(false)

useEffect(() => {
    if(showComplited){
    setShownTasks(tasks.filter(e => e.done))
    } else {
setShownTasks(tasks)
}
},[tasks, showComplited])

    const handleSubmit = (e) => {
        e.preventDefault()
if (taskField.trim().length=== 0|| taskField.trim().length > 30) return
        const newTack = {
            id: nanoid(),
        title: taskField.trim(),
        storyPoints: 0,
        done: false
        
        }
        setTasks([...tasks, newTack])

        setTaskField("")
         }

    return (
        <section className="page active" id="page-board">
            <div className="page-header">
                <h1 className="page-title">Board</h1>
                <p className="page-subtitle">Sprint 24, growth pod</p>
            </div>

            <div
                className="mount-wrap"
                data-hook="3.1 useState + useEffect (fetch on mount)">
                <div className="mount-point stats-row" id="mount-stats">
                    <div className="stat-card">
                        <div className="stat-value">{tasks.length}</div>
                        <div className="stat-label">Open</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{tasks.filter(e => !e.done).length}</div>
                        <div className="stat-label">In progress</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{tasks.filter(e => e.done).length}</div>
                        <div className="stat-label">Done this sprint</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">7.4</div>
                        <div className="stat-label">Velocity</div>
                    </div>
                </div>
            </div>

            <div className="board-toolbar">
                <div className="mount-wrap" data-hook="1.2 useState (toggle)">
                    <div
                        className="mount-point switch-row"
                        id="mount-show-completed">
                        <span 
                        onClick ={() => setShowComplited(o => !o)}
                        className={`switch${showComplited ? " on": ""}`}></span>
                        <span>Show completed tasks</span>
                    </div>
                </div>
            </div>

            <div
                className="mount-wrap"
                data-hook="1.6 array · 1.1 counter · 1.5 functional update">
                <div className="mount-point" id="mount-tasklist">
                    <form onSubmit ={handleSubmit} className="add-task-row">
                        <input
                            className="input grow"
                            name ="task"
                            value = {taskField}
                            onChange={(e) =>setTaskField(e.target.value)}
                            placeholder="Add a task and press Enter..."
                        />
                        <button className="btn">Add</button>
                    </form>
                    <div className="task-list">
                    
                      {shownTasks.map((task,i) => <Row {...task} key={i} setTasks = {setTasks}/>)}
                        </div>
                    </div>
                </div>
            
        </section>
    )

}
export default PageBoard
