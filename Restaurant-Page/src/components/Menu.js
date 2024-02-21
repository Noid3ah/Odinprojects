import Items from '../data/menu.yaml';

const createFood = (category) => {
  const ul = document.createElement('ul');
  ul.className = 'menuList';
  const items = Items[category]
    .map((food) => {
      const { name, price, image, alt } = food;

      const element = document.createElement('li');
      const itemImg = document.createElement('img');
      const itemName = document.createElement('h4');
      const itemPrice = document.createElement('span');

      itemImg.src = image;
      itemImg.alt = alt;
      itemName.textContent = name;
      itemPrice.textContent = price;
      element.append(itemImg, itemName, itemPrice);
      ul.append(element);
    })
    .join(' ');

  return ul;
};

export function renderFood() {
  return createFood('beverage');
}
