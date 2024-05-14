---
title: "Element: getHTML() method"
short-title: getHTML()
slug: Web/API/Element/getHTML
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Element.getHTML
---

{{APIRef("DOM")}}{{SeeCompatTable}}

The **`getHTML()`** method of the {{domxref("Element")}} interface is used to serialize an element's DOM to an HTML string.

The serialized HTML does not include shadow trees by default, but options can be used to include shadow roots that have been set as {{domxref("ShadowRoot/serializable","serializable")}}, and/or a specified array of {{domxref("ShadowRoot")}} objects.

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
      - : An array of {{domxref("ShadowRoot")}} objects to serialize. These are included regardless of whether they are marked as `serializable`.
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
