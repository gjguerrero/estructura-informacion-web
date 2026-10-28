# 12. Extensiones, integraciones y sistemas relacionados

## El núcleo y las funciones adicionales

El **núcleo** del CMS aporta las funciones básicas del producto. Una **extensión**, módulo o plugin añade o modifica capacidades. Un tema suele concentrarse en presentación, aunque en algunos ecosistemas pueda incluir comportamiento adicional. Conviene conocer dónde se guarda cada responsabilidad.

Ampliar un sistema puede ser más económico que desarrollar desde cero, pero añade dependencias. Una función puede dejar de estar mantenida, cambiar de licencia o resultar incompatible con otra actualización. La decisión de instalar un componente debe incluir quién lo revisará y qué ocurrirá si hay que sustituirlo.

Dos extensiones pueden intentar resolver el mismo problema con reglas diferentes. Por ejemplo, cada una podría generar una URL canónica o gestionar el envío de formularios. La acumulación de funciones sin diseño puede producir contradicciones difíciles de diagnosticar.

## Configurar, extender y desarrollar

**Configurar** es utilizar opciones previstas por el producto. **Extender** es incorporar componentes que añaden capacidades. **Desarrollar** implica crear comportamiento propio. La frontera puede variar, pero ayuda a estimar costes y mantenimiento.

Antes de programar un flujo especial, conviene comprobar si se puede representar mediante estados, permisos y campos existentes. Antes de instalar un módulo, hay que verificar que resuelve la necesidad concreta y no solo presenta una descripción parecida.

Una necesidad recurrente y central puede justificar desarrollo. Una excepción ocasional quizá se resuelva mejor ajustando el proceso. La decisión debe considerar la frecuencia, el riesgo y el coste de mantener la solución durante años.

## Qué significa integrar sistemas

Una **integración** coordina información u operaciones entre sistemas. Puede usar archivos de intercambio, APIs, eventos o conectores. Transportar datos es solo una parte: también hay que acordar significados, identificadores, permisos y tratamiento de errores.

Una **sincronización** busca mantener determinada correspondencia entre copias. No siempre es inmediata ni bidireccional. Debe definirse qué sistema manda sobre cada campo y cómo se resuelve un conflicto.

| Información de Costa Sur | Fuente acordada en el ejemplo | Consumidor |
| --- | --- | --- |
| Descripción editorial | CMS o gestor del catálogo | Web y otros canales. |
| Existencias operativas | Sistema de inventario | Tienda online. |
| Fotografías aprobadas | Biblioteca de activos | Fichas y campañas. |
| Estado del pago | Proveedor de pagos | Gestión del pedido. |
| Datos del pedido | Sistema de comercio | Atención y preparación. |

La tabla es una posible distribución, no una arquitectura obligatoria de PrestaShop. Una tienda pequeña puede concentrar más funciones en una sola aplicación.

## API, evento y webhook

Una API permite solicitar datos u operaciones. Un **evento** informa de algo ocurrido, como la publicación de una pieza. Un **webhook** es un mecanismo por el que un sistema envía una notificación a una dirección configurada cuando sucede un evento.

Recibir «producto actualizado» no garantiza que todos los consumidores ya se hayan actualizado. Puede haber retrasos o fallos. Si una notificación se reintenta, el destinatario debe evitar duplicar efectos como crear varias veces el mismo registro. La **idempotencia** describe una operación cuyo efecto no se multiplica por repetir la misma solicitud en las condiciones previstas.

Para comprender la dimensión organizativa basta preguntar: cómo detectamos el fallo, quién recibe el aviso, qué puede reintentarse y cómo sabemos que los sistemas vuelven a coincidir.

## No todos los gestores son CMS web

| Sistema | Centro de atención | Relación posible con un CMS |
| --- | --- | --- |
| DMS o gestor documental | Documentos, versiones y acceso. | Proporcionar documentación relacionada. |
| ECM | Gestión de información y procesos documentales empresariales. | Coordinar publicación y documentación interna. |
| DAM | Activos digitales, derechos y derivados. | Suministrar imágenes y vídeos aprobados. |
| PIM | Información de productos y su distribución. | Alimentar fichas de catálogo. |
| LMS | Enseñanza, participantes y aprendizaje. | Ofrecer contenidos y actividades formativas. |
| CRM | Relaciones con clientes y contactos. | Coordinar comunicaciones y atención. |
| ERP | Recursos y operaciones del negocio. | Intercambiar datos comerciales u operativos. |

Las siglas describen orientaciones y sus funciones pueden solaparse. No implican que cada organización necesite siete aplicaciones. La pregunta útil es qué información y proceso tiene dueño en cada sistema.

## Contratos y mantenimiento

Una integración necesita documentar campos, unidades, identificadores, frecuencia y reglas. «Precio» es ambiguo si un extremo espera un importe con impuestos y el otro espera una base sin ellos. «Disponible» puede significar que existe stock o que la ficha está publicada.

También debe limitarse el acceso de la integración a lo necesario. Una cuenta técnica que solo sincroniza títulos no debería administrar usuarios. Sus credenciales y fallos necesitan un responsable.

## Comprueba la comprensión

**¿Instalar un plugin evita todo mantenimiento futuro?** No. Añade una pieza que debe mantenerse compatible y revisarse.

**¿Una API garantiza integración semántica?** No. Dos sistemas pueden intercambiar mensajes válidos y entender de forma distinta sus campos.

**¿Por qué no actualizar el mismo dato libremente en dos sistemas?** Porque pueden producirse conflictos y sobrescrituras. Hay que definir una fuente y una política de resolución.
