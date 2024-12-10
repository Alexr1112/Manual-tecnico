import { UilMap } from '@iconscout/react-unicons';



# Módulo de Pacientes (Móvil)
El módulo de Pacientes permite a los usuarios llevar un control más riguroso sobre su tratamiento médico. Este sistema envía notificaciones para recordar la toma de medicamentos, asegurando el cumplimiento de las indicaciones prescritas. Además, los pacientes pueden acceder a su historial médico, lo que facilita un mejor entendimiento de su tratamiento y evita posibles errores.

## <UilMap style={{ color: '#33BFA4' }} /> <span style={{ color: '#33BFA4' }}>Mapa de navegación</span>

<div
  class="zoomable"
  onMouseMove={(event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    event.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  }}
>
  <img src="/img/DiagramaPaciente.png" alt="Mapa de navegación" />
</div>