---
title: HTMLAnchorElement.password
slug: Web/API/HTMLAnchorElement/password
tags:
  - API
  - HTMLAnchorElement
  - Property
browser-compat: api.HTMLAnchorElement.password
---
{{ApiRef("HTML DOM")}}

The **`HTMLAnchorElement.password`** property is a
{{domxref("USVString")}} containing the password specified before the domain name.

If it is set without first setting the
[`username`](/en-US/docs/Web/API/HTMLAnchorElement/username)
property, it silently fails.

## Syntax

```js
// Getter
string = anchor.password;
// Setter
anchor.password = string;
```

## Examples

```js
// An <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAnchorElement"> is in the document
const anchor = document.getElementByID("myAnchor");
anchor.password; // returns 'flabada'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
