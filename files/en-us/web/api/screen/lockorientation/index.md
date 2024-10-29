---
title: "Screen: lockOrientation() method"
short-title: lockOrientation()
slug: Web/API/Screen/lockOrientation
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.Screen.lockOrientation
---

{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}

The **`lockOrientation()`** method of the {{DOMxRef("Screen")}}
interface locks the screen into a specified orientation.

> [!WARNING]
> This feature is deprecated and should be avoided. Use the {{DOMxRef("ScreenOrientation.lock()")}} method instead.

> [!NOTE]
> This method only works for installed Web apps or for Web pages
> in [fullscreen mode](/en-US/docs/Web/API/Fullscreen_API).

## Syntax

```js-nolint
lockOrientation(orientation)
```

### Parameters

- `orientation`

  - : The orientation into which to lock the screen. This is either a string or an array
    of strings. Passing several strings lets the screen rotate only in the selected
    orientations.

    The following strings represent the possible orientation requirements you may specify:

    - `portrait-primary`

      - : It represents the orientation of the screen when it is in its primary portrait mode.
        A screen is considered in its primary portrait mode if the device is held in its
        normal position and that position is in portrait, or if the normal position of the
        device is in landscape and the device held turned by 90° clockwise. The normal
        position is device dependent.

    - `portrait-secondary`
      - : It represents the orientation of the screen when it is in its secondary portrait
        mode. A screen is considered in its secondary portrait mode if the device is held 180°
        from its normal position and that position is in portrait, or if the normal position
        of the device is in landscape and the device held is turned by 90° counterclockwise. The
        normal position is device dependent.
    - `landscape-primary`
      - : It represents the orientation of the screen when it is in its primary landscape
        mode. A screen is considered in its primary landscape mode if the device is held in
        its normal position and that position is in landscape, or if the normal position of
        the device is in portrait and the device held is turned by 90° clockwise. The normal
        position is device dependent.
    - `landscape-secondary`
      - : It represents the orientation of the screen when it is in its secondary landscape
        mode. A screen is considered in its secondary landscape mode if the device held is
        180° from its normal position and that position is in landscape, or if the normal
        position of the device is in portrait and the device held is turned by 90°
        counterclockwise. The normal position is device dependent.
    - `portrait`
      - : It represents both `portrait-primary` and
        `portrait-secondary`.
    - `landscape`
      - : It represents both `landscape-primary` and
        `landscape-secondary`.
    - `default`
      - : It represents either `portrait-primary` and
        `landscape-primary` depends on natural orientation of devices. For example,
        if the panel resolution is 1280\*800, `default` will make it landscape, if
        the resolution is 800\*1280, `default` will make it to portrait.

> [!NOTE]
> It's possible to set several locks at the same time. So, if
> the lock is set for only one orientation, the screen orientation will never change
> until the screen orientation is unlocked. Otherwise, the screen orientation will
> change from an orientation to another as long as the orientations are amongst the
> orientations the device has been locked to.

### Return value

Returns `true` if the orientation was authorized to be locked or
`false` if the orientation locking was denied. Note that the return value
doesn't indicate that the screen orientation is indeed locked: there may be a delay.

## Examples

### Usage with a string argument

```js
screen.lockOrientationUniversal =
  screen.lockOrientation ||
  screen.mozLockOrientation ||
  screen.msLockOrientation;

if (screen.lockOrientationUniversal("landscape-primary")) {
  // Orientation was locked
} else {
  // Orientation lock failed
}
```

### Usage with an `Array` argument

```js
screen.lockOrientationUniversal =
  screen.lockOrientation ||
  screen.mozLockOrientation ||
  screen.msLockOrientation;

if (
  screen.lockOrientationUniversal(["landscape-primary", "landscape-secondary"])
) {
  // Orientation was locked
} else {
  // Orientation lock failed
}
```

## Specifications

This feature is not part of any specification. It is no longer on track to becoming a standard.

Use {{domxref("ScreenOrientation.lock()")}} instead.

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Screen.orientation")}}
- {{DOMxRef("Screen.unlockOrientation()")}}
- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}} event
- [Managing screen orientation](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
