# Descarga e instala VirtualBox

VirtualBox es el programa que abre la máquina de prácticas. Se instala en tu ordenador habitual, no dentro de Debian.

**Solo necesitas el paquete principal de VirtualBox.** Para esta práctica no tienes que instalar Debian por separado, crear una máquina vacía ni descargar una ISO de Linux.

[Abrir la descarga oficial de VirtualBox](https://www.oracle.com/virtualization/technologies/vm/downloads/virtualbox-downloads.html)

La página oficial consultada para esta guía ofrece VirtualBox 7.2.20. El número puede cambiar con las actualizaciones. Descarga el paquete estable que indique el profesor o, si no ha fijado uno, la versión estable ofrecida en esta página. Evita versiones de prueba.

## 3A. Elige el archivo correcto

1. **Abre el enlace oficial anterior.**

    Se abrirá una pestaña del navegador. No necesitas crear una cuenta de Oracle para descargar el paquete principal.

2. **Busca "Oracle VirtualBox Base Packages".**

    La palabra "Base" identifica el programa principal.

3. **Pulsa el enlace que corresponde a tu ordenador.**

    Utiliza esta tabla. Debes elegir el sistema de tu ordenador, aunque la máquina que abrirás después tenga Debian.

| Tu ordenador | Opción que debes elegir | Archivo habitual |
| --- | --- | --- |
| Windows Intel/AMD | **Windows Installer** / Windows hosts | Termina en `-Win.exe`. |
| Mac Intel | **macOS / Intel hosts** | Termina en `.dmg`. |
| Mac Apple Silicon | **No continúes con esta imagen.** | La descarga para Apple Silicon no hace compatible nuestra máquina. |

Espera a que termine la descarga. Normalmente encontrarás el archivo en la carpeta **Descargas**. No abras un archivo que aún aparezca como "descargando".

## 3B. Instálalo en Windows

1. **Abre la carpeta "Descargas".**

    Abre el Explorador de archivos (la carpeta amarilla) y pulsa "Descargas" en la columna izquierda.

2. **Haz doble clic en el instalador de VirtualBox.**

    Su nombre empieza por `VirtualBox-` y termina normalmente en `-Win.exe`. Puede que Windows oculte la extensión.

3. **Si Windows pide permiso para instalar, pulsa "Sí".**

    Comprueba que corresponde al instalador oficial de Oracle VirtualBox que acabas de descargar. Si pide una contraseña de administrador, es la de tu ordenador. No es la contraseña de PrestaShop.

4. **Pulsa "Next" o "Siguiente" en la bienvenida.**

5. **Lee y acepta la licencia si estás de acuerdo.**

    Después podrás continuar al siguiente paso del instalador.

6. **Conserva la carpeta de instalación propuesta.**

    No necesitas cambiarla para la práctica. Si aparece "Custom Setup", utiliza los componentes habituales. El soporte de Python es opcional y no se utiliza en esta asignatura.

7. **Pulsa "Next" o "Siguiente" para continuar.**

    Si se muestra un aviso específico sobre Python, consulta el desplegable de debajo.

8. **Si aparece el aviso de interrupción de red, pulsa "Yes".**

    VirtualBox puede cortar la conexión unos instantes al instalar sus componentes de red. Evita hacerlo durante una videollamada o mientras se descarga la máquina de prácticas.

9. **Pulsa "Install" o "Instalar".**

    Espera mientras avanza la instalación. No pulses varias veces.

10. **Pulsa "Finish" o "Finalizar".**

    Si hay una casilla para abrir VirtualBox, puedes dejarla marcada. Si se solicita reiniciar Windows, hazlo antes de continuar.

### El instalador habla de Python o de Visual C++

### Python / win32api

No necesitas Python para abrir la máquina de prácticas. Si el instalador permite continuar sin ese componente, continúa. Si requiere elegir componentes, vuelve a "Custom Setup" y desactiva únicamente **Python Support**, seleccionando la opción de que esa función no esté disponible. Mantén instalado el programa VirtualBox.

### Microsoft Visual C++ Redistributable

Si el instalador indica expresamente que falta este componente, cierra el instalador y abre la [descarga oficial de Microsoft](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist/).

1. **Descarga la opción X64 de la versión actual.**

    Para el Windows compatible con esta imagen, no elijas ARM64 ni X86.

2. **Abre el archivo descargado.**

    El nombre habitual es `vc_redist.x64.exe`.

3. **Sigue la instalación de Microsoft.**

    Reinicia si te lo solicita.

4. **Abre otra vez el instalador de VirtualBox.**

## 3C. Instálalo en un Mac Intel

1. **Abre Finder.**

    Es el icono de una cara azul y blanca en la barra de aplicaciones.

2. **Pulsa "Descargas" en la columna izquierda.**

3. **Haz doble clic en el archivo de VirtualBox terminado en `.dmg`.**

    Comprueba que descargaste la opción para **Intel hosts**.

4. **Haz doble clic en "VirtualBox.pkg".**

    Lo verás dentro de la ventana que se acaba de abrir.

5. **Pulsa "Continuar" en el instalador.**

    Lee las pantallas y acepta la licencia si estás de acuerdo.

6. **Pulsa "Instalar" cuando llegue la pantalla de instalación.**

7. **Autoriza la instalación con la contraseña de tu Mac si se solicita.**

    No utilices aquí la contraseña de PrestaShop.

8. **Pulsa "Cerrar" cuando finalice.**

    Si pide reiniciar el Mac, hazlo.

9. **Abre "Aplicaciones" en Finder.**

10. **Haz doble clic en "VirtualBox".**

    Si macOS impide abrirlo, guarda el mensaje y consulta al profesor. No desactives las protecciones del sistema para intentar resolverlo.

**Resultado esperado:** VirtualBox se abre y muestra su ventana principal. Si la lista de máquinas está vacía, es normal.
