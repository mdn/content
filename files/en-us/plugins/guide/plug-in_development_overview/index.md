---
title: Plug-in Development Overview
slug: Plugins/Guide/Plug-in_Development_Overview
tags:
  - Gecko Plugin API Reference
  - Guide
  - NPAPI
  - Plugins
---
### Writing Plug-ins

Once you decide what you want your plug-in to do, creating it is a simple process. A basic overview of the plug-in development process is given in the following steps.

1.  Plan your plug-in: decide on the services you want the plug-in software to provide and how it will interact with the browser and the special media for which the plug-in is created.
2.  Decide the MIME type for the plug-in (see [Registering Plug-ins](#registering_plug-ins)).
3.  Set up your development environment properly. You can use a variety of environments to create a plug-in, but make sure that you have the necessary files from the plugin SDK.
4.  Create a plug-in project.
5.  Write your plug-in code and implement the appropriate Plug-in API methods for basic plug-in operation. You'll find an overview of the Plug-in API methods in this chapter, as well as separate chapters for all of the major functional areas of the Plug-in API. Also see [Making Plug-ins Scriptable](#making_plug-ins_scriptable) for more information about making plug-ins accessible from the browser.
6.  Build the plug-in for your operating system. See "[Building Plug-ins](#building_plug-ins)".
7.  Install the plug-in in the plug-in directory for your operating system. See [Installing Plug-ins](#installing_plug-ins).
8.  Test your plug-in and debug as necessary.
9.  Create an HTML page and embed the plug-in object. For information about the HTML elements to use, see [Using HTML to Display Plug-ins](/en-US/Gecko_Plugin_API_Reference/Plug-in_Basics#using_html_to_display_plug-ins). To see your plug-in in action, display the HTML page that calls it in the browser.

### Registering Plug-ins

Gecko identifies a plug-in by the MIME type it supports. When it needs to display data of a particular MIME type, the browser finds and invokes the plug-in object that supports that type. The data can come from either an `object` element in an HTML file (where the `object` or `embed` element either specifies the MIME type directly or references a file of that type), from a separate non-HTML file of that MIME type, or from the server.

The server looks for the MIME type registered by a plug-in, based on the file extension, and starts sending the file to the browser. The browser looks up the media type, and if it finds a plug-in registered to that type, loads the plug-in software.

When it starts up, the browser checks for plug-in modules for the platform and registers them. It determines which plug-ins are installed and which types they support through a combination of user preferences that are private to the browser, the contents of the plug-ins directory, or the registry on Windows.

A MIME type is made up of a major type (such as application or image) and a minor type, for example, _image/jpeg_. If you define a new MIME type for a plug-in, you must register it with IETF ([Internet Engineering Task Force](https://www.ietf.org/)). Until your new MIME type is registered, preface its name with "x-", for example, _image/x-nwim_. For more information about MIME types, see these MIME RFCs:

- [RFC-2045](https://datatracker.ietf.org/doc/html/rfc2045): "Multipurpose Internet Mail Extensions (MIME) Part One: Format of Internet Message Bodies"
- [RFC-2046](https://datatracker.ietf.org/doc/html/rfc2046): "Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types"
- [RFC-4288](https://datatracker.ietf.org/doc/html/rfc4288): "Media Type Specifications and Registration Procedures"

There are some variations to how plug-ins are handled on different platforms. The following sections describe platform-specific discovery and registration:

- [MS Windows](#ms_windows)
- [Unix](#unix)
- [Mac OS X](#mac_os_x)

##### MS Windows

On Windows, plug-ins are found according to the section [How Gecko Finds Plug-ins](/en-US/Gecko_Plugin_API_Reference/Plug-in_Basics#how_gecko_finds_plug-ins).

To determine the MIME types and file extensions that the plug-in handles, the browser normally uses the content of the registry entries for the plug-in described below in [installation using the registry](/en-US/Gecko_Plugin_API_Reference/Plug-in_Development_Overview#windows_installation_using_the_registry).

But when the plug-in is loaded from a well-known directory, a different method must be used. In this case to ensure the plug-in file will be loaded, it should have a name in the form of "np\*.dll". Also, the Windows version information for the plug-in DLL will be used to determines the MIME types, file extensions, file open template, plug-in name, and description.

For this the version stamp of the embedded resource of the plug-in DLL should contain the following set of string/value pairs:

- MIMEType: for MIME types
- FileExtents: for file extensions
- FileOpenName: for file open template
- ProductName: for plug-in name
- FileDescription: for description
- Language: for language in use

In the MIME types and file extensions strings, multiple values are separated by the "|" character, for example:

       video/quicktime|audio/aiff|image/jpeg

The version stamp will be loaded only if it has been created with the language set to "US English" and the character set to "Windows Multilingual" in your development environment.
The resource code for this language and character set combination is 040904E4.

##### Unix

On Unix, plug-ins are found according to the section [How Gecko Finds Plug-ins](/en-US/Gecko_Plugin_API_Reference/Plug-in_Basics#how_gecko_finds_plug-ins).

To determine the MIME types and file extensions that the plug-in handles, the browser loads each library and calls into the [`NP_GetMIMEDescription`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NP_GetMIMEDescription) entry point. This exported C function should return a string containing the type, extension list, and type description separated by colons. Each MIME types should be separated by semicolons. For example: `image/xbm:xbm:X Bitmap` or for 2 MIME types: image/xbm:xbm:X Bitmap;image/png:png:Portable Network Graphics. This information will then appear in the [`navigator.mimeTypes`](/en-US/docs/Web/API/NavigatorPlugins/mimeTypes) DOM object.

[`NPP_GetValue`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_GetValue) is called after the plug-in is initialized to get the scripting interface while [`NP_GetValue`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NP_GetValue) is called during initialization to retrieve the plug-in's name and description, which will appear in the [`navigator.plugins`](/en-US/docs/Web/API/NavigatorPlugins/plugins) DOM object which is used to populate _about:plugins_.

> **Warning:** Gecko caches the values returned by these functions and will only call it if the plug-in's timestamp has changed. See [bug 125469](https://bugzilla.mozilla.org/show_bug.cgi?id=125469 "[pluggerrc changes not read] Plugin caching preventing dynamic mime types through NP_GetMIMEDescritpion").

#### Mac OS X

Mac OS X plug-ins are found according to the section [How Gecko Finds Plug-ins](/en-US/Gecko_Plugin_API_Reference/Plug-in_Basics#how_gecko_finds_plug-ins). Plug-ins are identified by file type NSPL.

To determine the supported MIME types, Gecko first checks for [registry information in the plugins Info.plist](https://developer.apple.com/mac/library/documentation/InternetWeb/Conceptual/WebKit_PluginProgTopic/Concepts/AboutPlugins.html#//apple_ref/doc/uid/30001248-198944). If nothing is found there, Gecko checks for an [`NP_GetMIMEDescription`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NP_GetMIMEDescription) entry point, and will use the information returned by this function.

> **Warning:** The resource method described below is deprecated. Plugins should use the Info.plist approach, and only use the following method as a supplement to support older browsers.

If neither is present, Gecko will check the plugins resources. 'STR#' 128 should contain a list of MIME types and file extensions in alternating strings. For example:

<table class="standard-table">
  <tbody>
    <tr>
      <td>str 128</td>
      <td>MIME type</td>
    </tr>
    <tr>
      <td>String 1</td>
      <td>video/quicktime</td>
    </tr>
    <tr>
      <td>String 2</td>
      <td>mov, moov</td>
    </tr>
    <tr>
      <td>String 3</td>
      <td>audio/aiff</td>
    </tr>
    <tr>
      <td>String 4</td>
      <td>aiff</td>
    </tr>
    <tr>
      <td>String 5</td>
      <td>image/jpeg</td>
    </tr>
    <tr>
      <td>String 6</td>
      <td>jpg</td>
    </tr>
  </tbody>
</table>

Several other optional strings may contain useful information about the plug-in. Plug-ins must support 'STR#' 128 but are not required to support any of these others:

- STR#' 127 can contain a list of MIME type descriptions corresponding to the types in 'STR#' 128 . For example, this description list corresponds to the types in the previous example: String 1: "QuickTime Video", String 4: "AIFF Audio", and String 5: "JPEG Image Format."

<!---->

- STR#' 126: String 1 can contain a descriptive message about the plug-in. This message, which is in HTML format, is displayed by the browser in its "About Plug-ins" page. String 2 can contain the name of the plug-in, thus allowing the name the user sees to be different from the name of the file on disk.

### Drawing a Plug-in Instance

Before drawing itself on the page, the plug-in must provide information about itself, set the window or other target in which it draws, arrange for redrawing, and handle events.

A windowless plug-in can call the following Netscape methods to draw itself:

- [NPN_ForceRedraw](/en-US/NPN_ForceRedraw): Force a paint message for windowless plug-ins.
- [NPN_InvalidateRect](/en-US/NPN_InvalidateRect): Invalidate an area in a windowless plug-in before repainting or refreshing.
- [NPN_InvalidateRegion](/en-US/NPN_InvalidateRegion): Invalidate an area in a windowless plug-in before repainting or refreshing.

The browser calls these Plug-in methods:

- [NPP_GetValue](/en-US/NPP_GetValue): Query the plug-in for information.
- [NPP_Print](/en-US/NPP_Print): Request a platform-specific print operation for the instance.
- [NPP_SetValue](/en-US/NPP_SetValue): Set the browser information.
- [NPP_SetWindow](/en-US/NPP_SetWindow): Set the window in which a plug-in draws.
- [NPP_HandleEvent](/en-US/NPP_HandleEvent): Deliver a platform-specific event to the instance.

The plug-in can call these Netscape methods to query and set information:

- [NPN_GetValue](/en-US/NPN_GetValue): Get the browser information.
- [NPN_SetValue](/en-US/NPN_SetValue): Set plug-in the browser information.

For information about these processes, see [Drawing and Event Handling.](/en-US/Gecko_Plugin_API_Reference/Drawing_and_Event_Handling)

### Handling Memory

Plug-in developers can take advantage of the memory features provided in the Plug-in API to allocate and free memory.

- Use the [NPN_MemAlloc](/en-US/NPN_MemAlloc) method to allocate memory from the browser.
- Use the [NPN_MemFree](/en-US/NPN_MemFree) method to free memory allocated with NPN_MemAlloc.
- Use the [NPN_MemFlush](/en-US/NPN_MemFlush) method to free memory (Mac OS only) before calling memory-intensive Mac Toolbox calls.

### Sending and Receiving Streams

Streams are objects that represent URLs and the data they contain. A stream is associated with a specific instance of a plug-in, but a plug-in can have more than one stream per instance. Streams can be produced by the browser and consumed by a plug-in instance, or produced by an instance and consumed by the browser. Each stream has an associated MIME type identifying the format of the data in the stream.

Streams produced by the browser can be automatically sent to the plug-in instance or requested by the plug-in. The plug-in can select one of these transmission modes:

- Normal mode: the browser sends the stream data sequentially to the plug-in as the data becomes available.
- Random-access mode: the browser allows the plug-in to request specific ranges of bytes from anywhere in the stream. This mode requires server support.
- File mode: the browser saves the data to a local file in cache and passes that file path to the plug-in.

Streams produced by the plug-in to send to the browser are like normal-mode streams produced by the browser, but in reverse. In the browser's normal-mode streams, the browser calls the plug-in to inform it that the stream was created and to push more data. In streams produced by the plug-in, by contrast, the plug-in calls Netscape functions to create a stream, push data into it, and delete it.

### Working with URLs

The Plug-in API provides methods that plug-ins can use to retrieve data from or post data to a URL anywhere on the network, provide hyperlinks to other documents, post form data to CGI scripts using HTTP, or upload files to a remote server using FTP.

- Use [NPN_GetURL](/en-US/NPN_GetURL) to request the browser to load a URL into a particular browser window or frame for display, or to deliver the data of that URL to the plug-in instance in a new stream.
- The [NPN_GetURLNotify](/en-US/NPN_GetURLNotify) function operates like `NPN_GetURL`, except that it notifies the plug-in of the result when the operation completes.
- Use [NPN_PostURL](/en-US/NPN_PostURL) to send data to a URL from a memory buffer or file. The result from the server can also be sent to a particular browser window or frame for display, or delivered to the plug-in instance in a new stream.
- The [NPN_PostURLNotify](/en-US/NPN_PostURLNotify) function operates like `NPN_PostURL`, except that it notifies the plug-in of the result when the operation completes.

For information about using these methods, see [URLs](/en-US/Gecko_Plugin_API_Reference/URLs).

Starting in Gecko 10.0 (Firefox 10.0 / Thunderbird 10.0 / SeaMonkey 2.7), you can get the origin of the document in a secure, convenient way by calling [`NPN_GetValue()`](/en-US/NPN_GetValue) to retrieve the value of the variable `NPNVdocumentOrigin`. The returned value is the [Unicode serialization](https://www.whatwg.org/specs/web-apps/current-work/multipage/origin-0.html#unicode-serialization-of-an-origin) of the document's origin converted to NFKC-encoded (that is, normalized) UTF-8. Your plug-in must free the returned string's memory by calling [`NPN_MemFree()`](/en-US/NPN_MemFree) when you're done with it.

### Getting Version and UI Information

The Netscape group of Plug-in API methods provides some basic services to the plug-in. You can use these Netscape methods:

- To identify the browser in which your plug-in is displayed: Use the [NPN_UserAgent](/en-US/NPN_UserAgent) method to read this information.
- To determine whether plug-in and the browser versions are compatible and possibly provide alternative processing for different versions: Use the [NPN_Version](/en-US/NPN_Version) method to check for changes in major and minor version numbers.

For information about using these methods, see [Version, UI, and Status Information.](/en-US/Gecko_Plugin_API_Reference/Version_UI_and_Status_Information)

### Displaying Messages on the Status Line

Functionally, your plug-in is seamlessly integrated into the browser and operates as an addition to current browser capabilities. To make the user feel that the plug-in is part of the browser user interface, your plug-in can emulate the browser behavior by providing status line messages. Use the [NPN_Status](/en-US/NPN_Status) method to display a message on the status line.

For information about using this method, see [Version, UI, and Status Information.](/en-US/Gecko_Plugin_API_Reference/Version_UI_and_Status_Information)

### Making Plug-ins Scriptable

Scriptable plug-ins are plug-ins that have been extended to provide methods that can be called from JavaScript and the DOM when accessed through the `object` or `embed` element. Consider the following example, where a media player plug-in can be controlled with an `advanceToNextSong()` method called inside the `script` element:

    <object id="myPlugin"
       type="audio/wav"
       data="music.wav">
    </object>

    <script type="application/javascript">

      var thePlugin = document.getElementById('myPlugin');

      if (thePlugin && thePlugin.advanceToNextSong)
        thePlugin.advanceToNextSong();
      else
        alert("Plugin not installed correctly");

    </script>

In the past, LiveConnect and later XPConnect were used to make plug-ins scriptable. See [the Wikipedia article](https://en.wikipedia.org/wiki/NPAPI#Scripting_support) for historical information. Both technologies are now obsolete for the purposes of plug-in scriptability, and the cross-browser npruntime API should be used instead.

See the [Scripting plugins](/en-US/Gecko_Plugin_API_Reference/Scripting_plugins) section of this reference for the details.

### Building Plug-ins

Once you have added the special code and additional files to make your plug-in scriptable as described in the previous section, the build process is quite straightforward. In addition to the DLL that goes in the `plugins` folder, you must also place a type library and an extra header file in the appropriate places in your application directory. This section describes those extra scriptability steps in more detail.

#### Building, Platforms, and Compilers

The header files and some basic examples for NPAPI plugins are found in the [npapi-sdk project (Google Code)](https://code.google.com/p/npapi-sdk/).

### Installing Plug-ins

Plug-ins should not be installed into the Firefox directory. The plug-in installer should either package the plug-in into an extension and install it using normal extension installation practices, or install the plug-in to the system standard install locations.

#### Windows Installation Using the Registry

On Windows, plug-ins should be installed to a plug-in-specific directory such as C:\Program Files\Plugin Name\nppluginname.dll. Then the following registry values should be added to the Windows registry (the plug-in-identifier should follow [the specification](https://www-archive.mozilla.org/projects/plugins/plugin-identifier.html)):

- HKLM/Software/MozillaPlugins/plugin-identifier
  - : Description: REG_SZ "Description of the Plugin"
    Path: REG_SZ "C:\\..Path to the plugin.dll"
    ProductName: REG_SZ "The Plugin Name"
    Vendor: REG_SZ "The Plugin Author/Vendor"
    Version: REG_SZ "0.5.whatever plugin version string"
- HKLM/Software/MozillaPlugins/plugin-identifier/MimeTypes
  - : Add a sub-key for each MIME type the plugin supports, with no values

#### Install to Known Locations on Linux and Mac

On Linux and Mac, plug-ins are installed to well-known locations:

Linux: /usr/lib/mozilla/plugins or /usr/lib64/mozilla/plugins

Mac: /Library/Internet Plug-Ins or \~/Library/Internet Plug-Ins
