---
title: Firefox 125 for developers
slug: Mozilla/Firefox/Releases/125
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 125 that affect developers. Firefox 125 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [April 16, 2024](https://whattrainisitnow.com/release/?version=125).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The [Popover API](/en-US/docs/Web/API/Popover_API) is now fully supported, allowing the creation of top level "popover" UI elements that might be used for action menus, custom "toast" notifications, form element suggestions, content pickers, and so on.
  The popover and its triggering button/input can be created using either HTML attributes or JavaScript, and styled using CSS.

  The following Web APIs are implemented:

  - [`HTMLButtonElement`](/en-US/docs/Web/API/HTMLButtonElement) properties [`popoverTargetElement`](/en-US/docs/Web/API/HTMLButtonElement/popoverTargetElement) and [`popoverTargetAction`](/en-US/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/en-US/docs/Web/API/HTMLInputElement) properties [`popoverTargetElement`](/en-US/docs/Web/API/HTMLInputElement/popoverTargetElement) and [`popoverTargetAction`](/en-US/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/en-US/docs/Web/API/HTMLElement) property [`popover`](/en-US/docs/Web/API/HTMLElement/popover), [`hidePopover()`](/en-US/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/en-US/docs/Web/API/HTMLElement/showPopover), and [`togglePopover()`](/en-US/docs/Web/API/HTMLElement/togglePopover) methods, and [`beforetoggle`](/en-US/docs/Web/API/HTMLElement/beforetoggle_event) and [`toggle_event`](/en-US/docs/Web/API/HTMLElement/toggle_event) events (of type [`ToggleEvent`](/en-US/docs/Web/API/ToggleEvent)).

  The following CSS pseudo class and element are now supported for use with popovers:

  - [`:popover-open`](/en-US/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/en-US/docs/Web/CSS/::backdrop) has been extended to support popovers

  The following HTML global attributes are supported:

  - [`popovertarget`](/en-US/docs/Web/HTML/Element/button#popovertarget)
  - [`popovertargetaction`](/en-US/docs/Web/HTML/Element/button#popovertargetaction)

  ([Firefox bug 1823757](https://bugzil.la/1823757), [Firefox bug 1866993](https://bugzil.la/1866993)).

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 125 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
