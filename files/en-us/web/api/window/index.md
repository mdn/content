---
title: Window
slug: Web/API/Window
page-type: web-api-interface
browser-compat: api.Window
---

{{APIRef("DOM")}}

The **`Window`** interface represents a window containing a {{glossary("DOM")}} document; the `document` property points to the [DOM document](/en-US/docs/Web/API/Document) loaded in that window.

A window for a given document can be obtained using the {{domxref("document.defaultView")}} property.

A global variable, `window`, representing the window in which the script is running, is exposed to JavaScript code.

The `Window` interface is home to a variety of functions, namespaces, objects, and constructors which are not necessarily directly associated with the concept of a user interface window. However, the `Window` interface is a suitable place to include these items that need to be globally available. Many of these are documented in the [JavaScript Reference](/en-US/docs/Web/JavaScript/Reference) and the [DOM Reference](/en-US/docs/Web/API/Document_Object_Model).

In a tabbed browser, each tab is represented by its own `Window` object; the global `window` seen by JavaScript code running within a given tab always represents the tab in which the code is running. That said, even in a tabbed browser, some properties and methods still apply to the overall window that contains the tab, such as {{Domxref("Window.resizeTo", "resizeTo()")}} and {{Domxref("Window.innerHeight", "innerHeight")}}. Generally, anything that can't reasonably pertain to a tab pertains to the window instead.

{{InheritanceDiagram}}

## Instance properties

_This interface inherits properties from the {{domxref("EventTarget")}} interface._

Note that properties which are objects (e.g., for overriding the prototype of built-in elements) are listed in a separate section below.

