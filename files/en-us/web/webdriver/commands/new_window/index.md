---
title: New Window
slug: Web/WebDriver/Commands/New_Window
browser-compat: webdriver.commands.NewWindow
---
The _New Window_ [command](/en-US/docs/Web/WebDriver/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API opens a new top-level browsing context of type _window_ or _tab_, and returns with a dictionary containing the _handle_ of the new [WebWindow](/en-US/docs/Web/WebDriver/WebWindow) and its created _type_. If the requested _type_ cannot be created by the browser, the alternative type will be tried to create.

## Syntax

| Method                                        | URI template                       |
| --------------------------------------------- | ---------------------------------- |
| [`POST`](/en-US/docs/Web/HTTP/Methods/DELETE) | `/session/{session id}/window/new` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Payload

The input is an object:

- `type`
  - : Requested type of top-level browsing context.

### Response

The response payload is an object:

- handle
  - : The handle of the new [WebWindow.](/en-US/docs/Web/WebDriver/WebWindow)
- type
  - : The created type of top-level browsing context.

### Errors

- [Invalid session ID](/en-US/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Session does not exist.
- [No such window](/en-US/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : If the [`window`](/en-US/docs/Web/API/Window) has been closed.
- [Unexpected alert open](/en-US/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : A user prompt, such as [`window.alert`](/en-US/docs/Web/API/Window/alert), blocks execution of command until it is dealt with.
- [Unsupported Operation](/en-US/docs/Web/WebDriver/Errors/UnsupportedOperation)
  - : The driver or browser doesn't support the command for some reason (e.g., when it is not possible to create a new tab or window).

## Example

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Close Window](/en-US/docs/Web/WebDriver/Commands/CloseWindow) command
