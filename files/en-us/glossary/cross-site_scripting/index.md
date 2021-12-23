---
title: Cross-site scripting
slug: Glossary/Cross-site_scripting
tags:
  - Cross Site Scripting
  - DOM
  - Glossary
  - Security
  - XSS
  - exploit
---
Cross-site scripting (XSS) is a security exploit which allows an attacker to inject into a website malicious client-side code. This code is executed by the victims and lets the attackers bypass access controls and impersonate users. According to the Open Web Application Security Project, XSS was the [seventh most common Web app vulnerability](<https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS)>) in 2017.

These attacks succeed if the Web app does not employ enough validation or encoding. The user's browser cannot detect the malicious script is untrustworthy, and so gives it access to any cookies, session tokens, or other sensitive site-specific information, or lets the malicious script rewrite the {{glossary("HTML")}} content.

## See also

- [Cross-site scripting (XSS)](/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)
- {{Interwiki("wikipedia", "Cross-site scripting")}} on Wikipedia
- [Cross-site scripting on OWASP](https://owasp.org/www-community/attacks/xss/)
- [Another article about Cross-site scripting](https://www.acunetix.com/blog/web-security-zone/articles/dom-xss-explained/)
- [XSS Attack – Exploit & Protection](https://secure.wphackedhelp.com/blog/wordpress-xss-attack/)
