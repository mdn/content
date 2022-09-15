---
title: How to update browser compatibility tables
slug: MDN/Writing_guidelines/Howto/Browser_compat_data
tags:
  - meta
  - writing-guide
page-type: mdn-writing-guide
---

{{MDNSidebar}}

## Updating browser compatibility tables

The browser compatibility table shown near the bottom of many MDN document pages is generated from the `browser-compat-data` project.
To make this data available in multiple projects programmatically, a Node.js package is built from the [`browser-compat-data` repository](https://github.com/mdn/browser-compat-data) and published to npm.
For an example of how this looks like, see the [JavaScript Array page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#browser_compatibility) which shows the compatibility table for the `Array` object.

If you'd like to make or suggest changes to the content of the browser compatibility table on any given MDN document page, you can either use the `Report problems with this data on GitHub` link in the upper-right
corner of the table you wish to edit, or go to the [`browser-compat-data` repository](https://github.com/mdn/browser-compat-data) and see the [contribution guide](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md).
