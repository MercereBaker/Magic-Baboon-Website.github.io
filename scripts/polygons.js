var number_of_sides;



function getShape(errorMessage = "")
{
let number_input = prompt(errorMessage + "Enter a number from 0 to 10 to see what kind of polygon you have!");
number_input = validateEntry(number_input);
if (number_input !== null)
{
    switch(number_input)
    {
    case 0:
        alert("Not a polygon or anything else!");
        document.getElementById("polygon_result").innerHTML = "Nothing!";
        break;
    case 1:
        alert("Henagon");
        document.getElementById("polygon_result").innerHTML = "Henagon!";
        break;
    case 2:
        alert("Digon");
        document.getElementById("polygon_result").innerHTML = "Digon!";
        break;
    case 3:
        alert("Trigon");
        document.getElementById("polygon_result").innerHTML = "Trigon!";
        break;
    case 4:
        alert("Tetragon");
        document.getElementById("polygon_result").innerHTML = "Tetragon!";
        break;
    case 5:
        alert("Pentagon");
        document.getElementById("polygon_result").innerHTML = "Pentagon!";
        break;
    case 6:
        alert("Hexagon");
        document.getElementById("polygon_result").innerHTML = "Hexagon!";
        break;
    case 7:
        alert("Heptagon");
        document.getElementById("polygon_result").innerHTML = "Heptagon!";
        break;
    case 8:
        alert("Octagon");
        document.getElementById("polygon_result").innerHTML = "Octagon!";
        break;
    case 9:
        alert("Enneagon");
        document.getElementById("polygon_result").innerHTML = "Enneagon!";
        break;
    case 10:
        alert("Hendecagon");
        document.getElementById("polygon_result").innerHTML = "Hendecagon!";
        break;
    }
}
else 
{
    getShape("Invalid input. \n");
}
};

function validateEntry(number)
{
    if(!isNaN(number)) 
    {
        number = Math.abs(number);
        number = Math.round(number);
        if (number >= 0 && number <= 10)
        {
            return number;
        }
    }
    else return null;
}
    

getShape();