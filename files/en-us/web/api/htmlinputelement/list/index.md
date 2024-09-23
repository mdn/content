---
title: "HTMLInputElement: list property"
short-title: list
slug: Web/API/HTMLInputElement/list
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.list
---

{{ApiRef("HTML DOM")}}

The **`list`** read-only property of the {{domxref("HTMLInputElement")}} interface returns the {{domxref("HTMLDataListElement")}} pointed to by the [`list`](/en-US/docs/Web/HTML/Element/input#list) attribute of the element, or `null` if the `list` attribute is not defined or the `list` attribute's value is not associated with any `<datalist>` in the same tree.

> [!NOTE]
> This is a read-only property. To associate a `<datalist>` with an element, set the value of the `list` attribute with {{domxref("Element.setAttribute", "setAttribute()")}}.

## Value

An {{domxref("HTMLDataListElement")}} or `null`.

## Example

Given the following HTML:

```html
<label for="planet">Which planet are you from?</label>
<input id="planet" type="text" list="superhero" />
<datalist id="superhero">
  <option value="Azarath" />
  <option value="Krypton" />
  <option value="Tamaran" />
</datalist>
```

You can retrieve the `<datalist>` element associated with the `<input>`:

```js
const inputElement = document.querySelector("#planet");
console.log(inputElement.list); // returns the superhero HTMLDatalistElement
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
- {{domxref("HTMLDataListElement")}}
- {{domxref("HTMLOptionElement")}}
- {{domxref("HTMLCollection")}}
- {{htmlelement("input")}}
- {{htmlelement("datalist")}}
- {{htmlelement("option")}}
