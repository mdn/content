---
title: "Element: getHTML() method"
short-title: getHTML()
slug: Web/API/Element/getHTML
page-type: web-api-instance-method
browser-compat: api.Element.getHTML
---

{{APIRef("DOM")}}

The **`getHTML()`** method of the {{domxref("Element")}} interface is used to serialize an element's DOM to an HTML string.

The method provides an options argument that enables the serialization of child nodes that are shadow roots.
The options can be used to include nested shadow roots that have been set as {{domxref("ShadowRoot/serializable","serializable")}}, and/or a specified array of {{domxref("ShadowRoot")}} objects, which may be either open or closed.

Without arguments, child nodes that are shadow roots are not serialized, and this method behaves in the same way as reading the value of {{domxref("Element.innerHTML")}}.

## Syntax

```js-nolint
getHTML(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An options object with the following optional parameters:

    - `serializableShadowRoots`
      - : A boolean value that specifies whether to include {{domxref("ShadowRoot/serializable","serializable")}} shadow roots.
        The default value is `false`.
    - `shadowRoots`
      - : An array of {{domxref("ShadowRoot")}} objects to serialize.
        These are included regardless of whether they are marked as `serializable`, or if they are open or closed.
        The default value is an empty array.

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
- {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.setHTMLUnsafe()")}}
