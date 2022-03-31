function hoverTitle() {
    const title = document.querySelector('.who__title')

    title.addEventListener('mouseenter', () => {
        title.innerHTML = 'SOBRE MIM'
    })

    title.addEventListener('mouseout', () => {
        title.innerHTML = 'ADRIANO YOKOYA'
    })
}


/**
 * Init functions
*/
hoverTitle()