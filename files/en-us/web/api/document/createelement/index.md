---
title: Document.createElement()
slug: Web/API/Document/createElement
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Document
  - Method
  - Reference
  - createElement
browser-compat: api.Document.createElement
---
{{APIRef("DOM")}}

In an [HTML](/en-US/docs/Web/HTML) document, the **`document.createElement()`** method creates the HTML element specified by _tagName_, or an {{domxref("HTMLUnknownElement")}} if _tagName_ isn't recognized.

## Syntax

```js
createElement(tagName)
createElement(tagName, options)
```

### Parameters

- `tagName`
  - : A string that specifies the type of element to be created. The {{domxref("Node.nodeName", "nodeName")}} of the created element is initialized with the value of _tagName_. Don't use qualified names (like "html:a") with this method. When called on an HTML document, `createElement()` converts _tagName_ to lower case before creating the element. In Firefox, Opera, and Chrome, `createElement(null)` works like `createElement("null")`.
- `options` {{optional_inline}}
  - : An object with the following properties:
    - `is`
      - : The tag name of a custom element previously defined via `customElements.define()`.
        See [Web component example](#web_component_example) for more details.

### Return value

The new {{domxref("Element")}}.

> **Note:** A new {{domxref("HTMLElement", "HTMLElement", "", "1")}} is returned if the document is an {{domxref("HTMLDocument", "HTMLDocument", "", "1")}}, which is the most common case. Otherwise a new {{domxref("Element","Element","","1")}} is returned.

## Examples

### Basic example

This creates a new `<div>` and inserts it before the element with the ID "`div1`".

#### HTML

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <title>||Working with elements||</title>
</head>
<body>
  <div id="div1">The text above has been created dynamically.</div>
</body>
</html>
```

#### JavaScript

```js
document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

#### Result

{{EmbedLiveSample("Basic_example", 500, 80)}}

### Web component example

The following example snippet is taken from our [expanding-list-web-component](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component) example ([see it live also](https://mdn.github.io/web-components-examples/expanding-list-web-component/)). In this case, our custom element extends the {{domxref("HTMLUListElement")}}, which represents the {{htmlelement("ul")}} element.

```js
// Create a class for the element
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Always call super first in constructor
    super();

    // constructor definition left out for brevity
    // …
  }
}

// Define the new element
customElements.define('expanding-list', ExpandingList, { extends: "ul" });
```

If we wanted to create an instance of this element programmatically, we'd use a call along the following lines:

```js
let expandingList = document.createElement('ul', { is : 'expanding-list' })
```

The new element will be given an [`is`](/en-US/docs/Web/HTML/Global_attributes/is) attribute whose value is the custom element's tag name.

> **Note:** For backwards compatibility with previous versions of the [Custom Elements specification](https://www.w3.org/TR/custom-elements/), some browsers will allow you to pass a string here instead of an object, where the string's value is the custom element's tag name.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("document.createElementNS()")}} — to explicitly specify the namespace URI for the element.
