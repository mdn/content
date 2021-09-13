---
title: 'HTMLElement: input event'
slug: Web/API/HTMLElement/input_event
tags:
  - Content
  - Edit
  - Event
  - Forms
  - HTML DOM
  - HTMLElement
  - Input
  - InputEvent
  - NeedsMobileBrowserCompatibility
  - Reference
  - data
  - value
browser-compat: api.HTMLElement.input_event
---
{{APIRef}}

The **`input`** event fires when the `value` of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element has been changed.

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
      <td>{{DOMxRef("InputEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("GlobalEventHandlers.oninput")}}</td>
    </tr>
  </tbody>
</table>

The event also applies to elements with {{domxref("HTMLElement.contentEditable", "contenteditable")}} enabled, and to any element when {{domxref("Document.designMode", "designMode")}} is turned on. In the case of `contenteditable` and `designMode`, the event target is the _editing host_. If these properties apply to multiple elements, the editing host is the nearest ancestor element whose parent isn't editable.

For `<input>` elements with `type=checkbox` or `type=radio`, the `input` event should fire whenever a user toggles the control, per [the HTML5 specification](https://html.spec.whatwg.org/multipage/input.html#the-input-element:event-input-2). However, historically this has not always been the case. Check compatibility, or use the {{domxref("HTMLElement/change_event", "change")}} event instead for elements of these types.

> **Note:** The `input` event is fired every time the `value` of the element changes. This is unlike the {{domxref("HTMLElement/change_event", "change")}} event, which only fires when the value is committed, such as by pressing the enter key, selecting a value from a list of options, and the like.

## Examples

This example logs the value whenever you change the value of the {{HtmlElement("input")}} element.

### HTML

```html
<input placeholder="Enter some text" name="name"/>
<p id="values"></p>
```

### JavaScript

```js
const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events

  - {{domxref("HTMLElement/beforeinput_event", "beforeinput")}}
  - {{domxref("HTMLElement/change_event", "change")}}
  - {{domxref("HTMLInputElement/invalid_event", "invalid")}}
