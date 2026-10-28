# 10. Presentación, edición y activos multimedia

## Cómo se presenta el contenido

Una **plantilla** decide cómo mostrar los datos de una ficha. Por ejemplo, puede colocar el título de una actividad sobre su fotografía y la fecha junto al lugar. Un **tema** reúne habitualmente plantillas y estilos que dan una apariencia común al sitio. Un **componente** es un elemento de presentación que puede reutilizarse, como una tarjeta con el título y la fecha de una actividad.

Una misma actividad puede mostrarse completa en su página y resumida en el calendario. Ambas presentaciones utilizan el mismo registro, pero seleccionan campos distintos. El calendario puede mostrar solo el título y la fecha, mientras que la página completa incluye también la descripción y los requisitos de inscripción.

El diseño no es un adorno posterior. Una plantilla que oculta el plazo de una convocatoria puede impedir completar una tarea aunque el dato esté correctamente almacenado. Por eso se deben revisar contenido y presentación conjuntamente.

## Editores visuales y edición por bloques

Un editor **WYSIWYG**, abreviatura de What You See Is What You Get, intenta mostrar durante la edición una apariencia próxima al resultado final. La expresión significa "Lo que ves es lo que obtienes". Un editor por bloques permite añadir elementos como párrafos, imágenes o citas y ordenarlos dentro de la página. Las opciones concretas dependen de la herramienta utilizada.

La pantalla de edición puede diferir de la página que verá el público. Por ejemplo, una imagen puede ocupar otro ancho y un título puede partirse en más líneas en un móvil. Antes de publicar, conviene utilizar la vista previa y comprobar las presentaciones que realmente se van a utilizar.

Dar libertad para escoger cualquier color, tamaño y disposición tiene consecuencias. El equipo puede producir páginas inconsistentes y poco accesibles. Ofrecer componentes con usos claros permite conservar flexibilidad sin obligar a cada persona a diseñar desde cero.

## Semántica frente a apariencia

Los elementos del documento deben indicar qué función cumple cada parte. Un **encabezado** identifica el comienzo de una sección. Una **lista** agrupa elementos relacionados. Una **tabla** permite comparar datos organizados en filas y columnas. Utilizarlos correctamente ayuda a conservar una estructura comprensible, además de dar formato al texto.

Esa estructura también puede ser interpretada por herramientas de apoyo. Por ejemplo, un lector de pantalla puede permitir saltar entre encabezados. Aumentar el tamaño de una frase sin marcarla como encabezado cambia su aspecto, pero no comunica que empieza una sección. Del mismo modo, marcar una frase cualquiera como encabezado puede introducir una sección que no existe.

**Ejemplo.** Una ficha de un trámite puede tener los apartados "Requisitos", "Plazo" y "Solicitud". Los tres deben utilizar el nivel de encabezado que corresponda. Un botón para enviar la solicitud debe seguir siendo un botón, aunque se quiera destacar visualmente.

## Qué es un activo digital

Un **activo digital** es un recurso que la organización conserva y utiliza, como una fotografía, un logotipo, un vídeo o un documento. Gestionarlo implica saber qué contiene, de dónde procede, quién puede utilizarlo y en qué páginas aparece. Así se puede localizar, reutilizar y sustituir de forma controlada.

Una biblioteca multimedia no debería funcionar como un cajón de archivos anónimos. "IMG\_8742\_final\_2.jpg" no explica qué representa la imagen ni si puede publicarse. Un identificador estable, un nombre comprensible y metadatos adecuados permiten mantenerla.

| **Información del activo** | **Por qué importa** |
| --- | --- |
| Descripción y tema | Localizarlo sin depender del nombre técnico. |
| Autoría y derechos | Conocer condiciones de publicación y atribución. |
| Original y derivados | Distinguir la fuente de recortes y compresiones. |
| Dimensiones o duración | Elegir usos adecuados. |
| Relaciones de uso | Saber qué páginas afectará una sustitución. |
| Fecha de revisión o fin de uso | Retirar materiales cuando corresponda. |

## Originales y derivados

El **original** es el archivo de partida que se conserva. Un **derivado** es una versión obtenida a partir de él, como una miniatura o una imagen recortada. Por ejemplo, el CMS puede mostrar una miniatura en un listado y una fotografía mayor en la ficha del producto. Esto evita descargar un archivo muy grande cuando solo hace falta una imagen pequeña.

Ampliar una imagen pequeña no recupera los detalles que no estaban en el original. También hay que comprobar los recortes automáticos. Por ejemplo, una miniatura cuadrada podría dejar fuera una parte importante de la camiseta o cortar el rostro de una persona.

Si varias páginas utilizan la misma fotografía, sustituir su archivo puede cambiar todas ellas. Antes de hacerlo hay que decidir si se está corrigiendo esa fotografía o incorporando otra distinta. En el segundo caso puede ser más adecuado crear un nuevo recurso y cambiar solo las páginas que deban utilizarlo.

## Texto alternativo y contexto

El **texto alternativo** comunica la información o la función de una imagen a quien no puede verla. Por ejemplo, en la ficha de una camiseta puede indicar el color y un detalle relevante de su diseño. Debe aportar lo necesario para comprender su uso en esa página, sin describir todos los elementos del archivo de forma indiscriminada.

La [guía de imágenes de W3C WAI](https://www.w3.org/WAI/tutorials/images/) explica cómo adaptar el texto alternativo al uso de cada imagen. Una imagen puramente decorativa puede tener una alternativa vacía para que las herramientas de lectura la omitan. Si la imagen es un enlace, la alternativa debe comunicar su destino o función. Un gráfico complejo puede necesitar además una explicación en el texto de la página.

La misma fotografía puede cumplir funciones distintas. En una ficha de Costa Sur, puede mostrar cómo es la camiseta. En una cabecera decorativa, puede servir solo de fondo. Por eso, el CMS puede necesitar permitir un texto alternativo diferente según dónde se utilice la imagen, en lugar de obligar a usar siempre una única descripción.

## Vídeo, audio y documentos

En un vídeo hay que considerar tanto el sonido como la información visual. Los subtítulos permiten leer lo que se dice y los sonidos relevantes. Una transcripción ofrece el contenido en forma de texto. Si se muestra una acción importante sin describirla en el audio, también hay que proporcionar una forma de comprenderla. Los controles del reproductor deben poder utilizarse de manera accesible.

Los documentos descargables tienen título, idioma, estructura y versiones. Publicar un PDF no exime de mantener el contenido. Si la información principal puede ofrecerse de forma clara en HTML, se facilita su lectura en distintas pantallas y su actualización.

La [documentación de WAI sobre medios audiovisuales](https://www.w3.org/WAI/media/av/) desarrolla estas necesidades. El nivel de adaptación depende del contenido y del uso, no solo de la extensión del archivo.

## Comprueba la comprensión

**¿Cambiar de tema garantiza que todas las páginas sigan siendo correctas?** No. Hay que comprobar campos, componentes, navegación y accesibilidad con contenido representativo.

**¿Debe repetirse el pie de foto como texto alternativo?** No necesariamente. Hay que evitar redundancias y conservar la información necesaria en ese contexto.

**¿Puede borrarse una imagen que ya no aparece en la portada?** Solo después de comprobar otros usos y la política de conservación. Retirarla de una vista no implica que nadie más la utilice.
