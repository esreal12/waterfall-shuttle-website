# 🌐 Waterfall Shuttle CR – Web Development Context Document (SiteGround Static Export)

Este documento servirá como **guía técnica y de diseño** para desarrollar la Landing Page de **Waterfall Shuttle CR** en Cursor AI utilizando **Codex** y un stack moderno de frontend sin CMS, exportado como sitio estático compatible con SiteGround.

---

## 🎯 Objetivo del proyecto

* Crear una **Landing Page moderna, profesional y responsiva** que represente a Waterfall Shuttle CR.
* Optimizada para **conversión**: reservas, consultas y confianza en el servicio.
* Exportar el sitio como **HTML, CSS y JS estático** (Next.js export) para subirlo fácilmente a SiteGround.

---

## 🔧 Stack tecnológico recomendado

* **Framework**: Next.js (React, optimización SSR/SSG, pero al final exportado como HTML estático con `next export`).
* **Lenguaje**: TypeScript (robustez y autocompletado en Cursor).
* **Estilos**: TailwindCSS + shadcn/ui (componentes modernos, rápidos y responsivos).
* **Animaciones**: Framer Motion (transiciones suaves y profesionales).
* **Formulario**: React Hook Form + integración con EmailJS/Resend (para enviar reservas o consultas por correo).
* **Mapa interactivo**: Google Maps embed (iframe simple, no dependencias extra).
* **Hosting**: SiteGround (subida de la carpeta `/out` generada por Next.js export a `public_html`).

---

## 🎨 Identidad visual

* **Logo**: centrado en el header y footer.
* **Paleta de colores** (definida):

  * Verde profundo: `#08473e`
  * Verde natural: `#3d8c45`
  * Turquesa medio: `#3ea3a4`
  * Aqua suave: `#7ac1bb`
  * Amarillo acento: `#edaf00`
  * Blanco neutro: `#f5f5f5`
  * Gris medio: `#b0b0b0`
  * Negro profundo: `#1b1b1b`
  * Gris oscuro: `#2c2c2c`
* **Tipografía oficial**:

  * **Logo & Títulos**: Bebas Kai (para headers H1–H6 y elementos destacados)
  * **Body**: Gotham (para párrafos y textos largos)
* **Escalas tipográficas**:

  * H1: 53.75px / 2.986rem
  * H2: 44.79px / 2.488rem
  * H3: 37.32px / 2.074rem
  * H4: 31.1px / 1.728rem
  * H5: 25.92px / 1.44rem
  * H6: 21.6px / 1.2rem
  * Párrafo: 18px / 1rem
  * Small: 15px / 0.833rem
  * Extra small: 12.5px / 0.694rem
  * **Line-height base**: 1.16 (21px aprox)
* **Estilo fotográfico**: imágenes naturales, luminosas, con turistas reales.

---

## 📐 Estructura de la Landing Page

1. **Header / Hero**

   * Logo centrado
   * H1 + subtítulo
   * CTA principal: "Reserva tu Shuttle"
   * Imagen de fondo (catarata Nauyaca)

2. **Sobre nosotros**

   * Texto breve + foto del shuttle

3. **Beneficios**

   * Grid de 3-4 iconos con texto

4. **Destino: Catarata Nauyaca**

   * Imagen impactante + descripción
   * CTA secundario: "Reserva tu transporte ahora"

5. **Cómo funciona**

   * Pasos numerados (1-2-3)

6. **Testimonios**

   * Carrusel simple con quotes

7. **Información práctica**

   * Horarios, tarifas, mapa simple de pickups

8. **Reserva / Booking**

   * Formulario (nombre, email, teléfono, fecha, pasajeros)
   * CTA: "Confirmar Reserva"

9. **Footer**

   * Logo pequeño, links rápidos, redes sociales, contacto

---

## ⚡ Funcionalidades avanzadas sugeridas

* **Animación de shuttle en scroll** (van que avanza en pantalla al hacer scroll, similar al tractor de referencia).
* **Lazy loading** de imágenes para optimización.
* **Dark mode opcional**.
* **SEO optimizado** (metatags, OpenGraph, schema.org de negocio local).

---

## 🚀 Flujo de desarrollo sugerido en Cursor AI

1. **Setup**: Proyecto con Next.js + Tailwind + TypeScript.
2. **Componentes base**: Header, Hero, Footer, Buttons, Layout.
3. **Secciones**: construir cada bloque modularmente.
4. **Integraciones**: Booking form + Google Maps embed.
5. **Optimización**: Responsivo, SEO y performance.
6. **Export**:

   ```bash
   npm run build
   npm run export
   ```

   ➝ Subir la carpeta `/out` al `public_html` de SiteGround.

---

## 📸 Recomendaciones de assets

* Fotos panorámicas de Nauyaca Waterfall.
* Fotos del shuttle (modelo coaster HZ21).
* Imágenes de turistas disfrutando (naturales, no stock genérico).

---

## 📈 KPIs esperados

* % de clics en CTA "Reserva tu Shuttle".
* % de envíos de formulario de reserva.
* Tiempo promedio en página.

---

Este documento debe usarse como **brief técnico y de diseño** dentro de Cursor AI para guiar la construcción del Landing Page con Codex y exportarlo estático a SiteGround.
