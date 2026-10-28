# 14. Descubrimiento, SEO y distribución

## Que el contenido pueda encontrarse

Publicar una pieza no garantiza que llegue a quien la necesita. El descubrimiento depende de navegación, enlaces, búsqueda interna, buscadores externos y otros canales. Cada vía requiere que el contenido tenga identidad, contexto y estructura adecuados.

El **SEO** (*Search Engine Optimization*) reúne prácticas para facilitar que los buscadores comprendan el sitio y para mejorar su presencia en resultados relevantes. No consiste en repetir palabras ni garantiza posiciones concretas. La [guía inicial de Google Search Central](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) parte de contenidos útiles y comprensibles.

## Rastreo, indexación y presentación de resultados

El **rastreo** descubre y descarga recursos. La **indexación** procesa información que puede incorporarse al índice. La presentación de resultados selecciona qué mostrar para una consulta. Son etapas relacionadas, pero diferentes.

Una página puede ser accesible al público y no estar indexada. Un cambio puede tardar en reflejarse en resultados. Un CMS puede generar metadatos o un mapa del sitio, pero no controla todas las decisiones de los buscadores.

El objetivo editorial sigue siendo responder a una necesidad real. Una página llamada «Servicios» con información vaga será difícil de interpretar tanto para personas como para sistemas de búsqueda.

## Título, descripción y dirección

El título de la página debe identificar su tema de forma concreta. La descripción puede ofrecer un resumen que ayude a decidir si el resultado es pertinente. Los buscadores pueden utilizar otros fragmentos del contenido, por lo que escribir una descripción no garantiza su reproducción literal.

La URL debe ser estable y comprensible cuando resulte posible. Cambiar títulos no exige siempre modificarla. Si una reestructuración cambia direcciones, debe prepararse un mapa entre las anteriores y las nuevas.

**Ejemplo.** «Solicitar certificado académico» expresa una tarea. «Información 04 nueva versión final» refleja el trabajo interno y envejece mal. El título, los encabezados y el contenido deben referirse al mismo servicio.

## Duplicados y URL canónica

Un mismo contenido puede estar accesible por varias URLs, por ejemplo con parámetros de campaña o diferentes rutas. Una **URL canónica** expresa qué versión se prefiere como referencia entre páginas duplicadas o muy similares.

La [documentación de Google sobre canonicalización](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) explica que se utilizan distintas señales. Declarar una canónica no equivale a redirigir a la persona ni a impedir el acceso a otras direcciones.

Si el problema es que dos equipos mantienen copias contradictorias, la canónica no sustituye la consolidación editorial. Hay que decidir cuál es la fuente y corregir la duplicación del trabajo.

## Indexación y privacidad

`robots.txt` comunica reglas de rastreo a robots que las respetan. `noindex` pide excluir un recurso del índice a buscadores que reconocen esa instrucción. Ninguno es un mecanismo de autenticación.

Para que Google procese `noindex`, debe poder acceder a la instrucción; bloquear el rastreo puede impedir que la vea. La [documentación oficial sobre noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing) explica esta diferencia.

Un documento privado necesita control de acceso. Ocultarlo del menú o de los resultados no protege su URL. Esta separación conecta directamente con los [permisos del CMS](usuarios-roles-permisos.md).

## Mapas del sitio, datos estructurados y vistas previas

Un **sitemap** facilita comunicar URLs a los buscadores. No es el menú de navegación ni garantiza que todas se indexen. Debe representar contenido que se desea ofrecer y mantenerse coherente con sus direcciones y estados.

Los **datos estructurados** describen entidades y propiedades con un vocabulario interpretable por máquinas. Por ejemplo, pueden describir un producto o un evento. No deben declarar información ficticia ni contradecir el contenido visible. Los [principios de datos estructurados de Google](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) explican su función en ese buscador.

Las vistas previas sociales utilizan sus propios metadatos y pueden conservar copias temporales. Una imagen corregida en el CMS no siempre cambiará inmediatamente en todos los mensajes ya compartidos.

## Distribuir conservando contexto

Un fragmento publicado en un boletín debe seguir identificando a qué se refiere y cómo acceder a la fuente. «Mañana comienza» puede volverse ambiguo si se consulta días después. Las fechas explícitas y los enlaces estables ayudan a reutilizar contenidos.

También conviene saber qué canales consumen una pieza. Si cambia una condición importante, actualizar la web puede no ser suficiente para corregir un boletín ya enviado o una copia distribuida. El flujo debe prever cómo comunicar correcciones.

## Comprueba la comprensión

**¿No aparecer en Google significa que una página es privada?** No. Puede ser pública y accesible directamente.

**¿Una etiqueta canónica corrige dos textos contradictorios?** No. Es una señal para tratar URLs; la contradicción requiere una decisión editorial.

**¿Qué debe priorizar una ficha?** Resolver la tarea del público con información clara, vigente y localizable. Los metadatos ayudan a comunicar esa utilidad.
