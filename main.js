    
    //первое main
    
    const openPopUp = document.getElementById('open_pop_up');
    const closePopUp = document.getElementById('pop_up_close');
    const popUp = document.getElementById('pop_up');

    openPopUp.addEventListener('click', function(e){
        e.preventDefault();
        popUp.classList.add('active');
    })

    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('active');
    })

    //второе main

    const openPopUpSec = document.getElementById('open_pop_up_second');
    const closePopUpSec = document.getElementById('pop_up_close_second');
    const popUpSec = document.getElementById('pop_up_second');

    openPopUpSec.addEventListener('click', function(e){
        e.preventDefault();
        popUpSec.classList.add('active');
    })

    closePopUpSec.addEventListener('click', () => {
        popUpSec.classList.remove('active');
    })


    //третье main

    const openPopUpthr = document.getElementById('open_pop_up_three');
    const closePopUpthr = document.getElementById('pop_up_close_three');
    const popUpthr = document.getElementById('pop_up_three');

    openPopUpthr.addEventListener('click', function(e){
        e.preventDefault();
        popUpthr.classList.add('active');
    })

    closePopUpthr.addEventListener('click', () => {
        popUpthr.classList.remove('active');
    })


    //четвертая main

    const openPopUpFr = document.getElementById('open_pop_up_four');
    const closePopUpFr = document.getElementById('pop_up_close_four');
    const popUpFr = document.getElementById('pop_up_four');

    openPopUpFr.addEventListener('click', function(e){
        e.preventDefault();
        popUpFr.classList.add('active');
    })

    closePopUpFr.addEventListener('click', () => {
        popUpFr.classList.remove('active');
    })

    


