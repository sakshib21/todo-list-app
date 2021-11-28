// localStorage.clear()
console.log("Inside Script.js");

console.log(localStorage)

if (localStorage.cards){
    $('.cards').children().remove()
    $('.cards').append(JSON.parse(localStorage.getItem('cards')))
}

const setStorage = () => {
    localStorage.removeItem('cards') //remove all the values
    localStorage.setItem('cards',JSON.stringify($('.cards').html()))
}

// Add new todo items
$("form").on("submit", (event) => {
  event.preventDefault();
  console.log("Add Clicked!");
  const title = $("input").val();
  const card = `
    <div class="card my-2">
        <div class="card-block ml-3">
            <button id="delete" type="button" class="btn btn-danger float-right my-2">Delete</button>
            <button id="done" type="button" class="btn btn-success float-right my-2 mr-2">Done</button>
            <p class="card-title lead my-2">${title}</p>
        </div>
    </div>
    `;
  $(".cards").append(card);

  // reset input
  $("form").trigger("reset");
  setStorage();
});

//Delete items
$('.cards').on('click', '#delete', () => {
    alert("Are you sure you want to delete? ")
    $(event.target).offsetParent().remove()
    setStorage();
})