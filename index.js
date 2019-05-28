//Make an SVG Container
let svgContainer = d3
  .select("body")
  .append("svg")
  .attr("width", 1400)
  .attr("height", 1200);

let rectangle = svgContainer
  .append("rect")
  .attr("x", 90)
  .attr("y", 10)
  .attr("width", 1200)
  .attr("height", 600)
  .attr("fill", "green")
  .attr("stroke", "black")
  .attr("stroke-width", 2);

let mainOutline = svgContainer
  .append("rect")
  .attr("x", 110)
  .attr("y", 30)
  .attr("width", 1160)
  .attr("height", 570)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let pkCircle = svgContainer
  .append("circle")
  .attr("cx", 700)
  .attr("cy", 230)
  .attr("r", 150)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let topMiniReactable = svgContainer
  .append("rect")
  .attr("x", 615)
  .attr("y", 20)
  .attr("width", 150)
  .attr("height", 10)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let penaltyBox = svgContainer
  .append("rect")
  .attr("x", 340)
  .attr("y", 30)
  .attr("width", 700)
  .attr("height", 300)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let goalBox = svgContainer
  .append("rect")
  .attr("x", 515)
  .attr("y", 30)
  .attr("width", 350)
  .attr("height", 100)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

//for the data points
d3.json("goalData.json", function(data) {
  Object.values(data.players).forEach(player => {
    player.forEach(goal => {
      console.log(goal);
      let x = goal.position[0];
      let y = goal.position[1];
      let goal1 = svgContainer
        .append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 5)
        .attr("stroke", "white")
        .attr("fill", "red")
        .attr("stroke-width", 2)
        .on("mouseover", function(d) {
          goal1.attr("fill", "green").attr("r", 8);
        })
        .on("mouseout", function(d) {
          goal1.attr("fill", "red").attr("r", 5);
        })
        .on("click", function(d) {
          let penaltyBox = svgContainer
            .append("rect")
            .attr("x", 100)
            .attr("y", 700)
            .attr("width", 1000)
            .attr("height", 300)
            .attr("stroke", "black")
            .attr("fill", "white")
            .attr("stroke-width", 2);

          let oppHeader = svgContainer
            .append("text")
            .attr("x", 150)
            .attr("y", 800)
            .text("Opponent:");

          let opponent = svgContainer
            .append("text")
            .attr("x", 250)
            .attr("y", 800)
            .text(goal.opponent);

          let homeVal = "Away";

          if (goal.home === true) {
            homeVal = "Home";
          }

          let home = svgContainer
            .append("text")
            .attr("x", 250)
            .attr("y", 820)
            .text(homeVal);

          let goalTime = svgContainer
            .append("text")
            .attr("x", 250)
            .attr("y", 840)
            .text(goal.time)
            .attr("fill", "green");

          let gifGoal = svgContainer
            .append("image")
            .attr("xlink:href", goal.gif)
            .attr("x", 450)
            .attr("y", 720);
        });
    });
  });
});
