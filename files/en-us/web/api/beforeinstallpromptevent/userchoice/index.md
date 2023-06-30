---
title: "BeforeInstallPromptEvent: userChoice property"
short-title: userChoice
slug: Web/API/BeforeInstallPromptEvent/userChoice
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.BeforeInstallPromptEvent.userChoice
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

The **`userChoice`** property of the {{domxref("BeforeInstallPromptEvent")}} interface represents the installation choice that the user made, when they were prompted to install the app.

## Value

A {{jsxref("Promise")}} which resolves to an object containing two properties:

- `outcome` {{experimental_inline}} {{non-standard_inline}}

  - : A string indicating whether the user chose to install the app or not. It must be one of the following values:
    - `"accepted"`: The user installed the app.
    - `"dismissed"`: The user did not install the app.

- `platform` {{experimental_inline}} {{non-standard_inline}}
  - : If the user chose to install the app, this is a string naming the selected platform, which is one of the values from the {{domxref("BeforeInstallPromptEvent.platforms")}} property. If the user chose not to install the app, this is an empty string.

## Browser compatibility

{{Compat}}

## See also

- [Making PWAs installable](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [How to provide your own in-app install experience](https://web.dev/customize-install/) on web.dev (2021)
