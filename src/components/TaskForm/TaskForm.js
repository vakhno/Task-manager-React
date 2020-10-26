import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../Context/TaskListContext.js'
import './TaskForm.sass'

const TaskForm = () => {
	const { addTask, clearList, editItem, editTask } = useContext(TaskListContext)
	const [title, setTitle] = useState('')
	const handleChange = (event) => {
		setTitle(event.target.value)
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		if (!editItem) {
			addTask(title)
			setTitle('')
		} else {
			editTask(title, editItem.id)
		}
	}
	useEffect(() => {
		if (editItem) {
			setTitle(editItem.title)
		} else {
			setTitle('')
		}

	}, [editItem])

	return (
		<form onSubmit={handleSubmit} className="new-item-form">
			<input type="text" className="new-item-form__input" placeholder="Add task" onChange={handleChange} value={title} required />
			<div className="new-item-form__operations">
				<button type='submit' className="new-item-form__button">{editItem ? `Edit task` : `Add Task`}</button>
				<button className="new-item-form__button" onClick={clearList}>Clear All</button>
			</div>
		</form>
	)
}

export default TaskForm
