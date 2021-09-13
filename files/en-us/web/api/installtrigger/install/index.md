---
title: InstallTrigger.install
slug: Web/API/InstallTrigger/install
---
## Summary

Installs one or more XPI files on the local machine.

### Method of

[InstallTrigger](/en-US/docs/Web/API/InstallTrigger)
object

## Syntax

```js
int install(array XPIlist [, function callBackFunc ] )
```

### Parameters

The `install` method has the following parameters:

- XPIlist
  - : An array of files to be installed (see example below).
- `callBackFunc`
  - : An optional callback function invoked when the installation is complete (see example
    below).

{{ Fx_minversion_note(3, "In Firefox 3 the callback is no longer invoked unless the
  website performing the installation is whitelisted.") }}

### Returns

`install` returns True if the function succeeded and False if it did not,
but these values are not always reliable as a determinant of the success of the
operation. To surface detail about the status of the installation, use the optional
callback function and its status parameter, as in the example below.

## Description

In the example below, a special JavaScript object constructor is used to create an
object that can be passed to the `install()` method. The `{ }`
constructor takes a comma-delimited set of label/value pairs. For installations, these
pairs are the XPInstall confirm dialog display name and the path of the XPI,
respectively.

In the example below, a single installation object is created, but you can use this
approach to create multiple installations to pass to a single `install`.

As with the older [startSoftwareUpdate](/en-US/docs/Web/API/InstallTrigger/startSoftwareUpdate) method, XPIs installed with this method must have their own
install.js files in which the full installation is defined. In contrast to [startSoftwareUpdate](/en-US/docs/Web/API/InstallTrigger/startSoftwareUpdate), `install` allows you to do multiple installs with
the same trigger and provides a unified user experience for the multiple installs.

## Example

```js
function xpinstallCallback(url, status)
{
if (status == 0)
   msg = "XPInstall Test:   PASSED\n";
else
   msg = "XPInstall Test:   FAILED\n";
   dump(msg);
   alert(msg);
}
xpi={'XPInstall Pre-Checkin Test':'pre_checkin.xpi'};
InstallTrigger.install(xpi,xpinstallCallback);
```
