# 22. Caso integrador: de una necesidad a un contenido mantenido

## El escenario

Un centro universitario ficticio quiere publicar una jornada de orientación. Necesita una página informativa, una entrada en el calendario y una versión en otro idioma. El público debe conocer finalidad, lugar, horario y cómo inscribirse. Las inscripciones se gestionan en una aplicación externa.

El caso permite conectar los fundamentos sin depender de botones de un producto. Las personas, fechas y datos son ejemplos didácticos. No constituyen una convocatoria real ni una práctica de instalación.

## 1. Definir propósito y alcance

La necesidad se formula así: «Una persona interesada debe poder decidir si la jornada le resulta pertinente y acceder al canal de inscripción conociendo sus condiciones». Esto orienta el contenido hacia audiencia, requisitos, programa y acceso.

El CMS publica información. La aplicación de inscripción registra participantes. Se establece quién mantiene cada parte y cómo se coordina un cambio de plazo. Mezclar ambos sistemas bajo la expresión «la web» ocultaría responsabilidades.

## 2. Identificar entidades

El modelo utiliza Evento, Lugar, Persona y Unidad. La ficha Evento contiene título, resumen, inicio, fin, modalidad, programa, enlace de inscripción y relación con su responsable. Lugar contiene dirección e información de acceso. Persona contiene nombre y biografía cuando sea necesario identificar ponentes.

El calendario y la página detallada utilizan el mismo Evento. No se escribe a mano otra fecha en cada vista. El boletín utiliza título, resumen y URL de ese registro, con un formato adaptado a su canal.

## 3. Incorporar metadatos de gestión

El evento recibe un identificador estable, idioma, procedencia, estado editorial, responsable y próxima revisión. La fotografía incluye atribución y condiciones de uso. La relación entre versiones lingüísticas permite detectar que un cambio del original puede requerir actualizar la traducción.

La fecha de modificación se registra automáticamente. La fecha de revisión factual se actualiza cuando una persona comprueba la información. No se confunden para aparentar una vigencia que no se ha verificado.

## 4. Diseñar permisos y responsabilidades

La redactora prepara el borrador. La unidad organizadora confirma programa, horario y lugar. La revisora editorial comprueba claridad, enlaces y presentación. El publicador hace visible la versión aprobada. El equipo técnico mantiene la aplicación.

En el CMS se traducen esas responsabilidades a permisos concretos. La redactora no puede publicar por el mero hecho de editar. La unidad organizadora puede validar datos sin necesitar acceso a todos los contenidos del portal.

Si una misma persona asume dos funciones, se documenta esa decisión. Cuando la política exige revisión independiente, la aprobación debe corresponder a otra identidad.

## 5. Revisar una versión concreta

La versión 1 queda en borrador. Al enviarla a revisión se comprueba la consistencia entre fecha, modalidad, lugar y enlace de inscripción. La revisión detecta que el enlace conduce a la edición anterior. Se devuelve la pieza con una observación precisa.

La versión 2 corrige el enlace y añade información que faltaba sobre acceso al edificio. La unidad organizadora confirma los datos y la revisión editorial aprueba esa versión. La aprobación queda asociada a la versión 2.

Si después se cambia el horario, la aprobación anterior no debe interpretarse como aprobación del nuevo dato. El flujo determina qué modificaciones obligan a revisar de nuevo.

## 6. Publicar y verificar

Se programa la publicación con fecha, hora y zona horaria definidas. Cuando se ejecuta, se comprueba la página pública, su presencia en el calendario, el resultado de búsqueda y el vínculo a la inscripción.

La tarea se considera completada cuando la versión aprobada está disponible en los canales previstos. Que el CMS muestre «guardado» no demuestra que la construcción del sitio, la indexación o la distribución hayan finalizado.

La previsualización se ha realizado también en pantalla pequeña. El cartel tiene una alternativa textual adecuada y los datos esenciales se ofrecen como texto, no únicamente dentro de la imagen.

## 7. Gestionar un cambio posterior

La organización comunica un cambio de aula. La versión pública sigue disponible mientras se prepara una actualización, si la arquitectura y configuración permiten ese comportamiento. Se corrige la relación con Lugar, se revisa la traducción y se comprueban los canales consumidores.

Si un boletín ya enviado contiene el aula anterior, actualizar la página no modifica ese mensaje. Se decide cómo comunicar la corrección a las personas afectadas. El alcance del cambio va más allá del registro del CMS.

El historial conserva quién modificó la ficha y por qué. La auditoría permite atribuir la publicación. Las copias de seguridad cubren recuperación del sistema, una necesidad diferente.

## 8. Cerrar y conservar

Después de la jornada, la inscripción deja de estar activa. La organización decide conservar una página histórica claramente identificada, retirar llamadas a inscribirse y revisar enlaces. El archivo mantiene contexto sobre lo que ocurrió.

La retirada de la portada no basta para ejecutar esas decisiones. El evento sigue siendo accesible por su URL y puede aparecer en buscadores. El estado y la presentación deben indicar que la actividad ha terminado.

Los documentos asociados se conservan o retiran según la política definida. No se borran imágenes compartidas sin comprobar otros usos.

## 9. Evaluar el resultado

Se analizan dudas recibidas, búsquedas sin resultado y errores detectados. Si muchas personas preguntaron por la modalidad, se revisa dónde aparece y si resulta comprensible. El problema puede estar en la presentación y no en la ausencia del dato.

También se revisa el proceso: cuánto tardó la aprobación, qué correcciones fueron necesarias y si hubo tareas sin responsable. El aprendizaje alimenta el siguiente evento y puede mejorar el modelo o los criterios de revisión.

## Las conexiones del caso

| Decisión | Conceptos utilizados |
| --- | --- |
| Reutilizar una fecha en calendario y ficha | Contenido estructurado, campos y vistas. |
| Relacionar un lugar sin duplicar dirección | Entidades, identificadores y referencias. |
| Separar edición, validación y publicación | Roles, permisos y responsabilidades. |
| Aprobar la versión 2 | Workflow, revisión y control de versiones. |
| Coordinar la traducción | Idiomas, procedencia y vigencia. |
| Corregir un aula en varios canales | Integración, distribución y caché. |
| Conservar una página histórica | Ciclo de vida, archivo y gobernanza. |
| Aprender de las dudas del público | Calidad, indicadores y mejora. |

## Comprueba la comprensión

**¿Cuál sería el riesgo de guardar todo en un único cartel?** Fechas, lugar y requisitos quedarían ligados a una imagen, dificultando búsqueda, accesibilidad y reutilización.

**¿Qué falta si nadie sabe quién confirma el horario?** Una responsabilidad de contenido. Instalar un módulo de calendario no la resuelve.

**¿Por qué la inscripción se trata como otro proceso?** Porque registra operaciones y datos de participantes con reglas diferentes de las de una página informativa.

**¿Qué caracteriza una buena gestión de contenidos?** Que se puede explicar de dónde viene la información, qué significa, quién la mantiene, qué versión está publicada y qué ocurrirá cuando cambie o deje de ser vigente.
