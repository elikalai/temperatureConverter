function convertToCelcius(fh) {
    return celcius = ((fh -32)*5/9);
}

alert(`enter a number to be converted to celcius:`);

let fh = prompt("Enter Fahrenheit temperature:");

function describeTemperature(fh) {
    
    let description; 

    if (fh <= 0){
        description = "very cold";
    } else if (fh <= 20){
        description = "cold";
    } else if (fh <= 30) {
        description = "warm";
    } else if (fh <= 40) {
        description = "hot";
    } else if (fh >= 40) {
        description = "very hot";
    }
    return description;
}
const c = convertToCelcius(fh);
const description = describeTemperature(fh);
const message = `${fh} is ${c} degrees celcius, which is ${description}`;
alert(message);


