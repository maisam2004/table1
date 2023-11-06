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
        //console.dir(data);

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




// create function to iterate over elements keys add it to array for rows of table
function trows(ele){
    let dataRow =[];
    Object.keys(ele).forEach(item => {
        let rowData = ele[item].toString().substring(0,11); //change contentst to string and slice it 
        dataRow.push(`<td>${rowData}</td>`)
        
    });
        return dataRow
}

function getTableHeaders(obj) {
    var tableHeaders = [];
    Object.keys(obj).forEach(function(key){
        tableHeaders.push(`<th>${key}</th>`);
        console.log(obj[key]);
    });  
    return `<tr>${tableHeaders}</tr>`;
}
 
// Create a reusable function for making fetch requests
function extraLink(link){
    let tableRows = [];
    let tableHeaders;
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
                    
                    
                    
                    tableRows.push(`<tr>${trows(element)}</tr>`);
                    tableHeaders = getTableHeaders(element);
                    listHtml += `<li>${element.name}</li>`;
                })
                listHtml += '</ol>';
                document.getElementById('sp').innerHTML = listHtml;

                tables.innerHTML =`<table>${tableHeaders}${tableRows}</table>` ;

            })
            .catch(error =>{
                console.error('Error:', error);
            });         
        
    }

const specific = document.getElementById('sp') ;
const tables = document.getElementById('table') ;

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
/* 
fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data,'this is data '))
    .catch(error => console.log('Error',error)); */



