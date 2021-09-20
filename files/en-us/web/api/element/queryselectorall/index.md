---
title: Element.querySelectorAll()
slug: Web/API/Element/querySelectorAll
tags:
  - API
  - CSS Selectors
  - DOM
  - Element
  - Finding Elements
  - Method
  - Reference
  - Searching Elements
  - Selecting Elements
  - Selectors
  - querySelector
browser-compat: api.Element.querySelectorAll
---
{{APIRef("DOM")}}

The {{domxref("Element")}} method **`querySelectorAll()`**
returns a static (not live) {{domxref("NodeList")}} representing a list of elements
matching the specified group of selectors which are descendants of the element on which
the method was called.

## Syntax

```js
elementList = parentNode.querySelectorAll(selectors);
```

### Parameters

- `selectors`
  - : A {{domxref("DOMString")}} containing one or more selectors to match against. This
    string must be a valid [CSS selector](/en-US/docs/Web/CSS/CSS_Selectors)
    string; if it's not, a `SyntaxError` exception is thrown. See [Locating
    DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) for more information about using selectors to
    identify elements. Multiple selectors may be specified by separating them using
    commas.

> **Note:** Characters which are not part of standard CSS syntax must be
> escaped using a backslash character. Since JavaScript also uses backslash escaping,
> special care must be taken when writing string literals using these characters. See
> {{anch("Escaping special characters")}} for more information.

### Return value

A non-live {{domxref("NodeList")}} containing one {{domxref("Element")}} object for
each descendant node that matches at least one of the specified selectors.

> **Note:** If the specified `selectors` include a [CSS pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements), the returned list
> is always empty.

### Exceptions

- `SyntaxError`
  - : The syntax of the specified `selectors` string is not valid.

## Examples

### dataset selector & attribute selectors

```html
<section class="box" id="sect1">
  <div class="funnel-chart-percent1">10.900%</div>
  <div class="funnel-chart-percent2">3700.00%</div>
  <div class="funnel-chart-percent3">0.00%</div>
</section>
```

```js
// dataset selectors
const refs = [...document.querySelectorAll(`[data-name*="funnel-chart-percent"]`)];

// attribute selectors
// const refs = [...document.querySelectorAll(`[class*="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class^="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class$="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class~="funnel-chart-percent"]`)];
```

### Obtaining a list of matches

To obtain a {{domxref("NodeList")}} of all of the {{HTMLElement("p")}} elements
contained within the element `"myBox"`:

```js
var matches = myBox.querySelectorAll("p");
```

This example returns a list of all {{HTMLElement("div")}} elements within
`"myBox"` with a class of either "`note`" or "`alert`":

```js
var matches = myBox.querySelectorAll("div.note, div.alert");
```

Here, we get a list of the document's `<p>` elements whose immediate
parent element is a {{domxref("div")}} with the class `"highlighted"` and
which are located inside a container whose ID is `"test"`.

```js
var container = document.querySelector("#test");
var matches = container.querySelectorAll("div.highlighted > p");
```

This example uses an [attribute
selector](/en-US/docs/Web/CSS/Attribute_selectors) to return a list of the {{domxref("iframe")}} elements in the document
that contain an attribute named `"data-src"`:

```js
var matches = document.querySelectorAll("iframe[data-src]");
```

Here, an attribute selector is used to return a list of the list items contained within
a list whose ID is `"userlist"` which have a `"data-active"`
attribute whose value is `"1"`:

```js
var container = document.querySelector("#userlist");
var matches = container.querySelectorAll("li[data-active='1']");
```

### Accessing the matches

Once the {{domxref("NodeList")}} of matching elements is returned, you can examine it
just like any array. If the array is empty (that is, its `length` property is
0\), then no matches were found.

Otherwise, you can use standard array notation to access the contents of the list. You
can use any common looping statement, such as:

```js
var highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach(function(userItem) {
  deleteUser(userItem);
});
```

> **Note:** NodeList is not a genuine array, that is to say it doesn't
> have the array methods like slice, some, map etc. To convert it into an array, try
> Array.from(nodeList).

## User notes

`querySelectorAll()` behaves differently than most common JavaScript DOM
libraries, which might lead to unexpected results.

### HTML

Consider this HTML, with its three nested {{HTMLElement("div")}} blocks.

```html
<div class="outer">
  <div class="select">
    <div class="inner">
    </div>
  </div>
</div>
```

### JavaScript

```js
var select = document.querySelector('.select');
var inner = select.querySelectorAll('.outer .inner');
inner.length; // 1, not 0!
```

In this example, when selecting `".outer .inner"` in the context the
`<div>` with the class `"select"`, the element with the
class `".inner"` is still found, even though `.outer` is not a
descendant of the base element on which the search is performed
(`".select"`). By default, `querySelectorAll()` only verifies that
the last element in the selector is within the search scope.

The {{cssxref(":scope")}} pseudo-class restores the expected behavior, only matching
selectors on descendants of the base element:

```js
var select = document.querySelector('.select');
var inner = select.querySelectorAll(':scope .outer .inner');
inner.length; // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Locating
  DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- [Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) in the CSS
  Guide
- [Attribute
  selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) in the MDN Learning Area
- {{domxref("Element.querySelector()")}}
- {{domxref("Document.querySelector()")}} and
  {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} and
  {{domxref("DocumentFragment.querySelectorAll()")}}
- [Code snippets for
  `querySelector()`](/en-US/docs/Code_snippets/QuerySelector)
