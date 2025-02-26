---
title: Add-ons
slug: Mozilla/Add-ons
page-type: landing-page
---

{{AddonSidebarMain}}

Add-ons allow developers to extend and modify the functionality of Firefox. They are written using standard Web technologies - JavaScript, HTML, and CSS - plus some dedicated JavaScript APIs.

Among other things, an add-on could:

- Change the appearance or content of particular websites
- Modify the Firefox user interface
- Add new features to Firefox

There are several types of add-ons, but the most common type are extensions.

## Developing extensions

In the past, there were several toolsets for developing Firefox extensions, but as of November 2017, extensions must be built using [WebExtensions APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions). Other toolsets, such as overlay add-ons, bootstrapped add-ons, and the Add-on SDK, are no longer supported.

Extensions written using WebExtensions APIs for Firefox are designed to be cross-browser compatible. In most cases, it will run in Chrome, Edge, and Opera with few if any changes. They are also fully compatible with multiprocess Firefox. You can see [the APIs currently supported in Firefox and other browsers](/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).

### Extension Workshop

The [Firefox Extension Workshop](https://extensionworkshop.com) can help you develop extensions for Firefox and give your users simple, yet powerful ways to customize their browsing experience. You'll find:

- [Overview of the Firefox extension features](https://extensionworkshop.com/#about)
- [Tools and processes for developing and testing](https://extensionworkshop.com/documentation/develop/)
- [How to publish your extension on addons.mozilla.org or distribute it yourself](https://extensionworkshop.com/documentation/publish/)
- [How to manage your published extension](https://extensionworkshop.com/documentation/manage/)
- [An enterprise guide for developing and using extensions](https://extensionworkshop.com/documentation/enterprise/)
- [How to develop themes for Firefox](https://extensionworkshop.com/documentation/themes/)
- [Firefox developer communities](https://extensionworkshop.com/community/)

### Extensions for Firefox for Android

In 2020, Mozilla will release a new Firefox for Android experience. This new, high-performance browser for Android has been rebuilt from the ground up using GeckoView, Mozilla's mobile browser engine. We are currently building support for the WebExtensions API on GeckoView.

## Publishing add-ons

[Addons.mozilla.org](https://addons.mozilla.org), commonly known as "AMO," is Mozilla's official site for developers to list add-ons, and for users to discover them. By uploading your add-on to AMO, you can participate in our community of users and creators and find an audience for your add-on.

You are not required to list your add-on on AMO, but your add-on must be signed by Mozilla else users will not be able to install it.

For an overview for the process of publishing your add-on see [Signing and distributing your add-on](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/).

## Other types of add-ons

In addition to extensions, there are a few other add-on types that allow users to customize Firefox. Those add-ons include:

- [User dictionaries](https://support.mozilla.org/en-US/kb/how-do-i-use-firefox-spell-checker) let you spell-check in different languages.
- [Language packs](https://support.mozilla.org/en-US/kb/use-firefox-another-language) let you have more languages available for the user interface of Firefox.

## Contact us

Check out the [contact us](/en-US/docs/Mozilla/Add-ons/Contact_us) page for details on how to get help, keep up to date with add-ons news, and give us feedback.
