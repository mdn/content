---
title: RadioNodeList
slug: Web/API/RadioNodeList
page-type: web-api-interface
browser-compat: api.RadioNodeList
---

{{APIRef("HTML DOM")}}

The **`RadioNodeList`** interface represents a collection of elements in a {{HTMLElement("form")}} or a {{HTMLElement("fieldset")}} element, returned by a call to {{domxref("HTMLFormControlsCollection.namedItem()")}}. It is not exposed as a global.

{{InheritanceDiagram}}

## Instance properties

_The `RadioNodeList` interface inherits the properties of_ {{domxref("NodeList")}}.

- {{domxref("RadioNodeList.value")}}
  - : If the underlying element collection contains radio buttons, the `value` property represents the checked radio button. On retrieving the `value` property, the `value` of the currently `checked` radio button is returned as a string. If the collection does not contain any radio buttons or none of the radio buttons in the collection is in `checked` state, the empty string is returned. On setting the `value` property, the first radio button input element whose `value` property is equal to the new value will be set to `checked`.

## Instance methods

_The `RadioNodeList` interface inherits the methods of_ {{domxref("NodeList")}}.

## Examples

### Acquiring an instance of RadioNodeList

`RadioNodeList` is not an exposed global, but you can get an instance of it and then access the `RadioNodeList` constructor itself, by using {{domxref("HTMLFormControlsCollection.namedItem()")}}:

```js
const form = document.createElement("form");
for (let i = 0; i < 3; i++) {
  const input = document.createElement("input");
  input.value = i;
  input.type = "radio";
  input.name = "radio";
  form.appendChild(input);
}
const instance = form.elements.namedItem("radio");
console.log(instance);

const RadioNodeList = instance.constructor;
```

However, this is rarely useful. Usually, you only interact with a `RadioNodeList` instance through the {{domxref("RadioNodeList/value", "value")}} property, which allows you to get and set the value of the checked radio button in the collection.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("form")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}} elements.
