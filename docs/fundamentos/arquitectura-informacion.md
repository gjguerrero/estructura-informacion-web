# 7. Arquitectura de la información, taxonomías y búsqueda

## Organizar para que las personas encuentren

La **arquitectura de la información** organiza el contenido para que las personas puedan encontrarlo y entender cómo se relaciona. Incluye decidir qué secciones tendrá un sitio, cómo se llamarán, qué contenidos se agruparán y cómo se podrá buscar. Por ejemplo, debe ayudar a un estudiante a localizar las becas aunque no sepa qué departamento las gestiona.

Un sitio puede tener páginas correctas por separado y ser difícil de utilizar como conjunto. Si una convocatoria aparece bajo el nombre de un departamento desconocido para el alumnado, su ubicación refleja la organización interna, pero quizá no la tarea del visitante.

Para diseñar esa organización, conviene conocer qué busca el público. Algunas preguntas habituales pueden ser "¿Qué necesito para solicitar esta beca?", "¿Dónde se celebra la actividad?" o "¿Está disponible esta talla?". Los nombres de las secciones, los enlaces y los filtros deben facilitar esas consultas.

## Clasificar y navegar son decisiones distintas

La **clasificación** indica a qué grupos pertenece un contenido. Un evento puede clasificarse como científico, dirigido a estudiantes y presencial. La **navegación** proporciona los caminos para llegar hasta él, por ejemplo, desde el menú de actividades. No es necesario convertir cada dato utilizado para clasificar en una opción del menú principal.

Una misma actividad puede encontrarse desde el calendario, desde una página sobre su tema o desde el buscador. Los tres accesos pueden conducir al mismo registro. No hace falta crear una copia de la actividad para cada recorrido.

