# 2. Qué es un CMS y qué problema resuelve

## De publicar documentos a gestionar un servicio

Un **CMS** (*Content Management System*, sistema de gestión de contenidos) proporciona medios para crear, estructurar, almacenar, recuperar, revisar y publicar contenidos. Según el producto y su configuración, también puede gestionar permisos, versiones, traducciones, activos multimedia e integraciones.

La idea principal es que el contenido tenga una vida gestionable. Si una organización solo sabe quién subió una página, pero nadie sabe quién debe revisarla, su problema no está resuelto por disponer de un editor visual.

Imaginemos un portal con noticias, servicios y convocatorias. Cada unidad envía documentos por correo a una persona que modifica páginas manualmente. Cuando aumenta el volumen aparecen duplicados, retrasos y dudas sobre cuál es la versión vigente. Un CMS puede ofrecer formularios compartidos, responsabilidades y un flujo de publicación. La organización aún debe decidir las reglas.

## Qué gestiona y qué no garantiza

| **Capacidad** | **Problema que ayuda a resolver** | **Decisión que sigue siendo humana** |
| --- | --- | --- |
| Formularios de edición | Evitar modificar directamente cada página. | Qué información es necesaria. |
| Tipos y campos | Guardar datos de forma consistente. | Cómo modelar el dominio. |
| Permisos | Limitar operaciones y accesos. | Quién debe poder hacer cada cosa. |
| Flujo editorial | Encauzar la revisión y publicación. | Qué controles exige cada contenido. |
| Historial | Conocer cambios y recuperar versiones. | Cuándo restaurar y quién lo autoriza. |
| Plantillas | Presentar contenidos de manera uniforme. | Qué diseño permite entenderlos. |
| Búsqueda y clasificación | Facilitar la recuperación. | Qué vocabulario utiliza el público. |

Un CMS no comprueba automáticamente si la información publicada es verdadera. Tampoco concede derechos de uso sobre una imagen ni garantiza que las páginas estén bien organizadas y sean fáciles de consultar. Algunas funciones pueden requerir módulos adicionales o desarrollo específico. Por eso, debemos comprobar qué ofrece cada herramienta y no dar por incluida una función solo porque el producto se presente como un "CMS".

## La separación entre contenido y presentación

Imaginemos una convocatoria de becas. Su **contenido** incluye el título, los requisitos, la fecha límite de solicitud y el contacto. El CMS puede guardar cada dato en un campo identificado. Por ejemplo, el campo "Fecha límite de solicitud" puede contener el 15 de noviembre de 2026.

La **plantilla** determina cómo se muestran esos datos en la página. Puede colocar el título arriba, los requisitos en el centro y la fecha límite en un lugar destacado. Si cambiamos la plantilla, podemos modificar esa distribución sin volver a escribir la convocatoria. También podemos utilizar la fecha guardada para mostrarla en un calendario de plazos.

Algunos editores permiten construir páginas mediante bloques de texto, imágenes o columnas. Así, quien redacta también puede decidir parte del diseño. El problema aparece si escribe la fecha límite únicamente dentro de un bloque de texto libre, por ejemplo, en un aviso rojo con el mensaje "Solicitudes hasta el 15 de noviembre de 2026". Una persona entiende el aviso, pero el CMS puede tratarlo como un texto cualquiera, sin reconocer que contiene la fecha de cierre de la convocatoria.

Por eso, conviene guardar la fecha límite en un campo específico de tipo fecha. Así, el sistema puede utilizarla para ordenar las convocatorias por plazo o mostrar solo aquellas cuyo plazo sigue abierto. La plantilla puede presentar esa fecha en rojo, en una columna o junto al título. Su significado se conserva aunque cambie el diseño.

## Quién utiliza el CMS

El **público** utiliza el sitio web para consultar información o realizar una tarea. Por ejemplo, un estudiante puede leer una convocatoria de becas, comprobar sus requisitos y acceder al formulario de solicitud.

El **equipo editorial** se encarga de crear y mantener los contenidos. En ese mismo ejemplo, redacta la convocatoria, comprueba la información y actualiza el plazo si cambia. Para hacerlo, utiliza el **panel de administración**, una zona de acceso restringido desde la que se gestionan los contenidos y otras funciones del CMS.

El **equipo técnico** mantiene el sistema en funcionamiento. Se ocupa de tareas como instalar actualizaciones, ajustar la configuración o resolver fallos. Por ejemplo, puede solucionar un problema que impida subir documentos, mientras que el equipo editorial decide qué documento debe acompañar a la convocatoria.

En una organización pequeña, una misma persona puede redactar contenidos y mantener el sistema. Aunque coincidan en una persona, son responsabilidades diferentes.

Tener una cuenta tampoco significa disponer de los mismos permisos que los demás usuarios. En una tienda, la cuenta de un cliente puede permitirle consultar sus pedidos, pero no modificar las descripciones de los productos. Incluso entre quienes acceden al panel de administración puede haber diferencias. Una persona puede tener permiso para preparar un borrador y necesitar que otra lo revise y publique. Los usuarios, roles y permisos se explican en el capítulo 8.

## Un CMS forma parte de un proceso de negocio

