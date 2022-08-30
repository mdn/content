---
title: ARIA live regions
slug: Web/Accessibility/ARIA/ARIA_Live_Regions
tags:
  - ARIA
  - Accessibility
  - ariaLive
---
Using JavaScript, it is possible to dynamically change parts of a page without requiring the entire page to reload — for instance, to update a list of search results on the fly, or to display a discreet alert or notification which does not require user interaction. While these changes are usually visually apparent to users who can see the page, they may not be obvious to users of assistive technologies. ARIA live regions fill this gap and provide a way to programmatically expose dynamic content changes in a way that can be announced by assistive technologies.

> **Note:** Assistive technologies will announce _dynamic_ changes in the content of a live region.
> Including an `aria-live` attribute or a specialized live region `role` (such as [`role="alert"`](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)) on the element you want to announce changes to works as long as you add the attribute before the changes occur — either in the original markup, or dynamically using JavaScript.

## Live regions

Dynamic content which updates without a page reload is generally either a region or a widget. Simple content changes which are not interactive should be marked as live regions. A live region is explicitly denoted using the `aria-live` attribute.

**`aria-live`**: The `aria-live=POLITENESS_SETTING` is used to set the priority with which screen reader should treat updates to live regions - the possible settings are: `off`, `polite` or `assertive`. The default setting is `off`. This attribute is by far the most important.

Normally, only `aria-live="polite"` is used. Any region which receives updates that are important for the user to receive, but not so rapid as to be annoying, should receive this attribute. The screen reader will speak changes whenever the user is idle.

`aria-live="assertive"` should only be used for time-sensitive/critical notifications that absolutely require the user's immediate attention. Generally, a change to an assertive live region will interrupt any announcement a screen reader is currently making. As such, it can be extremely annoying and disruptive and should only be used sparingly.

As `aria-live="off"` is the assumed default for elements, it should not be necessary to set this explicitly, unless you're trying to suppress the announcement of elements which have an implicit live region role (such as `role="alert"`).

### Basic example: Dropdown box updates useful onscreen information

A website specializing in providing information about planets provides a dropdown box. When a planet is selected from the dropdown, a region on the page is updated with information about the selected planet.

```html
<fieldset>
  <legend>Planet information</legend>
  <label for="planetsSelect">Planet:</label>
  <select id="planetsSelect" aria-controls="planetInfo">
    <option value="">Select a planet…</option>
    <option value="mercury">Mercury</option>
    <option value="venus">Venus</option>
    <option value="earth">Earth</option>
    <option value="mars">Mars</option>
  </select>
  <button id="renderPlanetInfoButton">Go</button>
</fieldset>

<div role="region" id="planetInfo" aria-live="polite">
  <h2 id="planetTitle">No planet selected</h2>
  <p id="planetDescription">Select a planet to view its description</p>
</div>

<p><small>Information courtesy <a href="https://en.wikipedia.org/wiki/Solar_System#Inner_Solar_System">Wikipedia</a></small></p>
```

```js
const PLANETS_INFO = {
  mercury: {
    title: 'Mercury',
    description: 'Mercury is the smallest and innermost planet in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods.'
  },

  venus: {
    title: "Venus",
    description: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.'
  },

  earth: {
    title: "Earth",
    description: 'Earth is the third planet from the Sun and the only object in the Universe known to harbor life.'
  },

  mars: {
    title: "Mars",
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet".'
  }
};

function renderPlanetInfo(planet) {
  const planetTitle = document.querySelector('#planetTitle');
  const planetDescription = document.querySelector('#planetDescription');

  if (planet in PLANETS_INFO) {
    planetTitle.textContent = PLANETS_INFO[planet].title;
    planetDescription.textContent = PLANETS_INFO[planet].description;
  } else {
    planetTitle.textContent = 'No planet selected';
    planetDescription.textContent = 'Select a planet to view its description';
  }
}

const renderPlanetInfoButton = document.querySelector('#renderPlanetInfoButton');

renderPlanetInfoButton.addEventListener('click', (event) => {
  const planetsSelect = document.querySelector('#planetsSelect');
  const selectedPlanet = planetsSelect.options[planetsSelect.selectedIndex].value;

  renderPlanetInfo(selectedPlanet);
});
```

{{EmbedLiveSample('Basic_example_Dropdown_box_updates_useful_onscreen_information', '', 350)}}

As the user selects a new planet, the information in the live region will be announced. Because the live region has `aria-live="polite"`, the screen reader will wait until the user pauses before announcing the update. Thus, moving down in the list and selecting another planet will not announce updates in the live region. Updates in the live region will only be announced for the planet finally chosen.

Here is a screenshot of VoiceOver on Mac announcing the update (via subtitles) to the live region:

![A screenshot of VoiceOver on Mac announcing the update to a live region. Subtitles are shown in the picture.](web_accessibility_aria_aria_live_regions.png)

## Roles with implicit live region attributes

Elements with the following [`role="…"`](/en-US/docs/Web/Accessibility/ARIA/Roles) values act as live regions by default:

