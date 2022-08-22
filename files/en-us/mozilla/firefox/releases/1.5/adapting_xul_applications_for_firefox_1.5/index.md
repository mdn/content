---
title: Adapting XUL Applications for Firefox 1.5
slug: Mozilla/Firefox/Releases/1.5/Adapting_XUL_Applications_for_Firefox_1.5
tags:
  - Add-ons
  - Extensions
  - XUL
---
{{FirefoxSidebar}}

This page contains a list of changes in [Firefox 1.5](/en-US/docs/Mozilla/Firefox/Releases/1.5), affecting XUL developers.

### Specific Changes

- [Tree Widget Changes](/en-US/docs/Tree_Widget_Changes)
- [International characters in XUL JavaScript](/en-US/docs/International_characters_in_XUL_JavaScript) (only affects extensions with JavaScript files containing non-ASCII characters)
- [XMLHttpRequest changes](/en-US/docs/XMLHttpRequest_changes_for_Gecko1.8)
- [XUL Changes for Firefox 1.5](/en-US/docs/XUL_Changes_for_Firefox_1.5)
- [XPCNativeWrappers](/en-US/docs/XPCNativeWrapper) are on by default, and the behavior changed somewhat compared to 1.0.x
- A simpler method of [Chrome Registration](/en-US/docs/Chrome_Registration) deprecates contents.rdf.
- For overlayed context menus: the function `gContextMenu.linkURL()` has been renamed to `gContextMenu.getLinkURL()`, and `linkURL` is now a property. To use it in a backwards-compatible way:
  `url = 'getLinkURL' in gContextMenu ? gContextMenu.getLinkURL() : gContextMenu.linkURL();`

### Other Information

- [How to check application's version using nsIXULAppInfo](/en-US/docs/Using_nsIXULAppInfo)
- [MozillaZine](https://kb.mozillazine.org/Dev_:_Extensions_:_Cross-Version_Compatibility_Techniques)
