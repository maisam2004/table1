const apiUrl = "https://ci-swapi.herokuapp.com/api/films/";
const urlBase = "https://ci-swapi.herokuapp.com/api/";

const dataContainer = document.getElementById('data-container');

fetch(apiUrl)
    .then(Response => {
        if(!Response.ok){
            throw new Error('Network response was not ok');
        }
        return Response.json();
    })
    .then(data => {
    

        dataContainer.innerHTML = '<ul>';
        console.dir(data);

        for( fi of data.results) {
            dataContainer.innerHTML += `<li>${fi.title}</li>`;
        }

        dataContainer.innerHTML += `<li>${data.results}</li>`;
       
        dataContainer.innerHTML +='</ul>'
    })
    .catch(error => {
        console.error('Fetch error',error);
        dataContainer.innerHTML = 'An error occured while fetching data.';
    });

// Create a reusable function for making fetch requests
function extraLink(link){
    let url = "https://ci-swapi.herokuapp.com/api/"+link; // contanicate with button onclick requests
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {  // i can use this part outide whenever i call this function.
        
                let listHtml= '<ol>';
                data.results.forEach(element => {
                    
                    listHtml += `<li>${element.name}</li>`;
                })
                listHtml += '</ol>';
                document.getElementById('sp').innerHTML = listHtml;
                
            })
            .catch(error =>{
                console.error('Error:', error);
            });         
        
    }

const specific = document.getElementById('sp') ;
const planets = document.getElementById('planets') ;

/* 
extraLink('people/');
    .then(data => {
        
        let listHtml= '<ol>';
        data.results.forEach(element => {
            
            listHtml += `<li>${element.name}</li>`;
        })
        listHtml += '</ol>';
        specific.innerHTML = listHtml;
        
    }); */

 /*
 extraLink('planets/')
   .then(data => {
        
        let listHtml= '<ol>';
        data.results.forEach(element => {
            listHtml += `<li>${element.name}</li>`;
        })
        listHtml += '</ol>';
        planets.innerHTML = listHtml;
        
    }); */


// for parctice 

fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data,'this is data '))
    .catch(error => console.log('Error',error));



