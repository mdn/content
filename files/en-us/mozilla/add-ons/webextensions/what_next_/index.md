---
title: What next?
slug: Mozilla/Add-ons/WebExtensions/What_next_
tags:
  - Beginner
  - Extensions
  - WebExtension
---
{{AddonSidebar}}

You'll now be ready to start turning your idea for a browser extension into reality. Before you start that journey, it's worth being aware of a few things that will help to make it a smooth one.

You can find more about many of the things discussed this page on [Extension Workshop](https://extensionworkshop.com), a website dedicated to helping you write, test, publish, and distribute extensions for Firefox.

## Your development environment

You don't need any special development or build environment tools to create browser extensions: It's entirely possible to create great browser extensions with no more than a text editor. However, you may have been developing for the web and have a set of tools and an environment you want to reuse. If you do, you need to be aware of a couple of things.

If you use minification or obfuscation tools to deliver your final code, you'll need to provide your source code to [the AMO review process](#the_review_process). Also, the tools you use—those for minification, obfuscation, and build processes—will need to be open source (or offer unlimited free use) and be available to run on the reviewer's computer (Windows, Mac, or Linux). Unfortunately, our reviewers can't work with commercial or web-based tools.

[Learn more about development tools on Extension Workshop](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/)

## Third-party libraries

Third-party libraries are a great way to add complex features or functionality to your browser extensions quickly. When you submit an extension to the [AMO review process](#the_review_processv), the process will also consider any third-party libraries used. To streamline the review, make sure you always download third-party libraries from their official website or repository, and if the library is minified provide a link to the source code. Please note that third-party libraries cannot be modified in any way.

[Learn more about submitting source code on Extension Workshop](https://extensionworkshop.com/documentation/publish/source-code-submission/)

## The Firefox Add-on Distribution Agreement

Browser extensions need to be signed to install into the release or beta versions of Firefox. Signing takes place in addons.mozilla.org (AMO) and is subject to the terms and conditions of the Firefox Add-on Distribution Agreement. The goal of the agreement is to ensure Firefox users get access to well supported, quality add-ons that enhance the Firefox experience.

[Read the agreement on Extension Workshop](https://extensionworkshop.com/documentation/publish/firefox-add-on-distribution-agreement/)

[Learn more about signing on Extension Workshop](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)

## The review process

When a browser extension is submitted for signing, it's subject to automated review. It may also be subject to a manual review, when the automated review determines that a manual review is needed. Your browser extension won't be signed until it's passed the automated review and may have its signing revoked if it fails to pass the manual review. The review process follows a strict set of guidelines, so it's easy to check and avoid any likely review problems.

[Check out the review policy and guidelines on Extension Workshop](https://extensionworkshop.com/documentation/publish/add-on-policies/)

## AMO featured browser extensions

If you choose to list your browser extension on AMO, your extension could be featured on the AMO website, in the Firefox browser's add-on manager, or elsewhere on a Mozilla website. We've compiled a list of guidelines about how extensions are selected for featuring, by following these guidelines you give your extension the best chance of being featured.

[Learn more about getting your add-ons featured on Extension Workshop](https://extensionworkshop.com/documentation/publish/recommended-extensions/)

## Continue your learning experience

Now you know what lies ahead, it's time to dive into more details about browser extension development. In the sections that follow, you'll discover:

- More about the fundamental concepts behind browser extensions, starting with details on how to [use the JavaScript APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/API).
- A guide to the [user interface components](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface) available to your browser extensions.
- A collection of how-to guides on achieving key tasks in your extensions or making use of the JavaScript APIs.
- A full reference guide to the [JavaScript APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).
- A full reference guide to the [Manifest keys](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

You'll also want to head on over to Extension Workshop where you'll find everything you need to know about creating extensions for Firefox, including:

- [an overview of the Firefox extension features](https://extensionworkshop.com/#about)
- [details of the tools and processes for developing and testing](https://extensionworkshop.com/documentation/develop/)
- [how to publish your extension on addons.mozilla.org or distribute it yourself](https://extensionworkshop.com/documentation/publish/)
- [how to manage your published extension](https://extensionworkshop.com/documentation/manage/)
- [an enterprise guide for developing and using extensions](https://extensionworkshop.com/documentation/enterprise/)
- [how to develop themes for Firefox](https://extensionworkshop.com/documentation/themes/)
- [details about the Firefox developer communities](https://extensionworkshop.com/community/)
