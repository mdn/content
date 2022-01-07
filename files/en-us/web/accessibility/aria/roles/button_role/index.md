---
title: 'ARIA: button role'
slug: Web/Accessibility/ARIA/Roles/button_role
tags:
  - ARIA
  - ARIA Role
  - ARIA button
  - Accessibility
  - Button Role
  - Reference
---

The `button` role is for clickable elements that trigger a response when activated by the user. Adding `role="button"` tells the screen reader the element is a button, but provides no button functionality. Use {{HTMLElement("button")}} or {{HTMLElement("input")}} with `type="button"` instead.

## Description

The button role identifies an element as a button to assistive technology such as screen readers. A button is a widget used to perform actions such as submitting a form, opening a dialog, cancelling an action, or performing a command such as inserting a new record or displaying information. Adding `role="button"` tells assistive technology that the element is a button, but provides no button functionality. Use {{HTMLElement("button")}} or {{HTMLElement("input")}} with `type="button"` instead. This role can be used in combination with the [`aria-pressed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) attribute to create toggle buttons.

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

The above example creates a focusable button, but requires JavaScript and CSS to include button appearance and functionality. These are features provided by default when using the {{HTMLElement("button")}} and {{HTMLElement("input")}} with `type="button"` elements:

```html
<button type="button" id="saveChanges">Save</button>
```

> **Note:** If using `role="button"` instead of the semantic `<button>` or `<input type="button">` elements, you will need to make the element focusable and have to define event handlers for {{event("click")}} and {{event("keydown")}} events. This includes handling the <kbd>Enter</kbd> and <kbd>Space</kbd> keypresses in order to process all forms of user input. See [the official WAI-ARIA example code](https://www.w3.org/TR/wai-aria-practices/examples/button/button.html).

In addition to the ordinary button widget, `role="button"` should be included when creating a toggle button or menu button using a non-button element. A toggle button is a two-state button that can be either off (not pressed) or on (pressed). The `aria-pressed` attribute values of `true` or `false` identify a button as a toggle button. A menu button is a button that controls a menu and has an [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) property attribute set to either `menu` or `true`.

### Associated ARIA roles, states, and properties

- [`aria-pressed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
  - : The `aria-pressed`  attribute defines the button as a toggle button. The value describes the state of the button. The values include `aria-pressed="false"` when a button is not currently pressed, `aria-pressed="true"` to indicate a button is currently pressed, and `aria-pressed="mixed"` if the button is considered to be partially pressed. If the attribute is omitted or set to its default value of `aria-pressed="undefined"`, the element does not support being pressed.  
- [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : If the button controls a grouping of other elements, the `aria-expanded` state indicates whether the controlled grouping is currently expanded or collapsed.  If the button has `aria-expanded="false"` set, the grouping is not currently expanded; If the button has `aria-expanded="true"` set, it is currently expanded; if the button has `aria-expanded="undefined"` set or the attribute is omitted, it is not expandable.

### Basic buttons

Buttons should always have an accessible name. For most buttons, this name will be the same as the text inside the button. In some cases, for example buttons represented by icons, the accessible name may be provided from the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) attributes.

### Toggle buttons

A toggle button typically has two states: pressed and not pressed. A third mixed state is available for toggle buttons that control other elements, such as other toggle buttons or checkboxes, which do not all share the same value.  Whether an element is a toggle button or not can be indicated with the [`aria-pressed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) attribute in addition to the `button` role (if the element is not already a native button element):

- If `aria-pressed` is not used, or is set to the "undefined" state, the button is not a toggle button.
- If `aria-pressed="false"` is used the button is a toggle button that is currently not pressed.
- If `aria-pressed="true"` is used the button is a toggle button that is currently pressed.
- if `aria-pressed="mixed"` is used, the button is considered to be partially pressed.

As an example, the mute button on an audio player labeled "mute" could indicate that sound is muted by setting the `aria-pressed` state true. The label of a toggle button should not change when its state changes. In our example the label remains "Mute" with a screen reader reading "Mute toggle button pressed" or "Mute toggle button not pressed" depending on the value of `aria-pressed`. If the design were to call for the button label to change from "Mute" to "Unmute," a toggle button would not be appropriate, so the `aria-pressed` attribute would be omitted.

### Keyboard interactions

| Key              | Function              |
| ---------------- | --------------------- |
| <kbd>Enter</kbd> | Activates the button. |
| <kbd>Space</kbd> | Activates the button  |

Following button activation, focus is set depending on the type of action the button performs. For example, if clicking the button opens a dialog, the focus should move to the dialog. If the button closes a dialog, focus should return to the button that opened the dialog unless the function performed in the dialog context logically leads to a different element. If the button alters the current context, , such as muting and unmuting an audio file, then focus typically remains on the button.

### Required JavaScript Features

#### Required event handlers

Buttons can be operated by mouse, touch, and keyboard users. For native HTML `<button>` elements, the button's `onclick` event fires for mouse clicks and when the user presses <kbd>Space</kbd> or <kbd>Enter</kbd> while the button has focus. But if another tag is used to create a button, the `onclick` event only fires when clicked by the mouse cursor, even if `role="button"` is used. Because of this, separate key event handlers must be added to the element so that the button is be triggered when the <kbd>Space</kbd> or <kbd>Enter</kbd> key is pressed.

- `onclick`
  - : Handles the event raised when the button is activated using a mouse click or touch event.
- `onKeyDown`
  - : Handles the event raised when the button is activated using the Enter or Space key on the keyboard. (Note not the [deprecated onKeyPress](/en-US/docs/Web/API/Document/keypress_event))


## Examples

### Basic button example

In this example, a span element has been given the `button` role. Because a `<span>` element is used, the `tabindex` attribute is required to make the button focusable and part of the page's tab order. The included CSS style is provided to make the `<span>` element look like a button, and to provide visual cues when the button has focus.

The `handleBtnClick` and `handleBtnKeyDown` event handlers perform the button's action when activated using a mouse click or the <kbd>Space</kbd> or <kbd>Enter</kbd> key. In this case, the action is to add a new name to the list of names.

Try the example by adding a name to the text box. The button will cause the name to be added to a list.

#### HTML

```html
    <h1>ARIA Button Example</h1>
    <ul id="nameList"></ul>
    <label for="newName">Enter your Name: </label>
    <input type="text" id="newName">
    <span role="button" tabindex="0" onclick="handleCommand(event)" onKeyDown="handleCommand(event)">Add Name</span>
```

#### CSS

```css
[role="button"] {
  padding: 2px;
  background-color: navy;
  color: white;
  cursor: default;
}
[role="button"]:hover,
[role="button"]:focus,
[role="button"]:active {
   background-color: white;
   color: navy;
}
ul {
    list-style: none;
}
```

#### JavaScript

```js
function handleCommand(event) {
    // Handles both mouse clicks and keyboard
    // activate with Enter or Space

    // Keypresses other then Enter and Space should not trigger a command
    if (event instanceof KeyboardEvent && event.key !== 'Enter' && event.key !== ' ') {
        return;
    }

    // Get the new name value from the input element
    let newNameInput = document.getElementById('newName');
    let name = newNameInput.value;
    newNameInput.value = ''; // clear the text field
    newNameInput.focus();  // give the text field focus to enable entering and additional name.

    // Don't add blank entries to the list.
    if(name.length > 0) {
        listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(name));

        // Add the new name to the list.
        let list = document.getElementById('nameList');
        list.appendChild(listItem);
    }
}
```

{{EmbedLiveSample("Basic_button_example")}}

### Toggle button example

In this snippet a {{HTMLElement("span")}} element is converted to a toggle button using the `button` role and the `aria-pressed` attribute. When the button is activated, the `aria-pressed` value switches states; changing from `true` to `false` and back again.

#### HTML

```html
<button type="button" onclick="handleBtnClick(event)" onKeyDown="handleBtnKeyDown(event)">
  Mute Audio
</button>

<span role="button" tabindex="0"
 aria-pressed="false" onclick="handleBtnClick(event)"
 onKeyDown="handleBtnKeyDown(event)">
  Mute Audio
</span>

<audio id="audio" src="https://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3">
  Your browser does not support the `audio` element.
</audio>
```

#### CSS

```css
button,
[role="button"] {
    padding: 3px;
    border: 2px solid transparent;
}

button:active,
button:focus,
[role="button"][aria-pressed="true"] {
    border: 2px solid #000;
}
```

#### JavaScript

```js
function handleBtnClick(event) {
  toggleButton(event.target);
}

function handleBtnKeyDown(event) {
  // Check to see if space or enter were pressed
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") { // "Spacebar" for IE11 support
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton(event.target);
  }
}

