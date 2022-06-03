const init = () => {
    fetch("http://localhost:3000/restaurants")
        .then(response => response.json())
        .then((data) => (displayRestaurants(data)))
        
}

function displayRestaurants(restaurants) {

    const restaurantMenu = document.querySelector('#restaurant-menu')
    
    restaurants.forEach(restaurant => {
        const image = document.createElement('img')
        image.src = restaurant.image
        const div = document.createElement("div")
            div.classList.add("mySlides")
            div.classList.add("fade")

        image.addEventListener('click', () => {
            document.querySelector('.info-image').src = restaurant.image
            document.querySelector('.name').textContent = restaurant.name
            document.querySelector('.description').textContent = restaurant.description
            document.querySelector('#thumbs-up-display').textContent = restaurant.likes
            document.querySelector('#thumbs-down-display').textContent = restaurant.dislikes
        })
        div.append(image)
        restaurantMenu.appendChild(div)
    })
    showSlides();
}
let slideIndex = 0;


function showSlides() {
    let i;
    let slides = document.getElementsByClassName('mySlides');
         console.log(slides)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2500); // Change image every 2 seconds
}

function showRestaurantInfo(restaurant) {
    const name = document.getElementsByClassName("name")
    name.textContent = restaurant.name
    const image = document.getElementsByClassName("info-image")
    image.src = restaurant.image
}

function logSubmit(event){
    event.preventDefault();
console.log(logSubmit)
    const form = document.getElementById('form');

form.addEventListener('submit', logSubmit);
}
document.addEventListener("DOMContentLoaded", init)