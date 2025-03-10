---
title: Example extensions
slug: Mozilla/Add-ons/WebExtensions/Examples
page-type: guide
---

{{AddonSidebar}}

To illustrate how to use the WebExtension APIs, we maintain a repository of example extensions at <https://github.com/mdn/webextensions-examples>. This article describes how to run these examples and lists the examples along with the WebExtension APIs they demonstrate.

These examples work in Firefox Nightly: most work in earlier versions of Firefox, but check the [strict_min_version](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key in the extension's manifest.json to make sure.

> [!WARNING]
> Some examples work only on specific domains or pages. Details of any restrictions are provided in each example's readme file. None of the examples work in private browsing windows by default, see [Extensions in Private Browsing](https://support.mozilla.org/en-US/kb/extensions-private-browsing#w_enabling-or-disabling-extensions-in-private-windows) for details.

To try these examples, clone the repository, then install and run the extension using one of these options:

- use the [Load Temporary Add-on](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) feature and open the extension from its source folder.
- install [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/), open the extension's source folder at the command line, and use `web-ext run`.

The extension stays loaded until you restart Firefox.

> [!WARNING]
> Please do not submit these WebExtension examples to addons.mozilla.org (AMO); you do not have to sign the add-on WebExtension examples to run them.

If you want to contribute to the repository, [send us a pull request.](https://github.com/mdn/webextensions-examples/blob/main/CONTRIBUTING.md)

{{WebExtAllExamples}}
