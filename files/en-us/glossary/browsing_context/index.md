---
title: Browsing context
slug: Glossary/Browsing_context
page-type: glossary-definition
---

{{GlossarySidebar}}

A **browsing context** is an environment in which a browser displays a {{domxref("Document")}}.
In modern browsers, it usually is a _tab_, but it can be a _window_, a _popup_, a [web application](/en-US/docs/Web/Progressive_web_apps), or even a part of a page such as a _frame_ or an _iframe_.

Each browsing context has an origin (that of the active document) and an ordered history of previously displayed documents.
Communication and resource sharing between browsing contexts is constrained, in particular between cross-origin contexts.
For example, a {{domxref("BroadcastChannel")}} can only be opened and used to communicate between same origin-contexts.

A browsing context may be part of a **browsing context group**, which is a set of **browsing contexts** that share common context like history, cookies, storage mechanisms and so on.
The browsing contexts within a group retain references to each other and can therefore inspect each other's global objects and post each other messages.

By default a document opened from a browser context group is opened in the same group whether or not it is cross-origin or same-origin.
The {{httpheader("Cross-Origin-Opener-Policy")}} can be used to control whether the document is instead opened in its own new browsing context group and {{domxref("Window.crossOriginIsolated","cross-origin isolated","","no code")}} from other contexts (in particular cross-origin contexts).
The can mitigate the risk of cross-origin attacks and the side-channel attacks referred to as [XS-Leaks](https://xsleaks.dev/).

## See also

- Related glossary terms:
  - {{glossary("Origin")}}
