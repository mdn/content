---
title: 'HTMLInputElement: search event'
slug: Web/API/HTMLInputElement/search_event
tags:
  - API
  - Event
  - HTMLInputElement
  - Non-standard
  - Reference
  - Search
  - Web
browser-compat: api.HTMLInputElement.search_event
---
{{APIRef}}{{non-standard_header}}

The **`search`** event is fired when a search is initiated using an {{HTMLElement("input")}} element of `type="search"`.

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
        <code
          ><a href="/en-US/docs/Web/API/GlobalEventHandlers/onsearch"
            >onsearch</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

There are several ways a search can be initiated, such as by pressing <kbd>Enter</kbd> while the {{HTMLElement("input")}} is focused, or, if the [`incremental`](/en-US/docs/Web/HTML/Element/input#attr-incremental) attribute is present, after a UA-defined timeout elapses since the most recent keystroke (with new keystrokes resetting the timeout so the firing of the event is debounced).

Current UA implementations of `<input type="search">` have an additional control to clear the field. Using this control also fires the `search` event. In that case the `value` of the {{HTMLElement("input")}} element will be the empty string.

## Examples

```js
// addEventListener version
const input = document.querySelector('input[type="search"]');

input.addEventListener('search', () => {
 console.log("The term searched for was " + input.value);
})

// onsearch version
const input = document.querySelector('input[type="search"]');

input.onsearch = () => {
 console.log("The term searched for was " + input.value);
})
```

## Specifications

This event is not part of any specification.

## Browser compatibility

{{Compat}}
