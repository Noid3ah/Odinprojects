export default function About() {
  const element = document.createElement('div');
  element.className = 'about contain';
  const aboutText = document.createElement('p');
  aboutText.textContent = `Gummi bears apple pie cookie I love I love powder I love icing oat cake. Cookie toffee toffee oat cake shortbread pastry gingerbread cookie. I love ice cream I love oat cake powder cake. Jujubes cheesecake liquorice croissant marzipan pastry chupa chups.

  Gummi bears liquorice chocolate cake apple pie pudding pastry gingerbread. I love candy canes gingerbread cupcake cheesecake brownie wafer toffee. Dragée apple pie tiramisu bonbon macaroon. Jelly-o topping I love icing chocolate cake lollipop dessert candy lollipop.
  
  Carrot cake sesame snaps I love gummi bears jelly beans toffee pastry. Gummies wafer cake marshmallow tootsie roll dessert. Jelly donut I love I love brownie oat cake marzipan. Chocolate pie cookie I love biscuit tiramisu.`;

  element.append(aboutText);
  return element;
}
