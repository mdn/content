---
title: "Element: querySelector() method"
short-title: querySelector()
slug: Web/API/Element/querySelector
page-type: web-api-instance-method
browser-compat: api.Element.querySelector
---

{{APIRef("DOM")}}

The **`querySelector()`** method of the {{domxref("Element")}}
interface returns the first element that is a descendant of the element on which it is
invoked that matches the specified group of selectors.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameters

- `selectors`

  - : A string containing one or more selectors to match. This string
    must be a valid CSS selector string; if it isn't, a `SyntaxError` exception
    is thrown.

    Note that the HTML specification does not require attribute values to be valid CSS identifiers. If a [`class`](/en-US/docs/Web/HTML/Global_attributes/class) or [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attribute value is not a valid CSS identifier, then you must escape it before using it in a selector, either by calling {{domxref("CSS.escape_static", "CSS.escape()")}} on the value, or using one of the techniques described in [Escaping characters](/en-US/docs/Web/CSS/ident#escaping_characters). See [Escaping attribute values](#escaping_attribute_values) for an example.

### Return value

The first descendant element of `baseElement` which matches the specified
group of `selectors`. The entire hierarchy of elements is considered when
matching, including those outside the set of elements including `baseElement`
and its descendants; in other words, `selectors` is first applied to the
whole document, not the `baseElement`, to generate an initial list of
potential elements. The resulting elements are then examined to see if they are
descendants of `baseElement`. The first match of those remaining elements is
returned by the `querySelector()` method.

If no matches are found, the returned value is `null`.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the specified `selectors` are invalid.

## Examples

Let's consider a few examples.

### Find a specific element with specific values of an attribute

In this first example, the first {{HTMLElement("style")}} element which either has no
type or has type "text/css" in the HTML document body is returned:

```js
const el = document.body.querySelector(
  "style[type='text/css'], style:not([type])",
);
```

### Get direct descendants using the :scope pseudo-class

This example uses the {{cssxref(":scope")}} pseudo-class to retrieve direct children of the `parentElement` element.

#### HTML

```html
<div>
  <h6>Page Title</h6>
  <div id="parent">
    <span>Love is Kind.</span>
    <span>
      <span>Love is Patient.</span>
    </span>
    <span>
      <span>Love is Selfless.</span>
    </span>
  </div>
</div>
```

#### CSS

```css
span {
  display: block;
  margin-bottom: 5px;
}
.red span {
  background-color: red;
  padding: 5px;
}
```

#### JavaScript

```js
const parentElement = document.querySelector("#parent");
let allChildren = parentElement.querySelectorAll(":scope > span");
allChildren.forEach((item) => item.classList.add("red"));
```

#### Result

{{ EmbedLiveSample('Get_direct_descendants_using_the_scope_pseudo-class', 600, 160) }}

### The entire hierarchy counts

This example demonstrates that the hierarchy of the entire document is considered when
applying `selectors`, so that levels outside the specified
`baseElement` are still considered when locating matches.

#### HTML

```html
<div>
  <h5>Original content</h5>
  <p>
    inside paragraph
    <span>inside span</span>
    inside paragraph
  </p>
</div>
<div>
  <h5>Output</h5>
  <div id="output"></div>
</div>
```

#### JavaScript

```js
const baseElement = document.querySelector("p");
document.getElementById("output").textContent =
  baseElement.querySelector("div span").textContent;
```

#### Result

The result looks like this:

{{ EmbedLiveSample('The_entire_hierarchy_counts', 600, 160) }}

Notice how the `"div span"` selector still successfully matches the
{{HTMLElement("span")}} element, even though the `baseElement`'s child nodes
do not include the {{HTMLElement("div")}} element (it is still part of the specified
selector).

### Escaping attribute values

This example shows that if an HTML document contains an [`id`](/en-US/docs/Web/HTML/Global_attributes/id) which is not a valid [CSS identifier](/en-US/docs/Web/CSS/ident), then we must escape the attribute value before using it in `querySelector()`.

#### HTML

In the following code, a {{htmlelement("div")}} element has an `id` of `"this?element"`, which is not a valid CSS identifier, because the `"?"` character is not allowed in CSS identifiers.

We also have three buttons, and a {{htmlelement("pre")}} element for logging errors.

```html
<div id="container">
  <div id="this?element"></div>
</div>

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
const container = document.querySelector("#container");
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const element = container.querySelector(`#${id}`);
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    element.style.backgroundColor = randomColor;
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

### More examples

See {{domxref("Document.querySelector()")}} for additional examples of the proper
format for the `selectors`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) in the CSS
  Guide
- [Attribute selectors](/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) in the MDN Learning Area
- {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}} and
  {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} and
  {{domxref("DocumentFragment.querySelectorAll()")}}
- Other methods that take selectors: {{domxref("element.closest()")}} and
  {{domxref("element.matches()")}}.
