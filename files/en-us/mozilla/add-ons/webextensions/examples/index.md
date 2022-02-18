---
title: Example extensions
slug: Mozilla/Add-ons/WebExtensions/Examples
tags:
  - Interface
  - WebExtensions
---
{{AddonSidebar}}

To illustrate how to use the WebExtension APIs, we maintain a repository of example extensions at <https://github.com/mdn/webextensions-examples>. This article describes how to run these examples and lists the examples along with the WebExtension APIs they demonstrate.

These examples work in Firefox Nightly: most work in earlier versions of Firefox, but check the [strict_min_version](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key in the extension's manifest.json to make sure.

> **Warning:** Some examples work only on specific domains or pages. Details of any restrictions are provided in each example's readme file. None of the examples work in private browsing windows by default, see [Extensions in Private Browsing](https://support.mozilla.org/en-US/kb/extensions-private-browsing#w_enabling-or-disabling-extensions-in-private-windows) for details.

To try these examples, clone the repository then:

1. load the extension from its source folder using the [Load Temporary Add-on](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) feature. The extension stays loaded until you restart Firefox.
2. open the extension's source folder at the command-line and use [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) to run the extension. The extension stays loaded until you restart Firefox.
3. in Firefox use **File** > **Open File** and find the example in the [`build`](https://github.com/mdn/webextensions-examples/tree/master/build) folder. The `build` folder contains built and signed versions of all the examples. This permanently installs the example.

> **Warning:** Please do not submit these WebExtension examples to addons.mozilla.org (AMO); you do not have to sign the add-on WebExtension examples to run them. Follow the steps above.

If you want to contribute to the repository, [send us a pull request.](https://github.com/mdn/webextensions-examples/blob/master/CONTRIBUTING.md)

{{WebExtAllExamples}}
