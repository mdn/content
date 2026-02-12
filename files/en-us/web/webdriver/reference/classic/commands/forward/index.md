---
title: Forward
short-title: Forward
slug: Web/WebDriver/Reference/Classic/Commands/Forward
page-type: webdriver-command
browser-compat: webdriver.classic.Forward
sidebar: webdriver
---

The _Forward_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API navigates to the next page in the browsing history. This is equivalent to clicking the browser's forward button or calling {{domxref("History.forward()")}} in JavaScript.

## Syntax

| Method                                                | URI template                    |
| ----------------------------------------------------- | ------------------------------- |
| [`POST`](/en-US/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/forward` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Errors

- [Invalid session id](/en-US/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionID)
  - : Session does not exist.
- No such window
  - : The [`window`](/en-US/docs/Web/API/Window) object has been discarded, indicating that the tab or window has been closed.
- Timeout
  - : The navigation did not complete before its timeout expired.

### Return value

`null` if successful.

## Examples

### Navigating forward in browsing history

This example demonstrates navigating from one page to the next, going back, and then using the `forward` command to return to the second page.

```python
from selenium import webdriver

session = webdriver.Firefox()

# Navigate to the first page
session.get("https://www.selenium.dev/")
first_url = session.current_url
print(f"First page: {first_url}")

# Navigate to the second page
session.get("https://www.selenium.dev/documentation/")
second_url = session.current_url
print(f"Second page: {second_url}")

# Navigate back to the first page
session.back()
print(f"After back: {session.current_url}")

# Navigate forward to the second page
session.forward()
current_url = session.current_url
print(f"After forward: {current_url}")

# Verify navigation forward to the second page
if current_url == second_url:
    print("Forward command works as expected.")
else:
    print(f"Expected {second_url}, but got {current_url}")

session.quit()
```

Output:

```plain
First page: https://www.selenium.dev/
Second page: https://www.selenium.dev/documentation/
After back: https://www.selenium.dev/
After forward: https://www.selenium.dev/documentation/
Forward command works as expected.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Back command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/Back)
