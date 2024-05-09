---
title: "Element: getHTML() method"
short-title: getHTML()
slug: Web/API/Element/getHTML
page-type: web-api-instance-method
browser-compat: api.Element.getHTML
---

{{APIRef("DOM")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`getHTML()`** method of the {{domxref("Element")}} interface is used to serialize an element's DOM to an HTML string.

## Syntax

```js-nolint
const html = element.getHTML(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An options object with the following optional parameters:

    - `serializableShadowRoots`
      - : A boolean value that specifies whether to include serializable shadow roots. The default value is `false`.
    - `shadowRoots`
      - : An array of {{domxref("ShadowRoot")}} objects to serialize. These are included regardless of whether they
        are marked as serializable. The default value is an empty array.

### Return value

A string that represents the HTML serialization of the element.

### Exceptions

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See Also

- {{domxref("ShadowRoot.getHTML()")}}
- {{domxref("Element.innerHTML")}}
