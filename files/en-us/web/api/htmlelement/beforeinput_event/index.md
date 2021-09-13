---
title: 'HTMLElement: beforeinput event'
slug: Web/API/HTMLElement/beforeinput_event
tags:
  - API
  - Event
  - HTML DOM
  - HTMLElement
  - InputEvent
  - Reference
  - beforeinput
browser-compat: api.HTMLElement.beforeinput_event
---
{{APIRef}}

The DOM **`beforeinput`** event fires when the value of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element is about to be modified. The event also applies to elements with {{domxref("HTMLElement.contentEditable", "contenteditable")}} enabled, and to any element when {{domxref("Document.designMode", "designMode")}} is turned on.

This allows web apps to override text edit behavior before the browser modifies the DOM tree, and provides more control over input events to improve performance.

In the case of `contenteditable` and `designMode`, the event target is the **editing host**. If these properties apply to multiple elements, the editing host is the nearest ancestor element whose parent isn't editable.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("InputEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>None</td>
    </tr>
    <tr>
      <th>Sync / Async</th>
      <td>Sync</td>
    </tr>
    <tr>
      <th>Composed</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Default Action</th>
      <td>Update the DOM element</td>
    </tr>
  </tbody>
</table>

## Examples

### Feature Detection

The following function returns true if `beforeinput`, and thus `getTargetRanges`, is supported.

```js
function isBeforeInputEventAvailable() {
  return window.InputEvent && typeof InputEvent.prototype.getTargetRanges === "function";
}
```

### Simple logger

This example logs the current value of the element, immediately before replacing that value with the new one applied to the {{HtmlElement("input")}} element.

#### HTML

```html
<input placeholder="Enter some text" name="name"/>
<p id="values"></p>
```

#### JavaScript

```js
const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('beforeinput', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

#### Result

{{EmbedLiveSample("Simple_logger")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related event: [`input`](/en-US/docs/Web/API/HTMLElement/input_event)
