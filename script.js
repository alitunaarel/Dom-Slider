var models = [
    {
        name: "Drogba",
        image: "img/drogba.jpg",
        link: "https://images.pexels.com/photos/1154619/pexels-photo-1154619.jpeg?cs=srgb&dl=arbres-aviation-avion-ciel-1154619.jpg&fm=jpg"
    },
    {
        name: "Falcao",
        image: "img/falcao.jpg",
        link: "https://images.pexels.com/photos/3309268/pexels-photo-3309268.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
        name: "Logo",
        image: "img/logo.jpg",
        link: "https://images.pexels.com/photos/3793316/pexels-photo-3793316.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
        name: "Onyekuru",
        image: "img/onyekuru.jpg",
        link: "https://images.pexels.com/photos/3908081/pexels-photo-3908081.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
        name: "Galatasaray",
        image: "img/team.jpg",
        link: "https://images.pexels.com/photos/3541916/pexels-photo-3541916.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
]

var index = 0;
var slaytCount = models.length;
showSlide(index);

document.querySelector('.fa-hand-point-left').addEventListener('click', function(){

    index--;
    showSlide(index);
    console.log(index);
})

document.querySelector('.fa-hand-point-right').addEventListener('click', function(){
    index++;
    showSlide(index);
    console.log(index);
})

function showSlide(i){
    index = i;
    if(i<0){
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index=0;
    }
document.querySelector(".card-title").textContent = models[index].name;

document.querySelector('.card-img-top').setAttribute('src',models[index].image);

document.querySelector('.card-link').setAttribute("href",models[index].link);
}

