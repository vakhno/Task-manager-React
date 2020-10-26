import React from 'react'
import './App.sass'
import TaskList from './components/TaskList/TaskList'
import TaskForm from './components/TaskForm/TaskForm.js'
import Header from './components/Header/Header.js'
import TaskListContext from './components/Context/TaskListContext.js'
import Background from './components/images/background.jpg'

function App() {
	return (
		<div className="container" style={{ backgroundImage: `url(${Background})` }}>
			<div className="wrapper">
				<Header />
				<div className="content">
					<TaskListContext>
						<TaskForm />
						<TaskList />
					</TaskListContext>
				</div>
			</div>
		</div>
	)
}

export default App