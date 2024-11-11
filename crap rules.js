function firstfunc()
{
    alert("hi my name is Daniel Plandor!");
}

function average(num1, num2)
{
    var avg = (num1 + num2)/2.0;
    alert("average= " + avg);
}
function playcraprules()
{
    var DIE1 = Math.ceil(math.random()*3);
    var DIE2 = Math.ceil(math.random()*3);
    var num1image = "R.png"
    var num2image = "70798ad2bce9d9af741db9ac29ee9237.png"
    var num3image = "R (1).png"
    document.getElementById("finalResult").innerHTML = "updates"
   

    if (DIE1 == 1)
    {
        document.getElementById("DIE1Img").src = num1image;
    }
    else if (DIE1 == 2)
    {
        document.getElementById("DIE1Img").src = num2image;
    }
    else
    {
        document.getElementById("DIE1Img").src = num3image;
    } 
    if (DIE2 == 1)
        {
            document.getElementById("DIE2Img").src = num1image;
        }
        else if (DIE2 == 1)
        {
            document.getElementById("DIE2Img").src = num2image;
        }
        else
        {
            document.getElementById("DIE2Img").src = num3image;
        } 

        if (DIE1 == DIE2)
        {
            document.getElementById("finalResult").innerHTML = "EVEN";
        }
        if ((DIE1 == 1 && DIE2 == 2) || (DIE1 == 2 && DIE2 == 3) || (DIE1 == 3 && DIE2 == 1) )
        {
            document.getElementById("finalResult").innerHTML = "you lose";
        }
        else
        {
            document.getElementById("finalResult").innerHTML = "you win";
        }

}