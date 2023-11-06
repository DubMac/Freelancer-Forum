/* State */
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
  
  // No need for addShapeIntervalId or addShape function here since we are not adding freelancers periodically
  
  render(); 
  
  /* Update the DOM to reflect the current state. */
function render() {
    const freelancerTable = document.querySelector("#freelancerTable");
    const averagePrice = freelancers.reduce((acc, { price }) => acc + price, 0) / freelancers.length;
  
    // Create the header row
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `<th>Name</th><th>Occupation</th><th>Starting Price</th>`;
    freelancerTable.appendChild(headerRow);
  
    // Add freelancer rows
    freelancers.forEach((freelancer) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${freelancer.name}</td><td>${freelancer.occupation}</td><td>$${freelancer.price}</td>`;
      freelancerTable.appendChild(row);
    });
  
    // Display average starting price
    const averagePriceDisplay = document.querySelector("#averagePrice");
    averagePriceDisplay.textContent = `The average starting price is $${averagePrice.toFixed(2)}.`;
  }
  
  