function toggleButton(element) {
  var audio = document.getElementById('audio');
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
  // toggle the play state of the audio file
  if(pressed) {
     audio.pause();
  } else {
     audio.play();
  }
}
```

#### Result

{{EmbedLiveSample('Toggle_button_example')}}

## Accessibility concerns

Buttons are interactive controls and thus focusable. If the `button` role is added to an element that is not focusable by itself (such as `<span>`, `<div>` or `<p>`) then, the `tabindex` attribute has to be used to make the button focusable.

> **Warning:** Be careful when marking up links with the button role. Buttons are expected to be triggered using the <kbd>Space</kbd> or <kbd>Enter</kbd> key, while links are expected to be triggered using the <kbd>Enter</kbd> key. In other words, when links are used to behave like buttons, adding `role="button"` alone is not sufficient. It will also be necessary to add a key event handler that listens for the <kbd>Space</kbd> key in order to be consistent with native buttons.

When the `button` role is used, screen readers announce the element as a button, generally saying "click" followed by the button's accessible name. The accessible name is either the content of the element or the value of an `aria-label` or element referenced by an  `aria-labelledby` attribute, or description, if included.

## Best practices

If a link performs the action of a button, giving the element `role="button"` helps assistive technology users understand the function of the element. However, a better solution is to adjust the visual design so it matches the function and ARIA role.  Where possible, it is recommended to use native HTML buttons (`<button>`, `<input type="button">`,  `<input type="submit">`, `<input type="reset">` and `<input type="image">`) rather than the `button` role, as native HTML buttons are supported by all user agents and assistive technology and provide keyboard and focus requirements by default, without need for additional customization.

## Specifications

| Specification                                                                    | Status                                           |
| -------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#button","button")}}                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#button","button")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |



## See also

- The {{HTMLElement('button')}} element
- The {{HTMLElement("input")}} element
-  [`<input type="button">`](/en-US/docs/Web/HTML/Element/input/button)
-  [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit)
-  [`<input type="reset">`](/en-US/docs/Web/HTML/Element/input/reset)
- [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed)
- [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded)
- [`aria-haspopup`](https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup)
- [Strong native semantics in HTML5](https://www.w3.org/TR/html5/dom.html#aria-usage-note)
- [Notes on Using ARIA in HTML](https://www.w3.org/TR/aria-in-html/)
- [Official WAI-ARIA example code](https://www.w3.org/TR/wai-aria-practices/examples/button/button.html)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
