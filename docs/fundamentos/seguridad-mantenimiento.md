# 16. Seguridad, privacidad y mantenimiento

## Mantener la confianza en el sistema

La seguridad de un CMS busca proteger la **confidencialidad** de información restringida, la **integridad** de datos y contenidos y la **disponibilidad** del servicio. Una publicación alterada, un archivo privado expuesto y un portal inaccesible representan problemas diferentes.

También importa la trazabilidad: saber qué ocurrió, quién actuó y qué versión estaba disponible. La seguridad combina configuración técnica, decisiones de acceso y prácticas de trabajo. No se resuelve únicamente eligiendo una contraseña.

Este capítulo explica principios de gestión. Las obligaciones concretas sobre datos, conservación o derechos deben determinarse para el servicio y contexto aplicables.

## La superficie que hay que mantener

Un CMS puede depender de núcleo, extensiones, temas, servidor, base de datos, servicios externos y credenciales de integración. El mantenimiento necesita inventariar esos componentes y saber quién responde de cada uno.

Las actualizaciones pueden corregir fallos y también cambiar comportamiento. Antes de aplicarlas hay que considerar compatibilidad, recuperación y comprobación del servicio. Evitar indefinidamente las actualizaciones tampoco es una estrategia sostenible.

La [guía de endurecimiento de WordPress](https://developer.wordpress.org/advanced-administration/security/hardening/) ofrece un ejemplo de responsabilidades operativas. Las medidas exactas deben ajustarse al producto, su entorno y las recomendaciones vigentes.

## Entornos de trabajo

Un entorno de **desarrollo** permite preparar cambios; uno de **pruebas o preproducción** permite validarlos; **producción** es el servicio real. Separarlos reduce el riesgo de que una prueba altere información pública o transacciones.

Copiar producción a pruebas no debe hacerse sin tratar los datos que no sean necesarios. Un entorno de pruebas puede terminar enviando mensajes reales o exponiendo documentos si conserva integraciones y permisos originales. Es necesario delimitar datos, accesos y conexiones.

En estos apuntes no se explica cómo instalar esos entornos. Interesa comprender por qué existen y qué decisiones permiten comprobar antes de publicar.

## Identidades y credenciales

Las cuentas individuales facilitan atribuir cambios y retirar accesos. La autenticación multifactor añade una comprobación de identidad. Las cuentas de administración deben reservarse para tareas que realmente la necesitan.

Las credenciales de APIs y servicios deben gestionarse como secretos. No forman parte del contenido público ni de ejemplos publicados. Además de protegerlas, hay que saber quién las utiliza y cómo sustituirlas si cambian las responsabilidades o se sospecha exposición.

La [política de permisos](usuarios-roles-permisos.md) debe aplicarse también a archivos, vistas previas e integraciones. Una API no debe convertirse en una vía para acceder a borradores que la web protege.

## Copias y restauración

Una copia de seguridad debe cubrir los elementos necesarios para recuperar el servicio: contenidos, datos, archivos y configuración relevante. Copiar solo las imágenes no recupera los registros de una base de datos; exportar solo los registros puede dejar referencias sin archivos.

La [documentación de copias de WordPress](https://developer.wordpress.org/advanced-administration/security/backup/) distingue archivos y base de datos. El principio general es identificar el conjunto coherente que necesita la aplicación para restaurarse.

Dos objetivos ayudan a planificar. El **RPO** define el punto temporal al que deben poder recuperarse los datos; permite expresar cuánta pérdida temporal se considera aceptable. El **RTO** define el objetivo de tiempo para recuperar el servicio según el impacto tolerable. Son objetivos que deben poder contrastarse, no garantías que aparezcan por nombrarlos. El glosario del NIST recoge las definiciones de [RPO](https://csrc.nist.gov/glossary/term/recovery_point_objective) y [RTO](https://csrc.nist.gov/glossary/term/recovery_time_objective).

Una tienda que recibe pedidos continuamente puede requerir objetivos distintos de una colección de apuntes que cambia una vez por semana. La frecuencia de copia y el procedimiento de recuperación deben responder al impacto real de la pérdida.

## Probar la recuperación

Una copia que nunca se ha restaurado aporta evidencia insuficiente. Hay que comprobar que puede recuperarse, que contiene lo necesario y que la aplicación funciona con ella. Las copias deben estar protegidas y separadas de los riesgos que puedan afectar al origen.

Restaurar todo un sitio a un momento anterior puede borrar operaciones posteriores. Por eso hay que evaluar si conviene recuperar una pieza, un archivo o el conjunto. El [historial editorial](ciclo-vida-revision.md) y las copias cumplen propósitos complementarios.

## Privacidad desde el modelo

Los formularios deben pedir información necesaria para su finalidad. El contenido público debe separarse de notas internas y datos personales de gestión. La clasificación y los permisos deben mantenerse cuando se exporta, se copia o se integra información.

La retención necesita una política: qué se conserva, por qué, durante cuánto tiempo y quién decide la retirada. Una cuenta inactiva, un archivo antiguo y un registro de auditoría pueden requerir tratamientos distintos. «Guardar todo por si acaso» no es una decisión suficientemente definida.

## Incidentes y continuidad

Si se detecta una publicación alterada, el equipo debe poder identificar el alcance, detener el problema, conservar evidencias útiles, recuperar información correcta y revisar qué falló. Restaurar el aspecto visible sin corregir la causa puede permitir que el incidente se repita.

Los contactos y responsabilidades deben conocerse antes del incidente. No basta con que una persona externa sepa las claves o que una copia exista en un equipo inaccesible al resto.

## Comprueba la comprensión

**¿Una copia diaria garantiza recuperación inmediata?** No. Hay que medir restauración, consistencia y tiempo, y considerar los cambios posteriores a la copia.

**¿Actualizar el núcleo mantiene todo el sistema?** No necesariamente. También existen extensiones, temas, infraestructura e integraciones.

**¿Un entorno de pruebas es inocuo por llamarse así?** No. Sus datos y conexiones pueden tener efectos reales si no se han delimitado.
