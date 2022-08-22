---
title: Range()
slug: Web/API/Range/Range
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - DOM
  - DOM Reference
  - Range
  - Reference
browser-compat: api.Range.Range
---
{{ APIRef("DOM") }}

The **`Range()`** constructor returns a newly created
{{domxref("Range")}} object whose start and end is the global {{domxref("Document")}}
object.

## Syntax

```js
new Range()
```

### Parameters

None.

## Examples

In this example we create a new range with the `Range()` constructor, and
set its beginning and end positions using the {{domxref("Range.setStartBefore()")}} and
{{domxref("Range.setEndAfter()")}} methods. We then select the range using
{{domxref("window.getSelection()")}} and {{domxref("Selection.addRange()")}}.

### HTML

```html
<p>First paragraph.</p>
<p>Second paragraph.</p>
<p>Third paragraph.</p>
<p>Fourth paragraph.</p>
```

### JavaScript

```js
const paragraphs = document.querySelectorAll('p');

// Create new range
const range = new Range();

// Start range at second paragraph
range.setStartBefore(paragraphs[1]);

// End range at third paragraph
range.setEndAfter(paragraphs[2]);

// Get window selection
const selection = window.getSelection();

// Add range to window selection
selection.addRange(range);
```

### Result

{{EmbedLiveSample("Examples", 400, 210)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
- {{domxref("Document.createRange()")}}
