# Path finding algorithm

I have set up a project, whereby you have a set of stars. My goal is that you click on one star, and then another, and then a visual explosion happens, ending when the shortest path is found from one star to the other. Then along that path a thin white line appears (representing the line in a constellation).

I have chosen Dijstra (preferable bi directional and diagonal).

A useful tool was [this site](https://qiao.github.io/PathFinding.js/visual/), which allowed me to test which algorithm would give me the visual effect I was after.

Another useful tool was the tutorial for the A* algorithm, using p5 by [The Coding Train](https://www.youtube.com/watch?v=aKYlikFAV4k). Although the algorithm and structures were not what I was after, I found it a useful starting off point to get my head wrapped around how I wanted to execute this.

[This](https://www.youtube.com/watch?v=XMFyd0mvvuU) was also a useful explanation of the algorithm.



## diagonal

When the formula is complete, I added an additional functionality to allow for diagonal search. This means that when the search for 'neighbours' occurs, it also searches for diagonal neighbours, not just top, right, bottom, left. The issue I was having, was that I was assigning the weight to all as 1, because I knew I was using a single unit grid to search- not a more detailed graph. However with diagonals, if you want to affect the shape of the search, you need to adjust the weight given to those diagonal nodes. I ended up using a public variable to assign the weight, and by doing this allowing the user to adjust it to create different patterns on the screen.

Special thanks to [this](http://drewgarrido.github.io/mappergame/) repo, for demonstrating the effect of the diagonal weight so I could identify that was the issue I was having.

note: with the weight of 1 assigned, as I had automatically done, you get the shape of a square. 
