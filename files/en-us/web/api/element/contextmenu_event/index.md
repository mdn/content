---
title: "Element: contextmenu event"
short-title: contextmenu
slug: Web/API/Element/contextmenu_event
page-type: web-api-event
browser-compat: api.Element.contextmenu_event
---

{{APIRef("Pointer Events")}}

The **`contextmenu`** event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.

In the latter case, the context menu is displayed at the bottom left of the focused element, unless the element is a tree, in which case the context menu is displayed at the bottom left of the current row.

Any right-click event that is not disabled (by calling the click event's {{domxref("Event.preventDefault", "preventDefault()")}} method) will result in a `contextmenu` event being fired at the targeted element.

> [!NOTE]
> An exception to this in Firefox: if the user holds down the <kbd>Shift</kbd> key while right-clicking, then the context menu will be shown without a `contextmenu` event being fired.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("contextmenu", (event) => { })

oncontextmenu = (event) => { }
```

## Event type

A {{domxref("PointerEvent")}}. Inherits from {{domxref("MouseEvent")}}.

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In earlier versions of the specification, the event type for this event was a {{domxref("MouseEvent")}}. Check [browser compatibility](#browser_compatibility) for more information.

## Examples

### Canceling the `contextmenu` event

In this example, the default action of the `contextmenu` event is canceled using `preventDefault()` when the `contextmenu` event is fired at the first paragraph. As a result, the first paragraph will do nothing when right-clicked, while the second paragraph will show the standard context menu offered by your browser.

> [!NOTE]
> In Firefox, if you hold down the <kbd>Shift</kbd> key while right-clicking, then the context menu is shown without the `contextmenu` event being fired. Therefore, canceling the event does not stop the context menu from being shown.

#### HTML

```html
<p id="noContextMenu">The context menu has been disabled on this paragraph.</p>
<p>But it has not been disabled on this one.</p>
```

#### JavaScript

```js
const noContext = document.getElementById("noContextMenu");

noContext.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
```

#### Result

{{EmbedLiveSample("Canceling the contextmenu event")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: Introduction to events](/en-US/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
