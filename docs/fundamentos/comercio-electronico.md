# 19. El comercio electrónico como aplicación de un CMS

## Contenido y operación comercial

Una tienda online combina información que ayuda a decidir con funciones que permiten registrar y gestionar operaciones. El catálogo, las guías de talla y las condiciones de entrega forman parte de la experiencia, junto con carrito, pedido, pago y atención posterior.

Un CMS especializado aporta un modelo próximo al negocio. PrestaShop organiza funciones alrededor de catálogo, pedidos, clientes y otros procesos comerciales, como muestra su [guía de usuario](https://docs.prestashop-project.org/v.9-documentation/user-guide). La especialización no garantiza que la información esté completa ni que los procesos de la organización sean coherentes.

Este capítulo utiliza el comercio para aplicar conceptos de gestión de contenidos. No describe la instalación ni los pasos de una práctica con una tienda.

## Relaciones comerciales y necesidades de información

En una relación **B2C**, una empresa vende a consumidores. En **B2B**, vende a otras empresas. En **C2C**, personas venden a otras personas, habitualmente a través de una plataforma. Estas categorías ayudan a identificar preguntas, pero no describen por sí solas todo el proceso.

Una compradora individual puede necesitar saber ajuste, material y entrega. Un cliente empresarial puede requerir condiciones por volumen, referencias propias o documentación adicional. El catálogo y los permisos deben representar las necesidades del modelo real.

Un marketplace incorpora varias partes y responsabilidades. No debe confundirse con una tienda donde una sola empresa controla toda la oferta. Publicar productos de terceros añade necesidades de validación, procedencia y coordinación.

## El recorrido de compra

| Momento | Pregunta de la persona | Contenido o dato necesario |
| --- | --- | --- |
| Descubrimiento | ¿Qué ofrece esta tienda? | Identidad, propuesta y categorías comprensibles. |
| Búsqueda | ¿Tiene lo que necesito? | Clasificación, filtros y disponibilidad. |
| Evaluación | ¿Me sirve este producto? | Descripción, medidas, imágenes y variantes. |
| Pedido | ¿Qué estoy solicitando y en qué condiciones? | Resumen coherente, cantidades, importes y entrega. |
| Seguimiento | ¿Qué ha pasado con mi pedido? | Estado y comunicación verificable. |
| Atención posterior | ¿Cómo resuelvo una duda o incidencia? | Canales y procedimientos claros. |

La información debe aparecer cuando ayuda a decidir. Descubrir una condición decisiva al final puede obligar a rehacer todo el recorrido. El problema no siempre está en el botón de compra; puede estar en la calidad de las fichas.

## Entidades que no conviene confundir

El **producto** identifica la oferta conceptual. La **variante** representa una opción concreta, como talla M y color azul. El **carrito** reúne una intención de compra todavía modificable. El **pedido** registra una operación según el proceso de la tienda. El **pago** y el **envío** tienen sus propios estados.

Un pedido creado no implica necesariamente pago confirmado. Un pago confirmado no implica envío realizado. El sistema necesita representar esas diferencias para comunicar correctamente al cliente y coordinar trabajo interno.

Los estados editoriales también son distintos. «Ficha publicada» significa que se ofrece información; no demuestra que todas sus variantes estén disponibles o sean comprables. Un producto agotado puede conservar una ficha pública con información adecuada.

## Coherencia entre contenido y datos operativos

Costa Sur publica una descripción que promete una camiseta de algodón y muestra una imagen azul. Si la variante seleccionada corresponde a otro material o color, la información resulta contradictoria. Si el stock no se sincroniza, puede prometer disponibilidad que no existe.

El contenido editorial debe coordinarse con la fuente de precios, existencias y condiciones. Es necesario definir qué campos puede modificar cada rol y qué sistema tiene autoridad sobre cada dato.

Una descripción comercial no debe introducir cifras que contradigan campos estructurados. Escribir un precio en un párrafo crea otra copia que quizá no cambie al actualizar la tarifa.

## Información histórica de la operación

La ficha actual de un producto puede cambiar. El registro de una operación necesita conservar los datos relevantes de su momento para poder interpretarla después. Mostrar el precio actual como si fuera el de un pedido pasado sería un error de modelado.

La conservación afecta también a confirmaciones y condiciones asociadas. Las decisiones concretas sobre qué guardar y durante cuánto tiempo deben responder al proceso y a los requisitos aplicables. La idea fundamental es distinguir contenido vivo de evidencia de una operación.

## Integraciones y responsabilidades

La tienda puede comunicarse con inventario, pagos, logística y atención. Cada integración necesita tratar fallos y estados intermedios. Una confirmación de pago puede llegar después de que la persona cierre el navegador; el proceso no debería depender únicamente de lo que muestra una pantalla.

Desde la gestión de contenidos interesa saber qué mensajes se presentan en cada situación y qué información puede asegurar el sistema. «Pedido enviado» no debe utilizarse para un pedido que solo se ha recibido.

## Comprueba la comprensión

**¿Basta con añadir «Comprar» a una ficha para tener comercio electrónico?** No. Hay que definir operaciones, estados, datos y responsabilidades.

**¿Un producto agotado debe eliminarse siempre?** No. Puede mantenerse informativo, indicar disponibilidad o dirigir a alternativas, según la política del catálogo.

**¿Por qué contenido y operación deben coordinarse?** Porque la decisión de compra depende de promesas e información que el proceso debe poder cumplir.
