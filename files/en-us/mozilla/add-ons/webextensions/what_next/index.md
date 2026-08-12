---
title: What next?
slug: Mozilla/Add-ons/WebExtensions/What_next
page-type: guide
sidebar: addonsidebar
---

You are now ready to turn your ideas for a browser extension into reality. Before you start that journey, it's worth being aware of a few things that will help to make it a smooth one.

You can find more about many of the things discussed on this page on [Extension Workshop](https://extensionworkshop.com/), a website dedicated to helping you write, test, publish, and distribute extensions for Firefox.

## Your development environment

You don't need special development or build environment tools to create extensions: It's entirely possible to make great extensions with no more than a text editor. However, if you've been developing for the web and have a toolset and environment you want to reuse, you need to be aware of a couple of things.

If you use minification or obfuscation tools to deliver your final code, you must provide your source code to [the AMO review process](#the_review_process). Also, the tools you use—those for minification, obfuscation, and build processes—need to be open source (or offer unlimited free use) and available to run on the reviewer's computer (Windows, Mac, or Linux). Unfortunately, our reviewers can't work with commercial or web-based tools.

[Learn more about development tools on Extension Workshop.](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/)

## Third-party libraries

Third-party libraries are a great way to add complex features or functionality to your extensions quickly. When you submit an extension to the [AMO review process](#the_review_process), it considers any third-party libraries used. To streamline the review, make sure you always download any third-party library from its official website or repository, and if the library is minified, provide a link to the source code. Also, don't modify third-party libraries.

[Learn more about submitting source code on Extension Workshop](https://extensionworkshop.com/documentation/publish/source-code-submission/)

## The Firefox Add-on Distribution Agreement

Browser extensions must be signed to install into the release or beta versions of Firefox. Signing takes place on addons.mozilla.org (AMO) and is subject to the terms and conditions of the Firefox Add-on Distribution Agreement. The goal of the agreement is to ensure Firefox users have access to well-supported, quality add-ons that enhance the Firefox experience.

[Read the agreement on Extension Workshop](https://extensionworkshop.com/documentation/publish/firefox-add-on-distribution-agreement/)

[Learn more about signing on Extension Workshop](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)

## The review process

When you submit an extension for signing, it's subject to automated review. The automated review may also determine that a manual review is needed. AMO won't sign your browser extension until it passes the automated review, and it may revoke signing if your extension fails the manual review. The review process follows strict guidelines, making it easy to check and avoid potential review problems.

[Check out the review policy and guidelines on Extension Workshop](https://extensionworkshop.com/documentation/publish/add-on-policies/)

## AMO featured browser extensions

If you choose to list your browser extension on AMO, we may feature it on the AMO website, in the Firefox add-on manager, or elsewhere on a Mozilla website. We've compiled a list of guidelines for selecting extensions to feature. By following these guidelines, you give your extension the best chance of being featured.

[Learn more about getting your add-ons featured on Extension Workshop](https://extensionworkshop.com/documentation/publish/recommended-extensions/)

## Continue your learning experience

Now you know what lies ahead, it's time to dive into more details about extension development, discover:

- More about the fundamental concepts behind browser extensions, starting with details on how to [use the JavaScript APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/API).
- A guide to the [user interface components](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface) available to your extensions.
- A collection of how-to guides on achieving key tasks in your extensions or making use of the JavaScript APIs.
- A full reference guide to the [JavaScript APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).
- A full reference guide to the [Manifest keys](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

Also check out Extension Workshop, where you find everything you need to know about creating extensions for Firefox, including:

- [An overview of the Firefox extension features](https://extensionworkshop.com/#about)
- [Details of the tools and processes for developing and testing](https://extensionworkshop.com/documentation/develop/)
- [How to publish your extension on addons.mozilla.org or distribute it yourself](https://extensionworkshop.com/documentation/publish/)
- [How to manage your published extension](https://extensionworkshop.com/documentation/manage/)
- [An enterprise guide for developing and using extensions](https://extensionworkshop.com/documentation/enterprise/)
- [How to develop themes for Firefox](https://extensionworkshop.com/documentation/themes/)
- [Details about the Firefox developer communities](https://extensionworkshop.com/community/)
