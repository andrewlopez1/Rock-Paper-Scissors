"use strict"

function RPS(portval) {

    this.playerinput = undefined;
    this.serverinput = undefined;
    this.pwins = 0;
    this.swins = 0;
    this.gamesplayed = 0;
    this.winlossmsg = undefined;

    const express = require("express");

    // Needed to parse the request body
    const bodyParser = require("body-parser");
    const app     = express();
    app.set('view engine','ejs'); //this is needed to use ejs
    app.listen(portval);

    app.use(bodyParser.urlencoded({ extended: true })); 

    // Handles the sending of the index
    app.get("/", function(req, res){
	
	    res.sendFile(__dirname + "/rps.html");
    });



    app.post("/gamescript", function(req, res) {

    if (req.body.value === "rock"){
        playerinput = 1;
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
    if (req.body.value === "paper"){
        playerinput = 2;
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
    if (req.body.value === "scissors"){
        playerinput = 3;
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

    });

}



  
  let myGame = new RPS(3000);
