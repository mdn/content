---
title: Clipboard access
slug: Plugins/Flash_to_HTML5/Clipboard
tags:
  - API
  - Clipboard
  - Flash
  - HTML
  - JavaScript
  - Selection
  - execCommand
---
Flash's Clipboard API used to be the only available means for creating advanced clipboard functionality, but this is now available in web standards.

Operating systems all have standard clipboard (i.e. Copy/Paste/Cut) functionality built in, but what if you want to do something a bit more complex, such as having a button that triggers the copying of a certain text selection?

## The basics

The [Flash Clipboard API](https://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/desktop/Clipboard.html) provided such functionality, but fortunately modern browsers now have functionality available to do the same things, without having the Flash Player present or having to attach a Flash movie to your page. The relevant APIs are:

- [Selection API](/en-US/docs/Web/API/Selection): Allows you to programmatically set and modify the text selection on the current document.
- [execCommand API](/en-US/docs/Web/API/Document/execCommand): Allows you to programmatically execute clipboard-related commands such as Copy and Paste.

## See also

The [clipboard.js library](https://clipboardjs.com/): The best solution for rapidly implementing clipboard functionality on web applications.
