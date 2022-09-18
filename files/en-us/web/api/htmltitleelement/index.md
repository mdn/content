---
title: HTMLTitleElement
slug: Web/API/HTMLTitleElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLTitleElement
---

{{ APIRef("HTML DOM") }}

The **`HTMLTitleElement`** interface contains the title for a document. This element inherits all of the properties and methods of the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTitleElement.text")}}
  - : A string representing the text of the document's title, and only the text part. For example, consider this:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>
      Hello world! <span class="highlight">Isn't this wonderful</span> really?
    </title>
  </head>
  <body></body>
</html>
```

```js
const title = document.querySelector("title");
console.log(title.text); // yield: "Hello world!  really?"
```

As you can see, the tag `span` and its content were skipped.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Example

Do not confuse: `document.title` with `document.querySelector('title')`

The former is just a setter/getter method to set or get the inner text value of the document title, while the latter is the {{domxref("HTMLTitleElement")}} object. So you cannot write: `document.title.text = "Hello world!";`

Instead, you can simply write: `document.title = "Hello world!";` which is an equivalent to `document.querySelector('title').text = "Hello world!";`

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("title") }}.
