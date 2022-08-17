---
title: Mobile Web Development
slug: Web/Guide/Mobile
tags:
  - Intermediate
  - NeedsExample
---
This page provides an overview of some of the main techniques needed to design web sites that work well on mobile devices. If you're looking for information on Mozilla's Firefox OS project, see the [Firefox OS](/en-US/docs/Mozilla/Firefox_OS) page. Or you might be interested in details about [Firefox for Android](/en-US/docs/Mozilla/Firefox_for_Android).

We've organized it into two sections, [designing for mobile devices](#designing_for_mobile_devices) and [cross-browser compatibility](#cross-browser_development). Also see Jason Grlicky's guide to [mobile-friendliness](/en-US/docs/Web/Guide/Mobile/Mobile-friendliness) for web developers.

## Designing for mobile devices

Mobile devices have quite different hardware characteristics compared with desktop or laptop computers. Their screens are usually smaller, obviously, but they also usually automatically switch the screen orientation between portrait and landscape mode as the user rotates the device. They usually have touch screens for user input. APIs like geolocation or orientation are either not supported on desktops or are much less useful, and these APIs give mobile users new ways to interact with your site.

### Working with small screens

[Responsive Web Design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design) is a term for a set of techniques that enables your web site to adapt its layout as its viewing environment — most obviously, the size and orientation of the screen — changes. It includes techniques such as:

- fluid CSS layouts, to make the page adapt smoothly as the browser window size changes
- the use of [media queries](/en-US/docs/Web/CSS/Media_Queries) to conditionally include CSS rules appropriate for the device screen [width](/en-US/docs/Web/CSS/@media/width) and [height](/en-US/docs/Web/CSS/@media/height)

The [viewport meta tag](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design#the_viewport_meta_tag) instructs the browser to display your site at the appropriate scale for the user's device.

### Working with touch screens

To use a touch screen you'll need to work with [DOM Touch events](/en-US/docs/Web/API/Touch_events). You won't be able to use the CSS {{cssxref(":hover")}} pseudo-class, and will need to design clickable items like buttons to respect the fact that fingers are fatter than mouse pointers. See this article on [designing for touch screens](https://web.archive.org/web/20150520130912/http://www.whatcreative.co.uk/blog/tips/designing-for-touch-screen/).

You can use the [pointer](/en-US/docs/Web/CSS/@media/pointer) or [any-pointer](/en-US/docs/Web/CSS/@media/any-pointer) media query to load different CSS on a touch-enabled device.

### Optimizing images

To help users whose devices have low or expensive bandwidth, you can optimize images by loading images appropriate to the device screen size and resolution. You do this in CSS by querying for screen [height](/en-US/docs/Web/CSS/@media/height), [width](/en-US/docs/Web/CSS/@media/width), and [pixel ratio](/en-US/docs/Web/CSS/@media/resolution).

You can also make use of CSS properties to implement visual effects like [gradients](/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients) and [shadows](/en-US/docs/Web/CSS/box-shadow) without images.

### Mobile APIs

Finally, you can take advantage of the new possibilities offered by mobile devices, such as [orientation](/en-US/docs/Web/Events/Detecting_device_orientation) and [geolocation](/en-US/docs/Web/API/Geolocation_API).

## Cross-browser development

### Write cross-browser code

To create web sites that will work acceptably across different mobile browsers:

- Try to avoid using browser-specific features, such as vendor-prefixed CSS properties.
- For browsers that don't support these features, as long as the content is still usable, do not provide a vendor prefixed fallback. Vendor-prefixed property like `-webkit-border-radius`, harm performance in browsers that are so old they don't support modern standards.
- To use new features with fallbacks that don't harm performance, style to target current browsers, then use the [`@supports`](/en-US/docs/Web/CSS/@supports) feature query to serve modern CSS to supporting browsers.

See this [list of Gecko-specific properties](/en-US/docs/Web/CSS/Mozilla_Extensions), and this [list of WebKit-specific properties](/en-US/docs/Web/CSS/WebKit_Extensions), and Peter Beverloo's [table of vendor-specific properties](https://peter.sh/experiments/vendor-prefixed-css-property-overview/).

### Take care with user agent sniffing

It's preferable for web sites to detect specific device features such as screen size and touch screens using the techniques listed above, and adapt themselves accordingly. But sometimes this is impractical, and web sites resort to parsing the browser's user agent string to try to distinguish between desktops, tablets, and phones, to serve different content to each type of device.

If you do this, make sure your algorithm is correct, and you aren't serving the wrong type of content to a device because you don't understand a particular browser's user agent string. See this [guide to using the user agent string to determine device type](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#mobile.2c_tablet_or_desktop).

### Test on multiple browsers

Test your web site on multiple browsers. This means testing on multiple platforms — at least iOS and Android.

- test mobile Safari on the iPhone using the [iOS simulator](https://developer.apple.com/devcenter/ios/index.action)
- test Opera and Firefox using the [Android SDK](https://developer.android.com/studio#command-tools). See these additional instructions for [running Firefox for Android using the Android emulator](https://wiki.mozilla.org/Mobile/Fennec/Android/Emulator).
