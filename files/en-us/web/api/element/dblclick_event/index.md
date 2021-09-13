---
title: 'Element: dblclick event'
slug: Web/API/Element/dblclick_event
tags:
  - API
  - DOM
  - Double Click
  - Double-Click
  - Element
  - Event
  - Input
  - Interface
  - MouseEvent
  - Reference
  - button
  - dblclick
  - mouse
browser-compat: api.Element.dblclick_event
---
{{APIRef}}

The **`dblclick`** event fires when a pointing device button (such as a mouse's primary button) is double-clicked; that is, when it's rapidly clicked twice on a single element within a very short span of time.

`dblclick` fires after two {{domxref("Element/click_event", "click")}} events (and by extension, after two pairs of {{domxref("Element.mousedown_event", "mousedown")}} and {{domxref("Element.mouseup_event", "mouseup")}} events).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.ondblclick", "ondblclick")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

This example toggles the size of a card when you double click on it.

### JavaScript

```js
const card = document.querySelector('aside');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});
```

### HTML

```html
<aside>
  <h3>My Card</h3>
  <p>Double click to resize this object.</p>
</aside>
```

### CSS

```css
aside {
  background: #fe9;
  border-radius: 1em;
  display: inline-block;
  padding: 1em;
  transform: scale(.9);
  transform-origin: 0 0;
  transition: transform .6s;
  user-select: none;
}

.large {
  transform: scale(1.3);
}
```

### Result

{{EmbedLiveSample("Examples", 700, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("HTMLElement/pointerdown_event", "pointerdown")}}
- {{domxref("HTMLElement/pointerup_event", "pointerup")}}
