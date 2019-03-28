require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var inquirer = require("inquirer");
var fs = require("fs");
moment().format();

var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy"

var input = process.argv.slice(3);


var command = process.argv[2];

if (command === "movie-this"){
    movieThis(input);
}

else if (command === "concert-this"){
   concertThis(input);
}

else if (command === "spotify-this-song"){
    spotifyThis(input);
}

else if (command === "do-what-it-says"){
    fs.readFile("random.txt", "utf8", function(error, data){
        var dataArray = data.split(",");
    
        if (error){
            return console.log(error);
        }
        console.log(data);
        console.log(dataArray[1]);
      
        if (dataArray[0] === "movie-this"){
            movieThis(dataArray[1]);
        }
        else if (dataArray[0] === "concert-this"){
            concertThis(dataArray[1]);
        }
        else if (dataArray[0] === "spotify-this-song"){
            spotifyThis(dataArray[1]);
        }
    });
}

function movieThis(input){
    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy"
    axios.get(queryUrl).then(function(response){
        console.log(response.data.Title);
        console.log(response.data.Year);
        console.log(response.data.Plot);
        console.log(response.data.Actors);
        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
    });
}

function concertThis(input){
    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(function(response, err){
    
        if (response.data[0] === undefined){
            console.log("Sorry, couldn't find any information.");
        }

        else {
            // console.log(response.data.lineup[0]);
            console.log("Event Date: " + moment(response.data[0].datetime).format("MM DD YY"));
            console.log("City: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
            console.log("Venue Name: " + response.data[0].venue.name);
        }
    });
}

function spotifyThis(input){
    spotify.search({
        type:"track",
        query: input
    }).then(function(response){
        console.log("Album: " + response.tracks.items[0].album.name);
        console.log("Name: " + response.tracks.items[0].name + " by " + response.tracks.items[0].artists[0].name);
        console.log("Preview Link: " + response.tracks.items[0].preview_url);
    });
}

