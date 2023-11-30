const search = document.querySelector(".search input");

const openButton = document.querySelector("[data-open-modal]");
const submitAndClose = document.querySelector("[data-close-modal]");
const cancelButton = document.querySelector("[data-cancel-modal]");
const modal = document.querySelector("[data-modal]");
const bookDeleteModal = document.querySelector("[data-confirm-delete-modal]");
const confirmDelete = document.querySelector("[data-confirm-delete]");
const cancelDelete = document.querySelector("[data-cancel-delete]");

const favoritesBtn = document.querySelector(".show-favorites");
const favoritesTab = document.querySelector(".favorites-container");
const closeFavoritesTabBtn = favoritesTab.querySelector(".close");

const form = document.getElementById("book-form");
const title = form.querySelector("#title");
const series = form.querySelector("#series");
const author = form.querySelector("#author");
const pages = form.querySelector("#pages");
const checkbox = form.querySelector("#read");

const favoritesList = favoritesTab.querySelector(".favorites__list");
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
  renderBook(myLibrary);
  resetFields();
});

const myLibrary = Array.from(cardArray.children);
const favoritesArray = Array.from(favoritesList.children);

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
      <h2 class="book__title title" data-title>${title}</h2>
      <h3 class="book__series__title series" data-series>${
        series ? series : ""
      }</h3>
    </div>

    <div class="book__details">
      <span class="author">
        <p>Author:</p>
        <p data-author>${author}</p>
      </span>
      <span class="pages">
        <p>Pages:</p>
        <p>${pages}</p>
      </span>
      <span class="status">
        <p class="${read ? "read" : ""}">${read ? "read" : "unread"}</p>
      </span>
    </div>

    <div class="stripe"></div>
  </div>
  <div class="actions">

    <span
      class="material-symbols-outlined vague ${read ? "read" : ""}"
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
      star
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

function renderBook(library) {
  library.forEach((book) => {
    book.style.opacity = 0;

    cardArray.prepend(book);

    const allBooks = cardArray.querySelectorAll(".card");

    setTimeout(() => {
      allBooks.forEach((book) => {
        book.style.opacity = 1;
      });
    }, 100);
  });
}

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
    handleFavorite(card, target);
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
  statusText.classList.toggle("read");

  target.textContent = readStatus === "false" ? "auto_stories" : "book_2";
  target.classList.toggle("read");
}

function handleFavorite(card, target) {
  const bookmarkIcon = target;
  const marked = card.dataset.marked;
  card.dataset.marked = marked === "true" ? "false" : "true";
  bookmarkIcon.classList.toggle("favorite");

  if (marked === "false") target.textContent = "hotel_class";
  else target.textContent = "star";

  target.classList.toggle("fill");

  renderFavorite(card);
}

function createFavorite() {}

function renderFavorite(card) {
  const favoritesList = favoritesTab.querySelector(".favorites__list");
  const bookTitle = card.querySelector(".book__title").textContent;

  const isFavorite = Array.from(favoritesList.children).some((item) => {
    const favoriteItemTitle =
      item.querySelector("span:first-child").textContent;
    return favoriteItemTitle === bookTitle;
  });

  if (!isFavorite) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${
      card.querySelector(".book__title").textContent
    }</span>
    <span class="material-symbols-outlined">more_vert</span>`;

    favoritesArray.push(li);
    favoritesList.prepend(li);
  }
}

function shouldDelete(card) {
  confirmDelete.addEventListener("click", () => {
    // Remove the card from the DOM
    card.remove();

    // Remove it from the array as well
    const index = myLibrary.indexOf(card);
    if (index !== -1) {
      myLibrary.splice(index, 1);
    }
    bookDeleteModal.close();
  });

  cancelDelete.addEventListener("click", () => {
    bookDeleteModal.close();
  });
}

function handleBookRemoval(card) {
  bookDeleteModal.showModal();
  shouldDelete(card);
}

favoritesBtn.addEventListener("click", () => {
  favoritesTab.classList.add("show");
});

closeFavoritesTabBtn.addEventListener("click", () => {
  favoritesTab.classList.remove("show");
});

function resetBooks() {
  cardArray.innerHTML = "";
}

search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const searchTerm = document.querySelector(".term");

  if (value) {
    const filteredBooks = myLibrary.filter((item) =>
      item
        .querySelector(`[data-${filter.value}]`)
        .textContent.toLowerCase()
        .includes(value)
    );

    if (filteredBooks.length > 0) {
      searchTerm.textContent = `"${value}"`;
      resetBooks();
      renderBook(filteredBooks);
    } else {
      searchTerm.textContent = `No results found for "${value}"`;
      resetBooks();
    }
  } else {
    searchTerm.textContent = "All books";
    resetBooks();
    renderBook(myLibrary);
  }
});

const filter = document.querySelector("#filter");

filter.addEventListener("change", (e) => {
  search.value = "";
  resetBooks();
  renderBook(myLibrary);
});
