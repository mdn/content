---
title: 'Document: mssitemodejumplistitemremoved event'
slug: Web/API/Document/mssitemodejumplistitemremoved_event
page-type: web-api-event
tags:
  - Non-standard
  - Event
---
{{APIRef("DOM")}}

{{Non-standard_header()}}

The **`mssitemodejumplistitemremoved`** event occurs when `msSiteModeShowJumpList()` is called and an item has been removed from a _jump list_ by the user.

This event is raised once for every item that has been removed since the last time `msSiteModeShowJumpList` was called. This event is not triggered if `msSiteModeClearJumpList` has been called.

This proprietary method is specific to Internet Explorer and Microsoft Edge.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('mssitemodejumplistitemremoved', (event) => { })

onmssitemodejumplistitemremoved = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
