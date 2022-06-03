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
        thumbsUp(restaurant)
        thumbsDown(restaurant)
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
    setTimeout(showSlides, 2000); // Change image every 2 seconds
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

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function thumbsUp(restaurant) {
    let currentLikes = (restaurant.likes);
    const likeButton = document.querySelector(".thumbs-up-image");
    const thumbsUpDisplay = document.getElementById("thumbs-up-display")
    likeButton.addEventListener("click", (e)=>{
       currentLikes++;
       thumbsUpDisplay.textContent = currentLikes;
    });
}
function thumbsDown(restaurant) {
    let currentDislikes = (restaurant.dislikes);
    const dislikeButton = document.querySelector(".thumbs-down-image");
    const thumbsDownDisplay = document.getElementById("thumbs-down-display")
    dislikeButton.addEventListener("click", (e)=>{
       currentDislikes++;
       thumbsDownDisplay.textContent = currentDislikes;
    });
}
  
document.addEventListener("DOMContentLoaded", init)