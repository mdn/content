---
title: ARIA Screen Reader Implementors Guide
slug: Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide
page-type: guide
---

<section id="Quick_links">
  <ol>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/Annotations">ARIA annotations</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Guides">ARIA guides</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">ARIA live regions</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide">ARIA screen reader implementors guide</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques">Using ARIA: Roles, states, and properties</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/Multipart_labels">Multipart labels</a></li>
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

## Live Regions

This is just a guide. Live region markup is a complex area which is somewhat open to interpretation. The following is intended to provide implementation guidance that respects screen readers developers' need to try different things. The intention is to strike a balance between providing useful guidance on how to use the markup's intended meaning while supporting live regions as an area for screen readers to innovate and compete.

### Interpreting WAI-ARIA live region markup

1. Live changes are hints: in general live region markup is provided by the author as hints, and the assistive technology may allow for global, site or even region-specific settings, as well as heuristics to help with live changes on pages that have no WAI-ARIA hints.
2. Optionally, create a second, additional queue if the user configures a second hardware channel: If there are two channels for presentation (e.g. text to speech and a Braille display), then two queues can be maintained to allow for parallel presentation. The channels could be user configured for presenting live regions based on role or politeness.
3. Busy regions: Any changes in a region marked with aria-busy="true" should not be added to the queue until that attribute is cleared.
4. Politeness (`aria-live` or from [role](/en-US/docs/Web/Accessibility/ARIA/Roles)) takes first precedence,: items should be added to the queue based on their politeness level from the aria-live property or inherited from the role (e.g. [role="log"](/en-US/docs/Web/Accessibility/ARIA/Roles/log_role) is polite by default). Assertive items are first then politeness level. Alternatively, implementations may choose to have a policy of clearing more polite items, e.g. assertive items clear any polite items from the queue.
5. Time takes second precedence: Prioritize items with the same politeness level according to when the event occurs (earlier events come first). Present items of the same politeness level in the order of what occurred first.
6. Atomic (`aria-atomic="true"`) regions with multiple changes should not be presented twice with the same content. As a new event for an atomic region is added to the queue remove an earlier event for the same region. It is probably desirable to have at least a tiny timeout before presenting atomic region changes, in order to avoid presenting the region twice for two changes that occur quickly one after the other.
7. Include labels when presenting changes: if the change occurs in something with a semantic label of some kind, speak the label. This is particularly important for changes in data cells, where the column and row headers provide important contextual information.

### Ideas for Settings and Heuristics

1. Allow for a different voice (in text-to-speech) or other varying presentational characteristics to set live changes apart.
2. When no WAI-ARIA markup is present, automatically present some changes unless the user configures all live changes to off. For example, automatically speak changes that are caused by the user's own input, as part of the context of that input.
3. Allow global settings to turn off the presentation of live changes, present all live changes, use markup, or be "smart" (use heuristics)

### Details for Processing via Platform Accessibility APIs

We hope browser manufacturers will work to provide consistent implementations. The most complete implementation of live regions currently is in Firefox 3. Here is how [WAI-ARIA live regions are exposed in Firefox 3](/en-US/docs/AJAX/WAI_ARIA_Live_Regions/API_Support).
