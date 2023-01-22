function colorize() {
    let text = document.getElementsByTagName('tr');
    let textArr = Array.from(text);


    textArr.forEach((x, i) =>{

        if (i % 2 != 0) {
        x.style.backgroundColor = 'teal';
        }
        }
    )
}