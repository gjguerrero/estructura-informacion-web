# 21. Evaluación, mejora y migración de contenidos

## Medir para decidir

Una **métrica** es una medida, como el número de fichas revisadas durante un mes. Un **indicador** utiliza una medida para valorar un objetivo, por ejemplo, el porcentaje de fichas que tienen la revisión al día. El número de visitas informa sobre el acceso a una página, pero no demuestra por sí solo que las personas comprendan sus instrucciones.

Primero hay que decidir qué se quiere averiguar. Para saber si una guía se entiende, puede observarse cómo la utilizan las personas. Para saber cuántas fichas no tienen responsable, puede consultarse ese campo. En cualquier medición hay que aclarar qué se cuenta y durante qué periodo.

## Indicadores del servicio y del proceso editorial

| **Pregunta** | **Indicador posible** | **Precaución al interpretarlo** |
| --- | --- | --- |
| ¿Se mantiene el contenido crítico? | Porcentaje con revisión vigente. | Definir qué significa revisar y qué piezas son críticas. |
| ¿Se corrigen errores a tiempo? | Tiempo entre detección y corrección publicada. | Distinguir gravedad y complejidad. |
| ¿Encuentran las personas información? | Consultas sin resultados y éxito en tareas. | Una búsqueda sin resultado puede tener varias causas. |
| ¿Dónde se atasca el trabajo? | Tiempo en cada estado editorial. | Analizar carga y dependencias. |
| ¿Qué problemas se repiten? | Incidencias por tipo de contenido. | No penalizar a quien detecta y comunica errores. |

Las medidas deben calcularse con reglas conocidas. Si un informe cuenta visitas de una semana y otro de un mes, sus totales no son directamente comparables. También hay que evitar contar varias veces una misma operación cuando el indicador pretende medir operaciones distintas.

## Un ejemplo numérico

Supongamos que un portal tiene **120 fichas activas** y que **90** tienen al día la revisión prevista. El porcentaje es **90 / 120 × 100 = 75 %**. Esto permite identificar cuánto trabajo de revisión se ha completado. No garantiza que todas esas fichas sigan siendo correctas, porque la información puede cambiar después de revisarlas.

En una tienda, una **sesión** agrupa las interacciones de una visita según las reglas de la herramienta de medición. Si se analizan **200 sesiones** y en **8** se realiza al menos una compra, la proporción de sesiones con compra es **8 / 200 × 100 = 4 %**. No se deben sustituir las ocho sesiones por ocho pedidos sin comprobarlo, porque una sesión puede contener más de un pedido.

Los ejemplos son ficticios. Ningún porcentaje sirve por sí solo como umbral universal de calidad.

## Interpretar antes de atribuir causas

Que dos cambios ocurran cerca en el tiempo no demuestra que uno cause el otro. Una página puede recibir menos visitas después de corregirse porque terminó una campaña que llevaba público hasta ella. Si una tienda cambia a la vez las fotografías y el precio y después aumentan las compras, esos datos no permiten atribuir toda la mejora a las imágenes.

Las cifras pueden interpretarse mejor junto con observaciones y consultas al equipo de atención. Por ejemplo, las preguntas repetidas sobre un plazo pueden revelar que no se encuentra bien en la página. Si se comparan versiones de una página, la prueba debe planificarse de manera que permita distinguir sus efectos de otros cambios.

La mejora debe responder al problema observado. Si el plazo está oculto, puede bastar con cambiar la presentación. Si se introduce como texto libre y se necesita ordenar por fecha, puede ser necesario modificar el modelo. Si las revisiones se retrasan, quizá haya que ajustar la organización del trabajo.

## Cuándo aparece una migración

Una **migración de contenidos** traslada información a otro sistema o a una estructura diferente. Puede ser necesaria al cambiar de CMS o al reunir varios portales. Además de mover textos y archivos, hay que decidir cómo se conservarán sus relaciones, permisos y estados. Por ejemplo, las traducciones de una noticia deben seguir vinculadas después del traslado.

Antes de migrar conviene inventariar y revisar lo que existe. Algunas páginas deben conservarse, otras necesitan corregirse y otras pueden reunirse o retirarse. También hay que localizar sus archivos, traducciones y enlaces. Así se sabe qué debe llegar al nuevo sistema y se evita trasladar sin revisión contenidos duplicados o antiguos.

## Mapeo y transformación

El **mapeo** establece la correspondencia entre los campos del sistema antiguo y los del nuevo. Por ejemplo, el campo "Descripción" puede pasar al campo "Texto principal". Si el nuevo sistema separa resumen, requisitos y explicación, habrá que repartir el texto anterior entre esos campos. Algunas decisiones pueden automatizarse y otras requieren leer y revisar el contenido.

| **Elemento de origen** | **Decisión de migración** |
| --- | --- |
| Identificador | Conservarlo o mantener una equivalencia estable. |
| Campo de texto con fechas | Extraer las fechas, comprobarlas y revisar los casos ambiguos. |
| Autoría y responsable | Conservar la autoría y asignar responsables actuales. |
| Imágenes y documentos | Transferir archivos y metadatos, conservando relaciones. |
| Traducciones | Mantener su vínculo y estado de actualización. |
| URL anterior | Definir la nueva dirección o cómo informar de la retirada. |

La política debe especificar qué historial se conserva. Exportar solo la última versión puede ser aceptable en un caso y perder evidencia necesaria en otro. La decisión debe conocerse antes de cambiar el sistema.

## Validación y cambio de servicio

La comprobación debe incluir cantidades y ejemplos concretos. Se pueden revisar fichas con varios idiomas, documentos adjuntos y acceso restringido. También conviene comprobar que las imágenes se ven y las relaciones siguen apuntando a los registros correctos. Importar el mismo número de fichas no demuestra que todos sus datos se hayan conservado.

También se revisan redirecciones, enlaces, búsqueda, permisos y navegación. Una pieza privada en origen no debe aparecer pública por usar el valor predeterminado del destino.

Hay que decidir qué ocurre con los cambios realizados mientras se trasladan los contenidos. Una opción es detener temporalmente la edición durante un periodo acordado. Otra es recoger las modificaciones posteriores a la copia inicial y aplicarlas al destino. También debe prepararse cómo corregir el traslado o volver al sistema anterior si las comprobaciones fallan.

## Comprueba la comprensión

**¿Mil páginas importadas prueban una migración correcta?** No. El recuento es solo una comprobación. Hay que revisar que los textos, archivos, traducciones, enlaces y permisos se hayan conservado correctamente.

**¿Una caída de visitas indica que el contenido ha empeorado?** No necesariamente. Hay que formular y contrastar explicaciones alternativas.

**¿Por qué estudiar cómo salir de un CMS antes de elegirlo?** Porque permite comprobar qué datos pueden recuperarse y cuánto trabajo exigiría trasladarlos. Esto ayuda a evitar una dependencia que solo se descubra cuando cambiar sea urgente.
