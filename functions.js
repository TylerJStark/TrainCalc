$( "#submitBtn" ).click(function() {

    // Gets values from inputs
    var name = $("#trainName").val().trim();
    var destination = $("#trainDestination").val().trim();
    var time = $("#trainTime").val().trim();
    var frequency = $("#trainFrequency").val().trim();
    // Converting the frequency to milliseconds
    var frequencyMilli = frequency * 60000;
    // Current time in milliseconds
    var currentMilli = moment().valueOf();
    // Start time in milliseconds
    var timeMilli = moment(time).valueOf();
    // Time since start time
    var timeLapsed = currentMilli - timeMilli;
    // Time since arrival
    var timeSince = timeLapsed % frequencyMilli;

    //Minutes till next train
    var nextArrivalMilli = frequencyMilli - timeSince;
    var nextArrival = Math.round(nextArrivalMilli / 60000);

    //Next Train Coming
    var nextTrainMilli = currentMilli + nextArrivalMilli;
    var nextTrain = moment(nextTrainMilli).format("HH:mm");

    // Function for appending new info to table    
    function appendTable () {

        var table = document.getElementById("trainTable");
        
        // Creating a new table row
        var tr = document.createElement("tr");
        // Creating a td for each column
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        // Setting the input values to nodes
        var nameNode = document.createTextNode(name);
        var frequencyNode = document.createTextNode(frequency);
        var destinationNode = document.createTextNode(destination);
        var nextTrainNode = document.createTextNode(nextTrain);
        var nextArrivalNode = document.createTextNode(nextArrival);
        // Appending each node to its respective td
        td1.appendChild(nameNode);
        td2.appendChild(destinationNode);
        td3.appendChild(frequencyNode);
        td4.appendChild(nextTrainNode);
        td5.appendChild(nextArrivalNode);
        // Applying each td to their table row
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        // Applying that row to the table
        table.appendChild(tr);

    }

    appendTable();

});