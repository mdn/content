---
title: "HTMLGeolocationElement: promptdismiss event"
short-title: promptdismiss
slug: Web/API/HTMLGeolocationElement/promptdismiss_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.HTMLGeolocationElement.promptdismiss_event
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`promptdismiss`** event of the {{domxref("HTMLGeolocationElement")}} interface is fired whenever the user activates the `<geolocation>` element and dismisses the resulting dialog, by pressing the "close" button or the <kbd>Esc</kbd> key.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("promptdismiss", (event) => { })

onpromptdismiss = (event) => { }
```

## Event type

An {{domxref("Event")}}.

## Examples

### Using `promptdismiss` to respond to user permission dismissal

In our [Embedded map demo](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([source code](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)), we use a `promptdismiss` event handler to respond to the user dismissing the `<geolocation>` permission prompt:

```js
geo.addEventListener("promptdismiss", notifyUserRetrySelection);
```

In the `notifyUserRetrySelection()` function, we ask the user to press the button again and allow location.

```js
function notifyUserRetrySelection() {
  statusElem.textContent =
    'Please press the "Use location" button again and allow location for this site.';
}
```

See the main {{domxref("HTMLGeolocationElement")}} page for a full walkthrough of this example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("geolocation")}} element
