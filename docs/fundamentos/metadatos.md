# 6. Metadatos para describir, localizar y gestionar el contenido

## Mucho más que las etiquetas de una página

Los **metadatos** son datos que describen un contenido o ayudan a gestionarlo. Por ejemplo, una fotografía puede ir acompañada de su autoría, la fecha en que se tomó, su formato y sus condiciones de uso. Esos datos permiten identificarla, encontrarla y decidir si puede publicarse. Los metadatos se utilizan en muchas tareas, no solo para facilitar que los buscadores encuentren una página.

La diferencia entre contenido y metadatos depende de lo que estemos describiendo. En una actividad, la fecha de celebración forma parte de la información que necesita quien quiere asistir. La fecha en que se revisó su ficha describe cómo se mantiene esa información. El CMS puede guardar ambas fechas como campos, aunque tengan propósitos distintos.

Algunos metadatos se muestran al público, como la autoría o la fecha de publicación de una noticia. Otros sirven para el trabajo interno, como las observaciones de quien revisa el texto. Que un dato sea un metadato no determina por sí solo si debe ser público. Hay que decidir quién necesita verlo.

## Familias de metadatos

Podemos agrupar los metadatos según la función que cumplen. La tabla ofrece una clasificación para reconocer esas funciones. Un mismo dato puede servir para varias tareas y cada CMS puede organizarlo con nombres diferentes.

| **Familia** | **Para qué sirve** | **Ejemplo** |
| --- | --- | --- |
| Descriptivos | Identificar, resumir y localizar. | Título, tema, resumen, palabras clave. |
| Administrativos | Organizar la gestión. | Responsable, estado, fecha de revisión. |
| Técnicos | Describir el archivo o su tratamiento. | Formato, dimensiones, duración, tamaño. |
| Derechos y uso | Indicar condiciones de utilización. | Licencia, titular, atribución, caducidad de uso. |
| Estructurales | Indicar cómo se relacionan las partes de un contenido. | Capítulo de una obra, imagen de portada de una ficha. |
| Procedencia y preservación | Registrar de dónde procede un archivo y qué cambios ha recibido. | Fuente, fecha de importación, registro de conversión. |

Supongamos que una imagen se ve correctamente, pero nadie sabe quién la hizo ni si puede utilizarse. Sus metadatos técnicos pueden estar completos y sus metadatos de derechos ser insuficientes. La calidad debe evaluarse según los usos, no contando campos rellenados.

## Un ejemplo completo

La ficha ficticia "Cómo solicitar una tutoría" puede explicar los pasos y requisitos del trámite. Además, puede guardar los datos de gestión recogidos en la tabla. Por ejemplo, saber qué unidad es responsable permite pedirle que confirme si las instrucciones siguen siendo correctas.

| **Campo** | **Valor de ejemplo** | **Decisión que permite** |
| --- | --- | --- |
| Identificador | SERV-042 | Reconocer la misma ficha en distintos sistemas. |
| Idioma | Español | Ofrecer la versión adecuada. |
| Unidad responsable | Secretaría académica | Saber quién debe validar un cambio. |
| Estado editorial | Publicado | Conocer la situación del registro. |
| Fecha de publicación | 1 de octubre de 2026 | Saber desde cuándo es pública. |
| Última revisión de vigencia | 20 de octubre de 2026 | Saber cuándo se contrastaron las instrucciones. |
| Próxima revisión | 20 de enero de 2027 | Organizar el mantenimiento. |
| Fuente | Procedimiento interno identificado | Verificar la procedencia. |
| Audiencia | Estudiantes del programa | Identificar a quién van dirigidas las instrucciones. |

"Última modificación" y "última revisión de vigencia" no significan lo mismo. Cambiar una coma modifica el registro, pero no demuestra que alguien haya comprobado los requisitos. La interfaz debería evitar que una fecha automática sugiera una revisión que no ocurrió.

## Esquemas y vocabularios compartidos

Un **esquema de metadatos** establece qué datos se utilizarán para describir los recursos y qué significa cada uno. Por ejemplo, puede definir que "Creador" identifica a quien elaboró una fotografía. Si dos sistemas comparten esas definiciones, resulta más fácil transferir la información sin cambiar su significado.

