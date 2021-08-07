function useRequest(url, callback) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onload = function(){
		if (xhr.status !=200){
			console.log('Response status: ', xhr.status);
		} else {
				const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
			}
		}
	};
	xhr.onerror = function() {
    console.log('Error! Response status: ', xhr.status);
  };
	
	xhr.send();
};

const btnNode = document.querySelector('.btn');
const resultNode = document.querySelector('.result');

function displayResult (apiData){
	let cards = '';
	apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {

  const value = +document.querySelector('input').value;

  if ( value >= 1 && value <= 10 ) {
    let url = `https://picsum.photos/v2/list/?limit=${value}`;
    useRequest( url, displayResult);
  } else {
    alert('Out of range  ');
  }
  
});