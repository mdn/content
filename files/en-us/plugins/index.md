---
title: Plugins
slug: Plugins
tags:
  - Flash
  - Plugins
---
Plugins are shared libraries that users can install to display content that the browser can't display natively.

> **Warning:** plugins are a legacy technology that are a security and performance problem for Firefox (and other browser) users. They may not be supported in the future. New content should not be written using Flash or any other plugin technology.

## Roadmap

- [Plugin Roadmap](/en-US/docs/Plugins/Roadmap)
  - : Information about the roadmap for Adobe Flash and other plugin support in Firefox.

### Roadmap highlights

- Since [Firefox 52](/en-US/docs/Mozilla/Firefox/Releases/52), plugins other than Flash are not loaded by Firefox.
- Starting in [Firefox 55](/en-US/docs/Mozilla/Firefox/Releases/55), users will be asked to choose which sites may use Flash content. This feature will be rolled out gradually to Firefox users.
- Also From [Firefox 55](/en-US/docs/Mozilla/Firefox/Releases/55) onwards, Flash and other plugins can no longer be loaded from any URL scheme except for http\:// and https\:// ({{bug("1335475")}}).
- Starting with Firefox 56 in September 2017, Firefox for Android will remove all support for plugins ([bug 1381916](https://bugzilla.mozilla.org/show_bug.cgi?id=1381916 "FIXED: Remove support for plugins (flash)")).
- Since [Firefox 85](/en-US/docs/Mozilla/Firefox/Releases/85), Flash support is no longer available in Firefox.

## Tutorials and references

The articles below are developer information about the  developing for click-to-play, and plugin blocking.

- [Flash to HTML5 migration guide](/en-US/docs/Plugins/Flash_to_HTML5)
  - : This set of articles provides you with information on how to migrate existing Flash content and functionality to HTML and JavaScript.
- [Plugin Blocking By Domain](/en-US/docs/Plugins/Blocking_By_Domain)
  - : In order to improve security and performance for Firefox users, Firefox maintains a list of sites that are not able to use plugins.
- [Archived Information](/en-US/docs/Archive/Plugins)
  - : Legacy documentation about developing NPAPI plugins.
