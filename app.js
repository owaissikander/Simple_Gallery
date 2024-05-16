





var largeImage1 = document.getElementById('largeImage')
var smallImage2 = document.getElementById('smallImage')
var main_image3 = document.getElementById('main_image')
var image1 = document.getElementById('image1')
var image2 = document.getElementById('image2')
var image3 = document.getElementById('image3')
var image4 = document.getElementById('image4')


image1.addEventListener('mouseover', function () {
    main_image3.src = 'https://images.unsplash.com/photo-1508896694512-1eade558679c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D'
image1.style.border='2px solid black'
})
image2.addEventListener('mouseover', function () {
    main_image3.src = 'https://images.unsplash.com/photo-1572635196184-84e35138cf62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95JTIwY2FyfGVufDB8fDB8fHww'
    image2.style.border='2px solid black'
})

image3.addEventListener('mouseover', function () {
    main_image3.src = 'https://images.unsplash.com/photo-1626023772800-eadff10c0f9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D'
    image3.style.border='2px solid black'
})

image4.addEventListener('mouseover', function () {
    main_image3.src = 'https://images.unsplash.com/photo-1508896694512-1eade558679c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D'
    image4.style.border='2px solid black'
})










image1.addEventListener('mouseout', function () {
    main_image3.src = 'https://images.unsplash.com/photo-1508896694512-1eade558679c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D'
image1.style.border='2px solid transparent'
})
image2.addEventListener('mouseout', function () {
    main_image3.src = 'https://images.unsplash.com/photo-1572635196184-84e35138cf62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95JTIwY2FyfGVufDB8fDB8fHww'
    image2.style.border='2px solid transparent'
})

image3.addEventListener('mouseout', function () {
    main_image3.src = 'https://images.unsplash.com/photo-1626023772800-eadff10c0f9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D'
    image3.style.border='2px solid transparent'
})

image4.addEventListener('mouseout', function () {
    main_image3.src = 'https://images.unsplash.com/photo-1508896694512-1eade558679c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D'
    image4.style.border='2px solid transparent'
})

