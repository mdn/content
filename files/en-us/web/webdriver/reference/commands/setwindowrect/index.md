---
title: Set Window Rect
slug: Web/WebDriver/Reference/Commands/SetWindowRect
page-type: webdriver-command
browser-compat: webdriver.classic.SetWindowRect
sidebar: webdriver
---

The _Set Window Rect_ [command](/en-US/docs/Web/WebDriver/Reference/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API alters the size and position of the operating system window associated with the current [`window`](/en-US/docs/Web/API/Window). The command acts as the setter of [Get Window Rect](/en-US/docs/Web/WebDriver/Reference/Commands/GetWindowRect), which return object you can pass directly as this command's payload.

Certain subsets of devices do not support setting the window dimensions or its position. On these configurations the command will return an [unsupported operating](/en-US/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation) error. To avoid running into situations where calling this might error it is possible to call it conditionally on whether the [`setWindowRect` capability](/en-US/docs/Web/WebDriver/Reference/Capabilities/setWindowRect) is set to true for the session.

Setting the window rect takes `x`, `y`, `width`, and `height` as input. All the fields are optional, e.g., the command may be called with an empty object, and in this case it will act as a no-op. To set the position both of `x` and `y` are required, and correspondingly both `width` and `height` are required for altering the window's dimensions.

When setting the width or height, it is not guaranteed that the resulting window size will exactly match that which was requested. The driver is expected to clamp values that are larger than the physical screen dimensions, or smaller than the minimum window size. Some drivers may also have other limitations such as not being able to resize in single-pixel increments. For this reason, the returned `width` and `height` might not exactly match [`Window.outerWidth`](/en-US/docs/Web/API/Window/outerWidth) and [`Window.outerHeight`](/en-US/docs/Web/API/Window/outerHeight).

Setting the window's position is similar in nature to calling [`Window.moveTo(x, y)`](/en-US/docs/Web/API/Window/moveTo), but differences itself by bypassing security restrictions related to window manipulation.

The Set Window Rect command is blocking.

## Syntax

| Method                                              | URI template                        |
| --------------------------------------------------- | ----------------------------------- |
| [POST](/en-US/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/window/rect` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Payload

The input is a [`WindowRect`](/en-US/docs/Web/WebDriver/Reference/WindowRect) object:

- `x`

  - : Horizontal position of the [`window`](/en-US/docs/Web/API/Window), which equivalent to [`Window.screenX`](/en-US/docs/Web/API/Window/screenX). Must be a number in the −(2^31) to 2^31 − 1 range, null, or undefined.

- `y`
  - : Vertical position of the [`window`](/en-US/docs/Web/API/Window), which is equivalent to [`Window.screenY`](/en-US/docs/Web/API/Window/screenY). Must be a number in the −(2^31) to 2^31 − 1 range, null, or undefined.
- `width`
  - : Outer width of the [`window`](/en-US/docs/Web/API/Window), which is equivalent to [`Window.outerWidth`](/en-US/docs/Web/API/Window/outerWidth). Must be a number in the 0 to 2^31 − 1 range, null, or undefined.
- `height`
  - : Outer width of the [`window`](/en-US/docs/Web/API/Window), which is equivalent to [`Window.outerHeight`](/en-US/docs/Web/API/Window/outerHeight). Must be a number in the 0 to 2^31 − 1 range, null, or undefined.

### Response

The response payload is a [`WindowRect`](/en-US/docs/Web/WebDriver/Reference/WebWindow):

- `x`
  - : Horizontal position of the operating system window associated with [`window`](/en-US/docs/Web/API/Window), equivalent to [`Window.screenX`](/en-US/docs/Web/API/Window/screenX).
- `y`
  - : Vertical position of the operating system window associated with [`window`](/en-US/docs/Web/API/Window), equivalent to [`Window.screenY`](/en-US/docs/Web/API/Window/screenY).
- `width`
  - : Width of outer bounds of the operating system window associated with [`window`](/en-US/docs/Web/API/Window), equivalent to [`Window.outerWidth`](/en-US/docs/Web/API/Window/outerWidth).
- `height`
  - : Height of the outer bounds of the operating system window associated with [`window`](/en-US/docs/Web/API/Window), equivalent to [`Window.outerHeight`](/en-US/docs/Web/API/Window/outerHeight).

### Errors

- Invalid argument
  - : If any of the fields in the [`WindowRect`](/en-US/docs/Web/WebDriver/Reference/WindowRect) payload object do not meet the type or bounds constraints, or if only one of the `x`/`y` pair or `width`/`height` pair fields are specified.
- [Invalid session ID](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.
- [No such window](/en-US/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : If the [`window`](/en-US/docs/Web/API/Window) has been closed.
- [Unexpected alert open](/en-US/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : A user prompt, such as [`window.alert`](/en-US/docs/Web/API/Window/alert), blocks execution of command until it is dealt with.
- [Unsupported operation](/en-US/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)

  - : If the driver does not support altering the window's size or position. This is usually the case on mobile devices, where the browser has a set dimension and cannot be moved around on the screen.

    You can inspect the [`setWindowRect` capability](/en-US/docs/Web/WebDriver/Reference/Capabilities/setWindowRect) to tell if the device supports this command.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`WebWindow`](/en-US/docs/Web/WebDriver/Reference/WebWindow) object
- Associated commands:

  - [Get Window Rect](/en-US/docs/Web/WebDriver/Reference/Commands/GetWindowRect)
  - [Get Window Handle](/en-US/docs/Web/WebDriver/Reference/Commands/GetWindowHandle)
  - [Get Window Handles](/en-US/docs/Web/WebDriver/Reference/Commands/GetWindowHandles)
  - [Close Window](/en-US/docs/Web/WebDriver/Reference/Commands/CloseWindow)
