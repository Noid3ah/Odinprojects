import './styles/style.css';
import Home from './components/Home';
import { renderFood } from './components/Menu';
import About from './components/About';

const container = document.querySelector('#content');
const nav = document.querySelector('.nav');
const contents = [Home, renderFood, About];

const toggle = (e) => {
  const target = e.target;
  if (target.tagName !== 'BUTTON') return;
  const index = [...nav.children].indexOf(target);

  const buttons = [...nav.children];
  buttons.forEach((btn) => btn.classList.remove('active'));
  renderContent(index);
  target.classList.add('active');
};

const resetContent = () => {
  container.innerHTML = '';
};

const renderContent = (tabIndex) => {
  const content = contents[tabIndex];
  resetContent();
  container.append(content());
};

nav.onclick = toggle;
window.onload = renderContent(0);
