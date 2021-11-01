---
title: Firefox 80 for developers
slug: Mozilla/Firefox/Releases/80
tags:
  - '80'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 80 that will affect developers. Firefox 80 was released on August 25, 2020.

## Changes for web developers

### Developer Tools

- You can now block and unblock network requests using the `:block` and `:unblock` [helper commands](/en-US/docs/Tools/Web_Console/Helpers) in the Web Console ({{bug("1546394")}}).
- When [adding a class](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#viewing_and_changing_classes_on_an_element) to an element in the Page Inspector's Rules pane, existing classes are suggested with autocomplete (Refer to {{bug("1492797")}}).
- When the Debugger [breaks on an exception](/en-US/docs/Tools/Debugger/How_to/Breaking_on_exceptions), the tooltip in the source pane now shows a disclosure triangle that reveals a stack trace ({{bug("1643633")}}).
- In the [Network Monitor request list](/en-US/docs/Tools/Network_Monitor/request_list#network_request_columns), a turtle icon is shown for "slow" requests that exceed a configurable threshold for the waiting time ({{bug("1648373")}}).

### HTML

_No changes_

### CSS

- The standard, unprefixed {{CSSxRef("appearance", "appearance")}} property is now supported; existing `-moz-appearance` and `-webkit-appearance` are now aliases of the unprefixed property ({{bug(1620467)}}).

### JavaScript

- The ECMAScript 2021 `export * as namespace` syntax for the [`export`](/en-US/docs/Web/JavaScript/Reference/Statements/export) statement is now supported ({{bug(1496852)}}).

### HTTP

- Previously, when the [fullscreen](/en-US/docs/Web/HTTP/Headers/Feature-Policy/fullscreen) directive was applied to an [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe) (i.e. via the `allow` attribute), it didn't work unless the `allowfullscreen` attribute was also present This has now been fixed ({{bug(1608358)}}).

### APIs

#### DOM

- Web Animations API compositing operations are now enabled — see [`KeyframeEffect.composite`](/en-US/docs/Web/API/KeyframeEffect/composite) and [`KeyframeEffect.iterationComposite`](/en-US/docs/Web/API/KeyframeEffect/iterationComposite) ({{bug(1652676)}}).

#### WebGL

- The {{domxref("KHR_parallel_shader_compile")}} [WebGL extension](/en-US/docs/Web/API/WebGL_API/Using_Extensions) is now supported ({{bug(1536674)}}).

#### Removals

- The `outerHeight` and `outerWidth` features of [`Window.open()`](/en-US/docs/Web/API/Window/open) are no longer exposed to web content ({{bug(1623826)}}).

### WebAssembly

- Atomic operations are now allowed on non-shared memories ({{bug(1619196)}}).

### WebDriver conformance (Marionette)

- Using `WebDriver:NewWindow` to open a new tab no longer returns too early when running tests in headless mode ({{bug(1653281)}}).
- We removed the `name` argument for `WebDriver:SwitchToWindow` — it is not supported for W3C-compatible mode, and shouldn't be used anymore ({{bug(1588424)}}).
- We've started to add Fission support for the following commands: `WebDriver:FindElement`, `WebDriver:FindElements`, `WebDriver:GetElementAttribute`, `WebDriver:GetElementProperty`.
- **Known issue**: Opening a new tab by using `WebDriver:NewWindow`, or via an arbitrary script that calls `window.open()`, now automatically switches to that new window ({{bug(1661495)}}).

## Changes for add-on developers

_No changes_

## Older versions

{{Firefox_for_developers(79)}}
