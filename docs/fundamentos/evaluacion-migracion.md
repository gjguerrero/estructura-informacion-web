# 21. Evaluación, mejora y migración de contenidos

## Medir para decidir

Una **métrica** es una medida definida. Un **indicador** se interpreta en relación con un objetivo. Contar visitas puede resultar útil, pero no demuestra que las personas encuentren lo que necesitan ni que el contenido esté vigente.

Antes de medir hay que formular una pregunta. «¿Se entiende la nueva guía?» requiere evidencia distinta de «¿cuántas páginas no tienen responsable?». El periodo, la población y la forma de contar deben estar claros.

## Indicadores del servicio y del proceso editorial

| Pregunta | Indicador posible | Precaución al interpretarlo |
| --- | --- | --- |
| ¿Se mantiene el contenido crítico? | Porcentaje con revisión vigente. | Definir qué significa revisar y qué piezas son críticas. |
| ¿Se corrigen errores a tiempo? | Tiempo entre detección y corrección publicada. | Distinguir gravedad y complejidad. |
| ¿Encuentran las personas información? | Consultas sin resultados y éxito en tareas. | Una búsqueda sin resultado puede tener varias causas. |
| ¿Dónde se atasca el trabajo? | Tiempo en cada estado editorial. | Analizar carga y dependencias. |
| ¿Qué problemas se repiten? | Incidencias por tipo de contenido. | No penalizar a quien detecta y comunica errores. |

Los datos necesitan responsables y reglas de calidad. Un informe que mezcla periodos o cuenta varias veces la misma operación puede orientar mal las decisiones.

## Un ejemplo numérico

Supongamos que un portal tiene **120 fichas activas** y **90** han pasado la revisión prevista. La cobertura de revisión es **90 / 120 × 100 = 75 %**. El indicador no demuestra que el 75 % sea correcto en cualquier momento; demuestra que esas fichas cumplen el criterio de revisión definido.

En una tienda, si de **200 sesiones elegibles**, **8 sesiones** incluyen al menos una compra, la proporción de sesiones con compra es **8 / 200 × 100 = 4 %**. Si se contaran ocho pedidos, podría tratarse de otra métrica: una sesión puede incluir más de uno. El numerador debe corresponder a la definición.

Los ejemplos son ficticios. Ningún porcentaje sirve por sí solo como umbral universal de calidad.

## Interpretar antes de atribuir causas

Si una ficha recibe menos visitas tras una actualización, puede haber cambiado la demanda, una campaña o la medición. Si mejora la conversión después de cambiar fotografías y precio al mismo tiempo, no se puede atribuir todo el efecto a las imágenes.

Las observaciones, consultas de soporte y pruebas con usuarios ayudan a interpretar cifras. Una prueba comparativa necesita diseño adecuado y tamaño suficiente para sostener sus conclusiones. Acumular números no elimina la incertidumbre.

La mejora puede actuar sobre contenido, modelo, navegación, formulario o proceso editorial. No todo problema exige cambiar de CMS.

## Cuándo aparece una migración

Una **migración de contenidos** traslada información a otro modelo, sistema o estructura. Puede ocurrir al sustituir el CMS, consolidar varios portales o reorganizar tipos y campos. Copiar archivos es solo una parte.

El trabajo empieza con inventario y auditoría. Conviene decidir qué se conserva, actualiza, fusiona o retira antes de transportar todos los problemas al destino. También hay que identificar relaciones, archivos, idiomas, estados, permisos y URLs.

## Mapeo y transformación

Un **mapeo** expresa qué elemento de origen corresponde a cuál del destino. «Descripción» puede dividirse en resumen, cuerpo y requisitos. Una categoría libre puede convertirse en un término controlado. Algunas transformaciones requieren decisión humana.

| Elemento de origen | Decisión de migración |
| --- | --- |
| Identificador | Conservarlo o mantener una equivalencia estable. |
| Campo de texto con fechas | Extraer y validar; revisar casos ambiguos. |
| Autoría y responsable | Distinguir funciones y reasignar cuentas inexistentes. |
| Imágenes y documentos | Transferir archivos y metadatos, conservando relaciones. |
| Traducciones | Mantener su vínculo y estado de actualización. |
| URL anterior | Establecer destino o respuesta de retirada apropiada. |

La política debe especificar qué historial se conserva. Exportar solo la última versión puede ser aceptable en un caso y perder evidencia necesaria en otro. La decisión debe conocerse antes de cambiar el sistema.

## Validación y cambio de servicio

Una migración se comprueba con recuentos y con casos representativos: piezas con varios idiomas, archivos, caracteres especiales, relaciones múltiples y acceso restringido. Igualar el número total de registros no demuestra que su contenido sea correcto.

También se revisan redirecciones, enlaces, búsqueda, permisos y navegación. Una pieza privada en origen no debe aparecer pública por usar el valor predeterminado del destino.

El cambio necesita decidir qué ocurre con modificaciones realizadas durante la migración. Puede haber una ventana de congelación o una sincronización de cambios pendientes. Debe existir una forma de revertir o corregir el proceso si los criterios de aceptación no se cumplen.

## Comprueba la comprensión

**¿Mil páginas importadas prueban una migración correcta?** No. Hay que comprobar significado, relaciones, permisos, archivos y comportamiento.

**¿Una caída de visitas indica que el contenido ha empeorado?** No necesariamente. Hay que formular y contrastar explicaciones alternativas.

**¿Por qué definir la salida al elegir un CMS?** Porque conocer formatos y dependencias permite conservar opciones futuras y estimar el coste real de cambiar.
