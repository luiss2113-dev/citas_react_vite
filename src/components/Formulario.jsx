import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setpaciente }) => {

    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintoma, setSintoma] = useState("")

    const [error, seterror] = useState(false)

    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString()

        return random + fecha
    }

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            const { nombre, propietario, email, fecha, sintoma } = paciente
            setNombre(nombre)
            setPropietario(propietario)
            setEmail(email)
            setFecha(fecha)
            setSintoma(sintoma)
        }
    }, [paciente]);
    
  
    const handleSubmit = (e) => {

        e.preventDefault()

        //validacions de formulario

        if ([nombre, propietario, email, fecha, sintoma].includes("")) {
            seterror(true)
            return;
        } 

        seterror(false)
        
        const objetoPaciente = { nombre, propietario, email, fecha, sintoma }
        
        if (paciente.id) {
            //editando registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(pacientesState => pacientesState.id === paciente.id ? objetoPaciente : pacientesState)
            setPacientes(pacientesActualizados)
            setpaciente([])

        } else { 
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente]) 
        }
        
        setNombre("")
        setPropietario("")
        setEmail("")
        setFecha("")
        setSintoma("")
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
        
            
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administrarlos</span>
        </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                {error && <Error error={"Todos los campos son obligatorios"} /> }
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase">Nombre Mascota</label>
                    
                    <input id = "mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type={"text"}
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        placeholder="Nombre de la mascota" />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase">Nombre propietario</label>
                    
                    <input id = "propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type={"text"}
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                        placeholder="Nombre propietario" />
                </div>

                 <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase">
                        Email
                    </label>
                    
                    <input id="email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type={"email"}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email contacto propietario" />
                    
                </div>

                 <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase">
                        Fecha de alta
                    </label>
                    
                    <input id="alta"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type={"date"}
                         />
                    
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase">
                        Síntomas
                    </label>
                    
                    <textarea
                        id="sintomas"
                        value={sintoma}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                       onChange={e => setSintoma(e.target.value)}
                        placeholder="Describe los síntomas"
                    />
                    
                </div>

                <input type={"submit"}
                    className="bg-indigo-600 w-full p-3 text-white uppercase hover:bg-indigo-700 font-bold cursor-pointer transition-all"
                    value={paciente.id ? "Editar paciente" : "Agregar paciente"}
                />
                
            </form>
        
        </div>
    )
}

export default Formulario
