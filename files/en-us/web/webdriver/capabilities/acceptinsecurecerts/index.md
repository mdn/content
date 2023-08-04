---
title: acceptInsecureCerts
slug: Web/WebDriver/Capabilities/acceptInsecureCerts
page-type: webdriver-capability
---

{{QuickLinksWithSubpages("/en-US/docs/Web/WebDriver/Capabilities")}}

The **`acceptInsecureCerts` capability** communicates whether expired or invalid [TLS certificates](/en-US/docs/Glossary/TLS) are checked when [navigating](/en-US/docs/Web/WebDriver/Commands/NavigateTo). When the capability is false, an [insecure certificate](/en-US/docs/Web/WebDriver/Errors/InsecureCertificate) error will be returned as navigation encounters domains with certificate problems. Otherwise, self-signed or otherwise invalid certificates will be implicitly trusted by the browser on navigation. The capability has effect for the lifetime of the session.

## Example

Using the `acceptInsecureCerts` capability you can bypass, or implicitly trust, TLS certificates that the certificate service in the browser does not trust:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox(capabilities={"acceptInsecureCerts": True})
session.get("https://self-signed.badssl.com/")
print(session.current_url)
```

Output:

```url
https://self-signed.badssl.com/
```

## See also

- [List of WebDriver capabilities](/en-US/docs/Web/WebDriver/Capabilities)
- [Navigate To](/en-US/docs/Web/WebDriver/Commands/NavigateTo) command
- [New Session](/en-US/docs/Web/WebDriver/Commands/NewSession) command
