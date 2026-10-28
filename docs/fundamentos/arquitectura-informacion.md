# 7. Arquitectura de la información, taxonomías y búsqueda

## Organizar para que las personas encuentren

La **arquitectura de la información** se ocupa de cómo se organiza, nombra, relaciona y hace localizable la información. No equivale al diseño visual del menú. Incluye modelos de contenido, clasificaciones, navegación, búsqueda y las pistas que permiten entender dónde estamos.

Un sitio puede tener páginas correctas por separado y ser difícil de utilizar como conjunto. Si una convocatoria aparece bajo el nombre de un departamento desconocido para el alumnado, su ubicación refleja la organización interna, pero quizá no la tarea del visitante.

El punto de partida es identificar preguntas reales: «¿qué necesito para solicitarlo?», «¿dónde se celebra?» o «¿hay esta talla?». La estructura debe ayudar a resolverlas.

## Clasificar y navegar son decisiones distintas

La **clasificación** asigna contenidos a grupos o conceptos. La **navegación** ofrece recorridos para acceder a ellos. Un evento puede clasificarse por tema, audiencia y modalidad, pero el menú principal no tiene por qué mostrar todas esas dimensiones.

También puede haber varios accesos a la misma pieza: desde un listado de eventos, desde una página temática o desde un resultado de búsqueda. Esto no obliga a duplicar el registro.

Una noticia que se retira del menú puede seguir perteneciendo a una categoría y aparecer en búsquedas. Por eso, cambiar la navegación no sustituye las decisiones de [publicación y retirada](ciclo-vida-revision.md).

## Taxonomía, vocabulario y término

Una **taxonomía** organiza conceptos utilizados para clasificar. Un **vocabulario** agrupa términos de una dimensión, como temas o modalidades. Un **término** es un valor concreto: presencial, en línea o híbrido.

La [documentación de Drupal sobre taxonomías](https://www.drupal.org/docs/user_guide/en/structure-taxonomy.html) presenta vocabularios planos y jerárquicos. Son conceptos aplicables más allá de ese producto, aunque cada CMS los implemente de forma diferente.

Una jerarquía expresa relaciones de niveles: Actividades puede contener Jornadas y Talleres. Una lista plana resulta suficiente para valores que no necesitan subordinación. No conviene inventar una jerarquía solo porque el sistema la admite.

## Categorías, etiquetas y facetas

| Recurso | Uso habitual | Riesgo frecuente |
| --- | --- | --- |
| Categoría | Agrupar contenidos de manera relativamente estable. | Categorías vagas como «Otros» que acumulan todo. |
| Etiqueta | Añadir temas o descriptores. | Variantes y sinónimos sin control. |
| Faceta | Ofrecer una dimensión independiente para filtrar. | Valores incompletos que excluyen resultados válidos. |
| Menú | Priorizar rutas de acceso. | Reproducir toda la base de datos como un árbol enorme. |
| Migas de pan | Mostrar posición o recorrido estructural. | Sugerir una jerarquía incoherente con el sitio. |

Los nombres «categoría» y «etiqueta» no garantizan un comportamiento idéntico en todos los CMS. Hay que comprobar si admiten jerarquía, varios valores y reglas de asignación.

En Costa Sur, el tipo de prenda puede servir para navegar; la talla, el color y el material pueden actuar como facetas. Incluir «Camisetas azules talla M» como una categoría separada para cada combinación multiplicaría categorías y dificultaría el mantenimiento.

## Diseñar un vocabulario comprensible

Los términos deben tener un alcance claro. Si «Actualidad» y «Noticias» se utilizan como categorías del mismo nivel sin criterio, dos editoras clasificarán de manera distinta. Cada término puede necesitar una definición, ejemplos y una nota sobre lo que excluye.

Los **sinónimos** permiten reconocer expresiones equivalentes sin crear duplicados. Una persona puede buscar «beca» y otra «ayuda». No siempre significan lo mismo, por lo que la equivalencia debe decidirse con conocimiento del dominio.

Un vocabulario también cambia. Cuando se fusionan términos, hay que reasignar contenidos y revisar enlaces, filtros e informes. Eliminar un término sin tratar los registros asociados puede dejar piezas sin clasificar.

## Navegación global, local y contextual

La navegación **global** ofrece acceso a las grandes áreas del sitio. La **local** permite moverse dentro de una sección. La **contextual** conecta piezas relacionadas dentro del contenido: un trámite enlaza sus requisitos; un evento enlaza el lugar.

Los enlaces deben explicar su destino. «Consultar requisitos de inscripción» comunica más que varios «pincha aquí». Las personas pueden llegar directamente desde un buscador, por lo que cada página debe proporcionar suficiente contexto sin exigir pasar antes por la portada.

Un menú corto no es siempre mejor que uno amplio. La estructura adecuada depende del dominio y de las tareas. El número de clics por sí solo no mide facilidad: tres decisiones claras pueden ser preferibles a una pantalla con cincuenta opciones ambiguas.

## Cómo funciona la búsqueda interna

La búsqueda puede utilizar un **índice**, una representación preparada para recuperar resultados. Ese índice debe actualizarse cuando cambian contenidos, permisos o estados. Publicar una noticia y hacerla aparecer en el buscador pueden ser procesos separados.

La relevancia depende de factores como campos consultados, coincidencias, vocabularios y reglas configuradas. Si una palabra solo aparece dentro de una imagen, puede no resultar localizable. Si el CMS indexa un PDF, debe poder extraer su texto y respetar sus permisos.

El buscador no arregla automáticamente una clasificación deficiente. También necesita buenos títulos, datos completos y un tratamiento de consultas sin resultado. Su comportamiento debe comprobarse con las palabras del público, no únicamente con nombres internos.

## Evaluar la estructura

Se puede observar cómo personas representativas agrupan contenidos, qué etiquetas entienden y dónde buscarían un recurso. La **clasificación de tarjetas** ayuda a explorar agrupaciones; una **prueba de árbol** permite evaluar recorridos de una estructura sin depender del diseño visual.

Estas técnicas producen evidencia para decidir. No sustituyen el análisis de relaciones ni obligan a copiar literalmente cada propuesta. Cuando públicos diferentes organizan el dominio de forma distinta, puede convenir ofrecer varias entradas y facetas sobre una fuente común.

## Comprueba la comprensión

**¿Un menú es una taxonomía?** Puede utilizarla, pero su función es ofrecer navegación. No tienen por qué coincidir.

**¿Por qué un filtro de talla puede ocultar una camiseta que sí existe?** Porque falta el dato, se ha usado otro valor o el índice no se ha actualizado. La experiencia de búsqueda depende de la calidad y sincronización del contenido.

**¿Conviene crear una etiqueta nueva para cada palabra?** No. Un vocabulario sin gobierno produce ruido, duplicados y listados poco útiles. La libertad de etiquetado debe responder a una finalidad.
