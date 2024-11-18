---
title: User input methods and controls
slug: Learn_web_development/Extensions/Forms/User_input_methods
page-type: guide
---

{{LearnSidebar}}

Web forms require user input. When designing web forms, or really any web content, it's important to consider how users interact with their devices and browsers. Web user input goes beyond simple mouse and keyboard: think of touchscreens for example.

In this article, we take a look at the different ways users interact with forms and other web content and provide recommendations for managing user input, real-world examples, and links to further information.

As you develop more complex and interactive forms or other UI features, there are many HTML elements and JavaScript APIs you may want to investigate. For example, you may want to create custom form controls that require non-semantic elements to be content editable. You might want to support touch events, determine or control the screen's orientation, make a form take up the full screen, or enable drag and drop features. This guide introduces all these features, and directs you to more information on each topic.

To provide a good experience to the greatest number of users, you need to support multiple input methods, including mouse, keyboard, finger touch, and so on. Available input mechanisms depend on the capabilities of the device running the application.

You should always be mindful of keyboard accessibility — many web users only use the keyboard to navigate websites and apps, and locking them out of your functionality is a bad idea.

## Topics covered

- To support touch screen displays, [touch events](/en-US/docs/Web/API/Touch_events) interpret finger activity on touch-based user interfaces from mobile devices, to refrigerator panels, to museum kiosk displays.
- The [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API) allows you to display your content in fullscreen mode, which is needed if your form is being served on a refrigerator or museum kiosk.
- When you need to create a custom form control, like a rich-text editor, the [`contentEditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute enables creating editable controls from normally non-editable HTML elements.
- The [Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API) allows users to drag elements around a page and drop them in different locations. This can help improve the user experience when it comes to selecting files for upload or reordering content modules within a page.
- When screen orientation matters for your layout, you can use [CSS media queries](/en-US/docs/Web/CSS/@media/orientation) to style your forms based on the browser orientation, or even use the [Screen Orientation API](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) to read the screen orientation state and perform other actions.

The following sections provide a set of recommendations and best practices for enabling the widest possible set of users to use your websites and applications.

## Supporting common input mechanisms

### Keyboard

Most users will use a keyboard to enter data into your form controls. Some will also use the keyboard to navigate to those form controls. To be accessible, and for better user experience, it's important to properly [label all form controls](/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form#the_label_input_and_textarea_elements). When each form control has a correctly associated {{htmlelement("label")}}, your form will be fully accessible to all, most notably anyone navigating your form with a keyboard, a screen reader, and possibly no screen at all.

If you want to add additional keyboard support, such as validating a form control when a specific key is hit, you can use event listeners to capture and react to keyboard events. For example, if you want to add controls when any key gets pressed, you need to add an event listener on the window object:

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

`handleKeyDown` and `handleKeyUp` are functions defining the control logic to be executed when the `keydown` and `keyup` events are fired.

> [!NOTE]
> Have a look at the [Events reference](/en-US/docs/Web/Events) and {{domxref("KeyboardEvent")}} guide to find out more about keyboard events.

### Mouse

You can also capture mouse and other pointer events. The events occurring when the user interacts with a pointing device such as a mouse are represented by the {{domxref("MouseEvent")}} DOM Interface. Common mouse events include [`click`](/en-US/docs/Web/API/Element/click_event), [`dblclick`](/en-US/docs/Web/API/Element/dblclick_event), [`mouseup`](/en-US/docs/Web/API/Element/mouseup_event), and [`mousedown`](/en-US/docs/Web/API/Element/mousedown_event). The list of all events using the Mouse Event Interface is provided in the [Events reference](/en-US/docs/Web/Events).

When the input device is a mouse, you can also control user input through the Pointer Lock API and implement Drag & Drop (see below). You can also [use CSS to test for pointer device](/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries#use_of_pointing_devices) support.

### Finger touch

To provide additional support for touchscreen devices, it's a good practice to take into consideration the different capabilities in terms of screen resolution and user input. [Touch events](/en-US/docs/Web/API/Touch_events) can help you implement interactive elements and common interaction gestures on touchscreen devices.

If you want to use touch events, you need to add event listeners and specify handler functions, which will be called when the event gets fired:

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

where `element` is the DOM element you want to register the touch events on.

> [!NOTE]
> For further information about what you can do with touch events, please read our [touch events guide](/en-US/docs/Web/API/Touch_events).

### Pointer Events

Mice aren't the only pointing devices. Your user's devices may incorporate multiple forms of input, like mouse, finger touch, and pen input. Each of these pointers has a different size. The [Pointer Events API](/en-US/docs/Web/API/Pointer_events) may come in handy if you need to manage events across devices by normalizing the handling of each one. A pointer can be any point of contact on the screen made by a mouse cursor, pen, touch (including multi-touch), or other pointing input device.

The events for handling generic pointer input look a lot like those for mouse: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout`, etc. The [`PointerEvent` interface](/en-US/docs/Web/API/PointerEvent) provides all the details you may want to capture about the pointer device, including its size, pressure, and angle.

## Implement controls

### Screen Orientation

If you need slightly different layouts depending on whether the user is in portrait or landscape mode, you can use [CSS media queries](/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries#media_feature_rules) to define CSS for different layouts or form control widths based on the size or orientation of the screen when [styling web forms](/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms).

When screen orientation matters for your form, you can read the screen orientation state, be informed when this state changes, and able to lock the screen orientation to a specific state (usually portrait or landscape) through the [Screen Orientation API](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

- Orientation data can be retrieved through {{domxref("screenOrientation.type")}} or with CSS through the [`orientation`](/en-US/docs/Web/CSS/@media/orientation) media feature.
- When the screen orientation changes, the {{domxref("ScreenOrientation.change_event", "change")}} event is fired on the screen object.
- Locking the screen orientation is made possible by invoking the {{domxref("ScreenOrientation.lock()")}} method.
- The {{domxref("ScreenOrientation.unlock()")}} method removes all the previous screen locks that have been set.

> [!NOTE]
> More information about the Screen Orientation API can be found in [Managing screen orientation](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

### Fullscreen

If you need to present your form in fullscreen mode, such as when your form is displayed on a museum kiosk, toll booth, or really any publicly displayed user interface, it is possible to do so by calling {{domxref("Element.requestFullscreen()")}} on that element:

```js
const elem = document.getElementById("myForm");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

> [!NOTE]
> To find out more about adding fullscreen functionality to your application, read our documentation about [using fullscreen mode](/en-US/docs/Web/API/Fullscreen_API).

### Drag & Drop

A common user interaction is the physical dragging of elements to be dropped elsewhere on the screen. Drag and drop can help improve the user experience when it comes to selecting files for upload or reordering content modules within a page. There's an API for that!

The [Drag & Drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API) API enables users to click and hold the mouse button down over an element, drag it to another location, and release the mouse button to drop the element there.

Here is an example that allows a section of content to be dragged.

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</div>
```

in which we:

- Set the [`draggable`](/en-US/docs/Web/HTML/Global_attributes/draggable) attribute to `true` on the element that you wish to make draggable.
- Add a listener for the [`dragstart`](/en-US/docs/Web/API/HTMLElement/dragstart_event) event and set the drag data within this listener.

> [!NOTE]
> You can find more information in the [MDN Drag & Drop documentation](/en-US/docs/Web/API/HTML_Drag_and_Drop_API).

### contentEditable

Generally, you should use a {{HTMLElement("textarea")}} or an appropriate {{HTMLElement("input")}} type within a {{HTMLElement("form")}} to collect data from users, along with a descriptive {{HTMLElement("label")}}. But these elements may not meet your needs. For example, rich text editors capture italic, bold, and normal text, but no native form control captures rich text. This use case requires you to create a custom control that is stylable _and_ editable. There's an attribute for that!

Any DOM element can be made directly editable using the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute.

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

The `contenteditable` attribute automatically adds the element to the document's default tabbing order, meaning the [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute does not need to be added. However, when using non-semantic elements for data entry when [creating your own form controls](/en-US/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), you will need to add JavaScript and [ARIA](/en-US/docs/Web/Accessibility/ARIA) to retrofit the element with form control functionality for everything else.

To provide a good user experience, any custom form control you create must be accessible and function like native form controls:

- The element's [`role`](/en-US/docs/Web/Accessibility/ARIA/Roles), [label](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), and [description](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) need to be added with ARIA.
- All user input methods needs to be supported, including [keyboard](#keyboard), [mouse](#mouse), [touch](#finger_touch), and [pointer](#pointer_events) events, all described above.
- JavaScript is required to handle functionality such as [validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation), [submission](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data), and [saving](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript) of user-updated content.

{{EmbedLiveSample("contentEditable")}}

> [!NOTE]
> Examples and other resources can be found in the [Content Editable guide](/en-US/docs/Web/HTML/Global_attributes/contenteditable).

## Tutorials

- [Touch events Guide](/en-US/docs/Web/API/Touch_events)
- [Managing screen orientation](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Using fullscreen mode](/en-US/docs/Web/API/Fullscreen_API)
- [Drag Operations Guide](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Sending forms through JavaScript](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)

## Reference

- {{domxref("MouseEvent")}} interface
- {{domxref("KeyboardEvent")}} interface
- [Touch events](/en-US/docs/Web/API/Touch_events) API
- [Pointer Lock](/en-US/docs/Web/API/Pointer_Lock_API) API
- [Screen Orientation](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) API
- [Fullscreen](/en-US/docs/Web/API/Fullscreen_API) API
- [Drag & Drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API) API
- HTML [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute
