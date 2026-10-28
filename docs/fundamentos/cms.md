# 2. Qué es un CMS y qué problema resuelve

## De publicar documentos a gestionar un servicio

Un **CMS** (*Content Management System*, sistema de gestión de contenidos) proporciona medios para crear, estructurar, almacenar, recuperar, revisar y publicar contenidos. Según el producto y su configuración, también puede gestionar permisos, versiones, traducciones, activos multimedia e integraciones.

La idea principal es que el contenido tenga una vida gestionable. Si una organización solo sabe quién subió una página, pero nadie sabe quién debe revisarla, su problema no está resuelto por disponer de un editor visual.

Imaginemos un portal con noticias, servicios y convocatorias. Cada unidad envía documentos por correo a una persona que modifica páginas manualmente. Cuando aumenta el volumen aparecen duplicados, retrasos y dudas sobre cuál es la versión vigente. Un CMS puede ofrecer formularios compartidos, responsabilidades y un flujo de publicación. La organización aún debe decidir las reglas.

## Qué gestiona y qué no garantiza

| Capacidad | Problema que ayuda a resolver | Decisión que sigue siendo humana |
| --- | --- | --- |
| Formularios de edición | Evitar modificar directamente cada página. | Qué información es necesaria. |
| Tipos y campos | Guardar datos de forma consistente. | Cómo modelar el dominio. |
| Permisos | Limitar operaciones y accesos. | Quién debe poder hacer cada cosa. |
| Flujo editorial | Encauzar la revisión y publicación. | Qué controles exige cada contenido. |
| Historial | Conocer cambios y recuperar versiones. | Cuándo restaurar y quién lo autoriza. |
| Plantillas | Presentar contenidos de manera uniforme. | Qué diseño permite entenderlos. |
| Búsqueda y clasificación | Facilitar la recuperación. | Qué vocabulario utiliza el público. |

Un CMS no verifica automáticamente la verdad de un texto, no concede derechos sobre una imagen y no convierte una mala estructura en una buena experiencia. Algunas capacidades pueden requerir módulos adicionales o desarrollo; no deben suponerse por el mero nombre «CMS».

## La separación entre contenido y presentación

Una ficha de servicio puede contener nombre, descripción, requisitos, plazo y contacto. Una plantilla decide dónde aparece cada dato. Separarlos permite cambiar el diseño sin reescribir todas las fichas y utilizar la información en varios canales.

La separación no es absoluta. Los editores por bloques permiten tomar decisiones de composición dentro del contenido. El problema aparece cuando se usa una composición visual para representar datos que deben consultarse o reutilizarse: una fecha escrita dentro de un bloque decorativo puede resultar difícil de filtrar.

Un buen criterio es preguntarse qué necesita conservar su significado aunque cambie el diseño. El plazo de una convocatoria debe seguir siendo un plazo; no debería depender de que alguien recuerde que «el texto rojo de la segunda columna» contiene esa información.

## Quién utiliza el CMS

Hay al menos tres perspectivas. El público quiere encontrar información y completar tareas. El equipo editorial necesita introducir, revisar y actualizar contenidos. El equipo técnico mantiene configuración, integraciones y funcionamiento. En una organización pequeña una persona puede asumir varios papeles, pero las responsabilidades siguen siendo distintas.

El **frontend** es la parte de interacción con el usuario. El **panel de administración** es una interfaz para gestionar el sistema. Conviene no usar «backend» como sinónimo exacto de panel: técnicamente también comprende servicios y lógica que funcionan en el servidor, aunque no tengan una pantalla de administración.

Una cuenta de cliente de una tienda no es, por ello, una cuenta editorial. Y una persona con acceso al panel no debería poder realizar cualquier operación. Los detalles se explican en el [capítulo 8](usuarios-roles-permisos.md).

## Un CMS forma parte de un proceso de negocio

En un portal institucional, publicar un nuevo trámite puede exigir comprobar requisitos, coordinar una fecha de apertura y avisar al servicio de atención. En una tienda, publicar una ficha puede requerir validar precio, stock, fotografías y condiciones de entrega.

El CMS interviene en ese proceso, pero no necesariamente concentra todos los datos. Un sistema de inventario puede ser la fuente de existencias; el CMS, la de textos; una plataforma de pagos, la de confirmaciones de cobro. Hay que delimitar cuál es la fuente autorizada de cada información.

**Ejemplo desarrollado.** Costa Sur recibe una nueva camiseta. La responsable de catálogo crea la ficha; la persona de producto comprueba composición y tallas; el equipo editorial adapta la descripción; quien tiene permiso de publicación la hace visible. La venta exige además disponibilidad y un mecanismo de pedido. «Guardar la ficha» y «empezar a vender» son eventos diferentes.

## Ventajas y costes de la estandarización

Un CMS reduce trabajo repetitivo cuando muchas piezas comparten estructura. También facilita sustituir a una persona sin perder todo el conocimiento de publicación. Los formularios y las reglas explícitas funcionan como memoria organizativa.

A cambio, hay que aprender el sistema, mantenerlo, acordar criterios y revisar las excepciones. Un formulario con cuarenta campos obligatorios puede hacer que el equipo introduzca valores ficticios para avanzar. Una gran libertad visual puede producir páginas difíciles de mantener. El diseño del CMS también debe atender a quienes editan.

La cuestión no es maximizar funciones, sino ajustar el sistema al contenido, al equipo y a la frecuencia de cambio. Para una colección pequeña de documentación, un generador estático con revisión en un repositorio puede bastar. Para cientos de redactores con permisos por departamento, harán falta capacidades editoriales más específicas.

## Vocabulario que conviene fijar

Un **registro** es una pieza concreta; un **tipo de contenido** define su estructura; un **campo** guarda un dato; una **plantilla** determina una presentación; un **estado** sitúa la pieza en su ciclo de vida. Un **módulo o extensión** añade comportamiento. Una **versión de contenido** registra una modificación de la pieza, mientras que una **versión del software** identifica una entrega del programa.

Confundir estos niveles provoca errores. Actualizar el CMS no equivale a actualizar las fechas de sus páginas. Cambiar una plantilla no debería requerir duplicar las noticias. Restaurar una revisión de texto no es restaurar todo el servidor.

## Comprueba la comprensión

**¿Un editor de páginas es siempre un sistema completo de gestión de contenidos?** Puede ser parte de uno, pero hay que comprobar almacenamiento, estructura, permisos, revisión y mantenimiento. Una interfaz atractiva no prueba esas capacidades.

**¿Se necesita un CMS para cualquier web?** No. La necesidad depende del volumen, de las tareas y de las personas. Los criterios de elección se desarrollan en el [capítulo 18](seleccion-cms.md).

**¿Qué cambio aportaría más valor al portal del ejemplo?** Probablemente un modelo común de fichas, responsables y revisión, además de la herramienta. Instalar software sin organizar el trabajo reproduce el desorden con otra interfaz.

## Documentación de referencia

Las descripciones de [WordPress](https://wordpress.org/about/), [Drupal](https://www.drupal.org/about) y la [guía de PrestaShop](https://docs.prestashop-project.org/v.9-documentation/user-guide) permiten reconocer aplicaciones generales y especializadas. Las comparaciones de estos apuntes son conceptuales, no un inventario exhaustivo de funciones por versión.
