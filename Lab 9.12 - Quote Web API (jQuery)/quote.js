$(function () {
   $("#fetchQuotesBtn").click(function () {
      // Get selected topic and count from drop-down lists
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use $.get() or $.ajax()
   let URLLink = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;

   $.ajax({
      url: URLLink,
      method: "GET",
      dataType: "json"
   })
      .done(function (data) 
      {
         if (data.error) 
         {
            $("#quotes").html(data.error);
            return;
         }

         let quoteDiv = document.getElementById("quotes");
         let olNode = document.createElement("ol");

         // Clear previous response
         quoteDiv.innerHTML = '';

         for (let i = 0; i < data.length; i++)
         {
            let liNode = document.createElement("li");
            liNode.innerHTML = `${data[i].quote} - ${data[i].source}`;
            olNode.appendChild(liNode);
         }

         quoteDiv.appendChild(olNode);
      })
}
