---
title: 'ARIA: alert role'
slug: Web/Accessibility/ARIA/Roles/alert_role
tags:
  - ARIA
  - Alert
  - Live region
  - Accessibility
  - ARIA Role
  - ARIA alert
  - ARIA widget
  - Reference
spec-urls:
  - https://w3c.github.io/aria/#alert
  - https://w3c.github.io/aria-practices/#log
---
The `alert` role is for important, and usually time-sensitive, information. The `alert` is a type of [`status`](/en-US/docs/Web/Accessibility/ARIA/Roles/status_role) processed as an atomic live region.

## Description

The `alert` role is used to communicate an important and usually time-sensitive message to the user. When this role is added to an element, the browser will send out an accessible alert event to assistive technology products which can then notify the user.

The alert role should only be used for information that requires the user's immediate attention, for example:

- An invalid value was entered into a form field
- The user's login session is about to expire
- The connection to the server was lost so local changes will not be saved

The `alert` role should only be used for text content, not interactive elements such as links or buttons. The element with the `alert` role does not have to be able to receive focus, as screen readers (speech or braille) will automatically announce the updated content regardless of where keyboard focus when the role is added.

The `alert` role is added to the node containing an alert message, **not** the element causing the alert to be triggered. Alerts are [assertive live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Setting `role="alert"` is equivalent to setting [`aria-live="assertive"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) and [`aria-atomic="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic). As they don't receive focus, focus does not need to be managed and no user interaction should be required.

> **Warning:** Because of its intrusive nature, the `alert` role must be used sparingly and only in situations where the user's immediate attention is required.

The [`alert`](https://www.w3.org/TR/wai-aria-1.1/#alert) role is of the five [live region](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) roles. Dynamic changes that are less urgent should use a less aggressive method, such as including `aria-live="polite"` or using an other live region role like [`status`](/en-US/docs/Web/Accessibility/ARIA/Roles/status_role). If the user is expected to close the alert, then the [`alertdialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) role should be used instead.

The most important thing to know about the `alert` role is that it's for content that is dynamically displayed, not for content that appears on page load. It is perfect for situations such as when a user fills out a form and JavaScript is used to add an error message - the alert would immediately read out the message. It should not be used on HTML that the user hasn't interacted with. For example, if a page loads with multiple visible alerts scattered throughout, the alert role should not be used, as the messages were not dynamically triggered.

If an element has `role="alert"` and `display: none;` set, when the [`display`](/en-US/docs/Web/CSS/CSS_Display) value is changed with CSS or JavaScript, it automatically triggers the screen reader to read out the content.

```html
<p role="alert" style="display: none;">This alert will trigger when the element becomes visible.</p>
```

While triggering an alert via CSS alone is possible, it is better to rely on JavaScript because it has more browser/screen reader support and is often more appropriate as part of a larger user interaction, such as inside an event handler or form validation.

With JavaScript, developers control the adding and removing of alerts as appropriate.

```html
<button type="button">Trigger alert</button>
<p class="alert">The alert will trigger when the button is pressed.</p>
```

```js
const btn = document.querySelector('button');
btn.addEventListener('click', triggerAlert);

function triggerAlert() {
  const alertEl = document.querySelector('.alert');
  alertEl.setAttribute("role", "alert");
}
```

As the `alert` role reads out content that has changed, bring the user's attention to it immediately, it should not be used for static content nor used regularly. Alerts, by definition, are disruptive. Several alerts at once, and unnecessary alerts, create bad user experiences.

## Examples

Following are four ways of creating alerts:

### Example 1: Adding the role in the HTML code

Here, the alert role is added directly into the HTML source code. When the element finishes loading the screen reader will be notified of the alert.

```html
<h2 role="alert">Your form could not be submitted because of 3 validation errors.</h2>
```

If the element is in the original source code when the page loads, the screen reader will announce the error immediately after announcing the page title.

### Example 2: Dynamically adding an element with the alert role

This snippet dynamically creates an element with an alert role and adds it to the document structure.

```js
let myAlert = document.createElement("p");
myAlert.setAttribute("role", "alert");
let myAlertText = document.createTextNode("You must agree with our terms of service to create an account.");
myAlert.appendChild(myAlertText);
document.body.appendChild(myAlert);
```

### Example 3: Adding alert role to an existing element

Sometimes it is useful to add an `alert` role to an element that is already visible on the page rather than creating a new element. This allows the developer to reiterate information that has become more relevant or urgent to the user. For example, a form control may have instructions about the expected value. If a different value is entered, `role="alert"` can be added to the instruction text so that the screen reader announces it as an alert.

```html
<p id="formInstruction">You must select at least 3 options</p>
```

```js
// When the user tries to submit the form with less than 3 checkboxes selected:
document.getElementById("formInstruction").setAttribute("role", "alert");
```

### Example 4: Making an element with an alert role visible

If an element already has `role="alert"` and is initially hidden using CSS, making it visible will cause the alert to fire as if it was just added to the page. This means that an existing alert can be "reused" multiple times.

```css
.hidden {
  display:none;
}
```

```html
<p id="expirationWarning" role="alert" class="hidden">Your log in session will expire in 2 minutes</p>
```

```js
// removing the 'hidden' class makes the element visible, which will make the screen reader announce the alert:
document.getElementById("expirationWarning").classList.remove('hidden');
```

## Specifications

{{Specifications}}

## See also

- [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [ARIA: `log` role](/en-US/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `marquee` role](/en-US/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `status` role](/en-US/docs/Web/Accessibility/ARIA/Roles/status_role)
- [ARIA: `timer` role](/en-US/docs/Web/Accessibility/ARIA/Roles/timer_role)
- [ARIA: `alertdialog` role](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [ARIA: live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [ARIA alert support - The Paciello Group](https://www.tpgi.com/aria-alert-support/)
- [ARIA Practices alert example](https://w3c.github.io/aria-practices/examples/alert/alert.html)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
