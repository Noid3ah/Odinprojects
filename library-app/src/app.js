const openButton = document.querySelector("[data-open-modal]");
const submitAndClose = document.querySelector("[data-close-modal]");
const cancelButton = document.querySelector("[data-cancel-modal]");
const modal = document.querySelector("[data-modal]");

const form = document.getElementById("book-form");
const title = form.querySelector("#title");
const author = form.querySelector("#author");
const pages = form.querySelector("#pages");
const checkbox = form.querySelector("#read");

const cardArray = document.querySelector(".card-grid");

function resetFields() {
  title.value = "";
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

  addBookToLibrary(
    new Book(title.value, author.value, pages.value, checkbox.checked)
  );
  modal.close();
  resetFields();
});

const myLibrary = Array.from(cardArray.children);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

console.log(myLibrary);
