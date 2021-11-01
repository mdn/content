---
title: DocumentFragment.querySelector()
slug: Web/API/DocumentFragment/querySelector
tags:
  - API
  - DOM
  - DocumentFragment
  - Method
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

```js
element = documentfragment.querySelector(selectors);
```

### Parameters

- _selectors_
  - : Is a {{domxref("DOMString")}} containing one or more CSS selectors separated by
    commas.

## Examples

### Basic example

In this basic example, the first element in the {{domxref("DocumentFragment")}} with
the class "`myclass`" is returned:

```js
var el = documentfragment.querySelector(".myclass");
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
document.querySelector('#foo\bar')    // Does not match anything
document.querySelector('#foo\\\\bar') // Match the first div
document.querySelector('#foo:bar')     // Does not match anything
document.querySelector('#foo\\:bar')   // Match the second div
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("DocumentFragment")}} interface it belongs to.
