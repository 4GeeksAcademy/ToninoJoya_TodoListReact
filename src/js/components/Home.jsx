import React from "react";
import { useState } from "react";


//create your first component
const Home = () => {


	const [data, setData] = useState("");

	const [listData, setListData] = useState([]);


	const haddleOnChange = (event) => {
		console.log(event.target.value)

		setData(event.target.value)

	}
	const addTask = (event) => {

		if (event.key == "Enter" && data.trim() !== "") {

			console.log(`Esta es la llave ${event.target.name}`)

			setListData([
				...listData,
				data]
			);
			setData("");

		}
	}

	const deleteTask = (index) => {

		const newList = listData.filter((task, indiceDelElem) => indiceDelElem != index)

		setListData(newList);
	}

	const stopFormDefault = (event) => {
		event.preventDefault()
	}





	return (<div className="container p-4">
		<div className="row justify-content-center">
			<div className="col-12 col-md-7">
				<h1 className="text-center text-danger">todos</h1>
				<form className="border p-0 mb-2"
					onSubmit={stopFormDefault}>
					<input type="text"
						className="border-0 px-3 py-2 border-bottom"
						placeholder="What needs to be done"
						name="task"
						value={data}
						onChange={haddleOnChange}
						onKeyDown={addTask}
					/>
					<ul className="list-group list-group-flush">

						{listData.map((tarea, index) => (
							<li key={index}
								className="list-group-item"
							>{tarea}
								<span className="d-flex justify-content-end p-2"
								><i className="fa-solid fa-xmark cruz"
									onClick={() => deleteTask(index)}></i></span>
							</li>
						))}
						<div className="p-2 align-text-bottom suma ">{`${listData.length} items left`}</div>
					</ul>


				</form>
			</div>
		</div>
	</div>

	);

};

export default Home;