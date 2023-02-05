function validate() {
    let email = document.getElementById('email').addEventListener('change', onChange);
    
    function onChange(event) {
        //const pattern = '/^[a-z-\.]+@[a-z-\.]+\.[a-z]+/gm';

        if(event.target.value.match(/^[a-z-\.]+@[a-z-\.]+\.[a-z]+/gm)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}