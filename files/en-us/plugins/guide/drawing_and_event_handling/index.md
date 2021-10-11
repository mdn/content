---
title: Drawing and Event Handling
slug: Plugins/Guide/Drawing_and_Event_Handling
tags:
  - Gecko Plugin API Reference
  - Guide
  - NPAPI
  - Plugins
---
This chapter tells how to determine whether a plug-in instance is windowed or windowless, how to draw and redraw plug-ins, and how to handle plug-in events.

When it comes to determining the way a plug-in instance appears in a web page, you (and the web page author) have many options. The content provider who writes the web page determines its display mode: whether the plug-in is embedded, or displayed in its own separate page. You determine whether a plug-in is windowed or windowless by the way you define the plug-in itself.

- A windowed plug-in is drawn into its own native window (or portion of a native window) on a web page. A windowed plug-in is opaque, hiding the part of the page beneath its display window. This type of plug-in determines when it draws itself.
- A windowless plug-in does not require a native window. It is drawn in a target called a drawable, which corresponds to either the browser window or an off-screen bitmap. A drawable can be defined in several ways, depending on the platform. Windowless plug-ins can be opaque or transparent. A windowless plug-in draws itself only in response to a paint message from the browser.

For information about the way HTML determines plug-in display mode, see [Using HTML to Display Plug-ins](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#Using_HTML_to_Display_Plug-ins).

> **Note:** Windowless plug-ins were not supported on the X Window System platform prior to Gecko 1.9 Alpha 7 ([bug 137189](https://bugzilla.mozilla.org/show_bug.cgi?id=137189 "FIXED: Windowless plug-in support for X (WMODE)")).

### The NPWindow Structure

When a plug-in is loaded, it is drawn into a target area. This target is either the windowed plug-in's native window, or the drawable of a windowless plug-in. The [NPWindow](/en-US/NPWindow) structure represents either the native window or a drawable. This structure contains information about coordinate position, size, the state of the plug-in (windowed or windowless), and some platform-specific information.

> **Note:** When a plug-in is drawn to a window, the plug-in is responsible for preserving state information and ensuring that the original state is restored.

For windowless plug-ins, the browser calls the [NPP_SetWindow](/en-US/NPP_SetWindow) method with an [NPWindow](/en-US/NPWindow) structure that represents a drawable. For windowed plug-ins, the browser calls the `NPP_SetWindow` method with an `NPWindow` structure that represents a window.

    //The NPWindow Structure

    typedef enum {

    NPWindowTypeWindow = 1,
    NPWindowTypeDrawable

    } NPWindowType;

    typedef struct _NPWindow
    {
    void*   window;   /* Platform-specific handle      */
    uint32  x;        /* Position of top-left corner   */
    uint32  y;        /*   relative to a Netscape page */
    uint32  width;    /* Maximum window size           */
    uint32  height;
    NPRect  clipRect; /* Clipping rectangle in port coordinates */

    #ifdef XP_UNIX
    void *  ws_info;  /* Platform-dependent additional data     */
    #endif /* XP_UNIX */

    NPWindowType  type;   /* Whether this is a window or a drawable */
    } NPWindow;

The window parameter is a platform-specific handle to a native window element in the browser window hierarchy on Windows and Unix. On Mac OS, window is a pointer to an [NP_Port](/en-US/NP_Port).

The `x` and `y` fields specify the top-left corner of the plug-in relative to the page.

The `width` and `height` fields specify the dimensions of the plug-in area. These values should not be modified by the plug-in.

The `clipRect` field defines the clipping rectangle of the plug-in in a coordinate system where the origin is the top-left corner of the drawable or window. The browser calls [NPP_SetWindow](/en-US/NPP_SetWindow) whenever the drawable changes. For windowless plugins, a `clipRect` of `0,0,0,0` signals that the plugin is not visible.

The type field indicates the `NPWindow` type of the target area:

- NPWindowTypeWindow: Windowed plug-in. The window field holds a platform-specific handle to a window.
- NPWindowTypeDrawable: Windowless plug-in. The window field holds a platform-specific handle to a drawable, as follows:

  - Windows: HDC
  - Mac OS: pointer to `NP_Port` structure.
  - Unix/X11: not used. (The drawable is provided in the paint message. See below.)

In both cases, the drawable can be an off-screen pixmap.

### Drawing Plug-ins

This section describes the methods and processes you use in drawing both windowed and windowless plug-ins. Processes that apply to only one of these plug-in types are described in the following sections.

The plug-in uses these methods to draw plug-ins and to handle events:

Plug-in methods, called by the browser:

- [NPP_HandleEvent](/en-US/NPP_HandleEvent): Deliver a platform-specific event to the instance.
- [NPP_Print](/en-US/NPP_Print): Request a platform-specific print operation for the instance.
- [NPP_SetWindow](/en-US/NPP_SetWindow): Set the window in which a plug-in draws.

Browser-side methods, called by the plug-in:

- [NPN_ForceRedraw](/en-US/NPN_ForceRedraw): Force a paint message to a windowless plug-in.
- [NPN_InvalidateRect](/en-US/NPN_InvalidateRect): Invalidate an area in a windowless plug-in before repainting or refreshing.
- [NPN_InvalidateRegion](/en-US/NPN_InvalidateRegion): Invalidate a region in a windowless plug-in before repainting or refreshing.

#### Printing the Plug-in

The browser calls the `NPP_Print` method to ask the plug-in instance to print itself.

    void NPP_Print(NPP instance, NPPrint *printInfo);

The instance parameter represents the current plug-in.

The `PrintInfo` parameter determines the print mode. It is set to either `NP_FULL` to indicate full-page plug-in printing, or `NP_EMBED` if this is an embedded plug-in printed as part of the window in which it is embedded.

- An embedded plug-in shares printing with the browser. The plug-in prints the part of the page it occupies, and the browser handles the rest of the printing process, including displaying print dialog boxes, getting the printer device context, and, of course, printing the rest of the page.

An embedded plug-in can set the `pluginPrinted` field in its `PrintInfo` parameter to false (the default). This is a field of the `_NPFullPrint` substructure of the `NPPrint` structure. The browser displays the necessary print dialog boxes and calls `NPP_Print` again. This time, `PrintInfo->mode` should be set to `NP_EMBED`.

- A full-page plug-in handles the print dialog boxes and printing process as it sees fit. In this case, before the browser displays any print dialog boxes, `NPP_Print` is called with `PrintInfo->mode` equal to `NP_FULL`. On Mac OS, full-page printing requires that the field PrintInfo contain a standard Mac OS THPrint (see `Printing.h`).

Of course, `NPP_Print` is also called with `PrintInfo->mode` equal to `NP_EMBED` when the instance is embedded. In this case, `platformPrint->embedPrint.window` contains the window in which the plug-in should print.

On MS Windows, note that the coordinates for the window rectangle are in TWIPS format. For this reason, you need to convert the x - and y - coordinates using the Windows API call `DPtoLP` when you output text.

#### Setting the Window

The browser calls the `NPP_SetWindow` function to set the window in which a plug-in draws or returns an error code. This window is valid for the life of the instance, or until `NPP_SetWindow` is called again with a different value.

Subsequent calls to `NPP_SetWindow` for a given instance usually mean that the window has been resized. If either window or `window->window` is null, the plug-in must not perform any additional graphics operations on the window and should free any associated resources.

    NPError NPP_SetWindow(NPP instance, NPWindow *window);

The instance parameter represents the current plug-in.

The window parameter is a pointer to the drawing target for the plug-in. For windowless plug-ins, the platform-specific window information specified in `window->window` is a platform-specific handle to a drawable.

MS Windows and Unix

For windowed plug-ins on MS Windows and Unix, the `window->window` field is a handle to a subwindow of the Netscape window hierarchy.

Mac OS

The `window->window` field points to an `NP_Port` structure.

#### Getting Information

To receive information from the browser, the plug-in calls the `NPN_GetValue` method.

    NPError NPN_GetValue(NPP instance, NPNVariable variable, void *value);

The `instance` parameter represents the current plug-in.

Unix and MS Windows

The queried information is returned in the variable parameter. This parameter is valid only for the Unix and MS Windows platforms. For Unix, the values are either the current display (`NPNVxDisplay`) or the application's context (`NPNVxtAppContext`). For MS Windows, the value is the native window on which the plug-in drawing occurs (`NPNVnetscapeWindow`).

The value parameter contains the name of the plug-in.

You can also use `NPN_GetValue` to help create a menu or dialog box for a windowless plug-in.

### Windowed Plug-ins

The browser gives each windowed plug-in its own native window, often a child window of the browser window itself, to draw into. The plug-in has complete control over drawing and event handling within that window.

On Mac OS, the browser does not give a windowed plug-in a native window, because the Mac OS platform does not support child windows. Instead, the windowed plug-in draws into the graphics port associated with the browser window, at the offset that the browser specifies.

On MS Windows and Unix, the browser creates a child window for each plug-in instance and passes it a window through `NPP_SetWindow`. On Mac OS, the application uses `NPP_SetWindow` to dedicate a rectangular part of its graphics port to each instance. On any platform, the browser should be careful not to draw in the plug-in's area, and vice versa. The data structure passed in `NPP_SetWindow` is an `NPWindow` object, which contains the coordinates of the instance's area and various platform-specific data.

Typically, the browser calls `NPP_SetWindow` after creating the instance so that the plug-in can begin drawing immediately. However, the browser can create invisible instances for which `NPP_SetWindow` is never called and a window is never created. This happens when plug-ins are invoked with an HTML `object` element that has been hidden with CSS rules (see [Plug-in Display Modes](/en-US/docs/Gecko_Plugin_API_Reference/Plug-in_Basics#Plug-in_Display_Modes) in the Introduction) or with an `embed` element whose `hidden` attribute has been set.

The browser should call `NPP_SetWindow` again whenever the size or position of the instance changes, passing it the same `NPWindow` object each time, but with different values.

The browser can also call `NPP_SetWindow` multiple times with different values for the window, including null. For example, if a user removes an instance from the page, the browser should call `NPP_SetWindow` with a window value of null. This value prevents the instance from drawing further until it is pasted back on the page and `NPP_SetWindow` is called again with a new value.

- [Mac OS](/en-US/docs/Gecko_Plugin_API_Reference/Drawing_and_Event_Handling#Mac_OS)
- [Windows](/en-US/docs/Gecko_Plugin_API_Reference/Drawing_and_Event_Handling#Windows)
- [Unix](/en-US/docs/Gecko_Plugin_API_Reference/Drawing_and_Event_Handling#Unix)

#### Mac OS

On Mac OS, the browser passes an `NP_Port` structure in the window field of the `NPWindow` structure. This structure contains a pointer to the graphics port (`CGraphPtr`) into which the plug-in instance should draw and the x - and y - coordinates of the upper-left corner of this port. The plug-in can use these coordinates to call `SetOrigin(portx, porty)` to place the upper-left corner of its rectangle at (0,0). The Mac OS `GrafPort` structure's `clipRgn` field should be set to the clipping rectangle for the instance in port coordinates.

Because the plug-in and the browser share the same graphics port, they share the responsibility for managing it correctly. The browser sets up the port for the plug-in before passing the plug-in an update event in two ways:

- The browser calls `SetOrigin(npport->portx, npport->porty)`. This method makes the instance's upper-left coordinate equal to (0,0).
- The browser sets the port's clip region to the region of the plug-in currently visible (not scrolled off the page, obscured by floating palettes, or otherwise hidden).

However, for the plug-in to draw at any other time, for example, to highlight on a mouse-down event or draw animation at idle time, it must save the current setting of the port, set up its drawing environment as appropriate, draw, and then restore the port to the previous settings. In this case, the plug-in makes it unnecessary for the browser to save and restore its port settings before and after every call into the plug-in.

The browser and the plug-in can both install Drag Manager handlers for the shared port. Because the Drag Manager calls both handlers no matter where the cursor is, the browser does not show the drag highlight when the cursor is over an instance rectangle. Also, the browser does nothing when a drop occurs within an instance rectangle. The plug-in can then show the drag highlight and handle drops when they occur within the instance rectangle.

The browser is also responsible for sending the plug-in all events targeted to an instance, such as mouse clicks when the cursor is within the instance rectangle or suspend and resume events when the application is switched in and out. Events are sent to the plug-in with a call to `NPP_HandleEvent`; for a complete list of event types, see the reference entry for `NPEvent`.

#### Windows

On Windows, the browser registers a window class and creates an instance of that class for the plug-in instance. The plug-in can then subclass the window to receive any events it needs. If the plug-in needs to receive periodic time messages (for example, for animation), it should use a timer or a separate thread.

#### Unix

On Unix, the browser creates a Motif Drawing Area widget for the instance and passes the window ID of the widget in the window field of `NPWindow`. Additionally, the browser creates an `NPSetWindowCallbackStruct` object and passes it in the `ws_info` field of `NPWindow`. As on Windows, the plug-in can receive all events for the instance, in this case through the widget. If the plug-in needs to receive periodic time messages, it should install a timer or fork a thread.

#### Event Handling for Windowed Plug-ins

All imaging and user interface events for a windowed plug-in instance are handled according to the windowing system of its native platform. The Plug-in API provides a native window handle within which an instance does its drawing through the API call `NPP_SetWindow`. `NPP_SetWindow` passes the instance an `NPWindow` object containing the native window handle.

On Windows and Unix, each instance receives its own child window within the browser window hierarchy, and imaging and event processing are relative to this window. Mac OS does not support child windows. The native window is shared between the instance and the browser. The instance must restrict its drawing to a specified area of the shared window, and it must always save the current settings, set up the drawing environment, and restore the shared drawing environment to the previous settings. On Mac OS, events are explicitly provided to the instance by `NPP_HandleEvent`.

### Windowless Plug-ins

A windowless plug-in does not require a native window to draw into. Instead it draws into a drawable (`HDC` on Windows or `CGrafPtr` on Mac OS), which can either be on-screen or off-screen.

Windowless plug-ins provide the plug-in writer with some significant design possibilities:

- You can place a windowless plug-in within a section; other sections can exist both above and below it.
- You can create transparent plug-ins. In this case, the browser draws the part of the page that exists behind the plug-in. The windowless plug-in draws only the parts of itself that are opaque. This way, the plug-in can draw an irregularly shaped area, such as a figure, or text over the existing background.
- The browser supports off-screen drawing of plug-ins. This makes it possible to manipulate plug-in contents. For example, a 3D application could use the contents of a plug-in as a texture map.

Because windowless plug-ins can be layered or drawn to arbitrary drawables, the browser (as opposed to the native windowing system) is responsible for controlling both their drawing and their event handling.

See the following items for more information on controlling the drawing of the plug-in instance:

- [Specifying That a Plug-in Is Windowless](/en-US/docs/Gecko_Plugin_API_Reference/Drawing_and_Event_Handling#Specifying_That_a_Plug-in_Is_Windowless)
- [Invalidating the Drawing Area](/en-US/docs/Gecko_Plugin_API_Reference/Drawing_and_Event_Handling#Invalidating_the_Drawing_Area)
- [Forcing a Paint Message](/en-US/docs/Gecko_Plugin_API_Reference/Drawing_and_Event_Handling#Forcing_a_Paint_Message)
- [Making a Plug-in Opaque](/en-US/docs/Gecko_Plugin_API_Reference/Drawing_and_Event_Handling#Making_a_Plug-in_Opaque)
- [Making a Plug-in Transparent](/en-US/docs/Gecko_Plugin_API_Reference/Drawing_and_Event_Handling#Making_a_Plug-in_Transparent)
- [Creating Pop-up Menus and Dialog Boxes](/en-US/docs/Gecko_Plugin_API_Reference/Drawing_and_Event_Handling#Creating_Pop-up_Menus_and_Dialog_Boxes)
- [Event Handling for Windowless Plug-ins](/en-US/docs/Gecko_Plugin_API_Reference/Drawing_and_Event_Handling#Event_Handling_for_Windowless_Plug-ins)

#### Specifying That a Plug-in Is Windowless

To specify that a plug-in is windowless, use the [`NPN_SetValue`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_SetValue) method.

The instance parameter represents the current plug-in. The variable parameter contains plug-in information to set. The value parameter returns the name of the plug-in.

To specify that a plug-in is windowless, use `NPN_SetValue` with `NPPVpluginWindowBool` as the value of variable and false as the value of value. The plug-in makes this call from its `NPP_New method`. If a plug-in does not make this call, it is considered a windowed plug-in.

Plug-ins on Mac OS X are always windowless.

    NPError NPP_New(NPMIMEType    pluginType,
                    NPP instance, uint16 mode,
                    int16 argc,   char *argn[],
                    char *argv[], NPSavedData *saved)
    {
      ...
      NPError result = NPN_SetValue(instance, NPPVpluginWindowBool, (void*)false);
    }

#### Invalidating the Drawing Area

Before it can repaint or refresh part of its drawing area, a windowless plug-in must first invalidate the area with either of these browser methods: `NPN_InvalidateRect` or `NPN_InvalidateRegion`. Both methods perform the same operations:

- They invalidate the specified drawing area prior to repainting or refreshing.
- They pass an update event or a paint message to the plug-in.

The browser redraws invalid areas of the document and windowless plug-ins at regularly timed intervals. To force a paint message, the plug-in can call `NPN_ForceRedraw` after calling one of the invalidate methods. If a plug-in calls one of these methods, it receives a paint message asynchronously.

    void NPN_InvalidateRect(NPP instance, NPRect *invalidRect);
    void NPN_InvalidateRegion(NPP instance, NPRegion invalidRegion);

The instance parameter represents the current plug-in. The `invalidRect` and `invalidRegion` parameters represent the area to invalidate, specified in a coordinate system whose origin is at the top left of the plug-in.

Both methods cause the `NPP_HandleEvent` method to pass an update event or a paint message to the plug-in.

    #ifdef XP_MAC

    typedef RgnHandle NPRegion;

    #elif defined(XP_WIN)

    typedef HRGN NPRegion;

    #elif defined(XP_UNIX)

    typedef Region NPRegion;

    #else

    typedef void* NPRegion;

    #endif /* XP_MAC */

    void NPN_InvalidateRect(NPP instance, NPRect *invalidRect);
    void NPN_InvalidateRegion(NPP instance, NPRegion invalidRegion);

#### Forcing a paint message

Windowed and windowless plug-ins have different drawing models. A windowed plug-in determines when it draws, whereas a windowless plug-in draws in response to a paint message from the browser. A plug-in can call `NPN_ForceRedraw()` to force a paint message synchronously, once an area has been invalidated with `NPN_InvalidateRect()` or `NPN_InvalidateRegion()`.

    void NPN_ForceRedraw(NPP instance);

This method results in a synchronous update event or paint message for the plug-in.

> **Note:** Some browsers, including Firefox 4, may ignore calls to `NPN_ForceRedraw()`.

#### Receiving a Paint Message

A plug-in must not draw into its drawable unless it receives a paint message. It does not need to call the platform-specific function to begin painting within a window. That is, the plug-in does not call `BeginPaint` on Windows or `BeginUpdate` on Mac OS.

- Windows
  - : The plug-in receives a `WM_PAINT` message. The `lParam` parameter of `WM_PAINT` holds a pointer to a `RECT` structure specifying the bounding box of the update area. Some plug-ins will choose to ignore this paint rect and always update the entire plug-in window instead, though. Also, because the plug-in and the browser share the same HDC, the plug-in must save the current settings on the HDC, set up its own environment, draw itself, and restore the HDC to the previous settings. The HDC settings must be restored whenever control returns to the browser, either before returning from `NPP_HandleEvent` or before calling a drawing-related browser-side method.
- Mac OS
  - : The plug-in receives an update event. The clip region of the drawable's `CGrafPtr` port is set to the update region. As is the case for windowed plug-ins on Mac OS, the plug-in must first save the current settings of the port, setting up the drawing environment as appropriate, drawing, and restoring the port to the previous setting. This should happen before the plug-in returns from `NP_HandleEvent` or before the plug-in calls a drawing-related browser method.
- Unix/X11

  - : The plug-in receives a `GraphicsExpose` event. The `XGraphicsExposeEvent` structure contains the Xlib `Drawable` (which is an offscreen Pixmap), its `Display`, and the dirty rectangle (optional clip rectangle) specified relative to the top-left corner of the drawable.

    The plugin should draw to the `Drawable` with the offset specified in the `x` and `y` members of the [NPWindow](/en-US/NPWindow) structure, with the clip rectangle specified in the `clipRect` member, and with the `Visual` and `Colormap` specified in the `ws_info` member.

#### Making a Plug-in Opaque

A windowless plug-in is opaque if it has no transparent areas. When the browser generates a paint message for the plug-in, it assumes that the plug-in is responsible for painting the entire area to be updated. Because the browser does not need to draw the background behind the plug-in, opaque windowless plug-ins are considerably more efficient than transparent plug-ins.

A windowless plug-in is transparent by default. To make a transparent plug-in opaque, call `NPN_SetValue` to set `NPPVpluginTransparentBool` to false. The plug-in can call this method any time after specifying that it is a windowless plug-in.

#### Making a Plug-in Transparent

A windowless plug-in is transparent if it has transparent areas. Here are two examples of plug-ins that have transparent areas:

- a plug-in that is smaller than the area specified by the enclosing `object` or `embed` element
- a plug-in with nonrectangular boundaries

The browser is responsible for rendering the background of a transparent windowless plug-in. Before generating a paint message for the plug-in, the browser makes sure that the background is already drawn into the area to be updated. The plug-in can then draw the part of the update region that corresponds to its opaque areas. This ensures that the transparent areas of the plug-in are always valid.

Windowless plug-ins are transparent by default. If you want to make an opaque windowless plug-in transparent, call the `NPN_SetValue` method and set `NPPVpluginTransparentBool` to the value true. The plug-in can call this method any time after specifying that it is a windowless plug-in.

#### Creating Pop-up Menus and Dialog Boxes

MS Windows and Unix/X11 only

A windowless plug-in does not draw in its own native window. Instead, it draws directly in the drawable given to it. This behavior presents a problem if you need to display pop-up menus and modal dialog boxes in a plug-in; a plug-in needs a parent window in order to create windows like these.

To deal with this problem, use `NPN_GetValue` to find out where the plug-in draws. Use `NPNVnetscapeWindow` as the value for the variable parameter.

    NPError NPN_GetValue(NPP instance, NPNVariable variable, void *value);

The instance parameter represents the current plug-in. The variable parameter contains the information the call is requesting, in this case `NPNVnetscapeWindow` (the native window in which plug-in drawing occurs).

- Windows

  - : The requested information, a value of type HWND, is returned from [NPN_GetValue](/en-US/NPN_GetValue) in the value parameter.

    In many cases, a plug-in may still have to create its own window (a transparent child window of the browser window) to act as the owner window for pop-up menus and modal dialog boxes. You can give this transparent child window its own WindowProc process. The plug-in can use this to deal with `WM_COMMAND` messages sent to it as a result of tracking the pop-up menu or modal dialog box.

- Unix/X11
  - : The value parameter for [NPN_GetValue](/en-US/NPN_GetValue) must point to an Xlib `Window`. On successful return this will contain the browser toplevel window. Use this `Window` to set the WM_TRANSIENT_FOR property on dialog boxes.

#### Event Handling for Windowless Plug-ins

On all platforms, platform-specific events are passed to windowless plug-ins through the [`NPP_HandleEvent`](/en-US/NPP_HandleEvent) method. The plug-in must return true from `NPP_HandleEvent` if it has handled the event and false if it has not. Mac OS uses this mechanism for both windowed and windowless plug-ins; on this platform, `NPP_HandleEvent` is the only way the plug-in can receive events from its host application.

    int16 NPP_HandleEvent(NPP instance, NPEvent *event);

The instance parameter represents the current plug-in. For a list of event types the application is responsible for delivering to the plug-in, see the [`NPEvent`](/en-US/NPEvent) structure.

This code shows the specific data passed through this method for each platform:

    #ifdef XP_MAC

    typedef EventRecord NPEvent;

    #elif defined(XP_WIN)

    typedef struct _NPEvent {
    int16    event;
    int16    wParam;
    int32    lParam;
    } NPEvent;

    #elif defined(XP_UNIX)

    typedef XEvent NPEvent;

    #else

    typedef void NPEvent;

    #endif /* XP_MAC */

    int16 NPP_HandleEvent(NPP instance, NPEvent* event);

On Mac OS, when `NPP_HandleEvent` is called, the current port is set up correctly so that its origin matches the upper-left corner of the plug-in. A plug-in does not need to set up the current port for mouse coordinate translation.
