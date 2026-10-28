# 5. Modelar contenidos mediante tipos, campos y relaciones

## El modelo antes del formulario

Un **modelo de contenido** define qué tipos de información necesita gestionar una organización, qué datos contiene cada uno y cómo se relacionan. Por ejemplo, un portal de actividades puede necesitar fichas de eventos, lugares y ponentes. El modelo establece que cada evento tiene una fecha, se celebra en un lugar y puede contar con varios ponentes. Los formularios permiten introducir esa información.

Conviene definir primero qué información hace falta. Un campo llamado "Plazo de solicitud" explica qué dato debe guardarse y sigue teniendo sentido si cambia el diseño. En cambio, un campo llamado "Texto de la caja azul" solo indica dónde se muestra ahora. Cuando desaparezca esa caja, será más difícil saber para qué se creó el campo.

El modelo tampoco debe anticipar todas las posibilidades imaginables. Conviene partir de necesidades reales, comprobar ejemplos representativos y prever cómo se introducirán cambios sin perder información.

## Tipo, registro, campo y valor

El **tipo de contenido** "Evento" define la estructura común de las actividades. Un **registro** es una actividad concreta, como una jornada de puertas abiertas. Un **campo** es uno de sus datos, por ejemplo, la fecha de inicio. El **valor** es el dato concreto guardado en ese campo, como el 15 de noviembre de 2026.

Los campos pueden guardar texto, números, fechas, archivos o referencias a otros registros. También pueden admitir valores de sí o no, llamados **booleanos**, o una opción de una lista. El tipo de campo determina qué puede hacer el sistema con el dato. Una fecha permite ordenar actividades y una referencia a un lugar permite consultar su ficha.

