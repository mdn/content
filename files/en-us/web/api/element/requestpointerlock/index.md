---
title: "Element: requestPointerLock() method"
short-title: requestPointerLock()
slug: Web/API/Element/requestPointerLock
page-type: web-api-instance-method
browser-compat: api.Element.requestPointerLock
---

{{APIRef("Pointer Lock API")}}

The **`requestPointerLock()`** method of the {{domxref("Element")}} interface lets you asynchronously ask for the pointer to be locked on the given element.

To track the success or failure of the request, it is necessary to listen for the {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} and {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} events at the {{domxref("Document")}} level.

> [!NOTE]
> In the current specification, `requestPointerLock()` only communicates the success or failure of the request by firing {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} or {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} events. [A proposed update to the specification](https://github.com/w3c/pointerlock/pull/49) updates `requestPointerLock()` to return a {{jsxref("Promise")}} which communicates success or failure. This page documents the version that returns a {{jsxref("Promise")}}. However, note that this version is not yet a standard and is not implemented by all browsers. See [Browser compatibility](#browser_compatibility) for more information.

## Syntax

```js-nolint
requestPointerLock()
requestPointerLock(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An options object that can contain the following properties:
    - `unadjustedMovement` {{optional_inline}}
      - : Disables OS-level adjustment for mouse acceleration, and accesses raw mouse input instead. The default value is `false`; setting it to `true` will disable mouse acceleration.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}}.

## Security

{{Glossary("Transient activation")}} is required when calling `requestPointerLock()`. The user has to interact with the page or a UI element in order for this feature to work. Also, the target element's associated document must be in the active state.

If calling `requestPointerLock()` immediately after releasing the pointer lock via the default unlock gesture (instead of through a `exitPointerLock()` call), the call will fail, even if a {{Glossary("transient activation")}} is available.

If calling `requestPointerLock()` with {{domxref("Element.requestFullscreen()", "requestFullscreen()")}}, the `requestPointerLock()` must be called first, because the {{domxref("Element.requestFullscreen()", "requestFullscreen()")}} will consume the state of {{Glossary("Transient activation", "transient activation")}}.

The `allow-pointer-lock` [sandbox token](/en-US/docs/Web/HTML/Element/iframe#sandbox) must be added when calling `requestPointerLock()` in an {{htmlelement("iframe")}} element. Also, no other elements in other {{htmlelement("iframe")}} elements may be in pointer lock mode.

## Examples

Pointer lock is often used in online games, when you want your mouse movement to be focused on controlling the game, without the distraction of the mouse pointer moving around, going outside the game area, or reaching the edge of the window.

To enable pointer lock, you would get the user to interact with the UI in some way, perhaps by pressing a button, or the game canvas itself.

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

Operating systems enable mouse acceleration by default, which is useful when you sometimes want slow precise movement (think about you might use a graphics package), but also want to move great distances with a faster mouse movement (think about scrolling, and selecting several files). For some first-person perspective games however, raw mouse input data is preferred for controlling camera rotation — where the same distance movement, fast or slow, results in the same rotation. This results in a better gaming experience and higher accuracy, according to professional gamers.

To disable OS-level mouse acceleration and access raw mouse input, you can set the `unadjustedMovement` to `true`:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

For more example code, see:

- [pointer lock demo](https://mdn.github.io/dom-examples/pointer-lock/) ([see source code](https://github.com/mdn/dom-examples/tree/main/pointer-lock))
- {{domxref("Pointer Lock API", "Pointer Lock API", "", "nocode")}}
- [Disable mouse acceleration to provide a better FPS gaming experience](https://web.dev/articles/disable-mouse-acceleration)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Document.exitPointerLock()") }}
- [Pointer Lock](/en-US/docs/Web/API/Pointer_Lock_API)
