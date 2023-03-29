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
  - : Returns the document's current orientation type, one of "portrait-primary", "portrait-secondary", "landscape-primary", or "landscape-secondary".
- {{DOMxRef("ScreenOrientation.angle")}} {{ReadOnlyInline}}
  - : Returns the document's current orientation angle.

### Event handlers

- {{DOMxRef("ScreenOrientation.onchange")}}
  - : The [event handler](/en-US/docs/Web/Events/Event_handlers) called whenever the screen changes orientation.

## Instance methods

- {{DOMxRef("ScreenOrientation.lock()")}}
  - : Locks the orientation of the containing document to its default orientation and returns a {{JSxRef("Promise")}}.
- {{DOMxRef("ScreenOrientation.unlock()")}}
  - : Unlocks the orientation of the containing document from its default orientation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
