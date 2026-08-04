document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('easter-egg-modal');
    const cerrarBtn = document.getElementById('cerrar-modal');

    let secuenciaTeclas = '';
    const palabraSecreta = 'sion';

    document.addEventListener('keydown', (e) => {
        
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            abrirModal();
        }

        secuenciaTeclas += e.key.toLowerCase();
        
        if (secuenciaTeclas.length > palabraSecreta.length) {
            secuenciaTeclas = secuenciaTeclas.substring(secuenciaTeclas.length - palabraSecreta.length);
        }

        if (secuenciaTeclas === palabraSecreta) {
            abrirModal();
            secuenciaTeclas = '';
        }

        if (e.key === 'Escape' && modal.classList.contains('activo')) {
            cerrarModal();
        }
    });

    function abrirModal() {
        modal.classList.add('activo');
    }

    function cerrarModal() {
        modal.classList.remove('activo');
    }

    // Cerrar al hacer clic en la X
    cerrarBtn.addEventListener('click', cerrarModal);

    // Cerrar si hace clic fuera del recuadro
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
    });

    
    const formulario = document.getElementById('Formulario');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = formulario.elements.value.trim();
            const email = formulario.elements.value.trim();
            const mensaje = formulario.elements.value.trim();

            if (!nombre || !email || !mensaje) {
                alert('[ERROR] Por favor, completa todos los campos del formulario.');
                return;
            }

            alert(`[ÉXITO] ¡Gracias ${nombre}! Tu mensaje ha sido transmitido con éxito.`);
            formulario.reset();
        });
    }

});