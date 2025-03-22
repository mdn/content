---
title: "Element: querySelectorAll() method"
short-title: querySelectorAll()
slug: Web/API/Element/querySelectorAll
page-type: web-api-instance-method
browser-compat: api.Element.querySelectorAll
---

{{APIRef("DOM")}}

The {{domxref("Element")}} method **`querySelectorAll()`**
returns a static (not live) {{domxref("NodeList")}} representing a list of elements
matching the specified group of selectors which are descendants of the element on which
the method was called.

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

    The selectors are applied to the entire document, not just the particular element on which `querySelectorAll()` is called. To restrict the selector to the element on which `querySelectorAll()` is called, include the [`:scope`](/en-US/docs/Web/CSS/:scope) pseudo-class at the start of the selector. See the [selector scope](#selector_scope) example.

### Return value

A non-live {{domxref("NodeList")}} containing one {{domxref("Element")}} object for
each descendant node that matches at least one of the specified selectors. The elements are in document order — that is, parents before children, earlier siblings before later siblings.

> [!NOTE]
> If the specified `selectors` include a [CSS pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements), the returned list
> is always empty.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the syntax of the specified `selectors` string is not valid.

## Examples

### Getting all elements with a custom data value

This example uses the [attribute selector](/en-US/docs/Web/CSS/Attribute_selectors) to select multiple elements with a `data-name` data attribute that contains "funnel-chart-percent".

```html
<section class="box" id="sect1">
  <div data-name="funnel-chart-percent1">10.900%</div>
  <div data-name="funnel-chart-percent2">3700.00%</div>
  <div data-name="funnel-chart-percent3">0.00%</div>
</section>
```

```js
const refs = [
  ...document.querySelectorAll(`[data-name*="funnel-chart-percent"]`),
];
```

### Obtaining a list of matches

To obtain a {{domxref("NodeList")}} of all of the {{HTMLElement("p")}} elements
contained within the element `myBox`:

```js
const matches = myBox.querySelectorAll("p");
```

This example returns a list of all {{HTMLElement("div")}} elements within
`myBox` with a class of either `note` or `alert`:

```js
const matches = myBox.querySelectorAll("div.note, div.alert");
```

Here, we get a list of the document's `<p>` elements whose immediate
parent element is a {{HTMLElement("div")}} with the class `"highlighted"` and
which are located inside a container whose ID is `"test"`.

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

This example uses an [attribute selector](/en-US/docs/Web/CSS/Attribute_selectors) to return a list of the {{HTMLElement("iframe")}} elements in the document
that contain an attribute named `"data-src"`:

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

Here, an attribute selector is used to return a list of the list items contained within
a list whose ID is `"user-list"` which have a `"data-active"`
attribute whose value is `"1"`:

```js
const container = document.querySelector("#user-list");
const matches = container.querySelectorAll("li[data-active='1']");
```

### Accessing the matches

Once the {{domxref("NodeList")}} of matching elements is returned, you can examine it
just like any array. If the array is empty (that is, its `length` property is
`0`), then no matches were found.

Otherwise, you can use standard array notation to access the contents of the list. You
can use any common looping statement, such as:

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

> **Note:** `NodeList` is not a genuine array, that is to say it doesn't
> have array methods like `slice`, `some`, `map`, etc. To convert it into an array, try
> `Array.from(nodeList)`.

### Selector scope

The `querySelectorAll()` method applies its selectors to the whole document: they are not scoped to the element on which the method is called. To scope the selectors, include the [`:scope`](/en-US/docs/Web/CSS/:scope) pseudo-class at the start of the selector string.

#### HTML

In this example the HTML contains:

- two buttons: `#select` and `#select-scope`
- three nested `<div>` elements: `#outer`, `#subject`, and `#inner`
- a `<pre>` element which the example uses for output.

```html
<button id="select">Select</button>
<button id="select-scope">Select with :scope</button>

<div id="outer">
  #outer
  <div id="subject">
    #subject
    <div id="inner">#inner</div>
  </div>
</div>

<pre id="output"></pre>
```

```css hidden
div {
  margin: 0.5rem;
  padding: 0.5rem;
  border: 3px #20b2aa solid;
  border-radius: 5px;
  font-family: monospace;
}

pre,
button {
  margin: 0.5rem;
  padding: 0.5rem;
}
```

#### JavaScript

In the JavaScript, we first select the `#subject` element.

When the `#select` button is pressed, we call `querySelectorAll()` on `#subject`, passing `"#outer #inner"` as the selector string.

When the `#select-scope` button is pressed, we again call `querySelectorAll()` on `#subject`, but this time we pass `":scope #outer #inner"` as the selector string.

```js
const subject = document.querySelector("#subject");

const select = document.querySelector("#select");
select.addEventListener("click", () => {
  const selected = subject.querySelectorAll("#outer #inner");
  output.textContent = `Selection count: ${selected.length}`;
});

const selectScope = document.querySelector("#select-scope");
selectScope.addEventListener("click", () => {
  const selected = subject.querySelectorAll(":scope #outer #inner");
  output.textContent = `Selection count: ${selected.length}`;
});
```

#### Result

{{EmbedLiveSample("Selector scope", "", 300)}}

When we press "Select", the selector selects all elements with an ID of `inner` that also have an ancestor with an ID of `outer`. Note that even though `#outer` is outside the `#subject` element, it is still used in selection, so our `#inner` element is found.

When we press "Select with :scope", the `:scope` pseudo-class restricts the selector scope to `#subject`, so `#outer` is not used in selector matching, and we don't find the `#inner` element.

### Escaping attribute values

This example shows that if an HTML document contains an [`id`](/en-US/docs/Web/HTML/Global_attributes/id) which is not a valid [CSS identifier](/en-US/docs/Web/CSS/ident), then we must escape the attribute value before using it in `querySelectorAll()`.

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
    const elements = container.querySelectorAll(`#${id}`);
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
- {{domxref("Element.querySelector()")}}
- {{domxref("Document.querySelector()")}} and
  {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} and
  {{domxref("DocumentFragment.querySelectorAll()")}}
