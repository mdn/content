---
title: Screen.unlockOrientation()
slug: Web/API/Screen/unlockOrientation
page-type: web-api-instance-method
tags:
  - API
  - CSSOM View
  - Deprecated
  - Method
  - NeedsMarkupWork
  - Screen Orientation
browser-compat: api.Screen.unlockOrientation
---
{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}

The **`Screen.unlockOrientation()`** method removes all the
previous screen locks set by the page/app. The {{DOMxRef("ScreenOrientation.unlock()")}}
method should be used instead.

> **Warning:** This feature is deprecated and should be avoided. Use the {{DOMxRef("ScreenOrientation.unlock()")}} method instead.

> **Note:** This method only works for installed Web apps or for Web pages
> in [fullscreen mode](/en-US/docs/Web/API/Fullscreen_API).

## Syntax

```js
unlockOrientation()
```

### Parameters

None.

### Return value

Returns `true` if the orientation was successfully unlocked or
`false` if the orientation couldn't be unlocked.

## Examples

```js
const unlockOrientation = screen.unlockOrientation || screen.mozUnlockOrientation || screen.msUnlockOrientation || (screen.orientation && screen.orientation.unlock);

if (unlockOrientation()) {
  // orientation was unlocked
} else {
  // orientation unlock failed
}
```

## Specifications

This feature is not part of any specification. It is no longer on track to becoming a standard.

Use {{domxref("ScreenOrientation.unlock()")}} instead.

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Screen.orientation")}}
- {{DOMxRef("Screen.lockOrientation()")}}
- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}} event
- [Managing screen orientation](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
