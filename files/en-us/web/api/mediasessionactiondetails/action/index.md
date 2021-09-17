---
title: MediaSessionActionDetails.action
slug: Web/API/MediaSessionActionDetails/action
tags:
  - API
  - Media
  - Media Session
  - Media Session API
  - MediaSessionActionDetails
  - Property
  - Reference
  - Session
  - action
  - details
browser-compat: api.MediaSessionActionDetails.action
---
{{APIRef("Media Session API")}}

The **`action`** property is the only
required property {{domxref("MediaSessionActionDetails")}} dictionary, specifying the
type of media session action which the action handler callback is being executed
for.

## Syntax

```js
let mediaSessionActionDetails = { action: actionType };

let actionType = mediaSessionActionDetails.action;
```

### Value

A {{domxref("DOMString")}} specifying which of the action types the callback is being
invoked for:

{{page("/en-US/docs/Web/API/MediaSessionActionDetails", "action-types")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Media Session API
- Refer to the {{domxref("MediaSession")}} method
  {{domxref("MediaSession.setActionHandler", "setActionHandler()")}}
