# 20. Catálogo, productos, atributos y variantes

## Un catálogo es un modelo de información

Un **catálogo** organiza la información de los productos para que puedan encontrarse, compararse y mantenerse. En Costa Sur puede incluir el modelo de camiseta, sus tallas, colores, fotografías y referencias. Guardar esos datos de forma organizada permite preparar las fichas y responder a consultas como qué camisetas azules están disponibles en talla M.

La ficha debe responder a las preguntas de quien compra y proporcionar datos que el sistema pueda utilizar. Escribir "Disponible en talla M" dentro de una descripción permite leerlo, pero no garantiza que el producto aparezca al filtrar por esa talla. Para ello, el dato debe estar guardado en el campo que utiliza el filtro.

Los conceptos de este capítulo pueden aparecer con nombres diferentes en otros productos. La [documentación de productos de PrestaShop](https://docs.prestashop-project.org/v.9-documentation/user-guide/selling/managing-catalog/managing-products) sirve como referencia de una implementación.

## Producto, categoría, característica y atributo

| **Concepto** | **Función** | **Ejemplo de Costa Sur** |
| --- | --- | --- |
| Producto | Modelo de artículo con datos generales compartidos. | Camiseta Bahía. |
| Categoría | Grupo para organizar y encontrar. | Camisetas. |
| Característica | Propiedad descriptiva del producto. | Composición de algodón. |
| Atributo de variante | Dato cuyas opciones distinguen las variantes. | Talla o color. |
| Variante o combinación | Opción concreta que puede gestionarse. | Camiseta Bahía azul, talla M. |
| SKU o referencia interna | Stock Keeping Unit. Código interno para identificar una opción gestionada en el catálogo. | CS-BAH-AZ-M. |

En PrestaShop, los [atributos permiten definir combinaciones](https://docs.prestashop-project.org/v.9-documentation/user-guide/selling/managing-catalog/managing-product-attributes). En el ejemplo, talla y color distinguen las opciones de la camiseta que pueden comprarse. La composición puede ser una característica común si todas son de algodón. Si también se venden versiones de materiales distintos, el modelo debe representar esa diferencia entre opciones.

## Cómo aumenta el número de variantes

Tres tallas y dos colores permiten hasta **3 × 2 = 6 combinaciones** si todas las parejas existen. Añadir cuatro acabados produciría hasta 24. El catálogo no debe crear automáticamente combinaciones que el negocio no ofrece.

| **Variante de ejemplo** | **Referencia** | **Existencias ficticias** |
| --- | --- | --- |
| Azul, S | CS-BAH-AZ-S | 4 |
| Azul, M | CS-BAH-AZ-M | 0 |
| Azul, L | CS-BAH-AZ-L | 6 |
| Blanca, S | CS-BAH-BL-S | 3 |
| Blanca, M | CS-BAH-BL-M | 5 |
| Blanca, L | CS-BAH-BL-L | 2 |

La tabla reúne **20 unidades** en total, pero ninguna corresponde a la camiseta azul de talla M. Mostrar solo "20 unidades disponibles" puede inducir a error a quien ha seleccionado esa combinación. La disponibilidad debe indicarse para la variante que se quiere comprar.

La [gestión de existencias de PrestaShop](https://docs.prestashop-project.org/v.9-documentation/user-guide/selling/managing-catalog/managing-stock) permite distinguir las cantidades disponibles y los movimientos que las modifican. Registrar la salida de una unidad por una venta es diferente de guardar una nueva versión de la descripción de la camiseta. Son historiales con finalidades distintas.

## Campos compartidos y campos por variante

Los datos que son iguales para todas las variantes pueden mantenerse en el producto, como unas instrucciones de lavado comunes. Otros corresponden a cada opción, como la fotografía de un color, la referencia o las unidades de una talla. El precio puede ser común o variar entre opciones según cómo trabaje la tienda y lo que permita el sistema.

Crear un producto independiente para cada combinación puede obligar a repetir descripciones y correcciones. Agrupar las variantes facilita mantener los datos comunes. Sin embargo, también hay que comprobar que sean opciones comprensibles de un mismo producto. Artículos con características y usos muy diferentes pueden necesitar fichas separadas.

## Identificadores, unidades y vocabularios

La referencia interna la utiliza la organización para reconocer sus artículos. Puede ser distinta de un **GTIN**, Global Trade Item Number o número global de artículo comercial, utilizado para identificar productos en intercambios comerciales. Debe saberse qué representa cada identificador y de dónde se obtiene. No deben inventarse identificadores externos para completar un campo.

Una cantidad necesita su unidad para interpretarse. Indicar que un recipiente tiene una capacidad de "20" deja el dato incompleto. Indicar "20 litros" permite comprenderlo y compararlo. El modelo puede guardar por separado el valor numérico y la unidad para comprobarlos o convertirlos cuando corresponda.

Conviene utilizar nombres acordados para los mismos valores. Si una misma talla se introduce como "M", "Mediana" y "Medium", el sistema podría tratarla como tres opciones. Además, una talla de una marca no tiene por qué equivaler a otra solo porque compartan la letra. Las equivalencias deben apoyarse en una guía de medidas.

## Descripciones que ayudan a decidir

Cada parte de la ficha cumple una función. El título identifica el producto. La descripción breve explica qué ofrece. Los campos de medidas, composición y precio permiten compararlo. Una explicación más extensa puede aclarar su uso o sus limitaciones. Expresiones como "Calidad excelente" no sustituyen esos datos.

Para la Camiseta Bahía, una ficha útil podría indicar composición, medidas por talla, tipo de corte, cuidado y qué representa cada imagen. Las afirmaciones sobre origen o prestaciones deben tener una fuente verificable. La creatividad comercial no debe convertir una suposición en un hecho.

El texto debe ser coherente con las variantes. Si una imagen muestra un accesorio no incluido, la ficha debe evitar que se interprete como parte de la oferta.

## Categorías y facetas

Las **categorías** agrupan productos, por ejemplo, camisetas o pantalones. Las **facetas** permiten combinar filtros como talla M, color azul y material. Una sección de "Novedades" puede reunir temporalmente productos de varias categorías. Son formas de encontrar el catálogo que pueden utilizar los mismos registros.

Una camiseta puede aparecer tanto en "Camisetas" como en "Novedades" sin duplicar su ficha. Los filtros necesitan datos completos. Si la ficha no tiene indicado el color, puede quedar fuera al buscar camisetas azules aunque su fotografía muestre ese color.

## Mantenimiento del catálogo

Una ficha se prepara, se comprueba, se publica y se actualiza mientras el producto forma parte del catálogo. Cuando deja de ofrecerse, hay que revisar dónde aparece. Puede seguir incluido en campañas, recomendaciones o enlaces. También debe comprobarse si sus fotografías se utilizan en otras fichas antes de borrarlas.

Una actualización masiva puede extender un error a muchos productos. Por ejemplo, una importación puede interpretar de forma incorrecta los separadores decimales de los precios. Antes de aplicar el cambio al catálogo completo, conviene revisar una muestra y comprobar cantidades, unidades y resultados. Que el sistema acepte el archivo no demuestra que haya interpretado bien sus datos.

## Comprueba la comprensión

**¿Seis combinaciones implican seis unidades disponibles?** No. Las combinaciones son las opciones de talla y color. Cada una puede tener cero, una o varias unidades. En el ejemplo hay seis combinaciones y veinte unidades en total.

**¿Por qué separar categoría y color?** Porque una categoría agrupa el tipo de producto y el color permite filtrar dentro de ella. Así se pueden buscar camisetas azules o pantalones azules sin crear una categoría nueva para cada combinación.

**¿Qué ocurre si cambia una fotografía común?** Puede afectar a todas las variantes o vistas que la reutilizan. Hay que conocer sus relaciones antes de sustituirla.
