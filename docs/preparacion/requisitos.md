# Comprueba si tu ordenador es compatible

Necesitas un ordenador portátil o de sobremesa.

| Qué necesitas | Mínimo de trabajo recomendado para esta práctica | Para trabajar con más comodidad |
| --- | --- | --- |
| Procesador | Intel o AMD de 64 bits, con virtualización y al menos 2 núcleos. | 4 núcleos o más. |
| Memoria RAM | **8 GB** en el ordenador físico. Cierra las aplicaciones que no uses. | **16 GB** o más. |
| Espacio libre | **30 GB libres** en el disco donde guardarás la máquina, para la descarga, la importación y el trabajo. | **40 GB o más** y disco SSD. |
| Windows | **Windows 11 de 64 bits, basado en x64**. Sirven las ediciones Home y Pro. VirtualBox 7.2 también admite Windows 10 de 64 bits. | Windows 11 actualizado. |
| Mac | **Mac con procesador Intel** y una versión de macOS admitida por VirtualBox: 13 Ventura, 14 Sonoma, 15 Sequoia o 26 Tahoe. | Mac Intel con 16 GB de RAM. |
| Otros requisitos | Permiso para instalar programas, conexión a Internet para las descargas y un navegador. | Portátil enchufado durante la preparación. |

Comprueba esto antes de descargar

**Esta máquina NO funciona en VirtualBox sobre un Mac con Apple Silicon** (por ejemplo, M1, M2, M3, M4 o M5, incluidos Pro, Max y Ultra) ni sobre un PC Windows con procesador ARM, como Snapdragon.

La imagen está preparada para **Intel/AMD (x86-64 o AMD64)**. Aunque existe VirtualBox para Apple Silicon, esa versión no ejecuta esta imagen. Si tu equipo es de ese tipo, avisa al profesor.

## 1A. En Windows: mira el procesador y la RAM

1. **Pulsa el botón Inicio.**

2. **Escribe `Acerca de tu PC`.**

    Puedes escribir directamente con Inicio abierto.

3. **Abre el resultado "Acerca de tu PC".**

    Se abrirá una página de Configuración. También puedes llegar desde Configuración → Sistema → Acerca de.

4. **Localiza "RAM instalada".**

    Debe indicar al menos **8 GB**. Por ejemplo, "16,0 GB" cumple la recomendación. "7,7 GB utilizables" junto a 8 GB instalados es normal.

5. **Localiza "Tipo de sistema".**

    Busca "sistema operativo de 64 bits" y "procesador basado en **x64**". Si dice ARM o 32 bits, esta guía no corresponde a tu equipo.

6. **Lee "Procesador".**

    Debe ser Intel o AMD. Apunta también la marca y el modelo del ordenador si aparecen: pueden ser necesarios para activar la virtualización.

## 1B. En Windows: comprueba el espacio libre

1. **Abre Inicio y escribe `Configuración de almacenamiento`.**

    Selecciona el resultado de Configuración.

2. **Mira la información del disco local.**

    Normalmente se llama **C:**. Lo que importa es el espacio "libre" o "disponible", no la capacidad total.

3. **Comprueba que quedan al menos 30 GB.**

### ¿No encuentro el dato de espacio libre?

1. **Abre el Explorador de archivos.**

    También se abre con `Windows` + `E`.

2. **Pulsa "Este equipo" en la columna izquierda.**

3. **Mira el texto que aparece debajo de "Disco local (C:)".**

## 1C. En Mac: distingue Intel de Apple Silicon

1. **Pulsa el menú Apple (el icono con forma de manzana).**

    Está en la esquina superior izquierda de la pantalla.

2. **Pulsa "Acerca de este Mac".**

    Se abrirá una ventana con información del ordenador.

3. **Busca "Procesador" o "Chip".**

    **"Procesador: Intel…"** significa que la arquitectura sirve. **"Chip: Apple…"** significa Apple Silicon y esta máquina no sirve en VirtualBox sobre ese equipo.

4. **Comprueba la memoria y la versión de macOS.**

    Necesitas al menos 8 GB de memoria y una versión compatible de la tabla anterior. "Más información" muestra más detalles si la ventana es resumida.

## 1D. En Mac Intel: comprueba el disco

1. **Abre el menú Apple (el icono con forma de manzana).**

2. **Pulsa "Ajustes del Sistema".**

3. **Pulsa "General" en la columna izquierda.**

4. **Pulsa "Almacenamiento".**

5. **Comprueba el espacio disponible.**

    Necesitas al menos 30 GB libres donde guardarás la máquina.

**Antes de seguir:** tu equipo es Intel/AMD, tiene suficiente RAM y espacio libre, y puedes instalar programas.
