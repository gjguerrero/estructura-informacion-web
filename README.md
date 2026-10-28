# Estructura de la Información Web — Fundamentos de CMS

Apuntes del Máster Oficial en Gestión y Tecnologías de Procesos de Negocio (Universidad de Cádiz). Edición ampliada del 28 de octubre de 2026.

El sitio contiene una presentación y **22 capítulos de fundamentos**. Se han retirado preparación del equipo, prácticas, consulta y descarga de la guía técnica. Los capítulos explican desde cero contenido, metadatos, modelado, historia, roles, permisos, revisión, arquitecturas, calidad, mantenimiento, gobernanza y aplicaciones al comercio electrónico.

## Actualizar el repositorio que ya tienes

1. Extrae el ZIP. Entra en la carpeta `estructura-informacion-web`.
2. Copia **su contenido** en la raíz de tu repositorio actual, donde ya está `mkdocs.yml`, sustituyendo los archivos del mismo nombre. No crees una carpeta adicional dentro del repositorio ni subas el ZIP como único archivo.
3. Incluye `mkdocs.yml`, `requirements.txt`, `README.md`, la carpeta `docs` y `.github/workflows/pages.yml`. La carpeta `.github` puede aparecer oculta; ya existía en el paquete anterior y mantiene la publicación con Actions.
4. Confirma los cambios en `main` y comprueba la ejecución **Publicar apuntes** en la pestaña **Actions**.
5. Abre la dirección de Pages que ya utilizas. No necesitas crear otro repositorio ni cambiar esa dirección.

Si subes desde la web de GitHub, utiliza **Add file → Upload files** en la raíz y arrastra los archivos y carpetas extraídos. Comprueba que `mkdocs.yml` se ha sustituido: es lo que cambia el menú y excluye el material anterior. El flujo de Actions incluido debe quedar en su ruta exacta, no como un archivo suelto en la raíz.

### Qué ocurre con los archivos antiguos

La nueva configuración excluye expresamente `docs/preparacion/`, `docs/prestashop/`, `docs/descargas/`, `docs/recursos.md` y el JavaScript de la antigua guía. **Aunque esos archivos permanezcan en el repositorio al subir los nuevos, no se incorporan al sitio generado ni al buscador.** También puedes eliminarlos del repositorio para dejarlo ordenado.

Esta exclusión afecta a la nueva publicación de Pages. No elimina archivos del historial de Git ni copias externas, y un repositorio público puede seguir mostrando los archivos antiguos si no los borras. El paquete nuevo no los contiene.

Si trabajas con una copia local de Git, después de sustituir los archivos:

```bash
git add -A
git commit -m "Ampliar fundamentos de CMS y retirar las guías de prácticas"
git push
```

No se ha efectuado ninguna publicación remota desde este paquete: el despliegue se produce en tu repositorio al confirmar los cambios.

## Estructura

| Ruta | Contenido |
| --- | --- |
| `docs/index.md` | Presentación y recorrido completo. |
| `docs/fundamentos/` | Los 22 capítulos conceptuales. |
| `docs/assets/diagrams/` | Diagramas SVG del flujo editorial y las arquitecturas. |
| `docs/assets/stylesheets/uca.css` | Estilo de lectura y adaptación a pantallas pequeñas. |
| `mkdocs.yml` | Navegación, búsqueda, exclusiones y comprobación de enlaces. |
| `.github/workflows/pages.yml` | Construcción y despliegue en GitHub Pages. |
| `requirements.txt` | Versión de MkDocs utilizada. |

Las rutas de los cuatro capítulos originales (`web`, `cms`, `comercio-electronico` y `catalogo`) se conservan, con contenido ampliado. Las referencias oficiales están dentro de cada capítulo. Los ejemplos y matrices son didácticos; no deben confundirse con permisos predeterminados de un producto.

## Edición y comprobación local opcional

Para publicar desde GitHub no necesitas ejecutar estos pasos. Si quieres editar con vista previa, usa Python 3.12 y un entorno virtual.

En PowerShell, desde la raíz del proyecto:

```powershell
py -3.12 -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m mkdocs serve
```

Abre `http://127.0.0.1:8000/`. Para comprobar la construcción:

```powershell
.\.venv\Scripts\python.exe -m mkdocs build --strict
```

En Linux o macOS, los equivalentes son:

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
.venv/bin/python -m mkdocs serve
.venv/bin/python -m mkdocs build --strict
```

Los contenidos se editan en Markdown dentro de `docs/fundamentos/`. El menú está en `mkdocs.yml`. La carpeta `site/` se genera al construir y no se incluye en el paquete ni se necesita subir al repositorio.

## Configuración de Pages

El proyecto conserva el flujo de publicación automática en `main` y la comprobación de pull requests. En **Settings → Pages → Build and deployment → Source** debe estar seleccionado **GitHub Actions**, como en la configuración anterior.

La dirección se obtiene de GitHub Pages durante la construcción. No es necesario escribir tu usuario en los archivos. La compilación local comprueba el proyecto, pero no los permisos o la configuración de tu cuenta de GitHub.

Documentación de referencia: [MkDocs](https://www.mkdocs.org/user-guide/configuration/) y [flujos personalizados de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
