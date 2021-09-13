---
title: Examples of web and XML development using the DOM
slug: Web/API/Document_Object_Model/Examples
tags:
  - DOM
  - DOM Reference
---
{{DefaultAPISidebar("DOM")}}

This chapter provides some longer examples of web and XML development using the DOM. Wherever possible, the examples use common APIs, tricks, and patterns in JavaScript for manipulating the document object.

## Example 1: height and width

The following example shows the use of the `height` and `width` properties alongside images of varying dimensions:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>width/height example</title>
<script>
function init() {
  var arrImages = new Array(3);

  arrImages[0] = document.getElementById("image1");
  arrImages[1] = document.getElementById("image2");
  arrImages[2] = document.getElementById("image3");

  var objOutput = document.getElementById("output");
  var strHtml = "<ul>";

  for (var i = 0; i < arrImages.length; i++) {
    strHtml += "<li>image" + (i+1) +
            ": height=" + arrImages[i].height +
            ", width=" + arrImages[i].width +
            ", style.height=" + arrImages[i].style.height +
            ", style.width=" + arrImages[i].style.width +
            "<\/li>";
  }

  strHtml += "<\/ul>";

  objOutput.innerHTML = strHtml;
}
</script>
</head>
<body onload="init();">

<p>Image 1: no height, width, or style
  <img id="image1" src="http://www.mozilla.org/images/mozilla-banner.gif">
</p>

<p>Image 2: height="50", width="500", but no style
  <img id="image2"
       src="http://www.mozilla.org/images/mozilla-banner.gif"
       height="50" width="500">
</p>

<p>Image 3: no height, width, but style="height: 50px; width: 500px;"
  <img id="image3"
       src="http://www.mozilla.org/images/mozilla-banner.gif"
       style="height: 50px; width: 500px;">
</p>

<div id="output"> </div>
</body>
</html>
```

## Example 2: Image Attributes

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Modifying an image border</title>

<script>
function setBorderWidth(width) {
  document.getElementById("img1").style.borderWidth = width + "px";
}
</script>
</head>

<body>
<p>
  <img id="img1"
       src="image1.gif"
       style="border: 5px solid green;"
       width="100" height="100" alt="border test">
</p>

<form name="FormName">
  <input type="button" value="Make border 20px-wide" onclick="setBorderWidth(20);" />
  <input type="button" value="Make border 5px-wide"  onclick="setBorderWidth(5);" />
</form>

</body>
</html>
```

## Example 3: Manipulating Styles

In this simple example, some basic style properties of an HTML paragraph element are accessed using the style object on the element and that object's CSS style properties, which can be retrieved and set from the DOM. In this case, you are manipulating the individual styles directly. In the next example (see Example 4), you can use stylesheets and their rules to change styles for whole documents.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Changing color and font-size example</title>

<script>
function changeText() {
  var p = document.getElementById("pid");

  p.style.color = "blue"
  p.style.fontSize = "18pt"
}
</script>
</head>
<body>

<p id="pid" onclick="window.location.href = 'http://www.cnn.com/';">linker</p>

<form>
  <p><input value="rec" type="button" onclick="changeText();" /></p>
</form>

</body>
</html>
```

## Example 4: Using Stylesheets

The styleSheets property on the document object returns a list of the stylesheets that have been loaded on that document. You can access these stylesheets and their rules individually using the stylesheet, style, and CSSRule objects, as demonstrated in this example, which prints out all of the style rule selectors to the console.

```js
var ss = document.styleSheets;

for(var i = 0; i < ss.length; i++) {
  for(var j = 0; j < ss[i].cssRules.length; j++) {
    dump( ss[i].cssRules[j].selectorText + "\n" );
  }
}
```

For a document with a single stylesheet in which the following three rules are defined:

```css
body { background-color: darkblue; }
p { font-face: Arial; font-size: 10pt; margin-left: .125in; }
#lumpy { display: none; }
```

This script outputs the following:

    BODY
    P
    #LUMPY

## Example 5: Event Propagation

This example demonstrates how events fire and are handled in the DOM in a very simple way. When the BODY of this HTML document loads, an event listener is registered with the top row of the TABLE. The event listener handles the event by executing the function stopEvent, which changes the value in the bottom cell of the table.

However, stopEvent also calls an event object method, {{domxref("event.stopPropagation")}}, which keeps the event from bubbling any further up into the DOM. Note that the table itself has an {{domxref("element.onclick","onclick")}} event handler that ought to display a message when the table is clicked. But the stopEvent method has stopped propagation, and so after the data in the table is updated, the event phase is effectively ended, and an alert box is displayed to confirm this.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Event Propagation</title>

<style>
#t-daddy { border: 1px solid red }
#c1 { background-color: pink; }
</style>

<script>
function stopEvent(ev) {
  c2 = document.getElementById("c2");
  c2.innerHTML = "hello";

  // this ought to keep t-daddy from getting the click.
  ev.stopPropagation();
  alert("event propagation halted.");
}

function load() {
  elem = document.getElementById("tbl1");
  elem.addEventListener("click", stopEvent, false);
}
</script>
</head>

<body onload="load();">

<table id="t-daddy" onclick="alert('hi');">
  <tr id="tbl1">
    <td id="c1">one</td>
  </tr>
  <tr>
    <td id="c2">two</td>
  </tr>
</table>

</body>
</html>
```

