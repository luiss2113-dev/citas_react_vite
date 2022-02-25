import Paciente from "./Paciente"

function ListadoPaciente({ pacientes, setpaciente, eliminarPaciente }) {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            
            {pacientes && pacientes.length ? 
                (
                    <>
                        <h2 className="font-black text-3xl text-center">Listado pacientes</h2>

                        <p className="text-xl mt-5 mb-10 text-center">
                            Administra tus {''}
                            <span className="text-indigo-600 font-bold ">pacientes y citas</span>
                        </p>

                        {
                            pacientes.map(paciente => (
                                <Paciente
                                    key={paciente.id}
                                    paciente={paciente}
                                    eliminarPaciente={eliminarPaciente}
                                    setpaciente={setpaciente}
                                />
                            ))
                        }       
                    </>
                ) :
                (
                    <>
                        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

                        <p className="text-xl mt-5 mb-10 text-center">
                            Comienza agregando tus pacientes {''}
                            <span className="text-indigo-600 font-bold ">Y aparecerán en este lugar</span>
                        </p>
                    </>
                )
            }
    
        </div>
    )
}

export default ListadoPaciente
