---
title: Get Current URL
short-title: Get Current URL
slug: Web/WebDriver/Reference/Classic/Commands/GetCurrentURL
page-type: webdriver-command
browser-compat: webdriver.classic.GetCurrentURL
sidebar: webdriver
---

The _Get Current URL_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API returns the URL of the document in the current top-level browsing context. This is equivalent to reading {{domxref("Location.href")}} in the top-level window in JavaScript.

The URL is always that of the top-level document, even if the session has switched to a frame with [Switch To Frame](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/SwitchToFrame).

## Syntax

| Method                                              | URI template                |
| --------------------------------------------------- | --------------------------- |
| [`GET`](/en-US/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/url` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Return value

A string containing the URL of the current top-level document.

After a redirect, this is the final URL, not the one that was requested. After a navigation to a fragment of the page, such as `#details`, the URL includes the fragment.

### Errors

- [`invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.
- `no such window`
  - : The [`window`](/en-US/docs/Web/API/Window) object has been discarded, indicating that the tab or window has been closed.
- `unexpected alert open`
  - : A user prompt, such as [`window.alert`](/en-US/docs/Web/API/Window/alert), is open, and the session's user prompt handler reports it.
    By default, the browser dismisses the prompt and returns this error, except for a `beforeunload` prompt, which it accepts without an error.
    The `unhandledPromptBehavior` [capability](/en-US/docs/Web/WebDriver/Reference/Capabilities) changes how prompts are handled.

## Examples

### Getting the current URL

With a WebDriver server running on `localhost:4444`, assume an active session has navigated to `https://example.org/` using the [Navigate To](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NavigateTo) command. To get the current URL, use the following command, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i http://localhost:4444/session/ID/url
```

The server responds with the URL of the page:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":"https://example.org/"}
```

### Getting the URL after a redirect

Using the same server and session as in the first example, assume the session then used [Navigate To](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NavigateTo) to go to `https://example.org/old-page`, which redirects to `https://example.org/about`. Send the same command to get the current URL:

```bash
curl -i http://localhost:4444/session/ID/url
```

The server responds with the final URL, `https://example.org/about`:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":"https://example.org/about"}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Navigate To](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NavigateTo) command
- [Get Title](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/GetTitle) command
