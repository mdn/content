---
title: Browsing context
slug: Glossary/Browsing_context
tags:
  - Glossary
---
A **browsing context** is the environment in which a browser displays a {{domxref("Document")}}. In modern browsers, it usually is a _tab_, but can be a _window_ or even only parts of a page, like a _frame_ or an _iframe_.

Each browsing context has a specific origin, the origin of the active document and a history that memorize all the displayed documents, in order.

Communication between browsing context is severely constrained. Between browsing context of the same origin, a {{domxref("BroadcastChannel")}} can be opened and used.

## See also

- See {{glossary("origin")}}
