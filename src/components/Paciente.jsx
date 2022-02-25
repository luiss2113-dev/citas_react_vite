
const Paciente = ({ paciente, setpaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, sintoma, id } = paciente
   
    const handleEliminar = () => {
        const confirmacionEliminar = confirm("¿Deseas eliminar esta cita?")
        if (confirmacionEliminar) eliminarPaciente(id)
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl ">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {" "}
                <span className="font-normal normal-case">{ nombre }</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {" "}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {" "}
                    <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">fecha alta: {" "}
                    <span className="font-normal normal-case">{fecha}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {" "}
                <span className="font-normal normal-case">
                    {sintoma}
                    </span>
            </p>
            <div className="flex justify-between mt-10">
                <button className="py-2 px-10 bg-indigo-600 
                hover:bg-indigo-700 text-white font-bold uppercase
                rounded-lg" type="button"
                onClick={() => setpaciente(paciente) }>Editar</button>
                
                <button type="button"
                    onClick={handleEliminar}
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                >Eliminar</button>
            </div>

            </div>
    )
}

export default Paciente
