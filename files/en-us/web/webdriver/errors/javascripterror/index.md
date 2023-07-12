---
title: JavaScript error
slug: Web/WebDriver/Errors/JavaScriptError
page-type: webdriver-error
---

{{QuickLinksWithSubpages("/en-US/docs/Web/WebDriver/Errors")}}

The **JavaScript** error is a [WebDriver error](/en-US/docs/Web/WebDriver/Errors) that occurs when a script the supplied by the user fails to execute.

The underlying cause of the execution error is often supplied in the error message, along with a stacktrace provided by the JavaScript engine in the browser.

## Example

Consider the following injected script which tries to use an undefined variable. In JavaScript this normally causes a ReferenceError to be thrown. WebDriver catches this error and serializes it as a JavaScript error:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
try:
    session.execute_script("return foo")
except exceptions.JavascriptException as e:
    print(e.message)
```

Output:

```
JavascriptException: ReferenceError: foo is not defined
```

## See also

- [List of WebDriver errors](/en-US/docs/Web/WebDriver/Errors)
- Associated commands:

  - [Execute Script](/en-US/docs/Web/WebDriver/Commands/ExecuteScript)
  - [Execute Async Script](/en-US/docs/Web/WebDriver/Commands/ExecuteAsyncScript)
