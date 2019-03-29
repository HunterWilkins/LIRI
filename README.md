# LIRI

LIRI is a Language Interpretation and Recognition Interface that responds to four different commands.
![GitHub Logo](/screenshot/LIRI Showcase Screenshot.png)
Format: ![Screenshot](https://raw.githubusercontent.com/HunterWilkins/LIRI/master/screenshot/LIRI%20Showcase%20Screenshot.png)
As you can see, the four commands work like so:

movie-this takes the next argument (presumably a movie), looks through the omdb api, and returns the full name
of the movie, the year it was made, the country it was made in, the plot synopsis, and the actors who starred
in it.

concert-this takes the next argument in the line and plugs it into the bandsintown api. The api then gives back 
the date, location, and venue name of the first event in the results.

spotify-this-song takes the next argument (presumably a song), looks through the spotify api, and returns the
album the song's from, the full name of the song, and a link to preview the song on spotify.

Finally, do-what-it-says accesses a file in the main project folder called random.txt, takes the 
information before the comma, uses it as one of the four commands, takes the information after the comma, and
applies it to whatever function the preceding command is associated with.
