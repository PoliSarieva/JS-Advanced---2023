function sumTable() {
    let text = document.querySelectorAll('tr > td:nth-child(2n)');
    let texted = Array.from(text);
    let textArr = [];
    texted.forEach(x => {
        textArr.push(Number(x.textContent));
    }
    )

    let sum = textArr.pop();
    
    for (const elem of textArr) {
        sum += elem;
    }

    let sumElem = document.getElementById('sum');
    
    sumElem.textContent = sum;
}