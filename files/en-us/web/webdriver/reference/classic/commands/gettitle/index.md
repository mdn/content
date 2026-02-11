---
title: Get title command
slug: Web/WebDriver/Reference/Classic/Commands/GetTitle
page-type: webdriver-command
browser-compat: webdriver.classic.GetTitle
sidebar: webdriver
---

The _Get Title_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API returns the document title of the current top-level browsing context (window or tab). This is equivalent to reading the {{domxref("Document.title")}} property in JavaScript.

## Syntax

| Method | URI template                  |
| ------ | ----------------------------- |
| `GET`  | `/session/{session id}/title` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Errors

- [Invalid session id](/en-US/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionId)
  - : Session does not exist.
- [No such window](/en-US/docs/Web/WebDriver/Reference/Classic/Errors/NoSuchWindow)
  - : The [`window`](/en-US/docs/Web/API/Window) object has been discarded, indicating that the tab or window has been closed.

### Return value

A string containing the title of the current document, equivalent to the value of {{domxref("Document.title")}}.

## Examples

### Retrieving the page title

This example navigates to a web page and retrieves its document title.

```python
from selenium import webdriver

session = webdriver.Firefox()
session.get("https://www.selenium.dev/")

print(session.title)

session.quit()
```

Output:

```plain
Selenium
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
