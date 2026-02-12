---
title: Refresh
short-title: Refresh
slug: Web/WebDriver/Reference/Classic/Commands/Refresh
page-type: webdriver-command
browser-compat: webdriver.classic.Refresh
sidebar: webdriver
---

The _Refresh_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API reloads the current page in the active browsing context. This is equivalent to clicking the browser's reload button or calling {{domxref("Location.reload()")}} in JavaScript.

## Syntax

| Method                                                | URI template                    |
| ----------------------------------------------------- | ------------------------------- |
| [`POST`](/en-US/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/refresh` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Errors

- [Invalid session id](/en-US/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionId)
  - : Session does not exist.
- No such window
  - : The [`window`](/en-US/docs/Web/API/Window) object has been discarded, indicating that the tab or window has been closed.
- Unexpected alert open
  - : A modal dialog was open, blocking this operation.

### Return value

`null` if successful.

## Examples

### Reloading the current page

This example demonstrates navigating to a page and then using the `refresh` command to reload it.

```python
from selenium import webdriver
import time

session = webdriver.Firefox()

# Navigate to a page
session.get("https://www.selenium.dev/")
print(f"Initial load: {session.title}")

# Wait before reloading
time.sleep(1)

# Reload the page
session.refresh()
print(f"After reload: {session.title}")

# The page has been reloaded
print("Page reloaded successfully.")

session.quit()
```

Output:

```plain
Initial load: Selenium
After reload: Selenium
Page reloaded successfully.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Back command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/Back)
- [Forward command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/Forward)
