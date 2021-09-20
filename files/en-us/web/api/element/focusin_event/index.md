---
title: 'Element: focusin event'
slug: Web/API/Element/focusin_event
tags:
  - API
  - DOM
  - Element
  - Event
  - FocusEvent
  - Reference
  - focusin
browser-compat: api.Element.focusin_event
---
{{APIRef}}

The **`focusin`** event fires when an element is about to receive focus. The main difference between this event and {{domxref("Element/focus_event", "focus")}} is that `focusin` bubbles while `focus` does not.

The opposite of `focusin` is {{domxref("Element/focusout_event", "focusout")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{DOMxRef("FocusEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/onfocusin", "onfocusin")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Sync / Async</th>
      <td>Sync</td>
    </tr>
    <tr>
      <th scope="row">Composed</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Examples

### Live example

#### HTML

```html
<form id="form">
  <input type="text" placeholder="text input">
  <input type="password" placeholder="password">
</form>
```

#### JavaScript

```js
const form = document.getElementById('form');

form.addEventListener('focusin', (event) => {
  event.target.style.background = 'pink';
});

form.addEventListener('focusout', (event) => {
  event.target.style.background = '';
});
```

#### Result

{{EmbedLiveSample("Live_example", '100%', '50px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusout_event", "focusout")}}
- [Focusing: focus/blur](https://javascript.info/focus-blur)

