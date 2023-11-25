const openButton = document.querySelector("[data-open-modal]");
const submitAndClose = document.querySelector("[data-close-modal]");
const cancelButton = document.querySelector("[data-cancel-modal]");
const modal = document.querySelector("[data-modal]");

const form = document.getElementById("book-form");
const title = form.querySelector("#title");
const series = form.querySelector("#series");
const author = form.querySelector("#author");
const pages = form.querySelector("#pages");
const checkbox = form.querySelector("#read");

const cardArray = document.querySelector(".card-grid");

function resetFields() {
  title.value = "";
  series.value = "";
  author.value = "";
  pages.value = "";
  checkbox.checked = false;
}
openButton.addEventListener("click", () => {
  modal.showModal();
});

cancelButton.addEventListener("click", () => {
  modal.close();
  resetFields();
});

submitAndClose.addEventListener("click", (e) => {
  // e.preventDefault();
  if (!author.value || !title.value || !pages.value) return;

  createBook(
    new Book(
      title.value,
      series.value,
      author.value,
      pages.value,
      checkbox.checked
    )
  );
  modal.close();
  renderBook();
  resetFields();
});

const myLibrary = Array.from(cardArray.children);
// const myLibrary = [];

function Book(title, series, author, pages, read) {
  this.title = title;
  this.series = series;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(myLibrary);
}

function createBook(book) {
  const { title, series, author, pages, read } = book;
  const div = document.createElement("div");
  div.classList.add("card", "book");
  div.dataset.readStatus = read;

  div.innerHTML = `
  <div class="card-wrap">
    <div class="book__name">
      <h2 class="book__title">${title}</h2>
      <h3 class="book__series__title">${series ? series : ""}</h3>
    </div>

    <div class="book__details">
      <span class="author">
        <p>Author:</p>
        <p>${author}</p>
      </span>
      <span class="pages">
        <p>Pages:</p>
        <p>${pages}</p>
      </span>
      <span class="status">
        <p>${read ? "read" : "unread"}</p>
      </span>
    </div>

    <div class="stripe"></div>
  </div>
  <div class="actions">
    <span
      class="material-symbols-outlined vague"
      data-tooltip='${read ? "read" : "unread"}'
      title='${read ? "read" : "unread"}'>
      ${read ? "auto_stories" : "book_2"}  
    </span>
    <!-- <span class="material-symbols-outlined">auto_stories</span> 
    -->
    <span
      class="material-symbols-outlined vague"
      data-tooltip="Bookmark"
      title="bookmark">
      bookmark
    </span>
    <span
      class="material-symbols-outlined vague"
      data-tooltip="delete book"
      title="delete">
      delete
    </span>
  </div>
  `;

  myLibrary.push(div);
  console.log(myLibrary);
}

function renderBook() {
  myLibrary.forEach((book) => {
    cardArray.append(book);
  });
}

console.log(myLibrary);
