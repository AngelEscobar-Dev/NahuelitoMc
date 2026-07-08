// Variables globales para mantener el estado en memoria
let catalogoCompleto = [];
let categoriaActual = 'todos';
let busquedaActual = '';

// 1. Cargar los datos del JSON masivo al iniciar
async function cargarDatos() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('No se pudo cargar la base de datos');
        
        catalogoCompleto = await response.json();
        
        // Inicializar listeners y renderizar por primera vez
        inicializarFiltros();
        renderizarCatalogo();
    } catch (error) {
        console.error('Error al inicializar la SPA:', error);
        document.getElementById('grid-catalogo').innerHTML = 
            '<p class="error">Error al cargar el catálogo. Intenta de nuevo más tarde.</p>';
    }
}

// 2. Renderizar las tarjetas dinámicamente en el Grid
function renderizarCatalogo() {
    const grid = document.getElementById('grid-catalogo');
    grid.innerHTML = ''; // Limpiar el contenedor

    // Aplicar los dos filtros en simultáneo (Categoría + Texto)
    const elementosFiltrados = catalogoCompleto.filter(item => {
        const coincideCategoria = (categoriaActual === 'todos' || item.categoria.toLowerCase() === categoriaActual);
        const coincideTexto = item.nombre.toLowerCase().includes(busquedaActual) || 
                              item.descripcionCorta.toLowerCase().includes(busquedaActual);
        
        return coincideCategoria && coincideTexto;
    });

    // Si no hay resultados, mostrar mensaje funcional
    if (elementosFiltrados.length === 0) {
        grid.innerHTML = '<p class="sin-resultados">No se encontraron elementos que coincidan con tu búsqueda.</p>';
        return;
    }

    // Inyectar las tarjetas correspondientes
    elementosFiltrados.forEach(item => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-item'; // Asegúrate de que coincida con tus clases de SASS/CSS
        tarjeta.dataset.id = item.id;
        
        tarjeta.innerHTML = `
            <img src="${item.imagen || 'assets/images/placeholder.png'}" alt="${item.nombre}" class="tarjeta-img" loading="lazy">
            <div class="tarjeta-info">
                <span class="badge-categoria">${item.categoria}</span>
                <h3>${item.nombre}</h3>
                <p>${item.descripcionCorta}</p>
                <button class="btn-detalles" onclick="abrirModal(${item.id})">Ver Detalles</button>
            </div>
        `;
        grid.appendChild(tarjeta);
    });
}

// 3. Configurar los Listeners de la interfaz (Inputs y Chips)
function inicializarFiltros() {
    const inputBusqueda = document.getElementById('input-busqueda'); // Tu barra de búsqueda
    const chipsCategoria = document.querySelectorAll('.chip-categoria'); // Tus botones de categoría

    // Listener para búsqueda en tiempo real (Input)
    if (inputBusqueda) {
        inputBusqueda.addEventListener('input', (e) => {
            busquedaActual = e.target.value.toLowerCase().trim();
            renderizarCatalogo();
        });
    }

    // Listener para los Chips de categoría
    chipsCategoria.forEach(chip => {
        chip.addEventListener('click', (e) => {
            // Alternar clase activa visualmente
            chipsCategoria.forEach(c => c.classList.remove('activo'));
            chip.classList.add('activo');

            // Actualizar estado y renderizar
            categoriaActual = chip.dataset.categoria.toLowerCase().trim();
            renderizarCatalogo();
        });
    });
}

// Ejecutar carga cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarDatos);