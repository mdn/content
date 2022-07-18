---
title: FocusEvent.relatedTarget
slug: Web/API/FocusEvent/relatedTarget
page-type: web-api-instance-property
tags:
  - API
  - Event
  - Experimental
  - FocusEvent
  - Property
  - Reference
browser-compat: api.FocusEvent.relatedTarget
---
{{ apiref("DOM Events") }}

The **`FocusEvent.relatedTarget`** read-only property is the
secondary target, depending on the type of event:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Event name</th>
      <th scope="col"><code>target</code></th>
      <th scope="col"><code>relatedTarget</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{Event("blur")}}</td>
      <td>The {{domxref("EventTarget")}} losing focus</td>
      <td>
        The {{domxref("EventTarget")}} receiving focus (if any).
      </td>
    </tr>
    <tr>
      <td>{{Event("focus")}}</td>
      <td>The {{domxref("EventTarget")}} receiving focus</td>
      <td>The {{domxref("EventTarget")}} losing focus (if any)</td>
    </tr>
    <tr>
      <td>{{Event("focusin")}}</td>
      <td>The {{domxref("EventTarget")}} receiving focus</td>
      <td>The {{domxref("EventTarget")}} losing focus (if any)</td>
    </tr>
    <tr>
      <td>{{Event("focusout")}}</td>
      <td>The {{domxref("EventTarget")}} losing focus</td>
      <td>The {{domxref("EventTarget")}} receiving focus (if any)</td>
    </tr>
  </tbody>
</table>

Note that [many elements can't have focus](https://stackoverflow.com/questions/42764494/blur-event-relatedtarget-returns-null/42764495), which is a common reason for `relatedTarget` to be
`null`. `relatedTarget` may also be set to `null` for
security reasons, like when tabbing in or out of a page.

{{domxref("MouseEvent.relatedTarget")}} is a similar property for mouse events.

## Value

An instance of {{domxref("EventTarget")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("FocusEvent")}} interface it belongs to.
