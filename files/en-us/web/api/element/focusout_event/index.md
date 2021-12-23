---
title: 'Element: focusout event'
slug: Web/API/Element/focusout_event
tags:
  - API
  - DOM
  - Element
  - Event
  - FocusEvent
  - Reference
  - focusout
  - onfocusout
browser-compat: api.Element.focusout_event
---
{{APIRef}}

The **`focusout`** event fires when an element is about to lose focus. The main difference between this event and {{domxref("Element/blur_event", "blur")}} is that `focusout` [bubbles](/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture) while `blur` does not.

The opposite of `focusout` is {{domxref("Element/focusin_event", "focusin")}}.

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
        {{domxref("GlobalEventHandlers/onfocusout", "onfocusout")}}
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

- Related events: {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusin_event", "focusin")}}
- [Focusing: focus/blur](https://javascript.info/focus-blur)
