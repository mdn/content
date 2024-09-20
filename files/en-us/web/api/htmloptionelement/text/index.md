---
title: "HTMLOptionElement: text property"
short-title: text
slug: Web/API/HTMLOptionElement/text
page-type: web-api-instance-property
browser-compat: api.HTMLOptionElement.text
---

{{ApiRef("HTML DOM")}}

The **`text`** property of the {{domxref("HTMLOptionElement")}} represents the text inside the {{htmlelement("option")}} element.
This property represents the same information as {{domxref("Node.textContent")}}.

> [!NOTE]
> If the element has a `label`, the text inside the {{htmlelement("option")}} is not visually rendered. In this case, the `text` property can still be used to set the content, but it will have no visible effect.

## Value

A string.

## Example

```js
const optionElement = document.getElementById("exampleOption");
console.log(`Text property: ${optionElement.text}`);
optionElement.text = "Updated text";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("select")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("optgroup")}}
- {{domxref("HTMLOptionElement.value")}}
- {{domxref("HTMLOptionElement.label")}}
- {{domxref("HTMLScriptElement.text")}}
- {{domxref("HTMLAnchorElement.text")}}
