---
title: 'Element: contextmenu event'
slug: Web/API/Element/contextmenu_event
tags:
  - API
  - Context
  - DOM
  - Element
  - Event
  - Interface
  - MouseEvent
  - Reference
  - Right Click
  - Right-Click
  - button
  - contextmenu
  - menu
  - mouse
browser-compat: api.Element.contextmenu_event
---
{{APIRef}}

The **`contextmenu`** event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.

In the latter case, the context menu is displayed at the bottom left of the focused element, unless the element is a tree, in which case the context menu is displayed at the bottom left of the current row.

Any right-click event that is not disabled (by calling the event's {{domxref("Event.preventDefault", "preventDefault()")}} method) will result in a `contextmenu` event being fired at the targeted element.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("MouseEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.oncontextmenu", "oncontextmenu")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

In this example, the default action of the `contextmenu` event is canceled using `preventDefault()` when the `contextmenu` event is fired at the first paragraph. As a result, the first paragraph will do nothing when right-clicked, while the second paragraph will show the standard context menu offered by your browser.

### HTML

```html
<p id="noContextMenu">The context menu has been disabled on this paragraph.</p>
<p>But it has not been disabled on this one.</p>
```

### JavaScript

```js
const noContext = document.getElementById('noContextMenu');

noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("HTMLElement/pointerdown_event", "pointerdown")}}
- {{domxref("HTMLElement/pointerup_event", "pointerup")}}
