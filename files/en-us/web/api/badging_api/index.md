---
title: Badging API
slug: Web/API/Badging_API
page-type: web-api-overview
browser-compat: api.Navigator.setAppBadge
---

{{DefaultAPISidebar("Badging API")}}

The **Badging API** gives web developers a method of setting a badge on a document or application, to act as a notification that state has changed without displaying a more distracting notification. A common use case for this would be an application with a messaging feature displaying a badge on the app icon to show that new messages have arrived.

## Concepts and Usage

Web developers frequently update document favicons or titles in order to indicate status. The Badging API provides a more elegant way to show status, by providing a method which has meaning to the user agent and can therefore be displayed in a way that matches the rest of the UI.

### Types of badges

There are two types of badges:

- Document badges, which are typically shown in the browser tab near or on the page icon.
- App badges, which are associated with the icon of an installed web app. These may display on the app icon in the dock, shelf, or home screen depending on the device in use.

### Badge states

A badge can have one of three possible values, which are set internally:

- `nothing`
  - : Indicating that no badge is currently set. A badge can be in this state due to it being cleared by the application, or being reset by the user agent.
- `flag`
  - : Indicating that the badge is set, but has no specific data to display. A badge will be in this state if the application has set a badge, but has not passed any value to the method.
- `an integer`
  - : A value passed when setting the badge. This value will never be `0`, passing a value of `0` when setting a badge will cause the user agent to clear the badge by setting it to `nothing`.

### Setting badges

A badge is set with the methods `setAppBadge()` (for installed apps), or `setClientBadge()` (for documents). If no parameters are passed to these methods then the badge value is flag. The user agent will display its notification badge, for example, a colored circle on the icon.

These methods can also be passed a parameter `contents`, which should be a number. This will then be displayed as part of the badge. User agents may change this value in some way. For example, if you pass a very large number such as 4000, the user agent may display this as 99+ in the badge. User agents may also ignore this data and display a marker instead.

### Clearing badges

Badges are cleared with the `clearAppBadge()` and `clearClientBadge()` methods. These do not take any parameters and set the badge to the value `nothing`. Additionally, passing a value of `0` to `setAppBadge()` or `setClientBadge()` will set the badge to `nothing` and clear the badge.

## Interfaces

None.

### Extensions to the Navigator interface

- {{domxref("Navigator.setAppBadge()")}}
  - : Sets a badge on the icon associated with this app.
- {{domxref("Navigator.clearAppBadge()")}}
  - : Clears the badge on the icon associated with this app.
- {{domxref("Navigator.setClientBadge()")}}
  - : Sets a badge on the icon associated with the current document.
- {{domxref("Navigator.clearClearClientBadge()")}}
  - : Clears the badge on the icon associated with the current document.

### Extensions to the WorkerNavigator interface

- {{domxref("WorkerNavigator.setAppBadge()")}}
  - : Sets a badge on the icon associated with this app.
- {{domxref("WorkerNavigator.clearAppBadge()")}}
  - : Clears the badge on the icon associated with this app.
- {{domxref("WorkerNavigator.setClientBadge()")}}
  - : Sets a badge on the icon associated with the current document.
- {{domxref("WorkerNavigator.clearClearClientBadge()")}}
  - : Clears the badge on the icon associated with the current document.

## Examples

To set a notification badge on the current document with no value:

```js
navigator.setClientBadge();
```

To clear a notification badge on the current document:

```js
navigator.clearClientBadge();
```

To set a notification badge on the current app with a value of 12:

```js
navigator.setAppBadge(12);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Badging for app icons](https://web.dev/badging-api/)
- [Badging API Explainer](https://github.com/w3c/badging/blob/main/explainer.md)
