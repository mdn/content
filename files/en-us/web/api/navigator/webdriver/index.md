---
title: Navigator.webdriver
slug: Web/API/Navigator/webdriver
tags:
  - API
  - Navigator
  - Property
  - Reference
  - WebDriver
  - weblock
browser-compat: api.Navigator.webdriver
---
{{SeeCompatTable}}{{APIRef("WebDriver")}}

The **`webdriver`** read-only property
of the {{domxref("navigator")}} interface indicates whether the user agent is
controlled by automation.

It defines a standard way for co-operating user agents to inform the document that it
is controlled by [WebDriver](/en-US/docs/Web/WebDriver), for example, so that
alternate code paths can be triggered during automation.

The ` navigator.``webdriver ` property is true when in:

- Chrome
  - : The `--enable-automation` or the `--headless` flag or the
    `--remote-debugging-port` is used.
- Firefox
  - : The `marionette.enabled` preference or `--marionette` flag is
    passed.

## Syntax

```js
var isAutomated = navigator.webdriver
```

### Value

A {{JSxRef("Boolean")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
