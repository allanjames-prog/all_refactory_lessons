fetch("data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const labels = jsonData.map((entry) => entry.Month);
    const datasets = [
      { label: "Line 1", data: jsonData.map(e => e["Line 1"]), borderColor: "rgba(255, 99, 132, 1)", backgroundColor: "rgba(255, 99, 132, 0.2)", borderWidth: 2, tension: 0.4 },
      { label: "Line 2", data: jsonData.map(e => e["Line 2"]), borderColor: "rgba(54, 162, 235, 1)", backgroundColor: "rgba(54, 162, 235, 0.2)", borderWidth: 2, tension: 0.4 },
      { label: "Line 3", data: jsonData.map(e => e["Line 3"]), borderColor: "rgba(75, 192, 192, 1)", backgroundColor: "rgba(75, 192, 192, 0.2)", borderWidth: 2, tension: 0.4 },
      { label: "Line 4", data: jsonData.map(e => e["Line 4"]), borderColor: "rgba(153, 102, 255, 1)", backgroundColor: "rgba(153, 102, 255, 0.2)", borderWidth: 2, tension: 0.4 },
      { label: "Line 5", data: jsonData.map(e => e["Line 5"]), borderColor: "rgba(255, 159, 64, 1)", backgroundColor: "rgba(255, 159, 64, 0.2)", borderWidth: 2, tension: 0.4 }
    ];

    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: { labels, datasets },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          tooltip: { enabled: true },
        },
        scales: { y: { beginAtZero: true } },
      },
    });
  })
  .catch(error => console.error("Error loading data:", error));
