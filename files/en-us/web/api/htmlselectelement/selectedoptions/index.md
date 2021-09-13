---
title: HTMLSelectElement.selectedOptions
slug: Web/API/HTMLSelectElement/selectedOptions
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - Options
  - Property
  - Read-only
  - Reference
  - Select
  - Web
  - selectedOptions
browser-compat: api.HTMLSelectElement.selectedOptions
---
{{APIRef("HTML DOM")}}

The **read-only** {{domxref("HTMLSelectElement")}} property
**`selectedOptions`** contains a list of the
{{HTMLElement("option")}} elements contained within the {{HTMLElement("select")}}
element that are currently selected. The list of selected options is an
{{domxref("HTMLCollection")}} object with one entry per currently selected option.

An option is considered selected if it has an {{domxref("HTMLOptionElement.selected")}}
attribute.

## Syntax

```js
var selectedCollection = HTMLSelectElement.selectedOptions;
```

### Value

An {{domxref("HTMLCollection")}} which lists every currently selected
{{domxref("HTMLOptionElement")}} which is either a child of the
{{domxref("HTMLSelectElement")}} or of an {{domxref("HTMLOptGroupElement")}} within the
`<select>` element.

In other words, any option contained within the `<select>` element may
be part of the results, but option groups are not included in the list.

If no options are currently selected, the collection is empty and returns a
{{domxref("HTMLCollection.length", "length")}} of 0.

## Example

In this example, a {{HTMLElement("select")}} element with a number of options is used
to let the user order various food items.

### HTML

The HTML that creates the selection box and the {{HTMLElement("option")}} elements
representing each of the food choices looks like this:

```html
<label for="foods">What do you want to eat?</label><br>
<select id="foods" name="foods" size="7" multiple>
  <option value="1">Burrito</option>
  <option value="2">Cheeseburger</option>
  <option value="3">Double Bacon Burger Supreme</option>
  <option value="4">Pepperoni Pizza</option>
  <option value="5">Taco</option>
</select>
<br>
<button name="order" id="order">
  Order Now
</button>
<p id="output">
</p>
```

The `<select>` element is set to allow multiple items to be selected,
and it is 7 rows tall. Note also the {{HTMLElement("button")}}, whose role it is to
trigger fetching the {{domxref("HTMLCollection")}} of selected elements using the
`selected` property.

### JavaScript

The JavaScript code that establishes the event handler for the button, as well as the
event handler itself, looks like this:

```js
let orderButton = document.getElementById("order");
let itemList = document.getElementById("foods");
let outputBox = document.getElementById("output");

orderButton.addEventListener("click", function() {
  let collection = itemList.selectedOptions;
  let output = "";

  for (let i=0; i<collection.length; i++) {
    if (output === "") {
      output = "Your order for the following items has been placed: ";
    }
    output += collection[i].label;

    if (i === (collection.length - 2) && (collection.length < 3)) {
      output +=  " and ";
    } else if (i < (collection.length - 2)) {
      output += ", ";
    } else if (i === (collection.length - 2)) {
      output += ", and ";
    }
  }

  if (output === "") {
    output = "You didn't order anything!";
  }

  outputBox.innerHTML = output;
}, false);
```

This script sets up a {{event("click")}} event listener on the "Order Now" button. When
clicked, the event handler fetches the list of selected options using
`selectedOptions`, then iterates over the options in the list. A string is
constructed to list the ordered items, with logic to build the list using proper English
grammar rules (including a {{interwiki("wikipedia", "serial comma")}}).

### Result

The resulting content looks like this in action:

{{EmbedLiveSample("Example", 600, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SectionOnPage("/en-US/docs/Learn/Forms/Other_form_controls", "Drop-down controls")}}
