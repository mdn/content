---
title: HTMLSelectElement
slug: Web/API/HTMLSelectElement
page-type: web-api-interface
browser-compat: api.HTMLSelectElement
---

{{APIRef("HTML DOM")}}

The **`HTMLSelectElement`** interface represents a {{HTMLElement("select")}} HTML Element. These elements also share all of the properties and methods of other HTML elements via the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram}}

## Instance properties

_This interface inherits the properties of {{domxref("HTMLElement")}}, and of {{domxref("Element")}} and {{domxref("Node")}}._

- {{domxref("HTMLSelectElement.autofocus")}}
  - : A boolean value reflecting the [`autofocus`](/en-US/docs/Web/HTML/Element/select#autofocus) HTML attribute, which indicates whether the control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.
- {{domxref("HTMLSelectElement.disabled")}}
  - : A boolean value reflecting the [`disabled`](/en-US/docs/Web/HTML/Element/select#disabled) HTML attribute, which indicates whether the control is disabled. If it is disabled, it does not accept clicks.
- {{domxref("HTMLSelectElement.form")}} {{ReadOnlyInline}}
  - : An {{domxref("HTMLFormElement")}} referencing the form that this element is associated with. If the element is not associated with of a {{HTMLElement("form")}} element, then it returns `null`.
- {{domxref("HTMLSelectElement.labels")}} {{ReadOnlyInline}}
  - : A {{domxref("NodeList")}} of {{HTMLElement("label")}} elements associated with the element.
- {{domxref("HTMLSelectElement.length")}}
  - : An `unsigned long` The number of {{HTMLElement("option")}} elements in this `select` element.
- {{domxref("HTMLSelectElement.multiple")}}
  - : A boolean value reflecting the [`multiple`](/en-US/docs/Web/HTML/Element/select#multiple) HTML attribute, which indicates whether multiple items can be selected.
- {{domxref("HTMLSelectElement.name")}}
  - : A string reflecting the [`name`](/en-US/docs/Web/HTML/Element/select#name) HTML attribute, containing the name of this control used by servers and DOM search functions.
- {{domxref("HTMLSelectElement.options")}} {{ReadOnlyInline}}
  - : An {{domxref("HTMLOptionsCollection")}} representing the set of {{HTMLElement("option")}} ({{domxref("HTMLOptionElement")}}) elements contained by this element.
- {{domxref("HTMLSelectElement.required")}}
  - : A boolean value reflecting the [`required`](/en-US/docs/Web/HTML/Element/select#required) HTML attribute, which indicates whether the user is required to select a value before submitting the form.
- {{domxref("HTMLSelectElement.selectedIndex")}}
  - : A `long` reflecting the index of the first selected {{HTMLElement("option")}} element. The value `-1` indicates no element is selected.
- {{domxref("HTMLSelectElement.selectedOptions")}} {{ReadOnlyInline}}
  - : An {{domxref("HTMLCollection")}} representing the set of {{HTMLElement("option")}} elements that are selected.
- {{domxref("HTMLSelectElement.size")}}
  - : A `long` reflecting the [`size`](/en-US/docs/Web/HTML/Element/select#size) HTML attribute, which contains the number of visible items in the control. The default is 1, unless `multiple` is `true`, in which case it is 4.
- {{domxref("HTMLSelectElement.type")}} {{ReadOnlyInline}}
  - : A string representing the form control's type. When `multiple` is `true`, it returns `"select-multiple"`; otherwise, it returns `"select-one"`.
- {{domxref("HTMLSelectElement.validationMessage")}} {{ReadOnlyInline}}
  - : A string representing a localized message that describes the validation constraints that the control does not satisfy (if any). This attribute is the empty string if the control is not a candidate for constraint validation (`willValidate` is false), or it satisfies its constraints.
- {{domxref("HTMLSelectElement.validity")}} {{ReadOnlyInline}}
  - : A {{domxref("ValidityState")}} reflecting the validity state that this control is in.
- {{domxref("HTMLSelectElement.value")}}
  - : A string reflecting the value of the form control. Returns the `value` property of the first selected option element if there is one, otherwise the empty string.
- {{domxref("HTMLSelectElement.willValidate")}} {{ReadOnlyInline}}
  - : A boolean value that indicates whether the button is a candidate for constraint validation. It is `false` if any conditions bar it from constraint validation.

## Instance methods

_This interface inherits the methods of {{domxref("HTMLElement")}}, and of {{domxref("Element")}} and {{domxref("Node")}}._

- {{domxref("HTMLSelectElement.add()")}}
  - : Adds an element to the collection of `option` elements for this `select` element.
- {{domxref("HTMLSelectElement.blur()")}} {{deprecated_inline}}
  - : Removes input focus from this element. _This method is now implemented on {{domxref("HTMLElement")}}_.
- {{domxref("HTMLSelectElement.checkValidity()")}}
  - : Checks whether the element has any constraints and whether it satisfies them. If the element fails its constraints, the browser fires a cancelable {{domxref("HTMLInputElement/invalid_event", "invalid")}} event at the element (and returns `false`).
- {{domxref("HTMLSelectElement.focus()")}} {{deprecated_inline}}
  - : Gives input focus to this element. _This method is now implemented on {{domxref("HTMLElement")}}_.
- {{domxref("HTMLSelectElement.item()")}}
  - : Gets an item from the options collection for this {{HTMLElement("select")}} element. You can also access an item by specifying the index in array-style brackets or parentheses, without calling this method explicitly.
- {{domxref("HTMLSelectElement.namedItem()")}}
  - : Gets the item in the options collection with the specified name. The name string can match either the `id` or the `name` attribute of an option node. You can also access an item by specifying the name in array-style brackets or parentheses, without calling this method explicitly.
- {{domxref("HTMLSelectElement.remove()")}}
  - : Removes the element at the specified index from the options collection for this `select` element.
- {{domxref("HTMLSelectElement.reportValidity()")}}
  - : This method reports the problems with the constraints on the element, if any, to the user. If there are problems, it fires a cancelable {{domxref("HTMLInputElement/invalid_event", "invalid")}} event at the element, and returns `false`; if there are no problems, it returns `true`.
- {{domxref("HTMLSelectElement.setCustomValidity()")}}
  - : Sets the custom validity message for the selection element to the specified message. Use the empty string to indicate that the element does _not_ have a custom validity error.

## Events

Listen to these events using {{domxref("EventTarget/addEventListener", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface:

- {{domxref("HTMLElement/change_event", "change")}} event
  - : Fires when the user selects an option.
- {{domxref("HTMLElement/input_event", "input")}} event
  - : Fires when the `value` of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element has been changed.

## Example

### Get information about the selected option

```js
/* assuming we have the following HTML
<select id='s'>
    <option>First</option>
    <option selected>Second</option>
    <option>Third</option>
</select>
*/

const select = document.getElementById("s");

// return the index of the selected option
console.log(select.selectedIndex); // 1

// return the value of the selected option
console.log(select.options[select.selectedIndex].value); // Second
```

A better way to track changes to the user's selection is to watch for the {{domxref("HTMLElement/change_event", "change")}} event to occur on the `<select>`. This will tell you when the value changes, and you can then update anything you need to. See [the example provided](/en-US/docs/Web/API/HTMLElement/change_event#select_element) in the documentation for the `change` event for details.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("select")}} HTML element, which implements this interface.
