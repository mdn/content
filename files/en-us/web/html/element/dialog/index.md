---
title: "<dialog>: The Dialog element"
slug: Web/HTML/Element/dialog
page-type: html-element
browser-compat: html.elements.dialog
---

{{HTMLSidebar}}

The **`<dialog>`** [HTML](/en-US/docs/Web/HTML) element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

> **Warning:** The `tabindex` attribute must not be used on the `<dialog>` element.

- `open`
  - : Indicates that the dialog is active and can be interacted with. When the `open` attribute is not set, the dialog _shouldn't_ be shown to the user.
    It is recommended to use the `.show()` or `.showModal()` methods to render dialogs, rather than the `open` attribute. If a `<dialog>` is opened using the `open` attribute, it will be non-modal.

## Accessibility considerations

The native HTML `<dialog>` element should be used in creating modal dialogs as it provides usability and accessibility features that must be replicated if using other elements for a similar purpose. Use the appropriate `.showModal()` or `.show()` method to render dialogs. If creating a custom dialog implementation, ensure all expected default behaviors are supported and proper labeling recommendations are followed.

When implementing a dialog, it is important to consider the most appropriate place to set user focus. Explicitly indicating the initial focus placement by use of the [autofocus](/en-US/docs/Web/HTML/Global_attributes/autofocus) attribute will help ensure initial focus is set to the element deemed the best initial focus placement for any particular dialog. When in doubt, as it may not always be known where initial focus could be set within a dialog, particularly for instances where a dialog's content is dynamically rendered when invoked, then if necessary authors may decide focusing the `<dialog>` element itself would provide the best initial focus placement. When using {{domxref("HTMLDialogElement.showModal()")}} to open a `<dialog>`, focus is set on the first nested focusable element.

Ensure a mechanism is provided to allow users to close a dialog. The most robust way to ensure all users can close a dialog is to include an explicit button to do so. For instance, a confirmation, cancel or close button as appropriate. Additionally, for those using a device with a keyboard, the <kbd>Escape</kbd> key is commonly expected to close modal dialogs as well. By default, a `<dialog>` invoked by the `showModal()` method will allow for its dismissal by the <kbd>Escape</kbd>. A non-modal dialog does not dismiss via the <kbd>Escape</kbd> key by default, and depending on what the non-modal dialog represents, it may not be desired for this behavior. If multiple modal dialogs are open, <kbd>Escape</kbd> should only close the last shown dialog. When using `<dialog>`, this behavior is provided by the browser.

The `<dialog>` element is exposed by browsers similarly to custom dialogs using the ARIA [role="dialog"](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) attribute. `<dialog>` elements invoked by the `showModal()` method will have an implicit [aria-modal="true"](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal), whereas `<dialog>` elements invoked by the `show()` method, or rendered by use of the `open` attribute or changing the default `display` of a `<dialog>` will be exposed as `[aria-modal="false"]`. When implementing modal dialogs, everything other than the `<dialog>` and its contents should be rendered inert using the [`inert`](/en-US/docs/Web/HTML/Global_attributes/inert) attribute. When using `<dialog>` along with the `HTMLDialogElement.showModal()` method, this behavior is provided by the browser.

## Usage notes

- {{HTMLElement("form")}} elements can close a `<dialog>` if they have the attribute `method="dialog"` or if the button used to submit the form has `formmethod="dialog"` set. In this case, the state of the form controls are saved, not submitted, the `<dialog>` closes, and the {{domxref("HTMLDialogElement.returnValue", "returnValue")}} property gets set to the `value` of the button that was used to save the form's state.
- The {{cssxref('::backdrop')}} CSS pseudo-element can be used to style the backdrop that is displayed behind a `<dialog>` element when the dialog is displayed with {{domxref("HTMLDialogElement.showModal()")}}. For example, to dim unreachable content behind the modal dialog.

## Examples

### Basic example

The following will render a non-modal, or modal-less, dialog. The "OK" button allows the dialog to be closed when activated.

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Result

{{EmbedLiveSample("Basic_example", "100%", 200)}}

Because this dialog was opened via the `open` attribute, it is non-modal. In this example, when the dialog is dismissed, no method is provided to re-open it. Opening dialogs via {{domxref("HTMLDialogElement.show()")}} is preferred over the toggling of the boolean `open` attribute.

