var win = Math.floor(Math.random() * 25)
var lose = Math.floor(Math.random() * 25)
    if (win === lose){
        win = win + 1
    }
var counter = 10

// function clickStopper(userLoc)
//   {
//     userLoc.preventDefault()
// }

function treasure(userLoc){
    counter = counter - 1
        document.getElementById('counter').innerHTML = counter
    if (userLoc === win){
        document.getElementById(userLoc).innerHTML = "&#x1f308"
        window.setTimeout(()=>{confirm("Aye Matey, you won the booty!")});
        window.location.reload();
    } else if(userLoc === lose){
        document.getElementById(userLoc).innerHTML = "&#x2620"
        window.setTimeout(()=>{confirm("Ye hit a bomb! you'll walk the plank fer that!")});
        window.location.reload();
    } else if (counter === 0){
        window.setTimeout(()=>{confirm("Argh! Out of turns!")});
        window.location.reload();
    }else {
        document.getElementById(userLoc).innerHTML = "&#x1f332"
    }
    // if (userLoc != win || userLoc != lose){
    //     counter = counter + 1
    // }
}
