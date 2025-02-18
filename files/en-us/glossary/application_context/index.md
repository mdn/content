---
title: Application context
slug: Glossary/Application_context
page-type: glossary-definition
---

{{GlossarySidebar}}

**Application context** refers to the top-level {{glossary("browsing context")}} of a [web application](/en-US/docs/Web/Progressive_web_apps).
It determines how an app's browsing context, such as a tab or a window, is presented and behaves.

Web developers define the application context in the [web app's manifest file](/en-US/docs/Web/Manifest).
They use the [`scope`](/en-US/docs/Web/Manifest/Reference/scope) member in the manifest to specify the set of URLs that are considered part of the application context and to which the manifest applies.

The manifest is applied after the application context is created but before navigation begins to either a start URL or a deep link.
A **start URL** is the initial page of the web app.
A **deep link** is a URL that directs users to a specific page within the web app, bypassing the home page.
The application context ensures that the app's defined behavior and presentation are maintained within its scope.

When an application context is created, browsers must immediately navigate to a start URL or a deep link.
This navigation replaces the current entry in the browsing history.
If the application context is created to navigate to a deep link, the browser navigates directly to that deep link; otherwise, it navigates to the start URL.

Note that the start URL is not necessarily the value of the [`start_url`](/en-US/docs/Web/Manifest/Reference/start_url) member in the manifest. Browsers may ignore the specified `start_url` or may allow users to change its value when adding the web app to their device's home screen or bookmarking it.

## See also

- [`scope`](/en-US/docs/Web/Manifest/Reference/scope)
- [Web app manifests](/en-US/docs/Web/Manifest)
- [Progressive web apps (PWA)](/en-US/docs/Web/Progressive_web_apps)
