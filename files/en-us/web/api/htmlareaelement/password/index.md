---
title: HTMLAreaElement.password
slug: Web/API/HTMLAreaElement/password
tags:
  - API
  - HTMLAreaElement
  - Property
browser-compat: api.HTMLAreaElement.password
---
{{ApiRef("HTML DOM")}}

The **`HTMLAreaElement.password`** property is a
{{domxref("USVString")}} containing the password specified before the domain name.

If it is set without first setting the
[`username`](/en-US/docs/Web/API/HTMLAreaElement/username)
property, it silently fails.

## Syntax

```js
// Getter
string = area.password;
// Setter
area.password = string;
```

## Examples

```js
// An <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAreaElement"> is in the document
const area = document.getElementByID("myArea");
area.password; // returns 'flabada'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.
