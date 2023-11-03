/* var xhr = new XMLHttpRequest();
xhr.open('GET',"https://ci-swapi.herokuapp.com/api/");
xhr.send();


xhr.onreadystatechange =function () {
    if(this.readyState==4 && this.status == 200 ){
        document.getElementById('data').innerHTML = this.responseText;
        data = JSON.parse(this.responseText);
    }
};

setTimeout(function(){
    console.log(data);
},500); */

////
const base_url = "https://ci-swapi.herokuapp.com/api/";
function getData(type,cb){
    var xhr = new XMLHttpRequest();
    xhr.open('GET',base_url+type+'/');
    xhr.send();
    xhr.onreadystatechange =function () {
        if(this.readyState==4 && this.status == 200 ){
            
            cb(JSON.parse(this.responseText));
        }
    };
}



function writeToDocument(type){
    getData(type,function(data){
        data = data.results;
        document.getElementById('data').innerHTML = '<ul>';
        data.forEach(function(item){
            
            console.dir(item);
            
            document.getElementById('data').innerHTML += '<li>'+item.name+'</li>';
        });
        document.getElementById('data').innerHTML += '</ul>';
    })

}
 
/* 
// URL of the API you want to fetch data from
const apiUrl = base_url;

// Target the HTML element where you want to display the data
const dataContainer = document.getElementById('data-container');

// Fetch data from the API
fetch(apiUrl)
    .then(response => response.json()) // Parse the response as JSON
    .then(jata => {
        // Update the HTML element with the fetched data
        dataContainer.innerHTML = `<p>Title: ${jata.results}</p><p>Body: ${jata.body}</p>`;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        dataContainer.innerHTML = 'An error occurred while fetching data.';
    });
*/