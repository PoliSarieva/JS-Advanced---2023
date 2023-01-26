function create(input) {
   let parentElement = document.getElementById('content');
   let words = input;

   for (let i = 0; i < words.length; i++) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      let text = document.createTextNode(words[i]);

      p.appendChild(text);
      p.style.display = 'none';
      div.appendChild(p);
      parentElement.appendChild(div);
      
      div.addEventListener('click', showParagraph);

      function showParagraph(event) {
         event.target.children[0].style.display = 'block';
      }
   }
}