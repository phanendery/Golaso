//Make an SVG Container
let svgContainer = d3
  .select("body")
  .append("svg")
  .attr("width", 1500)
  .attr("height", 1200);

let rectangle = svgContainer
  .append("rect")
  .attr("x", 40)
  .attr("y", 10)
  .attr("width", 820)
  .attr("height", 500)
  .attr("fill", "green")
  .attr("stroke", "black")
  .attr("stroke-width", 2);

let mainOutline = svgContainer
  .append("rect")
  .attr("x", 50)
  .attr("y", 30)
  .attr("width", 800)
  .attr("height", 470)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let pkCircle = svgContainer
  .append("circle")
  .attr("cx", 460)
  .attr("cy", 140)
  .attr("r", 100)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let topMiniReactable = svgContainer
  .append("rect")
  .attr("x", 410)
  .attr("y", 20)
  .attr("width", 100)
  .attr("height", 10)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let penaltyBox = svgContainer
  .append("rect")
  .attr("x", 237.5)
  .attr("y", 30)
  .attr("width", 410)
  .attr("height", 170)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let goalBox = svgContainer
  .append("rect")
  .attr("x", 345)
  .attr("y", 30)
  .attr("width", 220)
  .attr("height", 60)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let infoBox = svgContainer
  .append("rect")
  .attr("x", 890)
  .attr("y", 10)
  .attr("width", 550)
  .attr("height", 50)
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("stroke-width", 2);

let infoText = svgContainer
  .append("text")
  .attr("x", 928)
  .attr("y", 30)
  .text("Welcome to Golaso! This is a interactive soccer field that displays")
  .attr("font-family", " Century Gothic,CenturyGothic,AppleGothic,sans-serif");

let infoText1 = svgContainer
  .append("text")
  .attr("x", 928)
  .attr("y", 50)
  .text("the top EPL players goal chart. Click on the points to explore!")
  .attr("font-family", " Century Gothic,CenturyGothic,AppleGothic,sans-serif");

//for the data points
d3.json("goalData.json", function(data) {
  Object.values(data.players).forEach(player => {
    player.forEach(goal => {
      // console.log(goal);
      let color = "red";
      if (goal.name === "Sadio Mane") {
        color = "blue";
      }
      let x = goal.position[0];
      let y = goal.position[1];
      let goal1 = svgContainer
        .append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 5)
        .attr("stroke", "white")
        .attr("fill", color)
        .attr("stroke-width", 2)
        .on("mouseover", function(d) {
          goal1.attr("fill", "green").attr("r", 8);
        })
        .on("mouseout", function(d) {
          goal1.attr("fill", color).attr("r", 5);
        })
        .on("click", function(d) {
          let dataBox = svgContainer
            .append("rect")
            .attr("x", 928)
            .attr("y", 90)
            .attr("width", 524)
            .attr("height", 420)
            .attr("stroke", "black")
            .attr("fill", "white")
            .attr("stroke-width", 2);

          let oppHeader = svgContainer
            .append("text")
            .attr("x", 950)
            .attr("y", 120)
            .text("Opponent:")
            .attr(
              "font-family",
              " Century Gothic,CenturyGothic,AppleGothic,sans-serif"
            );

          let playerNameH = svgContainer
            .append("text")
            .attr("x", 1200)
            .attr("y", 120)
            .text("Player:")
            .attr(
              "font-family",
              " Century Gothic,CenturyGothic,AppleGothic,sans-serif"
            );

          let playerName = svgContainer
            .append("text")
            .attr("x", 1250)
            .attr("y", 145)
            .text(goal.name)
            .attr(
              "font-family",
              " Century Gothic,CenturyGothic,AppleGothic,sans-serif"
            );

          let opponent = svgContainer
            .append("text")
            .attr("x", 990)
            .attr("y", 145)
            .text(goal.opponent)
            .attr(
              "font-family",
              " Century Gothic,CenturyGothic,AppleGothic,sans-serif"
            );

          let homeVal = "Away";

          if (goal.home === true) {
            homeVal = "Home";
          }

          let home = svgContainer
            .append("text")
            .attr("x", 950)
            .attr("y", 165)
            .text(homeVal)
            .attr(
              "font-family",
              " Century Gothic,CenturyGothic,AppleGothic,sans-serif"
            );

          let time = svgContainer
            .append("text")
            .attr("x", 950)
            .attr("y", 190)
            .text("Time:")
            .attr(
              "font-family",
              " Century Gothic,CenturyGothic,AppleGothic,sans-serif"
            );

          let goalTime = svgContainer
            .append("text")
            .attr("x", 990)
            .attr("y", 210)
            .text(goal.time)
            .attr("fill", "green")
            .attr(
              "font-family",
              " Century Gothic,CenturyGothic,AppleGothic,sans-serif"
            );

          let gifGoal = svgContainer
            .append("image")
            .attr("xlink:href", goal.gif)
            .attr("x", 950)
            .attr("y", 230);
        });
    });
  });
});
