---
title: Document.createTouch()
slug: Web/API/Document/createTouch
page-type: web-api-instance-method
tags:
  - API
  - Deprecated
  - HTML DOM
  - Method
  - Mobile
  - Reference
  - createTouch
  - touch
  - Non-standard
browser-compat: api.Document.createTouch
---
{{APIRef("DOM")}}{{Deprecated_Header}}{{Non-standard_header}}

The **`Document.createTouch()`** method creates and returns a new {{DOMxRef("Touch")}} object.

> **Note:** Use the {{domxref("TouchEvent.TouchEvent", "TouchEvent()")}} constructor.

## Syntax

```js
createTouch(view, target, identifier, pageX, pageY, screenX, screenY)
```

### Parameters

> **Note:** All parameters are optional.

- `view`
  - : The {{DOMxRef("window")}} in which the touch occurred.
- `target`
  - : The {{DOMxRef("EventTarget")}} for the touch.
- `identifier`
  - : The value for {{DOMxRef("Touch.identifier")}}.
- `pageX`
  - : The value for {{DOMxRef("Touch.pageX")}}.
- `pageY`
  - : The value for {{DOMxRef("Touch.pageY")}}.
- `screenX`
  - : The value for {{DOMxRef("Touch.screenX")}}.
- `screenY`
  - : The value for {{DOMxRef("Touch.screenY")}}.

> **Note:** Previous versions of this method included the
> following additional parameters but those parameters are not included in either of the
> standards listed below. Consequently, these parameters should be considered deprecated
> and not used.

- `clientX`
  - : The value for {{DOMxRef("Touch.clientX")}}.
- `clientY`
  - : The value for {{DOMxRef("Touch.clientY")}}.
- `radiusX`
  - : The value for {{DOMxRef("Touch.radiusX")}}.
- `radiusY`
  - : The value for {{DOMxRef("Touch.radiusY")}}.
- `rotationAngle`
  - : The value for {{DOMxRef("Touch.rotationAngle")}}.
- `force`
  - : The value for {{DOMxRef("Touch.force")}}.

### Return value

- `touch`
  - : A {{DOMxRef("Touch")}} object configured as described by the input parameters.

## Examples

This example illustrates using the `Document.createTouch()` method to
create {{DOMxRef("Touch")}} objects.

In following code snippet, two {{DOMxRef("Touch")}} objects are created for the
`target` element.

```js
const target = document.getElementById("target");

const touch1 = document.createTouch(window, target, 1, 15, 20, 35, 40);
const touch2 = document.createTouch(window, target, 2, 25, 30, 45, 50);
```

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- [Touch events](/en-US/docs/Web/API/Touch_events)
- {{DOMxRef("TouchList")}}
- {{DOMxRef("Touch")}}
- {{DOMxRef("Document.createTouchList()")}}
