---
title: Get Window Handles
slug: Web/WebDriver/Commands/GetWindowHandles
page-type: webdriver-command
browser-compat: webdriver.commands.GetWindowHandles
---

{{QuickLinksWithSubpages("/en-US/docs/Web/WebDriver/Commands")}}

The _Get Window Handles_ [command](/en-US/docs/Web/WebDriver/Command) of the [WebDriver](/en-US/docs/Web/WebDriver) API returns a list of all [`WebWindow`](/en-US/docs/Web/WebDriver/WebWindow)s. Each tab or window, depending on whether you are using a tabbed browser, is associated by a _window handle_ that is used as a reference when [switching to the window](/en-US/docs/Web/WebDriver/Commands/SwitchToWindow).

In order to determine whether or not a particular interaction with the browser opens a new window, one can obtain the set of window handles before the interaction is performed and compare it with the set after the action is performed.

## Syntax

| Method                                    | URI template                           |
| ----------------------------------------- | -------------------------------------- |
| [`GET`](/en-US/docs/Web/HTTP/Methods/GET) | `/session/{session id}/window/handles` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Errors

- Invalid session ID
  - : Session does not exist.

## Example

C#:

```cpp
using System.Collections.ObjectModel;
using OpenQA.Selenium.Firefox;

namespace MDNWebDriverExamples
{
    class Example
    {
        public static void Main(string[] args)
        {
            FirefoxDriver session = new FirefoxDriver();

            session.ExecuteScript("window.open()");

            ReadOnlyCollection<string> currentWindowHandles = session.WindowHandles;
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
- [Close Window](/en-US/docs/Web/WebDriver/Commands/CloseWindow) command
