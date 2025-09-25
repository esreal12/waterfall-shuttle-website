# Waterfall Shuttle CR Landing Page

Proyecto Next.js + TailwindCSS para la landing page de Waterfall Shuttle CR, basado en el brief de `PROJECT_CONTEXT.md`.

## Requisitos

- Node.js 18+
- npm o pnpm

## Instalación

```bash
npm install
npm run dev
```

Para generar el sitio estático listo para SiteGround:

```bash
npm run build
npm run export
```

La carpeta `/out` contendrá el HTML estático listo para subir a `public_html` en SiteGround.

## Pendientes / TODO

- Reemplazar placeholders por fotografías oficiales en `public/images`.
- Conectar el formulario de reservas con EmailJS o Resend.
- Sustituir la animación placeholder por la ilustración SVG del shuttle cuando esté disponible.
- Ajustar horarios, tarifas y datos de contacto con información definitiva.

## GitHub

1. Inicializa el repositorio local: `git init`
2. Agrega los archivos: `git add .`
3. Realiza el primer commit: `git commit -m "chore: bootstrap landing"`
4. Crea el repositorio remoto en GitHub y vincúlalo: `git remote add origin git@github.com:usuario/waterfall-shuttle-website.git`
5. Sube los cambios: `git push -u origin main`

> Actualiza la URL anterior con la ruta real del repositorio cuando la tengas lista.
