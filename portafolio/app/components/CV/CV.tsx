import React from "react";
import styles from "./CV.module.css";

const CV = () => {
  return (
    <section className={styles.container}>
      
      <header className={styles.header}>
        <h1>Rodríguez Rodríguez Erick Tadeo</h1>
        <p className={styles.contacto}>
          Estudiante de Matemáticas Aplicadas y Computación <br />
          Universidad Autónoma de México <br />
          Facultad de Estudios Superiores Acatlán
        </p>
      </header>

      <section>
        <h2>Perfil</h2>
        <p>
          Estudiante de Matemáticas Aplicadas y Computación con interés en programación,
          optimización, análisis matemático y desarrollo de software.
        </p>
      </section>

      <section>
        <h2>Educación</h2>
        <ul>
          <li>
            Licenciatura en Matemáticas Aplicadas y Computación  
            Universidad Autónoma de México
          </li>
        </ul>
      </section>

      <section>
        <h2>Habilidades</h2>
        <ul>
          <li>Programación en C</li>
          <li>HTML y CSS</li>
          <li>Git y GitHub</li>
          <li>Métodos numéricos</li>
          <li>Optimización de sistemas</li>
          <li>Análisis matemático</li>
          <li>Inglés B2</li>
        </ul>
      </section>

      <section>
        <h2>Proyectos Académicos</h2>
        <ul>
          <li>Implementación de árboles binarios en C</li>
          <li>Algoritmos de ordenamiento</li>
          <li>Modelos de optimización y transporte</li>
          <li>Aplicación de métodos numéricos</li>
        </ul>
      </section>

      <section>
        <h2>Contacto</h2>
        <ul>
          <li>Email: eriteo_rod@gmail.com</li>
          <li>GitHub: https://github.com/EriTeo</li>
        </ul>
      </section>

    </section>
  );
};

export default CV;