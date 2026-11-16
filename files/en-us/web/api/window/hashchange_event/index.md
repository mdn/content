---
title: "Window: hashchange event"
short-title: hashchange
slug: Web/API/Window/hashchange_event
page-type: web-api-event
browser-compat: api.Window.hashchange_event
---

{{APIRef("HTML DOM")}}

The **`hashchange`** event is fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the `#` symbol).

This event does not fire when the hash is modified using {{domxref("history.pushState()")}} or {{domxref("history.replaceState()")}}.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("hashchange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onhashchange = (event) => { }
```

## Event type

A {{domxref("HashChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("HashChangeEvent")}}

## Event handler aliases

In addition to the `Window` interface, the event handler property `onhashchange` is also available on the following targets:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Examples

You can use the `hashchange` event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:

```js
window.addEventListener("hashchange", () => {
  console.log("The hash has changed!");
});
```

Or use the `onhashchange` event handler property (but note that this replaces other event listeners added using `onhashchange`, if any):

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
