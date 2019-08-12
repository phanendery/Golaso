var selector; //global variable
document.addEventListener("DOMContentLoaded", () => {
  selector = document.getElementById("player"); //only works after the page loads
  plotData();
  selector.onchange = plotData;
  d3.select("svg > circle.plotPoint").dispatch("click"); //ASK ETHAN FOR HELP
});

//Make an SVG Container
let svgContainer = d3
  .select("body")
  .append("svg")
  .attr("width", 1100)
  .attr("height", 610);

let rectangle = svgContainer
  .append("rect")
  .attr("x", 0) //starts at 40
  .attr("y", 30)
  .attr("width", 820)
  .attr("height", 300) //530
  .attr("fill", "green")
  .attr("stroke", "black")
  .attr("stroke-width", 2);

let mainOutline = svgContainer
  .append("rect")
  .attr("x", 10)
  .attr("y", 50)
  .attr("width", 800)
  .attr("height", 270)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let pkCircle = svgContainer
  .append("circle")
  .attr("cx", 420) //used to be 460
  .attr("cy", 165)
  .attr("r", 80)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let topMiniReactable = svgContainer
  .append("rect")
  .attr("x", 360) //410
  .attr("y", 40)
  .attr("width", 100)
  .attr("height", 10)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let penaltyBox = svgContainer
  .append("rect")
  .attr("x", 205) //237.5
  .attr("y", 50)
  .attr("width", 410)
  .attr("height", 170)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let goalBox = svgContainer
  .append("rect")
  .attr("x", 300) //345
  .attr("y", 50)
  .attr("width", 220)
  .attr("height", 60)
  .attr("stroke", "white")
  .attr("fill", "green")
  .attr("stroke-width", 2);

let infoText1 = svgContainer
  .append("text")
  .attr("x", 840)
  .attr("y", 40)
  .text("Welcome to Golaso! This is a interactive")
  .attr("font-family", "Darker Grotesque")
  .attr("font-size", 18);

let infoText2 = svgContainer
  .append("text")
  .attr("x", 840)
  .attr("y", 60)
  .text(
    "soccer field that displays the top soccer" // players' goals. Click on the points to explore!
  )
  .attr("font-family", "Darker Grotesque")
  .attr("font-size", 18);

let infoText3 = svgContainer
  .append("text")
  .attr("x", 840)
  .attr("y", 80)
  .text("players' goals. Select a player and then")
  .attr("font-family", "Darker Grotesque")
  .attr("font-size", 18);

let infoText4 = svgContainer
  .append("text")
  .attr("x", 840)
  .attr("y", 100)
  .text("explore the field!")
  .attr("font-family", "Darker Grotesque")
  .attr("font-size", 18);

