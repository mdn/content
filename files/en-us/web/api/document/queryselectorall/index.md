---
title: Document.querySelectorAll()
slug: Web/API/Document/querySelectorAll
page-type: web-api-instance-method
tags:
  - API
  - CSS Selectors
  - DOM
  - Document
  - Finding Elements
  - Locating Elements
  - Method
  - Reference
  - Searching Elements
  - Selecting Elements
  - Selectors
  - querySelectorAll
browser-compat: api.Document.querySelectorAll
---
{{APIRef("DOM")}}

The {{domxref("Document")}} method **`querySelectorAll()`**
returns a static (not live) {{domxref("NodeList")}} representing a list of the
document's elements that match the specified group of selectors.

## Syntax

```js
querySelectorAll(selectors)
```

### Parameters

- `selectors`
  - : A string containing one or more selectors to match against. This
    string must be a valid [CSS selector](/en-US/docs/Web/CSS/CSS_Selectors)
    string; if it's not, a `SyntaxError` exception is thrown. See [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) for more information about using selectors to
    identify elements. Multiple selectors may be specified by separating them using
    commas.

> **Note:** Characters which are not part of standard CSS syntax must be
> escaped using a backslash character. Since JavaScript also uses backslash escaping,
> special care must be taken when writing string literals using these characters. See [Escaping special characters](/en-US/docs/Web/API/Document/querySelector#escaping_special_characters) for more information.

### Return value

A non-live {{domxref("NodeList")}} containing one {{domxref("Element")}} object for
each element that matches at least one of the specified selectors or an empty
{{domxref("NodeList")}} in case of no matches.

> **Note:** If the specified `selectors` include a [CSS pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements), the returned list
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
a list whose ID is `userlist` which have a `data-active` attribute
whose value is `1`:

```js
const container = document.querySelector("#userlist");
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
const select = document.querySelector('.select');
const inner = select.querySelectorAll('.outer .inner');
inner.length; // 1, not 0!
```

In this example, when selecting `.outer .inner` in the context of the
`<div>` with the class `select`, the element with the class
`.inner` is still found, even though `.outer` is not a descendant
of the base element on which the search is performed (`.select`). By default,
`querySelectorAll()` only verifies that the last element in the selector is
within the search scope.

The {{cssxref(":scope")}} pseudo-class restores the expected behavior, only matching
selectors on descendants of the base element:

```js
const select = document.querySelector('.select');
const inner = select.querySelectorAll(':scope .outer .inner');
inner.length; // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- [Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) in the CSS
  Guide
- [Attribute selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) in the MDN Learning Area
- {{domxref("Element.querySelector()")}} and {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}}
- {{domxref("DocumentFragment.querySelector()")}} and
  {{domxref("DocumentFragment.querySelectorAll()")}}
