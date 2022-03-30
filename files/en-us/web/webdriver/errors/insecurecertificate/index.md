---
title: Insecure certificate
slug: Web/WebDriver/Errors/InsecureCertificate
tags:
  - Error
  - Reference
  - WebDriver
  - insecure certificate
---
The **insecure certificate** error is a [WebDriver error](/en-US/docs/Web/WebDriver/Errors) that occurs when the remotely controlled browser hits a certificate warning of any kind. This is usually the result of [navigating](/en-US/docs/Web/WebDriver/Commands/NavigateTo) to a website with an expired or invalid [TLS certificate](/en-US/docs/Glossary/TLS). Examples of invalid certificates include self-signed, revoked, and cryptographically insecure certificates.

Web browsers prevent and block traffic to domains with broken certificates since the communication with the server would be compromised. It is strongly recommended to fix the certificate situation instead of disabling certificate checks, even in test environments.

WebDriver does offer an [`acceptInsecureCerts` capability](/en-US/docs/Web/WebDriver/Capabilities/acceptInsecureCerts) for disabling certificate checks for the length of the session's duration, but it is important to emphasize that its use is highly discouraged and that using it is widely considered a weakness of the test environment.

## Example

This is what will happen when navigating to a domain that has a self-signed TLS certificate using the Python client:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
try:
    session.get("https://self-signed.badssl.com/")
except exceptions.InsecureCertificateException as e:
    print("Hit insecure cert on {}".format(session.current_url)
```

Output:

```
Hit an insecure cert on https://self-signed.badssl.com/
```

## See also

- [Navigate To](/en-US/docs/Web/WebDriver/Commands/NavigateTo) command
- [Capabilities](/en-US/docs/Web/WebDriver/Capabilities)
- [badssl.com](https://badssl.com/)