La guía de [Drupal sobre tipos de contenido](https://www.drupal.org/docs/user_guide/en/structure-content-type.html) muestra una implementación de estos conceptos. Otros CMS pueden usar nombres diferentes o limitar los tipos disponibles.

## Un ejemplo de diccionario de datos

Un **diccionario de datos** documenta el significado y las reglas de cada campo. Por ejemplo, debe aclarar si "Inicio" es el comienzo de la actividad o la apertura de la inscripción. También indica si el campo es obligatorio, qué valores admite y para qué se utilizará.

| **Campo de Evento** | **Tipo de dato y cantidad admitida** | **Regla** | **Motivo** |
| --- | --- | --- | --- |
| Identificador | Un texto o identificador generado. | Único y estable. | Relacionar el evento sin depender del título. |
| Título | Un texto breve. | Obligatorio y comprensible fuera del calendario. | Identificarlo en distintas vistas. |
| Inicio | Una fecha con su hora. | Zona horaria definida. | Ordenar y publicar con precisión. |
| Fin | Una fecha con su hora, si se conoce. | No anterior al inicio. | Mostrar duración cuando se conoce. |
| Lugar | Una o varias referencias a lugares. | Debe apuntar a una ficha válida. | Reutilizar dirección y accesibilidad. |
| Modalidad | Una opción de la lista permitida. | Presencial, en línea o híbrida. | Filtrar y exigir datos coherentes. |
| Enlace de acceso | Una dirección web, cuando haga falta. | Requerido si la modalidad lo necesita. | Dar acceso a la participación remota. |
| Responsable | Una referencia a la unidad responsable. | Debe existir un contacto vigente. | Mantener el contenido. |

La **cardinalidad** indica cuántos valores puede tener un campo. Un evento puede admitir un único responsable y varios ponentes. Un campo opcional puede quedar sin valor. Además, "obligatorio" y "único" significan cosas diferentes. Todos los eventos pueden tener que indicar su modalidad y varios pueden ser presenciales. En cambio, cada evento necesita un identificador diferente.

## Validación y calidad semántica

La **validación sintáctica** comprueba que un dato tenga el formato previsto. Por ejemplo, una fecha debe poder interpretarse como fecha y una dirección web debe seguir un formato admitido. La **validación semántica** comprueba que el dato tenga sentido en su contexto. Una fecha de fin puede estar bien escrita y, aun así, ser incorrecta porque es anterior a la fecha de inicio.

Una URL con formato correcto puede conducir al recurso equivocado. Un título no vacío puede decir "Pendiente". Por tanto, una validación automática reduce ciertos errores, pero no sustituye la revisión del contenido.

Los mensajes del formulario deben indicar cómo corregir el problema. "Valor inválido" aporta menos que "La fecha de fin debe ser igual o posterior a la fecha de inicio". Un campo obligatorio sin explicación puede fomentar datos de relleno.

## Relaciones y entidades reutilizables

Una **relación** conecta dos registros e indica qué vínculo existe entre ellos. Por ejemplo, la ficha de un evento puede relacionarse con la ficha del edificio donde se celebra. El CMS conserva esa conexión y puede utilizarla para mostrar la dirección o localizar otros eventos en el mismo lugar.

Si guardamos "Centro Cultural" como texto en diez eventos, el CMS no sabe necesariamente que se trata del mismo edificio. Si todos apuntan a su ficha, se puede actualizar una dirección común y mostrar los eventos relacionados.

En una relación **uno a muchos**, un registro puede estar vinculado con varios del otro tipo. Por ejemplo, una unidad puede gestionar varios servicios y cada servicio tener una única unidad responsable. En una relación **muchos a muchos**, las dos partes pueden tener varios vínculos. Un evento puede tener varios ponentes y cada ponente participar en varios eventos.

## Identificador, título y URL

El **identificador** permite reconocer un registro aunque cambie su título. El **título** es el nombre que leen las personas y puede corregirse o repetirse en otros registros. La **URL** es la dirección desde la que se accede a la página. Su parte legible se suele llamar **slug**, como "jornada-puertas-abiertas". Estos elementos tienen funciones distintas y no tienen por qué cambiar a la vez.

Si se utiliza únicamente el título para reconocer contenidos, una importación podría interpretar "Jornada 2026" y "Jornada de 2026" como actividades distintas. Un identificador estable permite reconocer que se trata del mismo registro. Si cambia su dirección web, una redirección puede llevar a quienes usan la dirección anterior hasta la nueva página.

## Reutilización y conservación del contexto

Cuando se reutiliza una ficha, sus cambios pueden aparecer en todas las páginas que la consultan. Si un edificio cambia de nombre, interesa mostrar el nuevo nombre en las actividades futuras. Para una actividad pasada, quizá deba conservarse el nombre que tenía entonces. Hay que decidir si cada uso mostrará los datos actuales de la ficha o conservará una copia de los datos de aquel momento.

Por ejemplo, un pedido debe conservar el precio aplicado al comprar, aunque el producto cambie de precio después. En cambio, las páginas de distintos trámites pueden necesitar mostrar siempre el teléfono actual de atención. La decisión depende de si se debe informar sobre la situación presente o conservar lo que ocurrió.

## Evolución del modelo

Si se añade un campo obligatorio, también hay que revisar los registros que ya existían. Por ejemplo, exigir ahora un "Responsable" no asigna automáticamente uno a las noticias antiguas. Será necesario averiguar quién se hará cargo de ellas y decidir cómo gestionar las que todavía no tengan responsable.

Eliminar o reunir campos puede provocar pérdida de información. Sustituir etiquetas escritas libremente por una lista acordada exige decidir qué hacer con los valores anteriores. Por ejemplo, "RR. HH." y "Recursos humanos" podrían pasar a una misma opción. Antes de aplicar el cambio, conviene documentarlo y probarlo con registros reales.

## Tres errores frecuentes

**Un tipo distinto para cada diseño.** Crear "Noticia con foto grande" y "Noticia con foto pequeña" puede duplicar estructuras que guardan los mismos datos. Si solo cambia la presentación, puede bastar con utilizar plantillas u opciones visuales distintas.

**Un único campo para todo.** Pegar toda la convocatoria en un texto es rápido, pero dificulta ordenar por fecha o reutilizar el contacto. Conviene separar los datos que se van a utilizar de forma independiente.

**Estructurar sin una necesidad.** Dividir un texto narrativo en decenas de piezas pequeñas puede empeorar su edición sin aportar usos nuevos.

## Comprueba la comprensión

**¿La biografía de un ponente debe copiarse en cada evento?** Si es información compartida y vigente, una ficha relacionada reduce inconsistencias. Si interesa conservar una presentación histórica específica, puede guardarse ese texto contextual junto a la relación.

**¿Un campo obligatorio garantiza un buen contenido?** Solo garantiza, como máximo, que se proporcione un valor que cumpla las reglas configuradas. La utilidad y exactitud requieren otros controles.

**¿Cómo detectar un modelo mal planteado?** Una señal es tener que leer descripciones para encontrar datos que el sistema debería filtrar, como la fecha o la modalidad. Otra es que el equipo no sepa qué debe guardar en campos genéricos como "Otros". Es necesario revisar si los campos representan las necesidades reales.