### Advanced example

This example opens a modal dialog when the "Show the dialog" button is activated. The dialog contains a form with a {{HTMLElement("select")}} and two {{HTMLElement("button")}} elements which default to `type="submit"`. Updating the value of the `<select>` updates the value of the "confirm" button. This value is the [`returnValue`](/en-US/docs/Web/API/HTMLDialogElement/returnValue). If the dialog is closed with the <kbd>Esc</kbd> key, there is no return value. When the dialog is closed, the return value is displayed under the "Show the dialog" button.

#### HTML

```html
<!-- A modal dialog containing a form -->
<dialog id="favDialog">
  <form>
    <p>
      <label>
        Favorite animal:
        <select>
          <option value="default">Choose…</option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel" formmethod="dialog">Cancel</button>
      <button id="confirmBtn" value="default">Confirm</button>
    </div>
  </form>
</dialog>
<p>
  <button id="showDialog">Show the dialog</button>
</p>
<output></output>
```

#### JavaScript

```js
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(selectEl.value); // Have to send the select box value here.
});
```

### Result

{{EmbedLiveSample("Advanced_example", "100%", 300)}}

This modal dialog can be closed three ways. For keyboard users, modal dialogs can be closed with the <kbd>Esc</kbd> key. In this example, the "Cancel" button closes the dialog via the `dialog` form method and the "Confirm" closes the dialog via the {{domxref("HTMLDialogElement.close()")}} method.
The "Cancel" button includes a [`formmethod="dialog"`](/en-US/docs/Web/HTML/Element/input/submit#formmethod), which overrides the {{HTMLElement("form")}}'s default {{HTTPMethod("GET")}} [`method`](/en-US/docs/Web/HTML/Element/form#method). When a form's method is [`dialog`](#usage_notes), the state of the form is saved, not submitted, and the dialog gets closed.
Without an `action`, submitting the form via the default {{HTTPMethod("GET")}} method causes a page to reload. We use JavaScript to prevent the submission and close the dialog with the {{domxref("event.preventDefault()")}} and {{domxref("HTMLDialogElement.close()")}} methods, respectively.

It is important to provide a closing mechanism within every `dialog` element. The <kbd>Esc</kbd> key does not close non-modal dialogs by default, nor can one assume that a user will even have access to a physical keyboard (e.g., someone using a touch screen device without access to a keyboard).

### Animating dialogs

`<dialog>`s are set to `display: none;` when hidden and `display: block;` when shown, as well as being removed from / added to the {{glossary("top layer")}}. Therefore, for `<dialog>` elements to be animated `display` needs to be animatable. This is now the case; [supporting browsers](/en-US/docs/Web/CSS/display#browser_compatibility) animate `display` with a variation on the [discrete animation type](/en-US/docs/Web/CSS/CSS_animated_properties#discrete). Specifically, the browser will flip between `none` and another value of `display` so that the animated content is shown for `100%` of the animation duration. So for example:

- When animating between `display` `none` and `block`, the value will flip to `block` at `0%` of the animation duration so it is visible throughout.
- When animating between `display` `block` and `none`, the value will flip to `none` at `100%` of the animation duration so it is visible throughout.

#### Transitioning dialog elements

When animating `<dialog>`s with [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions), the following are required:

- [`@starting-style`](/en-US/docs/Web/CSS/@starting-style) is used to provide a set of starting values for properties set on the `<dialog>` that you want to transition from when it is shown. This is needed because, by default, [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions) are not triggered on elements' first style updates, or when the `display` type changes from `none` to another type, to avoid unexpected behavior.
- [`display`](/en-US/docs/Web/CSS/display) needs to be added to the transitions list so that the `<dialog>` will remain as `display: block` for the duration of the animation, allowing the other animations to be seen.
- [`overlay`](/en-US/docs/Web/CSS/overlay) needs to be added to the transitions list so that the removal of the `<dialog>` from the top layer will be deferred until the animation is finished, again allowing the other animations to be seen.
- [`transition-behavior: allow-discrete`](/en-US/docs/Web/CSS/transition-behavior) needs to be set on the `display` and `overlay` transitions. This effectively enables discrete transitions.

Here is a quick example to show what this might look like.

The HTML contains a `<dialog>` element, plus a button to show the dialog. Additionally, the `<dialog>` element contains another button to close itself.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

The CSS is as follows:

```css
/*   Open state of the dialog */
dialog[open] {
  opacity: 1;
  transform: scaleY(1);
}

/*   Closed state of the dialog   */
dialog {
  transition:
    opacity 0.5s ease-out,
    transform 0.5s ease-out,
    overlay 0.5s ease-out allow-discrete,
    display 0.5s ease-out allow-discrete;
  opacity: 0;
  transform: scaleY(0);
}

/*   Before-open state  */
/* Needs to be after the previous dialog[open] rule to take effect,
    as the specificity is the same */
@starting-style {
  dialog[open] {
    opacity: 0;
    transform: scaleY(0);
  }
}

/* Transition the :backdrop when the dialog modal is promoted to the top layer */
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
}

dialog[open]::backdrop {
  background-color: rgba(0, 0, 0, 0.25);
}

/* This starting-style rule cannot be nested inside the above selector
because the nesting selector cannot represent pseudo-elements. */

@starting-style {
  dialog[open]::backdrop {
    background-color: rgba(0, 0, 0, 0);
  }
}

body,
button {
  font-family: system-ui;
}
```

Note the `@starting-style` block used to define the transition starting styles, and the `display` and `overlay` properties included in the transition list, each with `allow-discrete` set on them. Note that we've also included similar CSS to transition the [`::backdrop`](/en-US/docs/Web/CSS/::backdrop) that appears behind the `<dialog>` when it opens, to provide a nice darkening animation. `dialog[open]::backdrop` is required to select the backdrop when the dialog is open.

The JavaScript serves to wire up the buttons to event handlers that show and close the `<dialog>`:

```js
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
```

The code renders as follows:

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

#### dialog keyframe animations

When animating a `<dialog>` with [CSS animations](/en-US/docs/Web/CSS/CSS_animations), there are some differences to note from transitions:

- You don't provide a starting state inside a `@starting-style` block; instead, you need to provide the starting `display` value in an explicit starting keyframe (for example using `0%` or `from`).
- You don't need to enable discrete transitions; there is no equivalent to `allow-discrete` inside keyframes.
- You can't set `overlay` inside keyframes either. The best solution we found at this time to defer removal from the top layer was to use JavaScript — animating the `<dialog>` and then using {{domxref("setTimeout()")}} to defer removal of the `<dialog>` until after the animation is finished.

Let's have a look at an example so you can see what this looks like. First, the HTML contains a `<dialog>` element, plus a button to show the dialog. Additionally, the `<dialog>` element contains another button to close itself. The `<dialog>` has a `class` of `fade-in` set on it, which will trigger the entry animation when the dialog is shown.

```html
<dialog id="dialog" class="fade-in">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

Now for the CSS:

```css
/* Animation classes */

.fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

.fade-out {
  animation: fade-out 0.5s ease-out forwards;
}

/* Animation keyframes */

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }

  100% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }
}

