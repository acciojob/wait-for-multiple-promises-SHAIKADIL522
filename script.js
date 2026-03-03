const output = document.getElementById("output");

// --------------------
// Step 1: Add Loading Row (with required id)
// --------------------
const loadingRow = document.createElement("tr");
loadingRow.id = "loading";
loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
output.appendChild(loadingRow);

// --------------------
// Step 2: Promise Creator Function
// --------------------
function createPromise() {
  const time = Math.random() * 2 + 1; // random between 1–3 seconds

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}

// --------------------
// Step 3: Start Timer BEFORE promises
// --------------------
const startTime = performance.now();

// Create 3 promises
const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

// --------------------
// Step 4: Wait for all promises
// --------------------
Promise.all([promise1, promise2, promise3]).then((values) => {
  
  // Calculate REAL elapsed time
  const endTime = performance.now();
  const totalTime = (endTime - startTime) / 1000;

  // Remove loading row
  output.innerHTML = "";

  // Add rows for each promise
  values.forEach((time, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${time.toFixed(3)}</td>
    `;
    output.appendChild(row);
  });

  // Add Total row (real elapsed time)
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${totalTime.toFixed(3)}</td>
  `;
  output.appendChild(totalRow);
});