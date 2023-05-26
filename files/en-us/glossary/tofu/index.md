---
title: TOFU
slug: Glossary/TOFU
page-type: glossary-definition
---

<section id="Quick_links">
  <ol>
    <li><strong><a href="/en-US/docs/Glossary">MDN Web Docs Glossary</a></strong>{{ListSubpagesForSidebar("/en-us/docs/Glossary", 1)}}</li>
  </ol>
</section>

**Trust On First Use** **(TOFU**) is a security model in which a client needs to create a trust relationship with an unknown server. To do that, clients will look for identifiers (for example public keys) stored locally. If an identifier is found, the client can establish the connection. If no identifier is found, the client can prompt the user to determine if the client should trust the identifier.

TOFU is used in the SSH protocol, in {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}) where a browser will obey the redirection rule.

## See also

- Wikipedia: [TOFU](https://en.wikipedia.org/wiki/Trust_on_first_use)
