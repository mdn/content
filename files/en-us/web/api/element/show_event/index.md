---
title: 'Element: show event'
slug: Web/API/Element/show_event
page-type: web-api-event
tags:
  - API
  - Deprecated
  - Event
  - Reference
  - show
  - Non-standard
browser-compat: api.Element.show_event
---
{{APIRef}}{{deprecated_header}}{{Non-standard_header}}

The **`show`** event is fired when a {{domxref("Element/contextmenu_event", "contextmenu")}} event was fired on/bubbled to an element that has a [`contextmenu` attribute](/en-US/docs/Web/HTML/Global_attributes/contextmenu).

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('show', (event) => {});

onshow = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```html
<div contextmenu="test"></div>
<menu type="context" id="test">
  <menuitem label="alert" onclick="alert('the alert label has been clicked')" />
</menu>

<script>
  document.getElementById("test").addEventListener("show", (e) => {
    alert("the context menu will be displayed");
  }, false);
</script>
```

## Specifications

This event is not on any standards track.

## Browser compatibility

{{Compat}}
