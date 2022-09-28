# Blog Directus ![Directus](https://img.shields.io/badge/directus-%2364f.svg?style=for-the-badge&logo=directus&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

El SDK de JavaScript proporciona una interfaz intuitiva para la API de Directus desde un proyecto basado en JavaScript.

## Objetivo

Probar el SDK de JavaScript para la otención y mutación de datos para la API de Directus a través de la creación de un sencillo blog.

## Primeros pasos

### Instalación de Directus

Instalar con npm:

```console
npm init directus-project <nombre del directorio de la api>
```

Durante el proceso de instalación seleccionar la base de datos deseada y las credenciales de administración.

Lanzar la aplicación:

```console
cd <ruta del directorio de la api>
npx directus start
```

Servidor lanzado en: http://localhost:8055

### Instalación de React

Instalar con npm:

```console
npm create vite@latest <nombre del directorio de la app>
```

Durante el proceso de instalación seleccionar **React** como framework del proyecto.

Lanzar la aplicación:

```console
npm create vite@latest <nombre del directorio de la app>
cd <ruta del directorio de la app>
npm install
npm run dev
```

Servidor lanzado en: http://127.0.0.1:5173/

### Configuración

La configuración del SDK de Directus se detalla en el siguiente repositorio:
[SDK Directus Configuration](https://github.com/Juanjo-GEx/Config-Directus)

## Casos de uso

1. [**CU-01**] El blog contendrá una serie de artículos con su título y contenido.
2. [**CU-02**] El contenido de cada artículo ha sido escrito por un autor.
3. [**CU-03**] Cada artículo podrá tener o no comentarios por parte de los suscriptores.

## Análisis

Análisis los siguientes items en cuanto al SDK de Directus:

| Testing | Valoración  | Comentarios |
| ------------- | ------------- | ------------- |
| `Configuración`  | <span style=" text-align: center; padding: 5px; background-color: 	#3CB371; color: #fff;">EXCELENTE</span> | Configurar el SDK es muy sencillo |
| `Manejo de datos`  | <span style=" text-align: center; padding: 5px; background-color: 	#3CB371; color: #fff;">EXCELENTE</span> | La obtención e inserción de datos a través del SDK y la conexión vía API se hace de manera muy limpia |
| `Documentación`  | <span style=" text-align: center; padding: 5px; background-color: 	#3CB371; color: #fff;">EXCELENTE</span> | Tanto la configuración como la comunicación con la API está muy bien documentada |
| `Limitaciones`  | <span style=" text-align: center; padding: 5px; background-color: 	#ffa500; color: #fff;">ACEPTABLE</span> | Se han encontrado algunas limitaciones en la obtención de la información para poder formatearla a través del frontal de la aplicación. Este hecho implica la necesidad de definir y cumplir estrictamente ciertas directrices en cuanto al modelado e inserción de datos en Directus. De la misma manera se ha tenido que instalar la extensión `editor.js` para que el formato de exportación del contenido fuera el más adecuado. |

## Conclusiones

Con este kit de desarrollo Directus posee un conjunto completo de herramientas de conexión de datos para personalizar al máximo las opciones de configuración.

El SKD de Directus es fácil de usar, fácil de entender y está muy bien detallado. Toda la funcionalidad necesaria para el uso de la API de Directus está integrada, lo que reduce considerablemente el tiempo de desarrollo. De esta manera se podrá crear una aplicación que se comunique sin problemas con otras plataformas.

Destacamos las siguientes ventajas en el uso de este SDK:

-  Se puede ahorrar en costes de producción, ya que el tiempo de desarrollo requerido se reduce bastante
-  Su uso también puede afectar el rendimiento de una aplicación, por lo que es menos probable que una aplicación se bloquee inesperadamente
-  Garantiza mejores funciones de seguridad al no exponer sus datos públicamente


## Construido con...

* [Directus](https://docs.directus.io/) - Usado como API y gestor de bases de datos
* [React](https://es.reactjs.org/) - Usado como framework para manejar la capa de presentación

## Documentación

La documentación del proyecto se puede consultar en la carpeta correspondiente.

