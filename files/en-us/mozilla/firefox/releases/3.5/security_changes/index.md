---
title: Security changes in Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Security_changes
page-type: guide
---

{{FirefoxSidebar}}
This article covers security-related changes in Firefox 3.5.

## Changes to chrome registration

A security hole was closed in order to prevent remote content to be used as chrome. This could impact any add-on that included a resource in their `chrome.manifest` file that referenced a file on the web.

Fixing this bug was accomplished by adding a new `URI_IS_LOCAL_RESOURCE` flag to the `nsIProtocolHandler` interface that indicates that the protocol is safe to register as chrome. Any add-on that creates its own protocol handler and tries to register it in its `chrome.manifest` file will have to use this flag in order to work correctly.

## Private browsing

Firefox 3.5 implements private browsing, a mode in which cookies, history, and other potentially private information isn't saved permanently on the user's computer. Extensions and other add-ons may support the private browsing feature, detecting when it's in use so they can avoid saving private information while private browsing mode is enabled. See [Supporting private browsing mode](/en-US/Supporting_private_browsing_mode) for details.

Plug-ins can detect whether or not private browsing mode is in effect by using the [`NPN_GetValue()`](/en-US/docs/NPN_GetValue) function to check the current value of the `NPNVprivateModeBool` variable.

## New certificate error handling

In previous versions of Firefox 3, SSL certificate errors resulted in the presentation of the standard network error page, `about:neterror`, in the browser window. Starting in Firefox 3.5, there is a new error page, `about:certerror`, which is displayed instead. The error URL is formatted like this:

`about:certerror?e=error&u=url&d=desc`

Embedders needing to provide custom certificate error pages can now do so by supplying their own `about:` page implementation, and setting the `security.alternate_certificate_error_page` preference to the appropriate page name (e.g. `"certerror`").

## See also

- [Firefox 3.5 for developers](/en-US/Firefox%203.5%20for%20developers)
