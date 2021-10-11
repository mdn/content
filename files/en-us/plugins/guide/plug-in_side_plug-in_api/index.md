---
title: Plug-in Side Plug-in API
slug: Plugins/Guide/Plug-in_Side_Plug-in_API
tags:
  - Gecko Plugin API Reference
  - NPAPI
  - NeedsContent
  - Plugins
  - Reference
---
This chapter describes methods in the plug-in API that are available for the plug-in object. The names of all of these methods begin with `NPP_` to indicate that they are implemented by the plug-in and called by the browser. For an overview of how these two sides of the plug-in API interact, see the [How Plug-ins Work](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#How_Plug-ins_Work) and [Overview of Plug-in Structure](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#Overview_of_Plug-in_Structure) sections in the introduction.

### Plugin method summary

- [`NPP_Destroy`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Destroy)
  - : Deletes a specific instance of a plug-in.
- [`NPP_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_DestroyStream)
  - : Tells the plug-in that a stream is about to be closed or destroyed.
- [`NP_GetEntryPoints`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NP_GetEntryPoints)
  - : Undocumented.
- [`NP_GetMIMEDescription`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NP_GetMIMEDescription)
  - : Registers the mime types supported by the plug-in (Unix, Mac OS).
- [`NPP_GetValue`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_GetValue)
  - : Allows the browser to query the plug-in for information.
- [`NP_GetValue`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NP_GetValue)
  - : Allows the browser to query the plug-in for information.
- [`NPP_HandleEvent`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_HandleEvent)
  - : Delivers a platform-specific window event to the instance.
- [`NP_Initialize`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NP_Initialize)
  - : Provides global initialization for a plug-in.
- [`NPP_New`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_New)
  - : Creates a new instance of a plug-in.
- [`NPP_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_NewStream)
  - : Notifies a plug-in instance of a new data stream.
- [`NPP_Print`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Print)
  - : Requests a platform-specific print operation for an embedded or full-screen plug-in.
- [`NPP_SetValue`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_SetValue)
  - : Sets information about the plug-in.
- [`NPP_SetWindow`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_SetWindow)
  - : Tells the plug-in when a window is created, moved, sized, or destroyed.
- [`NP_Shutdown`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NP_Shutdown)
  - : Provides global deinitialization for a plug-in.
- [`NPP_StreamAsFile`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_StreamAsFile)
  - : Provides a local file name for the data from a stream.
- [`NPP_URLNotify`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_URLNotify)
  - : Notifies the instance of the completion of a URL request.
- [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write)
  - : Delivers data to a plug-in instance.
- [`NPP_WriteReady`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_WriteReady)
  - : Determines maximum number of bytes that the plug-in can consume.
