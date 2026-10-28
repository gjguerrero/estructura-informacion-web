# 15. Idiomas, localización y publicación en varios canales

## Traducir la interfaz y traducir contenidos

Cambiar el idioma del panel del CMS puede traducir botones y mensajes del programa sin traducir las noticias. Esa es la traducción de la **interfaz**. La traducción de la **configuración** puede afectar a elementos definidos para el sitio, como el nombre de una sección. La traducción del **contenido** prepara las noticias o fichas en otro idioma. Hay que comprobar cada necesidad por separado.

La [guía de Drupal sobre estas tres dimensiones](https://www.drupal.org/docs/user_guide/en/language-concept.html) muestra por qué deben tratarse por separado. Que un producto admita idiomas no demuestra que resuelva todos los requisitos de un proyecto multilingüe.

## Internacionalización y localización

La **internacionalización** prepara una herramienta para trabajar con distintos idiomas y convenciones. Por ejemplo, permite traducir mensajes y utilizar diferentes formatos de fecha. La **localización** adapta esa herramienta o un contenido a un público concreto. Incluye elegir las traducciones, los formatos, la moneda y otras referencias adecuadas para ese público.

La fecha "03/04/2026" puede interpretarse como el 3 de abril o el 4 de marzo según la convención utilizada. Un precio necesita indicar su moneda y un plazo con hora necesita aclarar la zona horaria. Estos datos deben revisarse al adaptar un contenido, además de traducir sus palabras.

Un idioma puede utilizarse en varios países con convenciones o necesidades diferentes. Por ejemplo, dos versiones en español pueden ofrecer condiciones de entrega distintas porque se dirigen a territorios diferentes. El modelo debe distinguir cuándo cambia únicamente el idioma y cuándo cambia también la información ofrecida.

## Identidad compartida y versiones lingüísticas

El CMS debe reconocer qué páginas son traducciones de una misma pieza. Por ejemplo, la ficha en español de una actividad puede quedar vinculada con su versión en inglés. Así, el selector de idioma puede llevar a la misma actividad. Tener títulos parecidos no basta para establecer esa relación.

Hay que decidir qué campos se comparten entre idiomas. El identificador de una actividad puede ser común, mientras que su título y descripción necesitan traducción. Una imagen que contiene texto también puede necesitar una versión adaptada. Estas decisiones evitan duplicar datos innecesariamente o dejar partes sin traducir.

Si el lugar de un evento cambia, la actualización debería alcanzar las versiones que comparten ese dato. Si se corrige una expresión lingüística, quizá solo cambie una traducción.

## Flujo de traducción y vigencia

Una traducción puede seguir publicada aunque el original haya cambiado. Por ejemplo, si se amplía el plazo de una convocatoria en español, la versión inglesa puede conservar el plazo anterior. Conviene registrar qué versión se tradujo y asignar quién revisará los cambios para mantener la coherencia.

| **Situación** | **Decisión necesaria** |
| --- | --- |
| Cambio de una errata sin alterar significado | Determinar si afecta a otras versiones. |
| Cambio de fecha o requisito | Revisar todas las versiones afectadas. |
| Nueva pieza aún sin traducción | Decidir si se publica solo en un idioma o se espera. |
| Traducción pendiente de aprobación | Evitar presentarla como validada. |
| Retirada de la fuente | Revisar la retirada o conservación de sus traducciones. |

La traducción automática puede ayudar a preparar un borrador. Antes de publicarlo, debe comprobarse que conserva el significado y utiliza los términos adecuados. Un error en una condición o en un plazo puede cambiar lo que entiende el público. La organización debe establecer qué revisión necesita cada tipo de contenido.

## Qué hacer cuando falta una traducción

Cuando una página todavía no está traducida, hay que decidir qué verá quien elija ese idioma. Puede mostrarse un aviso o facilitarse un enlace al contenido original, indicando en qué idioma está. La decisión debe ser comprensible para el público.

Mostrar un título en inglés y los requisitos en español sin explicarlo puede hacer pensar que la página está traducida de forma incompleta o defectuosa. Si se ofrece una versión parcial, debe quedar claro qué información está disponible. En otros casos puede ser preferible esperar a que la traducción esté revisada.

El selector de idioma debe llevar a una página equivalente cuando exista. Enviar siempre a la portada obliga a repetir la búsqueda y rompe el contexto.

## Multicanal y multisitio

La publicación **multicanal** utiliza una misma información en medios diferentes, como una web, una aplicación móvil y un boletín. La gestión **multisitio** permite administrar varios sitios web. Por ejemplo, una universidad puede mantener sitios para distintas facultades y compartir algunos recursos, aunque cada una gestione sus propias noticias.

Cada canal puede necesitar una presentación diferente. Una pantalla informativa puede mostrar el título y la hora de una actividad, mientras que la web ofrece el programa completo. Ambos pueden utilizar el mismo registro. El resumen debe conservar la información necesaria y remitir al contenido completo cuando corresponda.

Los cambios en recursos compartidos pueden afectar a varios sitios. Por ejemplo, sustituir un logotipo común puede modificar todas las páginas que lo utilizan. Antes de hacerlo, conviene identificar dónde aparece, quién lo mantiene y cómo se actualizará en cada sitio.

## Comprueba la comprensión

**¿Poner el panel en español traduce las fichas?** No. Puede cambiar el idioma de los botones y mensajes de edición, pero los textos de las fichas deben traducirse por separado.

**¿Una traducción puede estar publicada y desactualizada?** Sí. Si cambia el plazo de la versión original y no se revisan sus traducciones, estas pueden seguir mostrando el plazo anterior.

**¿Multicanal significa copiar todo en varios sitios?** No necesariamente. Una web y una aplicación pueden consultar el mismo registro y mostrar sus campos de forma diferente. Esto facilita mantener una fuente común, aunque siga siendo necesario comprobar cada canal.
