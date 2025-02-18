---
title: Best practices for PWAs
slug: Web/Progressive_web_apps/Guides/Best_practices
page-type: guide
---

{{PWASidebar}}

[Progressive Web Apps](/en-US/docs/Web/Progressive_web_apps) (PWAs) can be installed on devices and used as traditional websites in web browsers. This means that PWAs need to be able to adapt to different environments and to different user expectations.

This article provides a list of best practices to help you make sure your PWA is as good as it can be.

## Adapt to all browsers

Your PWA is based on Web technologies. This means that, on top of being installable on devices, PWAs can run in web browsers too. To ensure compatibility, it's essential to [test your app](/en-US/docs/Learn_web_development/Extensions/Testing) across various browsers and operating systems.

Consider the diverse range of browsers your users may use and cater to a wide spectrum of potential users. Using [feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection) allows you to deliver a usable experience to the broadest audience.

Feature detection also helps with {{Glossary("Progressive Enhancement")}}, a design philosophy that makes it possible to deliver a great experience to as many users as possible.

With Progressive Enhancement, you focus on making the core functionalities of your app work universally first by using the simplest technology, then enhancing the experience for supporting devices.

For example, handling form submissions with the HTML {{htmlelement("form")}} element means that the form will work on all browsers, including those that don't support JavaScript. You can then progressively enhance the form by adding client-side validation and JavaScript-based submission handling for a better experience on compatible devices.

## Adapt to all devices

Similar to how testing your app across various browsers is important, testing across devices ensures your app is accessible to the broadest audience.

[Responsive design](/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) is crucial for PWAs to ensure the content is accessible on any screen size. Users should be able to access all features and content regardless of their device's screen size. By rearranging content at different viewport sizes, you can prioritize important data and actions.

Ensure users can interact with your application no matter how they access your content. Support keyboard and mouse, as well as touch or stylus input methods. Make sure all your application features can be accessed through any input method.

Finally, use [semantic HTML elements](/en-US/docs/Glossary/Semantics#semantics_in_html) rather than recreating your own buttons or form elements as semantic HTML elements support all user input methods right out of the box.

## Provide an offline experience

Users of installed apps expect them to always work; even when connected to a slow or unreliable network or when their device is completely offline.

### Custom offline page

At the very least, your PWA should provide a custom offline page that informs the user that they are offline instead of showing the generic browser error page. A custom offline page provides a more consistent experience across browsers and devices and keeps the user engaged with your app.

You can provide a custom offline page by using a [service worker](/en-US/docs/Web/API/Service_Worker_API) to intercept network requests and respond with the custom offline page when the user is offline.

### Offline operation

To go further and provide an app-like experience, your PWA should function when the user is offline. This means that the user can continue using some, and preferably all, of your app's functionality even when they are offline.

Consider the following scenario: the user composes a long email and presses "Send", not realizing they have lost network connectivity. Because your app works offline, the email will be saved locally and sent automatically when the device is back online.

Learn more about [offline and background operations](/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Support deep links

Deep links are hyperlinks that point to specific pages within your app's domain. For example, your app's home page might be available at `https://example.com/`, but you can also link to a specific product page at `https://example.com/products/123`.

The ability to refer to any resource by a unique URL is one of the most powerful features of the web. Because they're built on web technologies, PWAs can, and should, take advantage of this feature.

Making different sections of your app available via unique URLs allows users to bookmark, navigate directly to, and share specific content within your app. It also allows search engines to index your app's content and make it discoverable through web searches.

## Make it fast

Users have different expectations for installed apps than they do for websites. Users anticipate websites to need time for loading and navigation, particularly on poor network connections. However, they expect installed apps to be always fast and responsive.

The speed at which your app loads and performs its core functions plays a key role in user engagement and retention. The longer it takes for your app to respond, the more users will abandon it.

There are tools, APIs, and best practices that help measure and improve performance. To learn more, see [web performance](/en-US/docs/Web/Performance).

## Make it accessible

Accessibility is crucial to ensure everyone can use your app, regardless of an individual's abilities or the device they use to access your app. Accessibility ensures that as many people can use your app as possible. Accessibility is also required by law. Furthermore, accessibility often leads to better user experience for everyone, not just those with permanent or temporary disabilities.

Learn how to make your app accessible in [accessibility](/en-US/docs/Web/Accessibility).

## Provide an app-like experience

### Integrate with the operating system

Users expect installed PWAs to behave like any installed platform-specific app. To provide the app-like experience that users expect, integrate your app with the operating system in some way. For example:

- Use the [Notifications API](/en-US/docs/Web/API/Notifications_API) to send notifications to the user's device.
- Handle files with the [`file_handlers`](/en-US/docs/Web/Manifest/Reference/file_handlers) web app manifest member.
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

- [What makes a good Progressive Web App](https://web.dev/articles/pwa-checklist) on web.dev (2022).
- [Best practices for PWAs](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/best-practices) on learn.microsoft.com (2023).
