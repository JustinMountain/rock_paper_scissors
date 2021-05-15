# rock_paper_scissors
Rock, Paper, Scissors project for The Odin Project

2021-05-15
BUG FOUND: Reaching 5 points in Safari (iOS, not confirmed to checked on macOS) does not stop the playRPS() function

    Post-mortem 
    - I learned a lot from this project. The most difficult thing to figure out was the abort function to stop running the code after 5 points was reached. I was able to get the code working on my machine via FireFox and Chrome and assumed it was done. When I shared this with friends and checked on my iPhone, I discovered that the code does not successfully abort at 5 points. I've decided not to pursue this bug at this time and to move on to the next project, but regardless I felt like it has taught me an invaluable lesson in browser compatibility and bugfixing. 
    - This project also opened my eyes to how powerful element creation can be through JavaScript. I expect that I should prepare more in advance for the next project, specifically in how I want the created elements to be styled. I expect that creating a codepen or isolated example of what I want to create, then implementing that through JS will be a more streamlined way to create elements than just building them out in JS, at least as I continue learning.
    - Overall I'm pleased with my progress and the project I created. I know it could be styled more beautifully, but as I wanted to focus on form over function, I know I learned a lot from this project that I will carry with me into the next one.

2021-05-13
Added AbortController() to clear the bug causing the game to continue past a score of 5
Simple UI has been established; it's time to move on to the next assignment

2021-05-12
Established basic UI and code base
 - Still need to make it look nice
 - Bug: Game continues to run past a score of 5
 - Would like to add ability to choose best of 1/3/5

2021-05-11
Established copies to refactor for UI

2021-04-30 
Setup files 