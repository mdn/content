---
title: Get Element Attribute
slug: Web/WebDriver/Reference/Classic/Commands/GetElementAttribute
page-type: webdriver-command
browser-compat: webdriver.classic.GetElementAttribute
sidebar: webdriver
---

The _Get Element Attribute_ [command](/en-US/docs/Web/WebDriver/Reference/Command) of the [WebDriver](/en-US/docs/Web/WebDriver) API returns the value associated with the attribute of the given name of the referenced [web element](/en-US/docs/Web/WebDriver/Reference/WebElement). For boolean attributes, the associated value is `"true"` if present. Absent attributes return `null`. It is equivalent to calling {{domxref("Element.getAttribute()")}} on the element in JavaScript.

## Syntax

| Method | URI template                                                  |
| ------ | ------------------------------------------------------------- |
| `GET`  | `/session/{session id}/element/{element id}/attribute/{name}` |

### URL parameters

- `session id`
  - : Identifier of the session.
- `element id`
  - : Identifier of the [web element](/en-US/docs/Web/WebDriver/Reference/WebElement) to get the tag name of.
- `name`
  - : Identifier of the attribute of [web element](/en-US/docs/Web/WebDriver/Reference/WebElement) to get.

### Errors

- [`session not created`](/en-US/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)
  - : Session does not exist.
- [`no such window`](/en-US/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : The [`window`](/en-US/docs/Web/API/Window) object has been discarded, indicating that the tab or window has been closed.
- [`unexpected alert open`](/en-US/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : A user prompt, such as [`window.alert`](/en-US/docs/Web/API/Window/alert), blocks execution of command until it is dealt with.

## Examples

Python:

```python
from selenium import webdriver

session = webdriver.Firefox()
session.get("https://google.com/?hl=en")
search_box = session.find_element_by_id("q")

print(search_box.get_attribute("id"))
```

Output:

```plain
q
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
