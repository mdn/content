---
title: Back command
short-title: Back
slug: Web/WebDriver/Reference/Classic/Commands/Back
page-type: webdriver-command
browser-compat: webdriver.classic.Back
sidebar: webdriver
---

The _back_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API navigates to the previous page in the browsing history. This is equivalent to clicking the browser's back button or calling {{domxref("History.back()")}} in JavaScript.

## Syntax

| Method                                                | URI template                 |
| ----------------------------------------------------- | ---------------------------- |
| [`POST`](/en-US/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/back` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Errors

- [Invalid session id](/en-US/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionId)
  - : Session does not exist.
- No such window
  - : The [`window`](/en-US/docs/Web/API/Window) object has been discarded, indicating that the tab or window has been closed.
- Timeout
  - : The navigation did not complete before its timeout expired.

### Return value

`null` if successful.

## Examples

### Navigating back in browsing history

This example demonstrates navigating from one page to the next and then using the `back` command to return to the first page.

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
current_url = session.current_url
print(f"After back: {current_url}")

# Verify navigation back to the first page
if current_url == first_url:
    print("Back command works as expected.")
else:
    print(f"Expected {first_url}, but got {current_url}")
session.quit()
```

Output:

```plain
First page: https://www.selenium.dev/
Second page: https://www.selenium.dev/documentation/
After back: https://www.selenium.dev/
Back command works as expected.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Forward command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/Forward)
