const empties = document.querySelectorAll(".empty");
const image = document.querySelector(".fill");

//event listener on draggable elements
image.addEventListener("dragstart", dragStart);
image.addEventListener("dragend", dragEnd);

// event listener on droppable elements
for(const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave",dragLeave);
  empty.addEventListener("drop",dragDrop);
}

// functions
function dragStart() {
  this.classList.add("dragImage");
}
function dragEnd() {
  this.classList.remove("dragImage");
}
function dragOver(e) {
  e.preventDefault()
}
function dragEnter(e) {
  e.preventDefault()
  this.classList.add("pink");
}
function dragLeave() {
  this.classList.remove("pink")
}
function dragDrop(e) {
  e.preventDefault();
  this.append(image)
}
