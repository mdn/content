---
title: Get Window Rect
slug: Web/WebDriver/Commands/GetWindowRect
page-type: webdriver-command
browser-compat: webdriver.commands.GetWindowRect
---

{{QuickLinksWithSubpages("/en-US/docs/Web/WebDriver/Commands")}}

The _Get Window Rect_ [command](/en-US/docs/Web/WebDriver/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API returns the size and position of the given [`WebElement`](/en-US/docs/Web/WebDriver/WebElement). Many [WebDriver clients](/en-US/docs/Web/WebDriver/Clients) present separate API methods for getting an element's location and dimensions, but as an optimization they both use this primitive.

The command operates on the currently selected window, and returns size and position of the operating system window. The returned [`WindowRect`](/en-US/docs/Web/WebDriver/WindowRect) can be used as input for the [Set Window Rect](/en-US/docs/Web/WebDriver/SetWindowRect) command, which is for manipulating a window's position and dimensions.

## Syntax

| Method                                    | URI template                        |
| ----------------------------------------- | ----------------------------------- |
| [`GET`](/en-US/docs/Web/HTTP/Methods/GET) | `/session/{session id}/window/rect` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Response

The response payload is a [`WindowRect`](/en-US/docs/Web/WebDriver/WebWindow):

- `x`
  - : Horizontal position of the operating system window associated with [`window`](/en-US/docs/Web/API/Window), equivalent to [`Window.screenX`](/en-US/docs/Web/API/Window/screenX).
- `y`
  - : Vertical position of the operating system window associated with [`window`](/en-US/docs/Web/API/Window), equivalent to [`Window.screenY`](/en-US/docs/Web/API/Window/screenY).
- `width`
  - : Width of outer bounds of the operating system window associated with [`window`](/en-US/docs/Web/API/Window), equivalent to [`Window.outerWidth`](/en-US/docs/Web/API/Window/outerWidth).
- `height`
  - : Height of the outer bounds of the operating system window associated with [`window`](/en-US/docs/Web/API/Window), equivalent to [`Window.outerHeight`](/en-US/docs/Web/API/Window/outerHeight).

### Errors

- [Invalid session ID](/en-US/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Session does not exist.
- [Unexpected alert open](/en-US/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : A user prompt, such as [`window.alert`](/en-US/docs/Web/API/Window/alert), blocks execution of command until it is dealt with.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- WebWindow
- Associated commands:

  - [Set Window Rect](/en-US/docs/Web/WebDriver/Commands/SetWindowRect)
  - [Get Window Handle](/en-US/docs/Web/WebDriver/Commands/GetWindowHandle)
  - [Get Window Handles](/en-US/docs/Web/WebDriver/Commands/GetWindowHandles)
  - [Close Window](/en-US/docs/Web/WebDriver/Commands/CloseWindow)
