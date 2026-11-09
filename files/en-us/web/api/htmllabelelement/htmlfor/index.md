---
title: "HTMLLabelElement: htmlFor property"
short-title: htmlFor
slug: Web/API/HTMLLabelElement/htmlFor
page-type: web-api-instance-property
browser-compat: api.HTMLLabelElement.htmlFor
---

{{APIRef("HTML DOM")}}

The **`htmlFor`** property of the {{domxref("HTMLLabelElement")}} interface is the ID of the associated label's control element. It reflects the value of, and is used to set and get the [`for`](/en-US/docs/Web/HTML/Reference/Elements/label#for) content attribute.

## Value

A string that contains the ID of the element associated with the control.

## Description

An `HTMLLabelElement` should be associated with a control element so that clicking on the label activates the control. The `for` attribute, reflected in the `htmlFor` property, should contain the `id` of the associated control element.

> [!NOTE]
> If this property has a value, the {{domxref("HTMLLabelElement.control")}} property must refer to the same control.

The `htmlFor` attribute provides JavaScript access to the `for` attribute value. `htmlFor` is used instead of `for` to avoid clashing with the JavaScript `for` reserved word ([this is no longer strictly necessary, so may change in the future](https://github.com/whatwg/html/issues/9379)).

## Example

### Basic usage

In this example, the `<label>` element's `for` attribute value is `username`, which is linked to the `<input>` via its `id` attribute. We use the `htmlFor` DOM property to access the `for` attribute value.

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
```

```js
document.querySelector("label").htmlFor;
// username
```

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
