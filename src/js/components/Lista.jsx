import React from "react";
import { useState } from "react";


export const Lista = () => {
    const [task, setTask] = useState(" ")

    const [Listdata, SetListData] = useState([])


    const handleChange = (event) => {
        setTask(event.target.value)
    }




    const addTask = (event) => {

        if (event.key == "Enter" && task.trim() !== "") {

            event.preventDefault();


            SetListData([
                ...Listdata,
                task
            ])
            setTask(" ")

        }
    }

    return (

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-7 border p-3">
                    <h1 className="text-center">To do List</h1>
                    <form className="border p-3 mb-2">
                        <input type="text"
                            className="form-control"
                            placeholder="Ingresa tu tarea y presiona Enter"
                            value={task}
                            onKeyDown={addTask}
                            onChange={handleChange}
                        />
                        <div className="mt-3">
                            <h2>Tareas Pendientes:</h2>
                            {Listdata.length === 0 ? (
                                <p className="text-muted">No hay tareas aún.</p>
                            ) : (
                                <ul className="list-group">
                                    {Listdata.map((tarea, index) => (
                                        <li key={index} className="list-group-item">
                                            {tarea}
                                            {/* Aquí podrías añadir un botón para eliminar en el futuro */}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

