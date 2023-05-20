---
title: PWA manifest and iconography
slug: Web/Progressive_web_apps/Tutorials/Intro/manifest
---

A PWA manifest file is a JSON file that provides information about the features of that app to make it look and behave like a native app when installed on the users device.

## PWA manifest file

The manifest file contains information about the PWA's identity, presentation, an iconography. While the only requirement is to include a name using the `name` or `short_name` key, the minimum information you should include in the manifest file is the PWA's name, the icons to use, and the URL to be opened when the PWA is launched.

A minimalist manifest file for our menstrual cycle tracking app could look like this:

```js
{
  "short_name": "CT",
  "start_url": "/",
  "icons": [
    {
      "src": "icon-512.png",
      "sizes": "512x512"
    }
  ]
}
```

### File name

Being a JSON file, the manifest file extension can be the specification suggestion `.webappmanifest`, though is most commonly the browser support `.json`.

Copy and past the above JSON object into a new file, and save it as `cycletracker.manifest`.

Before linking to it from our HTML file, let's discuss how this very brief `cycletracker.manifest` defines the identity, presentation, and iconography of the PWA, and introduce a few more keys that enable manifest files to define the appearance of our PWA.

### PWA identity

The idently must include a `name` or `short_name`, or both. and `description`. It call also include a short name and a description. The short name key must be validated as the same name will be shown when on the Add to Home Screen.

### PWA presentation

Presentation includes keys like Start Url, Theme Color, Background color, Orientation, and Display
            Start URL: This value must be validated, as the Start URL will be considered as the start page when a user taps on the app icon and launches it.
            Display: Display property controls the app's display mode like full screen, minimal UI, etc.
            Theme Color & Background Color: These properties deal with the color of the address bar and the background of the app.
            Orientation: This key defines default orientation for apps like portrait, landscape, etc.

### PWA iconography

Icon is a property that contains a set of icons, which will be used for the home screen icon, task view icon, etc.

We will include another `<link>` when we create the [manifest file](/en-US/Docs/Web/Progressive_web_apps/Tutorials/Intro/manifest) and will also include a `<link>` when developing the [PWA splash page](/en-US/Docs/Web/Progressive_web_apps/Tutorials/Intro/Splash)):

PWAs require a manifest file. The web manifest is an external JSON file. To include the external JSON resource, the `rel="manifest"` is used. The `href` attribute of the `<link>` points to the location of the resource.

The `<link>` element is most commonly used to link to stylesheets and, with PWAs, the required manifest file, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.

The manifest file, which we'll call `cyclemanifest.json`, defines the [PWA icons and appearance](/en-US/Docs/Web/Progressive_web_apps/Tutorials/Intro/manifest). For now, we include the link as a placeholder.

Now that we hae a PWA manifest file, let's create the JavaScript functionality and [create a secure connection](/en-US/Docs/Web/Progressive_web_apps/Tutorials/Intro/Secure). While no frameworks are needed to create a PWA, we will use X to create a secure localhost connection; a PWA requirement.

A service worker manifest file is a JSON file that contains information about the service worker. The name of the service worker manifest file must be manifest.json.

The following are the components of a service worker manifest file:

name: The name of the service worker.
short_name: The short name of the service worker.
icons: An array of objects that specify the icons for the service worker. Each object in the array must have the following properties:
src: The URL of the icon file.
sizes: The size of the icon file.
type: The MIME type of the icon file.
theme_color: The color of the service worker's user interface.
background_color: The background color of the service worker's user interface.
display: The display mode for the service worker. The possible values are:
standalone: The service worker will be displayed as a standalone application.
fullscreen: The service worker will be displayed in fullscreen mode.
minimal-ui: The service worker will be displayed with a minimal user interface.
scope: The scope of the service worker. The scope is the URL of the directory that the service worker will be registered for.
start_url: The URL of the service worker's start file. The start file is the file that will be loaded when the service worker is activated.
version: The version of the service worker.

Here is an example of a service worker manifest file:

```js
{
  "name": "Cycle Tracker",
  "start_url": "/",
  "display": "standalone",
  "icons": [
    {
      "src": "icon-512.png",
      "sizes": "512x512"
    }
  ]
}
```
