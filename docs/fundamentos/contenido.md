# 4. Qué es el contenido

## Información que permite hacer algo

En un CMS, el **contenido** es la información que la organización crea, administra y pone a disposición de un público para cumplir una finalidad. Puede adoptar la forma de texto, imagen, audio, vídeo, documento o conjunto de datos. Una ficha de producto y una respuesta a una pregunta frecuente son contenidos, aunque tengan formatos y procesos de revisión diferentes.

Definirlo solo como «lo que se ve en una página» es insuficiente. Puede haber contenidos aún no publicados, información distribuida mediante una API y piezas reutilizadas en varias pantallas. Tampoco todo lo visible procede del mismo lugar: una plantilla puede aportar el texto de un botón mientras el CMS aporta la descripción del servicio.

## Dato, información y contexto

Un dato aislado como «30» resulta ambiguo. Puede ser una cantidad, una talla o un plazo. «30 días naturales desde la confirmación» incorpora contexto y permite interpretar el número. La gestión de contenidos debe conservar ese significado y evitar que dependa de lo que una persona recuerde.

No hay una división absoluta entre «datos» y «contenidos». Una ficha contiene datos estructurados y textos explicativos. Lo útil es identificar qué significado tiene cada elemento, qué reglas necesita y cómo se utilizará.

| Elemento del portal | Dato aislado | Información utilizable |
| --- | --- | --- |
| Plazo | 15 | Inscripción abierta hasta el 15 de noviembre de 2026 a las 14:00, hora de Madrid. |
| Lugar | Aula 2 | Aula 2 del edificio indicado, con dirección y condiciones de acceso. |
| Contacto | Un nombre | Unidad responsable y canal de contacto vigente. |
| Importe | 20 | Importe, moneda, concepto y condiciones aplicables. |

Los ejemplos son ficticios. Su propósito es mostrar que el contexto debe estar representado, no añadir información ornamental.

## La unidad de contenido

Una **unidad de contenido** es una pieza que puede identificarse y gestionarse con sentido propio. Una noticia, un evento, una ficha de persona o una instrucción de cuidado pueden ser unidades. La decisión depende de su independencia y de su posible reutilización.

Una página de un evento puede reunir una descripción del evento, una ficha del lugar y varias fichas de ponentes. Si los mismos ponentes participan en otros eventos, copiarlos dentro de cada página produce duplicados. Si se gestionan como entidades relacionadas, cada biografía tiene una fuente común.

No conviene fragmentarlo todo. Separar cada frase en un registro puede hacer la edición incomprensible. Un límite razonable aparece cuando una pieza tiene identidad, responsable, ciclo de vida o usos independientes. El modelo debe facilitar el trabajo editorial y las necesidades de publicación.

## Contenido estructurado, semiestructurado y libre

El **contenido estructurado** separa datos en campos con significado y reglas: fecha de inicio, lugar, título y aforo. El contenido **semiestructurado** combina organización y flexibilidad, como un artículo dividido en bloques o un documento con encabezados. El contenido **libre** impone menos organización interna, como un texto extenso guardado en un único campo.

Estas categorías describen grados, no calidades absolutas. Un ensayo necesita libertad expresiva. Un calendario necesita fechas interpretables. El error consiste en elegir una forma que impida los usos previstos.

**Ejemplo.** Si todas las fechas de actividades están enterradas en párrafos, ordenar el calendario exige interpretación manual. Si se guardan en campos de fecha, el sistema puede ordenar, filtrar y detectar actividades pasadas. El párrafo explicativo sigue siendo útil para matices que el campo no expresa.

## Contenido editorial, transaccional y generado por usuarios

El contenido **editorial** se prepara para informar, explicar o persuadir: una noticia, una guía o una descripción. Los datos **transaccionales** registran operaciones: un pedido, un pago o una inscripción. El contenido **generado por usuarios** incluye comentarios y reseñas aportados por participantes externos.

Un mismo sistema puede reunir los tres, pero no deben tener idénticas reglas. Corregir una errata en la descripción de una camiseta no debe reescribir silenciosamente las condiciones de un pedido ya confirmado. Publicar una reseña puede necesitar moderación y mecanismos para gestionar abusos. Una inscripción contiene información que quizá no deba mostrarse al público.

La pregunta «¿se puede editar?» necesita complementarse con «¿quién, cuándo, con qué registro y con qué efecto sobre operaciones anteriores?».

## La finalidad y el público

Antes de redactar, conviene expresar qué permitirá hacer la pieza. «Informar sobre el servicio» es demasiado amplio. «Permitir que una persona compruebe si cumple los requisitos y sepa cómo solicitarlo» orienta mucho mejor la estructura.

La audiencia condiciona vocabulario, profundidad y contexto. Un proveedor y una compradora pueden consultar el mismo producto con preguntas distintas. El contenido puede compartir una base común y ofrecer vistas o explicaciones adaptadas, sin duplicar innecesariamente la fuente.

La longitud no demuestra utilidad. Una página extensa puede ocultar un plazo; una página breve puede omitir requisitos esenciales. La medida relevante es si la persona puede comprender y completar su tarea.

## Autoría, responsabilidad y procedencia

La **autoría** identifica quién creó o firmó una pieza. La **responsabilidad de mantenimiento** identifica quién debe conservarla correcta. La **procedencia** explica de dónde vienen los datos. Estas funciones pueden recaer en personas distintas.

Una editora puede redactar la ficha de un trámite a partir de información de una unidad académica. La unidad verifica los requisitos; la editora comprueba claridad y estructura; otra persona publica. Si cambia el procedimiento, debe existir un responsable que active la actualización aunque quien escribió el texto ya no trabaje allí.

También hay que conocer derechos de uso y condiciones de reutilización. Poder descargar una fotografía no implica poder publicarla. La información sobre licencia y atribución debe acompañar al activo.

## Inventario y auditoría

Un **inventario de contenidos** registra qué piezas existen, dónde están y qué atributos básicos tienen. Una **auditoría** evalúa su utilidad, calidad y vigencia. Inventariar no equivale a aprobar todo lo que se encuentra.

Un inventario inicial puede incluir identificador, título, tipo, URL, responsable, idioma, estado y próxima revisión. La auditoría añade decisiones: conservar, actualizar, fusionar, retirar o investigar. Dos páginas con títulos distintos pueden resolver la misma necesidad y estar compitiendo entre sí.

## Comprueba la comprensión

**¿Una fotografía es contenido o un archivo?** Puede ser ambas cosas: un archivo técnico y un activo con significado, derechos y usos. El CMS debe gestionar más que su nombre.

**¿Quién debe actualizar una ficha si su autora ha dejado la organización?** El responsable de mantenimiento designado, o quien asuma esa función. Confundir autoría con responsabilidad deja contenidos huérfanos.

**¿Por qué no guardar todo en un gran documento?** Porque impediría operar por separado sobre fechas, relaciones y estados. La cantidad de estructura debe responder a los usos, no a la preferencia por formularios largos.
