---
title: "Document: querySelectorAll() method"
short-title: querySelectorAll()
slug: Web/API/Document/querySelectorAll
page-type: web-api-instance-method
browser-compat: api.Document.querySelectorAll
---

{{APIRef("DOM")}}

The {{domxref("Document")}} method **`querySelectorAll()`**
returns a static (not live) {{domxref("NodeList")}} representing a list of the
document's elements that match the specified group of selectors.

## Syntax

```js-nolint
querySelectorAll(selectors)
```

### Parameters

- `selectors`

  - : A string containing one or more selectors to match. This string
    must be a valid CSS selector string; if it isn't, a `SyntaxError` exception
    is thrown.

    Note that the HTML specification does not require attribute values to be valid CSS identifiers. If a [`class`](/en-US/docs/Web/HTML/Global_attributes/class) or [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attribute value is not a valid CSS identifier, then you must escape it before using it in a selector, either by calling {{domxref("CSS.escape_static", "CSS.escape()")}} on the value, or using one of the techniques described in [Escaping characters](/en-US/docs/Web/CSS/ident#escaping_characters). See [Escaping attribute values](#escaping_attribute_values) for an example.

### Return value

A non-live {{domxref("NodeList")}} containing one {{domxref("Element")}} object for
each element that matches at least one of the specified selectors or an empty
{{domxref("NodeList")}} in case of no matches. The elements are in document order — that is, parents before children, earlier siblings before later siblings.

> [!NOTE]
> If the specified `selectors` include a [CSS pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements), the returned list
> is always empty.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the syntax of the specified `selectors` string is not valid.

## Examples

### Obtaining a list of matches

To obtain a {{domxref("NodeList")}} of all of the {{HTMLElement("p")}} elements in the
document:

```js
const matches = document.querySelectorAll("p");
```

This example returns a list of all {{HTMLElement("div")}} elements within the document
with a class of either `note` or `alert`:

```js
const matches = document.querySelectorAll("div.note, div.alert");
```

Here, we get a list of `<p>` elements whose immediate parent element
is a {{HTMLElement("div")}} with the class `highlighted` and which are
located inside a container whose ID is `test`.

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

This example uses an [attribute selector](/en-US/docs/Web/CSS/Attribute_selectors) to return a list of the {{HTMLElement("iframe")}} elements in the
document that contain an attribute named `data-src`:

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

Here, an attribute selector is used to return a list of the list items contained within
a list whose ID is `user-list` which have a `data-active` attribute
whose value is `1`:

```js
const container = document.querySelector("#user-list");
const matches = container.querySelectorAll("li[data-active='1']");
```

### Accessing the matches

Once the {{domxref("NodeList")}} of matching elements is returned, you can examine it
just like any array. If the array is empty (that is, its `length` property is
0\), then no matches were found.

Otherwise, you can use standard array notation to access the contents of the list. You
can use any common looping statement, such as:

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

### Escaping attribute values

This example shows that if an HTML document contains an [`id`](/en-US/docs/Web/HTML/Global_attributes/id) which is not a valid [CSS identifier](/en-US/docs/Web/CSS/ident), then we must escape the attribute value before using it in `querySelectorAll()`.

#### HTML

In the following code, a {{htmlelement("div")}} element has an `id` of `"this?element"`, which is not a valid CSS identifier, because the `"?"` character is not allowed in CSS identifiers.

We also have three buttons, and a {{htmlelement("pre")}} element for logging errors.

```html
<div id="this?element"></div>

<button id="no-escape">No escape</button>
<button id="css-escape">CSS.escape()</button>
<button id="manual-escape">Manual escape</button>

<pre id="log"></pre>
```

#### CSS

```css
div {
  background-color: blue;
  margin: 1rem 0;
  height: 100px;
  width: 200px;
}
```

#### JavaScript

All three buttons, when clicked, try to select the `<div>`, and then set its background color to a random value.

- The first button uses the `"this?element"` value directly.
- The second button escapes the value using {{domxref("CSS.escape_static", "CSS.escape()")}}.
- The third button explicitly escapes the `"?"` character using a backslash. Note that we must also escape the backslash itself, using another backslash, like: `"\\?"`.

```js
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const elements = document.querySelectorAll(`#${id}`);
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    elements[0].style.backgroundColor = randomColor;
  } catch (e) {
    log.textContent = e;
  }
}

document.querySelector("#no-escape").addEventListener("click", () => {
  setBackgroundColor("this?element");
});

document.querySelector("#css-escape").addEventListener("click", () => {
  setBackgroundColor(CSS.escape("this?element"));
});

document.querySelector("#manual-escape").addEventListener("click", () => {
  setBackgroundColor("this\\?element");
});
```

#### Result

Clicking the first button gives an error, while the second and third buttons work properly.

{{embedlivesample("escaping_attribute_values", "", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) in the CSS
  Guide
- [Attribute selectors](/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) in the MDN Learning Area
- {{domxref("Element.querySelector()")}} and {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}}
- {{domxref("DocumentFragment.querySelector()")}} and
  {{domxref("DocumentFragment.querySelectorAll()")}}
