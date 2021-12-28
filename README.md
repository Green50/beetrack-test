# Prueba Técnica Beetrack

![React](https://res.cloudinary.com/practicaldev/image/fetch/s--fced_LNQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1zg83mt0lo13dfmff1cr.png)

## Descripción

Prueba técnica realizada para beetrack en la cual consiste en un panel de administración de usuarios que permite listar, paginar. agregar y eliminar usuarios [Prueba Técnica](https://github.com/Beetrack/frontend-test). La llamada a los servicios es mediante servicios REST que están en un entorno local ejecutado con `node server`, en el cual, consta con breve documentación en el inicio de la aplicación.

## Env

Actualmente se está trabajando solo con un ambiente de desarrollo que es `.env.development` en el cual tiene la configuración de la url base de los servicios.

## Estructura del proyecto

- Components: Carpeta en donde se encuentran los componentes globales de la aplicación
- Config: Configuraciones globales de la aplicación
- Modules: Base donde se encuentra el desarrollo de los modulos de la aplicación
- Redux: Carpeta donde se encuentra la llamada a redux (ducks)
- Sass: Carpeta donde se encuentran los archivos Sass la aplicación. El archivo global.scss llama a los archivos scss de otros componentes
- Services: Carpeta donde se almacena la llamada a los servicios de la aplicación

## Comandos

- `start`: Permite el inicio de la aplicación en el puerto base 3000
- `start:mac`: Permite el inicio de la aplicación en el puerto base 3001, ya que el servidor se abre por defecto en el 3000

## Técnologias

- React 17.0.2

## Librerías

- Axios
- Material UI
- Redux
- Redux thunk
- Sass

## Herramientas

- Prettier
- Markdown Preview
- Git

## Colaboradores

- Cristopher Herrera
