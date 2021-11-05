import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  // Array de citas
  const [ citas, guardarCitas ] = useState([]);

  // UseEffect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    console.log('Documento listo o ha pasado algo');
  },[citas] )

  // Funcion que guarde las citas
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  //Funcion que elimina una cita
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id );
    guardarCitas(nuevasCitas);
  }

  // Mensaje condicional
  console.log(citas.length);

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            { citas.length <= 0 ? <h2>No hay citas</h2> : <h2>Administra tus citas</h2> }
            
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
