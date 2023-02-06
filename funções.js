function aparecerMouse(){

    const cards = document.querySelectorAll('.cards-over');
    
    cards.forEach(button =>{
    
        button.addEventListener('mouseover', (event) =>{
            event.currentTarget.closest('.cards-over').querySelector('.botaoDoCard').style.display = "block";
        });
        
        button.addEventListener('mouseout', (event) =>{
            event.currentTarget.closest('.cards-over').querySelector('.botaoDoCard').style.display = "none";
        });
    
    });
    }
 
/*--------------------------------- Modal------------------------------*/
    const modal = document.querySelector("#modalSec");

    const fade = document.querySelector("#fadeModal");
    
    function toggleModal (){
        modal.classList.toggle("hide")
        fade.classList.toggle("hide")
    }    
