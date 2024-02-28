window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest

   let endpoint = "https://wp.zybooks.com/quotes.php";
   let queryString = `topic=${topic}&count=${count}`;
   let url = `${endpoint}?${queryString}`;

   let xhr = new XMLHttpRequest();
   xhr.addEventListener("load", responseReceivedHandler);
   xhr.responseType = "json";
   xhr.open("GET", url);
   xhr.send();
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler() {
   let recievedResponse = this.response;

   if (recievedResponse.error) 
   {
      document.getElementById("quotes").innerHTML = recievedResponse.error;
   } 
   
   else 
   {
      let quoteDiv = document.getElementById("quotes");
      let olNode = document.createElement("ol");

      // Clear previous response
      quoteDiv.innerHTML = '';

      for (let i = 0; i < recievedResponse.length; i++) 
      {
         let liNode = document.createElement("li");
         liNode.innerHTML = `${recievedResponse[i].quote} - ${recievedResponse[i].source}`
         olNode.appendChild(liNode);
      }

      quoteDiv.appendChild(olNode);
   }

}