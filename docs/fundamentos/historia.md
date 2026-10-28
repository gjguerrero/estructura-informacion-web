# 3. Historia y evolución de los CMS

## Por qué estudiar su historia

Las herramientas de gestión de contenidos responden a problemas que fueron apareciendo al crecer la web: publicar con frecuencia, permitir la participación de varias personas, separar diseño y datos, reutilizar información y controlar cambios. Conocer esa evolución permite entender por qué conviven sistemas tan diferentes.

No hay una frontera universal que marque el nacimiento de «el primer CMS». La gestión documental y la publicación electrónica tienen antecedentes anteriores a la web. Además, herramientas empresariales, sistemas de noticias, comunidades y blogs siguieron trayectorias distintas. El recorrido siguiente es una síntesis didáctica de necesidades, no una clasificación cerrada de generaciones.

## De la web inicial a la publicación repetitiva

Tim Berners-Lee propuso la web en el CERN en **1989**. El **30 de abril de 1993**, el CERN puso su software de la web en el dominio público, un hito que favoreció su difusión. Estas fechas corresponden a la web, no al nacimiento de los CMS. Véase la [historia del CERN](https://home.cern/science/computing/the-birth-of-the-web).

Mantener documentos enlazados era suficiente para ciertos sitios pequeños. Al crecer una publicación, sin embargo, repetir una cabecera, actualizar menús y corregir el mismo dato en varias páginas suponía trabajo y riesgo. Apareció la necesidad de generar páginas a partir de estructuras compartidas y de almacenar información separada del diseño.

**Ejemplo retrospectivo.** Un departamento publica diez documentos. Si cambia su teléfono, puede corregirlos manualmente. Con mil páginas y veinte editores, la misma estrategia deja de ser razonable. El problema no es solo escribir HTML: es coordinar modificaciones y evitar contradicciones.

## Bases de datos, plantillas y equipos editoriales

La publicación mediante aplicaciones y bases de datos permitió guardar noticias o productos como registros y mostrarlos con plantillas. Una corrección en un registro podía reflejarse en distintas vistas. Los formularios hicieron posible que más personas participaran sin editar directamente los archivos que componían el sitio.

En paralelo, las organizaciones necesitaron permisos, aprobaciones y control de versiones. La pregunta pasó de «¿cómo subimos una página?» a «¿cómo mantenemos miles de piezas con responsables y criterios comunes?». Los sistemas empresariales incorporaron respuestas a estos problemas con diferentes alcances y costes.

Esta evolución no eliminó la edición manual ni la gestión por archivos. Las opciones se acumularon. Todavía resulta sensato mantener ciertos contenidos como archivos de texto si su equipo y sus necesidades lo permiten.

## Comunidades, blogs y proyectos de código abierto

Tres hitos permiten situar proyectos conocidos sin afirmar que fueran los primeros de su categoría:

| Fecha | Hito documentado | Qué ayuda a comprender |
| --- | --- | --- |
| Enero de 2001 | Publicación del software que dio origen a Drupal. | La gestión de comunidades y publicaciones como punto de partida. |
| 2003 | Primera versión de WordPress, derivada de b2/cafelog. | La publicación personal como base para un ecosistema más amplio. |
| Septiembre de 2005 | Primera versión de Joomla. | La continuidad y reorganización de comunidades de desarrollo. |

Las fechas proceden de la [historia de Drupal](https://www.drupal.org/about/history), la [historia de WordPress](https://wordpress.org/about/history/) y el [archivo oficial de Joomla 1.0.0](https://downloads.joomla.org/cms/joomla10/1-0-0).

Los temas y las extensiones favorecieron ecosistemas en los que distintas personas podían aportar diseño y funciones. Esto amplió las posibilidades de adaptación y también las dependencias: instalar componentes de varios proveedores exige coordinar compatibilidad y mantenimiento.

## De «una web» a varios canales

Cuando una organización quiere publicar la misma información en una web, una aplicación móvil, un boletín y una pantalla informativa, copiar y pegar resulta cada vez menos sostenible. El contenido estructurado y las interfaces de programación permiten distribuir información hacia distintas presentaciones.

El término **headless** describe sistemas que separan la gestión de contenidos de la capa encargada de presentarlos al público. No significa que carezcan de interfaz editorial. Tampoco convierte cualquier contenido en reutilizable: si todo está guardado como un gran bloque de HTML pensado para una pantalla, una API solo transporta ese problema a otro canal.

El [capítulo de arquitecturas](arquitecturas.md) compara este enfoque con los CMS integrados y la generación estática. No se trata de que una opción sustituya necesariamente a todas las demás.

## Servicios gestionados y especialización

Otra línea de evolución es la contratación del CMS como servicio. Un proveedor puede gestionar parte de la infraestructura y las actualizaciones. La organización conserva decisiones sobre contenido, usuarios, configuración y condiciones de uso. «Está en la nube» no significa «no necesita mantenimiento organizativo».

También se consolidan herramientas especializadas: comercio electrónico, aprendizaje, activos digitales o información de productos. Pueden compartir conceptos —usuarios, registros, permisos—, pero sus entidades y procesos principales son distintos.

Un catálogo comercial necesita variantes, precios y disponibilidad. Un portal de noticias necesita titulares, secciones y procesos de edición. Forzar ambos dominios a utilizar exactamente el mismo modelo suele producir campos ambiguos y excepciones difíciles de explicar.

## Automatización e inteligencia artificial

La automatización puede ayudar a sugerir etiquetas, producir borradores o detectar información incompleta. No cambia la necesidad de comprobar fuentes, derechos, coherencia y adecuación al público. Un texto fluido puede contener errores; una etiqueta sugerida puede clasificar mal una pieza.

Desde el punto de vista de la gestión, importa registrar qué se ha generado o transformado, quién lo ha revisado y qué versión se publicó. La responsabilidad editorial no desaparece por introducir una herramienta automática. Esta observación es un criterio de diseño del proceso, no una afirmación sobre las funciones de todos los CMS.

## Qué permanece a lo largo de la evolución

Cambian las tecnologías, pero se repiten las preguntas: qué contenido existe, quién lo mantiene, qué significa cada dato, quién puede publicarlo y cómo sabemos que sigue vigente. Esas preguntas son el núcleo de la asignatura.

## Comprueba la comprensión

**¿Un CMS más reciente es necesariamente mejor?** No. Debe resolver el trabajo real y poder mantenerse con los recursos disponibles.

**¿Headless es una etapa obligatoria?** No. Es una decisión de arquitectura con ventajas y costes, especialmente cuando hay varios canales.

**¿Qué tienen en común un blog y un portal corporativo?** Ambos necesitan organizar y publicar contenidos. Sus diferencias de volumen, riesgo y colaboración determinan cuánto control adicional requieren.
