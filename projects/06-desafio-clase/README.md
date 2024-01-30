# Ejercicio 1
Contexto
Imagina que recibes la siguiente llamada:
“Nos comunicamos de Tu Seguro S.A. Somos una empresa que ofrece seguros contra incendios que
los inquilinos deben contratar según la Ley de alquileres. Buscamos incorporar una nueva persona al
equipo de desarrolladores ReactJs. Sin embargo, no contamos con tanto tiempo como para irnos conociendo. Por eso, te proponemos hacer dos pruebas medianamente avanzadas.
De esta forma conocerás el nivel que se requiere para trabajar aquí”.

# Consigna, parte uno:
1. Investiga la API
https://jsonplaceholder.typicode.com/.

2. Crea una instancia base común con la librería Axios. Esta instancia será la que uses en la segunda prueba.

<hr />

Contexto
Como segundo desafío te proponemos unificar el uso de esa instancia base común mediante
un hook. Si creas un hook personalizado que nos permita consumir esa API habrás logrado
un gran paso para integrar a la interfaz. ¿Por qué? Porque habrás centralizado el uso
de la API en un solo lugar (este hook), de forma que, si hay algún cambio en la comunicación,
ya sabemos a dónde ir a hacerlo. Además, si queremos implementar mejoras en 
esta comunicación, solo debemos modificar el hook y respetar la cabecera de la función (el
nombre, los parámetros de entrada y el retorno).

# Consigna, parte dos:
Crea un hook personalizado llamado “useJPH” para consumir la instancia base creada en el
primer desafío. Debe tener las siguientes características:
    ● Este hook debe recibir el nombre del recurso (posts, users, comments).
    ● Debe hacer la petición GET correspondiente.
    ● Y debe retornar una variable de estado con los datos solicitados.