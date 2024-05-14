---
title: "ShadowRoot: getHTML() method"
short-title: getHTML()
slug: Web/API/ShadowRoot/getHTML
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ShadowRoot.getHTML
---

{{APIRef("DOM")}}{{SeeCompatTable}}

The **`getHTML()`** method of the {{domxref("ShadowRoot")}} interface is used to serialize a shadow root's DOM to an HTML string.

## Syntax

```js-nolint
const html = shadowRoot.getHTML(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An options object with the following optional parameters:

    - `serializableShadowRoots`
      - : A boolean value that specifies whether to include [serializable](/en-US/docs/Web/API/ShadowRoot/serializable) shadow roots.
        The default value is `false`.
    - `shadowRoots`
      - : An array of {{domxref("ShadowRoot")}} objects to serialize.
        These are included regardless of whether they are marked as `serializable`.
        The default value is an empty array.

### Return value

A string that represents the HTML serialization of the shadow root.

### Exceptions

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See Also

- {{domxref("Element.getHTML()")}}
- {{domxref("ShadowRoot.innerHTML")}}
