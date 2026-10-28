# 19. El comercio electrónico como aplicación de un CMS

## Contenido y operación comercial

Una tienda online combina información que ayuda a decidir con funciones que permiten registrar y gestionar operaciones. El catálogo, las guías de talla y las condiciones de entrega forman parte de la experiencia, junto con carrito, pedido, pago y atención posterior.

Un CMS especializado en comercio electrónico incorpora estructuras y funciones para esas tareas. La [guía de usuario](https://docs.prestashop-project.org/v.9-documentation/user-guide) de PrestaShop describe la gestión de catálogo, pedidos y clientes. La herramienta puede facilitar el trabajo, pero el equipo sigue teniendo que comprobar las descripciones, los datos y el proceso de atención.

El comercio electrónico permite aplicar los conceptos de gestión de contenidos a una situación concreta. El objetivo de este capítulo es comprender cómo se relacionan la información del catálogo y las operaciones de compra.

## Relaciones comerciales y necesidades de información

En una relación **B2C**, del inglés Business to Consumer, una empresa vende a consumidores. En una relación **B2B**, Business to Business, vende a otras empresas. En una relación **C2C**, Consumer to Consumer, particulares venden a otros particulares, habitualmente mediante una plataforma. Cada situación puede requerir información y formas de atención diferentes.

Una compradora puede necesitar saber cómo talla una camiseta, de qué material está hecha y cuándo llegará. Una empresa que compra muchas unidades puede necesitar precios por cantidad o una referencia propia para identificar el producto. El catálogo y las opciones de acceso deben adaptarse a esas necesidades.

Un **marketplace** es una plataforma en la que pueden ofrecer productos varios vendedores. Hay que distinguir qué información aporta cada vendedor y qué tareas realiza la plataforma. Por ejemplo, debe quedar claro quién confirma las existencias, prepara el envío y atiende una incidencia. Gestionar contenidos de varios vendedores exige coordinar esas responsabilidades.

## El recorrido de compra

| **Momento** | **Pregunta de la persona** | **Contenido o dato necesario** |
| --- | --- | --- |
| Descubrimiento | ¿Qué ofrece esta tienda? | Presentación de la tienda y categorías comprensibles. |
| Búsqueda | ¿Tiene lo que necesito? | Clasificación, filtros y disponibilidad. |
| Evaluación | ¿Me sirve este producto? | Descripción, medidas, imágenes y variantes. |
| Pedido | ¿Qué estoy solicitando y en qué condiciones? | Resumen coherente, cantidades, importes y entrega. |
| Seguimiento | ¿Qué ha pasado con mi pedido? | Información actualizada sobre el estado del pedido. |
| Atención posterior | ¿Cómo resuelvo una duda o incidencia? | Canales y procedimientos claros. |

La información debe aparecer cuando la persona la necesita para decidir. Por ejemplo, descubrir al final que una talla no está disponible obliga a volver atrás. En esos casos, mejorar la ficha y la información de existencias puede ser más útil que cambiar el aspecto del botón de compra.

## Entidades que no conviene confundir

El **producto** puede ser un modelo de camiseta. Una **variante** es una combinación concreta que se ofrece, como ese modelo en color azul y talla M. El **carrito** reúne los artículos que una persona está considerando comprar y todavía puede modificar. El **pedido** registra la solicitud de compra según el proceso de la tienda. El **pago** y el **envío** son operaciones relacionadas, con sus propios estados.

Un pedido creado no implica necesariamente pago confirmado. Un pago confirmado no implica envío realizado. El sistema necesita representar esas diferencias para comunicar correctamente al cliente y coordinar trabajo interno.

El estado de publicación de la ficha tampoco indica por sí solo si el producto puede comprarse. Una ficha puede estar visible y mostrar que la talla M está agotada. La tienda puede conservar esa información para otras tallas o para que el público consulte las características del producto.

## Coherencia entre contenido y datos operativos

Costa Sur publica una descripción que promete una camiseta de algodón y muestra una imagen azul. Si la variante seleccionada corresponde a otro material o color, la información resulta contradictoria. Si el stock no se sincroniza, puede prometer disponibilidad que no existe.

Debe quedar claro de dónde se obtienen los precios y las existencias y quién puede cambiarlos. Por ejemplo, el equipo editorial puede modificar la descripción, mientras que la cantidad disponible se recibe del sistema de inventario. Ambos datos deben mostrarse de forma coherente en la ficha.

Si el precio ya está guardado en un campo, escribirlo también dentro de un párrafo crea una segunda copia. Al cambiar el campo, el texto podría seguir mostrando el precio anterior. Conviene utilizar el dato de referencia en las presentaciones que lo necesitan y revisar cualquier copia que se mantenga.

## Información histórica de la operación

La ficha del producto describe la oferta actual, pero un pedido debe conservar los datos relevantes de la compra realizada. Por ejemplo, si una camiseta costaba 20 euros al comprarla y ahora cuesta 25, el pedido anterior debe seguir reflejando los 20 euros de aquella operación.

Lo mismo ocurre con las confirmaciones y las condiciones asociadas a una compra. La organización debe decidir qué información conservar y durante cuánto tiempo, de acuerdo con el proceso y los requisitos aplicables. Hay que distinguir los datos que se actualizan en el catálogo de los que permiten conocer cómo se realizó una operación pasada.

## Integraciones y responsabilidades

Una tienda puede intercambiar información con servicios de inventario, pagos y envío. Estos intercambios pueden tardar o fallar. Por ejemplo, la confirmación de un pago puede recibirse después de que la persona cierre el navegador. El sistema necesita registrar esa confirmación y continuar el proceso sin depender únicamente de la pantalla que vio el cliente.

Los mensajes deben corresponder al estado que el sistema conoce. Si solo se ha recibido la solicitud, puede indicarse "Pedido recibido". El mensaje "Pedido enviado" debe reservarse para el momento en que se haya confirmado el envío. Esta precisión ayuda tanto al cliente como al equipo de atención.

## Comprueba la comprensión

**¿Basta con añadir "Comprar" a una ficha para tener comercio electrónico?** No. La tienda necesita registrar qué se solicita, gestionar el pago y el envío y comunicar el estado del pedido. También debe asignar quién atiende cada tarea.

**¿Un producto agotado debe eliminarse siempre?** No. Puede mantenerse informativo, indicar disponibilidad o dirigir a alternativas, según la política del catálogo.

**¿Por qué contenido y operación deben coordinarse?** Porque la compra se decide a partir de la información de la ficha. Si esta promete una talla o una entrega que la tienda no puede ofrecer, el proceso no cumple lo que se ha comunicado.
