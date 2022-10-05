let mainCounter = 10;



let decrement = function (iniVal) {
    let currentValue = iniVal;
    if(currentValue >0){
        
        let counter = document.createElement("div");
        counter.innerHTML = `<h1>${currentValue}</h1>`

        let parDiv = document.getElementById("wrapper");
        parDiv.appendChild(counter);
        mainCounter--;
        decrement(mainCounter);
    }
    else if(currentValue === 0){
        let final = document.createElement("div");
        final.innerHTML = `<h1>Happy Independence Day</h1>`;

        let parDiv = document.getElementById("wrapper");
        parDiv.appendChild(final);
    }

  
};

decrement(mainCounter)



