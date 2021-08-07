const resultNode = document.querySelector('#result');

const btnNode = document.querySelector('#btn');

let myJSON = ""; 



	btnNode.addEventListener('click', () => {
       
        let myJSON = localStorage.getItem('myJSON');
        let input_1 = document.querySelector('#input_1').value; 
        let input_2 = document.querySelector('#input_2').value; 
        if ((input_1 < 1 || input_1 > 10) && (input_2 < 1 || input_2 > 10)) {
            alert('Номер страницы и лимит вне диапазона от 1 до 10');
            return;
        } else if (input_1 < 1 || input_1 > 10) {
            alert('Номер страницы вне диапазона от 1 до 10');
            return;
        } else if (input_2 < 1 || input_2 > 10) {
            alert('Лимит вне диапазона от 1 до 10');
            return;
        } else {
            if (myJSON) {
                displayResult(JSON.parse(myJSON)); 
              } else {
                useRequest(`https://picsum.photos/v2/list?page=${input_1}&limit=${input_2}`);
                }
        }
    });


function useRequest(url) {
        fetch(url)
        .then((response) => {
            return response.json(); 
        })
        .then((data) => {
            let myJSON = localStorage.setItem("myJSON", JSON.stringify(data)); 
            displayResult(data);
        }) 
        .catch(() => { console.log('Ошибка !') });
    };

function displayResult(data) {
            let cards = '';
            data.forEach(item => {
                const cardBlock = `
                <div class="card">
                    <p>${item.author}</p>
                    <img src="${item.download_url}" class="card-image">
                </div>
              `;
                cards += cardBlock;
            });
            resultNode.innerHTML = cards; 
        }