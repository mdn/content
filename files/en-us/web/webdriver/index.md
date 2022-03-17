---
title: WebDriver
slug: Web/WebDriver
tags:
  - Automation
  - Index
  - Landing
  - Reference
  - Testing
  - Web
  - WebDriver
---
WebDriver is a remote control interface that enables introspection and control of user agents. It provides a platform- and language-neutral wire protocol as a way for out-of-process programs to remotely instruct the behavior of web browsers.

To have the ability to write instruction sets that can be run interchangeably in many browsers on different platforms is critical to deliver a consistent experience to users. With the new wave of developments on the web platform, the increase diversity in devices and demands for real interoperability between the technologies, WebDriver provides tooling for [cross-browser testing](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction).

Provided is a set of interfaces to discover and manipulate DOM elements in web documents and to control the behavior of a user agent. It is primarily intended to allow web authors to write tests that automate a user agent from a separate controlling process, but may also be used in such a way as to allow in-browser scripts to control a — possibly separate — browser.

## Usage

So what does WebDriver let you do and what does it look like? Since WebDriver is programming language neutral, the answer to this question depends on which WebDriver client you're using and the choice of language.

But using a popular client written in Python, your interaction with WebDriver might look like this:

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.expected_conditions import presence_of_element_located



with webdriver.Firefox() as driver:

    wait = WebDriverWait(driver, 10)
    driver.get("http://google.com/ncr")
    driver.find_element_by_name("q").send_keys("cheese" + Keys.RETURN)

    wait.until(presence_of_element_located((By.CSS_SELECTOR, "h3>a")))

    results = driver.find_elements_by_css_selector("h3>a")
    for i, result in results.iteritems():
        print(f"#{i}: {result.text} ({result.get_property('href')})")
```

This might produce output akin to this:

```
#1 Cheese - Wikipedia (https://en.wikipedia.org/wiki/Cheese)
```

## Reference

### Commands

[Commands](/en-US/docs/Web/WebDriver/Commands)

{{ListSubpages("/en-US/docs/Web/WebDriver/Commands")}}

### Types

[Types](/en-US/docs/Web/WebDriver/Types)

- [Error object](/en-US/docs/Web/WebDriver/Errors#payload)
- [Timeouts object](/en-US/docs/Web/WebDriver/Timeouts)
- [WebElement](/en-US/docs/Web/WebDriver/WebElement)
- [WebWindow](/en-US/docs/Web/WebDriver/WebWindow)

### Capabilities

[Capabilities](/en-US/docs/Web/WebDriver/Capabilities)

{{ListSubpages("/en-US/docs/Web/WebDriver/Capabilities")}}

### Errors

[Errors](/en-US/docs/Web/WebDriver/Errors)

{{ListSubpages("/en-US/docs/Web/WebDriver/Errors")}}

## Specifications

- [WebDriver](https://w3c.github.io/webdriver/)

## See also

- [Cross browser testing](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing)
- [Selenium documentation](https://www.selenium.dev/documentation/)

{{QuickLinksWithSubpages}}
