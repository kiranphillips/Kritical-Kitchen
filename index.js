const init = () => {
    fetch("http://localhost:3000/restaurants")
        .then(response => response.json())
        .then(data => displayRestaurants(data))
}

function displayRestaurants(restaurants) {
    
    const restaurantMenu = document.getElementById('restaurant-menu')
    
    restaurants.forEach(restaurant => {
        const image = document.createElement('img')
        image.src = restaurant.image

        restaurantMenu.appendChild(image)
    })
}


document.addEventListener("DOMContentLoaded", init)