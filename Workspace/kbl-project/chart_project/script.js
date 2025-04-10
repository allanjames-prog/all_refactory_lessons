fetch("data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const labels = jsonData.map((entry) => entry.Month);

    const lineChartDatasets = [
      { label: "Line 1", data: jsonData.map(e => e["Line 1"]), borderColor: "rgba(255, 99, 132, 1)", backgroundColor: "rgba(255, 99, 132, 0.2)", borderWidth: 2, tension: 0.4 },
      { label: "Line 2", data: jsonData.map(e => e["Line 2"]), borderColor: "rgba(54, 162, 235, 1)", backgroundColor: "rgba(54, 162, 235, 0.2)", borderWidth: 2, tension: 0.4 },
      { label: "Line 3", data: jsonData.map(e => e["Line 3"]), borderColor: "rgba(75, 192, 192, 1)", backgroundColor: "rgba(75, 192, 192, 0.2)", borderWidth: 2, tension: 0.4 },
      { label: "Line 4", data: jsonData.map(e => e["Line 4"]), borderColor: "rgba(153, 102, 255, 1)", backgroundColor: "rgba(153, 102, 255, 0.2)", borderWidth: 2, tension: 0.4 },
      { label: "Line 5", data: jsonData.map(e => e["Line 5"]), borderColor: "rgba(255, 159, 64, 1)", backgroundColor: "rgba(255, 159, 64, 0.2)", borderWidth: 2, tension: 0.4 }
    ];

    const barChartDatasets = ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"].map((line, index) => ({
      label: line,
      data: jsonData.map(entry => entry[line]),
      backgroundColor: `rgba(${index * 50}, ${100 + index * 30}, ${200 - index * 40}, 0.7)`
    }));

    // Line Chart
    new Chart(document.getElementById("myChart").getContext("2d"), {
      type: "line",
      data: { labels, datasets: lineChartDatasets },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          tooltip: { enabled: true },
        },
        scales: { y: { beginAtZero: true } },
      },
    });

    // Bar Chart
    new Chart(document.getElementById("barChart").getContext("2d"), {
      type: "bar",
      data: { labels, datasets: barChartDatasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top" }
        },
        scales: {
          x: { stacked: true },
          y: { stacked: true }
        }
      }
    });

  })
  .catch(error => console.error("Error loading data:", error));
