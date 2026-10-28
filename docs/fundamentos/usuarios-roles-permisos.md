# 8. Usuarios, roles, permisos y responsabilidades

## Cuatro conceptos distintos

Una **persona usuaria** es alguien que utiliza el sistema. Su **cuenta** permite reconocerla dentro del CMS. Un **rol** agrupa permisos relacionados con una función, como redactar noticias. Un **permiso** autoriza una acción concreta, como editar un borrador propio. Por ejemplo, Ana puede acceder con su cuenta, tener el rol de redactora y disponer de permiso para preparar noticias, pero no para publicarlas.

Varias personas pueden tener el mismo rol y una persona puede asumir varias funciones. Conviene que cada una utilice su propia cuenta. Si todo un departamento comparte una sola, será difícil saber quién cambió una noticia y retirar el acceso de una persona sin afectar a las demás.

También pueden existir **cuentas de servicio**, utilizadas por programas en lugar de personas. Por ejemplo, una aplicación puede necesitar acceso para actualizar las existencias de la tienda. Esa cuenta debe tener solo los permisos necesarios y una persona responsable de revisarla y retirarla cuando deje de utilizarse.

## Identificación, autenticación y autorización

La **identificación** consiste en indicar quién quiere acceder, por ejemplo, escribiendo un nombre de usuario. La **autenticación** comprueba esa identidad mediante mecanismos como una contraseña y un segundo factor. La **autorización** determina qué acciones puede realizar la cuenta después de acceder. Son comprobaciones diferentes.

Una cuenta puede iniciar sesión correctamente y tener permiso únicamente para leer documentos internos. Además, los permisos deben comprobarse cuando el sistema recibe una petición. Ocultar el botón de publicar no basta si la cuenta todavía puede enviar una solicitud de publicación por otra vía, como una API.

La guía de [autorización de OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) explica criterios para diseñar esos controles. Entre ellos están conceder solo los permisos necesarios, rechazar las acciones que no se hayan autorizado y comprobar cada solicitud. La matriz que aparece más adelante es un ejemplo didáctico propio.

## El permiso tiene acción, recurso y alcance

Un permiso debe precisar la acción y los contenidos sobre los que puede realizarse. "Puede editar" deja muchas dudas. En cambio, "Puede editar los borradores de su departamento" identifica tanto la operación como su alcance. También puede ser necesario limitar el permiso a un periodo o a una sustitución concreta.

| **Dimensión** | **Pregunta** | **Ejemplo** |
| --- | --- | --- |
| Acción | ¿Qué operación se permite? | Crear, leer, editar, aprobar, publicar, retirar, eliminar. |
| Recurso | ¿Sobre qué se aplica? | Noticias, productos, archivos o cuentas. |
| Alcance | ¿Sobre cuáles? | Propios, del departamento o de todo el sitio. |
| Estado | ¿En qué momento? | Se permite cambiar borradores, pero no versiones publicadas. |
| Contexto | ¿Bajo qué condición? | Dentro de un proyecto o durante una sustitución autorizada. |

Dar permiso para editar no debe implicar automáticamente permitir borrar, publicar o administrar usuarios. Son operaciones con efectos distintos.

## Control basado en roles

En el **control de acceso basado en roles**, conocido como **RBAC** por su nombre inglés Role-Based Access Control, los permisos se agrupan en roles y estos se asignan a las cuentas. Por ejemplo, el rol "Redactor" puede permitir crear y modificar borradores. Al cambiar los permisos de ese rol, el cambio se aplica a las cuentas que lo tienen, según las reglas del CMS.

Un rol puede necesitar condiciones adicionales. Dos personas con el rol de redactora pueden tener acceso a departamentos diferentes. Una podría editar noticias de la biblioteca y otra noticias de la facultad. Para expresar esa diferencia, el CMS debe combinar el rol con el departamento u otra condición del contenido.

Hay que comprobar qué ocurre cuando una cuenta tiene varios roles. Un CMS puede reunir los permisos de todos ellos, mientras que otro puede aplicar reglas que den prioridad a una restricción. Conviene probar las acciones permitidas con cuentas de ejemplo para verificar que cada persona puede hacer lo previsto.

## Matriz didáctica de permisos

