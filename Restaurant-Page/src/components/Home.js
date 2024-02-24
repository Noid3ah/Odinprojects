export default function Home() {
  const element = document.createElement('div');
  const heroText = document.createElement('h1');
  const heroSpan = document.createElement('span');
  const cta = document.createElement('button');

  element.className = 'hero contain';
  heroText.className = 'inter-x';
  heroSpan.className = 'dress';
  heroText.textContent = 'Good food is the foundation of genuine happiness';
  heroSpan.textContent = '"Food is a passion, food is love"';
  cta.textContent = "I'm hungry";
  element.append(heroText, heroSpan, cta);
  return element;
}
