# 12. Extensiones, integraciones y sistemas relacionados

## El núcleo y las funciones adicionales

El **núcleo** reúne las funciones que forman parte del propio CMS. Una **extensión**, también llamada módulo o plugin según el producto, añade o modifica funciones. Por ejemplo, puede incorporar un formulario de contacto. Un **tema** se ocupa principalmente de la presentación. Conviene saber qué componente aporta cada función para poder mantenerlo o sustituirlo.

Utilizar una extensión existente puede ahorrar trabajo de programación. A cambio, la organización pasa a depender también de ese componente. Hay que comprobar si se mantiene, si es compatible con el CMS y qué condiciones tiene su uso. También conviene asignar quién lo revisará y qué se hará si deja de funcionar o de recibir actualizaciones.

Instalar varias extensiones con funciones similares puede provocar conflictos. Por ejemplo, dos componentes podrían intentar enviar el mismo correo al recibir un formulario y generar mensajes duplicados. Antes de añadir uno nuevo, conviene comprobar qué función resolverá y cómo se relacionará con los ya instalados.

## Configurar, extender y desarrollar

**Configurar** consiste en elegir entre las opciones que ya ofrece la herramienta, como activar la revisión antes de publicar. **Extender** consiste en instalar un componente que añade una función, como un nuevo tipo de formulario. **Desarrollar** implica programar una solución propia. Estas alternativas requieren distintos recursos y tareas de mantenimiento.

Antes de programar un flujo especial, conviene comprobar si se puede representar mediante estados, permisos y campos existentes. Antes de instalar un módulo, hay que verificar que resuelve la necesidad concreta y no solo presenta una descripción parecida.

Si una tarea se repite con frecuencia y es importante para el servicio, puede justificar una función específica. Por ejemplo, revisar cientos de solicitudes cada semana puede requerir una herramienta adaptada. Una petición excepcional puede resolverse ajustando el procedimiento. Hay que valorar tanto el trabajo que se ahorra como el esfuerzo de mantener la solución.

## Qué significa integrar sistemas

Una **integración** permite que dos sistemas trabajen de forma coordinada. Por ejemplo, el sistema de inventario puede comunicar a la tienda cuántas camisetas quedan. Para que el intercambio funcione, ambos deben reconocer el mismo producto, interpretar igual la cantidad y saber qué hacer si el envío falla. Pueden intercambiar la información mediante archivos, APIs u otros mecanismos.

La **sincronización** mantiene actualizados determinados datos entre sistemas. Puede realizarse cada cierto tiempo o cuando se produce un cambio, y puede funcionar en una sola dirección o en ambas. En el ejemplo, el inventario puede ser la fuente de las existencias y la tienda recibir sus valores. Hay que decidir dónde se permite modificar cada dato y cómo se resuelven diferencias.

| **Información de Costa Sur** | **Fuente acordada en el ejemplo** | **Dónde se utiliza** |
| --- | --- | --- |
| Descripción editorial | CMS o gestor del catálogo | Web y otros canales. |
| Existencias operativas | Sistema de inventario | Tienda online. |
| Fotografías aprobadas | Biblioteca de imágenes y otros recursos. | Fichas y campañas. |
| Estado del pago | Proveedor de pagos | Gestión del pedido. |
| Datos del pedido | Sistema de comercio | Atención al cliente y preparación del envío. |

La tabla muestra una posible organización de Costa Sur. No describe una configuración obligatoria de PrestaShop. Una tienda pequeña puede gestionar varias de esas tareas dentro de una misma aplicación.

## API, evento y webhook

Una **API** permite que una aplicación pida información o solicite una acción a otra. Un **evento** indica que algo ha ocurrido, como la publicación de una noticia. Un **webhook** permite avisar automáticamente a otra aplicación cuando ocurre un evento. Por ejemplo, al publicar una noticia, el CMS puede enviar un aviso a una dirección configurada para que otra aplicación actualice su listado.

El aviso puede llegar con retraso, fallar o enviarse otra vez. Por eso, recibir el mensaje "Producto actualizado" no demuestra que todos los sistemas ya muestren el cambio. Además, repetir un aviso no debería crear dos veces el mismo registro. Una operación es **idempotente** cuando repetir la misma solicitud produce el mismo efecto final que realizarla una sola vez. Por ejemplo, fijar las existencias de un producto en cinco unidades puede repetirse sin sumar otras cinco cada vez.

La organización necesita saber cómo se detecta un fallo de intercambio, quién recibe el aviso y cómo se corrige. Después de reintentar una actualización, debe comprobarse que los sistemas muestran datos coherentes. Estas tareas también forman parte del mantenimiento de la integración.

## No todos los gestores son CMS web

| **Sistema** | **Centro de atención** | **Relación posible con un CMS** |
| --- | --- | --- |
| Gestión documental (DMS) | Document Management System. Gestiona documentos, versiones y acceso. | Proporcionar documentación relacionada. |
| Contenido empresarial (ECM) | Enterprise Content Management. Organiza información y procesos documentales de la empresa. | Coordinar publicación y documentación interna. |
| Activos digitales (DAM) | Digital Asset Management. Gestiona imágenes, vídeos, derechos y versiones derivadas. | Suministrar imágenes y vídeos aprobados. |
| Información de productos (PIM) | Product Information Management. Organiza los datos de productos y su distribución. | Alimentar fichas de catálogo. |
| Gestión del aprendizaje (LMS) | Learning Management System. Organiza cursos, participantes y actividades formativas. | Ofrecer contenidos y actividades formativas. |
| Relación con clientes (CRM) | Customer Relationship Management. Gestiona contactos, comunicaciones y atención a clientes. | Coordinar comunicaciones y atención. |
| Recursos empresariales (ERP) | Enterprise Resource Planning. Integra operaciones como compras, inventario o contabilidad. | Intercambiar datos comerciales u operativos. |

La tabla compara herramientas que pueden relacionarse con un CMS web. Sus funciones pueden coincidir parcialmente y una organización no tiene por qué utilizar una aplicación distinta para cada fila. Lo necesario es saber dónde se mantiene cada información. Por ejemplo, debe quedar claro si el precio se modifica en el catálogo o se recibe de otro sistema.

## Qué debe acordarse en una integración

Hay que documentar qué significa cada campo, en qué unidades se expresa y con qué frecuencia se actualiza. Si un sistema envía "Precio" sin aclarar si incluye impuestos, el otro puede interpretarlo de forma incorrecta. También debe distinguirse entre un producto cuya ficha está publicada y uno que tiene existencias disponibles para comprar.

La aplicación conectada debe tener acceso solo a lo que necesita. Si únicamente actualiza títulos, su cuenta no necesita administrar usuarios. Debe haber una persona responsable de sus credenciales de acceso y de atender los fallos de comunicación.

## Comprueba la comprensión

**¿Instalar un plugin evita todo mantenimiento futuro?** No. Añade una pieza que debe mantenerse compatible y revisarse.

**¿Una API garantiza que dos sistemas interpreten igual los datos?** No. Pueden intercambiar un número correctamente y entender cosas distintas. Por ejemplo, uno puede tratarlo como precio con impuestos y otro como precio sin impuestos. Esa interpretación debe acordarse.

**¿Por qué no actualizar el mismo dato libremente en dos sistemas?** Porque una modificación puede sobrescribir otra o dejar valores diferentes. Conviene definir dónde se mantiene el dato y cómo se resolverán las discrepancias.
