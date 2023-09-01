---
title: "BeforeInstallPromptEvent: prompt() method"
short-title: prompt()
slug: Web/API/BeforeInstallPromptEvent/prompt
page-type: web-api-instance-method
status:
  - experimental
  - non-standard
browser-compat: api.BeforeInstallPromptEvent.prompt
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

The **`prompt()`** method of the {{domxref("BeforeInstallPromptEvent")}} interface allows a developer to show the
install prompt at a time of their own choosing. Typically this will be called in the event handler for the app's custom install UI.

This method must be called in the event handler for a user action (such as a button click) and may only be called once on a given `BeforeInstallPromptEvent` instance.

## Syntax

```js-nolint
prompt()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} resolving to an object containing the following properties:

- `outcome` {{experimental_inline}} {{non-standard_inline}}

  - : A string indicating whether the user chose to install the app or not. It must be one of the following values:
    - `"accepted"`: The user installed the app.
    - `"dismissed"`: The user did not install the app.

- `platform` {{experimental_inline}} {{non-standard_inline}}
  - : If the user chose to install the app, this is a string naming the selected platform, which is one of the values from the {{domxref("BeforeInstallPromptEvent.platforms")}} property. If the user chose not to install the app, this is an empty string.

## Examples

See the [example for the `BeforeInstallPromptEvent` interface](/en-US/docs/Web/API/BeforeInstallPromptEvent#examples).

## Browser compatibility

{{Compat}}

## See also

- [Making PWAs installable](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [How to provide your own in-app install experience](https://web.dev/customize-install/) on web.dev (2021)
