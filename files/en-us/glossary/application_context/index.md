---
title: Application Context
slug: Glossary/Application_context
page-type: glossary-definition
---

{{GlossarySidebar}}

An **application context** is a top-level [browsing context](/en-US/docs/Glossary/Browsing_context) that has a [manifest](/en-US/docs/Web/Manifest) applied to it.

If an application context is created as a result of the user agent being asked to navigate to a deep link, the user agent must immediately navigate to the deep link with replacement enabled. Otherwise, when the application context is created, the user agent must immediately navigate to the start URL with replacement enabled.

Please note that the start URL is not necessarily the value of the start_url member: the user or user agent could have changed it when the application was added to home-screen or otherwise bookmarked.

## See also

- [Progressive web apps (PWA)](/en-US/docs/Web/Progressive_web_apps)
- [`scope`](/en-US/docs/Web/Manifest/scope)
