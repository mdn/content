---
title: Range.toString()
slug: Web/API/Range/toString
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Range
  - Stringifier
browser-compat: api.Range.toString
---
{{ApiRef("DOM")}}

The **`Range.toString()`** method is a {{Glossary("stringifier")}} returning
the text of the {{domxref("Range")}}.

Alerting the contents of a {{domxref("Range")}} makes an implicit
`toString()` call, so comparing range and text through an alert dialog is
ineffective.

## Syntax

```js
toString()
```

### Parameters

None.

### Return value

A string.

## Examples

### HTML

```html
<p>This example logs <em>everything</em> between the emphasized <em>words</em>. Look at the output below.</p>
<p id="log"></p>
```

### JavaScript

```js
const range = document.createRange();

range.setStartBefore(document.getElementsByTagName('em').item(0), 0);
range.setEndAfter(document.getElementsByTagName('em').item(1), 0);
document.getElementById('log').textContent = range.toString();
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
