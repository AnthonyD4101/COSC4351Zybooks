function parseScores(scoresString) {
    // Your code here
    return scoresString.split(' ');
}

function buildDistributionArray(scoresArray) {
    // Your code here
    let distArr = [0, 0, 0, 0, 0]

    if (scoresArray.length == 0 || !scoresArray || scoresArray == "") 
    {
        return distArr;
    }

    for (let i = 0; i < scoresArray.length; i++) 
    {
        let score = parseInt(scoresArray[i]);

        if (score >= 90) 
        {
            distArr[0]++;
        }

        else if (score >= 80 && score <= 89) 
        {
            distArr[1]++;
        } 

        else if (score >= 70 && score <= 79) 
        {
            distArr[2]++;
        } 

        else if (score >= 60 && score <= 69)
        {
            distArr[3]++;
        } 

        else if (score <= 59) 
        {
            distArr[4]++;
        }
    }

    return distArr;
}

function setTableContent(userInput) {
    // Your code here
    let table = document.getElementById("distributionTable");

    // Clear existing rows in the table
    table.innerHTML = '';

    if (userInput.length == 0 || !userInput || userInput.trim() == "") 
    {
        let newRow = table.insertRow();
        let errorCell = newRow.insertCell(0);
        errorCell.innerHTML = "No graph to display";
    } 
    
    else 
    {
        let scores = parseScores(userInput);
        let distArr = buildDistributionArray(scores);
        let colors = ['red', 'blue', 'green', 'purple', 'orange'];

        // First row for bars (scores)
        let barsRow = table.insertRow();
        for (let i = 0; i < distArr.length; i++) 
        {
            let cell = barsRow.insertCell(i);
            let barHeightPxValue = distArr[i] * 10;
            cell.innerHTML = `<td><div style="height:${barHeightPxValue}px" class="bar${i}"></div></td>`;
        }

        // Second row for letter grade labels (A,B,C,D,F)
        let labelsRow = table.insertRow();
        for (let i = 0; i < distArr.length; i++) 
        {
            let cell = labelsRow.insertCell(i);
            let label = "";

            if (i === 0) 
            {
                label = "A";
            } 
            
            else if (i === 1) 
            {
                label = "B";
            } 
            
            else if (i === 2) 
            {
                label = "C";
            } 
            
            else if (i === 3) 
            {
                label = "D";
            } 
            
            else 
            {
                label = "F";
            }

            cell.innerHTML = label;
        }

        // Third row for grade occurrences (distArr)
        let occurrencesRow = table.insertRow();
        for (let i = 0; i < distArr.length; i++) 
        {
            let cell = occurrencesRow.insertCell(i);
            cell.innerHTML = distArr[i];
        }

    }
}

function bodyLoaded() {
    // The argument passed to writeTableContent can be changed for 
    // testing purposes
    setTableContent("45 78 98 83 86 99 90 59");
}