---
title: HTMLAnchorElement.toString()
slug: Web/API/HTMLAnchorElement/toString
page-type: web-api-instance-method
tags:
  - API
  - HTMLAnchorElement
  - Method
  - Stringifier
browser-compat: api.HTMLAnchorElement.toString
---
{{ApiRef("URL API")}}

The **`HTMLAnchorElement.toString()`** {{Glossary("stringifier")}}
method returns a string containing the whole URL. It is a read-only
version of {{domxref("HTMLAnchorElement.href")}}.

## Syntax

```js
toString()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Calling toString on an anchor element

```js
// An <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.toString(); // returns 'https://developer.mozilla.org/en-US/docs/HTMLAnchorElement'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
