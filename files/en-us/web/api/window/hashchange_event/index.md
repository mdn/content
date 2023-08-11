---
title: "Window: hashchange event"
short-title: hashchange
slug: Web/API/Window/hashchange_event
page-type: web-api-event
browser-compat: api.Window.hashchange_event
---

{{APIRef}}

The **`hashchange`** event is fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the `#` symbol).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("hashchange", (event) => {});
onhashchange = (event) => {};
```

## Event type

A {{domxref("HashChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("HashChangeEvent")}}

## Event properties

- {{domxref("HashChangeEvent.newURL")}} {{ReadOnlyInline}}
  - : A string representing the new URL the window is navigating to.
- {{domxref("HashChangeEvent.oldURL")}} {{ReadOnlyInline}}
  - : A string representing the previous URL from which the window was navigated.

## Event handler aliases

In addition to the `Window` interface, the event handler property `onhashchange` is also available on the following targets:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Examples

You can use the `hashchange` event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:

```js
window.addEventListener(
  "hashchange",
  () => {
    console.log("The hash has changed!");
  },
  false,
);
```

Or use the `onhashchange` event handler property:

```js
function locationHashChanged() {
  if (location.hash === "#cool-feature") {
    console.log("You're visiting a cool feature!");
  }
}

window.onhashchange = locationHashChanged;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window/popstate_event", "popstate")}} event
