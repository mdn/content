---
title: User input and controls
slug: Web/Guide/User_input_methods
page-type: guide
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("/en-US/docs/Web/Guide")}}
</section>

Modern web user input goes beyond simple mouse and keyboard: think of touchscreens for example. This article provides recommendations for managing user input and implementing controls in open web apps, along with FAQs, real-world examples, and links to further information for anyone needing more detailed information on the underlying technologies. Relevant APIs and events include [touch events](/en-US/docs/Web/API/Touch_events), [Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API), [Screen Orientation API](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation), [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API), [Drag & Drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API) and more.

## User input and controls workflow

The following diagram illustrates the typical workflow for implementing user input mechanisms:

![Flowchart of user input and controls workflow. The first step is to decide what input mechanism you're using, and the second step is to implement controls.](user-input-and-controls.png)

First of all, you need to decide which input mechanisms you want to cover in your application out of mouse, keyboard, finger touch and so on. Once you decided the input mechanisms, you can control them using tools offered by the web platform or JavaScript libraries.

## Recommendations

Available input mechanisms depend on the capabilities of the device running the application:

- Some devices provide touchscreen displays: the Web Platform offers [touch events](/en-US/docs/Web/API/Touch_events) to interpret finger activity on touch-based user interfaces.
- For devices providing a mouse/touchpad as a pointing method, the [Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API) helps you in implementing a first-person 3D game or other applications requiring full control of the pointing device. And the [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API) helps you in displaying your app in fullscreen mode.
- Using features such as [contentEditable](/en-US/docs/Web/HTML/Global_attributes/contenteditable) elements you can implement fast rich-text editors and with [Drag\&Drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API) let users moving elements inside your app. When screen orientation matters for your application, through the [Screen Orientation API](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) you can read the screen orientation state and perform other actions.
- You should always be mindful of keyboard accessibility where appropriate — many web users only use keyboard to navigate websites and apps, and locking them out of your functionality is a bad idea.

The following is a set of recommendations and best practices for using such tools in Open Web Apps.

### Decide what input mechanism you're using

#### Keyboard

Keyboard input can be controlled by your app. For example if you want to add controls when any key gets pressed, you need to add an event listener on the window object:

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

where `handleKeyDown` and `handleKeyUp` are the functions implementing the controls about the `keydown` and `keyup` events.

> **Note:** Have a look at the [Events reference](/en-US/docs/Web/Events) and {{domxref("KeyboardEvent")}} guide to find out more about keyboard events.

#### Mouse

The events occurring when the user interacts with a pointing device such as a mouse are represented by the {{domxref("MouseEvent")}} DOM Interface. Common mouse events include [`click`](/en-US/docs/Web/API/Element/click_event), [`dblclick`](/en-US/docs/Web/API/Element/dblclick_event), [`mouseup`](/en-US/docs/Web/API/Element/mouseup_event), and [`mousedown`](/en-US/docs/Web/API/Element/mousedown_event). The list of all events using the Mouse Event Interface is provided in the [Events reference](/en-US/docs/Web/Events).

When the input device is a mouse, you can also control user input through the Pointer Lock API and implement Drag & Drop (see below).

#### Finger touch

When developing web applications meant to be installed on touchscreen devices, it's a good practice to take into consideration the different capabilities in terms of screen resolution and user input. [Touch events](/en-US/docs/Web/API/Touch_events) can help you implement interactive elements and common interaction gestures on touchscreen devices.

If you want to use touch events, you need to add event listeners and specify handler functions, which will be called when the event gets fired:

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

where `element` is the DOM element you want to register the touch events on.

> **Note:** For further information about what you can do with touch events, please read our [touch events guide](/en-US/docs/Web/API/Touch_events).

#### Pointer Events

When dealing with devices that incorporate multiple forms of input, like mouse, finger touch and pen input, it might be hard to develop a solution that works for all these different control mechanisms. [Pointer Events](https://www.w3.org/TR/pointerevents/) help developers more easily manage events across devices by normalizing the handling of each one. A pointer can be any point of contact on the screen made by a mouse cursor, pen, touch (including multi-touch), or other pointing input device. The events for handling generic pointer input look a lot like those for mouse: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout`, etc.

> **Note:** Pointer Events are not widely supported yet, but a [pointer.js polyfill](https://github.com/mozilla/pointer.js) is available on Mozilla GitHub.

### Implement controls

#### Pointer lock

In some cases, typically game development, you might need to access mouse events even when the cursor goes past the boundary of the browser or screen: the [Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API) gives you full control of the pointing device.

This is the code to request pointer lock on an `element`:

```js
element.requestPointerLock();
```

> **Note:** For a full tutorial and reference, read our [Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API) page.

#### Screen Orientation

When screen orientation matters for your application, you can read the screen orientation state, be informed when this state changes, and able to lock the screen orientation to a specific state (usually portrait or landscape) through the [Screen Orientation API](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

Orientation data can be retrieved through the {{domxref("screen.orientation")}} attribute or through the [`orientation`](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#orientation) media feature. When `screen.orientation` changes, the {{domxref("screen.orientationchange")}} event is fired on the screen object. Locking the screen orientation is made possible by invoking the {{domxref("screen.lockOrientation")}} method, while the {{domxref("screen.unlockOrientation")}} method removes all the previous screen locks that have been set.

> **Note:** More information about the Screen Orientation API can be found in [Managing screen orientation](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

#### Fullscreen

You might need to present an element of your application (such as a {{ htmlelement("video") }}, for example) in fullscreen mode. You can achieve this by calling {{domxref("Element.requestFullscreen()")}} on that element. Bear in mind that many browsers still implement this with a vendor prefix, so you will probably need to fork your code something like this:

```js
const elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}
```

> **Note:** To find out more about adding fullscreen functionality your application, read our documentation about [using fullscreen mode](/en-US/docs/Web/API/Fullscreen_API).

#### Drag & Drop

[Drag & Drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API) allows your application's users to click and hold the mouse button down over an element, drag it to another location, and release the mouse button to drop the element there.

Here is an example that allows a section of content to be dragged.

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</div>
```

in which we:

- Set the [`draggable`](/en-US/docs/Web/HTML/Global_attributes#draggable) attribute to true on the element that you wish to make draggable
- Add a listener for the [`dragstart`](/en-US/docs/Web/API/HTMLElement/dragstart_event) event and set the drag data within this listener

> **Note:** You can find more information in the [MDN Drag & Drop documentation](/en-US/docs/Web/API/HTML_Drag_and_Drop_API).

#### contentEditable

In open web apps any DOM element can be made directly editable using the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes#contenteditable) attribute.

```css hidden
div {
  width: 300px;
  height: 130px;
  border: 1px solid gray;
}
```

```html
<div contenteditable="true">This text can be edited by the user.</div>
```

{{EmbedLiveSample("contentEditable")}}

> **Note:** Compatibility information, examples and other resources can be found in the [Content Editable guide](/en-US/docs/Web/HTML/Global_attributes/contenteditable).

## Examples

- **[Tracking multiple touch points at a time](/en-US/docs/Web/API/Touch_events#example)**
  - : This example tracks multiple touch points at a time, allowing the user to draw in a `{{htmlelement("canvas")}}` with more than one finger at a time. It will only work on a browser that supports touch events.
- **[Simple pointer lock demo](/en-US/docs/Web/API/Pointer_Lock_API#examples)**
  - : We've written a simple pointer lock demo to show you how to use it to set up a simple control system. The demo uses JavaScript to draw a ball inside a `{{htmlelement("canvas")}}` element. When you click the canvas, pointer lock is then used to remove the mouse pointer and allow you to move the ball directly using the mouse.

## Tutorials

- [Touch events Guide](/en-US/docs/Web/API/Touch_events)
- [Managing screen orientation](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Using fullscreen mode](/en-US/docs/Web/API/Fullscreen_API)
- [Drag Operations Guide](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)

## Reference

- {{domxref("MouseEvent")}}
- {{domxref("KeyboardEvent")}}
- [Touch events](/en-US/docs/Web/API/Touch_events)
- [Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API)
- [Screen Orientation API](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [Drag & Drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Content Editable](/en-US/docs/Web/HTML/Global_attributes/contenteditable)
- [Keyboard events in Firefox OS TV](/en-US/Firefox_OS/Platform/Keyboard_events_in_Firefox_OS_TV)
- [Implementing TV remote control navigation](/en-US/docs/Mozilla/Firefox_OS/TVs_connected_devices/TV_remote_control_navigation)
