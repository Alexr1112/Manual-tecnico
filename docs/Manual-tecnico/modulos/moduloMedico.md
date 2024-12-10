import { UilMap } from '@iconscout/react-unicons';


# Módulo de Médicos (Web)
Por otro lado, el módulo de Médicos ofrece una vista consolidada del historial clínico de cada paciente. Esto permite a los profesionales de la salud emitir recetas de manera más informada y gestionar de forma efectiva los tratamientos en curso. De esta manera, se mejora la trazabilidad y se reduce el riesgo de errores médicos.




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
  <img src="/img/DiagramaMedico.png" alt="Mapa de navegación" />
</div>