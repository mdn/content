---
title: 'ARIA: timer role'
slug: Web/Accessibility/ARIA/Roles/ARIA_timer_role
tags:
  - ARIA
  - ARIA Role
  - ARIA widget
  - Reference
  - Role Timer
---
{{draft}}

The timer role indicates to assistive technologies that an element is a numerical counter listing the amount of elapsed time from a starting point or the remaining time until an end point.

```html
<div role="timer" id="eggtimer">0</div>
```

This defines this `div` element as a timer with no remaining time.

## Description

The `timer` role indicates to assistive technologies that this part of the web content is a live region containing a timer listing the time remaining or elapsed time. A timer's inner text should be an updating current time measurement. While the value does not necessarily need to be machine parsable, it should continuously update at regular intervals unless the timer is paused or reaches its end-point.

### Associated WAI-ARIA roles, states, and properties

- aria-label
  - : Used to provide the name of the timer.
- aria-live

  - : Elements with the role `timer` have an implicit

    <a class="property-reference" href="https://www.w3.org/TR/wai-aria-1.1/#aria-live"><code>aria-live</code></a>

    value of `off`.

- aria-describedby
  - : Used to indicate the idref of an element that contains additional instructions for navigating or operating this element.
- aria-roledescription
  - : Used to give the timer a more descriptive role text for screen readers to speak. This should be localized.

### Keyboard interactions

Keyboard interaction is XXX. Focus is being managed via _XXX_.

The <kbd>tab</kbd> , <kbd>Space</kbd> and <kbd>Enter</kbd> keys, as well as <kbd>Escape</kbd> , must be handled by the application. The one exception is if focus XXX.

### Required JavaScript features

- keyPress
  - : Used to handle keyboard input and control the focus
- Click, Touch
  - : Handle as appropriate for your widget as well
- Changing attribute values
  - : `aria-activedescendant` is used to manage the focus inside the application container. Set in response to keyboard or other application events that change focus or point of interaction.

<div class="note"><p>The <code>timer</code> role does not have a related HTML widget and XXX. The author of the timer must take full responsibility for not letting users get stuck in a focus limbo or trap focus inside something the user cannot exit of. All aspects of interaction, including returning to the regular web content on other parts of the page, must be handled. Use wisely, and cautiously!</p></div>

## Examples

Some prominent web timers include clocks, stop watches and countdowns, such as ticketing websites, e-commerce sites, and event countdowns (see <https://countingdownto.com/>).

As an illustration of `aria-atomic`, consider a site with a simple clock, showing hours and minutes. The clock is updated each minute, with the new remaining time overwriting the current content.

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

Improperly using the `timer` role can unintentionally XXX

## Specifications

| Specification                                    | Status                   |
| ------------------------------------------------ | ------------------------ |
| {{SpecName("ARIA","#timer","timer")}} | {{Spec2('ARIA')}} |

## Precedence order

Applying the `timer` role will cause this and all of the descendant elements of this element to be treated like XXX

<section id="Quick_links"><ol><li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA roles</strong></a>{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}</li></ol></section>
