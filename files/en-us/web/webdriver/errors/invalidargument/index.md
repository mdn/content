---
title: Invalid argument
slug: Web/WebDriver/Errors/InvalidArgument
page-type: webdriver-error
---

{{QuickLinksWithSubpages("/en-US/docs/Web/WebDriver/Errors")}}

The **invalid argument** error is a [WebDriver error](/en-US/docs/Web/WebDriver/Errors) that occurs when the arguments passed to a [command](/en-US/docs/Web/WebDriver/Commands) are either invalid or malformed.

Invalid argument errors can be likened to [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)s in [JavaScript](/en-US/docs/Web/JavaScript), in that they can occur for a great many APIs when the input value is not of the expected type or malformed in some way. See the type- and bounds constraints for each [WebDriver command](/en-US/docs/Web/WebDriver/Commands).

## Example

It is for example not possible to set a window size to a negative value:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
try:
    session.set_window_size(-100, 0)
except exceptions.InvalidArgumentException as e:
    print(e.message)
```

Output:

```plain
InvalidArgumentException: Expected -100 to be >= 0
```

## See also

- [List of WebDriver errors](/en-US/docs/Web/WebDriver/Errors)
- [List of WebDriver commands](/en-US/docs/Web/WebDriver/Commands)
