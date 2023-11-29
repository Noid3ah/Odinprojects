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
}

function createBook(book) {
  const { title, series, author, pages, read } = book;
  const div = document.createElement("div");
  div.classList.add("card", "book");
  div.dataset.readStatus = read;
  div.dataset.marked = false;

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
      data-action='status'
      title='${read ? "read" : "unread"}'>
      ${read ? "auto_stories" : "book_2"}
    </span>

    <span
      class="material-symbols-outlined vague"
      data-tooltip="Bookmark"
      data-action='bookmark'
      title="bookmark">
      heart_plus
    </span>

    <span
      class="material-symbols-outlined vague"
      data-tooltip="delete book"
      data-action='remove'
      title="delete">
      delete
    </span>
    
  </div>
  `;

  myLibrary.push(div);
}

function renderBook() {
  myLibrary.forEach((book) => {
    cardArray.append(book);
  });
}

function handleBookStatusOnRender() {}

// When new book is added and status is read - add classes for color change
// When toggled - toggle classes for color change
//

cardArray.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  const target = e.target;
  if (!card) return;

  // ( Read || Unread ) button logic
  if (e.target.matches("[data-action='status']")) {
    handleBookStatus(card, target);
  }

  // Bookmark button logic
  if (e.target.matches("[data-action='bookmark']")) {
    handleBookmark(card, target);
  }

  // Delete button logic
  if (e.target.matches("[data-action='remove']")) {
    handleBookRemoval(card);
  }
});

function handleBookStatus(card, target) {
  const statusText = card.querySelector(".status p");
  const readStatus = card.dataset.readStatus;
  card.dataset.readStatus = readStatus === "true" ? "false" : "true";

  statusText.textContent = readStatus === "true" ? "unread" : "read";
  statusText.classList.toggle("bookmarked");

  target.textContent = readStatus === "false" ? "auto_stories" : "book_2";
  target.classList.toggle("bookStatus");
}

function handleBookmark(card, target) {
  const bookmarkIcon = target;
  const marked = card.dataset.marked || true;
  card.dataset.marked = marked === "true" ? "false" : "true";
  bookmarkIcon.classList.toggle("bookmarked");

  if (marked === "false") target.textContent = "bookmark_remove";
  else target.textContent = "bookmark_add";

  target.classList.toggle("fill");
}

function handleBookRemoval(card) {
  const shouldDelete = confirm("Are you sure you want to delete this book?");
  if (shouldDelete) {
    // Remove the card from the DOM
    card.remove();

    // Remove it from the array as well
    const index = myLibrary.indexOf(card);
    if (index !== -1) {
      myLibrary.splice(index, 1);
    }
  }
}