- {{domxref("Window.caches")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Returns the {{domxref("CacheStorage")}} object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.
- {{domxref("Window.navigator", "Window.clientInformation")}} {{ReadOnlyInline}}
  - : An alias for {{domxref("Window.navigator")}}.
- {{domxref("Window.closed")}} {{ReadOnlyInline}}
  - : This property indicates whether the current window is closed or not.
- {{domxref("Window.console")}} {{ReadOnlyInline}}
  - : Returns a reference to the console object which provides access to the browser's debugging console.
- {{domxref("Window.cookieStore")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Returns a reference to the {{domxref("CookieStore")}} object for the current document context.
- {{domxref("Window.credentialless")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a boolean that indicates whether the current document was loaded inside a credentialless {{htmlelement("iframe")}}. See [IFrame credentialless](/en-US/docs/Web/Security/IFrame_credentialless) for more details.
- {{domxref("Window.crossOriginIsolated")}} {{ReadOnlyInline}}
  - : Returns a boolean value that indicates whether the website is in a cross-origin isolation state.
- {{domxref("Window.crypto")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Crypto")}} object associated to the global object.
- {{domxref("Window.customElements")}} {{ReadOnlyInline}}
  - : Returns a reference to the {{domxref("CustomElementRegistry")}} object, which can be used to register new [custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements) and get information about previously registered custom elements.
- {{domxref("Window.devicePixelRatio")}} {{ReadOnlyInline}}
  - : Returns the ratio between physical pixels and device independent pixels in the current display.
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : Returns a reference to the document that the window contains.
- {{domxref("Window.documentPictureInPicture")}} {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Returns a reference to the [document Picture-in-Picture](/en-US/docs/Web/API/Document_Picture-in-Picture_API) window for the current document context.
- {{domxref("Window.fence")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns a {{domxref("Fence")}} object instance for the current document context. Available only to documents embedded inside a {{htmlelement("fencedframe")}}.
- {{domxref("Window.frameElement")}} {{ReadOnlyInline}}
  - : Returns the element in which the window is embedded, or null if the window is not embedded.
- {{domxref("Window.frames")}} {{ReadOnlyInline}}
  - : Returns an array of the subframes in the current window.
- {{domxref("Window.fullScreen")}} {{Non-standard_Inline}}
  - : This property indicates whether the window is displayed in full screen or not.
- {{domxref("Window.history")}} {{ReadOnlyInline}}
  - : Returns a reference to the history object.
- {{domxref("Window.indexedDB")}} {{ReadOnlyInline}}
  - : Provides a mechanism for applications to asynchronously access capabilities of indexed databases; returns an {{domxref("IDBFactory")}} object.
- {{domxref("Window.innerHeight")}} {{ReadOnlyInline}}
  - : Gets the height of the content area of the browser window including, if rendered, the horizontal scrollbar.
- {{domxref("Window.innerWidth")}} {{ReadOnlyInline}}
  - : Gets the width of the content area of the browser window including, if rendered, the vertical scrollbar.
- {{domxref("Window.isSecureContext")}} {{ReadOnlyInline}}
  - : Returns a boolean indicating whether the current context is secure (`true`) or not (`false`).
- {{domxref("Window.launchQueue")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : When a [progressive web app](/en-US/docs/Web/Progressive_web_apps) (PWA) is launched with a [`launch_handler`](/en-US/docs/Web/Manifest/launch_handler) `client_mode` value of `focus-existing`, `navigate-new`, or `navigate-existing`, the `launchQueue` provides access to the {{domxref("LaunchQueue")}} class, which allows custom launch navigation handling to be implemented for the PWA.
- {{domxref("Window.length")}} {{ReadOnlyInline}}
  - : Returns the number of frames in the window. See also {{domxref("window.frames")}}.
- {{domxref("Window.localStorage")}} {{ReadOnlyInline}}
  - : Returns a reference to the local storage object used to store data that may only be accessed by the origin that created it.
- {{domxref("Window.location")}}
  - : Gets/sets the location, or current URL, of the window object.
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : Returns the locationbar object.
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : Returns the menubar object.
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Returns the horizontal (X) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils` for a conversion factor to adapt to screen pixels if needed.
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Returns the vertical (Y) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See `mozScreenPixelsPerCSSPixel` for a conversion factor to adapt to screen pixels if needed.
- {{domxref("Window.name")}}
  - : Gets/sets the name of the window.
- {{domxref("Window.navigation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the current `window`'s associated {{domxref("Navigation")}} object. The entry point for the {{domxref("Navigation API")}}.
- {{domxref("Window.navigator")}} {{ReadOnlyInline}}
  - : Returns a reference to the navigator object.
- {{domxref("Window.opener")}}
  - : Returns a reference to the window that opened this current window.
- {{domxref("Window.origin")}} {{ReadOnlyInline}}
  - : Returns the global object's origin, serialized as a string.
- {{domxref("Window.originAgentCluster")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `true` if this window belongs to an origin-keyed agent cluster.
- {{domxref("Window.outerHeight")}} {{ReadOnlyInline}}
  - : Gets the height of the outside of the browser window.
- {{domxref("Window.outerWidth")}} {{ReadOnlyInline}}
  - : Gets the width of the outside of the browser window.
- {{domxref("Window.scrollX","Window.pageXOffset")}} {{ReadOnlyInline}}
  - : An alias for {{domxref("window.scrollX")}}.
- {{domxref("Window.scrollY","Window.pageYOffset")}} {{ReadOnlyInline}}
  - : An alias for {{domxref("window.scrollY")}}.
- {{domxref("Window.parent")}} {{ReadOnlyInline}}
  - : Returns a reference to the parent of the current window or subframe.
- {{domxref("Window.performance")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("Performance")}} object, which includes the {{domxref("Performance.timing", "timing")}} and {{domxref("Performance.navigation", "navigation")}} attributes, each of which is an object providing [performance-related](/en-US/docs/Web/API/Performance_API/Navigation_timing) data. See also [Using Navigation Timing](/en-US/docs/Web/API/Performance_API/Navigation_timing) for additional information and examples.
- {{domxref("Window.personalbar")}} {{ReadOnlyInline}}
  - : Returns the personalbar object.
- {{domxref("Window.scheduler")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Scheduler")}} object associated with the current context. This is the entry point for using the [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API).
- {{domxref("Window.screen")}} {{ReadOnlyInline}}
  - : Returns a reference to the screen object associated with the window.
- {{domxref("Window.screenX")}} and {{domxref("Window.screenLeft")}} {{ReadOnlyInline}}
  - : Both properties return the horizontal distance from the left border of the user's browser viewport to the left side of the screen.
- {{domxref("Window.screenY")}} and {{domxref("Window.screenTop")}} {{ReadOnlyInline}}
  - : Both properties return the vertical distance from the top border of the user's browser viewport to the top side of the screen.
- {{domxref("Window.scrollbars")}} {{ReadOnlyInline}}
  - : Returns the scrollbars object.
- {{domxref("Window.scrollMaxX")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : The maximum offset that the window can be scrolled to horizontally, that is the document width minus the viewport width.
- {{domxref("Window.scrollMaxY")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : The maximum offset that the window can be scrolled to vertically (i.e., the document height minus the viewport height).
- {{domxref("Window.scrollX")}} {{ReadOnlyInline}}
  - : Returns the number of pixels that the document has already been scrolled horizontally.
- {{domxref("Window.scrollY")}} {{ReadOnlyInline}}
  - : Returns the number of pixels that the document has already been scrolled vertically.
- {{domxref("Window.self")}} {{ReadOnlyInline}}
  - : Returns an object reference to the window object itself.
- {{domxref("Window.sessionStorage")}}
  - : Returns a reference to the session storage object used to store data that may only be accessed by the origin that created it.
- {{domxref("Window.sharedStorage")}} {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Returns the {{domxref("WindowSharedStorage")}} object for the current origin. This is the main entry point for writing data to shared storage using the [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API).
- {{domxref("Window.speechSynthesis")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("SpeechSynthesis")}} object, which is the entry point into using [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) speech synthesis functionality.
- {{domxref("Window.statusbar")}} {{ReadOnlyInline}}
  - : Returns the statusbar object.
- {{domxref("Window.toolbar")}} {{ReadOnlyInline}}
  - : Returns the toolbar object.
- {{domxref("Window.top")}} {{ReadOnlyInline}}
  - : Returns a reference to the topmost window in the window hierarchy. This property is read only.
- {{domxref("Window.trustedTypes")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("TrustedTypePolicyFactory")}} object associated with the global object, providing the entry point for using the {{domxref("Trusted Types API", "", "", "nocode")}}.
- {{domxref("Window.visualViewport")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("VisualViewport")}} object which represents the visual viewport for a given window.
- {{domxref("Window.window")}} {{ReadOnlyInline}}
  - : Returns a reference to the current window.
- `window[0]`, `window[1]`, etc.
  - : Returns a reference to the `window` object in the frames. See {{domxref("Window.frames")}} for more details.

### Deprecated properties

- {{domxref("Window.event")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Returns the **current event**, which is the event currently being handled by the JavaScript code's context, or `undefined` if no event is currently being handled. The {{domxref("Event")}} object passed directly to event handlers should be used instead whenever possible.
- {{domxref("Window.external")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Returns an object with functions for adding external search providers to the browser.
- {{domxref("Window.orientation")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Returns the orientation in degrees (in 90 degree increments) of the viewport relative to the device's natural orientation.
- {{domxref("Window.sidebar")}} {{Deprecated_Inline}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Returns a reference to the window object of the sidebar
- {{domxref("Window.status")}} {{Deprecated_Inline}}
  - : Gets/sets the text in the statusbar at the bottom of the browser.

## Instance methods

_This interface inherits methods from the {{domxref("EventTarget")}} interface._

- {{domxref("Window.atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("Window.alert()")}}
  - : Displays an alert dialog.
- {{domxref("Window.blur()")}} {{deprecated_inline}}
  - : Sets focus away from the window.
- {{domxref("Window.btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("Window.cancelAnimationFrame()")}}
  - : Enables you to cancel a callback previously scheduled with {{domxref("Window.requestAnimationFrame")}}.
- {{domxref("Window.cancelIdleCallback()")}}
  - : Enables you to cancel a callback previously scheduled with {{domxref("Window.requestIdleCallback")}}.
- {{domxref("clearInterval", "Window.clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("setInterval()")}}.
- {{domxref("clearTimeout()", "Window.clearTimeout()")}}
  - : Cancels the delayed execution set using {{domxref("setTimeout()")}}.
- {{domxref("Window.close()")}}
  - : Closes the current window.
- {{domxref("Window.confirm()")}}
  - : Displays a dialog with a message that the user needs to respond to.
- {{domxref("createImageBitmap", "Window.createImageBitmap()")}}
  - : Accepts a variety of different image sources, and returns a {{jsxref("Promise")}} which resolves to an {{domxref("ImageBitmap")}}. Optionally the source is cropped to the rectangle of pixels originating at _(sx, sy)_ with width sw, and height sh.
- {{domxref("Window.dump()")}} {{Non-standard_Inline}}
  - : Writes a message to the console.
- {{domxref("Window.fetch()")}}
  - : Starts the process of fetching a resource from the network.
- {{domxref("Window.find()")}} {{Non-standard_Inline}}
  - : Searches for a given string in a window.
- {{domxref("Window.focus()")}}
  - : Sets focus on the current window.
- {{domxref("Window.getComputedStyle()")}}
  - : Gets computed style for the specified element. Computed style indicates the computed values of all CSS properties of the element.
- {{domxref("Window.getDefaultComputedStyle()")}} {{Non-standard_Inline}}
  - : Gets default computed style for the specified element, ignoring author stylesheets.
- {{domxref("Window.getScreenDetails()")}} {{experimental_inline}} {{securecontext_inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("ScreenDetails")}} object instance representing the details of all the screens available to the user's device.
- {{domxref("Window.getSelection()")}}
  - : Returns the selection object representing the selected item(s).
- {{domxref("Window.matchMedia()")}}
  - : Returns a {{domxref("MediaQueryList")}} object representing the specified media query string.
- {{domxref("Window.moveBy()")}}
  - : Moves the current window by a specified amount.
- {{domxref("Window.moveTo()")}}
  - : Moves the window to the specified coordinates.
- {{domxref("Window.open()")}}
  - : Opens a new window.
- {{domxref("Window.postMessage()")}}
  - : Provides a secure means for one window to send a string of data to another window, which need not be within the same domain as the first.
- {{domxref("Window.print()")}}
  - : Opens the Print Dialog to print the current document.
- {{domxref("Window.prompt()")}}
  - : Returns the text entered by the user in a prompt dialog.
- {{DOMxRef("Window.queryLocalFonts()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with an array of {{domxref("FontData")}} objects representing the font faces available locally.
- {{domxref("queueMicrotask", "Window.queueMicrotask()")}}
  - : Queues a microtask to be executed at a safe time prior to control returning to the browser's event loop.
- {{domxref("reportError", "Window.reportError()")}}
  - : Reports an error in a script, emulating an unhandled exception.
- {{domxref("Window.requestAnimationFrame()")}}
  - : Tells the browser that an animation is in progress, requesting that the browser schedule a repaint of the window for the next animation frame.
- {{domxref("Window.requestIdleCallback()")}}
  - : Enables the scheduling of tasks during a browser's idle periods.
- {{domxref("Window.resizeBy()")}}
  - : Resizes the current window by a certain amount.
- {{domxref("Window.resizeTo()")}}
  - : Dynamically resizes window.
- {{domxref("Window.scroll()")}}
  - : Scrolls the window to a particular place in the document.
- {{domxref("Window.scrollBy()")}}
  - : Scrolls the document in the window by the given amount.
- {{domxref("Window.scrollByLines()")}} {{Non-standard_Inline}}
  - : Scrolls the document by the given number of lines.
- {{domxref("Window.scrollByPages()")}} {{Non-standard_Inline}}
  - : Scrolls the current document by the specified number of pages.
- {{domxref("Window.scrollTo()")}}
  - : Scrolls to a particular set of coordinates in the document.
- {{domxref("setInterval", "Window.setInterval()")}}
  - : Schedules a function to execute every time a given number of milliseconds elapses.
- {{domxref("setTimeout()", "Window.setTimeout()")}}
  - : Schedules a function to execute in a given amount of time.
- {{domxref("Window.showDirectoryPicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Displays a directory picker which allows the user to select a directory.
- {{domxref("Window.showOpenFilePicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Shows a file picker that allows a user to select a file or multiple files.
- {{domxref("Window.showSaveFilePicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Shows a file picker that allows a user to save a file.
- {{domxref("Window.sizeToContent()")}} {{Non-standard_Inline}}
  - : Sizes the window according to its content.
- {{domxref("Window.stop()")}}
  - : This method stops window loading.
- {{domxref("structuredClone", "Window.structuredClone()")}}
  - : Creates a [deep clone](/en-US/docs/Glossary/Deep_copy) of a given value using the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- {{domxref("Window.updateCommands()")}} {{Non-standard_Inline}}
  - : Updates the state of commands of the current chrome window (UI).

### Deprecated methods

- {{domxref("Window.back()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Moves back one in the window history. This method is deprecated; you should instead use {{domxref("History.back", "history.back()")}}.
- {{domxref("Window.captureEvents()")}} {{Deprecated_Inline}}
  - : Registers the window to capture all events of the specified type.
- {{domxref("Window.clearImmediate()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Cancels the repeated execution set using `setImmediate()`.
- {{domxref("Window.forward()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Moves the window one document forward in the history. This method is deprecated; you should instead use {{domxref("History.forward", "history.forward()")}}.
- {{domxref("Window.releaseEvents()")}} {{Deprecated_Inline}}
  - : Releases the window from trapping events of a specific type.
- {{domxref("Window.requestFileSystem()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Lets a website or app gain access to a sandboxed file system for its own use.
- {{domxref("Window.setImmediate()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Executes a function after the browser has finished other heavy tasks.
- {{domxref("Window.setResizable()")}} {{Non-standard_Inline}} {{deprecated_inline}}
  - : Does nothing (no-op). Kept for backward compatibility with Netscape 4.x.
- {{domxref("Window.showModalDialog()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Displays a modal dialog.
- {{domxref("Window.webkitConvertPointFromNodeToPage()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transforms a {{domxref("WebKitPoint")}} from the node's coordinate system to the page's coordinate system.
- {{domxref("Window.webkitConvertPointFromPageToNode()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transforms a {{domxref("WebKitPoint")}} from the page's coordinate system to the node's coordinate system.

## Events

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface. In addition to the events listed below, many events can bubble from the {{domxref("Document")}} contained in the window object.

- {{domxref("Window/error_event", "error")}}
  - : Fired when a resource failed to load, or can't be used. For example, if a script has an execution error or an image can't be found or is invalid.
- {{domxref("Window/languagechange_event", "languagechange")}}
  - : Fired at the global scope object when the user's preferred language changes.
- {{domxref("Window/resize_event", "resize")}}
  - : Fired when the window has been resized.
- {{domxref("Window/storage_event", "storage")}}
  - : Fired when a storage area (`localStorage` or `sessionStorage`) has been modified in the context of another document.

### Clipboard events

- {{domxref("Window/copy_event", "copy")}}
  - : Fired when the user initiates a copy action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/copy_event", "oncopy")}} property.
- {{domxref("Window/cut_event", "cut")}}
  - : Fired when the user initiates a cut action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/cut_event", "oncut")}} property.
- {{domxref("Window/paste_event", "paste")}}
  - : Fired when the user initiates a paste action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/paste_event", "onpaste")}} property.

### Connection events

- {{domxref("Window/offline_event", "offline")}}
  - : Fired when the browser has lost access to the network and the value of `navigator.onLine` has switched to `false`.
- {{domxref("Window/online_event", "online")}}
  - : Fired when the browser has gained access to the network and the value of `navigator.onLine` has switched to `true`.

### Device orientation events

- {{domxref("Window.devicemotion_event", "devicemotion")}} {{SecureContext_Inline}}
  - : Fired at a regular interval, indicating the amount of physical force of acceleration the device is receiving and the rate of rotation, if available.
- {{domxref("Window.deviceorientation_event", "deviceorientation")}} {{SecureContext_Inline}}
  - : Fired when fresh data is available from the magnetometer orientation sensor about the current orientation of the device as compared to the Earth coordinate frame.
- {{domxref("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}} {{SecureContext_Inline}}
  - : Fired when fresh data is available from the magnetometer orientation sensor about the current absolute orientation of the device as compared to the Earth coordinate frame.

### Focus events

- {{domxref("Window/blur_event", "blur")}}
  - : Fired when an element has lost focus.
- {{domxref("Window/focus_event", "focus")}}
  - : Fired when an element has gained focus.

### Gamepad events

- {{domxref("Window/gamepadconnected_event", "gamepadconnected")}}
  - : Fired when the browser detects that a gamepad has been connected or the first time a button/axis of the gamepad is used.
- {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}}
  - : Fired when the browser detects that a gamepad has been disconnected.

### History events

- {{domxref("Window/hashchange_event", "hashchange")}}
  - : Fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the `#` symbol).
- {{domxref("Window/pagehide_event", "pagehide")}}
  - : Sent when the browser hides the current document while in the process of switching to displaying in its place a different document from the session's history. This happens, for example, when the user clicks the Back button or when they click the Forward button to move ahead in session history.
- {{domxref("Window.pagereveal_event", "pagereveal")}} {{experimental_inline}}
  - : Fired when a document is first rendered, either when loading a fresh document from the network or activating a document (either from [back/forward cache](/en-US/docs/Glossary/bfcache) (bfcache) or [prerender](/en-US/docs/Glossary/Prerender)).
- {{domxref("Window/pageshow_event", "pageshow")}}
  - : Sent when the browser makes the document visible due to navigation tasks, including not only when the page is first loaded, but also situations such as the user navigating back to the page after having navigated to another within the same tab.
- {{domxref("Window.pageswap_event", "pageswap")}} {{experimental_inline}}
  - : Fired when a document is about to be unloaded due to a navigation.
- {{domxref("Window/popstate_event", "popstate")}}
  - : Fired when the active history entry changes.

### Load & unload events

- {{domxref("Window/beforeunload_event", "beforeunload")}}
  - : Fired when the window, the document and its resources are about to be unloaded.
- {{domxref("Window/load_event", "load")}}
  - : Fired when the whole page has loaded, including all dependent resources such as stylesheets images.
- {{domxref("Window/unload_event", "unload")}} {{deprecated_inline}}
  - : Fired when the document or a child resource is being unloaded.

### Manifest events

- {{domxref("Window/appinstalled_event", "appinstalled")}}
  - : Fired when the browser has successfully installed a page as an application.
- {{domxref("Window/beforeinstallprompt_event", "beforeinstallprompt")}}
  - : Fired when a user is about to be prompted to install a web application.

### Messaging events

- {{domxref("Window/message_event", "message")}}
  - : Fired when the window receives a message, for example from a call to {{domxref("Window/postMessage", "Window.postMessage()")}} from another browsing context.
- {{domxref("Window/messageerror_event", "messageerror")}}
  - : Fired when a `Window` object receives a message that can't be deserialized.

### Print events

- {{domxref("Window/afterprint_event", "afterprint")}}
  - : Fired after the associated document has started printing or the print preview has been closed.
- {{domxref("Window/beforeprint_event", "beforeprint")}}
  - : Fired when the associated document is about to be printed or previewed for printing.

### Promise rejection events

- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
  - : Sent every time a JavaScript {{jsxref("Promise")}} is rejected, regardless of whether or not there is a handler in place to catch the rejection.
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
  - : Sent when a JavaScript {{jsxref("Promise")}} is rejected but there is no handler in place to catch the rejection.

### Deprecated events

- {{domxref("Window/orientationchange_event", "orientationchange")}} {{Deprecated_Inline}}
  - : Fired when the orientation of the device has changed.
- {{domxref("Window/vrdisplayactivate_event", "vrdisplayactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when a display is able to be presented to.
- {{domxref("Window/vrdisplayconnect_event", "vrdisplayconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when a compatible VR device has been connected to the computer.
- {{domxref("Window/vrdisplaydisconnect_event", "vrdisplaydisconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when a compatible VR device has been disconnected from the computer.
- {{domxref("Window/vrdisplaydeactivate_event", "vrdisplaydeactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when a display can no longer be presented to.
- {{domxref("Window/vrdisplaypresentchange_event", "vrdisplaypresentchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when the presenting state of a VR device changes — i.e. goes from presenting to not presenting, or vice versa.

## Interfaces

See [DOM Reference](/en-US/docs/Web/API/Document_Object_Model).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
