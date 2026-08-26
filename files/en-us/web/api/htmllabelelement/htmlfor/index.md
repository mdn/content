---
title: "HTMLLabelElement: htmlFor property"
short-title: htmlFor
slug: Web/API/HTMLLabelElement/htmlFor
page-type: web-api-instance-property
browser-compat: api.HTMLLabelElement.htmlFor
---

{{APIRef("HTML DOM")}}

The **`htmlFor`** property of the {{domxref("HTMLLabelElement")}} interface is the ID of the associated label's associated control element. It reflects the value of, and is used to set and get the [`for`](/en-US/docs/Web/HTML/Reference/Elements/label#for) content attribute.

## Value

A string which contains the ID string of the element which is associated with the control.

## Description

A HTMLLabelElement should be associated to a control element so that clicking on the label activates the control. The `for` attribute, reflected in the `htmlFor` property should contain the `id` of the associated control element.

> [!NOTE]
> If this property has a value, the {{domxref("HTMLLabelElement.control")}} property must refer to the same control.

The `htmlFor` attribute provides JavaScript access to the attribute value. `htmlFor` is used instead of `for` to avoid clashing with the JavaScript `for` reserved word, though [this is no longer strictly necessary, so may change in the future](https://github.com/whatwg/html/issues/9379).

## Example

### Basic usage

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
```

```js
document.querySelector("label").htmlFor;
// username
```

In this example the `htmlFor` of the `<label>` element is `username` which is linked the the `<input>` via it's `id` attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLLabelElement.control")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML forms guide](/en-US/docs/Learn_web_development/Extensions/Forms)
