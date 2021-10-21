---
title: Browser Side Plug-in API
slug: Plugins/Guide/Browser_Side_Plug-in_API
tags:
  - API
  - Gecko Plugin API Reference
  - NPAPI
  - NeedsContent
  - Plugins
  - Reference
---
This chapter describes methods in the plug-in API that are available from the browser. The names of all of these methods begin with `NPN_` to indicate that they are implemented by the browser and called by the plug-in. For an overview of how these two sides of the plug-in API interact, see the [How Plug-ins Work](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#How_Plug-ins_Work) and [Overview of Plug-in Structure](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#Overview_of_Plug-in_Structure) sections in the introduction.

> **Warning:** You must only call these from the main thread; calling them from other threads is not supported and may have unpredictable results.

### Netscape Plug-in Method Summary

- [`NPN_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_DestroyStream)
  - : Closes and deletes a stream.
- [`NPN_ForceRedraw`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_ForceRedraw)
  - : Forces a paint message for a windowless plug-in.
- [`NPN_GetAuthenticationInfo`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_GetAuthenticationInfo)
  - : This function is called by plug-ins to get HTTP authentication information from the browser.
- [`NPN_GetURL`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_GetURL)
  - : Asks the browser to create a stream for the specified URL.
- [`NPN_GetURLNotify`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_GetURLNotify)
  - : Requests creation of a new stream with the contents of the specified URL; gets notification of the result.
- [`NPN_GetValue`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_GetValue)
  - : Allows the plug-in to query the browser for information.
- [`NPN_GetValueForURL`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_GetValueForURL)
  - : Provides information to a plug-in which is associated with a given URL, for example the cookies or preferred proxy.
- [`NPN_InvalidateRect`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_InvalidateRect)
  - : Invalidates specified drawing area prior to repainting or refreshing a windowless plug-in.
- [`NPN_InvalidateRegion`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_InvalidateRegion)
  - : Invalidates specified drawing region prior to repainting or refreshing a windowless plug-in.
- [`NPN_MemAlloc`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_MemAlloc)
  - : Allocates memory from the browser's memory space.
- [`NPN_MemFlush`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_MemFlush)
  - : Requests that the browser free a specified amount of memory.
- [`NPN_MemFree`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_MemFree)
  - : Deallocates a block of allocated memory.
- [`NPN_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_NewStream)
  - : Requests the creation of a new data stream produced by the plug-in and consumed by the browser.
- [`NPN_PluginThreadAsyncCall`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_PluginThreadAsyncCall)
  - : Thread-safe way to request that the browser calls a plug-in function on the browser or plug-in thread (the thread on which the plug-in was initiated).
- [`NPN_PopPopupsEnabledState`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_PopPopupsEnabledState)
  - : Pops the popups-enabled state.
- [`NPN_PostURL`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_PostURL)
  - : Posts data to a URL.
- [`NPN_PostURLNotify`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_PostURLNotify)
  - : Posts data to a URL, and receives notification of the result.
- [`NPN_PushPopupsEnabledState`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_PushPopupsEnabledState)
  - : Pushes the popups-enabled state.
- [`NPN_ReloadPlugins`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_ReloadPlugins)
  - : Reloads all plug-ins in the Plugins directory.
- [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead)
  - : Requests a range of bytes for a seekable stream.
- [`NPN_SetValue`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_SetValue)
  - : Sets windowless plug-in as transparent or opaque.
- [`NPN_SetValueForURL`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_SetValueForURL)
  - : Allows a plug-in to change the stored information associated with a URL, in particular its cookies.
- [`NPN_Status`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_Status)
  - : Displays a message on the status line of the browser window.
- [`NPN_UserAgent`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_UserAgent)
  - : Returns the browser's user agent field.
- [`NPN_Version`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_Version)
  - : Returns version information for the Plug-in API.
- [`NPN_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_Write)
  - : Pushes data into a stream produced by the plug-in and consumed by the browser.
