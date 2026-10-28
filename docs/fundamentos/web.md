# 1. La web como sistema de información

## Qué debemos comprender

Gestionar una web implica decidir qué información se ofrece, cómo se relaciona y quién se responsabiliza de mantenerla. Antes de estudiar un CMS necesitamos un vocabulario común. Este capítulo distingue Internet, web, página, sitio, aplicación, dominio y alojamiento, y explica por qué una decisión editorial puede tener consecuencias técnicas.

## Internet no es lo mismo que la web

**Internet** es una infraestructura de redes interconectadas. Sobre ella funcionan servicios como el correo electrónico y la web. La **World Wide Web** es un sistema de recursos identificados mediante direcciones y conectados por enlaces, al que habitualmente accedemos con un navegador. Usar Internet no significa necesariamente consultar una página web.

Una **página** es una unidad de presentación que el navegador muestra. Un **sitio** agrupa páginas y recursos bajo una organización común. Una **aplicación web** permite realizar operaciones: matricularse, registrar un pedido o tramitar una solicitud. Las fronteras se solapan: un portal universitario puede tener noticias, un catálogo de estudios y una aplicación de matrícula.

El CMS es una herramienta que ayuda a gestionar determinados contenidos de ese conjunto. No debemos confundir el sitio que recibe el público con el sistema que utiliza el personal para mantenerlo.

## Del navegador al recurso

El navegador actúa como **cliente**: solicita recursos a un servidor mediante protocolos como HTTP. El servidor responde con documentos, archivos o datos. El navegador interpreta esas respuestas y presenta el resultado. Una sola página puede exigir varias solicitudes para obtener una hoja de estilos, una fotografía y otros recursos.

En una dirección ficticia como `https://portal.example/noticias/becas/`, podemos distinguir el esquema `https`, el nombre de dominio `portal.example` y la ruta `/noticias/becas/`. Los ejemplos con el dominio reservado `.example` son ilustrativos, no servicios reales de la asignatura.

| Concepto | Qué significa | Analogía limitada |
| --- | --- | --- |
| Dominio | Nombre que ayuda a localizar un servicio. | La dirección que comunicamos al público. |
| DNS | Sistema que resuelve nombres de dominio hacia información de conexión. | Un directorio de direcciones. |
| Alojamiento | Recursos donde se ejecuta o se sirve el sitio. | El local donde se presta el servicio. |
| URL | Identificador de un recurso que puede incluir ruta y otros componentes. | La dirección de una consulta concreta. |
| Base de datos | Sistema donde una aplicación puede almacenar información estructurada. | Un archivo organizado, con reglas de acceso. |

Cambiar de alojamiento no obliga a cambiar de dominio. Cambiar el texto de una noticia tampoco obliga a cambiar su URL. Mantener estas distinciones ayuda a planificar una migración sin romper los enlaces que otras personas utilizan.

La explicación técnica de este intercambio se desarrolla en [MDN: cómo funciona la web](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works).

## Contenido, estructura, presentación y comportamiento

En una noticia, el contenido incluye lo sucedido y sus circunstancias. La estructura distingue titular, entradilla, cuerpo, autoría y fecha. La presentación decide la tipografía y la disposición. El comportamiento incluye abrir un menú o enviar un formulario.

HTML aporta estructura y significado al documento web; CSS regula su presentación; JavaScript puede añadir comportamiento. No es necesario programarlos para editar un CMS, pero sí comprender que escribir un titular y modificar una plantilla son tareas diferentes.

Supongamos que una convocatoria aparece con una fecha incorrecta. Cambiar el color de esa fecha no corrige la información. Cambiarla en una imagen tampoco actualiza automáticamente el calendario. La solución depende de dónde se guarda el dato y de cómo se reutiliza.

## Estático y dinámico: cómo se entrega una página

Una página **estática** puede estar preparada antes de la visita. Una respuesta **dinámica** se genera o adapta durante la solicitud. Un sitio puede combinar ambos mecanismos. Además, una página estática puede ejecutar JavaScript y consultar servicios: «estática» no significa necesariamente «sin interacción».

Estos apuntes se redactan en Markdown y se transforman en páginas mediante MkDocs. GitHub Pages sirve el resultado. Ese proceso publica documentación; no ejecuta por sí mismo el backend de una tienda ni procesa pedidos.

Una tienda suele necesitar operaciones dinámicas para el carrito, la cuenta del cliente y la disponibilidad. Eso no impide que sirva imágenes o determinadas páginas desde una caché. La arquitectura se estudia en el [capítulo 11](arquitecturas.md).

## Una página no equivale a un registro de contenido

Una portada puede combinar diez noticias, dos avisos y una ficha de contacto. Una misma noticia puede aparecer en la portada, en un listado temático y en su página completa. No son necesariamente tres copias: pueden ser tres presentaciones de un único registro.

Esta relación es fundamental. Si se copia el teléfono de contacto en veinte páginas, habrá veinte lugares que revisar cuando cambie. Si las páginas reutilizan una ficha común, una actualización puede propagarse a todas. La reutilización exige un modelo adecuado y un mecanismo de publicación que refresque las vistas.

## Visibilidad y localización

Quitar una noticia del menú no la elimina. Puede seguir accesible por su URL, por el buscador interno, por enlaces externos o por una API. Tampoco convierte un documento en privado pedir a los buscadores que no lo indexen.

Para retirar información hay que decidir si se despublica, se restringe el acceso, se conserva un archivo público o se elimina. La navegación y la autorización resuelven problemas distintos. Volveremos a esta diferencia al estudiar [permisos](usuarios-roles-permisos.md) y [ciclo de vida](ciclo-vida-revision.md).

## Comprueba la comprensión

**Una dirección de correo aparece en la portada y en cinco páginas de servicios. ¿Cuántos contenidos hay?** No puede deducirse contando las pantallas. Podrían ser seis copias o seis usos de una misma ficha. Hay que inspeccionar el modelo de información.

**Una página desaparece del menú, pero se abre con su enlace. ¿Ha fallado el navegador?** No. El cambio ha afectado a la navegación, no al estado o a los permisos del contenido.

**¿Puede una web estática gestionarse con un proceso editorial?** Sí. La redacción, revisión y aprobación pueden ocurrir antes de generar el sitio. El mecanismo de entrega no determina por sí solo cómo se organiza el trabajo.
