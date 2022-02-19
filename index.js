const empties = document.querySelectorAll(".empty");
const image = document.querySelector(".fill");

image.addEventListener("dragstart", dragStart)

image.addEventListener("dragend", dragEnd)


for(const empty of empties) {
  empty.addEventListener("dragover", function(e) {
    e.preventDefault();
    console.log("draggedover")
  })
  empty.addEventListener("dragenter", function(e) {
    e.preventDefault();
    empty.classList.add("pink")
    console.log("entered")
  })
  empty.addEventListener("dragleave", function() {
    empty.classList.remove("pink")
  })
  empty.addEventListener("drop", function(e) {
    empty.append(image)

  })
}

function dragStart() {
  this.classList.add("dragImage");
}

function dragEnd() {
  this.classList.remove("dragImage");
}
