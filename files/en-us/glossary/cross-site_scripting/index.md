---
title: Cross-site scripting (XSS)
slug: Glossary/Cross-site_scripting
page-type: glossary-definition
sidebar: glossarysidebar
---

A **cross-site scripting** (XSS) attack is one in which an attacker is able to get a target site to execute malicious code as though it was part of the website. The code can then do anything that the site's own code can do. For example, the attacker could:

- Access and modify all the content of the site's loaded pages, and any content in local storage
- Make HTTP requests with the user's credentials, enabling them to impersonate the user or access sensitive data

All XSS attacks depend on a website doing two things:

1. Accepting some input that could have been crafted by an attacker
2. Including this input in a page without sanitizing it: that is, without ensuring that it won't be executable as JavaScript

## See also

- [Cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS)
- [Cross-site scripting on OWASP](https://owasp.org/www-community/attacks/xss/)
