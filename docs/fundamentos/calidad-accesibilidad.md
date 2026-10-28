# 13. Calidad editorial, usabilidad y accesibilidad

## La calidad tiene varias dimensiones

Un contenido útil debe ser exacto, pertinente, comprensible, completo para su propósito y mantenido. También debe poder localizarse y utilizarse en condiciones diversas. Una página puede ser gramaticalmente correcta y fallar porque omite el plazo o porque el formulario resulta inaccesible.

La **usabilidad** se refiere a la facilidad con la que una persona puede completar una tarea. Por ejemplo, localizar los requisitos y presentar una solicitud. La **accesibilidad** busca que el contenido y los controles puedan utilizarse por personas con distintas capacidades, incluidas quienes emplean tecnologías de apoyo. Una página puede parecer sencilla y, sin embargo, tener un formulario que no pueda utilizarse con el teclado.

## Redactar para una tarea

El título debe ayudar a reconocer qué ofrece la página. Los encabezados permiten localizar sus partes sin leer todo el texto. Por ejemplo, una convocatoria con apartados de requisitos, plazo y solicitud facilita encontrar la información necesaria. Los ejemplos ayudan a interpretar las condiciones que puedan resultar confusas.

El título "Requisitos para solicitar la tutoría" orienta mejor que "Información general de interés". También compromete al contenido de la página. Si después solo se explica la historia del servicio, la persona no encontrará los requisitos que esperaba. El título y el texto deben responder a la misma necesidad.

El lenguaje claro no exige eliminar conceptos técnicos necesarios. Exige definirlos, usarlos de forma consistente y evitar ambigüedades. "Se hará próximamente" debe sustituirse por una fecha o por una explicación honesta de que aún no se ha fijado.

## Cuatro principios de accesibilidad

Las **WCAG**, Web Content Accessibility Guidelines o Pautas de Accesibilidad para el Contenido Web, organizan sus recomendaciones alrededor de cuatro principios. El contenido debe ser perceptible, operable, comprensible y robusto. La [síntesis de WCAG del W3C](https://www.w3.org/WAI/standards-guidelines/wcag/glance/) los presenta y la tabla muestra ejemplos de su aplicación a un portal.

| **Principio** | **Pregunta editorial o de interfaz** | **Ejemplo del portal** |
| --- | --- | --- |
| Perceptible | ¿Puede recibirse la información de otra forma? | El plazo está escrito como texto y no solo dentro de un cartel. |
| Operable | ¿Puede realizarse la tarea con distintos medios? | El menú y el formulario se utilizan con teclado. |
| Comprensible | ¿Se entienden las instrucciones y errores? | Se explica qué dato falta y cómo corregirlo. |
| Robusto | ¿La estructura es interpretable por herramientas diversas? | Encabezados, enlaces y controles tienen significado y etiquetas. |

Los ejemplos ayudan a comprender los principios, pero no recogen todas las comprobaciones necesarias para evaluar la accesibilidad de un sitio. Cada principio se desarrolla mediante criterios más concretos.

## Responsabilidades compartidas

La accesibilidad requiere trabajo de varias partes del equipo. Quien desarrolla debe hacer que los controles funcionen con los medios de interacción previstos. Quien diseña debe cuidar aspectos como el contraste y la legibilidad. Quien edita debe organizar el texto y proporcionar enlaces y alternativas de imágenes comprensibles. La organización también debe elegir herramientas que permitan realizar esas tareas.

Una plantilla accesible puede recibir un cartel sin alternativa textual. Un texto bien redactado puede mostrarse en un componente que no se maneja con teclado. La revisión debe abarcar la combinación de sistema y contenido.

El panel de edición también importa. Si quien redacta no puede utilizarlo de forma accesible, la organización excluye a parte de su equipo. Evaluar únicamente la web pública deja esa necesidad fuera.

## Encabezados, enlaces y formularios

Los niveles de encabezado deben reflejar qué apartados dependen de otros. Por ejemplo, los requisitos académicos y económicos pueden ser subapartados de los requisitos de una beca. Su nivel no debe elegirse únicamente por el tamaño de la letra. Los enlaces también deben explicar adónde llevan, con textos como "Consultar los requisitos de la beca".

Cada campo de un formulario debe tener una etiqueta comprensible. Si se pide una fecha con un formato concreto, conviene explicarlo antes de que se introduzca. Cuando haya un error, debe indicarse qué ocurre y cómo corregirlo. Marcar el borde en rojo sin ninguna explicación puede no ser suficiente.

Una condición importante no debería desaparecer al cambiar de dispositivo. La revisión en pantalla pequeña permite detectar tablas ilegibles, textos ocultos y controles que obligan a desplazamientos incómodos.

## Revisión automática y revisión humana

Las herramientas automáticas pueden detectar algunos problemas, como una imagen sin atributo de texto alternativo o ciertos contrastes insuficientes. Sin embargo, encontrar un texto alternativo no demuestra que describa lo necesario. Una persona debe revisar su sentido y comprobar si las instrucciones y el recorrido se entienden.

Una evaluación combina herramientas, revisión manual y, cuando corresponde, participación de personas representativas. La [guía de evaluación de W3C WAI](https://www.w3.org/WAI/test-evaluate/) explica la complementariedad de estos enfoques.

También deben probarse tareas completas. Para solicitar una beca, una persona necesita encontrar la convocatoria, comprender los requisitos y utilizar el formulario. Comprobar solo la portada deja sin revisar buena parte de ese recorrido.

## Un criterio de aceptación editorial

Para publicar una ficha de servicio, la organización puede exigir que tenga objetivo y público claros, requisitos vigentes, responsable asignado, enlaces comprobados, estructura comprensible y recursos accesibles. Estos criterios deben aplicarse a la versión que se aprobará.

La lista se adapta al tipo de contenido. Una noticia breve y una guía compleja no necesitan idénticos controles. Los problemas frecuentes sirven para mejorar formularios, componentes y formación, evitando que cada persona tenga que descubrirlos de nuevo.

## Comprueba la comprensión

**¿Un comprobador automático sin errores prueba accesibilidad completa?** No. Solo aporta evidencia sobre las comprobaciones que puede realizar.

**¿Poner toda la información en una imagen es suficiente si se ve bien?** No. Hay que garantizar que la información pueda percibirse y utilizarse por otras vías.

**¿Quién responde de la calidad?** El trabajo se reparte entre quienes mantienen la herramienta, diseñan las páginas y preparan los contenidos. Debe quedar claro qué comprueba cada persona y quién atiende los problemas detectados.
