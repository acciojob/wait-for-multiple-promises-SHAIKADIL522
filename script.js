//your JS code here. If required.
const output = document.getElementById("output");

// Step 1: Show Loading
const loadingRow = document.createElement("tr");
loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
output.appendChild(loadingRow);

// Step 2: Create Promise function
function createPromise() {
  const time = Math.random() * 2 + 1;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}

// Step 3: Create 3 promises
const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

// Step 4: Wait for all promises
Promise.all([promise1, promise2, promise3])
  .then((values) => {
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

    // Add total row
    const totalTime = Math.max(...values);
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
      <td><strong>Total</strong></td>
      <td>${totalTime.toFixed(3)}</td>
    `;
    output.appendChild(totalRow);
  });
