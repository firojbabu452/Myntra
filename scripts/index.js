let bagItems;

onLoad();
function onLoad(){
 let bgstr = localStorage.getItem('bagItems');
 bagItems = bgstr ? JSON.parse(bgstr) : [];
displayBagIcon();
displayItemOnHomePage();
}
function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  // Get the 'bag-items-count' element
  let bagitemcountElement = document.querySelector('.bag-item-count');

  if (bagItems && bagItems.length > 0) { // Check if bagItems is defined and has items
    bagitemcountElement.style.visibility = 'visible';
    bagitemcountElement.textContent = bagItems.length; // Use textContent to set the element's content
  } else {
    bagitemcountElement.style.visibility = 'hidden';
  }
}

function displayItemOnHomePage(){
    let itemsContainer = document.querySelector(".items-container");
   if(!itemsContainer){
    return;
   }
let innerHtml = "";

items.forEach(item => {
  innerHtml += `
    <div class="item-container">
  <img class="item-image" src="${item.image}" alt="item image">
  <div class="rating">
    ${item.rating.stars} ⭐ | ${item.rating.count}
  </div>
  <div class="company-name">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price">
    <span class="current-price">Rs ${item.current_price}</span>
    <span class="original-price">Rs ${item.original_price}</span>
    <span class="discount">(${item.discount_percentage}% OFF)</span>
  </div>
  <button class="btn-add-bag" onclick="addToBag(${item.id});">Add To Bag</button>
</div>
   
        `;
});

itemsContainer.innerHTML = innerHtml;

};


