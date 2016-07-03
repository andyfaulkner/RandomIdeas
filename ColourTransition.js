//global varibles
var currentHexValue = "819b9a";
var currentIntValue = new Array;
var newIntValues = new Array;

//event listener for button to accept the value
eventSubmit = document.getElementById("btnSubmit");
eventSubmit.addEventListener('click',colourSwitch,true);

//logic to get and change the backgroud colour depending on user input
function colourSwitch(){
    currentIntValue = convertToInt(currentHexValue);
    var newHexValue = document.getElementById("inputHexValue").value;
    newIntValues = convertToInt(newHexValue);
    do {
        var timer = setInterval(colourCycle(), 1000);
    } while(currentIntValue[0] != newIntValues[0] && currentIntValue[1] != newIntValues[1] && currentIntValue[2] != newIntValues[2])
    //set the current hex value to the value that it has changed to
    currentHexValue = newHexValue;
}

//function to convert hex to ints
function convertToInt(hexValue){
    var intValues = {};
    hexValue = hexValue.match(/.{1,2}/g);
    for(i = 0; i < 3; i++){
        intValues[i] = parseInt(hexValue[i], 16);
    }
    return intValues;
}

//function to convert int to hex
function convertToHex(intValue){
    var newHex = new Array;
    for (i = 0; i < 3; i++){
        newHex[i]++;
        newHex[i] = intValue[i].toString(16);
    }
    var hexToReturn = newHex.join("");
    return hexToReturn;
}

//function to cycle through the colours
function colourCycle(){

    if(currentIntValue[0] < newIntValues[0]){
        newIntValues[0]--;
    } else if (currentIntValue[0] > newIntValues[0]){
        newIntValues[0]++;
    }
    if(currentIntValue[1] < newIntValues[1]){
        newIntValues[1]--;
    } else if (currentIntValue[1] > newIntValues[1]){
        newIntValues[1]++;
    }
    if(currentIntValue[2] < newIntValues[2]){
        newIntValues[2]--;
    } else if (currentIntValue[2] > newIntValues[2]){
        newIntValues[2]++;
    }
    var tempHexValue = convertToHex(newIntValues)
    document.body.style.backgroundColor = "#" + tempHexValue;

}
