---
title: 'Element: select event'
slug: Web/API/Element/select_event
tags:
  - Element
  - Event
  - Event Handler
  - NeedsCompatTable
  - Reference
  - UIEvent
browser-compat: api.Element.select_event
---
{{APIRef}}

The **`select`** event fires when some text has been selected.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>
        {{domxref("UIEvent")}} if generated from a user interface,
        {{domxref("Event")}} otherwise
      </td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onselect", "onselect")}}
      </td>
    </tr>
  </tbody>
</table>

The event is not available for all elements in all languages. For example, in HTML, `select` events can be dispatched only on form `{{HtmlElement('input/text', '&lt;input type="text"&gt;')}}` and {{HtmlElement("textarea")}} elements.

## Examples

### Selection logger

```html
<input value="Try selecting some text in this element.">
<p id="log"></p>
```

```js
function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);
```

{{EmbedLiveSample("Selection_logger")}}

### onselect equivalent

You can also set up the event handler using the {{domxref("GlobalEventHandlers.onselect", "onselect")}} property:

```js
input.onselect = logSelection;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
