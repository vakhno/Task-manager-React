import React, { createContext, useState, useEffect } from 'react'

export const TaskListContext = createContext()

const TaskListContextProvider = ({ children }) => {
	const initItems = JSON.parse(localStorage.getItem('tasks')) || []
	const [tasks, setTasks] = useState(initItems)
	const [editItem, setEditItem] = useState(null)

	const newTaskId = () => {
		const allId = tasks.map(elem => +elem.id)
		const minId = allId.length ? allId.reduce((a, b) => Math.min(a, b)) : 0
		const maxId = allId.length ? allId.reduce((a, b) => Math.max(a, b)) : 0
		if (!allId.length) {
			return 1;
		} else if (minId !== 1) {
			return minId - 1;
		} else {
			for (let i = 2; i < maxId; i++) {
				if (!allId.includes(i)) {
					return i;
				}
			}
		}
		return maxId + 1
	}

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const addTask = (title) => {
		const newId = newTaskId()
		setTasks([...tasks, { title, id: newId }])
	}

	const removeTask = (id) => {
		setTasks(tasks.filter(elem => elem.id !== id))
	}

	const clearList = () => {
		setTasks([])
	}

	const findIdem = (id) => {
		const item = tasks.find(elem => elem.id === id)
		setEditItem(item)
	}

	const editTask = (title, id) => {
		const newTasks = tasks.map(elem => (elem.id === id ? { title, id } : elem))
		setTasks(newTasks)
		setEditItem(null)
	}

	return (
		<TaskListContext.Provider value={{ tasks, addTask, removeTask, clearList, findIdem, editTask, editItem }}>
			{children}
		</TaskListContext.Provider>
	)
}

export default TaskListContextProvider