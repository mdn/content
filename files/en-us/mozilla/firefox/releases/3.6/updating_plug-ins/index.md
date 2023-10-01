---
title: Updating plug-ins for Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_plug-ins
page-type: guide
---

{{FirefoxSidebar}}

Several changes were made in Gecko 1.9.2 that may impact plug-in developers in particular. This article provides a list of those changes.

## Interface changes

The `nsIPluginInstance` method `destroy()` has been removed, since it wasn't doing anything anyway.

## Mac OS X specific changes

### CFM plug-ins no longer supported

Starting with Gecko 1.9.2, old-style CFM (Code Fragment Manager) binaries are no longer supported for plug-ins. CFM plug-ins have been deprecated since August, 2008.

### main() no longer a supported entry point

In August, 2008, plug-in developers were informed that `main()` would no longer be supported as an entry point. This change has taken effect in Gecko 1.9.2. Plug-ins need to be updated to use `NPN_GetEntryPoints()` instead.

## See also

- [Firefox 3.6 for developers](/en-US/docs/Mozilla/Firefox/Releases/3.6)
