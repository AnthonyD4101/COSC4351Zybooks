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

// TODO: Modify to use Fetch API
async function fetchQuotes(topic, count) {
   let url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;

   try 
   {
      let response = await fetch(url);
      let quotes = await response.json();

      if ("error" in quotes) 
      {
         document.getElementById("quotes").innerHTML = quotes.error;
         return;
      }

      let quoteDiv = document.getElementById("quotes");
      let olNode = document.createElement("ol");

      // Clear previous response
      quoteDiv.innerHTML = '';

      for (let i = 0; i < quotes.length; i++) 
      {
         let liNode = document.createElement("li");
         liNode.innerHTML = `${quotes[i].quote} - ${quotes[i].source}`;
         olNode.appendChild(liNode);
      }

      quoteDiv.appendChild(olNode);
   } 
   
   catch (error) 
   {
      console.log(error);
   }
}
