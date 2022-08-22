// add products to cart
const addToCart = document.getElementsByClassName("add-to-cart");

const addToCartClicked = (event) => {
  button = event.target;
  var cartItem = button.parentElement;
  var playerName = cartItem.getElementsByClassName("card-title")[0].innerText;
  console.log("pd ", playerName);
  addItemToCart(playerName);
};

for (var i = 0; i < addToCart.length; i++) {
  button = addToCart[i];
  button.addEventListener("click", addToCartClicked);
}

const addItemToCart = (playerName) => {
  let cartName = document.getElementsByClassName("cart-name");
  let productRow = document.createElement('li');
  productRow.classList.add('cart-name');
  let seletedPlayerList = document.getElementsByClassName("seletedPlayerList")[0];
    console.log(seletedPlayerList)

  for (var i = 0; i < cartName.length; i++) {
    console.log("ss", cartName[i].innerText);
    if (cartName[i].innerText == playerName) {
      alert("This item has already been added to the cart");
      return;
    }
  }

  var cartRowItems = `
            ${playerName}
      `;
  productRow.innerHTML = cartRowItems;
  seletedPlayerList.append(productRow);

};

const calculatePlayerCost = ()=>{
  const getPlayerNumber = document.getElementById("playerNumber").value;

  const getPlayerList =  document.getElementsByClassName("cart-name");

  const displayCost = document.getElementById("playerCost");
  const sum = getPlayerNumber * getPlayerList.length;
  displayCost.innerText = sum;
  console.log(displayCost)

}
const calculateTotalCost = ()=>{
  const getManagerCost = document.getElementById("managerCost").value;
  const getCoachCost = document.getElementById("coachCost").value;
  const displayCost = document.getElementById("playerCost").innerText;
  const totalCost = document.getElementById("totalCost");
  const sum = parseFloat( getManagerCost ) + parseFloat( getCoachCost )+ parseFloat(displayCost);
  console.log(parseFloat(sum))
  totalCost.innerText = parseFloat(sum);
}
