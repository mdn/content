---
title: "BeforeInstallPromptEvent: BeforeInstallPromptEvent() constructor"
short-title: BeforeInstallPromptEvent()
slug: Web/API/BeforeInstallPromptEvent/BeforeInstallPromptEvent
page-type: web-api-constructor
status:
  - experimental
  - non-standard
browser-compat: api.BeforeInstallPromptEvent.BeforeInstallPromptEvent
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

The **`BeforeInstallPromptEvent()`** constructor creates a new {{domxref("BeforeInstallPromptEvent")}} object.

## Syntax

```js-nolint
new BeforeInstallPromptEvent(type)
new BeforeInstallPromptEvent(type, eventInitDict)
```

### Parameters

- `type`
  - : A string with the name of the event, set to `beforeinstallpromptevent`.
- `eventInitDict` {{optional_inline}}
  - : An object with a single optional property `platforms`, which is an array of strings, listing the platforms on which the event will be dispatched.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Making PWAs installable](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [How to provide your own in-app install experience](https://web.dev/customize-install/) on web.dev (2021)