Un ejemplo es [Dublin Core](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/), que proporciona términos acordados para describir recursos. Incluye propiedades como título, creador, tema, idioma y derechos. Puede utilizarse como referencia para decidir cómo describir los contenidos o cómo intercambiarlos entre sistemas. No es necesario incorporar todas sus propiedades a cualquier CMS.

Si un sistema utiliza "autor" para la firma pública y otro lo usa para quien introdujo los datos, una importación directa puede producir errores. Antes de intercambiar hay que acordar si se transfiere creador, colaborador, responsable o usuario de edición.

## Valores controlados y datos libres

Un **vocabulario controlado** es un conjunto de valores acordados para un campo. Por ejemplo, el idioma puede elegirse de una lista. Si cada persona lo escribe libremente, podrían aparecer "Español", "español", "ES" y "Castellano" como valores diferentes. Elegir una opción común facilita agrupar los contenidos y filtrarlos por idioma.

También hay que explicar qué significa cada opción. El valor "Activo" resulta ambiguo si unas personas lo interpretan como "Publicado" y otras como "Revisado y vigente". Una página puede estar publicada y contener datos antiguos. Conviene representar esas situaciones por separado.

Tampoco todos los campos deben convertirse en listas cerradas. El resumen de una noticia necesita expresar información particular. Una estructura adecuada combina consistencia en los datos comparables y libertad donde aporta significado.

## Metadatos automáticos y metadatos humanos

Algunos metadatos pueden registrarse automáticamente, como la fecha de creación o el tamaño de un archivo. Otros necesitan una decisión humana, como la persona responsable de revisar una convocatoria. Las sugerencias automáticas deben comprobarse. Por ejemplo, deducir el tema de una noticia no garantiza que la categoría propuesta sea la adecuada.

No todos los datos extraídos son correctos o convenientes para publicar. Una fotografía puede contener información de ubicación. Un documento puede conservar autoría interna o comentarios. La revisión debe distinguir los metadatos que se guardan para gestión de los que se exponen al público.

Antes de publicar un archivo, hay que revisar también la información que lleva incorporada. Además, al exportar datos o permitir que otra aplicación los consulte, debe decidirse qué campos pueden salir del CMS. Los comentarios internos de revisión no deberían enviarse al público junto con el texto aprobado.

## Metadatos para descubrimiento y presentación

Los metadatos también ayudan a presentar un contenido fuera de su página. Por ejemplo, al compartir una noticia en una red social pueden mostrarse un título, un resumen y una imagen. El CMS puede permitir prepararlos. Un buscador puede utilizar esa información o mostrar otro fragmento que considere más adecuado para la consulta.

Una página puede incluir datos estructurados para que otros sistemas reconozcan, por ejemplo, el precio de un producto. Esos datos deben coincidir con la información que se ofrece al público. Si indican que el producto está disponible y la tienda lo muestra como agotado, se produce una contradicción. El [capítulo 14](descubrimiento-seo.md#14-descubrimiento-seo-y-distribucion) explica estos usos con más detalle.

## Calidad y mantenimiento de los metadatos

La revisión de los metadatos debe identificar el problema concreto. Un campo obligatorio ayuda a detectar datos que faltan. Una lista de opciones evita que se escriba de varias maneras el mismo idioma. Una revisión periódica permite comprobar si el responsable o la fecha de vigencia siguen siendo correctos. Cada medida resuelve una dificultad distinta.

Guardar una fecha de próxima revisión solo resulta útil si después se utiliza. Por ejemplo, el CMS puede mostrar al equipo un listado de fichas que deben revisarse esa semana o enviar un aviso a sus responsables. La organización debe acordar quién atenderá esos avisos y qué se comprobará al revisar cada ficha.

## Comprueba la comprensión

**¿Los metadatos son siempre invisibles?** No. Un título, una firma o una fecha pueden describir el recurso y mostrarse al lector.

**¿Actualizar la fecha automática de modificación acredita que el contenido está vigente?** No. Hace falta registrar qué se revisó y con qué criterio.

**¿Por qué una fotografía puede necesitar una fecha de caducidad de uso?** Porque el permiso para publicarla puede tener una duración limitada. Aunque el archivo siga funcionando, al llegar esa fecha será necesario revisar si puede continuar publicado.
