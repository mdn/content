---
title: 'ARIA: radio role'
slug: Web/Accessibility/ARIA/Roles/radio_role
tags:
  - ARIA
  - Accessibility
  - Role
  - ARIA widget
  - Reference
---


The `radio` role is one of a group of checkable buttons, in a `radiogroup`, where no more than one of the buttons can be checked at a time.

## Description

A radio element is a checkable input in a group of role elements, of which only one of which can be checked at a time. The radio elements must be grouped together in a ['radiogroup`](/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) to indicate which ones affect the same value.  

```html
<div  role="radiogroup" aria-labeledby="legend25" id="radiogroup25">
  <p id="legend25">Ipsum and lorem?</p>
  <ul>
    <li>
      <span role="radio" aria-checked="false" tabindex="0" aria-labelledby="q25_radio1-label" data-value="True"></span> 
      <label id="q25_radio1-label">True</label>
    </li>
    <li>
      <span role="radio" aria-checked="false" tabindex="0" aria-labelledby="q25_radio2-label" data-value="False"></span> 
      <label id="q25_radio2-label">False</label>
    </li>
    <li>
      <span role="radio" aria-checked="true" tabindex="0" aria-labelledby="q25_radio3-label" data-value="huh?"></span> 
      <label id="q25_radio3-label">What is the question?</label>
    </li>
  </ul>
</div>
```

The `role` attribute only adds semantics; all of the functionality that comes natively with the [HTML radio](/en-US/docs/Web/HTML/Element/input/radio) needs to be added with JavaScript and the HTML [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute.

> **Note:** The first rule of ARIA is if a native HTML element or attribute has the semantics and behavior you require, use it instead of re-purposing an element and adding ARIA. Instead use the native [HTML radio](/en-US/docs/Web/HTML/Element/input/radio) of [`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/radio) (with an associated {{HTMLElement('label')}}, which natively provides all the functionality required:

```html
<fieldset>
  <legend>Ipsum and lorem?</legend>
  <ul>
    <li>
      <input type="radio" value="True" id="q25_radio1" name="q25" /> 
      <label for="q25_radio1">True</label>
    </li>
    <li>
      <input type="radio" value="False" id="q25_radio2" name="q25" /> 
      <label for="q25_radio2">False</label>
    </li>
    <li>
      <input type="radio" value="huh?" id="q25_radio3"  name="q25" checked /> 
      <label for="q25_radio3">What is the question?</label>
    </li>
  </ul>
</fieldset>
```

The native HTML radio ([`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/radio))  form control had two states ("checked" or "not checked"). Similarly, an element with `role="radio"`  can expose two states through the [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) attribute: `true` or `false`. The value of `mixed` correlates to the  `indeterminate` value of HTML `checked` attribute, meaning neither checked nor unchecked. While `mixed` is valid on both radios and checkboxes, it is rarely useful for a radio button.

The radio role should alwasy be nested with other radios in a `radiogroup`. If it is not possible to nest the radio button within a radio group, use the `id` of the nongrouped radio in a space separated list of values as the value of the [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) attribute on the `radiogroup` element to indicate the relationship of the `radiogroup` to its radio members.


As `radio` is an interactive control; it must be focusable and keyboard accessible. If the role is applied to a non-focusable element, use the [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute to change this. The expected keyboard shortcut for activating a radio is the <kbd>Space</kbd> key. Use JavaScript to toggle the `aria-checked` attribute to `true` when a radio becomes checked while ensuing that all the other radio roles in the group are set to  `aria-checked="false"`.

If any of the radio roles in a group has `aria-required="true"` set, it is as if all of the radios in the group had the attribute making the selection of one of the radios in the radiogroup being required to be valid;  though not necessarily the one that has the [`aria-required`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required) attribute set.

The radio buttons are contained in or owned by an element with role radiogroup.
Each radio button element has role radio.
If a radio button is checked, the radio element has aria-checked set to true. If it is not checked, it has aria-checked set to false.
Each radio element is labelled by its content, has a visible label referenced by aria-labelledby, or has a label specified with aria-label.
The radiogroup element has a visible label referenced by aria-labelledby or has a label specified with aria-label.
If elements providing additional information about either the radio group or each radio button are present, those elements are referenced by the radiogroup element or radio elements with the aria-describedby property.

## Associated WAI-ARIA Roles, States, and Properties

- `radiogroup` role
  - : The radio buttons are contained in or owned by an element with role `radiogroup`. If unable to be nested within a radiogroup within the markup, the `aria-owns` attribute of the `radiogroup` contains the `id` values of the non-nested radio buttons in the group.

- [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked)

  - : The value of `aria-checked` defines the state of a radio. This attribute has one of three possible values:

    - `true`
      - : The radio is checked.
    - `false`
      - : The radio is not checked.

- `tabindex="0"`
  - : Used to make it focusable so the assistive technology user can tab to it and start reading right away.


## Keyboard interactions

  - <kbd>Tab</kbd> + <kbd>Shift</kbd>
    - : Move focus into and out of the radio group. When focus moves into a radio group. If a radio button is checked, focus is set on the checked button. If none of the radio buttons are checked, focus is set on the first radio button in the group.

| - <kbd>Space</kbd>
    - : Checks the radio if not already checked. Unchecks all the others in the radiogroup. |
  
  - <kbd>Right Arrow</kbd> and <kbd>Down Arrow</kbd>
    - : Move focus to the next radio button in the group, unchecking the previously focused button, and checking the newly focused button. If focus is on the last button, focus moves to the first button.


  - <kbd>Left Arrow</kbd> and <kbd>Up Arrow</kbd>
    - : Move focus to the previous radio button in the group, unchecking the previously focused button, and checking the newly focused button. If focus is on the first button, focus moves to the last button.

### Radios in a toolbar

Because arrow keys are used to navigate among elements of a toolbar and the Tab key moves focus in and out of a toolbar, when a radio group is nested inside a toolbar, the keyboard interaction of the radio group is slightly different from that of a radio group that is not inside of a toolbar. See [`radiogroup` keyboard interactions](/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_Role#Keyboard_interactions) for more information

## Required JavaScript

- `onClick`
  - : Handle mouse clicks on both the radio and the associated label that will change the state of the radio by changing the value of the `aria-checked` attribute and the appearance of the radio so it appears checked or unchecked to the sighted user
- `onKeyPress`
  - : Handle the case where the user presses the <kbd>Space</kbd> key to change the state of the radio by changing the value of the `aria-checked` attribute and the appearance of the radio so it appears checked or unchecked to the sighted user
- `onFocus`
- `onBlur`

## Examples

The following example creates an otherwise non-semantic radio element using CSS and JavaScript to handle the checked or unchecked status of the element.

### HTML

```html
<div  role="radiogroup" aria-labeledby="legend" id="radiogroup">
  <p id="legend">Should you be using the <code>radio</code> role or <code>&lt;input type="radio"><code>?</p>
  <ul>
    <li>
      <span role="radio" aria-checked="ARIA" tabindex="0" aria-labelledby="ariaLabel" data-value="True"></span> 
      <label id="ariaLabel">ARIA role</label>
    </li>
    <li>
      <span role="radio" aria-checked="HTML" tabindex="0" aria-labelledby="htmllabel" data-value="False"></span> 
      <label id="htmllabel">HTML <code>&lt;input type="radio"><code></label>
    </li>
  </ul>
</div>
```

### CSS

```css
[role="radio"] {
    padding:5px;
}

[role="radio"][aria-checked="true"]::before {
    content: "(x)";
    font-family: monospace;
}

[role="radio"][aria-checked="false"]::before {
    content: "( )";
    font-family: monospace;
}
```

### JavaScript

A lot of JavaScript is required to make radio buttons out of non-semantic HTML.

```js


// initialize all the radio role elements

let radioGroups = document.querySelectorAll('[role="radiogroup"]');

for (let i = 0, groups = radioGroups.length; i < groups; i++) {
  let radios = radioGroups[i].querySelectorAll('[role=radio]');
  for (let j = 0, radiobuttons = radios.length; j < radios; j++) {
    radios[j].addEventListener('keydown', function() {
      handleKeydown(); }
    );
    radios[j].addEventListener('click', function() {
      handleClick();
    );
  } 
}

// handle mouse and touch events
let handleClick = function (event) {
  setChecked(this);
  event.stopPropagation();
  event.preventDefault();
};

// handle key presses
let handleKeydown = function (event) {
  switch (event.keyCode) {
    case 32: // space
    case 12: // return
      currentChecked();
      break;

    case 38: // up
    case 37: // left
      previousRadioChecked();
      break;

    case 40: // down
    case 39: // right
      nextItemChecked();
      break;

    default:
      break;
  }
  event.stopPropagation();
  event.preventDefault();

};

// when a radio is selected, give it focus, set checked to true; 
// ensure all other radios in radio group are not checked 

setChecked  = function () {
  // uncheck all the radios in group
  // iterated thru all the radios in radio group
    // eachRadio.tabIndex = -1;
    // eachRadio.setAttribute('aria-checked', 'false');
  
  // set the selected radio to checked
    // thisRadio.setAttribute('aria-checked', 'true');
    // thisRadio.tabIndex = 0;
    // thisRadio.focus();
    // set the value of the radioGroup to the value of the currently selected radio 
};

```

<!-- {{EmbedLiveSample("Examples", 230, 250)}} -->

No JavaScript (or even CSS) would be needed had we used semantic HTML element with the name of each radio button in a group of radio buttons being the same:

```html
<fieldset>
  <legend">Should you be using the <code>radio</code> role or <code>&lt;input type="radio"><code>?</legend>
  <ul>
    <li>
      <input type="radio" name="bestPractices" id="ariaLabel" value="True"/> 
      <label for="ariaLabel">ARIA role</label>
    </li>
    <li>
      <input type="radio" name="bestPractices" id="htmllabel" value="False"></span> 
      <label for="htmllabel">HTML <code>&lt;input type="radio"><code></label>
    </li>
  </ul>
</div>
```


## Best practices

The first rule of ARIA is: if a native HTML element or attribute has the semantics and behavior you require, use it instead of re-purposing an element and adding an ARIA role, state or property to make it accessible. As such, it is recommended to use the native [HTML radio](/en-US/docs/Web/HTML/Element/input/radio) using form controls instead of recreating a radio's functionality with JavaScript and ARIA.

## See also

- [HTML `<input type="radio">` radio button](/en-US/docs/Web/HTML/Element/input/radio)
- [HTML `tabindex` attribute](/en-US/docs/Web/HTML/Global_attributes/tabindex)
- [ARIA: `radiogroup` role](/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [ARIA: `checkbox` role](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [ARIA: `menuitem` role](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [ARIA: `menuitemradio` role](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `menuitemradio` role](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `option` role](/en-US/docs/Web/Accessibility/ARIA/Roles/option_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
