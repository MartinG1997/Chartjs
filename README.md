
# Proyecto 2: Aplicación CRUD



## Índice

* [1. Introducción](#Introducción)
* [2. Demo](#Demo)
* [3. ¿Qué es?](#¿Qué-es?)
* [4. Objetivos de aprendizaje](#Objetivos-de-aprendizaje)
* [5. Requisitos](#Requisitos)
* [6. Agradecimientos](#Agradecimientos)
## Introducción

Con la finalidad de seguir aprendiendo un poco de desarrollo FullStack, uno debe trabajar con diferentes tecnologías, dentro de ellas uno se puede encontrar con node.js, aparte uno se puede encontrar con la necesidad de desplegar datos, datos que generalmente uno puedo almacenar en una base de datos y traer, podría simplemente utilizar las llamadas APIs (Interfaz de Programación de Aplicaciones) las cuales permiten consultar servidores externos para obtener datos que pueden ser tanto de tipo público o privado según sea el desarrollador de la API.

En este contexto se usará la API de https://mindicador.cl/api/ , la cual trae datos variados tales como indicadores económicos y situación país de Chile.

## Demo

Puedes entrar a ver el demo aquí: https://marting1997.github.io/Chartjs/


En este caso se desarrolló una aplicación en la cual se toman todos los datos de la API y se enlistan para luego desplegar la información en un gráfico.

En ella se tienen los siguientes puntos:

- Se pueden seleccionar un indicador con el menú donde dice **Seleccione su indicador**.
- Una vez seleccionado se debe apretar el boton **Enviar**.
- Esto enviará el **value** contenido en el selec list a la API y se generará un gráfico el cual los segmentos de color verde representan un aumento de un valor respecto del valor anterior y en rojo un decremento respecto del dato anterior.

## ¿Qué es?

Como se mencionó, lo que busca esta aplicación representar los datos de una API utilizando Chart.js, la peculiaridad es que se usa js para fetch promise o funciones asíncronas para resolver la consulta y desplegar la información.

## Objetivos de aprendizaje

- Consultar una API.
- Trabajar con async-await o fetch promises.
## Requisitos

Esta aplicación puede correr de forma local en un computador, no requiere ninguna descarga de ningún software, además, para su uso estará disponible el link para probarlo sin restricciones.

## Agradecimientos

Finalmente quiero hacer un especial agredicimientos a:

- **[Bootcamp Desarrollador FullStack UDD](https://github.com/UDDBootcamp)** : Por el buen material de sus cursos y la exigencia que pone para aprobar.

- **[Bryan Diaz C](https://github.com/brayandiazc)** : Profesor del Bootcamp.

- **[Mindicador](https://mindicador.cl/api/)** : Por sus API, en especial para este proyecto en donde se requiere graficar la cadena de datos.