//for the data points
const plotData = () => {
  d3.selectAll("svg > circle.plotPoint").remove();
  d3.json("goalData.json", function(data) {
    Object.values(data.players).forEach(player => {
      player.forEach(goal => {
        let color = "red";
        if (goal.name === selector.value) {
          let x = goal.position[0];
          let y = goal.position[1];
          let goal1 = svgContainer
            .append("circle")
            .attr("class", "plotPoint")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", 5)
            .attr("stroke", "white")
            .attr("fill", color)
            .attr("stroke-width", 2)
            .on("mouseover", function(d) {
              goal1.attr("fill", "#19bf0a").attr("r", 8);
            })
            .on("mouseout", function(d) {
              goal1.attr("fill", color).attr("r", 5);
            })
            .on("click", function(d) {
              goal1.attr("fill", "#19bf0a").attr("r", 8);
              let dataBox = svgContainer
                .append("rect")
                .attr("x", 481)
                .attr("y", 341)
                .attr("width", 339)
                .attr("height", 269)
                .attr("stroke", "black")
                .attr("fill", "#b2ebab") //CHANGE DATABOX BACKGROUND
                .attr("stroke-width", 2);

              let playerDescription = svgContainer
                .append("rect")

                .attr("x", 840) //345
                .attr("y", 150)
                .attr("width", 258)
                .attr("height", 500)
                .attr("stroke", "black")
                .attr("fill", "white")
                .attr("stroke-width", 2)
                .attr("fill","#b2ebab");

              let playerText = svgContainer
                .append("foreignObject")
                .text(playersD[goal.name])
                .attr("id", "description")
                .attr("x", 845)
                .attr("y", 160)
                .attr("width", 250)
                .attr("height", 480)
                .attr("font-family", "Roboto Condensed, sans-serif");

              let oppHeader = svgContainer
                .append("text")
                .attr("x", 510)
                .attr("y", 390)
                .text("Opponent:")
                .attr("font-family", "Comfortaa, cursive")
                .attr("font-size", 14)
                .attr("text-decoration", "underline");

              let playerNameH = svgContainer
                .append("text")
                .attr("x", 660)
                .attr("y", 390)
                .text("Player:")
                .attr("font-family", "Comfortaa, cursive")
                // .attr("font-weight", "bold")
                .attr("font-size", 14)
                .attr("text-decoration", "underline");

              let playerName = svgContainer
                .append("text")
                .attr("x", 680)
                .attr("y", 410)
                .text(goal.name)
                .attr("font-family", "Comfortaa, cursive")
                .attr("font-size", 14);

              let opponent = svgContainer
                .append("text")
                .attr("x", 530)
                .attr("y", 410)
                .text(goal.opponent)
                .attr("font-family", "Comfortaa, cursive")
                .attr("font-size", 14);

              let homeVal = "Away";

              if (goal.home === true) {
                homeVal = "Home";
              }

              let home = svgContainer
                .append("text")
                .attr("x", 510)
                .attr("y", 450)
                .text(homeVal)
                .attr("font-family", "Comfortaa, cursive")
                .attr("font-size", 14)
                .attr("text-decoration", "underline");

              let time = svgContainer
                .append("text")
                .attr("x", 660)
                .attr("y", 450)
                .text("Time:")
                .attr("font-family", "Comfortaa, cursive")
                .attr("font-size", 14)
                .attr("text-decoration", "underline");

              let goalTime = svgContainer
                .append("text")
                .attr("x", 680)
                .attr("y", 470)
                .text(goal.time)
                .attr("fill", "green")
                .attr("font-family", "Comfortaa, cursive")
                .attr("font-size", 14);

              let salah = " https://www.dw.com/image/43516410_303.jpg";
              let mane =
                "https://fadeawayworld.net/wp-content/uploads/2019/03/1134890328.jpg.0.jpg";
              let picLink = "";
              if (goal.name === "Mohamed Salah") {
                picLink = salah;
              } else {
                picLink = mane;
              }

              if (picLink === salah) {
                let playerpic = svgContainer
                  .append("image")
                  .attr("xlink:href", picLink)
                  .attr("x", 480)
                  .attr("y", 500)
                  .attr("height", 100)
                  .attr("width", 200);
              } else {
                let playerpic = svgContainer
                  .append("image")
                  .attr("xlink:href", picLink)
                  .attr("x", 465)
                  .attr("y", 500)
                  .attr("height", 100)
                  .attr("width", 200);
              }

              let liverpool = svgContainer
                .append("image")
                .attr(
                  "xlink:href",
                  "https://upload.wikimedia.org/wikipedia/hif/b/bd/Liverpool_FC.png"
                )
                .attr("x", 640)
                .attr("y", 500)
                .attr("height", 100)
                .attr("width", 200);

              let gifGoal = svgContainer
                .append("image")
                .attr("xlink:href", goal.gif)
                .attr("x", 0)
                .attr("y", 340);
            });
        }
      });
    });
  });
};

playersD = {
  "Sadio Mane":
    "Sadio Mané (born 10 April 1992) is a Senegalese professional footballer who plays as a winger for Premier League club Liverpool and the Senegal national team. Having begun his career with Metz in France, he transferred to Red Bull Salzburg in 2012. After winning the Austrian Bundesliga and Austrian Cup in 2014, he was signed by Southampton.In 2015, Mané set a new Premier League record for the fastest hat - trick when he scored three times in 176 seconds during a 6–1 win over Aston Villa. He transferred to Liverpool in 2016 for a fee of £34 million, making him the most expensive African player in history at that time. Since joining Liverpool, Mané among other achievements scored in the 2018 UEFA Champions League Final.The following season he was joint recipient of the Premier League Golden Boot with 22 goals.",
  "Mohamed Salah":
    "Mohamed Salah Hamed Mahrous Ghaly (Born 15 June 1992) is an Egyptian professional footballer who plays as a forward for Premier League club Liverpool and the Egypt national team. Considered one of the best players in the world, he is known for his finishing, dribbling, and speed. Salah started his senior career with Cairo club El Mokawloon in the Egyptian Premier League in 2010, departing shortly thereafter to join Basel for an undisclosed fee.In Switzerland, he starred as he helped the club win the league in his debut season, winning the SAFP Golden Player Award in the process. Salah's performances then attracted Premier League side Chelsea, and he joined the club for a £11 million fee in 2014. After a brief stint at AS Roma he was bought by Liverpool for then a club record fee of £36.9 million."
};
