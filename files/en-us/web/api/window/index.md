---
title: Window
slug: Web/API/Window
tags:
  - API
  - Browser
  - HTML DOM
  - Interface
  - Reference
  - Tab
  - Window
  - global
  - global scope
  - scope
browser-compat: api.Window
---
{{APIRef("DOM")}}

The **`Window`** interface represents a window containing a {{glossary("DOM")}} document; the `document` property points to the [DOM document](/en-US/docs/Web/API/Document) loaded in that window.

A window for a given document can be obtained using the {{domxref("document.defaultView")}} property.

A global variable, `window`, representing the window in which the script is running, is exposed to JavaScript code.

The `Window` interface is home to a variety of functions, namespaces, objects, and constructors which are not necessarily directly associated with the concept of a user interface window. However, the `Window` interface is a suitable place to include these items that need to be globally available. Many of these are documented in the [JavaScript Reference](/en-US/docs/Web/JavaScript/Reference) and the [DOM Reference](/en-US/docs/Web/API/Document_Object_Model).

In a tabbed browser, each tab is represented by its own `Window` object; the global `window` seen by JavaScript code running within a given tab always represents the tab in which the code is running. That said, even in a tabbed browser, some properties and methods still apply to the overall window that contains the tab, such as {{Domxref("Window.resizeTo", "resizeTo()")}} and {{Domxref("Window.innerHeight", "innerHeight")}}. Generally, anything that can't reasonably pertain to a tab pertains to the window instead.

{{InheritanceDiagram}}

## Constructors

See also the [DOM Interfaces](/en-US/docs/Web/API/Document_Object_Model).

- {{domxref("DOMParser")}}
  - : `DOMParser` can parse XML or HTML source stored in a string into a DOM [Document](/en-US/docs/Web/API/Document). `DOMParser` is specified in [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/).
- {{domxref("HTMLImageElement.Image")}}
  - : Used for creating an {{domxref("HTMLImageElement")}}.
- {{domxref("HTMLOptionElement.Option")}}
  - : Used for creating an {{domxref("HTMLOptionElement")}}.
- {{domxref("StaticRange")}} {{experimental_inline}} {{readonlyinline}}
  - : Returns a {{domxref('StaticRange.StaticRange','StaticRange()')}} constructor which creates a {{domxref('StaticRange')}} object.
- {{domxref("Worker")}}
  - : Used for creating a [Web worker.](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("XMLSerializer")}}
  - : Converts a DOM tree into XML or HTML source.

## Properties

_This interface inherits properties from the {{domxref("EventTarget")}} interface and implements properties from the `WindowOrWorkerGlobalScope` and {{domxref("WindowEventHandlers")}} mixins._

Note that properties which are objects (e.g.,. for overriding the prototype of built-in elements) are listed in a separate section below.

- {{domxref("Window.navigator", "Window.clientInformation")}} {{readOnlyInline}}
  - : An alias for {{domxref("Window.navigator")}}.
- {{domxref("Window.closed")}} {{readOnlyInline}}
  - : This property indicates whether the current window is closed or not.
- {{domxref("Window.console")}} {{ReadOnlyInline}}
  - : Returns a reference to the console object which provides access to the browser's debugging console.
- {{domxref("Window.customElements")}} {{ReadOnlyInline}}
  - : Returns a reference to the {{domxref("CustomElementRegistry")}} object, which can be used to register new [custom elements](/en-US/docs/Web/Web_Components/Using_custom_elements) and get information about previously registered custom elements.
- {{domxref("crypto_property", "Window.crypto")}} {{readOnlyInline}}
  - : Returns the browser crypto object.
