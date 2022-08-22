---
title: 'Element: MSManipulationStateChanged event'
slug: Web/API/Element/MSManipulationStateChanged_event
page-type: web-api-event
tags:
  - Event
  - Event:Microsoft Extensions
  - MSManipulationStateChanged
  - Non-standard
  - Reference
browser-compat: api.Element.MSManipulationStateChanged_event
---
{{APIRef}}{{Non-standard_header}}

**`MSManipulationStateChanged`** fires when the state of an element being manipulated has changed (i.e. whenever you start or finish panning or zooming an element).

It is a proprietary event specific to Microsoft Edge and Internet Explorer.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Unknown</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Unknown</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>
        <a
          href="/en-US/docs/Web/API/MSManipulationEvent"
          title="MSManipulationEvent provides contextual information when contact is made to the screen and an element is manipulated."
          ><code>MSManipulationEvent</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>Unknown</td>
    </tr>
  </tbody>
</table>

Get manipulation states using the `lastState` and `currentState` properties.

## Examples

```js
// Listen for panning state change events
outerScroller.addEventListener("MSManipulationStateChanged", function(e) {
    // Check to see if they lifted while pulled to the top
    if (e.currentState === MS_MANIPULATION_STATE_INERTIA &&
        outerScroller.scrollTop === 0) {
        refreshItemsAsync();
    }
});
```

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("MSManipulationEvent")}}
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
