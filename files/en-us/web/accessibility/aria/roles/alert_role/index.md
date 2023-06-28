---
title: "ARIA: alert role"
slug: Web/Accessibility/ARIA/Roles/alert_role
page-type: aria-role
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

As with all other [live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions), alerts will only be announced when the content of the element with `role="alert"` is _updated_. Make sure that the element with the role is present in the page's markup first - this will "prime" the browser and screen reader to keep watching the element for changes. After this, any changes to the content will be announced. Do not try to dynamically add/generate an element with `role="alert"` that is already populated with the alert message you want announced - this generally does _not_ lead to an announcement, as it is not a content change.

As the `alert` role reads out any content that has changed, it should be used with caution. Alerts, by definition, are disruptive. Several alerts at once, and unnecessary alerts, create bad user experiences.

## Examples

The following are common examples of alerts and how to implement them:

### Example 1: Making ready-made content inside an element with an alert role visible

If the content _inside_ the element with `role="alert"` is initially hidden using CSS, making it visible will cause the alert to fire. This means that an existing alert container element can be "reused" multiple times.

```css
.hidden {
  display: none;
}
```

```html
<div id="expirationWarning" role="alert">
  <span class="hidden">Your log in session will expire in 2 minutes</span>
</div>
```

```js
// removing the 'hidden' class makes the content inside the element visible, which will make the screen reader announce the alert:
document
  .getElementById("expirationWarning")
  .firstChild.classList.remove("hidden");
```

### Example 2: Dynamically changing the content inside an element with an alert role

Using JavaScript, you can dynamically change the content _inside_ the element with `role="alert"`. Note that if you need to fire the same alert multiple times (i.e. the content you're dynamically inserting is the same as before), this generally won't be seen as a change and will _not_ lead to an announcement. For this reason, it's usually best to briefly "clear" the contents of the alert container before then injecting the alert message.

```html
<div id="alertContainer" role="alert"></div>
```

```js
// clear the contents of the container
document.getElementById("alertContainer").innerHTML = "";
// inject the new alert message
document.getElementById("alertContainer").innerHTML =
  "Your session will expire in " + expiration + " minutes";
```

### Example 3: Visually hidden alert container for screen reader notifications

It's possible to visually hide the alert container itself, and use it to provide updates/notifications explicitly for screen readers. This can be useful in situations where important content on the page has been updated, but where the change would not be immediately obvious to a screen-reader user.

However, make sure that the container is not hidden using `display:none`, as this will hide it even from assistive technologies, meaning that they won't be notified of any changes. Instead, use something like the [`.visually-hidden` styles](https://www.a11yproject.com/posts/how-to-hide-content/).

```html
<div id="hiddenAlertContainer" role="alert" class="visually-hidden"></div>
```

```css
.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

```js
// clear the contents of the container
document.getElementById("hiddenAlertContainer").innerHTML = "";
// inject the new alert message
document.getElementById("hiddenAlertContainer").innerHTML =
  "All items were removed from your inventory.";
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
