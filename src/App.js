import { useState } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  // Array de citas
  const [ citas, guardarCitas ] = useState([]);

  // Funcion que guarde las citas
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  //Funcion que elimina una cita
  const eliminarCita = id => {
    console.log(id);
  }

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
            <h2>Administra tus citas</h2>
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
