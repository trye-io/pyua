function randomLocation() {
    const section = document.getElementById("section-");
    
    return {
        x: Math.random() * section.offsetWidth - section.offsetWidth / 2 + 'px',
        y: Math.random() * window.innerHeight - window.innerHeight / 2 + 'px'
    };
}

function randomColor() {
    return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
}

window.addEventListener('DOMContentLoaded', function() {
    const this_book = document.getElementById("this_book");
    if (this_book !== null) {
        this_book.addEventListener("click", function () {
            for (let j = 0; j < 10; j++) {
                setTimeout(() => {
                    const particles = [];
                    const color = randomColor();
                
                    const particle = document.createElement('span');
                    particle.classList.add('particle', 'move');
                    const { x, y } = randomLocation();
                    particle.style.setProperty('--x', x);
                    particle.style.setProperty('--y', y);
                    particle.style.background = color;
                    
                    this_book.appendChild(particle);
                    
                    particles.push(particle);
                    setTimeout(() => {
                        for (let i = 0; i < 50; i++) {
                            const innerP = document.createElement('span');
                            innerP.classList.add('particle', 'move' );
                            innerP.style.transform=`translate(${x}, ${y})`;
                            const xs = Math.random() * 200 - 100 + 'px' ;
                            const ys = Math.random() * 200 - 100 + 'px' ;
                            innerP.style.setProperty('--x', `calc(${x} + ${xs})`);
                            innerP.style.setProperty('--y', `calc(${y} + ${ys})`);
                            innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
                            innerP.style.background = color;
                            this_book.appendChild(innerP);
                            particles.push(innerP);
                        }
                        setTimeout(()=> {
                            particles.forEach(particle => {
                                particle.remove();
                            });
                        }, 700);
                    }, 700);
                }, Math.random() * 300 + 200);
            }
        });
    }
});
