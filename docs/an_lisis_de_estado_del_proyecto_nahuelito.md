# Auditoría Técnica y Estado del Proyecto: Nahuelito Web Oficial

Este documento detalla el estado actual del proyecto de la web oficial del servidor de Minecraft "Nahuelito" para facilitar la continuidad del desarrollo por cualquier modelo de IA o equipo técnico.

## 1. Arquitectura y Tecnologías
- **Frontend:** HTML5 semántico, SASS (compilado a CSS) y JavaScript Vanilla (ES6+). No se utilizan frameworks externos para maximizar el rendimiento.
- **Motor Dinámico:** Sistema basado en datos (Data-Driven UI). El contenido de la web no está "hardcodeado", sino que se inyecta dinámicamente desde un archivo `data.json`.
- **Backend Simulado:** Gestión de datos local vía `fetch()` para simular una Single Page Application (SPA) con filtrado y búsqueda en tiempo real.

## 2. Lo que el proyecto YA TIENE (Completado)
### Interfaz y UX
- **Hero Section:** Introducción con lore, botones de acción rápida ("Copiar IP", "Explorar Mods") y navegación de anclas.
- **Navegación:** Header responsivo con menú de hamburguesa para móviles y navegación de secciones para desktop.
- **Catálogo Dinámico:** Grid responsivo que renderiza tarjetas de contenido (Mods, Shaders, Recursos) basándose en prioridades.
- **Sistema de Búsqueda:** Input con filtrado en tiempo real por nombre y descripción.
- **Sistema de Filtros:** Chips de categoría (Todos, Mods, Shaders, Texturas) funcionales.
- **Vista de Detalles (Modal):** Sistema de visualización profunda que carga dinámicamente:
    - Título y descripción larga.
    - Iframe de YouTube (tutoriales/reseñas).
    - Galería de imágenes.
    - Guías de supervivencia y crafteos.
- **Footer:** Sección de enlaces sociales (Discord, YouTube, Soporte) y legales.

### Diseño Visual (Nahuelito Design System)
- **Paleta:** Primario Cian (#06b6d4), Fondos claros (#F8FAFC), Superficies blancas.
- **Tipografía:** 'Space Grotesk' para legibilidad y fuentes pixel-art para encabezados Minecraft-style.
- **Estética:** Limpia, moderna, "Minecraft-Coded" (bordes redondeados, sombras suaves).

## 3. Lo que el proyecto NO TIENE / FALTANTES
### Contenido
- **Base de Datos Parcial:** El archivo `data.json` actual contiene ~20 entradas. El usuario menciona un catálogo real de +300 elementos que aún deben ser migrados o autogenerados.
- **Recursos Visuales Reales:** La mayoría de las imágenes y videos en el JSON son placeholders (`via.placeholder.com`, `dQw4w9WgXcQ`).

### Funcionalidad Avanzada
- **Estado de Servidor en Vivo:** El indicador "124 Jugadores" es estático. Falta integración con una API de Minecraft (ej. `mcapi.us` o `api.mcsrvstat.us`) para datos en tiempo real.
- **Sistema de Copiado de IP:** El botón "Copiar IP" requiere la implementación de la API de Portapapeles (`navigator.clipboard`).
- **Persistencia:** No hay uso de `localStorage` para recordar filtros o preferencias del usuario.

## 4. Próximos Pasos Recomendados
1. **Población de Datos:** Expandir el `data.json` con los 300+ ítems restantes.
2. **Integración de API:** Conectar el contador de jugadores con la IP real `mc.nahuelito.com`.
3. **Optimización de Assets:** Sustituir placeholders por las miniaturas y videos finales.
4. **Páginas Secundarias:** Aunque el sistema es dinámico, se podrían crear rutas físicas para SEO si se migra a un generador de sitios estáticos (SSG).

## 5. Resumen para la IA (Contexto Rápido)
"El proyecto es una SPA dinámica en Vanilla JS. Todo depende del `data.json`. Si quieres añadir funciones, edita `app.js`. Si quieres añadir contenido, edita `data.json`. El diseño está cerrado y sigue el `DESIGN_SYSTEM_1`."
