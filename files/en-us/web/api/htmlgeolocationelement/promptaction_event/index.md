---
title: "HTMLGeolocationElement: promptaction event"
short-title: promptaction
slug: Web/API/HTMLGeolocationElement/promptaction_event
page-type: web-api-event
browser-compat: api.HTMLGeolocationElement.promptaction_event
---

{{APIRef("HTML DOM")}}

The **`promptaction`** event of the {{domxref("HTMLGeolocationElement")}} interface is fired whenever the user activates the `<geolocation>` element and selects an option from the resulting dialog, either to grant or deny `geolocation` permission.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("promptaction", (event) => { })

onpromptaction = (event) => { }
```

## Event type

An {{domxref("Event")}}.

## Examples

### Using `promptaction` to respond to user permission choices

In our [Embedded map demo](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([source code](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)), we use a `promptaction` event handler to respond to the user making a choice in the `<geolocation>` permission prompt:

```js
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

In the `notifyUserGrantPermission()` function, we use the {{domxref("HTMLGeolocationElement.permissionStatus")}} property to check whether the permission status is `denied` or `prompt` and if so, we ask the user to press the button again and allow location. We don't need to ask this if they already granted permission.

```js
function notifyUserGrantPermission() {
  if (geo.permissionStatus === "denied" || geo.permissionStatus === "prompt") {
    statusElem.textContent =
      'Please press the "Use location" button again and allow location for this site.';
  }
}
```

See the main {{domxref("HTMLGeolocationElement")}} page for a full walkthrough of this example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("geolocation")}} element
