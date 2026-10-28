# 20. Catálogo, productos, atributos y variantes

## Un catálogo es un modelo de información

Un catálogo organiza entidades comerciales para que puedan identificarse, describirse, compararse y mantenerse. No es únicamente una colección de fotografías. Su calidad depende de la estructura de datos, del vocabulario y del proceso editorial.

Cada ficha debe resolver preguntas del público y conservar datos utilizables por el sistema. Una talla escondida en un párrafo puede leerse, pero no necesariamente funcionar como filtro ni relacionarse con existencias.

Los conceptos de este capítulo pueden aparecer con nombres diferentes en otros productos. La [documentación de productos de PrestaShop](https://docs.prestashop-project.org/v.9-documentation/user-guide/selling/managing-catalog/managing-products) sirve como referencia de una implementación.

## Producto, categoría, característica y atributo

| Concepto | Función | Ejemplo de Costa Sur |
| --- | --- | --- |
| Producto | Oferta que comparte identidad y descripción general. | Camiseta Bahía. |
| Categoría | Grupo para organizar y encontrar. | Camisetas. |
| Característica | Propiedad descriptiva del producto. | Composición: algodón. |
| Atributo de variante | Dimensión cuyas opciones diferencian variantes. | Talla o color. |
| Variante o combinación | Opción concreta que puede gestionarse. | Camiseta Bahía azul, talla M. |
| SKU o referencia interna | Identificación de una unidad de gestión comercial. | CS-BAH-AZ-M. |

En PrestaShop, los [atributos permiten definir combinaciones](https://docs.prestashop-project.org/v.9-documentation/user-guide/selling/managing-catalog/managing-product-attributes). Una propiedad no es «característica» o «atributo» por naturaleza: depende de cómo diferencie los artículos que se ofrecen. Si el material cambia entre opciones comprables, el modelo debe tratar esa diferencia.

## Variantes y explosión de combinaciones

Tres tallas y dos colores permiten hasta **3 × 2 = 6 combinaciones** si todas las parejas existen. Añadir cuatro acabados produciría hasta 24. El catálogo no debe crear automáticamente combinaciones que el negocio no ofrece.

| Variante de ejemplo | Referencia | Existencias ficticias |
| --- | --- | ---: |
| Azul, S | CS-BAH-AZ-S | 4 |
| Azul, M | CS-BAH-AZ-M | 0 |
| Azul, L | CS-BAH-AZ-L | 6 |
| Blanca, S | CS-BAH-BL-S | 3 |
| Blanca, M | CS-BAH-BL-M | 5 |
| Blanca, L | CS-BAH-BL-L | 2 |

El total del ejemplo es 20 unidades, pero no existe disponibilidad de azul M. Mostrar únicamente «20 en stock» no responde a la necesidad de quien ha elegido esa combinación. La disponibilidad debe corresponder al nivel adecuado del modelo.

La [gestión de existencias de PrestaShop](https://docs.prestashop-project.org/v.9-documentation/user-guide/selling/managing-catalog/managing-stock) distingue consulta de cantidades y movimientos. No debe confundirse ese historial operativo con el historial de redacción de una descripción.

## Campos compartidos y campos por variante

La descripción general y las instrucciones de cuidado pueden compartirse si son válidas para todas las variantes. Una referencia, una imagen específica o una cantidad pueden pertenecer a cada combinación. El precio puede ser común o variar según las reglas del negocio y las capacidades del sistema.

La duplicación debe ser deliberada. Crear seis productos independientes para seis variantes puede dificultar la navegación y el mantenimiento. Sin embargo, agrupar artículos demasiado distintos bajo un mismo producto también puede confundir. El criterio es si la persona los entiende como opciones de una oferta y si el sistema puede representar sus diferencias.

## Identificadores, unidades y vocabularios

Una referencia interna no tiene por qué coincidir con un identificador comercial externo como un GTIN. Cada identificador necesita significado, formato y reglas de unicidad. Inventar valores externos para rellenar un campo genera datos falsos.

Las magnitudes requieren unidad. «Capacidad: 20» no permite comparar; «Capacidad: 20 L» sí. En un modelo más estructurado, valor y unidad pueden guardarse separados para facilitar validación y conversión.

También deben normalizarse nombres: M, Mediana y Medium no deberían tratarse como tallas diferentes por descuido. Las equivalencias entre sistemas de tallaje deben explicarse; no se pueden asumir solo porque dos etiquetas parezcan similares.

## Descripciones que ayudan a decidir

Un título identifica; una descripción breve explica utilidad; los datos estructurados permiten comparar; una descripción extensa aporta detalles y limitaciones. Repetir «calidad excelente» no informa sobre medidas, ajuste o cuidado.

Para la Camiseta Bahía, una ficha útil podría indicar composición, medidas por talla, tipo de corte, cuidado y qué representa cada imagen. Las afirmaciones sobre origen o prestaciones deben tener una fuente verificable. La creatividad comercial no debe convertir una suposición en un hecho.

El texto debe ser coherente con las variantes. Si una imagen muestra un accesorio no incluido, la ficha debe evitar que se interprete como parte de la oferta.

## Categorías y facetas

Las categorías proporcionan agrupaciones estables. Las facetas permiten combinar dimensiones: talla M, azul y material concreto. Una categoría «Novedades» puede representar una selección temporal, mientras que «Camisetas» representa un tipo de artículo.

Un producto puede tener varios accesos sin duplicar su ficha. Las decisiones sobre categoría principal, enlaces y filtros deben mantener una experiencia consistente. Los valores incompletos hacen que filtros aparentemente correctos oculten productos pertinentes.

## Mantenimiento del catálogo

El ciclo de una ficha incluye incorporación, validación, publicación, actualización y retirada. Al descatalogar un producto hay que revisar enlaces, variantes, recomendaciones, campañas y activos compartidos.

Los cambios masivos necesitan más control porque afectan a muchas piezas. Una importación que confunde unidades o interpreta mal separadores decimales puede propagar errores. La validación debe comprobar muestras representativas y recuentos, no solo que el archivo se haya aceptado.

## Comprueba la comprensión

**¿Seis combinaciones implican seis unidades en stock?** No. El número de opciones y la cantidad disponible son dimensiones distintas.

**¿Por qué separar categoría y color?** Porque normalmente responden a dimensiones diferentes y pueden combinarse para filtrar sin multiplicar categorías.

**¿Qué ocurre si cambia una fotografía común?** Puede afectar a todas las variantes o vistas que la reutilizan. Hay que conocer sus relaciones antes de sustituirla.
