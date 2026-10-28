# 15. Idiomas, localización y publicación en varios canales

## Traducir la interfaz y traducir contenidos

Un CMS puede ofrecer su panel en español y conservar todas las noticias en otro idioma. La traducción de la **interfaz** afecta a controles y mensajes del programa. La traducción de la **configuración** puede afectar a nombres de menús o vocabularios. La traducción del **contenido** afecta a las piezas publicadas.

La [guía de Drupal sobre estas tres dimensiones](https://www.drupal.org/docs/user_guide/en/language-concept.html) muestra por qué deben tratarse por separado. Que un producto admita idiomas no demuestra que resuelva todos los requisitos de un proyecto multilingüe.

## Internacionalización y localización

La **internacionalización** prepara un sistema para adaptarse a distintos idiomas y convenciones. La **localización** realiza esa adaptación a un contexto concreto. Incluye vocabulario, formatos, moneda, unidades, imágenes y expectativas culturales.

La fecha «03/04/2026» puede interpretarse de formas diferentes. Un precio necesita moneda y condiciones; un plazo con hora necesita una referencia temporal. Traducir las palabras sin revisar estos elementos puede conservar el error en varios idiomas.

El idioma y el país tampoco son equivalentes. Una misma lengua se utiliza en distintos territorios y una organización puede necesitar información diferente por audiencia o jurisdicción. Esa variación debe modelarse de forma explícita.

## Identidad compartida y versiones lingüísticas

Las traducciones pueden vincularse a una misma entidad conceptual. Así, una persona puede pasar de la ficha española a su equivalente en otro idioma. El sistema debe conocer esa relación; no basta con que ambas páginas tengan títulos parecidos.

Algunos campos pueden ser compartidos, como un identificador. Otros son traducibles, como descripción y título. Otros pueden necesitar adaptación específica, como una imagen con texto. La decisión se toma por campo y finalidad, no solo por página.

Si el lugar de un evento cambia, la actualización debería alcanzar las versiones que comparten ese dato. Si se corrige una expresión lingüística, quizá solo cambie una traducción.

## Flujo de traducción y vigencia

Una traducción necesita estados y responsables. «Existe en inglés» no significa que esté actualizada respecto a la versión fuente. Conviene registrar qué revisión sirvió de origen y detectar cuándo una modificación exige nueva revisión.

| Situación | Decisión necesaria |
| --- | --- |
| Cambio de una errata sin alterar significado | Determinar si afecta a otras versiones. |
| Cambio de fecha o requisito | Revisar todas las versiones afectadas. |
| Nueva pieza aún sin traducción | Decidir si se publica solo en un idioma o se espera. |
| Traducción pendiente de aprobación | Evitar presentarla como validada. |
| Retirada de la fuente | Revisar la retirada o conservación de sus traducciones. |

La traducción automática puede producir borradores, pero no acredita equivalencia de significado, exactitud terminológica ni adecuación al público. El proceso debe asignar revisión cuando el uso lo requiera.

## Ausencias y fallback

Un **fallback** ofrece una alternativa cuando falta una versión. Por ejemplo, puede mostrarse el contenido en el idioma original. Debe ser una decisión explícita y comprensible para el público.

Mezclar silenciosamente un título traducido con requisitos en otro idioma puede dar una impresión falsa de completitud. En ciertos contenidos es preferible indicar que la versión aún no está disponible. En otros, ofrecer la fuente claramente identificada puede ser útil.

El selector de idioma debe llevar a una página equivalente cuando exista. Enviar siempre a la portada obliga a repetir la búsqueda y rompe el contexto.

## Multicanal y multisitio

La publicación **multicanal** distribuye información a diferentes medios, como web, aplicación y boletín. La gestión **multisitio** permite administrar varios sitios, con distintos grados de estructura, usuarios y contenido compartidos.

Reutilizar no significa mostrar todo igual. Una aplicación puede necesitar un resumen; una web, la explicación completa; una pantalla, un aviso breve. Los fragmentos deben conservar contexto y no introducir contradicciones.

La compartición también amplía el alcance de los cambios. Modificar un activo común puede afectar a varios sitios. Antes de publicarlo deben conocerse sus consumidores, responsables y condiciones de entrega.

## Comprueba la comprensión

**¿Poner el panel en español traduce las fichas?** No. Son capas distintas.

**¿Una traducción puede estar publicada y desactualizada?** Sí. Hay que relacionarla con la revisión fuente y revisar los cambios relevantes.

**¿Multicanal significa copiar todo en varios sitios?** No necesariamente. Un modelo estructurado permite reutilizar una fuente y adaptar sus representaciones, con control de versiones y contexto.
