---
title: Stale element reference
slug: Web/WebDriver/Errors/StaleElementReference
tags:
  - Error
  - Reference
  - Stale element reference
  - WebDriver
---
The **stale element reference** error is a [WebDriver error](/en-US/docs/Web/WebDriver/Errors) that occurs because the referenced [web element](/en-US/docs/Web/WebDriver/WebElement) is no longer attached to the [DOM](/en-US/docs/Glossary/DOM).

Every DOM element is represented in WebDriver by a unique identifying reference, known as a _[web element](/en-US/docs/Web/WebDriver/WebElement)_.
The web element reference is a {{Glossary("UUID")}} used to execute commands targeting specific elements, such as [getting an element's tag name](/en-US/docs/Web/WebDriver/Commands/GetElementTagName) and [retrieving a property](/en-US/docs/Web/WebDriver/Commands/GetElementProperty) off an element.

When an element is no longer attached to the DOM, i.e. it has been removed from the document or the document has changed, it is said to be _stale_. Staleness occurs for example when you have a web element reference and the document it was retrieved from navigates.

## Examples

### Document navigation

Upon navigation, all web element references to the previous document will be discarded along with the document. This will cause any subsequent interaction with the [web element](/en-US/docs/Web/WebDriver/WebElement) to fail with the stale element reference error:

```python
import urllib

from selenium import webdriver
from selenium.common import exceptions

def inline(doc):
    return "data:text/html;charset=utf-8,{}".format(urllib.quote(doc))

session = webdriver.Firefox()
session.get(inline("<strong>foo</strong>"))
foo = session.find_element_by_css_selector("strong")

session.get(inline("<i>bar</i>"))
try:
    foo.tag_name
except exceptions.StaleElementReferenceException as e:
    print(e)
```

Output:

```
StaleElementReferenceException: The element reference of e75a1764-ff73-40fa-93c1-08cb90394b65 is stale either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed
```

### Node removal

When a document node is removed from the DOM, its web element reference will be invalidated. This will also cause any subsequent interaction with the [web element](/en-US/docs/Web/WebDriver/WebElement) to fail with the stale element reference error:

```python
import urllib

from selenium import webdriver
from selenium.common import exceptions

def inline(doc):
    return "data:text/html;charset=utf-8,{}".format(urllib.quote(doc))

session = webdriver.Firefox()
session.get(inline("<button>foo</button>"))
button = session.find_element_by_css_selector("button")
session.execute_script("""
    let [button] = arguments;
    button.remove();
    """, script_args=(button,))

try:
    button.click()
except exceptions.StaleElementReferenceException as e:
    print(e)
```

Output:

```
StaleElementReferenceException: The element reference of e75a1764-ff73-40fa-93c1-08cb90394b65 is stale either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed
```

## See also

- [WebElement](/en-US/docs/Web/WebDriver/WebElement)
- Associated commands:

  - [Find Element](/en-US/docs/Web/WebDriver/Commands/FindElement)
  - [Find Elements](/en-US/docs/Web/WebDriver/Commands/FindElements)
  - [Find Element From Element](/en-US/docs/Web/WebDriver/Commands/FindElementFromElement)
  - [Find Elements From Element](/en-US/docs/Web/WebDriver/Commands/FindElementsFromElement)
