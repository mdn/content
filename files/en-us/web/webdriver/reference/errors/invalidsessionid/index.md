---
title: Invalid session ID
slug: Web/WebDriver/Reference/Errors/InvalidSessionID
page-type: webdriver-error
sidebar: webdriver
---

The **invalid session ID** error is a [WebDriver error](/en-US/docs/Web/WebDriver/Reference/Errors) that occurs when the server does not recognize the unique session identifier. This happens if the [session has been deleted](/en-US/docs/Web/WebDriver/Reference/Commands/DeleteSession) or if the session ID is invalid.

## Example

### Explicit session deletion

A WebDriver session is explicitly deleted when quitting:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
print("Current session is {}".format(session.session_id))
session.quit()

try:
    session.get("https://mozilla.org")
except exceptions.InvalidSessionIdException as e:
    print(e.message)
```

Output:

```plain
Current session is 46197c16-8373-469b-bc56-4c4d9e4132b4
No active session with ID 46197c16-8373-469b-bc56-4c4d9e4132b4
```

### Implicit session deletion

The session can also be _implicitly deleted_ if you close the last window or tab:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
print("Current session is {}".format(session.session_id))

# closes current window/tab
session.close()

try:
    session.get("https://mozilla.org")
except exceptions.InvalidSessionIdException as e:
    print(e.message)
```

Output:

```plain
Current session is 46197c16-8373-469b-bc56-4c4d9e4132b4
No active session with ID 46197c16-8373-469b-bc56-4c4d9e4132b4
```

## See also

- [List of WebDriver errors](/en-US/docs/Web/WebDriver/Reference/Errors)
- [Session not created](/en-US/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)
- Related WebDriver commands:

  - [New Session](/en-US/docs/Web/WebDriver/Reference/Commands/NewSession)
  - [Delete Session](/en-US/docs/Web/WebDriver/Reference/Commands/DeleteSession)
