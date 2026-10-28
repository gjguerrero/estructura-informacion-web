# 3. Historia y evolución de los CMS

## De la web inicial a la publicación repetitiva

Tim Berners-Lee propuso la web en el CERN en **1989**. El **30 de abril de 1993**, el CERN puso su software de la web en el dominio público, un hito que favoreció su difusión.

Mantener documentos enlazados era suficiente para ciertos sitios pequeños. Al crecer una publicación, sin embargo, repetir una cabecera, actualizar menús y corregir el mismo dato en varias páginas suponía trabajo y riesgo. Apareció la necesidad de generar páginas a partir de estructuras compartidas y de almacenar información separada del diseño.

**Ejemplo retrospectivo.** Un departamento publica diez documentos. Si cambia su teléfono, puede corregirlos manualmente. Con mil páginas y veinte editores, la misma estrategia deja de ser razonable. El problema no es solo escribir HTML, es coordinar modificaciones y evitar contradicciones.

## Bases de datos, plantillas y equipos editoriales

La publicación mediante aplicaciones y bases de datos permitió guardar noticias o productos como registros y mostrarlos con plantillas. Una corrección en un registro podía reflejarse en distintas vistas. Los formularios hicieron posible que más personas participaran sin editar directamente los archivos que componían el sitio.

En paralelo, las organizaciones necesitaron permisos, aprobaciones y control de versiones. La pregunta pasó de “¿cómo subimos una página?” a “¿cómo mantenemos miles de piezas con responsables y criterios comunes?”.

## Comunidades, blogs y proyectos de código abierto

Tres hitos permiten situar proyectos conocidos sin afirmar que fueran los primeros de su categoría:

| **Fecha** | **Hito documentado** | **Qué ayuda a comprender** |
| --- | --- | --- |
| Enero de 2001 | Publicación del software que dio origen a Drupal. | La gestión de comunidades y publicaciones como punto de partida. |
| 2003 | Primera versión de WordPress, derivada de b2/cafelog. | La publicación personal como base para un ecosistema más amplio. |
| Septiembre de 2005 | Primera versión de Joomla. | La continuidad y reorganización de comunidades de desarrollo. |

Los temas y las extensiones favorecieron ecosistemas en los que distintas personas podían aportar diseño y funciones. Esto amplió las posibilidades de adaptación y también las dependencias: instalar componentes de varios proveedores exige coordinar compatibilidad y mantenimiento.

## De “una web” a varios canales

Cuando una organización quiere publicar la misma información en una web, una aplicación móvil, un boletín y una pantalla informativa, copiar y pegar resulta cada vez menos sostenible. El contenido estructurado y las interfaces de programación permiten distribuir información hacia distintas presentaciones.

El término **headless** describe sistemas que separan la gestión de contenidos de la capa encargada de presentarlos al público. No significa que carezcan de interfaz editorial. Tampoco convierte cualquier contenido en reutilizable, si todo está guardado como un gran bloque de HTML pensado para una pantalla, una API solo transporta ese problema a otro canal.

El [capítulo de arquitecturas](arquitecturas.md#11-arquitecturas-de-cms-y-formas-de-publicacion) compara este enfoque con los CMS integrados y la generación estática.

## Servicios gestionados y especialización

Una organización puede contratar un CMS que un proveedor aloja y mantiene. Por ejemplo, una tienda puede utilizar una plataforma a la que su personal accede desde el navegador para añadir productos y gestionar contenidos. El proveedor puede encargarse de mantener los servidores e instalar las actualizaciones. Las tareas técnicas incluidas dependen del servicio contratado.

La tienda sigue siendo responsable de la información que publica y de cómo trabaja su equipo. Debe comprobar que las descripciones y los precios sean correctos, decidir quién puede modificarlos y retirar el acceso a las personas que dejan de trabajar en ella. Contratar el mantenimiento técnico permite delegar determinadas tareas, pero sigue siendo necesario organizar y revisar el trabajo con los contenidos.

También existen herramientas especializadas en necesidades concretas. Una plataforma de comercio electrónico está preparada para trabajar con productos y pedidos. Una plataforma de aprendizaje organiza cursos, materiales y actividades del alumnado. Un gestor de archivos multimedia permite administrar fotografías, vídeos y sus derechos de uso. Aunque todas pueden utilizar cuentas, permisos y formularios, la información que gestionan y las tareas que permiten realizar son diferentes.

Podemos verlo comparando una tienda con un portal de noticias. En la tienda, la ficha de una camiseta necesita datos como el precio, las tallas, los colores y las unidades disponibles. En el portal, una noticia necesita un titular, un texto, una autoría, una sección y una fecha de publicación. También cambian las tareas habituales. La tienda debe controlar qué productos pueden comprarse, mientras que el portal necesita organizar la redacción, revisión y publicación de noticias.

Por eso, cada tipo de contenido necesita una estructura adecuada. Utilizar el mismo formulario para una camiseta y una noticia obligaría a incluir campos que no tienen sentido en uno de los casos. Un mismo CMS puede gestionar ambos tipos de contenido si permite definir campos y procesos apropiados para cada uno.

## Automatización e inteligencia artificial

La **automatización** permite realizar algunas tareas sin repetirlas manualmente. Por ejemplo, una herramienta puede avisar de que falta la fecha de una actividad. La **inteligencia artificial** también puede ayudar a proponer etiquetas o preparar un borrador. El equipo debe revisar el resultado antes de utilizarlo. Una noticia bien redactada puede contener una fecha inventada y una etiqueta sugerida puede situarla en la sección equivocada.

Conviene dejar constancia de qué partes se han generado o modificado con estas herramientas, quién las ha revisado y qué versión se ha publicado. Por ejemplo, si una herramienta prepara la descripción de un producto, una persona debe comprobar sus características antes de publicarla. La organización tiene que definir ese procedimiento y comprobar si el CMS permite registrarlo.

## Qué permanece a lo largo de la evolución

Aunque cambien las herramientas, una organización sigue necesitando conocer sus contenidos y mantenerlos. Por ejemplo, debe saber quién responde de una convocatoria, quién puede cambiar su plazo y cuándo se comprobó por última vez que sus requisitos seguían siendo correctos. Estas decisiones forman parte de la gestión del contenido con cualquier tecnología.

## Comprueba la comprensión

**¿Un CMS más reciente es necesariamente mejor?** No. Debe resolver el trabajo real y poder mantenerse con los recursos disponibles.

**¿Todos los CMS deben evolucionar hacia una arquitectura headless?** No. Separar la gestión del contenido de su presentación puede resultar útil para distribuirlo en varios canales, pero también exige mantener las aplicaciones que lo muestran. La elección depende de las necesidades y de los recursos de la organización.

**¿Qué tienen en común un blog y un portal corporativo?** Ambos necesitan organizar, publicar y mantener contenidos. Un blog personal puede tener una sola persona responsable. Un portal con muchos departamentos puede necesitar permisos por sección y revisiones antes de publicar.
