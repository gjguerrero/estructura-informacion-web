# Estructura de la Información Web

Primera versión de los apuntes del bloque de CMS, comercio electrónico y PrestaShop del Máster Oficial en Gestión y Tecnologías de Procesos de Negocio (Universidad de Cádiz).

## Qué contiene esta versión

- Portada de la asignatura y recorrido por el bloque de Gabriel Guerrero.
- Cuatro capítulos introductorios con explicaciones, ejemplos y preguntas.
- Guía de instalación y uso dividida por apartados y una copia HTML íntegra.
- Presentación del entorno y cuatro propuestas de práctica para revisar.
- Glosario, enlaces, buscador y colores UCA.
- Publicación automática en GitHub Pages mediante GitHub Actions.

Esta versión desarrolla el bloque que se ha definido en la conversación. No presupone el programa completo de las otras partes de la asignatura. Los capítulos nuevos y las propuestas de práctica son un borrador docente para revisar. La guía técnica procede de la última versión aprobada y conserva sus instrucciones.

La web de apuntes es estática. La tienda PrestaShop sigue ejecutándose en la máquina virtual de cada estudiante. GitHub Pages no ejecuta la tienda.

## 1. Ver los apuntes en Windows

Necesitas Python 3.12. Puedes obtenerlo en https://www.python.org/downloads/ si no lo tienes.

1. Extrae el ZIP en una carpeta.
2. Abre una terminal de PowerShell en la carpeta que contiene este README y `mkdocs.yml`.
3. Crea el entorno:

```powershell
py -3.12 -m venv .venv
```

4. Instala las dependencias:

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

5. Inicia la vista previa:

```powershell
.\.venv\Scripts\python.exe -m mkdocs serve
```

6. Abre **http://127.0.0.1:8000/** en el navegador. La terminal debe seguir abierta. Para detener el servidor, pulsa Ctrl+C en ella.

No hace falta activar el entorno virtual ni cambiar la política de ejecución de PowerShell. Los alumnos no necesitan Python ni MkDocs para leer el sitio publicado.

### En Linux o macOS

Con Python 3.12 disponible:

```bash
python3.12 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
.venv/bin/python -m mkdocs serve
```

## 2. Editar los contenidos

Las páginas están en `docs/`. Ábrelas con un editor de texto, por ejemplo VS Code. Se escriben en Markdown.

```markdown
# Título del capítulo

Un párrafo con **una idea destacada**.

## Un apartado

- Un elemento.
- Otro elemento.

[Enlace a otro capítulo](fundamentos/cms.md)
```

El ejemplo de enlace anterior es relativo a `docs/index.md`. Desde otra carpeta hay que ajustar la ruta.

Guarda el archivo mientras `mkdocs serve` está en marcha. La vista previa se actualizará. El orden del menú se cambia en `mkdocs.yml`, dentro de `nav`.

Para añadir otra parte de la asignatura, crea sus páginas dentro de `docs/` y añádelas al menú. No hace falta rehacer el sitio.

## 3. Publicar en GitHub Pages

La opción sin coste de GitHub Pages utiliza un repositorio público. Antes de publicarlo, revisa el contenido que quieras dejar accesible. Esta primera versión incluye la descarga y las credenciales comunes de la máquina local de prácticas tal como figuran en tu guía.

1. Crea un repositorio vacío en tu cuenta de GitHub, por ejemplo **estructura-informacion-web**. Para la vía con GitHub Free, elige **Public**. No lo inicialices con otro README.
2. En la carpeta del proyecto, abre una terminal. Si no tienes Git, instálalo desde https://git-scm.com/downloads.
3. Ejecuta:

```bash
git init
git add .
git commit -m "Primera versión de los apuntes"
git branch -M main
```

4. Copia la URL HTTPS de tu nuevo repositorio. En el siguiente comando sustituye `TU_USUARIO` y, si procede, el nombre del repositorio:

```bash
git remote add origin https://github.com/TU_USUARIO/estructura-informacion-web.git
git push -u origin main
```

GitHub puede solicitar que inicies sesión. Utiliza el mecanismo de autenticación de Git que tengas configurado.

5. En el repositorio, abre **Settings → Pages**.
6. En **Build and deployment → Source**, elige **GitHub Actions**.
7. Abre **Actions → Publicar apuntes** y ejecuta **Run workflow** sobre `main`. Si el primer intento falló porque Pages aún no estaba habilitado, ejecútalo de nuevo después del paso 6.
8. Cuando la ejecución termine correctamente, abre el enlace del despliegue. Normalmente tendrá esta forma:

```text
https://TU_USUARIO.github.io/estructura-informacion-web/
```

La configuración obtiene la dirección real de Pages durante la construcción. No hace falta escribir tu usuario en `mkdocs.yml` para usar la dirección normal de GitHub Pages.

No subas el ZIP como único archivo del repositorio. Sube el contenido extraído, incluida `.github/workflows/pages.yml`. Los comandos anteriores incluyen esa carpeta.

## 4. Actualizar los apuntes

Después de editar y revisar:

```bash
git add .
git commit -m "Actualizar apuntes"
git push
```

Cada cambio en `main` inicia una nueva publicación. Las propuestas de cambio mediante pull request solo se construyen para comprobarlas. No se publican hasta incorporarlas a `main`.

También puedes editar un Markdown desde la web de GitHub y confirmar el cambio. El mismo flujo actualizará los apuntes.

## 5. Comprobar antes de publicar

En Windows:

```powershell
.\.venv\Scripts\python.exe -m mkdocs build --strict
```

Los archivos resultantes se generan en `site/`. Esa carpeta está excluida de Git porque se reconstruye automáticamente.

La compilación local no prueba los permisos de tu cuenta ni la configuración del repositorio de GitHub. El despliegue se comprobará en la primera ejecución de Actions.

## Archivos principales

| Archivo o carpeta | Finalidad |
| --- | --- |
| `docs/index.md` | Portada de la asignatura. |
| `docs/fundamentos/` | Apuntes conceptuales. |
| `docs/preparacion/` | Guía de instalación y uso en Markdown. |
| `docs/prestashop/` | Introducción y propuestas de práctica. |
| `docs/descargas/Guia_PrestaShop_UCA.html` | Copia íntegra de la guía revisada. |
| `docs/assets/stylesheets/uca.css` | Colores y estilo visual. |
| `mkdocs.yml` | Nombre, menú y opciones del sitio. |
| `.github/workflows/pages.yml` | Construcción y publicación. |

Los colores son una adaptación para pantalla del azul Pantone 308 y del naranja Pantone 152. No se ha añadido un logotipo institucional.

## Documentación de las herramientas

- [MkDocs: configuración](https://www.mkdocs.org/user-guide/configuration/).
- [MkDocs: publicación](https://www.mkdocs.org/user-guide/deploying-your-docs/).
- [GitHub Pages: descripción y disponibilidad](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).
- [GitHub Pages: flujos personalizados](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

Base técnica preparada el 27 de octubre de 2026. MkDocs fijado a la versión 1.6.1.
