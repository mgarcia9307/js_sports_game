
//team ones stuff from the html doc
let teamOneShotsTaken = document.querySelector("#teamone-numshots")
let teamOneGoals = document.querySelector("#teamone-numgoals")
let teamOneShootButton = document.querySelector("#teamone-shoot-button")

//team ones stuff from the html doc
let teamTwoShotsTaken = document.querySelector("#teamtwo-numshots")
let teamTwoGoals = document.querySelector("#teamtwo-numgoals")
let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button")

//reset button
let resetButton = document.querySelector("#reset-button")
let resetCount = document.querySelector("#num-resets")

resetButton.addEventListener("click", function(event){
    resetCount.innerHTML = parseInt(resetCount.innerHTML) + 1
    teamOneShotsTaken.innerHTML = 0;
    teamOneGoals.innerHTML = 0;
    teamTwoShotsTaken.innerHTML = 0;
    teamTwoGoals.innerHTML = 0;
})

//makes the team one shoot button listen for a click
teamOneShootButton.addEventListener("click", function(event){

    //if I shoot team one shoot button listen for a click
    teamOneShotsTaken.innerHTML = parseInt(teamOneShotsTaken.innerHTML) + 1

    //if Math.random() generates a number greater than .75 team scores
    if(Math.random() > .5){

        teamOneGoals.innerHTML = parseInt(teamOneGoals.innerHTML) + 1
    }

})
teamTwoShootButton.addEventListener("click", function(event){

    //if I shoot team two shoot button listen for a click
    teamTwoShotsTaken.innerHTML = parseInt(teamTwoShotsTaken.innerHTML) + 1

    //if Math.random() generates a number greater than .75 team scores
    if(Math.random() > .5){

        teamTwoGoals.innerHTML = parseInt(teamTwoGoals.innerHTML) + 1
    }

})