---
title: "HTMLElement: writingSuggestions property"
short-title: writingSuggestions
slug: Web/API/HTMLElement/writingSuggestions
page-type: web-api-instance-property
browser-compat: api.HTMLElement.writingSuggestions
---

{{APIRef("HTML DOM")}}

The **`writingSuggestions`** property of the {{domxref("HTMLElement")}} interface is a string indicating if browser-provided writing suggestions should be enabled under the scope of the element or not.

It reflects the value of the [`writingsuggestions`](/en-US/docs/Web/HTML/Global_attributes/writingsuggestions) HTML global attribute.

## Value

An enumerated value; possible values are:

- `"true"`
  - : The browser automatically shows the virtual keyboard when the user taps or focuses the element.
- `"false"`
  - : The browser does not automatically show the virtual keyboard: showing/hiding the virtual keyboard is handled manually by the script.

## Examples

The following example shows how to disable writing suggestions offered by user agents via script:

```js
const element = document.querySelector("input");

// disable user agent writing suggestions
element.writingSuggestions = "false";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`writingsuggestions`](/en-US/docs/Web/HTML/Global_attributes/writingsuggestions) HTML global attribute
