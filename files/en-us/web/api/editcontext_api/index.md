---
title: EditContext API
slug: Web/API/EditContext_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.EditContext
---

{{DefaultAPISidebar("EditContext API")}}{{SeeCompatTable}}

The **EditContext API** can be used to build rich text editors on the web that support advanced text input experiences, such as {{glossary("Input Method Editor")}} (IME) composition, emoji picker, or any other platform-specific editing-related UI surfaces.

With the EditContext API, you get the flexibility to render your own editable text region using any technology you want.

## Concept

Multiple actors are involved when entering text in an editable region of an application:

- **User**
  - : The user provides the text by means of an input method: a keyboard, mouse, voice, or other input method.
- **Input method software**
  - : The input method software converts the user's input into text. For example, this could be an {{glossary("Input Method Editor")}} (IME) that converts keystrokes from a standard keyboard into Japanese, Chinese, or Korean characters.
- **OS text input service**
  - : The text input service of the operating system acts as a link between the input method software and the application.
- **Application text edit context**
  - : The application text edit context provides a state of the text being edited. The state contains information such as the text itself, the current selection, the location of the text in the app's UI.
- **Application editable region**
  - : The application editable region is the UI element of the application that displays the text.

While the three first actors are provided by the operating system, the application is responsible for providing the editable region and the text edit context.

On the web, editable regions are often [`<textarea>`](/en-US/docs/Web/HTML/Element/textarea) elements, [`<input>`](/en-US/docs/Web/HTML/Element/input) elements, or elements with the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute set to `true`. For these elements, the browser automatically provides the text edit context, and web authors are not required to write any code to support text input.

### Creating custom editable regions

Web authors can also create custom editable regions using the EditContext API. For example, a web author could create a rich text editor using a [`<canvas>`](/en-US/docs/Web/HTML/Element/canvas) element to render the text. In this case, the web author needs to write code to support text input.

### Author's responsibilities

If you decide to implement your own editable region, whether it draws text into a `<canvas>` or renders it into a series of DOM elements, you are responsible for providing the things that the browser would normally provide for you if you were using a `<textarea>` instead. This includes:

- Rendering the text.
- Rendering the selection (if you build your editable region with DOM elements instead of a `<canvas>`, the browser does render the selection for you).
- Letting the OS text input service know when the selection changes.
- Letting the OS text input service know where the text is located in the UI, so the input method software can display the IME composition window in the correct location.
- Applying certain text formats when the user is composing text within the IME composition window.

In return, the EditContext API makes the DOM element you choose editable and part of the document's focus order. In addition, the EditContext API also provides information about the state of the text being edited, which allows you to render it in a custom way. The information provided to you includes:

- The current text content.
- The current selection.
- Whether IME composition is in progress, and whether text formats need to be applied.

### Accessibility

If you use the EditContext API with a `<canvas>` element, make sure to also make the text accessible to assistive technology. Screen readers can't read the text in a `<canvas>` element. For example, you could maintain a separate view of the text in an offscreen DOM element that's presented to screen readers.

### Basic usage

To use the EditContext API, you need to create an instance of the {{domxref("EditContext")}} interface, and then attach it to the DOM element you want to make editable by using the {{domxref("HTMLElement/editContext", "editContext")}} property. The DOM element can be any element, including a `<div>` or a `<canvas>` element.

```html
<canvas id="editor-canvas"></canvas>
```

```js-nolint
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

An `EditContext` instance can only be attached to one DOM element at a time.

Attaching an `EditContext` instance to a DOM element makes the element focusable, as part of the document's focus order. The user can enter text into the element using the input method of their choice, and you can use event fired by the `EditContext` instance to render the text and selection.

### Model and view architecture

When using the EditContext API, it helps to build your editing experience as a model and view architecture.

The `EditContext` instance represents the model of your editable region. Its internal state gets updated when text input is received, and when the selection changes.

You can then render the text and selection in the view, using the information provided by the `EditContext` instance, however your view doesn't need to match the model exactly. You're free to render the text in any way you want.

## Interfaces

- {{DOMxRef("EditContext")}} {{experimental_inline}}
  - : The **`EditContext`** interface is a JavaScript reflection of the text edit context that's normally provided transparently by the browser when using standard editable regions such as `textarea`. `EditContext` provides the state of the text being edited, with information such as the text itself, the current selection, or the location of the text in the app's UI.
- {{DOMxRef("TextFormat")}}
  - : The **`TextFormat`** interface is used to represent certain formats that should be applied to text ranges when the user is composing text within the IME composition window.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the EditContext API](/en-US/docs/Web/API/EditContext_API/Guide)
