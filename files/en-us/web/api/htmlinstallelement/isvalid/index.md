---
title: "HTMLInstallElement: isValid property"
short-title: isValid
slug: Web/API/HTMLInstallElement/isValid
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLInstallElement.isValid
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`isValid`** read-only property of the {{domxref("HTMLInstallElement")}} interface is a boolean value indicating whether the associated {{htmlelement("install")}} element is valid or invalid (see [invalidation and blocking](/en-US/docs/Web/HTML/Guides/Permission_elements#validation_and_blocking)). When an `<install>` element is invalid, it is prevented from functioning.

To find out why it is invalid, check the {{domxref("HTMLInstallElement.invalidReason")}} property. You can also detect when `invalidReason` or `isValid` change using the {{domxref("HTMLInstallElement.validationstatuschange_event", "validationstatuschange")}} event.

## Value

A boolean value:

- If `true`, the `<install>` element is valid, meaning that it can be used to install a [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps).
- If `false`, the `<install>` element is invalid, meaning that it can't be used to install a PWA.

Defaults to `false`.

## Examples

### Reporting validity details

Consider the following `<install>` button:

```html
<install></install>
```

We could add a {{domxref("HTMLInstallElement.validationstatuschange_event", "validationstatuschange")}} event listener to it like so:

```js
const installElem = document.querySelector("install");

installElem.addEventListener("validationstatuschange", (e) => {
  console.log(`isValid: ${installElem.isValid}`);
  if (!installElem.isValid) {
    console.log(`invalidReason: ${installElem.invalidReason}`);
  }
});
```

This way, when the validation status changes, we log the `isValid` value. If it is invalid, we also log the {{domxref("HTMLInstallElement.invalidReason", "invalidReason")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInstallElement.invalidReason")}}
- {{domxref("HTMLInstallElement.validationstatuschange_event", "validationstatuschange")}} event
- {{htmlelement("install")}} element
