// create an xml http instance(object)
var request= new XMLHttpRequest();
//initate a new connection
//http methods consist of get, put,  
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request to server
request.send();
//if server responded successfully, we need to retrive the data
request.onload=function(){
    var data=JSON.parse(this.response)
//loop it for 250 times bcz of data is 250 countries
    
for(var i in data){
        var name = data[i].name;
        console.log(name);
    }
}