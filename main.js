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