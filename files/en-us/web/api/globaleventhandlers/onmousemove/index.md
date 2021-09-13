---
title: GlobalEventHandlers.onmousemove
slug: Web/API/GlobalEventHandlers/onmousemove
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onmousemove
---
{{ApiRef("HTML DOM")}}

The **`onmousemove`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("mousemove")}} events.

The `mousemove` event fires when the user moves the mouse.

## Syntax

```js
target.onmousemove = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("MouseEvent")}} object as its sole
argument.

## Examples

### Tooltips

This example creates link tooltips that follow your mouse. It uses the
`onmousemove`, {{domxref("GlobalEventHandlers.onmouseover", "onmouseover")}},
and {{domxref("GlobalEventHandlers.onmouseout", "onmouseout")}} event handlers.

#### HTML

```html
<p><a href="#" data-tooltip="First link">See a tooltip here &hellip;</a></p>
<p><a href="#" data-tooltip="Second link">&hellip; or here!</a></p>
```

#### CSS

```css
.tooltip {
  position: absolute;
  z-index: 9999;
  padding: 6px;
  background: #ffd;
  border: 1px #886 solid;
  border-radius: 5px;
}
```

#### JavaScript

```js
const tooltip = new (function() {
  const node = document.createElement('div');
  node.className = 'tooltip';
  node.setAttribute('hidden', '');
  document.body.appendChild(node);

  this.follow = function(event) {
    node.style.left = event.clientX + 20 + 'px';
    node.style.top = event.clientY + 10 + 'px';
  };

  this.show = function(event) {
    node.textContent = event.target.dataset.tooltip;
    node.removeAttribute('hidden');
  };

  this.hide = function() {
    node.setAttribute('hidden', '');
  };
})();

const links = document.querySelectorAll('a');

links.forEach(link => {
  link.onmouseover = tooltip.show;
  link.onmousemove = tooltip.follow;
  link.onmouseout = tooltip.hide;
});
```

#### Result

{{EmbedLiveSample("Tooltips")}}

### Draggable elements

We also have an example available showing the use of the `onmousemove` event
handler with draggable objects — [view the
example in action](https://mdn.mozillademos.org/files/5031/draggable_elements.html).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("mousemove")}} event
