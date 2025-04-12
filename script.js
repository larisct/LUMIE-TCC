window.addEventListener('scroll',function(){
    const footer = this.document.querySelector('footer');
    const documentHeight=
    document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = this.window.scrollY;
    f(scrollPosition > documentHeight - windowHeight - 20){
        footer.classList.add('footer-visivel')
    } else{
        footer.classList.remove('footer-visivel');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const elementosDestacados = document.querySelectorAll('.info-destacada');
    elementosDestacados.forEach(function(elemento) {
        elemento.addEventListener'click', function
            const infoExtra = this.nextElementSibling;
            f (infoExtra && infoExtra.classList.contains('info-extra')) {
                if (infoExtra.style.display === 'none' || infoExtra.style.display === '') {
                    infoExtra.style.display = 'block';
                } else {
                    infnfoExtra.style.display = 'none';
                }
            }
        });
    });