const btnNode = document.getElementById('btn');
const resultNode = document.getElementById('result');

function useRequest(url) {

  fetch(url)

    .then((response) => {
     
      const image = `<img src="${url}" class="card-image"/>`;
      resultNode.innerHTML = image;
    })
    .catch(() => { console.log('error') });
}

btnNode.addEventListener('click', () => {

  let img = '';

  const value = document.querySelectorAll('input').forEach((item) => {

    if ( Number(item.value) < 100 || Number(item.value) > 300) {
             alert(`Одно из чисел вне диапазона от 100 до 300;`);
     } else {
       img = img +  `/${item.value}`;
     }
   });
 
   if (img) {
     useRequest( `https://picsum.photos${img}` );
   }
 
 })