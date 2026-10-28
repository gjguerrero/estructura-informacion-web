# 6. Metadatos: describir, localizar y gobernar el contenido

## Mucho más que las etiquetas de una página

Los **metadatos** son datos que describen o permiten administrar un recurso. Indican, por ejemplo, quién lo creó, de qué trata, en qué idioma está, qué derechos tiene o cuándo debe revisarse. No se limitan a las etiquetas HTML destinadas a buscadores.

La distinción entre contenido y metadatos depende del punto de vista. La fecha de un evento es información principal para quien quiere asistir; la fecha de última revisión describe la gestión de su ficha. Ambas pueden guardarse como campos del mismo registro.

Una descripción no pierde su condición de metadato porque sea visible al público. La autoría y la fecha de publicación suelen mostrarse. Otros metadatos, como notas internas o responsables de aprobación, pueden necesitar acceso restringido.

## Familias de metadatos

Estas familias sirven para analizar necesidades y pueden solaparse; no son compartimentos que todos los CMS implementen con los mismos nombres.

| Familia | Para qué sirve | Ejemplo |
| --- | --- | --- |
| Descriptivos | Identificar, resumir y localizar. | Título, tema, resumen, palabras clave. |
| Administrativos | Organizar la gestión. | Responsable, estado, fecha de revisión. |
| Técnicos | Describir el archivo o su tratamiento. | Formato, dimensiones, duración, tamaño. |
| Derechos y uso | Indicar condiciones de utilización. | Licencia, titular, atribución, caducidad de uso. |
| Estructurales | Expresar relaciones y organización. | Capítulo de una obra, imagen de portada de una ficha. |
| Procedencia y preservación | Documentar origen y transformaciones. | Fuente, fecha de importación, registro de conversión. |

Supongamos que una imagen se ve correctamente, pero nadie sabe quién la hizo ni si puede utilizarse. Sus metadatos técnicos pueden estar completos y sus metadatos de derechos ser insuficientes. La calidad debe evaluarse según los usos, no contando campos rellenados.

## Un ejemplo completo

La ficha ficticia «Cómo solicitar una tutoría» podría tener como contenido principal los pasos y requisitos. Sus metadatos de gestión podrían ser los siguientes:

| Campo | Valor de ejemplo | Decisión que permite |
| --- | --- | --- |
| Identificador | SERV-042 | Mantener identidad entre sistemas. |
| Idioma | Español | Ofrecer la versión adecuada. |
| Unidad responsable | Secretaría académica | Saber quién debe validar un cambio. |
| Estado editorial | Publicado | Conocer la situación del registro. |
| Fecha de publicación | 1 de octubre de 2026 | Distinguir la salida pública. |
| Última revisión de vigencia | 20 de octubre de 2026 | Saber cuándo se contrastaron las instrucciones. |
| Próxima revisión | 20 de enero de 2027 | Organizar el mantenimiento. |
| Fuente | Procedimiento interno identificado | Verificar la procedencia. |
| Audiencia | Estudiantes del programa | Contextualizar requisitos. |

«Última modificación» y «última revisión de vigencia» no significan lo mismo. Cambiar una coma modifica el registro, pero no demuestra que alguien haya comprobado los requisitos. La interfaz debería evitar que una fecha automática sugiera una revisión que no ocurrió.

## Esquemas y vocabularios compartidos

Un **esquema de metadatos** define qué propiedades existen y qué significan. Usar nombres conocidos facilita intercambiar información, pero solo si se conserva su significado.

[Dublin Core, mediante los términos de DCMI](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/), ofrece propiedades como título, creador, tema, descripción, identificador, idioma y derechos. No obliga a que cualquier CMS copie todos sus campos. Sirve como referencia para describir recursos y acordar correspondencias entre sistemas.

Si un sistema utiliza «autor» para la firma pública y otro lo usa para quien introdujo los datos, una importación directa puede producir errores. Antes de intercambiar hay que acordar si se transfiere creador, colaborador, responsable o usuario de edición.

## Valores controlados y datos libres

Algunos metadatos admiten texto libre; otros se benefician de un vocabulario acordado. Para el idioma, el estado o la unidad responsable, introducir variantes arbitrarias complica filtros e informes. «Español», «español», «ES» y «Castellano» podrían tratarse como valores distintos si no existe normalización.

Un vocabulario controlado debe incluir definiciones, no solo nombres. La etiqueta «activo» puede significar «publicado», «vigente» o «con acceso permitido». Conviene evitar que un mismo campo mezcle esas dimensiones.

Tampoco todos los campos deben convertirse en listas cerradas. El resumen de una noticia necesita expresar información particular. Una estructura adecuada combina consistencia en los datos comparables y libertad donde aporta significado.

## Metadatos automáticos y metadatos humanos

El sistema puede registrar fecha de creación, usuario que modifica o tamaño de un archivo. Una persona debe determinar, en muchos casos, audiencia, finalidad y responsable de revisión. Una sugerencia automática puede ayudar, pero necesita controles proporcionales al riesgo.

No todos los datos extraídos son correctos o convenientes para publicar. Una fotografía puede contener información de ubicación. Un documento puede conservar autoría interna o comentarios. La revisión debe distinguir los metadatos que se guardan para gestión de los que se exponen al público.

Importar un archivo no equivale a aprobar la publicación de todo lo que contiene. Las reglas de exportación y las APIs también deben respetar esa distinción.

## Metadatos para descubrimiento y presentación

El título de una página, su descripción para buscadores y los datos usados en una vista previa social son aplicaciones concretas de metadatos. No sustituyen el contenido principal ni obligan a un buscador a presentar exactamente el texto propuesto.

Los datos estructurados publicados para sistemas externos deben corresponder a información real. Declarar una valoración, un precio o una disponibilidad que no coincide con la oferta visible introduce incoherencias. El [capítulo 14](descubrimiento-seo.md) profundiza en esta dimensión.

## Calidad y mantenimiento de los metadatos

Un dato puede faltar, estar mal formado, estar desactualizado o ser contradictorio con otro. Cada problema requiere una respuesta distinta. Los campos obligatorios ayudan frente a ausencias; las listas controladas, frente a variaciones; la revisión periódica, frente a obsolescencia.

Un metadato sin responsable tiende a deteriorarse. Si se exige «próxima revisión», debe existir un mecanismo para utilizarla: una cola de trabajo, un aviso o una consulta editorial. Recoger datos que nadie utiliza añade esfuerzo sin mejorar la gestión.

## Comprueba la comprensión

**¿Los metadatos son siempre invisibles?** No. Un título, una firma o una fecha pueden describir el recurso y mostrarse al lector.

**¿Actualizar la fecha automática de modificación acredita que el contenido está vigente?** No. Hace falta registrar qué se revisó y con qué criterio.

**¿Por qué una fotografía puede necesitar una fecha de caducidad de uso?** Porque las condiciones que permiten publicarla pueden terminar antes que su utilidad técnica. El archivo seguirá abriéndose, pero su publicación deberá revisarse.
