---
title: HTMLAreaElement.protocol
slug: Web/API/HTMLAreaElement/protocol
tags:
  - API
  - HTMLAreaElement
  - Property
browser-compat: api.HTMLAreaElement.protocol
---
{{ApiRef("HTML DOM")}}

The
**`HTMLAreaElement.protocol`**
property is a {{domxref("USVString")}} representing the protocol scheme of the URL,
including the final `':'`.

## Syntax

```js
// Getter
string = area.protocol;
// Setter
area.protocol = string;
```

## Examples

### Getting the protocol of an area link

```js
// An <area id="myArea" href="https://developer.mozilla.org/en-US/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.protocol; // returns 'https:'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.
