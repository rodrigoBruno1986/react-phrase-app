# React Phrase App

## Descripción del Proyecto

**React Phrase App** es una aplicación web basada en React que permite visualizar frases y hacer llamados a una API para mostrar publicaciones obtenidas de un servidor remoto. El proyecto utiliza librerías modernas como **Chakra UI** para el diseño de la interfaz, **Formik** para la gestión de formularios, y **Styled Components** para un estilado basado en componentes.

### Funcionalidades Principales

- **Mostrar Publicaciones desde una API:** Se implementó una funcionalidad que permite realizar un llamado a una API para obtener publicaciones y mostrarlas en un modal. 
- **Gestión del Estado con `useState` y `useEffect`:** Utilizamos los hooks de React para manejar el estado y las actualizaciones asincrónicas en la aplicación.
- **Testeo con `React Testing Library`:** Implementamos pruebas para asegurar el correcto funcionamiento de los componentes y su interacción con la API. Los tests verifican, entre otras cosas, la correcta visualización de las publicaciones y el manejo de errores.
- **Botón de Reiniciar:** Implementamos un botón que permite reiniciar el estado de la aplicación y borrar las frases mostradas, con un indicador visual de "Reiniciando...".

### Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/react-phrase-app.git
   cd react-phrase-app

1. **Instalar dependencias**:
   ```bash
   npm install
   
2. **Ejecutar las pruebas**:
  ```bash
   npm run test 

