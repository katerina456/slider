console.log('hello');
let fotos = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg']

document.addEventListener('DOMContentLoaded', initSlider);

function initSlider() {
    let slider = document.querySelector('.slider');
    let arrows = document.querySelectorAll('.arrow');
    
    let i = 0;
    
    arrows.forEach(elem => {
        elem.addEventListener('click', () => {
            if (elem.classList.contains('next')) {
                i ++;
            } else {
                i --;
            }
            
            i = checkNumber(i);
            slider.style.backgroundImage = getFoto(i);
        })
    })

    function getFoto(i) {
        let foto = 'url(foto/' + fotos[i] + ')';
        return foto;
    }
    
    function checkNumber(i) {
        if (i < 0) {
            i = fotos.length -1;
        }
        if (i > fotos.length -1) {
            i = 0;
        }
        return i;
    }
}

