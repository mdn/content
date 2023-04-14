---
title: "Multipart labels: Using ARIA for labels with embedded fields inside them"
slug: Web/Accessibility/ARIA/Multipart_labels
page-type: guide
---

<section id="Quick_links">
  <ol>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/Annotations">ARIA annotations</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Guides">ARIA guides</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">ARIA live regions</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide">ARIA screen reader implementors guide</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques">Using ARIA: Roles, states, and properties</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/How_to_file_ARIA-related_bugs">How to file ARIA-related bugs</a></li>
    <li class="toggle">
      <details><summary>ARIA states and properties</summary>
        {{ListSubpagesForSidebar("Web/Accessibility/ARIA/Attributes", 1)}}
      </details>
    </li>
    <li class="toggle">
      <details><summary>WAI-ARIA Roles</summary>
        {{ListSubpagesForSidebar("Web/Accessibility/ARIA/Roles", 1)}}
      </details>
    </li>
  </ol>
</section>

## Problem

You have a form where you ask your user a question, but the answer is mentioned in the question itself. A classic example we all know from our browser settings is the setting "Delete history after x days". "Delete history after" is to the left of the textbox, x is the number, for example 21, and the word "days" follows the textbox, forming a sentence that is easy to understand.

If you're using a screen reader, have you noticed that, when you go to this setting in Firefox, it tells you "Delete history after 21 days"?, followed by the announcement that you're in a textbox, and that it contains the number 21. Isn't that cool? You do not need to navigate around to find out the unit. "Days" could easily be "months" or "years", and in many ordinary dialogs, there is no way to find this out other than navigating around with screen reviewing commands.

The solution is in an ARIA attribute called `aria-labelledby`. Its parameter is a string that consists of the IDs of the HTML elements you want to concatenate into a single accessible name.

Both `aria-labelledby` and `aria-describedby` are specified on the form element that is to be labelled, for example an `<input>` In both cases, the label for/label control bindings that may also exist are overridden by `aria-labelledby`. If on an HTML page you provide `aria-labelledby`, you should also provide a label for construct to also support older browsers that do not have ARIA support yet. With Firefox 3, your visually impaired users will automatically get better accessibility from the new attribute, but the users of older browsers are not left in the dark this way.

### Example

{{ EmbedLiveSample("Example") }}

```css hidden
body {
  margin: 1rem;
}
```

```html
<input
  aria-labelledby="labelShutdown shutdownTime shutdownUnit"
  type="checkbox" />

<span id="labelShutdown">Shut down computer after</span>

<input
  aria-labelledby="labelShutdown shutdownTime shutdownUnit"
  id="shutdownTime"
  type="text"
  value="10" />

<span id="shutdownUnit"> minutes</span>
```

## A Note for JAWS 8 users

JAWS 8.0 has its own logic to find labels, causing it to always override the accessibleName the textbox of an HTML document gets. With JAWS 8, I have not found a way to make it to accept the label from the example above. But NVDA and Window-Eyes do it just fine, and Orca on Linux also has no problems.

> **Note:** TBD: add more compatibility info

## Can this be done without ARIA?

Community member Ben Millard has pointed out in a blog post that [controls can be embedded in labels as shown in the above example using HTML 4](https://projectcerbera.com/blog/2008/03#day24), by embedding the input into the label. Thanks for that info, Ben! It is very useful and shows that some techniques that have been available for years escape even the gurus sometimes. This technique works in Firefox; however, it doesn't currently work in many other browsers, including IE. For labels with embedded form controls, using `aria-labelledby` is still the best approach.
