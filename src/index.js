import '../src/css/style.css';

function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = `<h1>Hello Webpack!</h1>`;

   return element;
}

//document.body.appendChild(component());