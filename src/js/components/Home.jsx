import React from "react";
import { useState } from "react";
import { Lista } from "./Lista";


//create your first component
const Home = () => {

	<Lista/>
	// const [data, setData] = useState({
	// 	name: "",
	// 	email:"",
	// 	task:""
	// })

	// const [Listdata, SetListData] = useState([])


	// const handleChange = (event) => {

		// console.log(`{${event.target.name}: ${event.target.value}}`)
	// 		setData({
	// 			...data,
	// 			[event.target.name]:event.target.value
	// 		})
	// }




	// const addTask = (event) => {
		
	// 	if(event.key=="Enter"){
			
	// 		SetListData([
	// 			...Listdata,
	// 			data
	// 		])
	// 		setData({
	// 			task:"",
	// 			name:"",
	// 			email:""
				
	// 		})

	// 	}
	// }

	// return (

	// 	<div className="container">
	// 		<div className="row justify-content-center">
	// 			<div className="col-12 col-md-7 border border-danger">
	// 				<h1 className="text-center">To do List</h1>
	// 				<form className="border p-3 mb-2">
	// 					<input type="text"
	// 						className="form-control mt-2"
	// 						placeholder="Ingresa tu tarea"
	// 						name="task"
	// 						value={data.task}
	// 						onKeyDown={addTask}
	// 						onChange={handleChange}
	// 					/>
	// 					<input type="text"
	// 						className="form-control mt-2"
	// 						placeholder="Ingresa tu nombre"
	// 						name="name"
	// 						value={data.name}
	// 						onKeyDown={addTask}
	// 						onChange={handleChange} 
	// 					/>
	// 					<input type="text"
	// 						className="form-control mt-2"
	// 						placeholder="Ingresa tu correo"
	// 						name="email"
	// 						value={data.email}
	// 						onKeyDown={addTask}
	// 						onChange={handleChange}
	// 					/>


	// 				</form>
	// 			</div>
	// 		</div>
	// 	</div>
};

export default Home;