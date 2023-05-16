---
title: Best practices for PWAs
slug: Web/Progressive_web_apps/Guides/Best_practices
---

{{PWASidebar}}

[Progressive Web Apps](/en-US/docs/Web/Progressive_web_apps) (PWAs) can be installed on devices and used as traditional websites in web browsers. This means that PWAs need to be able to adapt to different environments, and to different user expectations.

This article provides a list of best practices to help you make sure your PWA is as good as it can be.

## Adapt to all browsers, devices, form-factors, and input types

PWAs allow you to develop an app that works on all devices from one codebase. This app can run in a browser, or be installed on a device and run as a standalone app. To ensure compatibility, it's essential to [test your app](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing) across various browsers, operating systems, and devices.

Considering the diverse range of devices and browsers your users may use, it's important to cater to a wide spectrum of potential users. Using [feature detection](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) allows you to deliver a usable experience to the broadest audience.

[Responsive design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design) is crucial for PWAs to ensure that content is accessible on any screen size. Users should be able to access all features and content regardless of the viewport size. By rearranging content at different viewport sizes, you can prioritize important data and actions.

Finally, ensure users can switch between input methods in your application. Support keyboard and mouse, as well as touch or stylus. Make sure all features of your application can be accessed through any input method. Use [semantic HTML elements](/en-US/docs/Glossary/Semantics#semantics_in_html) instead of recreating your own buttons or form elements since they already support all input methods out of the box.

## Provide an offline experience

Users of installed apps expect them to continue working even when their device is offline, or when connected to a slow or unreliable network.

### Custom offline page

At the very least, your PWA should provide a custom offline page that informs the user that they are offline instead of showing the generic browser error page. A custom offline page provides a more consistent experience across browsers and devices and keeps the user engaged with your app.

You can provide a custom offline page by using a [service worker](/en-US/docs/Web/API/Service_Worker_API) to intercept network requests and respond with the custom offline page when the user is offline.

### Offline operation

To go further and provide an app-like experience, you can make your PWA work offline. This means that the user can continue using some of your app's functionality even when they are offline.

Consider the following scenario: the user composes a long email, presses "Send", and then loses network connectivity. If your app is offline-ready, the email will be saved locally and sent automatically when the user is back online.

Learn more about offline operation in [Offline and background operation](/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Make it installable

Users can more easily return to and engage with apps that are permanently installed on their device.

Making your PWA installable makes it behave more like a platform-specific app, with its own icon, standalone window, and own entry in the places where users expect to find apps on their device. It's a great way to increase user engagement and retention.

Making your app installable also allows you to distribute it through app stores.

To learn more, see [Making PWAs installable](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Progressively enhance to available capabilities

{{Glossary("Progressive Enhancement")}} is a strategy for web development that has great benefits when building PWAs.

Focus on making the core functionalities of your app work universally first, by using the simplest technology for them, and then enhance the experience on supporting devices.

For example, handling form submissions with the {{htmlelement("form", "HTML form element")}} means that the form will work on all browsers, including those that don't support JavaScript. You can then progressively enhance the form by adding client-side validation and JavaScript-based submission for a better experience on compatible devices.

## Support deep links

Deep links are hyperlinks that point to specific pages within your app's domain. For example your app's home page might be available at `https://example.com/`, but you can also link to a specific product page at `https://example.com/products/123`.

The ability to refer to any resource by a unique URL is one of its most powerful features of the web. Because they're build on web technologies, PWAs can, and should, take advantage of this feature.

Making the different parts of your app available via their own unique URLs allows users to bookmark, navigate directly, and share specific content within your app. It also allows search engines to index your app's content and make it discoverable through web search.

## Make it fast

Users have different expectations for installed apps than they do for websites. Users anticipate websites to need time to load and navigate, particularly on poor network connections. However, they expect installed apps to be always fast and responsive.

The speed at which your app loads and perform its core functions plays a key role in user engagement and retention. The longer it takes for your app to respond, the more users will abandon the app.

There are tools, APIs, and best practices that help measure and improve performance. To learn more, see [Web performance](/en-US/docs/Web/Performance).

## Make it accessible

Accessibility is crucial to ensure everyone can use your app, regardless of their abilities or the device they use. Accessibility ensures that your app can be used by as many people as possible, but it can also sometimes be required by law. Furthermore, accessibility often leads to a better user experience for everyone, not just those with permanent or temporary disabilities.

Learn how to make your app accessible in [Accessibility](/en-US/docs/Web/Accessibility).

## Provide an app-like experience

### Integrate with the operating system

When installing a PWA, users expect it to behave like a platform-specific app. To provide the app-like experience that users expect, integrate your app with the operating system in some way. For example:

- Use the [Notifications API](/en-US/docs/Web/API/Notifications_API) to send notifications to the user's device.
- Handle files with the [`file_handlers`](/en-US/docs/Web/Manifest/file_handlers) web app manifest member.
- [Display badges](/en-US/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon) on the app icon.
- Enable [data sharing between apps](/en-US/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps).

Many of the [web app manifest members](/en-US/docs/Web/Manifest#members) can be used to customize the way your app is displayed on the user's device and integrate more deeply within the operating system.

### App look and feel

Users install apps to get a more focused experience than what they get from websites and achieve tasks more efficiently. They expect apps to be more streamlined, with less clutter, and to focus on the most important tasks.

Make sure your PWA provides an app-like experience by considering the following guidelines:

- Use a [standalone display mode](/en-US/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) to give your app its own dedicated window.
- [Define your app icon](/en-US/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- Detect the user's preferred theme with the {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} media feature and adapt your app's theme accordingly.
- [Customize your app's theme and background colors](/en-US/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) to provide a more polished experience that feels more like a platform-specific app.
- De-clutter the content and focus on the most important tasks that your app lets users achieve. This may mean removing big headers and footers that are traditionally found on websites and replacing them with a menu metaphor instead.
- Use the `system-ui` {{cssxref("font-family")}} to make your content feel more platform-native and load faster without requiring users to download a custom font.

## See also

- [What makes a good Progressive Web App](https://web.dev/pwa-checklist/) on web.dev (July 18, 2022).
- [Best practices for PWAs](https://learn.microsoft.com/microsoft-edge/progressive-web-apps-chromium/how-to/best-practices) on learn.microsoft.com (March 28, 2023).
