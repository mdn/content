---
title: "Element: dblclick event"
short-title: dblclick
slug: Web/API/Element/dblclick_event
page-type: web-api-event
browser-compat: api.Element.dblclick_event
---

{{APIRef("UI Events")}}

The **`dblclick`** event fires when a pointing device button (such as a mouse's primary button) is double-clicked; that is, when it's rapidly clicked twice on a single element within a very short span of time.

`dblclick` fires after two {{domxref("Element/click_event", "click")}} events (and by extension, after two pairs of {{domxref("Element.mousedown_event", "mousedown")}} and {{domxref("Element.mouseup_event", "mouseup")}} events).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("dblclick", (event) => { })

ondblclick = (event) => { }
```

## Event type

A {{domxref("MouseEvent")}}. Inherits from {{domxref("UIEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Examples

This example toggles the size of a card when you double click on it.

### JavaScript

```js
const card = document.querySelector("aside");

card.addEventListener("dblclick", (e) => {
  card.classList.toggle("large");
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
  background: #ffee99;
  border-radius: 1em;
  display: inline-block;
  padding: 1em;
  transform: scale(0.9);
  transform-origin: 0 0;
  transition: transform 0.6s;
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

- [Learn: Introduction to events](/en-US/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
