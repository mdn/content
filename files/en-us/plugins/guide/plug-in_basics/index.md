---
title: Plug-in Basics
slug: Plugins/Guide/Plug-in_Basics
tags:
  - Gecko Plugin API Reference
  - Guide
  - NPAPI
  - Plugins
---
### How Plug-ins are used

Plug-ins offer a rich variety of features that can increase the flexibility of [Gecko](/en-US/Gecko)-based browsers. Plug-ins like these are now available:

- multimedia viewers such as Adobe Flash and Adobe Acrobat
- utilities that provide object embedding and compression/decompression services
- applications that range from personal information managers to games

The range of possibilities for using plug-in technology seems boundless, as shown by the growing numbers of independent software vendors who are creating new and innovative plug-ins.

With the Plug-in API, you can create dynamically loaded plug-ins that can:

- register one or more MIME types
- draw into a part of a browser window
- receive keyboard and mouse events
- obtain data from the network using URLs
- post data to URLs
- add hyperlinks or hotspots that link to new URLs
- draw into sections on an [HTML](/en-US/docs/Web/HTML) page
- communicate with [JavaScript](/en-US/docs/Web/JavaScript)/[DOM](/en-US/docs/Web/API/Document_Object_Model) from native code

You can see which plug-ins are installed on your system and have been properly associated with the browser by consulting the Installed Plug-ins page. Go to the Help menu, and click Help and then About Plug-ins. Type "about:plugins" in the Location bar. The Installed Plug-ins page lists each installed plug-in along with its MIME type or types, description, file extensions, and the current state (enabled or disabled) of the plug-in for each MIME type assigned to it. Notice in view-source that this information is gathered from the JavaScript.

Because plug-ins are platform-specific, you must port them to every operating system and processor platform upon which you want to deploy your plug-in.

#### Plug-ins and helper applications

Before plug-ins, there were helper applications. A helper application is a separate, free-standing application that can be started from the browser. Like a plug-in, the browser starts a helper application when the browser encounters a MIME type that is mapped to it. Unlike a plug-in, a helper application runs separately from the browser in its own application space and does not interact with the browser or the web.

When the browser encounters a MIME type, it always searches for a registered plug-in first. If there are no matches for the MIME type, it looks for a helper application.

Plug-ins and helper applications fill different application needs. For more information about helper applications, refer to the Netscape online help.

### How plug-ins work

The life cycle of a plug-in, unlike that of an application, is completely controlled by the web page that calls it. This section gives you an overview of the way that plug-ins operate in the browser.

