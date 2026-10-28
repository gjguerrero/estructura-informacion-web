# 5. Modelar contenidos: tipos, campos y relaciones

## El modelo antes del formulario

Un **modelo de contenido** describe qué clases de piezas necesita la organización, qué información contiene cada una y cómo se relacionan. Es una decisión sobre el significado de la información. El formulario del CMS es una de sus representaciones.

Si empezamos eligiendo una plantilla visual, podemos acabar inventando campos como «texto de la caja azul». Si empezamos por el dominio, aparecerán conceptos como «requisito», «plazo» y «contacto». Estos últimos siguen teniendo sentido aunque el diseño cambie.

El modelo tampoco debe anticipar todas las posibilidades imaginables. Conviene partir de necesidades reales, comprobar ejemplos representativos y prever cómo se introducirán cambios sin perder información.

## Tipo, registro, campo y valor

El **tipo de contenido** define una clase: Evento. Un **registro** es un evento concreto: Jornada de puertas abiertas. Un **campo** define un atributo: fecha de inicio. Su **valor** es la fecha concreta que se guarda.

Los campos pueden aceptar texto breve, texto enriquecido, números, fechas, booleanos, archivos, términos de un vocabulario o referencias a otros registros. Su tipo limita operaciones: un número puede compararse; una fecha puede ordenarse; una referencia permite recuperar la entidad relacionada.

La guía de [Drupal sobre tipos de contenido](https://www.drupal.org/docs/user_guide/en/structure-content-type.html) muestra una implementación de estos conceptos. Otros CMS pueden usar nombres diferentes o limitar los tipos disponibles.

## Un ejemplo de diccionario de datos

El **diccionario de datos** explica cada campo de manera suficiente para que dos personas lo interpreten igual. No basta con una lista de nombres.

| Campo de Evento | Tipo y cardinalidad | Regla | Motivo |
| --- | --- | --- | --- |
| Identificador | Texto o identificador generado; uno | Único y estable. | Relacionar el evento sin depender del título. |
| Título | Texto breve; uno | Obligatorio y comprensible fuera del calendario. | Identificarlo en distintas vistas. |
| Inicio | Fecha y hora; una | Zona horaria definida. | Ordenar y publicar con precisión. |
| Fin | Fecha y hora; cero o una | No anterior al inicio. | Mostrar duración cuando se conoce. |
| Lugar | Referencia; uno o varios según el modelo | Debe apuntar a una ficha válida. | Reutilizar dirección y accesibilidad. |
| Modalidad | Valor controlado; uno | Presencial, en línea o híbrida. | Filtrar y exigir datos coherentes. |
| Enlace de acceso | URL; cero o una | Requerido si la modalidad lo necesita. | Dar acceso a la participación remota. |
| Responsable | Referencia a unidad; una | Debe existir un contacto vigente. | Mantener el contenido. |

La **cardinalidad** expresa cuántos valores se admiten: uno, varios o ninguno. «Obligatorio» y «único» son reglas distintas. Muchos eventos pueden compartir modalidad; no deberían compartir identificador.

## Validación y calidad semántica

La **validación sintáctica** comprueba forma y rango: que una fecha sea interpretable, que un número no sea negativo o que una URL tenga un formato admitido. La **validación semántica** comprueba sentido: que el fin no preceda al inicio y que el lugar sea adecuado para ese evento.

Una URL con formato correcto puede conducir al recurso equivocado. Un título no vacío puede decir «Pendiente». Por tanto, una validación automática reduce ciertos errores, pero no sustituye la revisión del contenido.

Los mensajes del formulario deben indicar cómo corregir el problema. «Valor inválido» aporta menos que «La fecha de fin debe ser igual o posterior a la fecha de inicio». Un campo obligatorio sin explicación puede fomentar datos de relleno.

## Relaciones y entidades reutilizables

Una **relación** enlaza registros con un significado. Un evento se celebra en un lugar; una noticia tiene una autora; un producto pertenece a una categoría. El enlace debe distinguirse de una simple coincidencia de texto.

Si guardamos «Centro Cultural» como texto en diez eventos, el CMS no sabe necesariamente que se trata del mismo edificio. Si todos apuntan a su ficha, se puede actualizar una dirección común y mostrar los eventos relacionados.

Una relación **uno a muchos** permite que una unidad gestione varios servicios. Una relación **muchos a muchos** permite que un evento tenga varios ponentes y una persona participe en varios eventos. No hace falta dominar bases de datos para comprender la pregunta: cuántas piezas pueden estar vinculadas en cada lado.

## Identificador, título y URL

El identificador debe conservar la identidad del registro aunque cambie su nombre. El título está pensado para personas y puede repetirse o corregirse. El **slug** es una parte legible de la dirección, por ejemplo `jornada-puertas-abiertas`.

Usar el título como única identidad dificulta las importaciones: «Jornada 2026» y «Jornada de 2026» podrían convertirse en dos registros. Un identificador permite reconocer que son la misma pieza. Si cambia la URL pública, habrá que gestionar los enlaces anteriores mediante una política de redirección apropiada.

## Reutilización y conservación del contexto

Reutilizar una ficha reduce duplicados, pero una actualización puede afectar a muchos lugares. Si se cambia el nombre de un edificio, quizá interese mostrar el nombre actual en eventos futuros y conservar la denominación histórica en un archivo. El modelo debe decidir si utiliza una relación viva o una copia contextual de determinados datos.

En comercio electrónico, el pedido suele necesitar conservar los datos relevantes del momento de la compra. No bastaría con mostrar siempre el precio actual del producto. En un portal, en cambio, reutilizar el teléfono vigente de atención puede ser lo deseable.

## Evolución del modelo

Añadir un campo obliga a decidir qué ocurre con los registros existentes. Si «responsable» pasa a ser obligatorio, cientos de piezas pueden carecer de valor. La migración necesita localizar responsables, asignar valores válidos y establecer cómo se tratarán los casos desconocidos.

Eliminar o combinar campos puede perder información. Cambiar una lista libre de etiquetas por un vocabulario controlado requiere equivalencias. El modelo es una infraestructura editorial: sus cambios necesitan revisión, documentación y pruebas con contenido real.

## Tres errores frecuentes

**Un tipo distinto para cada diseño.** Puede crear tipos redundantes que representan la misma entidad. Es preferible separar presentación y significado cuando sea posible.

**Un único campo para todo.** Facilita el primer pegado, pero dificulta filtros, validaciones y reutilización.

**Estructurar sin una necesidad.** Dividir un texto narrativo en decenas de piezas pequeñas puede empeorar su edición sin aportar usos nuevos.

## Comprueba la comprensión

**¿La biografía de un ponente debe copiarse en cada evento?** Si es información compartida y vigente, una ficha relacionada reduce inconsistencias. Si interesa conservar una presentación histórica específica, puede guardarse ese texto contextual junto a la relación.

**¿Un campo obligatorio garantiza un buen contenido?** Solo garantiza, como máximo, que se proporcione un valor que cumpla las reglas configuradas. La utilidad y exactitud requieren otros controles.

**¿Cómo detectar un modelo mal planteado?** Cuando proliferan campos «otros», títulos que actúan como identificadores y descripciones que esconden datos necesarios para buscar o filtrar.
