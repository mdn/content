---
title: Using the Permissions API
slug: Web/API/Permissions_API/Using_the_Permissions_API
page-type: guide
tags:
  - API
  - Experimental
  - Geolocation
  - Guide
  - Permissions
---
{{DefaultAPISidebar("Permissions API")}}

This article provides a basic guide to using the W3C Permissions API, which provides a programmatic way to query the status of API permissions attributed to the current context.

## The trouble with asking for permission…

Let's face it, permissions on the Web are a necessary evil, and they are not much fun to deal with as developers.

Historically, different APIs handle their own permissions inconsistently — for example the Notifications API allows for explicit checking of permission status and requesting permission, whereas the Geolocation API doesn't (which causes problems if the user denied the initial permission request, as we'll see below).

The [Permissions API](/en-US/docs/Web/API/Permissions_API) provides the tools to allow developers to implement a better user experience as far as permissions are concerned. For example, it can query whether permission to use a particular API is granted or denied, and specifically request permission to use an API.

At the moment, implementation of the API is at an early stage, so support in browsers is pretty spotty:

- It can only be found in Chrome 44 and later and Firefox 43 and later.
- The only supported method right now is {{domxref("Permissions.query()")}}, which queries permission status.
- The only two APIs currently recognized by the Permissions API in Chrome are [Geolocation](/en-US/docs/Web/API/Geolocation) and Notification, with Firefox also recognizing [Push](/en-US/docs/Web/API/Push_API) and WebMIDI.

More features will be added as time progresses.

## A simple example

For this article, we have put together a simple demo called Location Finder. It uses Geolocation to query the user's current location and plot it out on a Google Map:

![Screenshot showing a map of Greenfield, UK.](location-finder-with-permissions-api.png)

You can [run the example live](https://chrisdavidmills.github.io/location-finder-permissions-api/), or [view the source code on GitHub](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages). Most of the code is simple and unremarkable — below we'll just be walking through the Permissions API-related code, so check the code yourself if you want to study any of the other parts.

### Accessing the Permissions API

The {{domxref("Navigator.permissions")}} property has been added to the browser to allow access to the global {{domxref("Permissions")}} object. This object will eventually include methods for querying, requesting, and revoking permissions, although currently it only contains {{domxref("Permissions.query()")}}; see below.

### Querying permission state

In our example, the Permissions functionality is handled by one function — `handlePermission()`. This starts off by querying the permission status using {{domxref("Permissions.query()")}}. Depending on the value of the {{domxref("PermissionStatus.state", "state")}} property of the {{domxref("PermissionStatus")}} object returned when the promise resolves, it reacts differently:

- `"granted"`
  - : The "Enable Geolocation" button is hidden, as it isn't needed if Geolocation is already active.
- `"prompt"`
  - : The "Enable Geolocation" button is hidden, as it isn't needed if the user will be prompted to grant permission for Geolocation. The {{domxref("Geolocation.getCurrentPosition()")}} function is then run, which prompts the user for permission; it runs the `revealPosition()` function if permission is granted (which shows the map), or the `positionDenied()` function if permission is denied (which makes the "Enable Geolocation" button appear).
- `"denied"`
  - : The "Enable Geolocation" button is revealed (this code needs to be here too, in case the permission state is already set to denied for this origin when the page is first loaded).

```js
function handlePermission() {
  navigator.permissions.query({ name: 'geolocation' }).then((result) => {
    if (result.state === 'granted') {
      report(result.state);
      geoBtn.style.display = 'none';
    } else if (result.state === 'prompt') {
      report(result.state);
      geoBtn.style.display = 'none';
      navigator.geolocation.getCurrentPosition(revealPosition,positionDenied,geoSettings);
    } else if (result.state === 'denied') {
      report(result.state);
      geoBtn.style.display = 'inline';
    }
    result.addEventListener('change', () => {
      report(result.state);
    });
  });
}

function report(state) {
  console.log(`Permission ${state}`);
}

handlePermission();
```

### Permission descriptors

The {{domxref("Permissions.query()")}} method takes a `PermissionDescriptor` dictionary as a parameter — this contains the name of the API you are interested in. Some APIs have more complex `PermissionDescriptor`s containing additional information, which inherit from the default `PermissionDescriptor`. For example, the `PushPermissionDescriptor` should also contain a Boolean that specifies if [`userVisibleOnly`](/en-US/docs/Web/API/PushManager/subscribe#parameters) is `true` or `false`.

### Revoking permissions

Starting in Firefox 47, you can now revoke existing permissions, using the {{domxref("Permissions.revoke()")}} method. This works in exactly the same way as the {{domxref("Permissions.query()")}} method, except that it causes an existing permission to be reverted back to its default state when the promise successfully resolves (which is usually `prompt`). See the following code in our demo:

```js
const revokeBtn = document.querySelector('.revoke');

// ...

revokeBtn.onclick = () => {
  revokePermission();
}

// ...

function revokePermission() {
  navigator.permissions.revoke({ name: 'geolocation' }).then((result) => {
    report(result.state);
  });
}
```

> **Note:** The `revoke()` function has been disabled by default starting in Firefox 51, since its design has been brought into question in the [Web Applications Security Working Group](https://www.w3.org/2011/webappsec/). It can be re-enabled by setting the preference `dom.permissions.revoke.enable` to `true`.

### Responding to permission state changes

You'll notice that we're listening to the {{domxref("PermissionStatus.change_event", "change")}} event in the code above, attached to the {{domxref("PermissionStatus")}} object — this allows us to respond to any changes in the permission status for the API we are interested in. At the moment we are just reporting the change in state.

## Conclusion and future work

At the moment this doesn't offer much more than what we had already. If we choose to never share our location from the permission prompt (deny permission), then we can't get back to the permission prompt without using the browser menu options:

- **Firefox**: _Tools > Page Info > Permissions > Access Your Location_. Select _Always Ask_.
- **Chrome**: _Hamburger Menu > Settings > Show advanced settings_. In the _Privacy_ section, click _Content Settings_. In the resulting dialog, find the _Location_ section and select _Ask when a site tries to…_ . Finally, click _Manage Exceptions_ and remove the permissions you granted to the sites you are interested in.

However, future additions to browser functionality should provide the `request()` method, which will allow us to programmatically request permissions, any time we like. These should hopefully be available soon.
