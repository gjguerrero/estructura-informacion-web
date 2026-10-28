# 14. Descubrimiento, SEO y distribución

## Que el contenido pueda encontrarse

Después de publicar un contenido, el público necesita poder encontrarlo. Una convocatoria puede localizarse desde el menú de becas, mediante el buscador del portal o a través de un enlace recibido por correo. Cada acceso debe permitir reconocer de qué trata la página y si responde a lo que se busca.

El **SEO**, del inglés Search Engine Optimization u optimización para motores de búsqueda, reúne prácticas que ayudan a los buscadores a comprender un sitio y mostrarlo en consultas pertinentes. Incluye aspectos como los títulos, los enlaces y la organización del contenido. No garantiza una posición concreta. La [guía inicial de Google Search Central](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) explica estas prácticas partiendo de contenidos útiles y comprensibles.

## Rastreo, indexación y presentación de resultados

El **rastreo** es el proceso por el que un buscador localiza y descarga páginas y otros recursos. La **indexación** analiza su información para incorporarla, cuando corresponda, a la colección que utiliza para buscar. Después, ante una consulta, el buscador selecciona y ordena los resultados que muestra. Que una página se haya descargado no garantiza que aparezca en todas esas etapas.

Una página puede ser accesible al público y no estar indexada. Un cambio puede tardar en reflejarse en resultados. Un CMS puede generar metadatos o un mapa del sitio, pero no controla todas las decisiones de los buscadores.

El objetivo editorial sigue siendo responder a una necesidad real. Una página llamada "Servicios" con información vaga será difícil de interpretar tanto para personas como para sistemas de búsqueda.

## Título, descripción y dirección

El título de la página debe identificar su tema de forma concreta. La descripción puede ofrecer un resumen que ayude a decidir si el resultado es pertinente. Los buscadores pueden utilizar otros fragmentos del contenido, por lo que escribir una descripción no garantiza su reproducción literal.

Conviene mantener estable la **URL**, es decir, la dirección web de la página. Corregir su título no obliga necesariamente a cambiar esa dirección. Si se reorganiza el sitio y cambian las URLs, hay que identificar qué nueva dirección corresponde a cada una de las anteriores y preparar las redirecciones necesarias.

**Ejemplo.** "Solicitar certificado académico" expresa una tarea. "Información 04 nueva versión final" refleja el trabajo interno y envejece mal. El título, los encabezados y el contenido deben referirse al mismo servicio.

## Duplicados y URL canónica

Una misma noticia puede abrirse mediante varias direcciones, por ejemplo, si un enlace añade datos para identificar una campaña. La **URL canónica** indica qué dirección se propone como referencia principal cuando existen páginas duplicadas o muy similares. Ayuda al buscador a interpretar esa repetición.

La [documentación de Google sobre canonicalización](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) explica que se utilizan distintas señales. Declarar una canónica no equivale a redirigir a la persona ni a impedir el acceso a otras direcciones.

Si dos departamentos mantienen páginas con instrucciones contradictorias sobre el mismo trámite, indicar una dirección canónica no corrige los textos. Primero hay que acordar qué información es válida, quién la mantendrá y cómo evitar que sigan existiendo versiones contradictorias.

## Indexación y privacidad

El archivo **robots.txt** comunica a los robots de los buscadores qué rutas deben evitar al rastrear el sitio. La instrucción **noindex** pide a los buscadores que la reconocen que no incluyan un recurso en sus resultados. Estas instrucciones regulan el comportamiento de los buscadores, pero no comprueban quién tiene permiso para abrir la página.

Para que Google pueda aplicar la instrucción noindex, debe poder acceder a ella. Si se bloquea el rastreo de la página, es posible que no llegue a leerla. La [documentación oficial sobre noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing) explica esta diferencia.

Un documento privado necesita control de acceso. Ocultarlo del menú o de los resultados no protege su URL. Esta separación conecta directamente con los [permisos del CMS](usuarios-roles-permisos.md#8-usuarios-roles-permisos-y-responsabilidades).

## Mapas del sitio, datos estructurados y vistas previas

Un **sitemap**, o mapa del sitio para buscadores, es un archivo que les facilita una relación de direcciones del sitio. Puede ayudar a descubrir páginas, pero no garantiza que se incluyan en los resultados. Debe mantenerse actualizado cuando se añaden, cambian o retiran contenidos. Es distinto del menú que utiliza una persona para navegar.

En este contexto, los **datos estructurados** son descripciones preparadas para que un buscador reconozca qué representa la información. Por ejemplo, pueden indicar que una página describe un evento y señalar su fecha y lugar. Deben corresponder al contenido real de la página. Los [principios de datos estructurados de Google](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) explican cómo los utiliza ese servicio.

Cuando se comparte un enlace en una red social, puede aparecer una vista previa con el título, una imagen y un resumen. La plataforma puede guardar temporalmente esos datos. Por eso, cambiar la imagen en el CMS no siempre actualiza de inmediato las vistas previas de enlaces que ya se habían compartido.

## Distribuir conservando contexto

Si una convocatoria se resume en un boletín, el fragmento debe indicar a qué convocatoria se refiere y enlazar a la información completa. La frase "Mañana comienza" puede resultar confusa al leer el mensaje días después. Es preferible indicar una fecha concreta y conservar un enlace que siga funcionando.

Conviene conocer dónde se ha distribuido cada contenido. Corregir un requisito en la web no cambia un correo que ya se ha enviado. Si el error es importante, puede ser necesario comunicar la corrección por los mismos canales y remitir a la versión actualizada.

## Comprueba la comprensión

**¿No aparecer en Google significa que una página es privada?** No. Puede ser pública y accesible directamente.

**¿Una etiqueta canónica corrige dos textos contradictorios?** No. Indica una dirección de referencia al buscador. El equipo debe revisar los textos y decidir cuál contiene la información correcta.

**¿Qué debe priorizar una ficha?** Resolver la tarea del público con información clara, vigente y localizable. Los metadatos ayudan a comunicar esa utilidad.
