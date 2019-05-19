//Make an SVG Container
var svgContainer = d3
  .select("body")
  .append("svg")
  .attr("width", 1400)
  .attr("height", 600);

var rectangle = svgContainer
  .append("rect")
  .attr("x", 90)
  .attr("y", 10)
  .attr("width", 1200)
  .attr("height", 600)
  .attr("fill", "green")
  .attr("stroke", "black")
  .attr("stroke-width", 2);

var mainOutline = svgContainer
  .append("rect")
  .attr("x", 110)
  .attr("y", 30)
  .attr("width", "1160")
  .attr("height", "900")
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

var pkCircle = svgContainer
  .append("circle")
  .attr("cx", 700)
  .attr("cy", 230)
  .attr("r", 150)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

var topMiniReactable = svgContainer
  .append("rect")
  .attr("x", 615)
  .attr("y", 20)
  .attr("width", 150)
  .attr("height", 10)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

var penaltyBox = svgContainer
  .append("rect")
  .attr("x", 340)
  .attr("y", 30)
  .attr("width", 700)
  .attr("height", 300)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

var goalBox = svgContainer
  .append("rect")
  .attr("x", 515)
  .attr("y", 30)
  .attr("width", 350)
  .attr("height", 100)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

d3.json("goalData.json", function(data) {
  //   Object.values(data.players).forEach(player => {
  //     player.forEach(goal => {
  //       console.log(goal.position);
  //     });
  //   });
  console.log(data.players.MohamedSalah[0].position[0]);
  console.log(data.players.MohamedSalah[0].position[1]);
  //   debugger;
  var goal1 = svgContainer
    .append("circle")
    .attr("cx", data.players.MohamedSalah[21].position[0])
    .attr("cy", data.players.MohamedSalah[21].position[1])
    .attr("r", 5)
    .attr("stroke", "white")
    .attr("fill", "red")
    .attr("stroke-width", 2);

  //   var goal2 = svgContainer
  //     .append("circle")
  //     .attr("cx", data.players.MohamedSalah[1].position[0])
  //     .attr("cy", data.players.MohamedSalah[1].position[1])
  //     .attr("r", 5)
  //     .attr("stroke", "white")
  //     .attr("fill", "blue")
  //     .attr("stroke-width", 2)
  //     .on("hover", function(data) {
  //       circle.style("fill", "white");
  //     });
});
