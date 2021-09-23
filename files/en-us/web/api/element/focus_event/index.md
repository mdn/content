---
title: 'Element: focus event'
slug: Web/API/Element/focus_event
tags:
  - API
  - DOM
  - Element
  - Event
  - Focus
  - FocusEvent
  - Reference
browser-compat: api.Element.focus_event
---
{{APIRef}}

The **`focus`** event fires when an element has received focus. The main difference between this event and {{domxref("Element/focusin_event", "focusin")}} is that `focusin` bubbles while `focus` does not.

The opposite of `focus` is {{domxref("Element/blur_event", "blur")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
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
        {{domxref("GlobalEventHandlers/onfocus", "onfocus")}}
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

### Simple example

#### HTML

```html
<form id="form">
  <input type="text" placeholder="text input">
  <input type="password" placeholder="password">
</form>
```

#### JavaScript

```js
const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';
});
```

#### Result

{{EmbedLiveSample("Simple_example", '100%', '50px')}}

### Event delegation

There are two ways of implementing event delegation for this event: by using the {{Event("focusin")}} event, or by setting the `useCapture` parameter of {{domxref("EventTarget.addEventListener()", "addEventListener()")}} to `true`.

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

form.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';
}, true);
```

#### Result

{{EmbedLiveSample("Event_delegation", '100%', '50px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focusin_event", "focusin")}}, {{domxref("Element/focusout_event", "focusout")}}
- This event on `Window` targets: {{domxref("Window/focus_event", "focus")}} event
- [Focusing: focus/blur](https://javascript.info/focus-blur)
