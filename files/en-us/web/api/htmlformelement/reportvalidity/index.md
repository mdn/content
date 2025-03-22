---
title: "HTMLFormElement: reportValidity() method"
short-title: reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
page-type: web-api-instance-method
browser-compat: api.HTMLFormElement.reportValidity
---

{{APIRef("HTML DOM")}}

The **`reportValidity()`** method of the {{domxref("HTMLFormElement")}} interface performs the same validity checking steps as the {{domxref("HTMLFormElement.checkValidity", "checkValidity()")}} method. In addition, for each {{domxref("HTMLElement/invalid_event", "invalid")}} event that was fired and not canceled, the browser displays the problem to the user.

## Syntax

```js-nolint
reportValidity()
```

### Parameters

None.

### Return value

Returns `true` if the associated controls' values have no validity problems; otherwise, returns `false`.

## Example

```js
document.forms["my-form"].addEventListener(
  "submit",
  () => {
    document.forms["my-form"].reportValidity();
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLFormElement.checkValidity()")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
