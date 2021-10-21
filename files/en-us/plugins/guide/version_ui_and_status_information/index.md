---
title: Version, UI, and Status Information
slug: Plugins/Guide/Version_UI_and_Status_Information
tags:
  - Gecko Plugin API Reference
  - Guide
  - NPAPI
  - Plugins
---
This chapter describes the functions that allow a plug-in to display a message on the status line, get agent information, and check on the current version of the Plug-in API and the browser.

## Displaying a Status Line Message

Users are accustomed to checking the UI status line at the bottom of the browser window for updates on the progress of an operation or the URL of a link on the page. You can also use the status line to notify the user of plug-in-related information. The user might appreciate seeing the percentage completed of the current operation or the URL of a button or other link object when the cursor is over it, all of which the browser shows. In fact, your plug-in interface should be consistent with the rest of the browser in this way.

To accomplish this, the plug-in calls the [`NPN_Status`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_Status) method to display your message on the status line.

    void NPN_Status(NPP instance, const char *message);

The `instance` parameter is the current plug-in instance, that is, the one that the status message belongs to. In the `message` parameter, pass the string you want to display on the status line.

The browser always displays the last status line message it receives, regardless of the message source. For this reason, your message is always displayed, but you have no control over how long it stays in the status line before another message replaces it. You should use a different method to display messages that the user needs to see, such as error messages.

## Getting Agent Information

A plug-in can check which browser is running on the user's current system. Browsers communicate with HTTP servers, which store agent software name, version, and operating system in a `user_agent` field. If you want to gather usage statistics or just find out the version of your plug-in's host browser, this information can help you.

The plug-in calls the [`NPN_UserAgent`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_UserAgent) method to retrieve the contents of the `user_agent` field.

    const char* NPN_UserAgent(NPP instance);

The `instance` parameter represents the current plug-in instance. This function returns a string that contains the `user_agent` field of the browser.

## Getting the Current Version

Your plug-in should make sure, possibly during initialization, that the version of the Plug-in API it is using is compatible with the version the browser is using. To do so, it must find the major and minor version numbers, which are determined when the plug-in and Navigator are compiled, and compare them. If the versions are not compatible, the plug-in can let the user know. The plug-in can also use the version number to find out whether a particular feature exists on the version of the browser that the plug-in is running in.

The browser and Plug-in API major version numbers represent code release numbers, and their minor version numbers represent point release numbers. For example, Plug-in API version 6.03 has a major version number of 6 and a point release number of 3.

Differing version numbers may mean that the current Plug-in API and the browser versions are incompatible. Changes to the minor version numbers indicate a smaller difference than changes to the major version. Changes to the major version numbers probably indicate incompatibility.

The plug-in calls the [`NPN_Version`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_Version) method to check for changes in major and minor Plug-in API version numbers. It gets the values from the plug-in rather than from the browser.

    void NPN_Version(int *plugin_major,
       int *plugin_minor,
       int *netscape_major,
       int *netscape_minor);

This function returns the plug-in version number in `plugin_major`, the plug-in point release number in `plugin_minor`, the browser version number in `netscape_major`, and the browser point release number in `netscape_minor`.

This code declares variables to hold the version numbers and calls [`NPN_Version`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_Version) to return the major and minor version numbers for the browser and the Plug-in API.

    int plugin_major, plugin_minor, netscape_major,
    netscape_minor; // declare variables to hold version numbers

    void NPN_Version(
       &plugin_major, &plugin_minor, &netscape_major,
       &netscape_minor
    ); // find version numbers

## Finding Out if a Feature Exists

A plug-in can figure out whether it is running in a version of the browser that supports a particular feature by using version or `NPVERS` constants (see [Version Feature Constants](/en-US/docs/Gecko_Plugin_API_Reference/Constants#Version_Feature_Constants)). Each `NPVERS` constant represents a feature. The plug-in can compare the `NPVERS` constant to the version number. If the version supports the feature, the plug-in can operate according to plan. If not, the plug-in cannot use some functionality. If an essential feature is unavailable, the developer must arrange for alternative behavior, shut down the plug-in, or give the user a chance to decide what to do.

### Detecting Windowless Support on MS Windows and Mac OS X

In this example, the `has_windowless` method finds out whether the current version of the API supports windowless plug-ins. This method for detecting support is only useful on MS Windows and Mac OS X.

It starts by using [`NPN_Version`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_Version) to get the version numbers. It then uses the `netscape_minor` version number to find out if the windowless feature, represented by the `NPVERS_HAS_WINDOWLESS` constant, is supported. If the method returns true, a windowless plug-in can confidently proceed. If false is returned, windowless plug-ins will not work, and the developer must provide alternatives.

    Bool has_windowless()
    {
       int plugin_major, plugin_minor;
       int netscape_major, netscape_minor;

       /* Find the version numbers. */
       NPN_Version(&plugin_major, &plugin_minor,
          &netscape_major, &netscape_minor);

       /* Use the netscape_minor version number: */
       /* Does this version support the windowless feature? */
       if (netscape_minor < NPVERS_HAS_WINDOWLESS) {
          /* Plug-in is running in a version of the Navigator */
          /* that does not support windowless plug-ins. */
          return FALSE;
       }
       else
          /* Plug-in is running in a Navigator version */
          /* that has windowless support */
          return TRUE;
    }

### Detecting Windowless Support on other platforms

Browser implementations on other platforms did not have windowless plug-in support at the time it was added to MS Windows and Mac OS X, so a different method must be used to detect whether the browser provides support.

    Bool has_windowless()
    {
       NPBool supportsWindowless = FALSE;

       NPError ret = NPN_GetValue(instance, NPNVSupportsWindowless, &supportsWindowless);

       return ret == NPERR_NO_ERROR && supportsWindowless;
    }

## Reloading a Plug-in

When the browser starts up, it loads all the plug-ins it finds in the Plugins directory for the platform. If you call [`NPN_ReloadPlugins`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_ReloadPlugins), the browser reloads all plug-ins in the Plugins directory without restarting. This causes the browser to install a new plug-in and load it, or remove a plug-in, without having to restart. Consider using this function as part of the plug-in's SmartUpdate process.

```plain
void NPN_ReloadPlugins(NPBool reloadPages);
```

The `reloadPages` parameter is a boolean that indicates whether to reload the page (`true`) or not (`false`).
