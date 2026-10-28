# Guarda tu trabajo y apaga la máquina correctamente

**Trabajaremos con esta misma máquina durante toda la asignatura.** No la elimines, no borres su carpeta y no desinstales VirtualBox durante el curso. Los cambios que guardes en PrestaShop quedan en el disco de tu máquina y seguirán allí al volver a encenderla.

## 8A. Guarda lo que estás haciendo

1. **Pulsa "Guardar" / "Save" en la pantalla de PrestaShop que estés editando.**

    Escribir en un formulario no siempre guarda los cambios automáticamente.

2. **Espera al mensaje de confirmación.**

    Si hay un error en el formulario, corrígelo y vuelve a guardar antes de salir.

3. **Cierra la sesión del panel de administración.**

    Abre el menú de tu usuario, normalmente en la parte superior derecha, y elige "Cerrar sesión" / "Sign out" / "Log out".

4. **Cierra las pestañas de la tienda.**

    Esto cierra las páginas del navegador, pero la máquina virtual todavía sigue encendida.

## 8B. Apaga Debian con la opción de cierre ordenado

1. **Vuelve a la ventana de PrestaShop-UCA.**

    Es la ventana de la pantalla negra, no la pestaña del navegador.

2. **Pulsa el botón de cerrar esa ventana.**

    En Windows suele ser la X. En Mac, el botón rojo de la ventana. VirtualBox mostrará opciones.

3. **Selecciona "Enviar señal de apagado" / "Send the shutdown signal".**

    También puede aparecer como "Shut Down". No elijas la opción de apagar inmediatamente o "Power off".

4. **Pulsa "Aceptar" / "OK".**

5. **Espera hasta que VirtualBox muestre "Apagada" / "Powered Off".**

    Solo entonces cierra VirtualBox y apaga tu ordenador si quieres.

## Qué se conserva y qué debes evitar

| Acción | Qué ocurre |
| --- | --- |
| Guardar un producto y apagar Debian correctamente | El producto permanece en la máquina. Lo verás al volver a arrancarla. |
| Cerrar el navegador | Se cierran las páginas. La máquina puede seguir encendida. |
| Guardar el estado de la máquina | VirtualBox la deja suspendida para reanudarla. Mientras está guardada la tienda no responde. En esta guía usamos apagado normal. |
| "Power off" / apagar inmediatamente | Interrumpe la máquina como si se le quitara la corriente. Puede perder datos pendientes o provocar errores. Evítalo en el uso normal. |
| Reimportar el OVA original | Crea otra copia de la situación inicial. No contiene los ejercicios realizados posteriormente en tu máquina. |
| Eliminar la máquina o restaurar una instantánea antigua | Puedes perder el trabajo actual. No lo hagas durante el curso sin indicación del profesor. |

**Ejemplo:** hoy creas el producto "Camiseta del máster" y pulsas Guardar. Apagas correctamente. Mañana arrancas *la misma máquina*: el producto seguirá allí. No necesitas exportar la máquina después de cada clase.

El trabajo se guarda en **tu ordenador**, no en el Google Drive desde el que descargaste la imagen. Si cambias de ordenador o pierdes el disco, no aparecerá automáticamente. Para trasladar o hacer una copia de seguridad de tu trabajo, consulta al profesor antes de mover archivos.

**Conserva el entorno de la asignatura.** Durante el curso, no reinstales la tienda ni actualices PrestaShop, sus módulos o su tema por tu cuenta. Utilizaremos la versión preparada para las prácticas.
