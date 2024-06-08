import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private temas = [
    {
      id: 1,
      titulo: 'Anticuerpos',
      resumen:
        'El uso de anticuerpos en medicina ha evolucionado con avances en biotecnología e inmunología, mejorando su especificidad y afinidad. Los anticuerpos multiespecíficos y terapias de conjugados anticuerpo-fármaco son más efectivos, especialmente en oncología. La inmunoterapia dirigida a puntos de control inmunológico ha transformado el tratamiento del cáncer. La producción mejorada y la reducción de costos han hecho que estos tratamientos sean más accesibles. Además de la oncología, los anticuerpos se utilizan en enfermedades autoinmunes, inflamatorias e infecciosas, mostrando su amplia aplicabilidad. Este progreso continuo ofrece nuevas esperanzas para pacientes en todo el mundo, reflejando un futuro prometedor en la terapia basada en anticuerpos.',
      imagen: 'assets/anticuerpos.jpg',
    },
    {
      id: 2,
      titulo: 'Epidemiología',
      resumen:
        'La epidemiología estudia la distribución y causas de enfermedades en poblaciones, con el fin de controlar problemas de salud mediante intervenciones efectivas.\n Desde los estudios de John Snow sobre el cólera en el siglo XIX, la disciplina ha avanzado notablemente, especialmente con la introducción de métodos estadísticos y teorías epidemiológicas.\n Los conceptos clave incluyen la tasa de incidencia, la prevalencia y los estudios de cohorte y caso-control.\n Utiliza tanto métodos observacionales como experimentales para identificar factores de riesgo y probar intervenciones.\n En salud pública, es esencial para monitorear enfermedades y evaluar programas.\n A pesar de sus avances, enfrenta desafíos como el sesgo y la causalidad, y necesita seguir evolucionando para abordar nuevas emergencias sanitarias.',
      imagen: 'assets/epidemiologia.jpg',
    },
    {
      id: 3,
      titulo: 'Anigua Grecia',
      resumen:
        'Grecia Antigua, desde la época arcaica hasta el helenismo, es una civilización seminal en el mundo occidental, con destacadas contribuciones en filosofía, ciencia, política y artes. Durante la época arcaica, se establecieron las polis y se desarrolló la democracia en Atenas. La época clásica vio el florecimiento de Atenas bajo Pericles, pero también enfrentó conflictos como las Guerras Médicas y del Peloponeso. El periodo helenístico, tras la muerte de Alejandro Magno, extendió la cultura griega por vastos territorios y vio el surgimiento de imperios helenísticos. La influencia griega perdura en la cultura, la ciencia y las artes contemporáneas, destacando su impacto duradero en la historia mundial.',
      imagen: 'assets/grecia.jpg',
    },
  ];

  private preguntas = [
    {
      id: 1,
      titulo: 'Alergias',
      pregunta:
        '¿Cuál es un método avanzado para diagnosticar alergias alimentarias?',
      respuesta1: 'Dietas de eliminación',
      respuesta2: 'Pruebas de componentes específicos',
      respuesta3: 'Encuestas de síntomas',
      respuesta4: 'Análisis de sangre genérico',
      imagen: 'assets/alergia.jpg',
    },
    {
      id: 2,
      titulo: 'Genética',
      pregunta: '¿Qué permite la secuenciación de célula única?',
      respuesta1: 'Reducción de costos de secuenciacion',
      respuesta2: 'Entendimiento detallado de la heterogeneidad celular',
      respuesta3: 'Identificación rápida de patógenos',
      respuesta4: 'Mejora en el diseño de tratamientos médicos',
      imagen: 'assets/genetica.jpg',
    },
    {
      id: 3,
      titulo: 'Renacimiento',
      pregunta: '¿Qué figura renacentista desafió la concepción del universo?',
      respuesta1: 'Leonardo da Vincci',
      respuesta2: 'Michelangelo',
      respuesta3: 'Galileo Galilei',
      respuesta4: 'Rafael',
      imagen: 'assets/renacimien.jpg',
    },
  ];

  constructor() {}

  getTemas() {
    return this.temas;
  }

  getPreguntas() {
    return this.preguntas;
  }
}
