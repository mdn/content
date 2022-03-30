---
title: Close Window
slug: Web/WebDriver/Commands/CloseWindow
tags:
  - Close Window
  - Command
  - Reference
  - WebDriver
browser-compat: webdriver.commands.CloseWindow
---
The _Close Window_ [command](/en-US/docs/Web/WebDriver/Command) of the [WebDriver](/en-US/docs/Web/WebDriver) API closes the current top-level browsing context (window or tab) and returns with the list of currently open [`WebWindow`](/en-US/docs/Web/WebDriver/WebWindow)s. If it is the last window that is being closed, the WebDriver session will implicitly be deleted. Subsequent commands after the session is ended will therefore cause [invalid session ID](/en-US/docs/Web/WebDriver/Errors/InvalidSessionID) errors.

## Syntax

| Method                                          | URI template                   |
| ----------------------------------------------- | ------------------------------ |
| [`DELETE`](/en-US/docs/Web/HTTP/Methods/DELETE) | `/session/{session id}/window` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Errors

- [Invalid session ID](/en-US/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Session does not exist.
- [Unexpected alert open](/en-US/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : A user prompt, such as [`window.alert`](/en-US/docs/Web/API/Window/alert), blocks execution of command until it is dealt with.

## Example

Python:

```python
from selenium import webdriver

session = webdriver.Firefox()
original_window = session.window_handle

new_window = session.execute_script("return window.open()")
session.switch_to.window(new_window)

session.close()
session.switch_to.window(original_window)
```

C#:

```cpp
using OpenQA.Selenium.Firefox;

namespace MDNWebDriverExamples
{
    class Example
    {
        public static void Main(string[] args)
        {
            FirefoxDriver session = new FirefoxDriver();
            string original_window = session.CurrentWindowHandle;// Optional if you want to store the handle in a variable

            session.ExecuteScript("window.open()");
            session.SwitchTo().Window(session.WindowHandles[1]); // Switch to the second window

            session.Close(); // Close current window
            session.SwitchTo().Window(session.WindowHandles[0]); // Switch back to the first window
        }
    }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Switch To Window](/en-US/docs/Web/WebDriver/Commands/SwitchToWindow) command
- [Get Window Handle](/en-US/docs/Web/WebDriver/Commands/GetWindowHandle) command
- [Get Window Handles](/en-US/docs/Web/WebDriver/Commands/GetWindowHandles) command
