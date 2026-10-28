# Si algo no funciona, empieza por aquí

### El navegador dice "No se puede acceder a este sitio" o "Conexión rechazada"

1. **Comprueba que PrestaShop-UCA está "Ejecutándose".**

    No basta con tener abierto el programa VirtualBox.

2. **Espera a que Debian termine de arrancar.**

    Si acabas de iniciarlo, espera aproximadamente un minuto más antes de reintentar.

3. **Abre la URL exacta `http://localhost:8080/`.**

    Debe incluir "http", el número 8080 y los dos puntos. No uses "https".

4. **Recarga la página.**

    Pulsa el botón con una flecha circular junto a la dirección.

5. **Si sigue fallando, guarda una captura del error.**

    Envíala al profesor junto con el estado que muestra VirtualBox. No borres ni reimportes la máquina para probar.

La imagen está prevista para acceder por el puerto 8080 de tu ordenador. Si hay un conflicto con otro programa o la importación no conserva la regla de red, el profesor revisará esa configuración.

### La máquina no arranca y menciona VT-x, AMD-V, SVM o virtualización

En Windows, vuelve a la [comprobación del Administrador de tareas](virtualizacion.md). Si aparece "Deshabilitada", sigue el procedimiento de activación. Si ya pone "Habilitada", copia el texto completo del error y consulta al profesor. Puede ser otro problema. No desactives al azar Hyper-V, la integridad de memoria o las protecciones de Windows.

### Tengo un Mac M1/M2/M3/M4/M5 o un Windows Snapdragon

Esta imagen AMD64 no se ejecuta en VirtualBox sobre esos equipos ARM. Instalar otra edición de VirtualBox o cambiar el tipo de sistema en sus ajustes no convierte la máquina. Comunícaselo al profesor para organizar la práctica en un equipo compatible.

### Google Drive no permite descargar el archivo

Si muestra "Necesitas acceso", comunica el mensaje al profesor para que revise los permisos. Si indica demasiadas descargas o un límite temporal, informa también del mensaje exacto. Usa el enlace de esta guía y no una imagen de PrestaShop encontrada en otra página.

### La importación falla o dice que falta espacio

Comprueba que la descarga terminó y que seleccionaste el OVA/OVF correcto. Revisa el espacio libre del disco donde está la "Carpeta base". El espacio que ocupa la máquina después de importar puede ser mayor que el archivo comprimido descargado. Si el mensaje habla de nube, vuelve al origen "Sistema de archivos local". Si vuelve a fallar, muestra el texto completo al profesor.

### La contraseña de PrestaShop no funciona

1. **Comprueba que estás en `/adminaula/`.**

    El acceso de clientes de la tienda es un formulario distinto.

2. **Copia de nuevo el correo y la contraseña del bloque 7.**

    La cuenta es `prestashop@aula.test`.

3. **Comprueba que no hay espacios añadidos.**

    Si el navegador ha rellenado una cuenta antigua, sustitúyela.

4. **Si no entra, pide ayuda al profesor.**

    El correo .test es de prácticas y no es un buzón real para recibir un enlace de recuperación.

### La tienda abre, pero una categoría o producto muestra un error

Si se abre la tienda pero una página concreta da error, la máquina y la conexión pueden estar funcionando. Guarda una captura y la dirección de esa página para el profesor. No reinstales VirtualBox ni cambies la red: el fallo puede estar dentro de PrestaShop.

### La pantalla de Debian se queda negra

Puede haberse apagado solo la pantalla. Comprueba que VirtualBox sigue indicando "Ejecutándose" y prueba a abrir la tienda. Si necesitas usar la consola, pulsa dentro y después Intro. No esperes ver un escritorio gráfico: la imagen es un servidor.

### El ordenador va muy lento

Cierra programas y pestañas que no uses. Mantén solo una PrestaShop-UCA encendida. Si sigue sin ir bien, consulta al profesor antes de cambiar la RAM o el número de procesadores de la máquina.

### No sé qué información enviar para pedir ayuda

Indica estos cuatro datos:

1. Windows o Mac, versión y si el procesador es Intel, AMD o Apple.

2. El bloque y el paso de esta guía donde te has quedado.

3. El mensaje completo del error, mediante una captura legible.

4. Si VirtualBox muestra la máquina "Apagada", "Ejecutándose", "Pausada" o "Guardada".

En Windows puedes capturar una zona con `Windows` + `Mayús` + `S`. En Mac puedes usar `⌘` + `Mayús` + `4`. Evita incluir contraseñas personales en la captura.
