---
title: Get Element Tag Name
slug: Web/WebDriver/Commands/GetElementTagName
page-type: webdriver-command
browser-compat: webdriver.commands.GetElementTagName
---

{{QuickLinksWithSubpages("/en-US/docs/Web/WebDriver/Commands")}}

The _Get Element Tag Name_ [command](/en-US/docs/Web/WebDriver/Command) of the [WebDriver](/en-US/docs/Web/WebDriver) API returns the tag name of the referenced [web element](/en-US/docs/Web/WebDriver/WebElement). If for example the element is an {{HTMLElement("img")}}, the returned tag name is `"IMG"`, which is equivalent to calling {{domxref("Element.tagName")}} on the element. For XML/XHTML documents it may be cased differently.

## Syntax

| Method | URI template                                      |
| ------ | ------------------------------------------------- |
| `GET`  | `/session/{session id}/element/{element id}/name` |

### URL parameters

- `session id`
  - : Identifier of the session.
- `element id`
  - : Identifier of the [web element](/en-US/docs/Web/WebDriver/WebElement) to get the tag name of.

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
from selenium import webdriver

session = webdriver.Firefox()
session.get("https://google.com/?hl=en")
search_box = driver.find_element_by_id("q")

print(search_box.tag_name)
```

Output:

```plain
INPUT
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
