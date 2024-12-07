import React from 'react';
import { FaUserInjured, FaUserMd, FaCogs } from 'react-icons/fa'; // Íconos para pacientes, médicos y administración
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Manual Técnico HealTech"
      description="Guía completa para el uso y mantenimiento del sistema HealTech">
      <main className={styles.mainContainer}>
        <header className={styles.heroBanner}>
          <h1>Bienvenido a HealTech</h1>
          <p>Tu guía técnica para sistemas de salud, diseñada para ayudarte a gestionar y optimizar tus recursos.</p>
        </header>
        <section className={styles.features}>
          <h2>Modulos de Healtch</h2>
          <div className={styles.cardContainer}>
            <div className={styles.featureCard}>
              <FaUserInjured size={50} color="#33BFA4" /> {/* Icono para Pacientes */}
              <h3>Modulo Pacientes</h3>
              <p>Ayuda a los pacientes a gestionar su tratamiento mediante alertas que les recuerdan la toma de medicamentos. También permite mantener un historial de consumo de medicamentos, proporcionando a los médicos información clave para evitar errores o posibles efectos secundarios.</p>
            </div>
            <div className={styles.featureCard}>
              <FaUserMd size={50} color="#33BFA4" /> {/* Icono para Médicos */}
              <h3>Modulo de Médicos</h3>
              <p>Proporciona acceso a un expediente global del paciente, lo que facilita la emisión de recetas y el seguimiento de los tratamientos. Permite a los médicos tener un mejor control sobre los medicamentos recetados y su evolución.</p>
            </div>
            <div className={styles.featureCard}>
              <FaCogs size={50} color="#33BFA4" /> {/* Icono para Administración */}
              <h3>Modulo de Administración</h3>
              <p>Ofrece herramientas para la gestión integral de la clínica. Permite la creación de cuentas para médicos, pacientes y colaboradores, además de incluir un sistema de logs para registrar actividades y auditorías. También facilita la gestión de clínicas, incluyendo el registro de nuevas clínicas, la definición de horarios y la asignación de permisos específicos según los roles de los usuarios.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
