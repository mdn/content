---
title: "HTMLTextAreaElement: reportValidity() method"
short-title: reportValidity()
slug: Web/API/HTMLTextAreaElement/reportValidity
page-type: web-api-instance-method
browser-compat: api.HTMLTextAreaElement.reportValidity
---

{{APIRef("HTML DOM")}}

The **`reportValidity()`** method of the {{domxref("HTMLTextAreaElement")}} interface performs the same validity checking steps as the {{domxref("HTMLTextAreaElement.checkValidity", "checkValidity()")}} method. In addition, if the {{domxref("HTMLElement/invalid_event", "invalid")}} event is not canceled, the browser displays the problem to the user.

## Syntax

```js-nolint
reportValidity()
```

### Parameters

None.

### Return value

Returns `true` if the element's value has no validity problems; otherwise, returns `false`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextAreaElement.checkValidity()")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
