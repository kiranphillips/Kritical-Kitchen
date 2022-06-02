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

        image.addEventListener('click', () => {
            document.querySelector('.info-image').src = restaurant.image
            document.querySelector('.name').textContent = restaurant.name
            document.querySelector('.description').textContent = restaurant.description
            document.querySelector('#thumbs-up-display').textContent = restaurant.likes
            document.querySelector('#thumbs-down-display').textContent = restaurant.dislikes
        })

        restaurantMenu.appendChild(image)
        
    })
}

function showRestaurantInfo(restaurant) {
    const name = document.getElementsByClassName("name")
    name.textContent = restaurant.name
    const image = document.getElementsByClassName("info-image")
    image.src = restaurant.image
}


document.addEventListener("DOMContentLoaded", init)