---
title: Application context
slug: Glossary/Application_context
page-type: glossary-definition
---

{{GlossarySidebar}}

An **application context** is a top-level {{glossary("browsing context")}} to which a [web application manifest](/en-US/docs/Web/Manifest) is applied.

The manifest is applied after the application context is created but before navigation begins to either a start URL or a deep link. A **deep link** is a URL that directs users to a specific page within the web app, bypassing the home page.

When an application context is created, browsers must immediately navigate to a start URL or a deep link.
This navigation replaces the current entry in the browsing history.
If the application context is created to navigate to a deep link, the browser navigates directly to that deep link; otherwise, it navigates to the start URL.

Note that the start URL is not necessarily the value of the [`start_url`](/en-US/docs/Web/Manifest/start_url) member in the manifest. Browsers may ignore the specified `start_url` or may allow users to change its value when adding the application to their device's home screen or bookmarking it.

## See also

- [`scope`](/en-US/docs/Web/Manifest/scope)
- [Web app manifests](/en-US/docs/Web/Manifest)
- [Progressive web apps (PWA)](/en-US/docs/Web/Progressive_web_apps)
