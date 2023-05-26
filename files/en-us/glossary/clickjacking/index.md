---
title: Clickjacking
slug: Glossary/Clickjacking
page-type: glossary-definition
---

<section id="Quick_links">
  <ol>
    <li><strong><a href="/en-US/docs/Glossary">MDN Web Docs Glossary</a></strong>{{ListSubpagesForSidebar("/en-us/docs/Glossary", 1)}}</li>
  </ol>
</section>

Clickjacking is an interface-based attack that tricks website users into unwittingly clicking on malicious links. In clickjacking, the attackers embed their malicious links into buttons or legitimate pages in a website. In an infected {{glossary("Site")}}, whenever a user clicks on a legitimate link, the attacker gets the confidential information of that user, which ultimately compromises the user's privacy on the Internet.

Clickjacking can be prevented by implementing a [Content Security Policy (frame-ancestors)](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) and implementing [Set-Cookie attributes](/en-US/docs/Web/HTTP/Headers/Set-Cookie#attributes).

## Learn more

- [Web security: clickjacking protection](/en-US/docs/Web/Security#clickjacking_protection)
- [Clickjacking](https://en.wikipedia.org/wiki/Clickjacking) on Wikipedia
- [Clickjacking](https://owasp.org/www-community/attacks/Clickjacking) on OWASP
