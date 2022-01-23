---
title: HTMLElement.inert
slug: Web/API/HTMLElement/inert
browser-compat: api.HTMLElement.inert
---
{{ APIRef("HTML DOM") }}

The {{domxref("HTMLElement")}} property **`inert`** is a boolean value that, when present, makes the browser "ignore" user input events for the element, including focus events and events from assistive technologies. The browser may also ignore page search and text selection in the element. This can be useful when building UIs such as modals where you would want to "trap" the focus inside the modal when it's visible.

## Syntax

```js
isInert = HTMLElement.inert;

HTMLElement.inert = true | false;
```

### Value

A Boolean which is `true` if the element is inert; otherwise, the value is `false`.

## Example

### HTML

```html
<div>
  <label for="button1">Button 1</label>
  <button id="button1">I am not inert</button>
</div>
<div inert>
  <label for="button2">Button 2</label>
  <button id="button2">I am inert</button>
</div>
```

### CSS

```css
[inert] > * {
  opacity: .5;
}
```

{{ EmbedLiveSample('Example', 560, 200) }}

> **Note:** This attribute, by itself, will not cause any visual change to the content as displayed in the browser. In the example above, CSS has been applied so that any direct descendant of an element with the inert attribute is rendered semi-opaque.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Inert Polyfill](https://github.com/WICG/inert)
