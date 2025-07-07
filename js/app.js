const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");
const totalDisplay = document.getElementById("totalDisplay");
const totalInput = document.getElementById("totalInput");
const openModalBtn = document.getElementById("open-modal-btn");
const transactionForm = document.getElementById("new-transaction");
const modal = document.getElementById("modal");
const transactionsSection = document.getElementById("transactionsSection");
const addTransaction = document.getElementById("add-transaction");

// Edycja zakresu budżetu
editBtn.addEventListener("click", () => {
  totalDisplay.style.display = "none";
  totalInput.style.display = "inline";
  editBtn.style.display = "none";
  saveBtn.style.display = "inline";
});

window.addEventListener("DOMContentLoaded", updateProgressBar);

// Zapis nowego zakresu budżetu
saveBtn.addEventListener("click", () => {
  const newValue = parseInt(totalInput.value);
  if (!isNaN(newValue) && newValue > 0) {
    totalDisplay.textContent = `${newValue}zł`;
    updateProgressBar();
  }

  totalDisplay.style.display = "inline";
  totalInput.style.display = "none";
  editBtn.style.display = "inline";
  saveBtn.style.display = "none";
});

// Funkcja aktualizująca pasek budżetu
function updateProgressBar() {
  const current = document.getElementById("current");
  const total = document.getElementById("totalDisplay");
  const bar = document.getElementById("prog");

  const currentValue = parseInt(current.textContent.replace("zł", "").trim());
  const totalValue = parseInt(total.textContent.replace("zł", "").trim());

  if (!isNaN(currentValue) && !isNaN(totalValue) && totalValue > 0) {
    const percent = Math.min((currentValue / totalValue) * 100, 100);
    bar.style.width = `${percent}%`;
  }
}

// Dodanie nowej transakcji
function openNewTransaction() {
  openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    transactionForm.style.display = "block";
  });
}

openNewTransaction();