When Gecko starts, it looks for plugin modules in particular places on the system. For more information about where Gecko looks for plugin modules on different systems, see [How Gecko Finds Plug-ins](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#How_Gecko_Finds_Plug-ins).

When the user opens a page that contains embedded data of a media type that invokes a plug-in, the browser responds with the following sequence of actions:

- check for a plug-in with a matching MIME type
- load the plug-in code into memory
- initialize the plug-in
- create a new instance of the plug-in

Gecko can load multiple instances of the same plug-in on a single page, or in several open windows at the same time. If you are browsing a page that has several embedded RealAudio clips, for example, the browser will create as many instances of the RealPlayer plug-in as are needed (though of course playing several RealAudio files at the same time would seldom be a good idea). When the user leaves the page or closes the window, the plug-in instance is deleted. When the last instance of a plug-in is deleted, the plug-in code is unloaded from memory. A plug-in consumes no resources other than disk space when it is not loaded. The next section, [Understanding the Runtime Model](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#Understanding_the_Runtime_Model), describes these stages in more detail.

### Understanding the runtime model

Plug-ins are dynamic code modules that are associated with one or more MIME types. When the browser starts, it enumerates the available plug-ins (this step varies according to platform), reads resources from each plug-in file to determine the MIME types for that plug-in, and registers each plug-in library for its MIME types.

The following stages outline the life of a plug-in from loading to deletion:

- When Gecko encounters data of a MIME type registered for a plug-in (either embedded in an HTML page or in a separate file), it dynamically loads the plug-in code into memory, if it hasn't been loaded already, and it creates a new instance of the plug-in.

Gecko calls the plug-in API function [NP_Initialize](/en-US/NP_Initialize) when the plug-in code is first loaded. By convention, all of the plug-in specific functions have the prefix "NPP", and all of the browser-specific functions have the prefix "NPN".

> **Note:** `NP_Initialize` and `NP_Shutdown` are not technically a part of the function table that the plug-in hands to the browser. The browser calls them when the plug-in software is loaded and unloaded. These functions are exported from the plug-in DLL and accessed with a system table lookup, which means that they are not related to any particular plug-in instance. Again, see [Initialization and Destruction](/en-US/docs/Gecko_Plugin_API_Reference/Initialization_and_Destruction) for more information about initializing and destructing.

- The browser calls the plug-in API function [NPP_New](/en-US/NPP_New) when the instance is created. Multiple instances of the same plug-in can exist (a) if there are multiple embedded objects on a single page, or (b) if several browser windows are open and each displays the same data type.
- A plug-in instance is deleted when a user leaves the instance's page or closes its window; Gecko calls the function [NPP_Destroy](/en-US/NPP_Destroy) to inform the plug-in that the instance is being deleted.
- When the last instance of a plug-in is deleted, the plug-in code is unloaded from memory. Gecko calls the function [NP_Shutdown](/en-US/NP_Shutdown). Plug-ins consume no resources (other than disk space) when not loaded.

> **Note:** Plug-in API calls and callbacks use the main Navigator thread. In general, if you want a plug-in to generate additional threads to handle processing at any stage in its lifespan, you should be careful to isolate these from Plug-in API calls.

See [Initialization and Destruction](/en-US/docs/Gecko_Plugin_API_Reference/Initialization_and_Destruction) for more information about using these methods.

### Plug-in detection

Gecko looks for plug-ins in various places and in a particular order. The next section, [How Gecko Finds Plug-ins](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#How_Gecko_Finds_Plug-ins), describes these rules, and the following section, [Checking Plug-ins by MIME Type](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#Checking_Plug-ins_by_MIME_Type), describes how you can use JavaScript to locate plug-ins yourself and establish which ones are to be registered for which MIME types.

#### How Gecko finds plug-ins

When a Gecko-based browser starts up, it checks certain directories for plug-ins, in this order:

##### Windows

- Directory pointed to by `MOZ_PLUGIN_PATH` environment variable.
- `%APPDATA%\Mozilla\plugins`, where `%APPDATA%` denotes per-user `Application Data` directory.
- [Plug-ins within toolkit bundles](/en-US/Shipping_a_plugin_as_a_Toolkit_bundle).
- `Profile directory\plugins`, where `Profile directory` is a user profile directory.
- Directories pointed to by `HKEY_CURRENT_USER\Software\MozillaPlugins\*\Path` registry value, where `*` can be replaced by any name.
- Directories pointed to by `HKEY_LOCAL_MACHINE\Software\MozillaPlugins\*\Path` registry value, where `*` can be replaced by any name.

##### Mac OS X

- `~/Library/Internet Plug-Ins`.
- `/Library/Internet Plug-Ins`.
- `/System/Library/Frameworks/JavaVM.framework/Versions/Current/Resources`.
- [Plug-ins within toolkit bundles](/en-US/Shipping_a_plugin_as_a_Toolkit_bundle).
- `Profile directory/plugins`, where `Profile directory` is a user profile directory.

##### Linux

- Directory pointed to by `MOZ_PLUGIN_PATH` environment variable. For example:

```bash
#!/bin/bash

export MOZ_PLUGIN_PATH=/usr/lib64/mozilla/plugins
exec /usr/lib64/firefox/firefox
```

- `Profile directory/plugins`, where _`Profile directory`_ is the directory of the current user profile.
- `~/.mozilla/plugins`.
- `/usr/lib/mozilla/plugins` (the 64-bit Firefox checks `/usr/lib64/mozilla/plugins` as well).
- `/usr/lib64/firefox/plugins` (for 64-bit Firefox)

**Note:** Firefox Nightly checks a subset of these locations. Also some Linux distributions provide a system browser configured differently.

> _Advanced:_ You can determine which directories a Gecko program checks with the Linux `strace` command, for example:
>
> ```bash
> strace -e open /usr/bin/firefox 2>&1 | grep plugin
> ```
>
> But with version firefox-41.0.2 we can not check. I found other way how check which paths support Firefox :
>
> ```bash
> $ strace -y /usr/bin/firefox 2>&1 | grep acces | grep -v search | grep plugins
> access("/home/user_name/.mozilla/firefox/dqh2nb5k.default-1441864569209/plugins", F_OK) = -1 ENOENT (No such file or directory)
> access("/home/user_name/.mozilla/plugins", F_OK) = -1 ENOENT (No such file or directory)
> access("/usr/lib64/firefox/browser/plugins", F_OK) = -1 ENOENT (No such file or directory)
> access("/usr/lib/mozilla/plugins", F_OK) = 0
> ```
>
> This output I have after close Firefox. I checked also this command with above script (with environment variable) on my system and also working.
>
> However, primary working path with binary file was `/usr/lib/mozilla/plugins`
> for 32-bit and 64-bit Linux distributions and looks still working.
> Firefox and OpenSuse probably use "`MOZ_PLUGIN_PATH` environment variable" in script to run Firefox, so in this way `/usr/lib64/mozilla/plugins also should be supported.`
>
> About distributions:
> Example Debian 64bit probably use:
> /lib/x86_64-linux-gnu/ --> for 64 libs
> /lib/i386-linux-gnu/ --> for 32 libs
> if exist
> /lib32/ --> this is symlinked (or bind mounted) desired proper directory
> /lib64/ --> this is symlinked (or bind mounted) desired proper directory
> more in https\://wiki.debian.org/Multiarch/TheCaseForMultiarch
> if something wrong, please edit.
>
> Example Fedora 64bit use:
> /lib/ --> for 32 bit libs
> /lib64/ --> for 64 bit libs

- [Plug-ins within toolkit bundles](/en-US/Shipping_a_plugin_as_a_Toolkit_bundle).

To find out which plug-ins are currently installed visit about:plugins. Gecko displays a page listing all installed plug-ins and the MIME types they handle, as well as optional descriptive information supplied by the plug-in.

On Windows, installed plug-ins are automatically configured to handle the MIME types that they support. If multiple plug-ins handle the same MIME type, the first plug-in registered handles the MIME type. For information about the way MIME types are assigned, see [Registering Plug-ins](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Development_Overview#Registering_Plug-ins).

#### Checking plug-ins by MIME type

The `enabledPlugin` property in JavaScript can be used to determine which plug-in is configured for a specific MIME type. Though plug-ins may support multiple MIME types and each MIME type may be supported by multiple plug-ins, only one plug-in can be configured for a MIME type. The `enabledPlugin` property is a reference to a Plugin object that represents the plug-in that is configured for the specified MIME type.

You might need to know which plug-in is configured for a MIME type, for example, to dynamically create an `object` element on the page if the user has a plug-in configured for the MIME type.

The following example uses JavaScript to determine whether the Adobe Flash plug-in is installed. If it is, a movie is displayed.

```js
// Can we display Adobe Flash movies?
var mimetype = navigator.mimeTypes["application/x-shockwave-flash"];

if (mimetype) {
   // Yes, so can we display with a plug-in?
   var plugin = mimetype.enabledPlugin;
   if (plugin) {
      // Yes, so show the data in-line
      document.writeln("Here\'s a movie: <object data='mymovie.swf' height='100' width='100'></object>");
   } else {
      // No, so provide a link to the data
      document.writeln("<a href='mymovie.swf'>Click here</a> to see a movie.");
   }
} else {
   // No, so tell them so
   document.writeln("Sorry, can't show you this movie.");
}
```

### Overview of plug-in structure

This section is an overview of basic information you will need as you develop plug-ins.

- [Understanding the Plug-in API](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#Understanding_the_Plug-in_API)
- [Plug-ins and Platform Independence](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#Plug-ins_and_Platform_Independence)

#### Understanding the plug-in API

A plug-in is a native code library whose source conforms to standard C syntax. The Plug-in Application Programming Interface (API) is made up of two groups of functions and a set of shared data structures.

- Plug-in methods are functions that you implement in the plug-in; Gecko calls these functions. The names of all the plug-in functions in the API begin with `NPP_`, for example, `NPP_New`. There are also a couple of functions (i.e., `NP_Initialize` and `NP_Shutdown`) that are direct library entry points and not related to any particular plug-in instance.
- Browser methods are functions implemented by Gecko; the plug-in calls these functions. The names of all the browser functions in the API begin with `NPN_`, for example, `NPN_Write`.
- Data structures are plug-in-specific types defined for use in the Plug-in API. The names of structures begin with `NP`, for example, `NPWindow`.

All plug-in names in the API start with `NP`. In general, the operation of all API functions is the same on all platforms. Where this varies, the reference entry for the function in the reference section describes the difference.

#### Plug-ins and platform independence

A plug-in is a dynamic code module that is native to the specific platform on which the browser is running. It is a code library, rather than an application or an applet, and runs only from the browser. Although plug-ins are platform-specific, the Plug-in API is designed to provide the maximum degree of flexibility and to be functionally consistent across all platforms. This guide notes platform-specific differences in coding for the MS Windows, Mac OS X, and Unix platforms.

You can use the Plug-in API to write plug-ins that are media type driven and provide high performance by taking advantage of native code. Plug-ins give you an opportunity to seamlessly integrate platform-dependent code and enhance the Gecko core functionality by providing support for new data types.

The plug-in file type depends on the platform:

- MS Windows: .DLL (Dynamic Link Library) files
- Unix: .SO or .DSO (Shared Objects) files
- Mac OS X: PPC/x86/Universal loadable Mach-O bundle

### Windowed and windowless plug-ins

You can write plug-ins that are drawn in their own native windows or frames on a web page. Alternatively, you can write plug-ins that do not require a window to draw into. Using windowless plug-ins extends the possibilities for web page design and functionality. Note, however, that plug-ins are windowed by default, because windowed plug-ins are in general easier to develop and more stable to use.

- A windowed plug-in is drawn into its own native window on a web page. Windowed plug-ins are opaque and always come to the top HTML section of a web page.
- A windowless plug-in need not be drawn in a native window; it is drawn in its own drawing target. Windowless plug-ins can be opaque or transparent, and can be invoked in HTML sections.

Whether a plug-in is windowed or windowless depends on how you define it.

The way plug-ins are displayed on the web page is determined by the HTML element that invokes them. This is up to the content developer or web page author. Depending on the element and its attributes, a plug-in can be visible or hidden, or can appear as part of a page or as a full page in its own window. A web page can display a windowed or windowless plug-in in any HTML display mode; however, the plug-in must be visible for its window type to be meaningful. For information about the way HTML determines plug-in display mode, see "Using HTML to Display Plug-ins."

### Using HTML to Display Plug-Ins

When a user browses to a web page that invokes a plug-in, how the plug-in appears (or does not appear) depends on two factors:

- The way the developer writes the plug-in determines whether it is displayed in its own window or is windowless.
- The way the content provider uses HTML elements to invoke the plug-in determines its display mode: whether it is embedded in a page, is part of a section, appears on its own separate page, or is hidden.

This section discusses using HTML elements and display modes. For information about windowed and windowless operation, see [Windowed and Windowless Plug-ins](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#Windowed_and_Windowless_Plug-ins).

For a description of each plug-in display mode, and which HTML element to use to achieve it, go on to [Plug-in Display Modes](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#Plug-in_Display_Modes). For details about the HTML elements and their attributes, go on to:

- [Using the object Element for Plug-in Display](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#Using_the_object_Element_for_Plug-in_Display)
- [Using the embed Element for Plug-in Display](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#Using_the_embed_Element_for_Plug-in_Display)

#### Plug-in display modes

Whether you are writing an HTML page to display a plug-in or developing a plug-in for an HTML author to include in a page, you need to understand how the display mode affects the way plug-ins appear.

A plug-in, whether it is windowed or windowless, can have one of these display modes:

- embedded in a web page and visible
- embedded in a web page and hidden
- displayed as a full page in its own window

An **embedded plug-in** is part of a larger HTML document and is loaded at the time the document is displayed. The plug-in is visible as a rectangular subpart of the page (unless it is hidden). Embedded plug-ins are commonly used for multimedia images relating to text in the page, such as the Adobe Flash plug-in. When Gecko encounters the `object` or `embed` element in a document, it attempts to find and display the file represented by the `data` and `src` attributes, respectively. The `height` and `width` attributes of the `object` element determine the size of the embedded plug-in in the HTML page. For example, this `object` element calls a plug-in that displays video:

```html
<object data="newave.avi" type="video/avi"
        width="320" height="200"
        autostart="true" loop="true">
</object>
```

A **hidden plug-in** is a type of embedded plug-in that is not drawn on the screen when it is invoked. It is created by using the `hidden` attribute of the `embed` element. Here's an example:

```html
<embed src="audiplay.aiff" type="audio/x-aiff" hidden="true">
```

> **Note:** Whether a plug-in is windowed or windowless is not meaningful if the plug-in is invoked with the `hidden` attribute.

You can also create hidden plug-ins using the `object` element. Though the `object` element has no `hidden` attribute, you can create [CSS](/en-US/docs/Web/CSS) rules to override the sizing attributes of the `object` element

```css
object {
  visibility: visible;
}

object.hiddenObject {
  visibility:   hidden !important;
  width:        0px    !important;
  height:       0px    !important;
  margin:       0px    !important;
  padding:      0px    !important;
  border-style: none   !important;
  border-width: 0px    !important;
  max-width:    0px    !important;
  max-height:   0px    !important;
}
```

In this case, the `object` element that picks up these special style definitions would have a class of hidden. Using the `class` attribute and the CSS block above, you can simulate the behavior of the hidden plug-in in the `embed` element:

```html
<object data="audiplay.aiff" type="audio/x-aiff" class="hiddenObject"></object>
```

A **full-page plug-in** is a visible plug-in that is not part of an HTML page. The server looks for the media (MIME) type registered by a plug-in, based on the file extension, and starts sending the file to the browser. Gecko looks up the MIME type and loads the appropriate plug-in if it finds a plug-in registered to that type. This type of plug-in completely fills the web page. Full-page plug-ins are commonly used for document viewers, such as Adobe Acrobat.

> **Note:** The browser does not display scroll bars automatically for a full-page plug-in. The plug-in must draw its own scroll bars if it requires them.

The browser user interface remains relatively constant regardless of which type of plug-in is displayed. The part of the application window that does not display plug-in data does not change. The basic operations of the browser, such as navigation, history, and opening files, apply to all pages, regardless of the plug-ins in use.

#### Using the `object` element for plug-in display

The [`<object>`](/en-US/docs/Web/HTML/Element/object "The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.") element is part of the HTML specification for generic inclusion of special media in a web page. It embeds a variety of object types in an HTML page, including plug-ins, Java components, ActiveX controls, applets, and images. `object` element attributes determine the type of object to embed, the type and location of the object's implementation (code), and the type and implementation of the object's data.

Plug-ins were originally designed to work with the `embed` element rather than the `object` element (see [Using the embed Element for Plug-in Display](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#Using_the_embed_Element_for_Plug-in_Display)), but the `object` element itself provides some flexibility here. In particular, the `object` element allows you to invoke another object if the browser cannot support the object invoked by the element. The `embed` element, which is also used for plug-ins, does not.

The `object` element is also a part of the [HTML W3C standard](https://www.w3.org/TR/html401/struct/objects.html#h-13.3).

Also, unlike the [`<applet>`](/en-US/docs/Web/HTML/Element/applet "The obsolete HTML Applet Element (<applet>) embeds a Java applet into the document; this element has been deprecated in favor of <object>.") element, `object` can contain other HTML elements including other `object` elements, nested between its opening and closing tags. So, for example, though Gecko does not support the `classid` attribute of the `object` element - which was used for Java classes and ActiveX plug-ins embedded in pages - `object` elements can be nested to support different plug-in implementations.

See the Mozilla ActiveX project page in the [Plug-in References](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#Plug-in_References) section below for more information about embedding ActiveX controls in plug-ins or embedding plug-ins in ActiveX applications.

The following examples demonstrate this use of nested `object` elements with markup more congenial to Gecko included as children of the parent `object` element.

Example 1: Nesting `object` Elements

```html
<html>
<head>
<title>Example 1: Nesting object Elements</title>
<style type="text/css">
  .myPlugin {
     width:  470px;
     height: 231px;
  }
</style>
</head>
<body><p>
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,30,0"
        class="myPlugin">

  <param name="movie" value="foo.swf"/>
  <param name="quality" value="high"/>
  <param name="salign" value="tl"/>
  <param name="menu" value="0"/>

       <object data="foo_movie.swf"
               type="application/x-shockwave-flash"
               class="myPlugin"/>

         <param name="quality" value="high"/>
         <param name="salign" value="tl"/>
         <param name="menu" value="0"/>

          <object type="*" class="myPlugin">
            <param name="pluginspage"
                   value="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"/>
          </object>

       </object>
</object>
</p></body>
</html>
```

The outermost `object` element defines the `classid`; the first nested `object` uses the `type` value `application/x-shockwave-flash` to load the Adobe Flash plug-in, and the innermost `object` exposes a download page for users that do not already have the necessary plug-in. This nesting is quite common in the use of `object` elements, and lets you avoid code forking for different browsers.

#### Nesting rules for HTML elements

The rules for descending into nested `object` and `embed` elements are as follows:

- The browser looks at the MIME type of the top element. If it knows how to deal with that MIME type (i.e., by loading a plug-in that's been registered for it), then it does so.
- If the browser cannot handle the MIME type, it looks in the element for a pointer to a plug-in that can be used to handle that MIME type. The browser downloads the requested plug-in.
- If the MIME type is unknown and there is no reference to a plug-in that can be used, the browser descends into the child element, where these rules for handling MIME types are repeated.

The rest of this section is a brief introduction to this HTML element. For more information on the `object` element and other elements used for plug-in display, see [W3C HTML 4.01 specification](https://www.w3.org/TR/html401/struct/objects.html).

To embed a variety of object types in an HTML page, use the `object` element.

```html
<object
  classid="classFile"
  data="dataLocation"
  codebase="classFileDir"
  type="MIMEtype"
  align="alignment"
  height="pixHeight"
  width="pixWidth"
  id="name"
 >

...

</object>
```

The first set of `object` element attributes are URLs.

- `classid` is the `URL` of the specific object implementation. This attribute is similar to the `code` attribute of the `applet` element. Though Gecko does not support this `object` attribute, you can nest `object` elements with different attributes to use the `object` element for embedding plug-ins on any browser platform (see the example above).
- `data` represents the `URL` of the object's data; this is equivalent to the `src` attribute of `embed`.
- `codebase` represents the `URL` of the plug-in; this is the same as the `codebase` attribute of the `applet` element. For plug-ins, `codebase` is the same as `pluginspace`.
- `type` represents the MIME type of the plug-in; this is the same as the `type` attribute of `embed`.
- `height`, `width`, `align` are basic `img/embed/applet` attributes supported by `object`. `height` and `width` are required for `object` elements that resolve to `embed` elements.
- Use the `id` attribute, which specifies the name of the plug-in, if the plug-in is communicating with JavaScript. This is equivalent to the `name` attribute of `applet` and `embed`. It must be unique.

#### Using the appropriate attributes

It's up to you to provide enough attributes and to make sure that they do not conflict; for example, the values of `width` and `height` may be wrong for the plug-in. Otherwise, the plug-in cannot be embedded.

Gecko interprets the attributes as follows: When the browser encounters an `object` element, it goes through the element attributes, ignoring or parsing as appropriate. It analyzes the attributes to determine the object type, then determines whether the browser can handle the type.

- If the browser can handle the type-that is, if a plug-in exists for that type-then all elements and attributes up to the closing `</object>` element, except `param` elements and other `object` elements, are filtered.
- If the browser cannot handle the type, or cannot determine the type, it cannot embed the object. Subsequent HTML is parsed as normal.

#### Using the `embed` element for plug-in display

A plug-in runs in an HTML page in a browser window. The HTML author uses the HTML [`<embed>`](/en-US/docs/Web/HTML/Element/embed "The HTML <embed> element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.") element to invoke the plug-in and control its display. Though the `object` element is the preferred way to invoke plug-ins (see [Using the object Element for Plug-in Display](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#Using_the_object_Element_for_Plug-in_Display)), the `embed` element can be used for backward compatibility with Netscape 4.x browsers, and in cases where you specifically want to prompt the user to install a plug-in, because the default plug-in is only automatically invoked when you use the `embed` element.

Gecko loads an embedded plug-in when the user displays an HTML page that contains an embedded object whose MIME type is registered by a plug-in. Plug-ins are embedded in much the same way as GIF or JPEG images are, except that a plug-in can be live and respond to user events, such as mouse clicks.

The `embed` element has the following syntax and attributes:

```html
<embed
  src="location"
  type="mimetype"
  pluginspage="instrUrl"
  pluginurl="pluginUrl"
  align="left"|"right"|"top"|"bottom"
  border="borderWidth"
  frameborder="no"
  height="height"
  width="width"
  units="units"
  hidden="true|false"
  hspace="horizMargin"
  vspace="vertMargin"
  name="pluginName"
  palette="foreground"|"background"
 >

...

</embed>
```

You must include either the `src` attribute or the `type` attribute in an `embed` element. If you do not, then there is no way of determining the media type, and so no plug-in loads.

The `src` attribute is the `URL` of the file to run. The `type` attribute specifies the MIME type of the plug-in needed to run the file. Navigator uses either the value of the `type` attribute or the suffix of the filename given as the source to determine which plug-in to use.

Use `type` to specify the media type or MIME type necessary to display the plug-in. It is good practice to include the MIME type in all the plug-in HTML elements. You can use `type` for a plug-in that requires no data, for example, a plug-in that draws an analog clock or fetches all of its data dynamically. For a visible plug-in, you must include `width` and `height` if you use `type`; no default value is used.

The `pluginurl` attribute is the URL of the plug-in or of the XPI in which the plug-in is stored (see [Installing Plug-ins](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Development_Overview#Installing_Plug-ins) for more information on the XPI file format).

The `embed` element has a number of attributes that determine the appearance and size of the plug-in instance, including these:

- The `border` and `frameborder` attributes specify the size of a border for the plug-in or draw a borderless plug-in.
- `height`, `width`, and `units` determine the size of the plug-in in the HTML page. If the plug-in is not hidden, the `height` and `width` attributes are required.
- `hspace` and `vspace` create a margin of the specified width, in pixels, around the plug-in.
- `align` specifies the alignment for the plug-in relative to the web page.

Use the `hidden` attribute if you do not want the plug-in to be visible. In this case, you do not need the attributes that describe plug-in appearance. In fact, `hidden` overrides those attributes if they are present.

Use the `name` attribute, which specifies the name of the plug-in or plug-in instance, if the plug-in is communicating with JavaScript.

For example, this `embed` element loads a picture with the imaginary data type dgs:

```html
<embed src="mypic.dgs" width="320" height="200" border="25" align="right">
```

Gecko interprets the attributes as follows:

- `src`: Load the data file and determine the MIME type of the data.
- `width` and `height`: Set the area of the page handled by the plug-in to 320 by 200 pixels. In general, use CSS to control the size and location of elements within an HTML page.
- `border`: Draw a border 25 pixels wide around the plug-in.
- `align`: Align the plug-in at the right side of the web page.

The following example shows an `embed` element nested within an `object` element, which is necessary for browsers that do not support the `embed` element.

Example 2: `embed` within `object`

```html
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
   codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,30,0"
   width="749" height="68">

 <param name="movie" value="foo.swf">
 <param name="quality" value="high">
 <param name="bgcolor" value="#EEEEEE">
 <param name="salign" value="tl">
 <param name="menu" value="0">

 <embed src="foo.swf"
   quality="high" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"
   type="application/x-shockwave-flash"
   width="749"
   height="68"
   bgcolor="#EEEEEE"
   salign="tl"
   menu="0">

 </embed>

</object>
```

#### Using custom `embed` attributes

In addition to these standard attributes, you can create private, plug-in-specific attributes and use them in the `embed` attribute to pass extra information between the HTML page and the plug-in code. The browser ignores these nonstandard attributes when parsing the HTML, but it passes all attributes to the plug-in, allowing the plug-in to examine the list for any private attributes that could modify its behavior.

For example, a plug-in that displays video could have private attributes that determine whether to start the plug-in automatically or loop the video automatically on playback, as in the following `embed` element:

```html
<embed src="myavi.avi" width="100" height="125" autostart="true" loop="true">
```

With this `embed` element, Gecko passes the values to the plug-in, using the arg parameters of the `NPP_New` call that creates the plug-in instance.

    argc = 5
    argn = {"src", "width", "height", "autostart", "loop"}
    argv = {"movie.avi", "100", "125", "true", "true"}

Gecko interprets the attributes as follows:

- `src`: Load the data file and determine the MIME type of the data.
- `width` and `height`: Set the area of the page handled by the plug-in to 100 by 125 pixels.
- `autostart` and `loop`: Ignore these private attributes and pass them along to the plug-in with the rest of the attributes.

The plug-in must scan its list of attributes to determine whether it should automatically start the video and loop it on playback. Note that with an `object` element, `param` values are also sent in this array after the attributes, separated by a `param` entry.

### Plug-in references

- [The Mozilla Plug-ins project page](https://www.mozilla.org/projects/plugins/)
