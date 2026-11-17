---
title: Navigate To
short-title: Navigate To
slug: Web/WebDriver/Reference/Classic/Commands/NavigateTo
page-type: webdriver-command
browser-compat: webdriver.classic.NavigateTo
sidebar: webdriver
---

The _Navigate To_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API navigates the current top-level browsing context to a new URL. This is broadly equivalent to setting {{domxref("Location.href")}} in the top-level window in JavaScript.

The command navigates the top-level browsing context, even if the session has switched to a frame with [Switch To Frame](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/SwitchToFrame). If the command succeeds, later commands apply to the top-level document.

For an `http` or `https` URL that differs from the current one, the command can wait for the new page to load before it returns. When it returns depends on the session's page load strategy, set with the `pageLoadStrategy` [capability](/en-US/docs/Web/WebDriver/Reference/Capabilities):

- `"normal"` (the default)
  - : The command returns once the page's {{domxref("Window/load_event", "load")}} event has fired.
- `"eager"`
  - : The command returns once the page's {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} event has fired.
- `"none"`
  - : The command returns immediately, and the new page may not have loaded yet.

If the new page redirects to another `http` or `https` URL with a [`<meta http-equiv="refresh">`](/en-US/docs/Web/HTML/Reference/Elements/meta/http-equiv#refresh) element that has a delay of 1 second or less, the command also waits for that page, following the same page load strategy. If the page doesn't load within the session's [page load timeout](/en-US/docs/Web/WebDriver/Reference/Classic/Timeouts#pageload), the command returns a `timeout` error.

## Syntax

| Method                                                | URI template                |
| ----------------------------------------------------- | --------------------------- |
| [`POST`](/en-US/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/url` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Payload

The input is an object:

- `url`
  - : A string containing the absolute URL to navigate to, such as `"https://example.org/"`.
    It can include a fragment.

### Return value

`null` if successful.

The command succeeds whatever the HTTP status of the response, including error statuses such as [`404`](/en-US/docs/Web/HTTP/Reference/Status/404).

### Errors

- [`invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.
- [`insecure certificate`](/en-US/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)
  - : The page's TLS certificate is invalid or untrusted, and the session's [`acceptInsecureCerts`](/en-US/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts) capability is `false`.
- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : The `url` field is missing, is not a string, or is not an absolute URL, such as `/about` or `example.org`.
- `no such window`
  - : The [`window`](/en-US/docs/Web/API/Window) object has been discarded, indicating that the tab or window has been closed.
- `timeout`
  - : The page did not load before the session's page load timeout expired.
- `unexpected alert open`
  - : A user prompt, such as [`window.alert`](/en-US/docs/Web/API/Window/alert), is open, and the session's user prompt handler reports it.
    The command then doesn't navigate.
    By default, the browser dismisses the prompt and returns this error, except for a `beforeunload` prompt, which it accepts without an error.
    The `unhandledPromptBehavior` [capability](/en-US/docs/Web/WebDriver/Reference/Capabilities) changes how prompts are handled.
- [`unknown error`](/en-US/docs/Web/WebDriver/Reference/Errors/UnknownError)
  - : The navigation failed with a network error, for example because the host name can't be resolved.

## Examples

### Navigating to a page

With a WebDriver server running on `localhost:4444`, assume an active session has been created. To navigate to `https://example.org/`, send the URL in the request payload, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i -H "Content-Type: application/json" \
  -d '{"url": "https://example.org/"}' \
  http://localhost:4444/session/ID/url
```

Once the page has loaded, the server responds with a `null` value:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":null}
```

To check which URL the browser ended up on, for example after a redirect, use the [Get Current URL](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/GetCurrentURL) command.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Get Current URL](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/GetCurrentURL) command
- [Back](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/Back) command
- [Forward](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/Forward) command
- [Refresh](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/Refresh) command
- [WebDriver classic timeouts](/en-US/docs/Web/WebDriver/Reference/Classic/Timeouts)
