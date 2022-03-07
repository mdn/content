---
title: Differences between API implementations
slug: Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations
tags:
  - Guide
  - WebExtensions
---
{{AddonSidebar}}

The browser extensions API is still an [emerging standard](https://browserext.github.io/browserext/). As a result, while it is supported by most major browsers including Firefox, Chrome, Edge, and Opera, there are differences between the various implementations. This means that some changes may be necessary to implement your extension for multiple browsers.

Among the various browsers supporting the extensions API, Firefox is the most compliant with the emerging standard, and is, therefore, your best place to start when developing browser extensions.

The differences between browsers' extensions API implementations fall into four areas: namespace, asynchronous event handling, API coverage, and manifest keys.

## Namespace

You reference all extensions API functions using a namespace, for example, `browser.alarms.create({delayInMinutes});` would create an alarm in Firefox that goes off after the time specified in `delayInMinutes`.

There are two API namespaces in use:

- `chrome` used in Chrome and Opera.
- `browser` used in Firefox and Edge.

## Asynchronous event handling

JavaScript provides several ways in which to handle asynchronous events. The proposed extensions API standard is to use promises. The promises approach provides significant advantages when dealing with chained asynchronous event calls.

If you are unfamiliar with how JavaScript can handle asynchronous events or promises, take a look at [Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) or the MDN [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises) page.

Firefox is the only major browser that has implemented promises for the extensions API. All other browsers use callbacks.

## API coverage

The differences in the extensions API function implementations among the browsers fall into three broad categories:

- Lack of support for an entire function. For example, at the time of writing, Edge doesn't provide support for the [`privacy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy) function.
- Variations in the support for features within a function. For example, at the time of writing, Firefox doesn't support the [`notification`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications) function method [`onButtonClicked`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked), while Firefox is the only browser that supports [`onShown`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown).
- Proprietary functions, supporting browser-specific features. For example, at the time of writing, containers is a Firefox-specific feature supported by the [`contextualIdentities`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities) function.

## Manifest keys

The differences in the supported [`manifest.json` keys](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) among the browsers fall broadly into two categories:

- Extension information attributes. For example, at the time of writing, Firefox and Opera include the [`developer`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) key enabling the addition of details about the developer of the extension, as well as the author, to be recorded.
- Extension features. For example, at the time of writing, Edge did not support the [`commands`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) key (which enables shortcut keys to be defined for an extension).

## More information

You can find more detailed information about the differences in the supported browser extensions API features in:

- [Chrome incompatibilities](/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [Browser support for JavaScript APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)
- [Browser compatibility for manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)
