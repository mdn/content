---
title: "Document: getElementById() method"
short-title: getElementById()
slug: Web/API/Document/getElementById
page-type: web-api-instance-method
browser-compat: api.Document.getElementById
---

{{ ApiRef("DOM") }}

The **`getElementById()`** method of the {{domxref("Document")}} interface returns an {{domxref("Element")}} object representing the element whose {{domxref("Element.id", "id")}} property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

If you need to get access to an element which doesn't have an ID, you can use {{domxref("Document.querySelector", "querySelector()")}} to find the element using any {{Glossary("CSS selector", "selector")}}.

> **Note:** IDs should be unique inside a document. If two or more elements in a document have the same ID, this method returns the first element found.

## Syntax

```js-nolint
getElementById(id)
```

> **Note:** The capitalization of `"Id"` in the name of this method _must_ be correct for the code to function; `getElementByID()` is _not_ valid and will not work, however natural it may seem.

### Parameters

- `id`
  - : The ID of the element to locate. The ID is a case-sensitive string which is unique within the document; only one element should have any given ID.

### Return value

An {{domxref("Element")}} object describing the DOM element object matching the specified ID, or `null` if no matching element was found in the document.

## Examples

### HTML

```html
<html lang="en">
  <head>
    <title>getElementById example</title>
  </head>
  <body>
    <p id="para">Some text here</p>
    <button onclick="changeColor('blue');">blue</button>
    <button onclick="changeColor('red');">red</button>
  </body>
</html>
```

### JavaScript

```js
function changeColor(newColor) {
  const elem = document.getElementById("para");
  elem.style.color = newColor;
}
```

### Result

{{ EmbedLiveSample('Examples', 250, 120) }}

## Usage notes

Unlike some other element-lookup methods such as {{domxref("Document.querySelector()")}} and {{domxref("Document.querySelectorAll()")}}, `getElementById()` is only available as a method of the global `document` object, and _not_ available as a method on all element objects in the DOM. Because ID values must be unique throughout the entire document, there is no need for "local" versions of the function.

### Example

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <div id="parent-id">
      <p>hello word1</p>
      <p id="test1">hello word2</p>
      <p>hello word3</p>
      <p>hello word4</p>
    </div>
    <script>
      const parentDOM = document.getElementById("parent-id");
      const test1 = parentDOM.getElementById("test1");
      // throw error
      // Uncaught TypeError: parentDOM.getElementById is not a function
    </script>
  </body>
</html>
```

If there is no element with the given `id`, this function returns `null`. Note that the `id` parameter is case-sensitive, so `document.getElementById("Main")` will return `null` instead of the element `<div id="main">` because "M" and "m" are different for the purposes of this method.

Elements not in the document are not searched by `getElementById()`. When creating an element and assigning it an ID, you have to insert the element into the document tree with {{domxref("Node.insertBefore()")}} or a similar method before you can access it with `getElementById()`:

```js
const element = document.createElement("div");
element.id = "testqq";
const el = document.getElementById("testqq"); // el will be null!
```

In non-HTML documents, the DOM implementation must have information on which attributes are of type ID. Attributes with the name "id" are not of type ID unless so defined in the document's DTD. The `id` attribute is defined to be of ID type in the common cases of [XHTML](/en-US/docs/Glossary/XHTML), XUL, and others. Implementations that do not know whether attributes are of type ID or not are expected to return `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document")}} reference for other methods and properties you can use to get references to elements in the document.
- {{domxref("Document.querySelector()")}} for selectors via queries like `'div.myclass'`
- [xml:id](https://www.w3.org/TR/xml-id/) - has a utility method for allowing `getElementById()` to obtain 'xml:id' in XML documents (such as returned by Ajax calls)
