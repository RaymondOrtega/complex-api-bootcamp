document.querySelector("button").addEventListener("click", function(){
  const inputValue = document.querySelector("input").value.toLowerCase()
  var fire;
  fetch("https://pokeapi.co/api/v2/pokemon/" +`${inputValue}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {

        document.querySelector(".value").innerHTML = response.name
        document.querySelector(".height").innerHTML =response.height
        document.querySelector(".weight").innerHTML = response.weight
        document.querySelector(".pokeDex").innerHTML = response.order

         fire =response.types[0].type.name
         runType(fire)
         document.querySelector(".ability").innerHTML = response.abilities[0].ability.name
       })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
});

function runType(x){
fetch("https://pixabay.com/api/videos/?key=13013634-c89fd678f166701a5c2a85bef&q=" + `${x}`)
   .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
   .then(response => {
       console.log(response.hits[0].videos.small.url);
       console.log(x)
       document.querySelector("iframe").src = response.hits[0].videos.small.url
       })
   .catch(err => {
       console.log(`error ${err}`)
       alert("sorry, there are no results for your search")
   });}
