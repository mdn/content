---
title: HTMLAnchorElement.protocol
slug: Web/API/HTMLAnchorElement/protocol
tags:
  - API
  - HTMLAnchorElement
  - Property
browser-compat: api.HTMLAnchorElement.protocol
---
{{ApiRef("HTML DOM")}}

The
**`HTMLAnchorElement.protocol`**
property is a {{domxref("USVString")}} representing the protocol scheme of the URL,
including the final `':'`.

## Syntax

```js
// Getter
string = anchor.protocol;
// Setter
anchor.protocol = string;
```

## Examples

### Getting the protocol of an anchor link

```js
// An <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.protocol; // returns 'https:'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
