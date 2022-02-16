const empties = document.querySelectorAll(".empty");
const image = document.querySelector(".fill")

console.log(image)

image.addEventListener("dragstart", function(e) {
  e.target.classList.add("dragImage");
})

image.addEventListener("dragend", function(e) {
  e.target.classList.remove("dragImage");
})
