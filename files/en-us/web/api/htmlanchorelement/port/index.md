---
title: HTMLAnchorElement.port
slug: Web/API/HTMLAnchorElement/port
tags:
  - API
  - HTMLAnchorElement
  - Property
  - Reference
browser-compat: api.HTMLAnchorElement.port
---
{{ApiRef("HTML DOM")}}

The **`HTMLAnchorElement.port`** property is a
{{domxref("USVString")}} containing the port number of the URL. If the URL does not
contain an explicit port number, it will be set to `''`.

## Syntax

```js
// Getter
string = anchor.port;
// Setter
anchor.port = string;
```

## Examples

### Getting the port from an anchor link

```js
// An <a id="myAnchor" href="https://developer.mozilla.org:443/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementByID("myAnchor");
anchor.port; // returns '443'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
