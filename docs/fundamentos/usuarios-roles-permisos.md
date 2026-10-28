# 8. Usuarios, roles, permisos y responsabilidades

## Cuatro conceptos distintos

Una **persona usuaria** realiza tareas. Una **cuenta** representa una identidad dentro del sistema. Un **rol** agrupa capacidades relacionadas con una función. Un **permiso** autoriza una operación concreta sobre determinados recursos.

Una persona puede tener varias responsabilidades y un rol puede asignarse a muchas cuentas. Un departamento no debería utilizar una única cuenta compartida para todo: se perdería la atribución de acciones y sería más difícil retirar el acceso de quien deja el equipo.

También pueden existir cuentas de servicio para integraciones automáticas. No son personas y necesitan permisos propios, un responsable y un ciclo de revisión.

## Identificación, autenticación y autorización

La **identificación** declara qué identidad se presenta. La **autenticación** comprueba esa identidad, por ejemplo mediante una contraseña y un segundo factor. La **autorización** decide qué puede hacer esa identidad en una situación concreta.

Iniciar sesión correctamente no concede permiso para publicar. Una cuenta puede estar autenticada y solo poder leer documentación interna. Tampoco basta con ocultar un botón: el sistema debe comprobar la autorización cuando recibe la operación, incluyendo solicitudes mediante API.

La guía de [autorización de OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) fundamenta principios como mínimo privilegio, denegación por defecto y comprobación de permisos en las solicitudes. La matriz que sigue es un diseño didáctico propio.

## El permiso tiene acción, recurso y alcance

«Editar» resulta demasiado impreciso. Puede significar editar borradores propios, noticias de una sección, cualquier contenido o incluso elementos ya publicados. Conviene formular la regla completa.

| Dimensión | Pregunta | Ejemplo |
| --- | --- | --- |
| Acción | ¿Qué operación se permite? | Crear, leer, editar, aprobar, publicar, retirar, eliminar. |
| Recurso | ¿Sobre qué se aplica? | Noticias, productos, archivos o cuentas. |
| Alcance | ¿Sobre cuáles? | Propios, del departamento o de todo el sitio. |
| Estado | ¿En qué momento? | Solo borradores; nunca la versión publicada. |
| Contexto | ¿Bajo qué condición? | Dentro de un proyecto o durante una sustitución autorizada. |

Dar permiso para editar no debe implicar automáticamente permitir borrar, publicar o administrar usuarios. Son operaciones con efectos distintos.

## Control basado en roles

En el **control de acceso basado en roles** o **RBAC**, se asignan permisos a roles y roles a cuentas. Esto facilita mantener una política común: al cambiar los permisos del rol, cambia el conjunto de capacidades de sus miembros según las reglas del sistema.

Pueden añadirse condiciones basadas en atributos o relaciones: departamento, propiedad del contenido, idioma o pertenencia a un proyecto. Los roles resuelven parte del problema, pero no siempre bastan para expresar todos los casos.

No debe suponerse cómo combina un CMS varios roles. Algunos permisos se acumulan; otros sistemas admiten denegaciones o reglas con prioridad. La autorización efectiva debe comprobarse con cuentas representativas, especialmente cuando alguien reúne varias funciones.

## Matriz didáctica de permisos

Este ejemplo corresponde a un portal que separa redacción, revisión, publicación y administración técnica. **No representa los permisos predeterminados de WordPress, Drupal, Joomla o PrestaShop.** «—» significa que el rol no recibe ese permiso por esta política.

| Operación | Redactor | Revisor | Publicador | Administrador técnico |
| --- | --- | --- | --- | --- |
| Crear un borrador | Sí | Sí | Sí | — |
| Editar borradores propios | Sí | Sí | Sí | — |
| Editar borradores de su sección | — | Sí | Sí | — |
| Enviar a revisión | Sí | Sí | Sí | — |
| Aprobar la revisión | — | Sí | — | — |
| Publicar una versión aprobada | — | — | Sí | — |
| Retirar una publicación | — | — | Sí | — |
| Asignar roles | — | — | — | Sí |
| Cambiar configuración técnica | — | — | — | Sí |

El publicador necesita leer la versión aprobada y comprobar su estado, aunque la tabla se centre en operaciones de modificación. Quien redacta también necesita acceso de lectura a sus borradores. Los permisos de lectura deben definirse expresamente en la configuración completa.

En algunos productos una cuenta de administración total tiene poderes muy amplios. En ese caso, la separación de la tabla debe implementarse con roles limitados y reservar la cuenta de emergencia para situaciones justificadas. Una política escrita no reduce por sí sola los poderes técnicos de una cuenta.

## Mínimo privilegio y separación de funciones

El **mínimo privilegio** consiste en conceder lo necesario para una tarea, con el alcance y la duración adecuados. No equivale a impedir trabajar. Si una editora necesita corregir las fichas de su unidad, conceder solo lectura sería insuficiente; permitir administrar todos los usuarios sería excesivo.

La **separación de funciones** distribuye decisiones para reducir errores o conflictos. Una organización puede exigir que quien redacta una condición comercial no sea quien la aprueba. Esto requiere comprobar la identidad de las personas, no solo el nombre del rol: una misma cuenta con todos los roles podría eludir la intención del proceso.

El grado de separación debe ajustarse al riesgo. Una errata en una noticia y un cambio en condiciones de una convocatoria pueden requerir circuitos distintos.

## Roles reales de los productos

Los nombres de roles no son universales. En [WordPress, los roles y capacidades](https://wordpress.org/documentation/article/roles-and-capabilities/) incluyen, entre otros, administrador, editor, autor, colaborador y suscriptor; el superadministrador corresponde al contexto multisitio. Sus capacidades concretas dependen de configuración y extensiones.

En particular, no debe suponerse que «autor» equivale al redactor sin publicación de nuestra tabla. Hay que traducir la política organizativa a las capacidades reales del producto, y comprobar el resultado.

Un rol de «cliente» en una tienda sirve para comprar y consultar operaciones propias. No debería heredar facultades de edición de catálogo por compartir el concepto genérico de usuario.

## Acceso al contenido y a los archivos

La protección debe cubrir página, fichero, vista previa, buscador y API. Restringir la ficha de un documento mientras el PDF sigue en una URL pública deja abierta otra vía de acceso. Lo mismo ocurre si un índice expone fragmentos de borradores.

Un enlace difícil de adivinar no sustituye un control de permisos. Tampoco lo sustituye la ausencia del contenido en el menú. Estas distinciones deben probarse desde la perspectiva de un usuario sin autorización.

## Alta, cambio de función y baja

La gestión de identidades es un proceso continuo. En el alta se verifica la necesidad y se asignan roles. En un cambio de puesto se revisan los permisos anteriores, evitando acumular accesos. En la baja se retira el acceso y se reasignan contenidos y responsabilidades.

Las cuentas temporales y las integraciones necesitan fecha o criterio de revisión. Además, debe conservarse la atribución histórica necesaria sin mantener una cuenta operativa por costumbre.

## Comprueba la comprensión

**Una revisora puede aprobar, pero no publicar. ¿Es incoherente?** No. Aprobar y hacer visible pueden ser decisiones separadas.

**¿Ocultar «Eliminar» protege el contenido?** Solo mejora la interfaz. La protección real debe impedir la operación no autorizada también por otras vías.

**¿Basta con añadir el rol nuevo cuando alguien cambia de departamento?** No. Hay que revisar y retirar accesos anteriores, reasignar responsabilidades y comprobar los permisos efectivos.
