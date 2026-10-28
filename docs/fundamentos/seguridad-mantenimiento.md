# 16. Seguridad, privacidad y mantenimiento

## Mantener la confianza en el sistema

La **confidencialidad** busca que la información solo sea accesible para quienes tienen permiso. La **integridad** busca evitar cambios indebidos o pérdidas en los datos. La **disponibilidad** busca que el servicio pueda utilizarse cuando se necesita. Por ejemplo, publicar un documento privado afecta a la confidencialidad, alterar sin autorización el plazo de una beca afecta a la integridad y una caída del portal afecta a la disponibilidad.

La **trazabilidad** permite reconstruir lo ocurrido a partir de registros. Puede ayudar a saber qué cuenta cambió una noticia, cuándo lo hizo y qué versión se publicó. Mantener la seguridad requiere combinar controles técnicos, permisos y formas de trabajo adecuadas.

Este capítulo explica principios de gestión. Las obligaciones concretas sobre datos, conservación o derechos deben determinarse para el servicio y contexto aplicables.

## Qué componentes deben mantenerse

El funcionamiento de un CMS depende de varios componentes. Además del programa principal, puede utilizar extensiones, temas, una base de datos y servicios externos. Conviene mantener una relación de esos componentes y de sus responsables. Así se puede saber, por ejemplo, quién debe actuar si falla el servicio que envía los correos.

Las actualizaciones pueden corregir fallos y cambiar funciones del sistema. Antes de aplicarlas, conviene comprobar su compatibilidad y disponer de una forma de recuperar el servicio si algo falla. Después deben probarse las tareas importantes, como editar y publicar. También hay que planificar las actualizaciones para no mantener indefinidamente componentes antiguos sin revisar.

