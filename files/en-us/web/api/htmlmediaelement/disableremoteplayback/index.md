---
title: HTMLMediaElement.disableRemotePlayback
slug: Web/API/HTMLMediaElement/disableRemotePlayback
page-type: web-api-instance-property
tags:
- Property
browser-compat: api.HTMLMediaElement.disableRemotePlayback
---
{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.disableRemotePlayback`** property
determines whether the media element is allowed to have a remote playback UI.

## Value

A boolean value indicating whether the media element may have a remote playback
UI.  (false means "not disabled", which means "enabled")

## Example

```js
const obj = document.createElement('audio');
obj.disableRemotePlayback = true;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
