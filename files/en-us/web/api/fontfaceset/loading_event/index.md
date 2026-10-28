---
title: "FontFaceSet: loading event"
short-title: loading
slug: Web/API/FontFaceSet/loading_event
page-type: web-api-event
browser-compat: api.FontFaceSet.loading_event
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

The `loading` event fires when the document begins loading fonts.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("loading", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onloading = (event) => { }
```

## Example

In the following example, when the font `Ephesis` starts to load, "Font is loading…" is printed to the console.

```js
document.fonts.onloading = () => {
  console.log("Font is loading");
};

(async () => {
  await document.fonts.load("16px Ephesis");
})();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
