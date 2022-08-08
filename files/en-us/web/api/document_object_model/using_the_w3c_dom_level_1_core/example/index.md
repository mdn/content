---
title: Example
slug: Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core/Example
page-type: guide
tags:
  - DOM
---
```html
 <html>
 <head>
   <title>My Document</title>
   <script>
   function change() {
     // document.getElementsByTagName("H1") returns a NodeList of the h1
     // elements in the document, and the first is number 0:
     const header = document.getElementsByTagName("H1").item(0);
     // the firstChild of the header is a Text node:
     header.firstChild.data = "A dynamic document";
     // now the header is "A dynamic document".
     const para = document.getElementsByTagName("P").item(0);
     para.firstChild.data = "This is the first paragraph.";
     // create a new Text node for the second paragraph
     const newText = document.createTextNode("This is the second paragraph.");
     // create a new Element to be the second paragraph
     const newElement = document.createElement("P");
     // put the text in the paragraph
     newElement.appendChild(newText);
     // and put the paragraph on the end of the document by appending it to
     // the BODY (which is the parent of para)
     para.parentNode.appendChild(newElement);
   }
   </script>
 </head>
 <body>
   <input type="button" value="Change this document." onclick="change()">
   <h1>Header</h1>
   <p>Paragraph</p>
 </body>
</html>
```
