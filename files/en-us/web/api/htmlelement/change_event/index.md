---
title: 'HTMLElement: change event'
slug: Web/API/HTMLElement/change_event
tags:
  - Change
  - Event
  - HTML
  - HTML DOM
  - HTMLElement
  - Reference
  - Web
---
{{APIRef}}

The `change` event is fired for {{HTMLElement("input")}}, {{HTMLElement("select")}}, and {{HTMLElement("textarea")}} elements when an alteration to the element's value is committed by the user. Unlike the {{domxref("HTMLElement/input_event", "input")}} event, the `change` event is not necessarily fired for each alteration to an element's `value`.

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/onchange", "onchange")}}
      </td>
    </tr>
  </tbody>
</table>

Depending on the kind of element being changed and the way the user interacts with the element, the `change` event fires at a different moment:

- When a `{{HTMLElement('input/checkbox', '&lt;input type="checkbox"&gt;')}}` element is checked or unchecked (by clicking or using the keyboard);
- When a `{{HTMLElement('input/radio', '&lt;input type="radio"&gt;')}}` element is checked (but not when unchecked);
- When the user commits the change explicitly (e.g., by selecting a value from a {{HTMLElement("select")}}'s dropdown with a mouse click, by selecting a date from a date picker for `{{HTMLElement('input/date', '&lt;input type="date"&gt;')}}`, by selecting a file in the file picker for `{{HTMLElement('input/file', '&lt;input type="file"&gt;')}}`, etc.);
- When the element loses focus after its value was changed, but not committed (e.g., after editing the value of {{HTMLElement("textarea")}} or `{{HTMLElement('input/text', '&lt;input type="text"&gt;')}}`).

The HTML specification lists [the `<input>` types that should fire the `change` event](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply).

## Examples

### \<select> element

#### HTML

```html
<label>Choose an ice cream flavor:
  <select class="ice-cream" name="ice-cream">
    <option value="">Select One …</option>
    <option value="chocolate">Chocolate</option>
    <option value="sardine">Sardine</option>
    <option value="vanilla">Vanilla</option>
  </select>
</label>

<div class="result"></div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "select result";
}

select {
  grid-area: select;
}

.result {
  grid-area: result;
}
```

#### JavaScript

```js
const selectElement = document.querySelector('.ice-cream');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});
```

#### Result

{{ EmbedLiveSample('select_element', '100%', '75px') }}

### Text input element

For some elements, including `<input type="text">`, the `change` event doesn't fire until the control loses focus. Try entering something into the field below, and then click somewhere else to trigger the event.

#### HTML

```html
<input placeholder="Enter some text" name="name"/>
<p id="log"></p>
```

#### JavaScript

```js
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

#### Result

{{ EmbedLiveSample('Text_input_element', '100%', '75px') }}

## Specifications

{{Specifications("api.GlobalEventHandlers.onchange")}}

## Browser compatibility

{{Compat("api.GlobalEventHandlers.onchange")}}

Different browsers do not always agree whether a `change` event should be fired for certain types of interaction. For example, keyboard navigation in {{HTMLElement("select")}} elements used to never fire a `change` event in Gecko until the user hit Enter or switched the focus away from the `<select>` (see {{bug("126379")}}). Since Firefox 63 (Quantum), this behavior is consistent between all major browsers, however.
