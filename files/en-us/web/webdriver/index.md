---
title: WebDriver
slug: Web/WebDriver
page-type: landing-page
sidebar: webdriver
---

WebDriver is a remote control interface that enables introspection and control of user agents. It provides a platform- and language-neutral wire protocol as a way for out-of-process programs to remotely instruct the behavior of web browsers.

To have the ability to write instruction sets that can be run interchangeably in many browsers on different platforms is critical to deliver a consistent experience to users. With the new wave of developments on the web platform, the increase diversity in devices and demands for real interoperability between the technologies, WebDriver provides tooling for [cross-browser testing](/en-US/docs/Learn_web_development/Extensions/Testing/Introduction).

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

    driver.get("https://google.com/ncr")
    wait = WebDriverWait(driver, 10)
    driver.find_element(By.NAME, "q").send_keys(f"cheese{Keys.RETURN}")
    wait.until(presence_of_element_located((By.XPATH, '//*[@id="rcnt"]')))
    results = driver.find_elements(By.XPATH, "//a[@href]")

    for i, elem in enumerate(results):
        print(f'#{i} {elem.text} ({elem.get_attribute("href")})')
```

This might produce output akin to this:

```plain
#1 Cheese - Wikipedia (https://en.wikipedia.org/wiki/Cheese)
```

## Reference

The [WebDriver reference](/en-US/docs/Web/WebDriver/Reference) provides detailed information about the WebDriver API, including the available commands, capabilities, and errors.

- [Timeouts](/en-US/docs/Web/WebDriver/Reference/Timeouts)

### [Commands](/en-US/docs/Web/WebDriver/Reference/Commands)

{{ListSubpages("/en-US/docs/Web/WebDriver/Reference/Commands")}}

### [Capabilities](/en-US/docs/Web/WebDriver/Reference/Capabilities)

{{ListSubpages("/en-US/docs/Web/WebDriver/Reference/Capabilities")}}

### [Errors](/en-US/docs/Web/WebDriver/Reference/Errors)

{{ListSubpages("/en-US/docs/Web/WebDriver/Reference/Errors")}}

## Specifications

- [WebDriver](https://w3c.github.io/webdriver/)

## See also

- [Testing](/en-US/docs/Learn_web_development/Extensions/Testing)
- [Selenium documentation](https://www.selenium.dev/documentation/)
