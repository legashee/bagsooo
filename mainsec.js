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


