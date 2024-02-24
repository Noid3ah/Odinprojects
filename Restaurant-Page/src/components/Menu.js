import Items from '../data/menu.yaml';

const createFood = (category) => {
  const ul = document.createElement('ul');
  ul.className = 'menuList contain';
  const items = Items[category]
    .map((food) => {
      const { name, price, image } = food;

      const element = document.createElement('li');
      const itemImg = document.createElement('img');
      const itemName = document.createElement('h4');
      const itemPrice = document.createElement('span');
      const itemContent = document.createElement('div');

      itemImg.src = image;
      itemImg.alt = name;
      itemName.textContent = name;
      itemPrice.textContent = price;
      itemContent.className = 'menuContent';
      itemContent.append(itemName, itemPrice);
      element.append(itemImg, itemContent);
      ul.append(element);
    })
    .join(' ');

  return ul;
};

export function renderFood() {
  return createFood('food');
}