- {{domxref("Window.devicePixelRatio")}} {{ReadOnlyInline}}
  - : Returns the ratio between physical pixels and device independent pixels in the current display.
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : Returns a reference to the document that the window contains.
- {{domxref("Window.DOMMatrix")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMMatrix")}} object, which represents 4x4 matrices, suitable for 2D and 3D operations.
- {{domxref("Window.DOMMatrixReadOnly")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMMatrixReadOnly")}} object, which represents 4x4 matrices, suitable for 2D and 3D operations.
- {{domxref("Window.DOMPoint")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMPoint")}} object, which represents a 2D or 3D point in a coordinate system.
- {{domxref("Window.DOMPointReadOnly")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMPointReadOnly")}} object, which represents a 2D or 3D point in a coordinate system.
- {{domxref("Window.DOMQuad")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMQuad")}} object, which provides represents a quadrilaterial object, that is one having four corners and four sides.
- {{domxref("Window.DOMRect")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMRect")}} object, which represents a rectangle.
- {{domxref("Window.DOMRectReadOnly")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMRectReadOnly")}} object, which represents a rectangle.
- {{domxref("Window.event")}} {{deprecated_inline}} {{readOnlyInline}}
  - : Returns the **current event**, which is the event currently being handled by the JavaScript code's context, or `undefined` if no event is currently being handled. The {{domxref("Event")}} object passed directly to event handlers should be used instead whenever possible.
- {{domxref("Window.frameElement")}} {{readOnlyInline}}
  - : Returns the element in which the window is embedded, or null if the window is not embedded.
- {{domxref("Window.frames")}} {{readOnlyInline}}
  - : Returns an array of the subframes in the current window.
- {{domxref("Window.fullScreen")}}
  - : This property indicates whether the window is displayed in full screen or not.
- {{domxref("Window.history")}} {{readOnlyInline}}
  - : Returns a reference to the history object.
- {{domxref("Window.innerHeight")}} {{readOnlyInline}}
  - : Gets the height of the content area of the browser window including, if rendered, the horizontal scrollbar.
- {{domxref("Window.innerWidth")}} {{readOnlyInline}}
  - : Gets the width of the content area of the browser window including, if rendered, the vertical scrollbar.
- {{domxref("isSecureContext")}} {{experimental_inline}} {{readOnlyInline}}
  - : Indicates whether a context is capable of using features that require secure contexts.
- {{domxref("Window.length")}} {{readOnlyInline}}
  - : Returns the number of frames in the window. See also {{domxref("window.frames")}}.
- {{domxref("Window.location")}}
  - : Gets/sets the location, or current URL, of the window object.
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : Returns the locationbar object, whose visibility can be toggled in the window.
- {{domxref("Window.localStorage")}} {{readOnlyInline}}
  - : Returns a reference to the local storage object used to store data that may only be accessed by the origin that created it.
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : Returns the menubar object, whose visibility can be toggled in the window.
- {{domxref("Window.messageManager")}} {{non-standard_inline}}
  - : Returns the [message manager](/en-US/docs/The_message_manager) object for this window.
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Returns the horizontal (X) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See `mozScreenPixelsPerCSSPixel` in {{interface("nsIDOMWindowUtils")}} for a conversion factor to adapt to screen pixels if needed.
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Returns the vertical (Y) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See `mozScreenPixelsPerCSSPixel` for a conversion factor to adapt to screen pixels if needed.
- {{domxref("Window.name")}}
  - : Gets/sets the name of the window.
- {{domxref("Window.navigator")}} {{readOnlyInline}}
  - : Returns a reference to the navigator object.
- {{domxref("Window.opener")}}
  - : Returns a reference to the window that opened this current window.
- {{domxref("Window.outerHeight")}} {{readOnlyInline}}
  - : Gets the height of the outside of the browser window.
- {{domxref("Window.outerWidth")}} {{readOnlyInline}}
  - : Gets the width of the outside of the browser window.
- {{domxref("Window.scrollX","Window.pageXOffset")}} {{readOnlyInline}}
  - : An alias for {{domxref("window.scrollX")}}.
- {{domxref("Window.scrollY","Window.pageYOffset")}} {{readOnlyInline}}
  - : An alias for {{domxref("window.scrollY")}}
- {{domxref("Window.parent")}} {{readOnlyInline}}
  - : Returns a reference to the parent of the current window or subframe.
- {{domxref("Window.performance")}} {{readOnlyInline}}
  - : Returns a {{domxref("Performance")}} object, which includes the {{domxref("Performance.timing", "timing")}} and {{domxref("Performance.navigation", "navigation")}} attributes, each of which is an object providing [performance-related](/en-US/docs/Web/API/Navigation_timing_API) data. See also [Using Navigation Timing](/en-US/docs/Web/API/Navigation_timing_API/Using_Navigation_Timing) for additional information and examples.
- {{domxref("Window.personalbar")}} {{readOnlyInline}}
  - : Returns the personalbar object, whose visibility can be toggled in the window.
- {{domxref("Window.screen")}} {{readOnlyInline}}
  - : Returns a reference to the screen object associated with the window.
- {{domxref("Window.screenX")}} and {{domxref("Window.screenLeft")}} {{readOnlyInline}}
  - : Both properties return the horizontal distance from the left border of the user's browser viewport to the left side of the screen.
- {{domxref("Window.screenY")}} and {{domxref("Window.screenTop")}} {{readOnlyInline}}
  - : Both properties return the vertical distance from the top border of the user's browser viewport to the top side of the screen.
- {{domxref("Window.scrollbars")}} {{readOnlyInline}}
  - : Returns the scrollbars object, whose visibility can be toggled in the window.
- {{domxref("Window.scrollMaxX")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : The maximum offset that the window can be scrolled to horizontally, that is the document width minus the viewport width.
- {{domxref("Window.scrollMaxY")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : The maximum offset that the window can be scrolled to vertically (i.e., the document height minus the viewport height).
- {{domxref("Window.scrollX")}} {{readOnlyInline}}
  - : Returns the number of pixels that the document has already been scrolled horizontally.
- {{domxref("Window.scrollY")}} {{readOnlyInline}}
  - : Returns the number of pixels that the document has already been scrolled vertically.
- {{domxref("Window.self")}} {{ReadOnlyInline}}
  - : Returns an object reference to the window object itself.
- {{domxref("Window.sessionStorage")}}
  - : Returns a reference to the session storage object used to store data that may only be accessed by the origin that created it.
- {{domxref("Window.sidebar")}} {{deprecated_inline}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : Returns a reference to the window object of the sidebar.
- {{domxref("Window.speechSynthesis")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("SpeechSynthesis")}} object, which is the entry point into using [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) speech synthesis functionality.
- {{domxref("Window.status")}} {{deprecated_inline}}
  - : Gets/sets the text in the statusbar at the bottom of the browser.
- {{domxref("Window.statusbar")}} {{readOnlyInline}}
  - : Returns the statusbar object, whose visibility can be toggled in the window.
- {{domxref("Window.toolbar")}} {{readOnlyInline}}
  - : Returns the toolbar object, whose visibility can be toggled in the window.
- {{domxref("Window.top")}} {{readOnlyInline}}
  - : Returns a reference to the topmost window in the window hierarchy. This property is read only.
- {{domxref("Window.visualViewport")}} {{readOnlyInline}}
  - : Returns a {{domxref("VisualViewport")}} object which represents the visual viewport for a given window.
- {{domxref("Window.window")}} {{ReadOnlyInline}}
  - : Returns a reference to the current window.
- `window[0]`, `window[1]`, etc.
  - : Returns a reference to the `window` object in the frames. See {{domxref("Window.frames")}} for more details.

### Properties implemented from elsewhere

- {{domxref("caches")}} {{readOnlyinline}}
  - : Returns the {{domxref("CacheStorage")}} object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.
- {{domxref("indexedDB")}} {{readonlyInline}}
  - : Provides a mechanism for applications to asynchronously access capabilities of indexed databases; returns an {{domxref("IDBFactory")}} object.
- {{domxref("isSecureContext")}} {{readOnlyinline}}
  - : Returns a boolean indicating whether the current context is secure (`true`) or not (`false`).
- {{domxref("origin")}} {{readOnlyinline}}
  - : Returns the global object's origin, serialized as a string. (This does not yet appear to be implemented in any browser.)

### Deprecated properties

- {{domxref("Window.content")}} and `Window._content` {{Non-standard_inline}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : Returns a reference to the content element in the current window. Since Firefox 57 (initially Nightly-only), both versions are only available from chrome (privileged) code, and not available to the web anymore.
- {{domxref("Window.defaultStatus")}} {{deprecated_inline}}
  - : Gets/sets the status bar text for the given window.
- {{domxref("Window.dialogArguments")}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : Gets the arguments passed to the window (if it's a dialog box) at the time {{domxref("window.showModalDialog()")}} was called. This is an {{Interface("nsIArray")}}.
- {{domxref("Window.mozPaintCount")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Returns the number of times the current document has been rendered to the screen in this window. This can be used to compute rendering performance.
- {{domxref("Window.orientation")}} {{readOnlyInline}} {{deprecated_inline}}
  - : Returns the orientation in degrees (in 90 degree increments) of the viewport relative to the device's natural orientation.
- {{domxref("Window.returnValue")}} {{deprecated_inline}}
  - : The return value to be returned to the function that called {{domxref("window.showModalDialog()")}} to display the window as a modal dialog.

## Methods

_This interface inherits methods from the {{domxref("EventTarget")}} interface and implements methods from `WindowOrWorkerGlobalScope` and {{domxref("EventTarget")}}._

- {{domxref("Window.alert()")}}
  - : Displays an alert dialog.
- {{domxref("Window.blur()")}}
  - : Sets focus away from the window.
- {{domxref("Window.cancelAnimationFrame()")}} {{experimental_inline}}
  - : Enables you to cancel a callback previously scheduled with {{domxref("Window.requestAnimationFrame")}}.
- {{domxref("Window.cancelIdleCallback()")}} {{experimental_inline}}
  - : Enables you to cancel a callback previously scheduled with {{domxref("Window.requestIdleCallback")}}.
- {{domxref("Window.clearImmediate()")}}
  - : Cancels the repeated execution set using `setImmediate`.
- {{domxref("Window.close()")}}
  - : Closes the current window.
- {{domxref("Window.confirm()")}}
  - : Displays a dialog with a message that the user needs to respond to.
- {{domxref("Window.dump()")}} {{Non-standard_inline}}
  - : Writes a message to the console.
- {{domxref("Window.find()")}}
  - : Searches for a given string in a window.
- {{domxref("Window.focus()")}}
  - : Sets focus on the current window.
- {{domxref("Window.getComputedStyle()")}}
  - : Gets computed style for the specified element. Computed style indicates the computed values of all CSS properties of the element.
- {{domxref("Window.getDefaultComputedStyle()")}} {{Non-standard_inline}}
  - : Gets default computed style for the specified element, ignoring author stylesheets.
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
- {{domxref("Window.requestAnimationFrame()")}}
  - : Tells the browser that an animation is in progress, requesting that the browser schedule a repaint of the window for the next animation frame.
- {{domxref("Window.requestIdleCallback()")}} {{experimental_inline}}
  - : Enables the scheduling of tasks during a browser's idle periods.
- {{domxref("Window.resizeBy()")}}
  - : Resizes the current window by a certain amount.
- {{domxref("Window.resizeTo()")}}
  - : Dynamically resizes window.
- {{domxref("Window.scroll()")}}
  - : Scrolls the window to a particular place in the document.
- {{domxref("Window.scrollBy()")}}
  - : Scrolls the document in the window by the given amount.
- {{domxref("Window.scrollByLines()")}} {{Non-standard_inline}}
  - : Scrolls the document by the given number of lines.
- {{domxref("Window.scrollByPages()")}} {{Non-standard_inline}}
  - : Scrolls the current document by the specified number of pages.
- {{domxref("Window.scrollTo()")}}
  - : Scrolls to a particular set of coordinates in the document.
- {{domxref("Window.setImmediate()")}}
  - : Executes a function after the browser has finished other heavy tasks
- {{domxref("Window.setResizable()")}} {{Non-standard_inline}}
  - : Toggles a user's ability to resize a window.
- {{domxref("Window.sizeToContent()")}} {{Non-standard_inline}}
  - : Sizes the window according to its content.
- {{domxref("Window.showOpenFilePicker()")}}
  - : Shows a file picker that allows a user to select a file or multiple files.
- {{domxref("Window.showSaveFilePicker()")}}
  - : Shows a file picker that allows a user to save a file.
- {{domxref("Window.showDirectoryPicker()")}}
  - : Displays a directory picker which allows the user to select a directory.
- {{domxref("Window.stop()")}}
  - : This method stops window loading.
- {{domxref("Window.updateCommands()")}} {{Non-standard_inline}}
  - : Updates the state of commands of the current chrome window (UI).

### Methods implemented from elsewhere

- {{domxref("EventTarget.addEventListener()")}}
  - : Register an event handler to a specific event type on the window.
- {{domxref("EventTarget.dispatchEvent()")}}
  - : Used to trigger an event.
- {{domxref("atob", "atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("btoa", "btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("setInterval()")}}.
- {{domxref("clearTimeout()")}}
  - : Cancels the delayed execution set using {{domxref("setTimeout()")}}.
- {{domxref("createImageBitmap()")}}
  - : Accepts a variety of different image sources, and returns a {{jsxref("Promise")}} which resolves to an {{domxref("ImageBitmap")}}. Optionally the source is cropped to the rectangle of pixels originating at _(sx, sy)_ with width sw, and height sh.
- {{domxref("fetch()")}}
  - : Starts the process of fetching a resource from the network.
- {{domxref("EventTarget.removeEventListener")}}
  - : Removes an event listener from the window.
- {{domxref("setInterval()")}}
  - : Schedules a function to execute every time a given number of milliseconds elapses.
- {{domxref("setTimeout()")}}
  - : Schedules a function to execute in a given amount of time.
- {{domxref("reportError()")}}
  - : Reports an error in a script, emulating an unhandled exception.


### Deprecated methods

- {{domxref("Window.back()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Moves back one in the window history. This method is deprecated; you should instead use {{domxref("History.back", "window.history.back()")}}.
- {{domxref("Window.captureEvents()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Registers the window to capture all events of the specified type.
- {{domxref("Window.forward()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Moves the window one document forward in the history. This method is deprecated; you should instead use {{domxref("History.forward", "window.history.forward()")}}.
- {{domxref("Window.home()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Returns the browser to the home page.
- {{domxref("Window.openDialog()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Opens a new dialog window.
- {{domxref("Window.releaseEvents()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Releases the window from trapping events of a specific type.
- {{domxref("Window.showModalDialog()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Displays a modal dialog.

## Event handlers

These are properties of the window object that can be set to establish event handlers for the various things that can happen in the window that might be of interest.

_This interface inherits event handlers from the {{domxref("EventTarget")}} interface and implements event handlers from {{domxref("WindowEventHandlers")}}._

- {{domxref("Window.onappinstalled")}} {{deprecated_inline}}
  - : Called when the page is installed as a webapp. See {{domxref("Window/appinstalled_event", "appinstalled")}} event.
- {{domxref("Window.onbeforeinstallprompt")}} {{non-standard_inline}}
  - : An event handler property dispatched before a user is prompted to save a web site to a home screen on mobile.
- {{domxref("Window.ondevicemotion")}}
  - : Called if accelerometer detects a change (For mobile devices)
- {{domxref("Window.ondeviceorientation")}}
  - : Called when the orientation is changed (For mobile devices)
- {{domxref("Window.ondeviceorientationabsolute")}} {{non-standard_inline}}
  - : An event handler property for any device orientation changes.
- `Window.ondeviceproximity` {{deprecated_inline}}
  - : An event handler property for device proximity event (see {{domxref("DeviceProximityEvent")}})
- {{domxref("Window.ongamepadconnected")}}
  - : Represents an event handler that will run when a gamepad is connected (when the {{event('gamepadconnected')}} event fires).
- {{domxref("Window.ongamepaddisconnected")}}
  - : Represents an event handler that will run when a gamepad is disconnected (when the {{event('gamepaddisconnected')}} event fires).
- {{domxref("WindowEventHandlers.onrejectionhandled")}}
  - : An event handler for handled {{jsxref("Promise")}} rejection events.
- `Window.onuserproximity` {{deprecated_inline}}
  - : An event handler property for user proximity events (see {{domxref("UserProximityEvent")}}).
- {{domxref("Window.onvrdisplayconnect")}} {{deprecated_inline}}
  - : Represents an event handler that will run when a compatible VR device has been connected to the computer (when the {{event("vrdisplayconnected")}} event fires).
- {{domxref("Window.onvrdisplaydisconnect")}} {{deprecated_inline}}
  - : Represents an event handler that will run when a compatible VR device has been disconnected from the computer (when the {{event("vrdisplaydisconnected")}} event fires).
- {{domxref("Window.onvrdisplayactivate")}} {{deprecated_inline}}
  - : Represents an event handler that will run when a display is able to be presented to (when the {{event("vrdisplayactivate")}} event fires), for example if an HMD has been moved to bring it out of standby, or woken up by being put on.
- {{domxref("Window.onvrdisplaydeactivate")}} {{deprecated_inline}}
  - : Represents an event handler that will run when a display can no longer be presented to (when the {{event("vrdisplaydeactivate")}} event fires), for example if an HMD has gone into standby or sleep mode due to a period of inactivity.
- {{domxref("Window.onvrdisplayblur")}} {{deprecated_inline}}
  - : Represents an event handler that will run when presentation to a display has been paused for some reason by the browser, OS, or VR hardware (when the {{event("vrdisplayblur")}} event fires) — for example, while the user is interacting with a system menu or browser, to prevent tracking or loss of experience.
- {{domxref("Window.onvrdisplayfocus")}} {{deprecated_inline}}
  - : Represents an event handler that will run when presentation to a display has resumed after being blurred (when the {{event("vrdisplayfocus")}} event fires).
- {{domxref("Window.onvrdisplaypresentchange")}} {{deprecated_inline}}
  - : represents an event handler that will run when the presenting state of a VR device changes — i.e. goes from presenting to not presenting, or vice versa (when the {{event("vrdisplaypresentchange")}} event fires).

### Event handlers implemented from elsewhere

- {{domxref("GlobalEventHandlers.onabort")}}
  - : Called when the loading of a resource has been aborted, such as by a user canceling the load while it is still in progress
- {{domxref("WindowEventHandlers.onafterprint")}}
  - : Called when the print dialog box is closed. See {{event("afterprint")}} event.
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : Called when the print dialog box is opened. See {{event("beforeprint")}} event.
- {{domxref("WindowEventHandlers.onbeforeunload")}}
  - : An event handler property for before-unload events on the window.
- {{domxref("GlobalEventHandlers.onblur")}}
  - : Called after the window loses focus, such as due to a popup.
- {{domxref("GlobalEventHandlers.onchange")}}
  - : An event handler property for change events on the window.
- {{domxref("GlobalEventHandlers.onclick")}}
  - : Called after the ANY mouse button is pressed & released
- {{domxref("GlobalEventHandlers.ondblclick")}}
  - : Called when a double click is made with ANY mouse button.
- {{domxref("GlobalEventHandlers.onclose")}}
  - : Called after the window is closed
- {{domxref("GlobalEventHandlers.oncontextmenu")}}
  - : Called when the RIGHT mouse button is pressed
- {{domxref("GlobalEventHandlers.onerror")}}
  - : Called when a resource fails to load OR when an error occurs at runtime. See {{event("error")}} event.
- {{domxref("GlobalEventHandlers.onfocus")}}
  - : Called after the window receives or regains focus. See {{event("focus")}} events.
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : An event handler property for {{event('hashchange')}} events on the window; called when the part of the URL after the hash mark ("#") changes.
- {{domxref("GlobalEventHandlers.oninput")}}
  - : Called when the value of an \<input> element changes
- {{domxref("GlobalEventHandlers.onkeydown")}}
  - : Called when you begin pressing ANY key. See {{event("keydown")}} event.
- {{domxref("GlobalEventHandlers.onkeypress")}}
  - : Called when a key (except Shift, Fn, and CapsLock) is in pressed position. See {{event("keypress")}} event.
- {{domxref("GlobalEventHandlers.onkeyup")}}
  - : Called when you finish releasing ANY key. See {{event("keyup")}} event.
- {{domxref("WindowEventHandlers.onlanguagechange")}}
  - : An event handler property for {{event("languagechange")}} events on the window.
- {{domxref("GlobalEventHandlers.onload")}}
  - : Called after all resources and the DOM are fully loaded. WILL NOT get called when the page is loaded from cache, such as with back button.
- {{domxref("WindowEventHandlers.onmessage")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("message")}} event is raised.
- {{domxref("GlobalEventHandlers.onmousedown")}}
  - : Called when ANY mouse button is pressed.
- {{domxref("GlobalEventHandlers.onmousemove")}}
  - : Called continously when the mouse is moved inside the window.
- {{domxref("GlobalEventHandlers.onmouseout")}}
  - : Called when the pointer leaves the window.
- {{domxref("GlobalEventHandlers.onmouseover")}}
  - : Called when the pointer enters the window
- {{domxref("GlobalEventHandlers.onmouseup")}}
  - : Called when ANY mouse button is released
- {{domxref("WindowEventHandlers.onoffline")}}
  - : Called when network connection is lost. See {{event("offline")}} event.
- {{domxref("WindowEventHandlers.ononline")}}
  - : Called when network connection is established. See {{event("online")}} event.
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : Called when the user navigates away from the page, before the onunload event. See {{event("pagehide")}} event.
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : Called after all resources and the DOM are fully loaded. See {{event("pageshow")}} event.
- {{domxref("WindowEventHandlers.onpopstate")}}
  - : Called when a back button is pressed.
- {{domxref("GlobalEventHandlers.onreset")}}
  - : Called when a form is reset
- {{domxref("GlobalEventHandlers.onresize")}}
  - : Called continuously as you are resizing the window.
- {{domxref("GlobalEventHandlers.onscroll")}}
  - : Called when the scroll bar is moved via ANY means. If the resource fully fits in the window, then this event cannot be invoked
- {{domxref("GlobalEventHandlers.onwheel")}}
  - : Called when the mouse wheel is rotated around any axis
- {{domxref("GlobalEventHandlers.onselect")}}
  - : Called after text in an input field is selected
- {{domxref("GlobalEventHandlers.onselectionchange")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("selectionchange")}} event is raised.
- {{domxref("WindowEventHandlers.onstorage")}}
  - : Called when there is a change in session storage or local storage. See {{event("storage")}} event
- {{domxref("GlobalEventHandlers.onsubmit")}}
  - : Called when a form is submitted
- {{domxref("WindowEventHandlers.onunhandledrejection")}} {{experimental_inline}}
  - : An event handler for unhandled {{jsxref("Promise")}} rejection events.
- {{domxref("WindowEventHandlers.onunload")}}
  - : Called when the user navigates away from the page.

## Events

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("Window/error_event", "error")}}
  - : Fired when a resource failed to load, or can't be used. For example, if a script has an execution error or an image can't be found or is invalid.
    Also available via the {{domxref("GlobalEventHandlers/onerror", "onerror")}} property.
- {{domxref("Window/languagechange_event", "languagechange")}}
  - : Fired at the global scope object when the user's preferred language changes.
    Also available via the {{domxref("WindowEventHandlers/onlanguagechange", "onlanguagechange")}} property.
- {{domxref("Window/orientationchange_event", "orientationchange")}} {{deprecated_inline}}
  - : Fired when the orientation of the device has changed.
    Also available via the {{domxref("Window/onorientationchange", "onorientationchange")}} property.
- {{domxref("Window/devicemotion_event", "devicemotion")}}
  - : Fired at a regular interval, indicating the amount of physical force of acceleration the device is receiving and the rate of rotation, if available.
- {{domxref("Window/deviceorientation_event", "deviceorientation")}}
  - : Fired when fresh data is available from the magnetometer orientation sensor about the current orientation of the device as compared to the Earth coordinate frame.
- {{domxref("Window/resize_event", "resize")}}
  - : Fired when the window has been resized.
    Also available via the {{domxref("GlobalEventHandlers/onresize", "onresize")}} property.
- {{domxref("Window/storage_event", "storage")}}
  - : Fired when a storage area (`localStorage` or `sessionStorage`) has been modified in the context of another document.
    Also available via the {{domxref("WindowEventHandlers/onstorage", "onstorage")}} property.

### Animation events

- {{domxref("Window/animationcancel_event", "animationcancel")}}
  - : Fired when an animation unexpectedly aborts.
    Also available via the {{domxref("GlobalEventHandlers/onanimationcancel", "onanimationcancel")}} property.
- {{domxref("Window/animationend_event", "animationend")}}
  - : Fired when an animation has completed normally.
    Also available via the {{domxref("GlobalEventHandlers/onanimationend", "onanimationend")}} property.
- {{domxref("Window/animationiteration_event", "animationiteration")}}
  - : Fired when an animation iteration has completed.
    Also available via the {{domxref("GlobalEventHandlers/onanimationiteration", "onanimationiteration")}} property.
- {{domxref("Window/animationstart_event", "animationstart")}}
  - : Fired when an animation starts.
    Also available via the {{domxref("GlobalEventHandlers/onanimationstart", "onanimationstart")}} property.

### Clipboard events

- {{domxref("Window/copy_event", "copy")}}
  - : Fired when the user initiates a copy action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/oncopy", "oncopy")}} property.
- {{domxref("Window/cut_event", "cut")}}
  - : Fired when the user initiates a cut action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/oncut", "oncut")}} property.
- {{domxref("Window/paste_event", "paste")}}
  - : Fired when the user initiates a paste action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/onpaste", "onpaste")}} property.

### Connection events

- {{domxref("Window/offline_event", "offline")}}
  - : Fired when the browser has lost access to the network and the value of `navigator.onLine` has switched to `false`.
    Also available via the {{domxref("WindowEventHandlers.onoffline", "onoffline")}} property.
- {{domxref("Window/online_event", "online ")}}
  - : Fired when the browser has gained access to the network and the value of `navigator.onLine` has switched to `true`.
    Also available via the {{domxref("WindowEventHandlers.ononline", "ononline")}} property.

### Focus events

- {{domxref("Window/blur_event", "blur")}}
  - : Fired when an element has lost focus.
    Also available via the {{domxref("GlobalEventHandlers/onblur", "onblur")}} property.
- {{domxref("Window/focus_event", "focus")}}
  - : Fired when an element has gained focus.
    Also available via the {{domxref("GlobalEventHandlers/onfocus", "onfocus")}} property

### Gamepad events

- {{domxref("Window/gamepadconnected_event", "gamepadconnected")}}
  - : Fired when the browser detects that a gamepad has been connected or the first time a button/axis of the gamepad is used.
    Also available via the {{domxref("Window/ongamepadconnected", "ongamepadconnected")}} property.
- {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}}
  - : Fired when the browser detects that a gamepad has been disconnected.
    Also available via the {{domxref("Window/ongamepaddisconnected", "ongamepaddisconnected")}} property

### History events

- {{domxref("Window/hashchange_event", "hashchange")}}
  - : Fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the `#` symbol).
    Also available via the {{domxref("WindowEventHandlers/onhashchange", "onhashchange")}} property.
- {{domxref("Window/pagehide_event", "pagehide")}}
  - : Sent when the browser hides the current document while in the process of switching to displaying in its place a different document from the session's history. This happens, for example, when the user clicks the Back button or when they click the Forward button to move ahead in session history.
    Also available through the [`onpagehide`](/en-US/docs/Mozilla/Tech/XUL/Attribute/onpagehide) event handler property.
- {{domxref("Window/pageshow_event", "pageshow")}}
  - : Sent when the browser makes the document visible due to navigation tasks, including not only when the page is first loaded, but also situations such as the user navigating back to the page after having navigated to another within the same tab.
    Also available using the [`onpageshow`](/en-US/docs/Mozilla/Tech/XUL/Attribute/onpageshow) event handler property.
- `{{domxref("Window/popstate_event", "popstate")}}`
  - : Fired when the active history entry changes.
    Also available using the {{domxref("WindowEventHandlers/onpopstate", "onpopstate")}} event handler property.

### Load & unload events

- {{domxref("Window/beforeunload_event", "beforeunload")}}
  - : Fired when the window, the document and its resources are about to be unloaded.
    Also available via the {{domxref("WindowEventHandlers/onbeforeunload", "onbeforeunload")}} property.
- {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}
  - : Fired when the document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
- {{domxref("Window/load_event", "load")}}
  - : Fired when the whole page has loaded, including all dependent resources such as stylesheets images.
    Also available via the {{domxref("GlobalEventHandlers/onload", "onload")}} property.
- {{domxref("Window/unload_event", "unload")}}
  - : Fired when the document or a child resource is being unloaded.
    Also available via the {{domxref("WindowEventHandlers/onunload", "onunload")}} property.

### Manifest events

- {{domxref("Window/appinstalled_event", "appinstalled")}}
  - : Fired when the browser has successfully installed a page as an application.
    Also available via the {{domxref("Window/onappinstalled", "onappinstalled")}} property.
- {{domxref("Window/beforeinstallprompt_event", "beforeinstallprompt")}}
  - : Fired when a user is about to be prompted to install a web application.
    Also available via the {{domxref("Window/onbeforeinstallprompt", "onbeforeinstallprompt")}} property.

### Messaging events

- {{domxref("Window/message_event", "message")}}
  - : Fired when the window receives a message, for example from a call to {{domxref("Window/postMessage", "Window.postMessage()")}} from another browsing context.
    Also available via the {{domxref("WindowEventHandlers/onmessage", "onmessage")}} property.
- {{domxref("Window/messageerror_event", "messageerror")}}
  - : Fired when a `Window` object receives a message that can't be deserialized.
    Also available via the {{domxref("WindowEventHandlers/onmessageerror", "onmessageerror")}} property.

### Print events

- {{domxref("Window/afterprint_event", "afterprint")}}
  - : Fired after the associated document has started printing or the print preview has been closed.
    Also available via the {{domxref("WindowEventHandlers/onafterprint", "onafterprint")}} property.
- {{domxref("Window/beforeprint_event", "beforeprint")}}
  - : Fired when the associated document is about to be printed or previewed for printing.
    Also available via the {{domxref("WindowEventHandlers/onbeforeprint", "onbeforeprint")}} property.

### Promise rejection events

- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
  - : Sent every time a JavaScript {{jsxref("Promise")}} is rejected, regardless of whether or not there is a handler in place to catch the rejection.
    Also available through the {{domxref("WindowEventHandlers/onrejectionhandled", "onrejectionhandled")}} event handler property.
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
  - : Sent when a JavaScript {{jsxref("Promise")}} is rejected but there is no handler in place to catch the rejection.
    Also available using the {{domxref("WindowEventHandlers/onunhandledrejection", "onunhandledrejection")}} event handler property.

### Transition events

- {{domxref("Window/transitioncancel_event", "transitioncancel")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) is canceled.
    Also available via the {{domxref("GlobalEventHandlers/ontransitioncancel", "ontransitioncancel")}} property.
- {{domxref("Window/transitionend_event", "transitionend")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has completed.
    Also available via the {{domxref("GlobalEventHandlers/ontransitionend", "ontransitionend")}} property.
- {{domxref("Window/transitionrun_event", "transitionrun")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) is first created.
    Also available via the {{domxref("GlobalEventHandlers/ontransitionrun", "ontransitionrun")}} property.
- {{domxref("Window/transitionstart_event", "transitionstart")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has actually started.
    Also available via the {{domxref("GlobalEventHandlers/ontransitionstart", "ontransitionstart")}} property.

### WebVR events

- {{domxref("Window/vrdisplayactivate_event", "vrdisplayactivate")}}
  - : Fired when a VR display becomes available to be presented to, for example if an HMD has been moved to bring it out of standby, or woken up by being put on.
    Also available via the {{domxref("Window/onvrdisplayactivate", "onvrdisplayactivate")}} property.
- {{domxref("Window/vrdisplayblur_event", "vrdisplayblur")}}
  - : Fired when presentation to a VR display has been paused for some reason by the browser, OS, or VR hardware.
    Also available via the {{domxref("Window/onvrdisplayblur", "onvrdisplayblur")}} property.
- {{domxref("Window/vrdisplayconnect_event", "vrdisplayconnect")}}
  - : Fired when a compatible VR display is connected to the computer.
    Also available via the {{domxref("Window/onvrdisplayconnect", "onvrdisplayconnect")}} property.
- {{domxref("Window/vrdisplaydeactivate_event", "vrdisplaydeactivate")}}
  - : Fired when a VR display can no longer be presented to, for example if an HMD has gone into standby or sleep mode due to a period of inactivity.
    Also available via the {{domxref("Window/onvrdisplaydeactivate", "onvrdisplaydeactivate")}} property.
- {{domxref("Window/vrdisplaydisconnect_event", "vrdisplaydisconnect")}}
  - : Fired when a compatible VR display is disconnected from the computer.
    Also available via the {{domxref("Window/onvrdisplaydisconnect", "onvrdisplaydisconnect")}} property.
- {{domxref("Window/vrdisplayfocus_event", "vrdisplayfocus")}}
  - : Fired when presentation to a VR display has resumed after being blurred.
    Also available via the {{domxref("Window/onvrdisplayfocus", "onvrdisplayfocus")}} property.
- {{domxref("Window/vrdisplaypresentchange_event", "vrdisplaypresentchange")}}
  - : Fired when the presenting state of a VR display changes — i.e. goes from presenting to not presenting, or vice versa.
    Also available via the {{domxref("Window/onvrdisplaypresentchange", "onvrdisplaypresentchange")}} property.
- {{domxref("Window/vrdisplaypointerrestricted_event", "vrdisplaypointerrestricted")}}
  - : Fired when the VR display's pointer input is restricted to consumption via a [pointerlocked element](/en-US/docs/Web/API/Pointer_Lock_API).
    Also available via the {{domxref("Window/onvrdisplaypointerrestricted", "onvrdisplaypointerrestricted")}} property.
- {{domxref("Window/vrdisplaypointerunrestricted_event", "vrdisplaypointerunrestricted")}}
  - : Fired when the VR display's pointer input is no longer restricted to consumption via a [pointerlocked element](/en-US/docs/Web/API/Pointer_Lock_API).
    Also available via the {{domxref("Window/onvrdisplaypointerunrestricted", "onvrdisplaypointerunrestricted")}} property.

## Interfaces

See [DOM Reference](/en-US/docs/Web/API/Document_Object_Model).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
