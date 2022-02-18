---
title: HTMLAnchorElement.href
slug: Web/API/HTMLAnchorElement/href
tags:
  - API
  - HTMLAnchorElement
  - Location
  - Property
  - Reference
browser-compat: api.HTMLAnchorElement.href
---
{{ApiRef("HTML DOM")}}

The **`HTMLAnchorElement.href`** property is a
{{Glossary("stringifier")}} that returns a {{domxref("USVString")}} containing the whole URL, and allows
the href to be updated.

## Syntax

```js
// Getter
string = anchor.href;
// Setter
anchor.href = string;
```

## Examples

```js
// An <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.href; // returns 'https://developer.mozilla.org/en-US/HTMLAnchorElement'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