Una noticia que se retira del menú puede seguir perteneciendo a una categoría y aparecer en búsquedas. Por eso, cambiar la navegación no sustituye las decisiones de [publicación y retirada](ciclo-vida-revision.md#9-ciclo-de-vida-revision-y-publicacion).

## Taxonomía, vocabulario y término

Una **taxonomía** organiza los conceptos que se utilizan para clasificar contenidos. Un **vocabulario** reúne los valores de un aspecto concreto, como la modalidad de una actividad. Cada opción es un **término** de ese vocabulario. Por ejemplo, "Presencial", "En línea" e "Híbrida" pueden ser sus tres términos.

La [documentación de Drupal sobre taxonomías](https://www.drupal.org/docs/user_guide/en/structure-taxonomy.html) presenta vocabularios planos y jerárquicos. Son conceptos aplicables más allá de ese producto, aunque cada CMS los implemente de forma diferente.

Una clasificación puede ser jerárquica. Por ejemplo, dentro de "Actividades" pueden aparecer "Jornadas" y "Talleres". También puede utilizarse una lista sin niveles, como las modalidades de asistencia. La jerarquía es útil cuando expresa una relación comprensible entre grupos.

## Categorías, etiquetas y facetas

| **Recurso** | **Uso habitual** | **Riesgo frecuente** |
| --- | --- | --- |
| Categoría | Agrupar contenidos de manera relativamente estable. | Categorías vagas como "Otros" que acumulan todo. |
| Etiqueta | Añadir temas o descriptores. | Variantes y sinónimos sin control. |
| Faceta | Permitir filtrar por un aspecto, como talla o color. | Valores incompletos que excluyen resultados válidos. |
| Menú | Ofrecer enlaces a secciones y tareas principales. | Reproducir toda la base de datos como un árbol enorme. |
| Migas de pan | Indicar la posición de la página dentro del sitio. | Sugerir una jerarquía incoherente con el sitio. |

Los nombres "categoría" y "etiqueta" no garantizan un comportamiento idéntico en todos los CMS. Hay que comprobar si admiten jerarquía, varios valores y reglas de asignación.

En Costa Sur, el menú puede incluir las categorías "Camisetas" y "Pantalones". Dentro de cada una, las **facetas** permiten filtrar por talla, color y material. Así, una persona puede elegir camisetas azules de talla M sin que el equipo tenga que crear una categoría distinta para cada combinación de opciones.

## Diseñar un vocabulario comprensible

Los términos deben tener un alcance claro. Si "Actualidad" y "Noticias" se utilizan como categorías del mismo nivel sin criterio, dos editoras clasificarán de manera distinta. Cada término puede necesitar una definición, ejemplos y una nota sobre lo que excluye.

Los **sinónimos** permiten reconocer expresiones equivalentes sin crear duplicados. Una persona puede buscar "beca" y otra "ayuda". No siempre significan lo mismo, por lo que la equivalencia debe decidirse con conocimiento del dominio.

Un vocabulario también cambia. Cuando se fusionan términos, hay que reasignar contenidos y revisar enlaces, filtros e informes. Eliminar un término sin tratar los registros asociados puede dejar piezas sin clasificar.

## Navegación global, local y contextual

La navegación **global** permite acceder a las grandes áreas del sitio, como estudios, investigación y noticias. La navegación **local** ofrece opciones dentro de una de esas áreas, como grados y másteres dentro de estudios. La navegación **contextual** aparece en el propio contenido y enlaza información relacionada, como la ficha del lugar donde se celebra una actividad.

Los enlaces deben explicar su destino. "Consultar requisitos de inscripción" comunica más que varios "pincha aquí". Las personas pueden llegar directamente desde un buscador, por lo que cada página debe proporcionar suficiente contexto sin exigir pasar antes por la portada.

La navegación debe ofrecer opciones comprensibles. Llegar a un trámite mediante tres elecciones claras puede ser más sencillo que encontrarlo en un menú con cincuenta nombres ambiguos. Para valorar una estructura conviene observar si las personas encuentran lo que buscan, además de contar los clics que realizan.

## Cómo funciona la búsqueda interna

Un buscador puede utilizar un **índice**, una colección de información preparada para localizar resultados con rapidez. Por ejemplo, puede guardar los títulos y las palabras de las noticias que debe buscar. Cuando una noticia cambia, se publica o deja de ser accesible, ese índice debe actualizarse. Por eso, guardar una noticia y verla aparecer en el buscador pueden ocurrir en momentos distintos.

Los resultados dependen de qué campos consulta el buscador y de cómo valora las coincidencias. Puede dar más importancia a una palabra que aparece en el título que a otra dentro de un párrafo. Si el texto solo está dentro de una imagen, quizá no pueda reconocerlo. Para buscar dentro de un PDF, el sistema debe extraer su texto y respetar quién tiene permiso para leerlo.

El buscador no arregla automáticamente una clasificación deficiente. También necesita buenos títulos, datos completos y un tratamiento de consultas sin resultado. Su comportamiento debe comprobarse con las palabras del público, no únicamente con nombres internos.

## Evaluar la estructura

La **clasificación de tarjetas** consiste en presentar contenidos o temas a personas representativas del público y pedirles que los agrupen. Permite conocer qué relaciones y nombres les resultan comprensibles. En una **prueba de árbol**, se muestra una estructura de secciones sin su diseño visual y se pide localizar algo, como una convocatoria. Así se comprueba si los recorridos propuestos se entienden.

Estas pruebas ayudan a mejorar la organización del sitio. Sus resultados deben interpretarse junto con las necesidades de la institución. Si el alumnado busca las actividades por tema y el personal las busca por unidad organizadora, se pueden ofrecer ambos recorridos sobre los mismos registros.

## Comprueba la comprensión

**¿Un menú es una taxonomía?** Puede utilizarla, pero su función es ofrecer navegación. No tienen por qué coincidir.

**¿Por qué un filtro de talla puede ocultar una camiseta que sí existe?** Porque falta el dato, se ha usado otro valor o el índice no se ha actualizado. La experiencia de búsqueda depende de la calidad y sincronización del contenido.

**¿Conviene crear una etiqueta nueva para cada palabra?** No. Varias etiquetas con el mismo significado pueden dividir los resultados y dificultar la búsqueda. Es preferible acordar qué temas se van a utilizar y cuándo hace falta añadir uno nuevo.
