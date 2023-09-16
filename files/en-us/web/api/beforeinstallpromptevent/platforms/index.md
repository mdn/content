---
title: "BeforeInstallPromptEvent: platforms property"
short-title: platforms
slug: Web/API/BeforeInstallPromptEvent/platforms
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.BeforeInstallPromptEvent.platforms
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

The **`platforms`** property of the {{domxref("BeforeInstallPromptEvent")}} interface lists the platforms on which the event was dispatched. This is provided for user agents that want to present a choice of versions to the user such as, for example, "web" or "play" which would allow the user to choose between a web version or an Android version.

## Value

An array of strings, in which each string identifies a target platform for the installation.

## Browser compatibility

{{Compat}}

## See also

- [Making PWAs installable](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [How to provide your own in-app install experience](https://web.dev/customize-install/) on web.dev (2021)
