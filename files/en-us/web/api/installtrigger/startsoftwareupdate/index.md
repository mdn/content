---
title: InstallTrigger.startSoftwareUpdate
slug: Web/API/InstallTrigger/startSoftwareUpdate
---
## Summary

Triggers the downloading and installation of the software at the specified URL.

### Method of

[InstallTrigger](/en-US/docs/Web/API/InstallTrigger)
object

## Syntax

```js
Boolean startSoftwareUpdate ( String url);
```

### Parameters

The `startSoftwareUpdate` method has the following parameter:

- `url`
  - : A uniform resource locator specifying the location of the XPI file containing the
    software.

### Returns

True.

## Description

The `startSoftwareUpdate` method triggers a software download and install
from the specified URL. This method has been largely superseded by newer [install](/en-US/docs/Web/API/InstallTrigger/install) method, which is more flexible and allows you to install more than one
XPI. Note also that XPIs installed with this method must have their own install.js files
in which the full installation is defined.
