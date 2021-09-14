---
title: mssitemodejumplistitemremoved event
slug: Web/API/mssitemodejumplistitemremoved
---
{{APIRef("HTMLMediaElement")}}

{{Non-standard_header()}}

The **`mssitemodejumplistitemremoved`** event occurs when `msSiteModeShowJumpList` is called and an item has been removed from a _Jump List_ by the user.

This proprietary method is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
object.addEventListener("mssitemodejumplistitemremoved", handler, useCapture)
```

## General info

- Synchronous
  - : No
- Bubbles
  - : No
- Cancelable
  - : No

### Note

This event is raised once for every item that has been removed since the last time `msSiteModeShowJumpList` was called. This event is not triggered if `msSiteModeClearJumpList` has been called.

### Parameters

**pEvtObj** \[in]

Type: _IHTMLEventObj_

Pointer to an IHTMLEventObj interface for the current event.

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
