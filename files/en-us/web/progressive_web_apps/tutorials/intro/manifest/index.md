---
title: PWA manifest and iconography
slug: Web/Progressive_web_apps/Tutorials/Intro/manifest
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/Intro/JavaScript", "Web/Progressive_web_apps/Tutorials/Intro/Secure", "Web/Progressive_web_apps/Tutorials/Intro")}}

{{PWASidebar}}

A PWA manifest file is a JSON file that provides information about the features of that app to make it look and behave like a native app when installed on the user's device.

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

Before saving the manifest file and linking to it from our HTML file, let's discuss how this very brief JSON object defines the identity, presentation, and iconography of the PWA, and introduce a few more keys that enable manifest files to define the appearance of our PWA.

### PWA identity

The identity of your PWA is defined in the manifest file. The JSON must include a `name` or `short_name` key, or both. It can also include a `description`.

- [`name`](/en-US/docs/Web/Manifest/name)
  - : The name of the PWA. This is the name used when the operating system lists applications, as the label next to the application icon, etc.
- [`short_name`](/en-US/docs/Web/Manifest/short_name)
  - : The name of the PWA displayed to the user if there isn't enough space to display the `name`. It is used as the label for icons on phone screens, including in the "Add to Home Screen" dialog on iOS.

When both the `name` and `short_name` are present, the `name` is used in most instances, with the `short_name` used when there is a limited space to display the application name.

- [`description`](/en-US/docs/Web/Manifest/description)
  - : Explanation of what the application does. It provides an [accessible description](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description) of the application's purpose and function.

#### Task

Write the first few lines of your manifest file. You can use the text below or more discreet values and a description of your choosing.

#### Example solution

```js
{
  "name": "Menstrual Cycle Tracker",
  "short_name": "CT",
  "description": "Securily and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving the data to your browser." 
}
```

### PWA presentation

The appearance, or presentation, of a PWA's installed and offline experiences are defined in the manifest. Some of the presentation manifest keys include the `start_url`, `theme_color`, `background_color`, and `display`.

- [`start_url`](/en-US/docs/Web/Manifest/start_url)
  - : The start page when a user launches the PWA.
- [`theme_color`](/en-US/docs/Web/Manifest/theme_color)
  - : The default [color of operating system and browser UI elements](/en-US/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color) such as the status bar on some mobile experiences and the application title bar on desktop operating systems.
- [`background_color`](/en-US/docs/Web/Manifest/background_color)
  - : A placeholder color to be displayed as the [background of the app](/en-US/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) until the CSS is loaded. To create a smooth transition between app launch and load, it is recommended to use the [`<color>`](/en-US/docs/Web/CSS/color_value) declared as the app's [`background-color`](/en-US/docs/Web/CSS/background-color) color.
- [`display`](/en-US/docs/Web/Manifest/display)
  - : Controls the app's display mode including `fullscreen`, `minimal-ui`, and `standalone`, displaying the PWA as a standalone application.

#### Task

Add presentation definitions to the manifest file you began creating in the previous task.

#### Example solution

As the example application is a single page, we can use `"/"`, or omit the key altogether.

In [our CSS](/en-US/Docs/Web/Progressive_web_apps/Tutorials/Intro/HTML#CSS_file), the `background-color: #efe;` is set on the `body` element selector. We use `#eeffee` to ensure a smooth transition from placeholder appearance to app load.
}

```js
{
  "name": "Menstrual Cycle Tracker",
  "short_name": "CT",
  "description": "Securily and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving the data to your browser.", 
  "start_url": "/",
  "theme_color": "#eeffee",
  "background_color": "#eeffee",
  "display": "standalone"
}
```

There is also an `orientation` key to define the PWA's default orientation as `portrait` or `landscape` .

### PWA iconography

Icon is a property that contains a set of icons, which will be used for the home screen icon, task view icon, etc.

icons: An array of objects that specify the icons for the service worker. Each object in the array must have the following properties:
src: The URL of the icon file.
sizes: The size of the icon file.
type: The MIME type of the icon file.

We will include another `<link>` when we create the [manifest file](/en-US/Docs/Web/Progressive_web_apps/Tutorials/Intro/manifest) and will also include a `<link>` when developing the [PWA splash page](/en-US/Docs/Web/Progressive_web_apps/Tutorials/Intro/Splash):

PWAs require a manifest file. The web manifest is an external JSON file. To include the external JSON resource, the `rel="manifest"` is used. The `href` attribute of the `<link>` points to the location of the resource.

The `<link>` element is most commonly used to link to stylesheets and, with PWAs, the required manifest file, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.

The manifest file, which we'll call `cyclemanifest.json`, defines the [PWA icons and appearance](/en-US/Docs/Web/Progressive_web_apps/Tutorials/Intro/manifest). For now, we include the link as a placeholder.

Now that we hae a PWA manifest file, let's create the JavaScript functionality and [create a secure connection](/en-US/Docs/Web/Progressive_web_apps/Tutorials/Intro/Secure). While no frameworks are needed to create a PWA, we will use X to create a secure localhost connection; a PWA requirement

name: The name of the service worker.

scope: The scope of the service worker. The scope is the URL of the directory that the service worker will be registered for.
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

### File name

A service worker manifest file is a JSON file that contains information about the service worker. Being a JSON file, the manifest file extension can be the specification suggestion `.webappmanifest`, though is most commonly the browser support `.json`. The name of the service worker manifest file must be manifest.json.

Before linking to it from our HTML file, let's discuss how this very brief `cycletracker.manifest` defines the identity, presentation, and iconography of the PWA, and introduce a few more keys that enable manifest files to define the appearance of our PWA.

#### Task

Save the manifest file that you have created in the steps above.

#### Example solution

View the [`cycletracker.manifest` file](https://mdn.github.io/pwa-examples/intro/manifest/cycletracker.manifest) and view the [project source code](https://github.com/mdn/pwa-examples/tree/master/intro/manifest) on GitHub.
