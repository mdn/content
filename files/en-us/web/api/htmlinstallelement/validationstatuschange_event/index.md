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

The **`validationstatuschange`** event of the {{domxref("HTMLInstallElement")}} interface is fired whenever the {{htmlelement("install")}} element's {{domxref("HTMLInstallElement.isValid", "isValid")}} value changes.

This occurs as a result of a [blocker](/en-US/docs/Web/HTML/Reference/Elements/install#install_blocking) being added to or removed from an `<install>` element.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("validationstatuschange", (event) => { })

onvalidationstatuschange = (event) => { }
```

## Event type

An {{domxref("Event")}}.

## Examples

### Using `validationstatuschange` to report invalid reasons

On the {{domxref("HTMLInstallElement.invalidReason")}} page, the [Exploring invalid reasons demo](/en-US/docs/Web/API/HTMLInstallElement/invalidReason#exploring_invalid_reasons) uses a `validationstatuschange` event handler to report when an `<install>` element becomes valid, and report the invalid reason when it becomes invalid:

```js
const installElem = document.querySelector("install");

installElem.addEventListener("validationstatuschange", () => {
  if (installElem.isValid) {
    reasonElem.textContent = `<install> is valid`;
  } else {
    reasonElem.textContent = `Invalid reason: ${installElem.invalidReason}`;
  }
});
```

Whenever the validation status changes, we check whether the `<install>` element is valid using {{domxref("HTMLInstallElement.isValid")}}, and if so, print a message confirming this to the `<p>` element text content. If the `<install>` element is invalid, we print the {{domxref("HTMLInstallElement.invalidReason")}} to the `<p>` element text content.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("install")}} element
