---
title: ARIA Screen Reader Implementors Guide
slug: Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide
tags:
  - ARIA
  - Accessibility
---
<h2 id="Live_Regions">Live Regions</h2>
<p>This is just a guide. Live region markup is a complex area which is somewhat open to interpretation. The following is intended to provide implementation guidance that respects screen readers developers' need to try different things. The intention is to strike a balance between providing useful guidance on how to use the markup's intended meaning while supporting live regions as an area for screen readers to innovate and compete.</p>
<h3 id="Interpreting_WAI-ARIA_live_region_markup">Interpreting WAI-ARIA live region markup</h3>
<ol>
 <li>Live changes are hints: in general live region markup is provided by the author as hints, and the assistive technology may allow for global, site or even region-specific settings, as well as heuristics to help with live changes on pages that have no WAI-ARIA hints.</li>
 <li>Optionally, create a second, additional queue if the user configures a second hardware channel: If there are two channels for presentation (e.g. text to speech and a Braille display), then two queues can be maintained to allow for parallel presentation. The channels could be user configured for presenting live regions based on role or politeness.</li>
 <li>Busy regions: Any changes in a region marked with aria-busy="true" should not be added to the queue until that attribute is cleared.</li>
 <li>Politeness (aria-live or from role) takes first precedence,: items should be added to the queue based on their politeness level from the aria-live property or inherited from the role (e.g. role="log" is polite by default). Assertive items are first then politeness level. Alternatively, implementations may choose to have a policy of clearing more polite items, e.g. assertive items clear any polite items from the queue.</li>
 <li>Time takes second precedence: Prioritize items with the same politeness level according to when the event occurs (earlier events come first). Present items of the same politeness level in the order of what occurred first.</li>
 <li>Atomic (aria-atomic="true") regions with multiple changes should not be presented twice with the same content. As a new event for an atomic region is added to the queue remove an earlier event for the same region. It is probably desirable to have at least a tiny timeout before presenting atomic region changes, in order to avoid presenting the region twice for two changes that occur quickly one after the other.</li>
 <li>Include labels when presenting changes: if the change occurs in something with a semantic label of some kind, speak the label. This is particularly important for changes in data cells, where the column and row headers provide important contextual information.</li>
</ol>
<h3 id="Ideas_for_Settings_and_Heuristics">Ideas for Settings and Heuristics</h3>
<ol>
 <li>Allow for a different voice (in text-to-speech) or other varying presentational characteristics to set live changes apart.</li>
 <li>When no WAI-ARIA markup is present, automatically present some changes unless the user configures all live changes to off. For example, automatically speak changes that are caused by the user's own input, as part of the context of that input.</li>
 <li>Allow global settings to turn off the presentation of live changes, present all live changes, use markup, or be "smart" (use heuristics)</li>
</ol>
<h3 id="Details_for_Processing_via_Platform_Accessibility_APIs">Details for Processing via Platform Accessibility APIs</h3>
<p>We hope browser manufacturers will work to provide consistent implementations. The most complete implementation of live regions currently is in Firefox 3.  Here is how <a href="/en-US/docs/AJAX/WAI_ARIA_Live_Regions/API_Support">WAI-ARIA live regions are exposed in Firefox 3</a>.</p>
