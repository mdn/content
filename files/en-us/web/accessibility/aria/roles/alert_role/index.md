---
title: 'ARIA: alert role'
slug: Web/Accessibility/ARIA/Roles/alert_role
tags:
  - ARIA
  - Alert
  - Accessibility
  - ARIA Role
  - ARIA alert
  - ARIA widget
  - Reference
---

The `alert` role is for important, and usually time-sensitive, information. The `alert` is a type of [`status`](/en-US/docs/Web/Accessibility/ARIA/Roles/status_role) processed as an atomic [live region](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions).

## Description

The **[`alert`](href="https://www.w3.org/TR/wai-aria-1.1/#alert)** role can be used to tell the user an element has been dynamically updated. Screen readers will instantly start reading out the updated content when the role is added. If the user is expected to close the alert, then the [`alertdialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) role should be used instead.

One of the five live region roles, the [`alert`](https://www.w3.org/TR/wai-aria-1.1/#alert) role is used to provide the user with important, and usually time-sensitive, information, and often to tell the user an element has been dynamically updated.

The `alert` role is added to the node containing an alert message, **not** the element causing the alert to be triggered. Alerts are [assertive live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Setting `role="alert"` is equivalent to setting `aria-live="assertive"` and `aria-atomic="true"`. They don't receive focus, and therefore focus does not need to be managed and no user interaction should be required.

The most important thing to know about the `alert` role is that it is for dynamic content. It is perfect for situations such as when a user fills out a form and JavaScript is used to add an error message - the alert would immediately read out the message. It should not be used on HTML where the user hasn't interacted with it. For example, if a page loads with multiple visible alerts scattered throughout, none would be read because they are not dynamically triggered.

## Examples

If an element has  `role="alert"` and `display: none;` , when the [display](/en-US/docs/Web/CSS/CSS_Display) value is changed with CSS or JavaScript, it automatically triggers the screen reader to read out the content.

```html
<p role="alert" style="display: none;">The alert will trigger when the element becomes visible.</p>
```
While triggering an alert via CSS alone is possible, it is better to rely on JavaScript because it has more browser/screen reader support and is often more appropriate as part of a larger user interaction such as inside an event handler or form validation. 

With JavaScript, developers control the adding and removing of alerts as appropriate.

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

The `alert` role should read out content that has changed, or bring the user's attention to it immediately, so it should not be used for static content or used regularly. Alerts, by definition, are disruptive. Several alerts at once and unnecessary alerts create bad user experiences.

## Specifications

| Specification                                                                    | Status                                           |
| -------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#alert","Alert")}}                                 | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#log","Log")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |

## See also

- [ARIA: `log` role](/en-US/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `marquee` role](/en-US/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `status` role](/en-US/docs/Web/Accessibility/ARIA/Roles/status_role)
- [ARIA: `timer` role](/en-US/docs/Web/Accessibility/ARIA/Roles/timer_role)
- [ARIA: `alertdialog` role](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [ARIA: live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions).
- [ARIA alert support - The Paciello Group](https://developer.paciellogroup.com/blog/2017/04/aria-alert-support/)


<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
