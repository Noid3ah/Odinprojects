export default function Home() {
  const element = document.createElement('div');
  const heroText = document.createElement('h1');
  const heroSpan = document.createElement('span');
  element.className = 'hero';
  heroText.className = 'inter-x';
  heroSpan.className = 'dress';
  heroText.textContent = 'Good food is the foundation of genuine happiness';
  heroSpan.textContent = '"Food is a passion, food is love"';
  element.append(heroText, heroSpan);
  return element;
}
