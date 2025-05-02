---
title: Script timeout
slug: Web/WebDriver/Reference/Errors/ScriptTimeout
page-type: webdriver-error
sidebar: webdriver
---

The **script timeout** error is a [WebDriver error](/en-US/docs/Web/WebDriver/Reference/Errors) that occurs when a script the user has provided did not complete before the session's script timeout duration expired.

The script timeout duration is a configurable capability, which means you can change how long it will take before the driver interrupts an injected script. The driver will by default wait 30 seconds before interrupting the script and returning with a script timeout error, but this can be both extended, limited, and be set to indefinite.

If the session script timeout duration is set to indefinite by using a `null` value, you are at risk of putting the session into a non-recoverable state. Be aware that this should be used with caution.

## Example

Consider the following asynchronous script that will resolve the promise, or invoke the callback, after 35 seconds have passed:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
try:
    session.execute_script("""
        let [resolve] = arguments;
        setTimeout(resolve, 35000);
        """)
except exceptions.ScriptTimeoutException as e:
    print(e.message)
```

Output:

```plain
ScriptTimeoutException: Timed out after 35000 ms
```

However, it is possible to _extend_ the session's default script timeout by using capabilities if you have a script that you expect will take longer:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox(capabilities={"alwaysMatch": {"timeouts": {"script": 150000}}})
session.execute_script("""
    let [resolve] = arguments;
    setTimeout(resolve, 35000);
    """)
print("finished successfully")
```

Output:

```plain
finished successfully
```

## See also

- [List of WebDriver errors](/en-US/docs/Web/WebDriver/Reference/Errors)
- Associated commands and types:

  - [JavaScript error](/en-US/docs/Web/WebDriver/Reference/Errors/JavaScriptError)
  - [Execute Script](/en-US/docs/Web/WebDriver/Reference/Commands/ExecuteScript)
  - [Execute Async Script](/en-US/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript)
