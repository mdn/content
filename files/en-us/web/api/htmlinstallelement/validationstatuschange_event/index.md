---
title: "HTMLInstallElement: validationstatuschange event"
short-title: validationstatuschange
slug: Web/API/HTMLInstallElement/validationstatuschange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.HTMLInstallElement.validationstatuschange_event
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`validationstatuschange`** event of the {{domxref("HTMLInstallElement")}} interface is fired whenever the {{htmlelement("install")}} element's validation state or invalid reason changes, due to the element becoming [blocked](/en-US/docs/Web/HTML/Reference/Elements/install#install_blocking) or unblocked.

The validation state and invalid reason can be checked using the {{domxref("HTMLInstallElement.isValid", "isValid")}} and {{domxref("HTMLInstallElement.invalidReason", "invalidReason")}} properties, respectively.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("validationstatuschange", (event) => { })

onvalidationstatuschange = (event) => { }
```

## Event type

An {{domxref("Event")}}.

## Examples

### Reporting validity details

Consider the following `<install>` button:

```html
<install></install>
```

We could add a `validationstatuschange` event listener to it like so:

```js
const installElem = document.querySelector("install");

installElem.addEventListener("validationstatuschange", (e) => {
  console.log(`isValid: ${installElem.isValid}`);
  if (!installElem.isValid) {
    console.log(`invalidReason: ${installElem.invalidReason}`);
  }
});
```

This way, when the validation status changes, we log the {{domxref("HTMLInstallElement.isValid", "isValid")}} value. If it is invalid, we also log the {{domxref("HTMLInstallElement.invalidReason", "invalidReason")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInstallElement.isValid", "isValid")}}
- {{domxref("HTMLInstallElement.invalidReason", "invalidReason")}}
- {{htmlelement("install")}} element
