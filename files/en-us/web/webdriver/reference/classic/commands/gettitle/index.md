---
title: Get Title
short-title: Get Title
slug: Web/WebDriver/Reference/Classic/Commands/GetTitle
page-type: webdriver-command
browser-compat: webdriver.classic.GetTitle
sidebar: webdriver
---

The _Get Title_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API returns the document title of the current top-level browsing context (window or tab). This is equivalent to reading the {{domxref("Document.title")}} property in JavaScript.

## Syntax

| Method                                              | URI template                  |
| --------------------------------------------------- | ----------------------------- |
| [`GET`](/en-US/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/title` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Errors

- [Invalid session id](/en-US/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionId)
  - : Session does not exist.
- No such window
  - : The [`window`](/en-US/docs/Web/API/Window) object has been discarded, indicating that the tab or window has been closed.

### Return value

A string containing the title of the current document, equivalent to the value of {{domxref("Document.title")}}.

## Examples

### Retrieving the page title

With a WebDriver server running on `localhost:4444`, assume an active session has navigated to `https://example.org` and you have the `sessionId` from the response. You can retrieve the document title by using the following command:

```bash
curl -i http://localhost:4444/session/16005d0d-b0dd-4e71-ab38-025329c3baef/title
```

The server responds with the document title as shown here:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":"Example Domain"}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