## Example 6: getComputedStyle

This example demonstrates how the {{domxref("window.getComputedStyle")}} method can be used to get the styles of an element that are not set using the `style` attribute or with JavaScript (e.g., `elt.style.backgroundColor="rgb(173, 216, 230)"`). These latter types of styles can be retrieved with the more direct {{domxref("element.style", "elt.style")}} property, whose properties are listed in the [DOM CSS Properties List](/en-US/docs/Web/CSS/Reference).

`getComputedStyle()` returns a `ComputedCSSStyleDeclaration` object, whose individual style properties can be referenced with this object's `getPropertyValue()` method, as the following example document shows.

```html
<!DOCTYPE html>
<html lang="en">
<head>

<title>getComputedStyle example</title>

<script>
function cStyles() {
  var RefDiv = document.getElementById("d1");
  var txtHeight = document.getElementById("t1");
  var h_style = document.defaultView.getComputedStyle(RefDiv, null).getPropertyValue("height");

  txtHeight.value = h_style;

  var txtWidth = document.getElementById("t2");
  var w_style = document.defaultView.getComputedStyle(RefDiv, null).getPropertyValue("width");

  txtWidth.value = w_style;

  var txtBackgroundColor = document.getElementById("t3");
  var b_style = document.defaultView.getComputedStyle(RefDiv, null).getPropertyValue("background-color");

  txtBackgroundColor.value = b_style;
}
</script>

<style>
#d1 {
  margin-left: 10px;
  background-color: rgb(173, 216, 230);
  height: 20px;
  max-width: 20px;
}
</style>

</head>

<body>

<div id="d1">&nbsp;</div>

<form action="">
  <p>
    <button type="button" onclick="cStyles();">getComputedStyle</button>
    height<input id="t1" type="text" value="1" />
    max-width<input id="t2" type="text" value="2" />
    bg-color<input id="t3" type="text" value="3" />
  </p>
</form>

</body>
</html>
```

## Example 7: Displaying Event Object Properties

This example uses DOM methods to display all the properties of the {{domxref("GlobalEventHandlers.onload")}} {{domxref("event")}} object and their values in a table. It also shows a useful technique of using a for..in loop to iterate over the properties of an object to get their values.

The properties of event objects differs greatly between browsers, the [WHATWG DOM Standard](https://dom.spec.whatwg.org) lists the standard properties, however many browsers have extended these greatly.

Put the following code into a blank text file and load it into a variety of browsers, you'll be surprised at the different number and names of properties. You might also like to add some elements in the page and call this function from different event handlers.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>Show Event properties</title>

<style>
table { border-collapse: collapse; }
thead { font-weight: bold; }
td { padding: 2px 10px 2px 10px; }

.odd { background-color: #efdfef; }
.even { background-color: #ffffff; }
</style>

<script>

function showEventProperties(e) {
  function addCell(row, text) {
    var cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(text));
  }

  var e = e || window.event;
  document.getElementById('eventType').innerHTML = e.type;

  var table = document.createElement('table');
  var thead = table.createTHead();
  var row = thead.insertRow(-1);
  var labelList = ['#', 'Property', 'Value'];
  var len = labelList.length;

  for (var i=0; i<len; i++) {
    addCell(row, labelList[i]);
  }

  var tbody = document.createElement('tbody');
  table.appendChild(tbody);

  for (var p in e) {
    row = tbody.insertRow(-1);
    row.className = (row.rowIndex % 2)? 'odd':'even';
    addCell(row, row.rowIndex);
    addCell(row, p);
    addCell(row, e[p]);
  }

  document.body.appendChild(table);
}

window.onload = function(event){
  showEventProperties(event);
}
</script>
</head>

<body>
<h1>Properties of the DOM <span id="eventType"></span> Event Object</h1>
</body>

</html>
```

## Example 8: Using the DOM Table Interface

The DOM HTMLTableElement interface provides some convenience methods for creating and manipulating tables. Two frequently used methods are {{domxref("HTMLTableElement.insertRow")}} and {{domxref("tableRow.insertCell")}}.

To add a row and some cells to an existing table:

```html
<table id="table0">
 <tr>
  <td>Row 0 Cell 0</td>
  <td>Row 0 Cell 1</td>
 </tr>
</table>

<script>
var table = document.getElementById('table0');
var row = table.insertRow(-1);
var cell,
    text;

for (var i = 0; i < 2; i++) {
  cell = row.insertCell(-1);
  text = 'Row ' + row.rowIndex + ' Cell ' + i;
  cell.appendChild(document.createTextNode(text));
}
</script>
```

### Notes

- A table's {{domxref("element.innerHTML","innerHTML")}} property should never be used to modify a table, although you can use it to write an entire table or the content of a cell.
- If DOM Core methods {{domxref("document.createElement")}} and {{domxref("Node.appendChild")}} are used to create rows and cells, IE requires that they are appended to a tbody element, whereas other browsers will allow appending to a table element (the rows will be added to the last tbody element).
- There are a number of other convenience methods belonging to the [table interface](/en-US/docs/Web/API/HTMLTableElement#methods) that can be used for creating and modifying tables.
