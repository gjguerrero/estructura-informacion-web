# 10. Presentación, edición y activos multimedia

## La plantilla interpreta el modelo

Una **plantilla** establece cómo se presenta un tipo de contenido o una vista. Un **tema** suele reunir plantillas, estilos y otros recursos de presentación. Un **componente** representa una unidad reutilizable de interfaz, como una tarjeta de evento o un aviso.

Una misma ficha puede mostrarse completa, resumida en un listado o adaptada a una pantalla pequeña. El contenido mantiene su identidad; cambia la representación. Esto requiere que las vistas conozcan qué campos utilizar y cómo tratarlos.

El diseño no es un adorno posterior. Una plantilla que oculta el plazo de una convocatoria puede impedir completar una tarea aunque el dato esté correctamente almacenado. Por eso se deben revisar contenido y presentación conjuntamente.

## Editores visuales y edición por bloques

Un editor **WYSIWYG** intenta mostrar una apariencia próxima al resultado final. Los editores por bloques permiten componer una pieza mediante unidades como párrafos, imágenes, citas y destacados. Ambas aproximaciones pueden facilitar la edición, pero sus capacidades dependen del CMS.

La vista de edición no siempre reproduce la web final. Pueden cambiar anchura, fuentes, estilos, permisos o datos relacionados. La previsualización debe comprobar las vistas reales y, si hay varios canales, las representaciones relevantes.

Dar libertad para escoger cualquier color, tamaño y disposición tiene consecuencias. El equipo puede producir páginas inconsistentes y poco accesibles. Ofrecer componentes con usos claros permite conservar flexibilidad sin obligar a cada persona a diseñar desde cero.

## Semántica frente a apariencia

Un encabezado identifica una sección, no simplemente un texto grande. Una lista expresa elementos relacionados, no líneas separadas con guiones improvisados. Una tabla representa relaciones entre filas y columnas; no debería utilizarse solo para colocar bloques visualmente.

Esta semántica ayuda a lectores, tecnologías de apoyo y procesos de reutilización. Si un texto se marca como título únicamente porque se desea una fuente mayor, la estructura del documento puede resultar confusa.

**Ejemplo.** Una ficha tiene «Requisitos», «Plazo» y «Solicitud». Esos apartados deben ser encabezados coherentes. El nombre de un botón no necesita convertirse en encabezado para destacar. El componente correspondiente debe resolver su aspecto y función.

## Qué es un activo digital

Un **activo digital** es un recurso reutilizable con valor para la organización: una fotografía, un logotipo, un vídeo o un documento. Gestionarlo implica conocer archivo, descripción, procedencia, derechos, versiones y lugares donde se utiliza.

Una biblioteca multimedia no debería funcionar como un cajón de archivos anónimos. «IMG_8742_final_2.jpg» no explica qué representa la imagen ni si puede publicarse. Un identificador estable, un nombre comprensible y metadatos adecuados permiten mantenerla.

| Información del activo | Por qué importa |
| --- | --- |
| Descripción y tema | Localizarlo sin depender del nombre técnico. |
| Autoría y derechos | Conocer condiciones de publicación y atribución. |
| Original y derivados | Distinguir la fuente de recortes y compresiones. |
| Dimensiones o duración | Elegir usos adecuados. |
| Relaciones de uso | Saber qué páginas afectará una sustitución. |
| Fecha de revisión o fin de uso | Retirar materiales cuando corresponda. |

## Originales y derivados

El **original** es la fuente que se conserva para futuras transformaciones. Un **derivado** puede ser una miniatura, un recorte o una versión comprimida. Disponer de varios tamaños permite servir un archivo adecuado al contexto, reduciendo transferencia innecesaria.

Un derivado no recupera detalle que no existe en el original. Ampliar una fotografía pequeña no equivale a disponer de una imagen de mayor calidad. Además, un recorte automático puede cortar información importante; debe comprobarse el punto de interés y la vista donde aparece.

Sustituir un archivo compartido puede modificar muchas páginas. Conviene distinguir una corrección del mismo activo de la incorporación de otro distinto. La decisión afecta a las referencias y al historial.

## Texto alternativo y contexto

El texto alternativo comunica la función o información de una imagen cuando esta no se percibe visualmente. Debe responder al uso de la imagen, no ser siempre una descripción exhaustiva del archivo.

En la [guía de imágenes de W3C WAI](https://www.w3.org/WAI/tutorials/images/) se distinguen imágenes informativas, decorativas, funcionales y complejas. Una imagen decorativa puede necesitar alternativa vacía; una imagen que actúa como enlace necesita comunicar su función; un gráfico complejo puede requerir explicación adicional.

En Costa Sur, una foto informativa de la camiseta puede destacar el color y el detalle visible. En una cabecera puramente decorativa, repetir esa descripción puede añadir ruido. Por ello, un único texto alternativo global por archivo no siempre basta: el CMS debe permitir tratar el contexto de uso cuando sea necesario.

## Vídeo, audio y documentos

Un vídeo necesita considerar subtítulos, transcripción y la información visual que no aparece en el audio. Una grabación no sustituye automáticamente una explicación textual localizable. También hay que revisar la accesibilidad del reproductor y de los controles.

Los documentos descargables tienen título, idioma, estructura y versiones. Publicar un PDF no exime de mantener el contenido. Si la información principal puede ofrecerse de forma clara en HTML, se facilita su lectura en distintas pantallas y su actualización.

La [documentación de WAI sobre medios audiovisuales](https://www.w3.org/WAI/media/av/) desarrolla estas necesidades. El nivel de adaptación depende del contenido y del uso, no solo de la extensión del archivo.

## Comprueba la comprensión

**¿Cambiar de tema garantiza que todas las páginas sigan siendo correctas?** No. Hay que comprobar campos, componentes, navegación y accesibilidad con contenido representativo.

**¿Debe repetirse el pie de foto como texto alternativo?** No necesariamente. Hay que evitar redundancias y conservar la información necesaria en ese contexto.

**¿Puede borrarse una imagen que ya no aparece en la portada?** Solo después de comprobar otros usos y la política de conservación. Retirarla de una vista no implica que nadie más la utilice.
