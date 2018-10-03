var details=[{"Quote": "Success is most often achieved by those who don't know that failure is inevitable", "Author": "Coco Chanel"},
             {"Quote": "Things work out best for those who make the best of how things work out", "Author": "John Wooden"}, 
             {"Quote": "Courage is grace under pressure.", "Author": "Ernest Hemingway"}, 
             {"Quote": "If you are not willing to risk the usual, you will have to settle for the ordinary.", "Author": "Jim Rohn"},
            {"Quote": "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.", "Author": "-Albert Einstein"},
            {"Quote": "All our dreams can come true if we have the courage to pursue them.", "Author": "-Walt Disney"},
            {"Quote": "It does not matter how slowly you go, so long as you do not stop.", "Author": "Confucius"},
            {"Quote": "Success is walking from failure to failure with no loss of enthusiasm.", "Author": "-Winston Churchill"}];
function myFunction() {
   var min = Math.ceil(0);
 var max = Math.floor(details.length);
  var randm= Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("idQuoteText").innerHTML = details[randm].Quote;
   document.getElementById("idauthor").innerHTML = details[randm].Author;
}
