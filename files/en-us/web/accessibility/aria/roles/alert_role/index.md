---
title: 'ARIA: alert role'
slug: Web/Accessibility/ARIA/Roles/Alert_Role
tags:
  - ARIA
  - ARIA Role
  - ARIA alert
  - ARIA widget
  - Reference
---
The **[`alert`](href="https://www.w3.org/TR/wai-aria-1.1/#alert)** role can be used to tell the user an element has been dynamically updated. Screen readers will instantly start reading out the updated content when the role is added. If the user is expected to close the alert, then the [`alertdialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/Alertdialog_Role) role should be used instead.</span></p>

## Description

One of the five live region roles, the [`alert`](https://www.w3.org/TR/wai-aria-1.1/#alert) role is used to provide the user with important, and usually time-sensitive, information, and often to tell the user an element has been dynamically updated.

The `alert` role is added to the node containing an alert message, not the element causing the alert to be triggered. Alerts are [assertive live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Setting `role="alert"` is equivalent to setting `aria-live="assertive"` and `aria-atomic="true"`. They don't receive focus, and therefore focus does not need to be managed and no user interaction should be required.

The most important thing to know about the `alert` role is that it is for dynamic content. It is perfect for situations such as when a user fills out a form and JavaScript is used to add an error message - the alert would immediately read out the message. It should not be used on HTML where the user hasn't interacted with it. For example, if a page loads with multiple visible alerts scattered throughout, none would be read because they are not dynamically triggered.

## Examples

The most basic way to trigger an alert is by adding `role="alert"` to an element that has `display: none;` by default. When the [display](/en-US/docs/Web/CSS/CSS_Display) value is changed with CSS or JavaScript, it would automatically trigger the screen reader to read out the content.

```html
<p role="alert" style="display: none;">The alert will trigger when the element becomes visible.</p>
```

While triggering an alert via CSS alone is possible, it is better to rely on JavaScript because it has more browser/screen reader support and is often more appropriate as part of a larger user interaction such as inside an event handler or form validation. With JavaScript, developers control the adding and removing of alerts as appropriate.

```html
<button type="button">Trigger alert</button>
<p class="alert">The alert will trigger when the button is pressed.</p>
```

```js
const btn = document.querySelector('button');
btn.addEventListener('click', triggerAlert);

function triggerAlert() {
  var alertEl = document.querySelector('.alert');
  alertEl.setAttribute("role", "alert");
}
```

## Accessibility concerns

The alert role should read out content that has changed, or bring the user's attention to it immediately, so it should not be used for static content or used regularly. Alerts, by definition, are disruptive. Lots of alerts at once or unnecessary alerts will create a bad user experience.

## Specifications

| Specification                                                                    | Status                                           |
| -------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#alert","Alert")}}                                 | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.1","#alert","Alert")}} | {{Spec2('ARIA Authoring Practices')}} |

## See also

- [ARIA: Alertdialog Role](/en-US/docs/Web/Accessibility/ARIA/Roles/Alertdialog_Role)
- [ARIA alert support - The Paciello Group](https://developer.paciellogroup.com/blog/2017/04/aria-alert-support/)
- ARIA Live Regions

<section id="Quick_links"><ol><li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA roles</strong></a>{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}</li></ol></section>
