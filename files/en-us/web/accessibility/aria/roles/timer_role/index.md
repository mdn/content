---
title: 'ARIA: timer role'
slug: Web/Accessibility/ARIA/Roles/timer_role
tags:
  - ARIA
  - ARIA Role
  - ARIA widget
  - Reference
  - Role Timer
  - timer
---

The **`timer`** role indicates to assistive technologies that an element is a numerical counter listing the amount of elapsed time from a starting point or the remaining time until an end point. 

```html
<div role="timer" id="eggtimer">0</div>
```

This defines this `div` element as a timer with no remaining time.

## Description

The `timer` role indicates to assistive technologies that this part of the web content is a live region containing a timer listing the time remaining or elapsed time. A timer's inner text should be an updating current time measurement. While the value does not necessarily need to be machine parsable, it should continuously update at regular intervals unless the timer is paused or reaches its end-point.

Along with alert, log, and marquee, the `timer` role is a live region and can be modified by live region attributes. 

### Associated WAI-ARIA roles, states, and properties

- aria-label
  - : Used to provide the name of the timer. Use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) if a visible label is present, otherwise use [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label).	

- aria-live

  - : Elements with the role `timer` have an implicit [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) value of `off`.

- aria-describedby
  - : Used to indicate the idref of an element that contains additional instructions for navigating or operating this element.

- aria-roledescription
  - : Used to give the timer a more descriptive role text for screen readers to speak. This should be localized.


## Examples

Some prominent web timers include clocks, stop watches and countdowns, such as ticketing websites, e-commerce sites, and event countdowns (see <https://countingdownto.com/>).

As an illustration of [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic), consider a site with a simple clock, showing hours and minutes. The clock is updated each minute, with the new remaining time overwriting the current content.

```html
<div id="clock" role="timer" aria-live="off">20</div>

<button onclick="startTimer('clock')">start</button>
```

```js
/* basic JavaScript to update a timer */
function startTimer(timerName) {
  // get the number of seconds
   let timer = document.getElementById(timerName),
       seconds = parseInt(timer.innerText);
  // remove a second
  // updated the content of timer
   timer.innerText = --seconds
  // if timer != 0, setTimeout
  if (seconds) {
    setTimeout( function() {
      startTimer(timerName);
    }, 1000);
  }
}
```

{{EmbedLiveSample("Examples", 600, 130)}}

The first time the function executes, the entirety of the string that is added will be announced. On subsequent calls, only the parts of the content that changed compared to the previous content will be announced. For instance, when the clock changes from "17:33" to "17:34", assistive technologies will only announce "4", which won't be very useful to users.

One way around this would be to first clear the contents of the live region, and then inject the new content. However, this can sometimes be unreliable, as it's dependent on the exact timing of these two updates.

`aria-atomic="true"` ensures that each time the live region is updated, the entirety of the content is announced in full (e.g. "Time: 17:34").

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true"></div>
```

## Accessibility concerns

 If a time limit needs to be in place, for example, for security reasons, the user should have the option to turn it off or extend it. This restriction does not apply if the time limit is due to a live event, such as an auction or a game, or if the time to complete the form is essential for a valid submission.

## Specifications

| Specification                                    | Status                   |
| ------------------------------------------------ | ------------------------ |
| {{SpecName("ARIA","#timer","timer")}} | {{Spec2('ARIA')}} |


## See also

- [ARIA: `alert` role](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [ARIA: `log` role](/en-US/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `marquee` role](/en-US/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `status` role](/en-US/docs/Web/Accessibility/ARIA/Roles/status_role)t
- [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [`timer` example on Codepen](https://codepen.io/heydon/pres/NGgNjZ) by Heydon Pickering

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
