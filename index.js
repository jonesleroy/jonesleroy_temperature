const convertToCelsius = (fahr) => {
    return ((fahr - 32) * 5) / 9;
}

const describeTemperature = (fahr) => {
    if (Celsius < 0) {
        scr = "Very cold";
    } else if (Celsius < 20) {
        scr = "Cold";
    } else if (Celsius < 30) {
        scr = "Warm";
    } else if (Celsius < 40) {
        scr = "Hot";
    } else {
        scr = "Very hot";
    }
    return scr;        
};

let fahr = prompt("Please enter temperature");

let Celsius = convertToCelsius(fahr);
console.log (Celsius);

const result = describeTemperature(fahr);
console.log(result);