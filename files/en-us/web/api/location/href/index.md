---
title: location.href
slug: Web/API/Location/href
page-type: web-api-instance-property
tags:
  - API
  - Location
  - Property
  - Reference
browser-compat: api.Location.href
---
{{ApiRef("Location")}}

The **`href`** property of the {{domxref("Location")}}
interface is a {{Glossary("stringifier")}} that returns a string containing the whole
URL, and allows the href to be updated.

Setting the value of `href` _navigates_ to the provided URL. If you
want _redirection_, use {{domxref("Location/replace","location.replace()")}}. The difference from setting the `href` property value is that when using the `location.replace()` method, after navigating to the given URL, the current page will not be saved in session [history](/en-US/docs/Web/API/History_API) — meaning the user won't be able to use the back button to navigate to it.

## Value

A string.

## Examples

```js
// Lets imagine an <a id="myAnchor" href="https://developer.mozilla.org/en-US/Location/href"> element is in the document
const anchor = document.getElementById("myAnchor");
const result = anchor.href; // Returns: 'https://developer.mozilla.org/en-US/Location/href'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
