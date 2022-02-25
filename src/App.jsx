import { useState, useEffect } from 'react'

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPaciente from "./components/ListadoPaciente"

function App() {

  const [pacientes, setPacientes ] = useState([])
  const [paciente, setpaciente] = useState({});

  useEffect(() => {

    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes") ?? []);
      setPacientes(pacientesLS)
    }
    
    obtenerLS()
  }, [])
  

  useEffect(() => {
   localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }, [pacientes])
  

  const eliminarPaciente = (id) => {
    
    const nuevoObjeto = pacientes.filter(elementoEliminar => 
      elementoEliminar.id !== id  
    )
    setPacientes(nuevoObjeto)
    
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setpaciente={setpaciente}
        />
        <ListadoPaciente
          pacientes={pacientes}
          setpaciente={setpaciente}
          eliminarPaciente={eliminarPaciente}/>        
      </div>
      
    </div>
  )

}

export default App