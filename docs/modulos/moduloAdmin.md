import { UilMap } from '@iconscout/react-unicons';



# Módulo de Administración (Web)
En el módulo de Administración, se proporciona un control detallado de las operaciones clínicas. Los administradores pueden gestionar la creación de cuentas para médicos, pacientes y colaboradores, además de establecer roles y permisos específicos para cada usuario. Este módulo también incluye un sistema de auditoría que registra las actividades realizadas, lo que garantiza transparencia y seguridad en las operaciones. Asimismo, permite registrar nuevas clínicas, definir horarios de atención y personalizar otros aspectos operativos.

---

Heltech se presenta como una herramienta esencial para agilizar los procesos administrativos y clínicos en hospitales y clínicas, tanto públicas como privadas. Al centralizar la información y automatizar recordatorios, no solo mejora la experiencia de los pacientes, sino que también reduce la carga administrativa y optimiza la atención médica.



## <UilMap style={{ color: '#33BFA4 ' }} /> <span style={{ color: '#33BFA4 ' }}>Mapa de navegación</span>

<div
  class="zoomable-large"
  onMouseMove={(event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    event.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  }}
>
  <img src="/img/diagramaAdmin.png" alt="Mapa de navegación" />
</div>