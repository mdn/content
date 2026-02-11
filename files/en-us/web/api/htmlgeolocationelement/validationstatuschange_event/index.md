---
title: "HTMLGeolocationElement: validationstatuschange event"
short-title: validationstatuschange
slug: Web/API/HTMLGeolocationElement/validationstatuschange_event
page-type: web-api-event
browser-compat: api.HTMLGeolocationElement.validationstatuschange_event
---

{{APIRef("HTML DOM")}}

The **`validationstatuschange`** event of the {{domxref("HTMLGeolocationElement")}} interface is fired whenever the {{htmlelement("geolocation")}} element's {{domxref("HTMLGeolocationElement.isValid", "isValid")}} value changes.

This occurs as a result of a [blocker](/en-US/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking) being added to or removed from a `<geolocation>` element.

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

In our [Exploring invalid reasons demo](https://mdn.github.io/dom-examples/geolocation-element/exploring-invalid-reasons/) ([source code](https://github.com/mdn/dom-examples/tree/main/geolocation-element/exploring-invalid-reasons)), we use a `validationstatuschange` event handler to report when a `<geolocation>` element becomes valid, and report the invalid reason when it becomes invalid:

```js
geo.addEventListener("validationstatuschange", () => {
  if (geo.isValid) {
    reasonElem.textContent = `<geolocation> is valid`;
  } else {
    reasonElem.textContent = `Invalid reason: ${geo.invalidReason}`;
  }
});
```

Whenever the validation status changes, we check whether the `<geolocation>` element is valid using {{domxref("HTMLGeolocationElement.isValid")}}, and if so, print a message confirming this to the `<p>` element text content. If the `<geolocation>` element is invalid, we print the {{domxref("HTMLGeolocationElement.invalidReason")}} to the `<p>` element text content.

See the {{domxref("HTMLGeolocationElement.invalidReason")}} page for a full walkthrough of this example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("geolocation")}} element
