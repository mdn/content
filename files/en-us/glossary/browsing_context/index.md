---
title: Browsing context
slug: Glossary/Browsing_context
page-type: glossary-definition
---

<section id="Quick_links">
  <ol>
    <li><strong><a href="/en-US/docs/Glossary">MDN Web Docs Glossary</a></strong>{{ListSubpagesForSidebar("/en-us/docs/Glossary", 1)}}</li>
  </ol>
</section>

A **browsing context** is an environment in which a browser displays a {{domxref("Document")}}. In modern browsers, it usually is a _tab_, but can be a _window_ or even only parts of a page, like a _frame_ or an _iframe_.

Each browsing context has an origin (that of the active document) and an ordered history of previously displayed documents.

Communication between browsing contexts is severely constrained. Between browsing contexts of the same origin, a {{domxref("BroadcastChannel")}} can be opened and used.

## See also

- See {{glossary("origin")}}