body,
button {
  font-family: system-ui;
}
```

Note the keyframes defined to animate between the closed and open states, which are then applied to control classes. This includes animating `display` to make sure the actual visible animation effects remain visible for the whole duration. This example doesn't animate the backdrop like the transitions example above does — that wasn't possible to reproduce with a keyframe animation at the time of writing.

Finally, the JavaScript serves to wire up the buttons to event handlers that show and close the `<dialog>`, while also adding and removing the control classes as required to apply the entry and exit animations. In addition, note how {{domxref("setTimeout()")}} is used to defer closing the `<dialog>` until the exit animation is finished.

```js
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.classList.remove("fade-out");
  dialogElem.classList.add("fade-in");
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.classList.remove("fade-in");
  dialogElem.classList.add("fade-out");
  setTimeout(() => {
    dialogElem.close();
  }, 500);
});
```

The code renders as follows:

{{ EmbedLiveSample("dialog keyframe animations", "100%", "200") }}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>,
        <a href="/en-US/docs/Web/HTML/Element/Heading_Elements#sectioning_roots">sectioning root</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">flow content</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role">dialog</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLDialogElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLDialogElement/close_event", "close")}} event
- The {{domxref("HTMLDialogElement/cancel_event", "cancel")}} event
- [HTML forms guide](/en-US/docs/Learn/Forms).
- The {{cssxref("::backdrop")}} pseudo-element
- [dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill)
