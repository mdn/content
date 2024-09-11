---
title: How to make PWAs installable
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs
page-type: guide
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

In the last step of this tutorial, we read about how the example application, [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/), works offline thanks to its [service worker](/en-US/docs/Web/API/Service_Worker_API), but we can go even further and allow users to install the web app on their device. The installed web app can then be launched by users just as if it were any OS-native app. This article explains how to achieve this using the web app's manifest.

The web app manifest allows the app to be launched directly from the device's home screen, taskbar, or dock, rather than the user having to open the browser and then navigate to the site by using a bookmark or typing the URL. Your web app can sit next to native applications, which makes it easier for users to access. Additionally, you can specify that the app be launched in fullscreen or standalone mode, thus removing the default browser user interface that would otherwise be present, creating an even more seamless and native-like feel.

To learn more, see [Making PWAs installable](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Requirements

To make our example application installable, the following things are needed:

- A web application manifest, with the [correct members filled in](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).
- The website to be served from a secure (HTTPS) domain.
- An icon to represent the app on the device.

### The web app manifest file

The key element is a web application manifest file, which lists all the information about the website in a JSON format.

It usually resides in the root folder of a web app. It contains useful information, such as the app's title, paths to different-sized icons that can be used to represent the app on an OS (such as an icon on the home screen, an entry in the Start menu, or an icon on the desktop), and a background color to use in loading or splash screens. This information is needed for the browser to present the web app properly during the installation process, as well as within the device's app-launching interface, such as the home screen of a mobile device.

The `js13kpwa.webmanifest` file of the [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) web app is included in the {{HTMLElement("head")}} block of the `index.html` file using the following line of code:

```html
<link rel="manifest" href="js13kpwa.webmanifest" />
```

> [!NOTE]
> Many use `manifest.json` for web app manifests as the contents are organized in a JSON structure. However, the `.webmanifest` file format is explicitly mentioned in the [W3C manifest specification](https://w3c.github.io/manifest/), so that's what we'll use here.

The content of the file looks like this:

```json
{
  "name": "js13kGames Progressive Web App",
  "short_name": "js13kPWA",
  "description": "Progressive Web App that lists games submitted to the A-Frame category in the js13kGames 2017 competition.",
  "icons": [
    {
      "src": "icons/icon-32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    // ...
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/pwa-examples/js13kpwa/index.html",
  "display": "fullscreen",
  "theme_color": "#B12A34",
  "background_color": "#B12A34"
}
```

Most of the members are self-explanatory. Here is a description of the members shown in the previous code sample:

- `name`: The full name of your web app.
- `short_name`: Short name to be shown on the home screen.
- `description`: A sentence or two explaining what your app does.
- `icons`: Information about the app icons — source URLs, sizes, and types. Be sure to include at least a few, so that one that fits best will be chosen for the user's device. See [Define your app icons](/en-US/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- `start_url`: The index document to launch when starting the app.
- `display`: How the app is displayed; can be `fullscreen`, `standalone`, `minimal-ui`, or `browser`.
- `theme_color`: A primary color for the UI, used by operating system.
- `background_color`: A color used as the app's default background, used during install and on the splash screen.

There are even more members you can use than listed above — be sure to check the [Web App Manifest reference](/en-US/docs/Web/Manifest) for details.

## Installing the PWA

Using the information found in our web app manifest, supporting browsers can display an installation prompt to the user. When the user visits the PWA, they can be prompted to install it on their device. When they accept the prompt, the PWA is installed just like other OS-native apps and the user can launch and use the web app as normal.

To learn more about how users can install PWAs, see [Installing and uninstalling web apps](/en-US/docs/Web/Progressive_web_apps/Guides/Installing).

### Splash screen

On certain devices, a splash screen is also generated from the information in the manifest, which is shown when the PWA is launched and while it's being loaded.

![Screenshot of the app's splash screen on a mobile phone. It is an all-red page with the application logo in the middle and its name below it: "js13kGames Progressive Web App"](js13kpwa-splash.png)

The icon and the theme and background colors are used to create this screen.

## Summary

In this article, we learned about how we can make PWAs installable with a properly-configured web app manifest, and how the user can then install the PWA on their devices.

Now let's move to the last step in our PWA tutorial: using push notifications to share announcements with the user, and to help the user re-engage with our app.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
