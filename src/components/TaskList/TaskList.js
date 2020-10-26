import React, { useContext } from 'react'
import { TaskListContext } from '../Context/TaskListContext.js'
import Task from '../Task/Task.js'
import './TaskList.sass'

const TaskList = () => {
	const { tasks } = useContext(TaskListContext)

	return (
		<div className="list">
			{tasks.length ?
				(<ul className="list__items">
					{tasks.map((elem) => {
						return <Task task={elem} key={elem.id} />
					})}
				</ul>)
				:
				(<div className='list__empty-list'>No tasks</div>)
			}
		</div>
	)
}

export default TaskList