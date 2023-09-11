---
title: Network throttling
slug: Glossary/Network_throttling
page-type: glossary-definition
---

{{GlossarySidebar}}

**Network throttling** is an intentional slowing down of internet speed. In web performance, network throttling, or network condition emulation, it is used to emulate low bandwidth conditions experienced by likely a large segment of a site's target user base.

It's important not to overlook network conditions users experience on mobile. The internet speeds for developers creating web applications in a corporate office building on a powerful computer are generally very fast. As a developer, tech writer, or designer, this is likely your experience. The network speeds of a mobile user accessing that web application, possibly while traveling or in a remote area with poor data plan coverage, will likely be very slow, if they are able to get online at all. Network throttling enables a developer to emulate an experience of a user. Most browser developer tools, such as the browser inspector, provide a function to emulate different network conditions. By emulating your user's experience via network throttling, you can more readily identify and fix load time issues.

Browser developer tools generally have network throttling options, to allow you to test your app under slow network conditions. Firefox's developer tools for example have a drop-down menu available in both the [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) and [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) containing network speed options (e.g. Wi-Fi, good 3G, 2G)

## See also

- [Synthetic monitoring](/en-US/docs/Glossary/Synthetic_monitoring)
