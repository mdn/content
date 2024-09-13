---
title: ScreenOrientation
slug: Web/API/ScreenOrientation
page-type: web-api-interface
browser-compat: api.ScreenOrientation
---

{{APIRef("Screen Orientation API")}}

The **`ScreenOrientation`** interface of the [Screen Orientation API](/en-US/docs/Web/API/Screen_Orientation_API) provides information about the current orientation of the document.

A **`ScreenOrientation`** instance object can be retrieved using the {{domxref("screen.orientation")}} property.

{{InheritanceDiagram}}

## Instance properties

- {{DOMxRef("ScreenOrientation.type")}} {{ReadOnlyInline}}
  - : Returns the document's current orientation type, one of `portrait-primary`, `portrait-secondary`, `landscape-primary`, or `landscape-secondary`.
- {{DOMxRef("ScreenOrientation.angle")}} {{ReadOnlyInline}}
  - : Returns the document's current orientation angle.

## Instance methods

- {{DOMxRef("ScreenOrientation.lock()")}}
  - : Locks the orientation of the containing document to its default orientation and returns a {{JSxRef("Promise")}}.
- {{DOMxRef("ScreenOrientation.unlock()")}}
  - : Unlocks the orientation of the containing document from its default orientation.

## Events

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- {{DOMxRef("ScreenOrientation.change_event", "change")}}
  - : Fired whenever the screen changes orientation.

## Example

In the following example, we listen for an orientation {{DOMxRef("ScreenOrientation.change_event", "change")}} event and log the new {{DOMxRef("ScreenOrientation.type", "screen orientation type", "", "nocode")}} and {{DOMxRef("ScreenOrientation.angle", "angle", "", "nocode")}}.

```js
screen.orientation.addEventListener("change", (event) => {
  const type = event.target.type;
  const angle = event.target.angle;
  console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