La [guía de endurecimiento de WordPress](https://developer.wordpress.org/advanced-administration/security/hardening/) ofrece un ejemplo de responsabilidades operativas. Las medidas exactas deben ajustarse al producto, su entorno y las recomendaciones vigentes.

## Entornos de trabajo

El entorno de **desarrollo** se utiliza para preparar cambios. El entorno de **pruebas o preproducción** permite comprobarlos antes de aplicarlos al servicio real, llamado **producción**. Por ejemplo, una nueva plantilla puede probarse con contenidos representativos antes de mostrarla a todo el público.

Un entorno de pruebas también puede causar efectos reales si conserva datos y conexiones de producción. Por ejemplo, una prueba de formulario podría enviar correos a clientes reales. Al preparar ese entorno, hay que limitar los datos utilizados, revisar los accesos y evitar que las pruebas actúen sobre servicios reales sin control.

La separación de entornos permite comprobar cambios antes de que afecten al público. Por ejemplo, se puede verificar que una actualización conserva los formularios y los permisos. Estos apuntes explican esa finalidad, sin desarrollar los pasos de instalación de cada entorno.

## Identidades y credenciales

Las cuentas individuales permiten saber quién realiza cada acción y retirar el acceso cuando deja de ser necesario. La **autenticación multifactor** combina comprobaciones de categorías diferentes, como una contraseña y la posesión de un dispositivo. Para el trabajo habitual conviene utilizar los permisos necesarios y reservar la administración completa para las tareas que la requieran.

Las **credenciales** permiten acceder a una cuenta o servicio y pueden incluir contraseñas o claves utilizadas por aplicaciones. Deben protegerse y no publicarse dentro de contenidos o ejemplos. También hay que saber qué aplicación utiliza cada credencial y quién puede sustituirla si deja de ser segura o cambia la persona responsable.

La [política de permisos](usuarios-roles-permisos.md#8-usuarios-roles-permisos-y-responsabilidades) debe aplicarse también a archivos, vistas previas e integraciones. Una API no debe convertirse en una vía para acceder a borradores que la web protege.

## Copias y restauración

Una copia de seguridad debe incluir los elementos necesarios para recuperar el servicio. Entre ellos pueden estar la base de datos, los archivos subidos y la configuración. Copiar las fotografías no recupera por sí solo los textos y relaciones de las fichas. Guardar únicamente la base de datos puede dejar referencias a documentos cuyos archivos se han perdido.

La [documentación de copias de WordPress](https://developer.wordpress.org/advanced-administration/security/backup/) distingue los archivos y la base de datos. Para recuperar una instalación hay que identificar qué elementos necesita y comprobar que las copias corresponden a un estado que permita utilizarlos conjuntamente.

El **RPO**, Recovery Point Objective u objetivo de punto de recuperación, expresa hasta qué momento deben poder recuperarse los datos. Permite fijar cuánta pérdida de datos se tolera en términos de tiempo. Por ejemplo, un RPO de una hora exige poder recuperar un estado que no sea anterior en más de una hora al incidente. El **RTO**, Recovery Time Objective u objetivo de tiempo de recuperación, establece cuánto se pretende tardar en restablecer el servicio, por ejemplo, dos horas. Son objetivos que requieren medios y pruebas para comprobar si se alcanzan. El glosario del NIST define [RPO](https://csrc.nist.gov/glossary/term/recovery_point_objective) y [RTO](https://csrc.nist.gov/glossary/term/recovery_time_objective).

Perder los pedidos recibidos durante una hora puede tener un impacto distinto de perder los cambios de unos apuntes que se actualizan semanalmente. Por eso, la frecuencia de las copias y el procedimiento de recuperación deben ajustarse a las necesidades del servicio.

## Probar la recuperación

La recuperación debe probarse. Hay que comprobar que la copia puede leerse, que incluye los datos necesarios y que la aplicación vuelve a funcionar. También conviene que las copias estén protegidas frente a los fallos que puedan afectar al sistema original. Una copia accesible únicamente desde el servidor averiado puede no estar disponible cuando se necesita.

Restaurar una copia completa devuelve el sistema al estado guardado en ella. Si después de esa copia se registraron pedidos, habrá que prever cómo recuperarlos o conservarlos. Por eso, antes de restaurar se debe decidir si hace falta recuperar una noticia, un archivo o todo el sistema. El [historial editorial](ciclo-vida-revision.md#9-ciclo-de-vida-revision-y-publicacion) puede servir para recuperar una pieza sin sustituir el resto.

## Privacidad desde el modelo

Los formularios deben solicitar los datos que necesitan para cumplir su finalidad. También hay que distinguir la información pública de las notas internas y los datos personales. Por ejemplo, publicar los detalles de una actividad no implica publicar los datos de quienes se han inscrito. Esa separación debe conservarse al exportar o transferir la información a otro sistema.

La **política de conservación** determina qué información se guarda, para qué, durante cuánto tiempo y quién decide su retirada. No todos los datos necesitan el mismo tratamiento. Los contenidos históricos, las cuentas inactivas y los registros de acciones pueden tener finalidades y periodos de conservación distintos.

## Incidentes y continuidad

Si se descubre una noticia modificada sin autorización, el equipo debe comprobar qué contenidos y cuentas están afectados, detener los cambios indebidos y conservar la información necesaria para investigar. Después debe recuperar el contenido correcto y corregir la causa del problema. Limitarse a reescribir la noticia puede permitir que vuelva a alterarse.

Los contactos y responsabilidades deben conocerse antes del incidente. No basta con que una persona externa sepa las claves o que una copia exista en un equipo inaccesible al resto.

## Comprueba la comprensión

**¿Una copia diaria garantiza recuperación inmediata?** No. Hay que comprobar cuánto se tarda en restaurarla y si permite recuperar el servicio. También debe valorarse qué ocurre con los cambios realizados después de la última copia.

**¿Actualizar el núcleo mantiene todo el sistema?** No necesariamente. También existen extensiones, temas, infraestructura e integraciones.

**¿Un entorno de pruebas es inocuo por llamarse así?** No. Si utiliza datos personales o conexiones reales, puede exponer información o enviar mensajes. Debe prepararse con los límites adecuados para las pruebas previstas.
