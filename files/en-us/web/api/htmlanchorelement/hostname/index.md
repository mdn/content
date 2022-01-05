---
title: HTMLAnchorElement.hostname
slug: Web/API/HTMLAnchorElement/hostname
tags:
  - API
  - HTMLAnchorElement
  - Property
  - Reference
browser-compat: api.HTMLAnchorElement.hostname
---
{{ApiRef("HTML DOM")}}

The **`HTMLAnchorElement.hostname`** property is a
{{domxref("USVString")}} containing the domain of the URL.

## Syntax

```js
// Getter
string = anchor.hostname;
// Setter
anchor.hostname = string;
```

## Examples

```js
// An <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.hostname; // returns 'developer.mozilla.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
