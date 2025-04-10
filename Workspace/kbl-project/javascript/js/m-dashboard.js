const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line", // specify the type of chart
  data: {
    labels: [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ], // X-axis labels
    datasets: [
      {
        label: "Line 1",
        data: [12, 19, 3, 5, 2, 3, 13, 17, 9, 14, 6, 11], // Data for Line 1
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 1,
        tension: 0.4, // Makes the line curved
      },
      {
        label: "Line 2",
        data: [22, 29, 13, 15, 22, 23, 19, 25, 20, 24, 18, 22], // Data for Line 2
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 1,
        tension: 0.4,
      },
      {
        label: "Line 3",
        data: [32, 29, 23, 25, 32, 33, 29, 34, 31, 33, 27, 30], // Data for Line 3
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 1,
        tension: 0.4,
      },
      {
        label: "Line 4",
        data: [42, 49, 33, 35, 42, 43, 39, 44, 40, 45, 38, 41], // Data for Line 4
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderWidth: 1,
        tension: 0.4,
      },
      {
        label: "Line 5",
        data: [52, 59, 43, 45, 52, 53, 49, 54, 50, 55, 48, 51], // Data for Line 5
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderWidth: 1,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
