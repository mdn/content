---
title: Get Element Property
slug: Web/WebDriver/Commands/GetElementProperty
page-type: webdriver-command
browser-compat: webdriver.commands.GetElementProperty
---

{{QuickLinksWithSubpages("/en-US/docs/Web/WebDriver/Commands")}}

The _Get Element Property_ [command](/en-US/docs/Web/WebDriver/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API returns the property of the referenced [web element](/en-US/docs/Web/WebDriver/WebElement). Given `<input value=foo>` where the user changes the value to `bar`, the returned property is `bar` rather than the initial value `foo`. This is equivalent to calling {{domxref("Element.getProperty")}} on the element.

## Syntax

| Method | URI template                                                 |
| ------ | ------------------------------------------------------------ |
| `GET`  | `/session/{session id}/element/{element id}/property/{name}` |

### URL parameters

- `session id`
  - : Identifier of the session.
- `element id`
  - : Identifier of the [web element](/en-US/docs/Web/WebDriver/WebElement) to get the tag name of.
- `name`
  - : Identifier of the property of [web element](/en-US/docs/Web/WebDriver/WebElement) to get.

### Errors

- [Session not created](/en-US/docs/Web/WebDriver/Errors/SessionNotCreated)
  - : Session does not exist.
- [No such window](/en-US/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : The [`window`](/en-US/docs/Web/API/Window) object has been discarded, indicating that the tab or window has been closed.
- [Unexpected alert open](/en-US/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : A user prompt, such as [`window.alert`](/en-US/docs/Web/API/Window/alert), blocks execution of command until it is dealt with.

## Examples

Python:

```python
import urllib

from selenium import webdriver

def inline(doc):
    return "data:text/html;charset=utf-8,{}".format(urllib.quote(doc))

session = webdriver.Firefox()
session.get(inline("<input value=foo>"))
textbox = driver.find_element_by_tag_name("input")
textbox.send_keys("bar")

print(text_box.get_attribute("value"))
print(text_box.get_property("value"))
```

Output:

```plain
foo
bar
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Get Element Attribute](/en-US/docs/Web/WebDriver/Commands/GetElementAttribute) command
- _[What is the difference between properties and attributes?](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html)_ on Stack Overflow
