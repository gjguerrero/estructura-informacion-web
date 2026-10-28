# Apuntes de fundamentos de CMS

**Estructuración y Acceso a la Información en la Web y Gestión de Contenidos**

Máster Oficial en Gestión y Tecnologías de Procesos de Negocio · Universidad de Granada

**Gabriel Guerrero Contreras**  
Departamento de Ingeniería Informática · Universidad de Cádiz

Este paquete contiene los apuntes en Markdown y la configuración para publicarlos con MkDocs en GitHub Pages. El contenido procede del último Word revisado por el autor. Incluye sus 21 capítulos y un capítulo 22 de bibliografía recomendada.

## Actualizar tu repositorio

1. Descomprime el ZIP y abre la carpeta `estructura-informacion-web`.
2. Copia **el contenido de esa carpeta** en la raíz del repositorio que ya utilizas. Sustituye los archivos del mismo nombre. `mkdocs.yml` debe quedar en la raíz, junto a `requirements.txt`, `README.md`, `docs` y `.github`.
3. Comprueba que el archivo de publicación queda en `.github/workflows/pages.yml`. La carpeta `.github` puede estar oculta en el explorador de archivos.
4. Guarda los cambios en la rama `main`. El flujo **Publicar apuntes** construirá y publicará el sitio. Puedes ver su resultado en la pestaña **Actions**.
5. Abre la dirección habitual de GitHub Pages cuando termine la ejecución.

Si subes los archivos desde la web de GitHub, utiliza **Add file → Upload files** en la raíz del repositorio y arrastra los archivos y carpetas extraídos. Subir únicamente el ZIP no actualiza las páginas. En **Settings → Pages → Build and deployment → Source** debe estar seleccionado **GitHub Actions**.

Si tu rama principal tiene otro nombre, sustituye `main` por ese nombre en las dos entradas `branches` de `.github/workflows/pages.yml`.

## Qué contiene esta edición

El texto de los capítulos se conserva, incluidas las tablas, los diagramas y los enlaces. Se ha adaptado el formato de Word a Markdown y los enlaces internos se han conectado con las páginas correspondientes.

El Word adjunto termina en el capítulo 21. Su índice todavía mencionaba un capítulo 22 de caso integrador que ya no figuraba en el cuerpo del documento. Esa entrada se ha sustituido por la bibliografía y el recorrido inicial se ha ajustado a los capítulos existentes.

El sitio publica únicamente los fundamentos y su bibliografía. La configuración excluye las antiguas carpetas de preparación, prácticas y descargas, el archivo de consulta y el caso integrador de versiones anteriores. Esos archivos quedan fuera del sitio y del buscador aunque todavía estén en el repositorio. Puedes borrarlos del repositorio si quieres retirarlos también de la lista de archivos.

| Ruta | Contenido |
| --- | --- |
| `docs/index.md` | Presentación e índice. |
| `docs/fundamentos/` | Los 21 capítulos del Word y la bibliografía. |
| `docs/assets/diagrams/` | Los dos diagramas del documento. |
| `docs/assets/stylesheets/uca.css` | Estilo de lectura para ordenador y móvil. |
| `mkdocs.yml` | Menú, búsqueda y configuración del sitio. |
| `.github/workflows/pages.yml` | Construcción y publicación automática. |
| `requirements.txt` | Dependencias para generar las páginas. |

## Editar y comprobar en tu equipo

La publicación desde GitHub no requiere ejecutar estos comandos. Para trabajar con vista previa local, utiliza Python 3.12 y abre una terminal en la carpeta del proyecto.

En Windows con PowerShell puedes ejecutar lo siguiente.

```powershell
py -3.12 -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m mkdocs serve
```

En Linux o macOS puedes utilizar estos comandos.

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
.venv/bin/python -m mkdocs serve
```

La vista previa se abre en `http://127.0.0.1:8000/`. Para comprobar los archivos antes de publicarlos, ejecuta `python -m mkdocs build --strict` con el Python del entorno virtual.

La carpeta `site` se genera durante la construcción. No es necesario subirla al repositorio. GitHub Actions obtiene la dirección del proyecto automáticamente y genera las páginas para esa dirección.

Puedes consultar la [configuración de MkDocs](https://www.mkdocs.org/user-guide/configuration/) y la [documentación de publicación con GitHub Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
