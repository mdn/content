---
title: ScreenOrientation.lock()
slug: Web/API/ScreenOrientation/lock
page-type: web-api-instance-method
tags:
  - API
  - Orientation
  - Method
  - Reference
  - Screen Orientation API
  - ScreenOrientation
  - lock
browser-compat: api.ScreenOrientation.lock
---
{{APIRef("Screen Orientation")}}

The **`lock()`** property of the {{domxref("ScreenOrientation")}} interface locks the orientation of the containing document to the specified orientation.

Typically orientation locking is only enabled on mobile devices, and when the browser context is full screen.
If locking is supported, then it must work for all the parameter values listed below.

## Syntax

```js
lock(orientation)
```

### Parameters

- `orientation`
  - : An orientation lock type. One of the following:

    - `"any"`
      - : Any of `portrait-primary`, `portrait-secondary`, `landscape-primary` or `landscape-secondary`.
    - `"natural"`
      - : The natural orientation of the screen from the underlying operating system: either `portrait-primary` or `landscape-primary`.
    - `"landscape"`
      - : An orientation where screen width is greater than the screen height.
        Depending on the platform convention, this may be `landscape-primary`, `landscape-secondary`, or both.
    - `"portrait"`
      - : An orientation where screen height is greater than the screen width.
        Depending on the platform convention, this may be `portrait-primary`, `portrait-secondary`, or both.
    - `"portrait-primary"`
      - : The "primary" portrait mode.
        If the natural orientation is a portrait mode (screen height is greater than width), this will be the same as the natural orientation, and correspond to an angle of 0 degrees.
        If the natural orientation is a landscape mode, then the user agent can choose either portrait orientation as the `portrait-primary` and `portrait-secondary`; one of those will be assigned the angle of 90 degrees and the other will have an angle of 270 degrees.
    - `"portrait-secondary"`
      - : The secondary portrait orientation.
        If the natural orientation is a portrait mode, this will have an angle of 180 degrees (in other words, the device is upside down relative to its natural orientation).
        If the natural orientation is a landscape mode, this can be either orientation as selected by the user agent: whichever was not selected for `landscape-primary`.
    - `"landscape-primary"`
      - : The "primary" landscape mode.
        If the natural orientation is a landscape mode (screen width is greater than height), this will be the same as the natural orientation, and correspond to an angle of 0 degrees.
        If the natural orientation is a portrait mode, then the user agent can choose either portrait orientation as the `landscape-primary` with an angle of either 90 or 270 degrees (`portrait-secondary` will be the other orientation and angle).
    - `"landscape-secondary"`
      - : The secondary landscape mode.
        If the natural orientation is a landscape mode, this orientation is upside down relative to the natural orientation, and will have an angle of 180 degrees.
        If the natural orientation is a portrait mode, this can be either orientation as selected by the user agent: whichever was not selected for `landscape-primary`.

### Return value

A {{jsxref("Promise")}} that resolves after locking succeeds.

### Exceptions

The promise may be rejected with the following exceptions:

- `NotSupportedError` {{domxref("DOMException")}}
  - : The user agent does not support locking the screen orientation.

- `SecurityError` {{domxref("DOMException")}}
  - : The user-agent's pre-lock conditions are not met.
    For example, a browser may require that the top-level browsing context's `Document` is full screen.
    The promise may also be rejected with this error if the document has the sandboxed orientation lock browsing context flag set.

- {{jsxref("TypeError")}}
  - : The `orientation` argument was not supplied.

## Examples

This example shows how to lock the screen to the opposite orientation of the current one.
Note that this example will only work on mobile devices and other devices that support orientation changes.

```html
<div id="example_container">
<button id="fullscreen_button">Fullscreen</button>
<button id="lock_button">Lock</button>
<button id="unlock_button">Unlock</button>
<textarea id="log" rows="7" cols="85"></textarea>
</div>
```

```js
const log = document.getElementById("log");

// Lock button: Lock the screen to the other orientation (rotated by 90 degrees)
const rotate_btn = document.querySelector('#lock_button');
rotate_btn.addEventListener('click', () => {
  log.textContent+=`Lock pressed \n`;

  const oppositeOrientation = screen.orientation.type.startsWith("portrait") ? "landscape" : "portrait";
  screen.orientation.lock(oppositeOrientation)
    .then(() => {
      log.textContent = `Locked to ${oppositeOrientation}\n`
      }
    )
    .catch((error) => {
      log.textContent += `${error}\n`;
    });
});

// Unlock button: Unlock the screen orientation (if locked)
const unlock_btn = document.querySelector('#unlock_button');
unlock_btn.addEventListener('click', () => {
  log.textContent+='Unlock pressed \n';
  screen.orientation.unlock();
} );

// Full screen button: Set the example to fullscreen.
const fullscreen_btn = document.querySelector('#fullscreen_button');
fullscreen_btn.addEventListener('click', () => {
  log.textContent+='Fullscreen pressed \n';
  const container = document.querySelector("#example_container");
  container.requestFullscreen().catch((error) => {
      log.textContent += `${error}\n`
  });
} );
```

To test the example, first press the Fullscreen button.
Once the example is full screen, press the Lock button to switch the orientation, and Unlock to return to the natural orientation.

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
