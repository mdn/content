---
title: Firefox 80 for developers
slug: Mozilla/Firefox/Releases/80
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 80 that will affect developers. Firefox 80 was released on August 25, 2020.

## Changes for web developers

### Developer Tools

- You can now block and unblock network requests using the `:block` and `:unblock` [helper commands](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) in the Web Console ([Firefox bug 1546394](https://bugzil.la/1546394)).
- When [adding a class](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-and-changing-classes-on-an-element) to an element in the Page Inspector's Rules pane, existing classes are suggested with autocomplete (Refer to [Firefox bug 1492797](https://bugzil.la/1492797)).
- When the Debugger [breaks on an exception](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/breaking_on_exceptions/index.html), the tooltip in the source pane now shows a disclosure triangle that reveals a stack trace ([Firefox bug 1643633](https://bugzil.la/1643633)).
- In the [Network Monitor request list](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns), a turtle icon is shown for "slow" requests that exceed a configurable threshold for the waiting time ([Firefox bug 1648373](https://bugzil.la/1648373)).

### HTML

_No changes._

### CSS

- The standard, unprefixed {{CSSxRef("appearance", "appearance")}} property is now supported; existing `-moz-appearance` and `-webkit-appearance` are now aliases of the unprefixed property ([Firefox bug 1620467](https://bugzil.la/1620467)).

### JavaScript

- The ECMAScript 2021 `export * as namespace` syntax for the [`export`](/en-US/docs/Web/JavaScript/Reference/Statements/export) statement is now supported ([Firefox bug 1496852](https://bugzil.la/1496852)).

### HTTP

- Previously, when the [fullscreen](/en-US/docs/Web/HTTP/Headers/Feature-Policy/fullscreen) directive was applied to an [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe) (i.e. via the `allow` attribute), it didn't work unless the `allowfullscreen` attribute was also present This has now been fixed ([Firefox bug 1608358](https://bugzil.la/1608358)).

### APIs

#### DOM

- Web Animations API compositing operations are now enabled — see [`KeyframeEffect.composite`](/en-US/docs/Web/API/KeyframeEffect/composite) and [`KeyframeEffect.iterationComposite`](/en-US/docs/Web/API/KeyframeEffect/iterationComposite) ([Firefox bug 1652676](https://bugzil.la/1652676)).

#### Removals

- The `outerHeight` and `outerWidth` features of [`Window.open()`](/en-US/docs/Web/API/Window/open) are no longer exposed to web content ([Firefox bug 1623826](https://bugzil.la/1623826)).

### WebAssembly

- Atomic operations are now allowed on non-shared memories ([Firefox bug 1619196](https://bugzil.la/1619196)).

### WebDriver conformance (Marionette)

- Using `WebDriver:NewWindow` to open a new tab no longer returns too early when running tests in headless mode ([Firefox bug 1653281](https://bugzil.la/1653281)).
- We removed the `name` argument for `WebDriver:SwitchToWindow` — it is not supported for W3C-compatible mode, and shouldn't be used anymore ([Firefox bug 1588424](https://bugzil.la/1588424)).
- We've started to add Fission support for the following commands: `WebDriver:FindElement`, `WebDriver:FindElements`, `WebDriver:GetElementAttribute`, `WebDriver:GetElementProperty`.
- **Known issue**: Opening a new tab by using `WebDriver:NewWindow`, or via an arbitrary script that calls `window.open()`, now automatically switches to that new window ([Firefox bug 1661495](https://bugzil.la/1661495)).

## Changes for add-on developers

_No changes._

## Older versions

{{Firefox_for_developers(79)}}
