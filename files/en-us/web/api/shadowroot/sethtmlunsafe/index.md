---
title: "ShadowRoot: setHTMLUnsafe() method"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
page-type: web-api-instance-method
browser-compat: api.ShadowRoot.setHTMLUnsafe
---

{{APIRef("DOM")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`setHTMLUnsafe()`** method of the {{domxref("ShadowRoot")}} interface is used to parse a string of HTML and then insert it into the DOM as a subtree of the shadow root.

## Syntax

```js-nolint
shadowRoot.setHTMLUnsafe(input)
```

### Parameters

- `input`
  - : A string defining HTML to be parsed.

### Return value

None (`undefined`).

### Exceptions

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ShadowRoot.innerHTML")}}
- {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
