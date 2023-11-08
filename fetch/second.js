
/* let place = document.getElementById('city').innerHTML.charAt(0).toUpperCase() + word.slice(1);
console.log(place); */

async function fetchData() {
    var place = document.getElementById('city').value;

    console.log(place);

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${place}&days=3`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a5ae4b8c4mshbeceb59411239d2p1543f2jsn15c99f5b23a7',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

let para = document.getElementById('main');
	fetch(url, options)
    .then(response => {
        return response.json()
    })
    .then(data =>{
        para.innerHTML = data;
        console.log(data);
        para.innerHTML = `<li>${data.location.name}</li><li>${data.current.condition.text}</li>`
    })
	.catch(error=>{
        console.error('Fetch error',error);
        para.innerHTML = 'An error occured while fetching data.';
    })

  };
   // Call the async function to initiate the request
  