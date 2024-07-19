var json_data = {
  mode: "transformer",
  num_colors: 4,
  temperature: "1.2",
  num_results: 5,
  adjacency: [
    "0",
    "65",
    "45",
    "35",
    "65",
    "0",
    "35",
    "65",
    "45",
    "35",
    "0",
    "35",
    "35",
    "65",
    "35",
    "0",
  ],
  palette: ["-", "-", "-", "-"],
};
let color;
async function gencolor() {
  const response = await fetch("https://api.huemint.com/color", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(json_data),
  });
  const data = await response.json();
  for (let i = 0; i < 4; i++) {
    document.querySelectorAll(".column")[i].style.backgroundColor =
      data.results[0].palette[i];
  }
}
gencolor();
