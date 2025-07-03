const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");
const totalDisplay = document.getElementById("totalDisplay");
const totalInput = document.getElementById("totalInput");

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
