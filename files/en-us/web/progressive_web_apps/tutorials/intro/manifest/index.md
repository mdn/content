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

Let's write the first few lines of our manifest file, using the text below or more discreet names and a description of your choosing.

```js
{
  "name": "Menstrual Cycle Tracker",
  "short_name": "CT",
  "description": "Securily and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving the data to your browser." 
}
```

### File name

Being a JSON file, the manifest file extension can be the specification suggestion `.webappmanifest`, though is most commonly the browser support `.json`.

Copy and past the above JSON object into a new file, and save it as `cycletracker.manifest`.

Before linking to it from our HTML file, let's discuss how this very brief `cycletracker.manifest` defines the identity, presentation, and iconography of the PWA, and introduce a few more keys that enable manifest files to define the appearance of our PWA.
