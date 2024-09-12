# City Explorer

**Autor**: Matias Ricardo Carrillo Sanchez
**Versión**: 1.3.0 

## Resumen

"City Explorer" es una aplicación web que permite a los usuarios explorar ciudades ingresando una dirección o el nombre de una ciudad. La aplicación proporciona un mapa interactivo con la ubicación y detalles del clima actual. Utiliza APIs como Mapbox o Google Maps para el mapa y OpenWeather para obtener datos meteorológicos en tiempo real. El diseño es intuitivo, permitiendo obtener información de manera rápida y sencilla, usando tecnologías como React y Node.js.

## Comencemos

- Configurar las API keys (Mapbox, OpenWeather).
- Crear un archivo .env y añadir las claves de API.
- Construir la aplicación para producción.
- Ejecutar la aplicación en modo desarrollo.
- Verificar el despliegue probando la funcionalidad de mapas y clima.

## Arquitectura

1. Componente Principal: App.jsx
  - Este componente actúa como el punto de entrada de la aplicación.
  - Contiene tres componentes principales:
    - Header: Muestra la cabecera de la aplicación.
    - Explorer: El componente central que maneja la lógica de búsqueda de la ubicación y la visualización del mapa.
    - Footer: Muestra el pie de página de la aplicación.
    
2. Componente de Búsqueda de Ciudades: CitySearch.jsx
  - Muestra un formulario que permite a los usuarios ingresar una dirección.
  - Incluye:
    - Un campo de texto para ingresar la dirección.
    - Un botón para enviar la solicitud de búsqueda.
    - Un mensaje de error, que se muestra si la búsqueda falla.
    
3. Componente Explorador: Explorer.jsx
  - Es el núcleo de la aplicación que maneja las búsquedas de ciudades, el manejo de errores y la visualización de los resultados.
  - Contiene:
    - El componente CitySearch para la búsqueda.
    - El componente LatLon para mostrar la información de latitud y longitud.
    - El componente Map para mostrar el mapa de la ubicación.
    - Utiliza la API de LocationIQ para obtener los datos de latitud y longitud de una ciudad y muestra un mapa estático de la ubicación ingresada.
      
4. Componente Latitud y Longitud: LatLon.jsx
  - Muestra la información de la ciudad seleccionada, su latitud y longitud.
  - Utilizado dentro de Explorer para mostrar los resultados de la búsqueda.
    
5. Componente Mapa: Map.jsx
  - Muestra una imagen de un mapa estático basado en las coordenadas obtenidas de la API.
  - Recibe la URL del mapa y muestra la imagen de la ciudad correspondiente.

### Interacción entre componentes:

- App.jsx inicia la estructura de la página, presentando un encabezado, el cuerpo con el explorador, y un pie de página.
- Explorer.jsx es el componente central que maneja la búsqueda, la obtención de datos de la API y la gestión de los estados (ubicación, errores, mapa).
- CitySearch.jsx permite al usuario interactuar, buscar una ciudad y desencadenar la obtención de datos.
Una vez que los datos son obtenidos exitosamente, LatLon.jsx y Map.jsx muestran los resultados correspondientes (información de la ubicación y el mapa).
- Esta estructura sigue una arquitectura de componentes jerárquica típica en React, con una clara separación de responsabilidades entre la presentación (formularios, visualización de datos) y la lógica de negocio (búsqueda, manejo de errores, renderizado condicional).

## Historial de cambios

*Informacion anterior no displonible*

Nombre de la funcionalidad: ________________________________

Tiempo estimado necesario para completarlo: _____

Hora de inicio:_____

Hora de finalización: _____

Tiempo real necesario para completarlo: _____

## Créditos y colaboraciones

- React + Vite
- Trello
- LocationIQ
- Weatherbit
- TMDB
- Netlify