En un portal institucional, publicar un nuevo trámite puede exigir comprobar requisitos, coordinar una fecha de apertura y avisar al servicio de atención. En una tienda, publicar una ficha puede requerir validar precio, stock, fotografías y condiciones de entrega.

El CMS interviene en ese proceso, pero no necesariamente concentra todos los datos. Un sistema de inventario puede ser la fuente de existencias. El CMS puede ser la de textos y una plataforma de pagos, la de confirmaciones de cobro. Hay que delimitar cuál es la fuente autorizada de cada información.

**Ejemplo desarrollado.** Costa Sur recibe una nueva camiseta. La responsable de catálogo crea la ficha. La persona de producto comprueba composición y tallas. El equipo editorial adapta la descripción. Quien tiene permiso de publicación la hace visible. La venta exige además disponibilidad y un mecanismo de pedido. "Guardar la ficha" y "empezar a vender" son eventos diferentes.

## Ventajas y costes de la estandarización

Un CMS puede ahorrar trabajo cuando se publican muchos contenidos parecidos. Por ejemplo, si una universidad anuncia decenas de actividades, todas suelen necesitar un título, una fecha, un lugar y un contacto. El equipo puede utilizar un mismo formulario para introducir esos datos y una misma plantilla para mostrarlos. Así, no tiene que diseñar cada página desde cero.

Esta organización también facilita la incorporación de nuevas personas al equipo. Si los campos están bien explicados y el proceso está documentado, una persona que empieza puede saber qué información debe introducir, quién debe revisarla y cuándo puede publicarla. Ese conocimiento queda recogido en formularios, instrucciones y reglas, en lugar de depender únicamente de lo que recuerden quienes llevan más tiempo trabajando.

Sin embargo, utilizar un CMS también exige esfuerzo. Hay que aprender a manejarlo, mantenerlo actualizado y acordar cómo se publican los contenidos. Además, sus formularios deben adaptarse al trabajo real. Si para publicar una noticia se obliga a rellenar muchos campos que no tienen sentido en ese caso, quien redacta puede acabar introduciendo datos inventados solo para poder continuar. Por eso, conviene exigir únicamente la información necesaria y explicar para qué sirve cada campo.

Algo parecido ocurre con el diseño. Si cada persona elige libremente colores, tamaños y distribuciones, las páginas pueden terminar siendo muy diferentes entre sí. Corregirlas o aplicar después un cambio común puede requerir mucho trabajo. Ofrecer plantillas y opciones de edición claras ayuda a mantener la coherencia y facilita la tarea de quienes preparan los contenidos.

Las funciones necesarias dependen del tamaño y de la forma de trabajar del equipo. Para unos apuntes que actualiza una sola persona puede bastar un sistema sencillo que transforme textos en páginas estáticas. En un portal donde publican cientos de personas de distintos departamentos, será necesario definir qué puede modificar cada una, quién revisa los cambios y quién autoriza su publicación. La elección debe partir de esas necesidades concretas.

## Vocabulario que conviene fijar

Un **registro** es un contenido concreto, como la noticia "Abierto el plazo de matrícula". Esa noticia pertenece al **tipo de contenido** "Noticia", que define qué información puede contener. Cada dato se guarda en un **campo**, como el título, la fecha de publicación o el cuerpo del texto.

Una **plantilla** determina cómo se muestra ese contenido. Por ejemplo, puede colocar el título en la parte superior y la fecha debajo. Un **estado** indica en qué situación se encuentra el contenido dentro del proceso de trabajo. La noticia puede estar en borrador, pendiente de revisión o publicada.

Un **módulo o extensión** amplía las funciones del CMS. Por ejemplo, puede incorporar una herramienta para crear formularios de contacto.

Una **versión de contenido** conserva cómo estaba una pieza en un momento determinado. Si se modifica el texto de una noticia y se guarda una nueva versión, el historial puede permitir comparar el texto anterior con el nuevo o recuperar el anterior.

Una **versión del software** identifica una entrega del programa. Por ejemplo, una nueva versión del CMS puede corregir errores o incorporar funciones. Esta actualización afecta a la herramienta con la que se trabaja, pero no comprueba ni corrige automáticamente la información publicada.

Estas operaciones tienen efectos diferentes. Actualizar el CMS no actualiza las fechas de las convocatorias. Cambiar una plantilla permite modificar la presentación sin crear otra copia de cada noticia. Recuperar una versión anterior de una noticia permite volver a su contenido anterior, pero no restaura todo el sitio ni el servidor.

## Comprueba la comprensión

**¿Un editor de páginas es siempre un sistema completo de gestión de contenidos?** Puede ser parte de uno, pero hay que comprobar almacenamiento, estructura, permisos, revisión y mantenimiento. Una interfaz atractiva no prueba esas capacidades.

**¿Se necesita un CMS para cualquier web?** No. La necesidad depende del volumen, de las tareas y de las personas. Los criterios de elección se desarrollan en el [capítulo 18](seleccion-cms.md#18-tipos-de-cms-y-criterios-de-eleccion).

**¿Qué cambio aportaría más valor al portal del ejemplo?** Probablemente un modelo común de fichas, responsables y revisión, además de la herramienta. Instalar software sin organizar el trabajo reproduce el desorden con otra interfaz.
