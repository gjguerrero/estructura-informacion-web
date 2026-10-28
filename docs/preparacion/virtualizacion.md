# Comprueba la virtualización

La virtualización es una función del procesador que permite ejecutar la máquina virtual. Muchas veces ya está activada. **Primero la comprobaremos. Solo habrá que cambiar algo si está desactivada.**

**Si usas un Mac Intel:** no sigas las instrucciones de BIOS/UEFI de Windows. Tras comprobar el procesador y macOS, pasa al [bloque 3](virtualbox.md). Si VirtualBox muestra un error de virtualización en ese Mac, guarda el mensaje y consulta al profesor.

## 2A. En Windows: comprueba si ya está habilitada

1. **Abre el Administrador de tareas.**

    Mantén pulsadas `Ctrl` y `Mayús` y, sin soltarlas, pulsa `Esc`. Después suelta las tres.

2. **Si aparece "Más detalles", pulsa ese botón.**

    Si ya ves una ventana con varias secciones, no necesitas hacerlo.

3. **Pulsa "Rendimiento".**

    En Windows 11 suele estar en la barra izquierda, con un dibujo de un gráfico. Si solo ves iconos, deja el ratón encima para leer su nombre. En Windows 10 suele ser una pestaña superior.

4. **Pulsa "CPU".**

    CPU es el procesador. Aparecerán uno o varios gráficos de su uso.

5. **Busca la línea "Virtualización" debajo del gráfico.**

    La palabra que aparece a su lado es el dato que necesitas.

### Si pone "Habilitada"

Esta comprobación está terminada. Cierra el Administrador de tareas y pasa a [instalar VirtualBox](virtualbox.md).

### Si pone "Deshabilitada"

Sigue el apartado 2B. Tendrás que reiniciar tu ordenador para cambiar una opción.

Si no aparece la línea, comprueba que estás en **CPU**, no en Memoria o Disco. Amplía la ventana. Si sigue sin aparecer, anota el modelo del equipo y consulta al profesor.

## 2B. Entra en la configuración del ordenador

La **BIOS/UEFI** es una pantalla de configuración que aparece antes de Windows. Sus menús dependen de la marca del ordenador.

**Antes de reiniciar:** guarda tus documentos y deja esta guía abierta también en el móvil, o anota los pasos de este apartado. Durante el reinicio no podrás verla en el ordenador. Cambia únicamente la opción de virtualización. Si se pide una clave de recuperación de BitLocker, no la adivines, consulta al responsable del equipo.

### Abre Recuperación

1. **Abre Inicio.**

2. **Pulsa "Configuración".**

    También puedes abrirla con `Windows` + `I`.

3. **Abre la sección correspondiente a tu Windows.**

    En **Windows 11**, pulsa "Sistema". En **Windows 10**, pulsa "Actualización y seguridad".

4. **Pulsa "Recuperación".**

    Puede que tengas que bajar por la página para verla.

5. **Localiza "Inicio avanzado".**

    No elijas "Restablecer este equipo": esa opción hace otra cosa.

6. **Pulsa "Reiniciar ahora" junto a "Inicio avanzado".**

    Si aparece una confirmación, confirma el reinicio después de guardar los documentos.

### En la pantalla azul del reinicio

1. **Pulsa "Solucionar problemas".**

    En inglés se llama "Troubleshoot".

2. **Pulsa "Opciones avanzadas".**

    En inglés: "Advanced options".

3. **Pulsa "Configuración de firmware UEFI".**

    En inglés: "UEFI Firmware Settings". Si no existe esa opción, consulta el apartado desplegable de debajo.

4. **Pulsa "Reiniciar".**

    El ordenador entrará en su pantalla de configuración. Puede tener fondo azul, negro o un diseño con el logotipo del fabricante.

### No aparece "Configuración de firmware UEFI"

Algunos equipos requieren pulsar una tecla al encenderse. La tecla correcta depende del modelo.

1. **Vuelve a Windows con "Continuar".**

    Si estás dentro de Opciones avanzadas, utiliza la flecha de volver hasta encontrar "Continuar".

2. **Consulta la guía oficial de tu fabricante en la tabla siguiente.**

    Busca el modelo exacto. No pruebes combinaciones al azar.

3. **Reinicia el ordenador.**

4. **Pulsa la tecla indicada por el fabricante cuando aparezca su logotipo.**

    Por ejemplo, Dell indica `F2` en muchos modelos. La guía de tu equipo puede indicar otra tecla.

Si Windows arranca normalmente, probablemente no se pulsó la tecla a tiempo. Puedes intentarlo otra vez. Si se pide una contraseña de BIOS que no conoces, consulta al responsable del equipo.

## 2C. Cambia solo la opción de virtualización

1. **Localiza el menú de virtualización de tu equipo.**

    Puede estar en "Advanced", "CPU Configuration", "Security" o "Virtualization Support". Utiliza la guía de tu fabricante para saber cuál. En pantallas antiguas se usan las flechas del teclado y `Intro`. En otras puedes usar el ratón.

2. **Busca el nombre adecuado para tu procesador.**

    En Intel puede poner **Intel Virtualization Technology**, **VT-x** o **Virtualization**. En AMD suele poner **SVM Mode**, **AMD-V** o **Virtualization Technology**.

3. **Cambia esa opción a "Enabled".**

    "Enabled" significa habilitada. "Disabled" significa deshabilitada. En un menú de texto, normalmente seleccionas la opción con las flechas, pulsas Intro y eliges Enabled.

4. **Abre la opción "Save & Exit" o "Guardar y salir".**

    Algunos equipos muestran `F10` para guardar. Usa esa tecla únicamente si la propia pantalla o la guía del fabricante la indican.

5. **Confirma que quieres guardar los cambios.**

    El ordenador se reiniciará. Espera a que vuelva a Windows.

**Si no encuentras la opción, no cambies otras.** No hace falta modificar Secure Boot, TPM, el modo de disco, el arranque ni instalar Hyper-V para seguir esta guía. Si la opción está bloqueada, sal sin guardar y consulta la documentación de tu modelo o al profesor.

| Fabricante | Documentación oficial que debes consultar |
| --- | --- |
| ASUS · Intel | [Activar Intel Virtualization Technology (VT-x)](https://www.asus.com/support/faq/1043181/). |
| ASUS · AMD | [Activar AMD-V / SVM Mode](https://www.asus.com/support/faq/1043992/). |
| Dell | [Activar la virtualización de hardware](https://www.dell.com/support/kbdoc/000195978/). La web permite cambiar el idioma. |
| HP | [Activar la tecnología de virtualización en el BIOS](https://support.hp.com/es-es/document/ish_5637144-5698274-16). |
| Lenovo | [Enable Virtualization Technology on Lenovo PC computers](https://support.lenovo.com/us/en/solutions/ht500006). |
| Otra marca | [Guía de Microsoft y enlaces a fabricantes](https://support.microsoft.com/es-es/windows/experience/enable-virtualization-on-windows). Busca las instrucciones correspondientes a tu modelo. |

## 2D. Comprueba el resultado

1. **Vuelve a abrir el Administrador de tareas.**

    Pulsa `Ctrl` + `Mayús` + `Esc`.

2. **Entra de nuevo en "Rendimiento" y selecciona "CPU".**

3. **Lee la línea "Virtualización".**

    Ahora debe poner **Habilitada**. Si sigue deshabilitada, no continúes cambiando ajustes: pide ayuda con el modelo y una captura de esta pantalla.

**Resultado esperado:** "Virtualización: habilitada". Ya puedes instalar VirtualBox.
