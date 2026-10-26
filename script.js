const toggle = document.querySelector('.menu-toggle');

const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {

    const open = links.classList.toggle('open');

    toggle.setAttribute('aria-expanded', String(open));

    toggle.setAttribute(
        'aria-label',
        open ? 'Cerrar menú' : 'Abrir menú'
    );

    toggle.textContent = open ? '✕' : '☰';

});

links.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

        links.classList.remove('open');

        toggle.setAttribute('aria-expanded', 'false');

        toggle.setAttribute('aria-label', 'Abrir menú');

        toggle.textContent = '☰';

    });

});