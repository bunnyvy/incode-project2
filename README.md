# Project 2: Making Mr.Coffe Website Interactive with Javascript
## Difference between Javascript and NodeJS
- Javascript is a programming language that is used for writing scripts on the website.  
  - JavaScript (the front-end) is used to animate websites
  - Javascript can only be run in the browsers.
  - Javascript is capable enough to add HTML and play with the DOM. 
 
- NodeJS (the back-end) 
  - NodeJS is a Javascript runtime environment.
  - We can run Javascript outside the browser with the help of NodeJS.
  - Nodejs does not have capability to add HTML tags.

## Learning Journey + Reflection
- I learned how to build form in HTML and adding the "SEND" button 
- I learned the importance of validity. Although in HTML5, input types (e.g. mail) add extra security to my forms by blocking the user that does not input the "@" character. It does not prevent a malicious user from sending invalid data, so we should check the validity of the data received from a form to prevent unnecessary useless data.
- I learned how to manage how the form is sent: using eventListeners
  - Although I haven't learned how to transfer the data from a form to a specific URL and save it in a dataase. I learned how to use JavaScript to animate the page and retrieve information provided when a user clicks on the "SEND" button.
  - If the form is valid, I should display the information provided in the browser console. 
  - If the form is invalid, the form should do nothing.
  - I learned about Events and DOM handling
- I learned how to display a success message in a pop-up box

## Document Object Model (DOM) handling
- DOM is the data representation of objects that comprise structure and content of a document on web
- DOM is a programming interface for web documents, it represents the page (e.g. HTML) so that programs can change document structure, style & content.
- DOM represents document as nodes & objects
- DOM programming can be something as simple as:
  - **console.log()**
  - **document.querySelectorAll()**
  - document.querySelector()
  - document.createElement()
  - element.innerHTML
  - element.style.left
  - element.**set**Attribute()
  - element.**get**Attribute()
  - element.addEventListener()
  - createAttribute()
  - item()
  - const table = document.getElementById("table")
  - const tableAttrs = table.attributes
  - parentNode.appendChild(node)


