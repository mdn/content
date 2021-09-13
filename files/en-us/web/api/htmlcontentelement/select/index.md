---
title: HTMLContentElement.select
slug: Web/API/HTMLContentElement/select
tags:
  - API
  - HTML DOM
  - Property
  - Reference
  - Web Components
  - Deprecated
browser-compat: api.HTMLContentElement.select
---
{{ APIRef("Web Components") }}{{Deprecated_header}}

The **`HTMLContentElement.select`** property reflects the
`select` attribute. It is a {{domxref("DOMString")}} containing a
space-separated list of CSS selectors that select the content to insert in place of the
\<content> element.

## Syntax

```js
object.select = "CSSselector CSSselector ...";
```

## Example

```js
// Select <h1> elements and elements with class="error"
myContentObject.select = "h1 .error";
```

## Specifications

This feature is no longer defined by any standards.

## Browser compatibility

{{Compat}}

## See also

- [HTMLContentElement](/en-US/docs/Web/API/HTMLContentElement)
