// AOS Initialize
AOS.init({
    disable: 'mobile'
});

// Popper Tooltip
const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');

const popperInstance = Popper.createPopper(button, tooltip, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 8],
            },
        },
    ],
});

function show() {
    // Make the tooltip visible
    tooltip.setAttribute('data-show', '');

    // Enable the event listeners
    popperInstance.setOptions({
        modifiers: [{ name: 'eventListeners', enabled: true }],
    });

    // Update its position
    popperInstance.update();
}

function hide() {
    // Hide the tooltip
    tooltip.removeAttribute('data-show');

    // Disable the event listeners
    popperInstance.setOptions({
        modifiers: [{ name: 'eventListeners', enabled: false }],
    });
}

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach(event => {
    button.addEventListener(event, show);
});

hideEvents.forEach(event => {
    button.addEventListener(event, hide);
});

// Navbar Update on Scroll Position
const spyScrolling = ( ) => {
    const sections = document.querySelectorAll( '.scroll-bg' );
  
    window.onscroll = ( ) => {
      const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
      for ( let s in sections )
        if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop <= scrollPos ) {
          const id = sections[ s ].id;
          document.querySelector( '.active' ).classList.remove( 'active' );
          document.querySelector( `a[href*=${ id }]` ).classList.add( 'active' );
        }
    } 
}
spyScrolling( );

// GlideJS - Projects
const glideOptions = {
    type: "carousel",
    perView: 3,
    startAt: 1,
    focusAt: 'center',
    gap: 10,
    breakpoints: {
        1024: {
            perView: 2,
            startAt: 1,
            focusAt: 1,
            gap: 5
        },
        600: {
            perView: 1,
            startAt: 1,
            focusAt: 1,
            gap: 0,          
        }
    }

};
new Glide('.glide', glideOptions).mount()