<table style="width: 100%;">
 <thead>
  <tr>
   <th scope="col">Role</th>
   <th scope="col">Description</th>
   <th scope="col">Compatibility Notes</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>log</td>
   <td>Chat, error, game or other type of log</td>
   <td>To maximize compatibility, add a redundant <code>aria-live="polite"</code> when using this role.</td>
  </tr>
  <tr>
   <td>status</td>
   <td>A status bar or area of the screen that provides an updated status of some kind. Screen reader users have a special command to read the current status.</td>
   <td>To maximize compatibility, add a redundant <code>aria-live="polite"</code> when using this role.</td>
  </tr>
  <tr>
   <td>alert</td>
   <td>Error or warning message that flashes on the screen. Alerts are particularly important for client side validation notices to users. <a href="https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html" class="external" rel=" noopener">Alert Example.</a></td>
   <td>To maximize compatibility, some people recommend adding a redundant <code>aria-live="assertive"</code> when using this role. However, adding both <code>aria-live</code> and <code>role="alert"</code> causes double speaking issues in VoiceOver on iOS.</td>
  </tr>
  <tr>
   <td>progressbar</td>
   <td>A hybrid between a widget and a live region. Use this with <code>aria-valuemin</code>, <code>aria-valuenow</code> and <code>aria-valuemax</code>. (TBD: add more info here).</td>
   <td></td>
  </tr>
  <tr>
   <td>marquee</td>
   <td>for text which scrolls, such as a stock ticker.</td>
   <td></td>
  </tr>
  <tr>
   <td>timer</td>
   <td>or any kind of timer or clock, such as a countdown timer or stopwatch readout.</td>
   <td></td>
  </tr>
 </tbody>
</table>

## Additional live region attributes

(TBD: more granular information on the support of the individual attributes with combinations of OS/Browser/AT).

General support for Live Regions was added to JAWS on version 10.0. In Windows Eyes supports Live Regions since version 8.0 "for use outside of Browse Mode for Microsoft Internet Explorer and Mozilla Firefox". NVDA added some basic support for Live Regions for Mozilla Firefox back in 2008 and was improved in 2010 and 2014. In 2015, basic support was also added for Internet Explorer (MSHTML).

The Paciello Group has some [information about the state of the support of Live Regions](https://www.tpgi.com/screen-reader-support-aria-live-regions/) (2014). Paul J. Adam has researched [the support of `aria-atomic` and `aria-relevant`](https://pauljadam.com/demos/aria-atomic-relevant.html) in particular.

1. **`aria-atomic`**: The `aria-atomic=BOOLEAN` is used to set whether or not the screen reader should always present the live region as a whole, even if only part of the region changes. The possible settings are: `false` or `true`. The default setting is `false`.
2. [**`aria-relevant`**](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)

    : The `aria-relevant=[LIST_OF_CHANGES]` is used to set what types of changes are relevant to a live region. The possible settings are one or more of: `additions`, `removals`, `text`, `all`. The default setting is: `additions text`.

### Basic examples: `aria-atomic`

As an illustration of `aria-atomic`, consider a site with a simple clock, showing hours and minutes. The clock is updated each minute, with the new remaining time overwriting the current content.

```html
<div id="clock" role="timer" aria-live="polite">
  <span id="clock-hours"></span>
  <span id="clock-mins"></span>
</div>
```

```js
/* basic JavaScript to update the clock */
function updateClock() {
  const now = new Date();
  document.getElementById('clock-hours').innerHTML = now.getHours();
  document.getElementById('clock-mins').innerHTML = (`0${now.getMinutes()}`).substr(-2);
}

/* first run */
updateClock();

/* update every minute */
setInterval(updateClock, 60000);
```

The first time the function executes, the entirety of the string that is added will be announced. On subsequent calls, only the parts of the content that changed compared to the previous content will be announced. For instance, when the clock changes from "17:33" to "17:34", assistive technologies will only announce "34", which won't be very useful to users.

One way around this would be to first clear all the contents of the live region (in this case, set the `innerHTML` of both `<span id="clock-hours">` and `<span id="clock-mins">` to be empty), and then inject the new content. However, this can sometimes be unreliable, as it's dependent on the exact timing of these two updates.

`aria-atomic="true"` ensures that each time the live region is updated, the entirety of the content is announced in full (e.g. "17:34").

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true">
  …
</div>
```

Another example of `aria-atomic` - an update/notification made as a result of a user action.

```html
<div id="date-input">
  <label>Year:
    <input type="text" id="year" value="1990" onblur="change(event)"/>
  </label>
</div>

<div id="date-output" aria-atomic="true" aria-live="polite">
  The set year is:
  <span id="year-output">1990</span>
</div>
```

```js
function change(event) {
  const yearOut = document.getElementById("year-output");

  switch (event.target.id) {
    case "year":
      yearOut.innerHTML = event.target.value;
      break;
    default:
      return;
  }
};
```

Without `aria-atomic="true"` the screen reader announces only the changed value of year. With `aria-atomic="true"`, the screen reader announces "The set year is: _changed value_"

### Basic example: `aria-relevant`

With `aria-relevant` you can specify which types of changes/updates to a live region should be announced.

As an example, consider a chat site that wants to display a list of users currently logged in. Rather than just announcing the users that are currently logged in, we also want to trigger an announcement specifically when a user is _removed_ from the list. We can achieve this by specifying `aria-relevant="additions removals"`.

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- use JavaScript to add remove users here-->
</ul>
```

Breakdown of ARIA live properties:

- `aria-live="polite"` indicates that the screen reader should wait until the user is idle before presenting updates to the user. This is the most commonly used value, as interrupting the user with "assertive" might interrupt their flow.
- `aria-atomic` is not set (`false` by default) so that only the added or removed users should be spoken and not the entire roster each time.
- `aria-relevant="additions removals"` ensures that both users added or removed to the roster will be spoken.

## See also

- [ARIA roles](/en-US/docs/Web/Accessibility/ARIA/Roles)
