---
title: "DocumentFragment: querySelector() method"
short-title: querySelector()
slug: Web/API/DocumentFragment/querySelector
page-type: web-api-instance-method
browser-compat: api.DocumentFragment.querySelector
---

{{ApiRef("DOM")}}

The **`DocumentFragment.querySelector()`** method returns the
first element, or `null` if no matches are found, within the
{{domxref("DocumentFragment")}} (using depth-first pre-order traversal of the
document's nodes) that matches the specified group of selectors.

If the selector matches an ID and this ID is erroneously used several times in the
document, it returns the first matching element.

If the selectors specified in parameter are invalid a {{domxref("DOMException")}} with
a `SYNTAX_ERR` value is raised.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameters

- `selectors`
  - : A string containing one or more CSS selectors separated by
    commas.

### Return value

An {{domxref("Element")}} object representing the first element in the document
that matches the specified set of [CSS selectors](/en-US/docs/Web/CSS/CSS_Selectors), or `null` is returned if there are no matches.

## Examples

### Basic example

In this basic example, the first element in the {{domxref("DocumentFragment")}} with
the class "`myclass`" is returned:

```js
const el = documentfragment.querySelector(".myclass");
```

### CSS syntax and the method's argument

The string argument pass to `querySelector` must follow the CSS syntax. To
match ID or selectors that do not follow the CSS syntax (by using semicolon or space
inappropriately for example), it's mandatory to escape the wrong character with a
double back slash:

```html
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  document.querySelector("#foo\bar"); // Does not match anything
  document.querySelector("#foo\\\\bar"); // Match the first div
  document.querySelector("#foo:bar"); // Does not match anything
  document.querySelector("#foo\\:bar"); // Match the second div
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("DocumentFragment")}} interface it belongs to.
