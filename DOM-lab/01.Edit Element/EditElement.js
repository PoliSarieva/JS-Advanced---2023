function editElement(ref, match, replacer) {
    const pattern = new RegExp(match, 'g');
    const text = ref.textContent;
    const rezult = text.replace(pattern, replacer);

    ref.textContent = rezult;
}

/*
function editElement(ref, match, replacer) {

    const text = ref.textContent;
    const rezult = text.split(match).join(replacer);

    ref.textContent = rezult;
}
*/

/*temp1.textContent
'Hello, %insert name here%!'
const text = temp1.textContent
undefined
text.replace('name', 'ehoooo')
'Hello, %insert ehoooo here%!'
const rezult = text.replace('name', 'ehoooo')
undefined
resizeBy
ƒ resizeBy() { [native code] }
rezult
'Hello, %insert ehoooo here%!'
temp1.textContent = rezult
'Hello, %insert ehoooo here%!'*/