Este ejemplo corresponde a un portal que separa redacción, revisión, publicación y administración técnica. **No representa los permisos predeterminados de WordPress, Drupal, Joomla o PrestaShop.** "—" significa que el rol no recibe ese permiso por esta política.

| **Operación** | **Redactor** | **Revisor** | **Publicador** | **Administrador técnico** |
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

La tabla se centra en acciones que modifican el contenido o la configuración. También hay que definir los permisos de lectura. Por ejemplo, quien publica necesita poder leer la versión aprobada y quien redacta necesita consultar sus borradores. Esos accesos deben incluirse en la configuración del sistema.

Una cuenta de administración total puede tener más permisos que los reflejados en este ejemplo. Para aplicar la separación propuesta, hay que configurar cuentas y roles con facultades limitadas y reservar el acceso completo para las tareas que lo requieran. Escribir una norma no impide una acción si el sistema continúa permitiéndola.

## Mínimo privilegio y separación de funciones

El **principio de mínimo privilegio** consiste en conceder los permisos necesarios para el trabajo de cada persona. Si una editora debe corregir las fichas de su unidad, necesita poder modificarlas. No necesita por ello administrar las cuentas de todo el sitio. Los permisos pueden limitarse también a un periodo, como la duración de una sustitución.

La **separación de funciones** reparte decisiones entre personas distintas. Por ejemplo, una organización puede exigir que una persona redacte las condiciones de una promoción y otra las apruebe. Para cumplir esa regla, el sistema debe impedir que la misma persona realice ambos pasos, aunque su cuenta tenga varios roles.

La revisión necesaria depende de las consecuencias de un error. Corregir una errata puede seguir un proceso sencillo. Cambiar los requisitos o el plazo de una convocatoria puede exigir la aprobación de la unidad responsable antes de publicar.

## Roles reales de los productos

Cada producto define sus propios roles. La documentación de [WordPress sobre roles y capacidades](https://wordpress.org/documentation/article/roles-and-capabilities/) describe nombres como administrador, editor, autor, colaborador y suscriptor. También recoge el superadministrador para instalaciones que reúnen varios sitios. Hay que comprobar los permisos concretos de cada rol y los cambios que puedan introducir la configuración y las extensiones.

En particular, no debe suponerse que "autor" equivale al redactor sin publicación de nuestra tabla. Hay que traducir la política organizativa a las capacidades reales del producto, y comprobar el resultado.

Un rol de "cliente" en una tienda sirve para comprar y consultar operaciones propias. No debería heredar facultades de edición de catálogo por compartir el concepto genérico de usuario.

## Acceso al contenido y a los archivos

El control de acceso debe aplicarse a todas las formas de obtener un contenido. Si una ficha exige iniciar sesión, pero el PDF adjunto se puede descargar con una dirección pública, el documento sigue siendo accesible. También hay que comprobar que el buscador, las vistas previas y las aplicaciones conectadas no revelen contenido restringido.

Un enlace difícil de adivinar no sustituye un control de permisos. Tampoco lo sustituye la ausencia del contenido en el menú. Estas distinciones deben probarse desde la perspectiva de un usuario sin autorización.

## Alta, cambio de función y baja

La gestión de identidades es un proceso continuo. En el alta se verifica la necesidad y se asignan roles. En un cambio de puesto se revisan los permisos anteriores, evitando acumular accesos. En la baja se retira el acceso y se reasignan contenidos y responsabilidades.

Las cuentas temporales deben revisarse cuando termine su periodo de uso. Lo mismo ocurre con las cuentas utilizadas por aplicaciones que dejan de funcionar. Puede conservarse en el historial quién realizó una modificación sin permitir que esa cuenta siga iniciando sesión.

## Comprueba la comprensión

**Una revisora puede aprobar, pero no publicar. ¿Es incoherente?** No. Aprobar y hacer visible pueden ser decisiones separadas.

**¿Ocultar el botón "Eliminar" protege el contenido?** No es suficiente. El sistema también debe rechazar la petición de borrado cuando la cuenta no tenga permiso, aunque la petición llegue por otra vía.

**¿Basta con añadir el rol nuevo cuando alguien cambia de departamento?** No. Hay que revisar y retirar accesos anteriores, reasignar responsabilidades y comprobar los permisos efectivos.
