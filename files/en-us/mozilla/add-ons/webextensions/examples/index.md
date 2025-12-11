---
title: Example extensions
slug: Mozilla/Add-ons/WebExtensions/Examples
page-type: guide
sidebar: addonsidebar
---

To illustrate how to use the WebExtension APIs, we maintain a repository of example extensions at <https://github.com/mdn/webextensions-examples>. This article describes how to run these examples and lists the examples along with the WebExtension APIs they demonstrate.

These examples work in Firefox Nightly: most work in earlier versions of Firefox, but check the [strict_min_version](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key in the extension's manifest.json to make sure.

> [!WARNING]
> Some examples work only on specific domains or pages. Each example's readme file provides details of any restrictions. None of the examples work in private browsing windows by default; see [Extensions in Private Browsing](https://support.mozilla.org/en-US/kb/extensions-private-browsing#w_enabling-or-disabling-extensions-in-private-windows) for details.

To try these examples, clone the repository, then install and run the extension using one of these options:

- Use the [Load Temporary Add-on](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) feature and open the extension from its source folder.
- Install [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/), open the extension's source folder at the command line, and use `web-ext run`.

The extension stays loaded until you restart Firefox.

> [!WARNING]
> Don't submit these web extension examples to addons.mozilla.org (AMO); you don't have to sign the examples to run them.

If you want to contribute to the repository, [send us a pull request](https://github.com/mdn/webextensions-examples/blob/main/CONTRIBUTING.md).

{{WebExtAllExamples}}
