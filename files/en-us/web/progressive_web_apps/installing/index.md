---
title: Installing and uninstalling web apps
slug: Web/Progressive_web_apps/Installing
tags:
  - Android
  - Applications
  - Apps
  - Beginner
  - Chrome
  - Firefox
  - Guide
  - Home Screen
  - Installing
  - Launcher
  - PWA
  - Progressive web apps
  - Samsung
  - Springboard
  - Uninstalling
  - Web
---


Web application installation is a feature available in modern browsers that allows users to choose to easily and conveniently "install" a web application on their device so they can access it in the same way they would any other installed app. Depending on the device and features of the operating system and browser, this can result in what is essentially a fully featured application (for example, using [WebAPK](https://web.dev/webapks/) on Android) or as a shortcut added to their device's screen. This guide explains how installation is performed, what it means, and what you need to do as a developer to let your users take advantage of it.

## Why installation?

The option to install a web application is part of the [Progressive Web App](/en-US/docs/Web/Progressive_web_apps) philosophy—giving web apps the same user experience advantages as native apps so they can be competitive. Installed applications are more conveniently invoked as they have a presence in a device's home screen or app list or bar. This makes it simple for a user to use a gesture to access an app by tapping or clicking its icon. The application itself may then manifest as in a chromeless view (without the full browser chrome) but it nevertheless is executing effectively as a tab within the browser.

For users, the experience of a seemingly-native PWA is more comfortable and convenient than a typical web site. By reducing the user experience differential between the web app and native apps on the user's device, you reduce both the loss of any muscle memory they have revolving around the native interface of the device and the sensation of "something isn't quite right" that users can experience when switching between native and web-based apps.

## What browsers support installation?

Installation is supported by Chrome for Android and Android WebView version 31 and later, Opera for Android 32 onward, Samsung Internet from version 4 onward, and Firefox for Android [version 58](/en-US/docs/Mozilla/Firefox/Releases/58) and later.

Safari on iOS is a little different. Some parts of the PWA ecosystem are supported, while others are not. iOS 13 introduced a much more comparable install experience, which is also described here.

## The install user experience

We've written a very simple example web site ([see our demo live](https://mdn.github.io/pwa-examples/a2hs/), and also [see the source code](https://github.com/mdn/pwa-examples/tree/master/a2hs)) that doesn't do much, but was developed with the necessary code to allow it to be installed, as well as a service worker to enable it to be used offline.
The example displays a series of fox pictures. If you have a web application compatible device available, use it to navigate to our demo at `https://mdn.github.io/pwa-examples/a2hs/`. You'll see fox pictures, but more importantly, some form of user interface will be available to let you install the site as a web app.

The UI for this varies from browser to browser, but the general idea is the same. Unfortunately, there isn't a standard for icons and symbols used for operations such as this.

### Firefox for Android

On an Android device using Firefox, you'll see a "home" icon with a plus (+) icon inside it—this is the "Add to Home screen" icon displayed for any site that has the necessary features in place.

![A screenshot of a web browser displaying the Add to Home Screen icon at the top](android-a2hs-icon.png)

Tapping this will show a confirmation banner—pressing the banner's big "+ ADD TO HOME SCREEN" button completes the action, adding the app to the Home screen. Note that in Android 8 and higher, a system-level "Add to Home screen" permission dialog will be shown first.

![A screenshot of Firefox for Android requesting confirmation before installing a web app](fx-a2hs-banner.png)

### Samsung Internet Browser

If you have Samsung Internet in your mobile device you will see a different icon.

![A screenshot of Samsung Internet Browser showing its Add to Home Screen icon](samsung-internet-add-app.png)

Tapping that icon should then take you to the same confirmation banner shown in Firefox above.

### Google Chrome for Android

If you have Google Chrome for Android available, the experience is slightly different; upon loading our site, you'll see an install banner pop up asking whether you want to add this app to your Home screen.

![Screenshot of a Chrome banner requesting permission to install the Foxes sample app](chrome-a2hs-banner.png)

> **Note:** You can find out a lot more about Chrome install banners from the article [How to provide your own in-app install experience](https://web.dev/customize-install/).

If you choose not to add it to your Home screen at this point, you can do so later using the "Add to Home Screen" icon in the main Chrome menu.

### Safari for iOS / iPhoneOS / iPadOS

On Apple's iOS (including iPhoneOS and iPadOS), the Safari browser built into the device has some support for web applications, including support for the add to home screen feature. To add a web app to the home screen (also known as the launcher or springboard), tap the sharing button at the bottom of the screen:

![Screenshot showing the location of the Share button in Safari on iOS 13](safari-ios-a2hs-icon.png)

This calls up the sharing panel. Among the options should be the "Add to Home Screen" option, unless it's been specifically removed from the list by the user editing the options displayed:

![Screenshot of Safari iOS's sharing panel, showing the "Add to Home Screen" option](safari-ios-share-menu.png)

Choosing "Add to Home Screen" here presents the confirmation dialog box, which not only confirms that the user wants to add the app to the home screen, but also lets the user customize its name.

![A screenshot of iOS Safari showing its "Add to Home Screen" setup and confirmation panel](safari-ios-a2hs-banner.png)

Upon clicking "Add," the app is included on the home screen.

### The installed web application

Regardless of which browser and device you're using, when you choose to add the app to your home screen or app launcher, it'll show up there looking just like any application. Typically this means you'll see the app's icon along with a short title.

![Screenshot of an Android home screen with the "Foxes" app displayed](a2hs-on-home-screen.png)

When you tap the web app's icon on the home screen, it opens up in a full screen web environment, without the browser's UI around it.
