const proContainer = document.querySelector('.pro');
const scrollContainer = document.querySelector('.scroll-container');

proContainer.addEventListener('scroll', () => {
  const scrollLeft = proContainer.scrollLeft;
  const scrollWidth = proContainer.scrollWidth;
  const clientWidth = proContainer.clientWidth;
  const maxScrollLeft = scrollWidth - clientWidth;

  if (scrollLeft === maxScrollLeft) {
    loadMoreItems();
  }
});

function loadMoreItems() {
    const totalItems = 10; 
    const itemsOnScreen = document.querySelectorAll('.product-card').length;
  
     const itemsToAdd = 4; 
  
    for (let i = itemsOnScreen + 1; i <= itemsOnScreen + itemsToAdd && i <= totalItems; i++) {
      const newItem = document.createElement('div');
      newItem.classList.add('product-card');
      newItem.textContent = `product-card ${i}`;
      scrollContainer.appendChild(newItem);
    }
  }