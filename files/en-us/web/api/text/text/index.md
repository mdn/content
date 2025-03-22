---
title: "Text: Text() constructor"
short-title: Text()
slug: Web/API/Text/Text
page-type: web-api-constructor
browser-compat: api.Text.Text
---

{{ APIRef("DOM")}}

The **`Text()`** constructor returns a new {{domxref("Text")}} object
with the optional string given in parameter as its textual content.

## Syntax

```js-nolint
new Text()
new Text(string)
```

### Parameters

- `string` {{optional_inline}}
  - : A string representing the textual content of the text node.

### Return value

A new {{domxref("Text")}} object with the content of the `string` parameter, or the empty string if no parameter was given.

## Example

```js
let text = new Text("Test");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [DOM API](/en-US/docs/Web/API/Document_Object_Model)
