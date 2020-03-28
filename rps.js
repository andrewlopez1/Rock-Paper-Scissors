"use strict"

function RPS(portval) {
    "use strict"

    let playerinput;
    let playerinputstring;
    let serverinput;
    let serverinputstring;
    let pwins = 0;
    let swins = 0;
    let gamesplayed = 0;
    let winlossmsg;

    const express = require("express");

    // Needed to parse the request body
    const bodyParser = require("body-parser");
    const app     = express();
    app.set('view engine','ejs'); //this is needed to use ejs
    app.listen(portval);

    app.use(bodyParser.urlencoded({ extended: true }));

    // Handles the sending of the index
    app.post("/", function(req, res){
	
	    res.sendFile(__dirname + "/rps.html");
    });
    app.get("/", function(req, res){
	
	    res.sendFile(__dirname + "/rps.html");
    });



    app.post("/gamescript", function(req, res) {
        "use strict"
        //console.log("check 1");
       // console.log(req.body["choice"]);

    if (req.body["choice"] === "rock"){
        //console.log("check 2");
        playerinput = 1;
        playerinputstring = req.body["choice"];
        serverinput = Math.floor((Math.random() * 3) +1 );
        if (serverinput === 1){
            winlossmsg = "It was a Tie";
        }
        else if (serverinput === 2){
            winlossmsg = "You lose";
            swins++;
        }
        else if (serverinput === 3){
            winlossmsg = "You win";
            pwins++;
        }
        gamesplayed++; 
    }
    if (req.body["choice"] === "paper"){
        //console.log("check 3");
        playerinput = 2;
        playerinputstring = req.body["choice"];
        serverinput = Math.floor((Math.random() * 3) +1 );
        if (serverinput === 2){
            winlossmsg = "It was a Tie";
        }
        else if (serverinput === 3){
            winlossmsg = "You lose";
            swins++;
        }
        else if (serverinput === 1){
            winlossmsg = "You win";
            pwins++;
        }
        gamesplayed++;
    }
    if (req.body["choice"] === "scissors"){
        //console.log("check 4");
        playerinput = 3;
        playerinputstring = req.body["choice"];
        serverinput = Math.floor((Math.random() * 3) +1 );
        if (serverinput === 3){
            winlossmsg = "It was a Tie";
        }
        else if (serverinput === 1){
            winlossmsg = "You lose";
            swins++;
        }
        else if (serverinput === 2){
            winlossmsg = "You win";
            pwins++;
        }
        gamesplayed++;
    }
    //console.log("check 5");
    if (serverinput === 1){
        serverinputstring = "rock";
    }
    if (serverinput === 2){
        serverinputstring = "paper";
    }
    if (serverinput === 3){
        serverinputstring = "scissors";
    }

    //console.log("check 6");
    //console.log(winlossmsg,playerinputstring,serverinputstring,pwins,swins,gamesplayed);
    res.render("rps", {winlossmsg,playerinputstring,serverinputstring,pwins,swins,gamesplayed});
    });

}



  
    let myGame = new RPS(3000);
    Object.seal(myGame);