var lightbox= document.querySelector(".lightbox")
var galleryItems= document.querySelectorAll(".gallery-item")
var closeBtn= document.querySelector("#close-btn")
var lightboxImage = document.getElementById("lightbox-image")

galleryItems.forEach((item)=>{
    item.addEventListener("click", ()=>{
        lightbox.style.display= "flex"
        var fullImage= item.src.replace("-thumbnail", "")
        lightboxImage.src= fullImage
    })
})

lightbox.addEventListener("click", ()=>{
    lightbox.style.display= "none"
})

closeBtn.addEventListener("click", ()=>{
    lightbox.style.display= "none"
})