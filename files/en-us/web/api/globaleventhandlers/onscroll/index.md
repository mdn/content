---
title: GlobalEventHandlers.onscroll
slug: Web/API/GlobalEventHandlers/onscroll
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onscroll
---
{{ApiRef("HTML DOM")}}

The **`onscroll`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes `scroll` events.

The `scroll` event fires when the document view or an element has been
scrolled, whether by the user, a [Web API](/en-US/docs/Web/API), or the
{{glossary("user agent")}}.

> **Note:** Don't confuse `onscroll` with
> {{domxref("GlobalEventHandlers.onwheel", "onwheel")}}!
>
> `onwheel` handles general wheel rotation, while `onscroll`
> handles scrolling of an object's content.

## Syntax

```js
target.onscroll = functionRef
```

### Value

- `functionRef`
  - : A function name, or a [function
    expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("UIEvent")}} object as its sole
    argument.

Only one `onscroll` handler can be assigned to an object at a time.

For greater flexibility, you can pass a {{event("scroll")}} event to the
{{domxref("EventTarget.addEventListener()")}} method instead.

## Example

This example monitors scrolling on a {{HtmlElement("textarea")}}, and logs the
element's vertical scroll position accordingly.

### HTML

```html
<textarea>1 2 3 4 5 6 7 8 9</textarea>
<p id="log"></p>
```

### CSS

```css
textarea {
  width: 4rem;
  height: 8rem;
  font-size: 3rem;
}
```

### JavaScript

```js
const textarea = document.querySelector('textarea');
const log = document.getElementById('log');

textarea.onscroll = logScroll;

function logScroll(e) {
  log.textContent = `Scroll position: ${e.target.scrollTop}`;
}
```

### Result

{{EmbedLiveSample("Example", 700, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Document: `scroll`
  event](/en-US/docs/Web/API/Document/scroll_event)
- [Element: `scroll`
  event](/en-US/docs/Web/API/Element/scroll_event)
