---
title: Set Timeouts
slug: Web/WebDriver/Commands/SetTimeouts
page-type: webdriver-command
browser-compat: webdriver.commands.SetTimeouts
---

{{QuickLinksWithSubpages("/en-US/docs/Web/WebDriver/Commands")}}

The _Set Timeouts_ [command](/en-US/docs/Web/WebDriver/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API sets the timeouts associated with the current session. The [session timeout](/en-US/docs/Web/WebDriver/Timeouts) durations control such behavior as timeouts on [script injection](/en-US/docs/Web/WebDriver/Timeouts#script), [document navigation](/en-US/docs/Web/WebDriver/Timeouts#pageload), and [element retrieval](/en-US/docs/Web/WebDriver/Timeouts#implicit).

## Syntax

| Method                                     | URI template                     |
| ------------------------------------------ | -------------------------------- |
| [`POST`](/en-US/docs/Web/HTTP/Methods/GET) | `/session/{session id}/timeouts` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Payload

The input is a [`Timeouts`](/en-US/docs/Web/WebDriver/Timeouts) object:

- `implicit`
  - : Time in milliseconds to retry the [element location strategy](/en-US/docs/Web/WebDriver/WebElement) when finding an element. This defaults to 0, meaning the strategy is run only once.
- `pageLoad`
  - : Time in milliseconds to wait for the document to finish loading. By default, WebDriver will wait five minutes (or 300,000 ms).
- `script`
  - : Scripts injected with [Execute Script](/en-US/docs/Web/WebDriver/Commands/ExecuteScript) or [Execute Async Script](/en-US/docs/Web/WebDriver/Commands/ExecuteAsyncScript) will run until they hit the script timeout duration, which is also given in milliseconds. The scripts will then be interrupted and a [script timeout error](/en-US/docs/Web/WebDriver/Errors/ScriptTimeoutError) will be returned. Defaults to 30 seconds (or 30,000 ms).

### Errors

- [Invalid session ID](/en-US/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Session does not exist.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Timeouts`](/en-US/docs/Web/WebDriver/Timeouts) object
- [List of WebDriver commands](/en-US/docs/Web/WebDriver/Commands)
