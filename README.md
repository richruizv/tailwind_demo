#Iniciar proyecto usando Tailwind CSS v3.0 (Enero/2022)

1. Iniciar proyecto npm: 

    `npm init`

2. Instalar Tailwind como un plugin de PostCSS: 

    `npm install -D tailwindcss postcss autoprefixer`

3. Documentación de instalación: 

    https://tailwindcss.com/docs/installation/using-postcss

4. Se ejecuta el siguiente comando npx tailwindcss init para crear el archivo de plantillas tailwind.config.js colocando la siguiente configuración:

        module.exports = {
            content: ["./public/index.html", "./src/**/*.{html,js}"],
            theme: {
            extend: {},
        },
        plugins: [],
        };

5. Incluir Tailwind en el CSS agregando las directivas a src/css/tailwind.css:

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

Para correr los estilos de Tailwind se necesita ejecutar el siguiente comando: 

`npx tailwindcss -i ./src/css/tailwind.css -o ./public/css/tailwind.css --watch`

Donde estamos indicando que nuestro archivo tailwind.css que proviene de src haga un build en la carpeta de public al archivo tailwind.css.

Con esto ya se puede trabajar con Tailwind en nuestro index.html
