---
title: Browser compatibility and Scroll Snap
slug: Web/CSS/CSS_Scroll_Snap/Browser_compat
tags:
  - CSS
  - CSS Scroll Snap
  - Compatibility
  - FAQ
  - Guide
  - Usage
  - browser compat
  - compat
---
<div>{{CSSRef}}</div>

<p>Firefox initially implemented an early version of the Scroll Snap Specification, called Scroll Snap Points. In Firefox 68 the new version of the specification will be shipped and these old properties removed.</p>

<p>In this article, we consider questions that might arise related to compatibility across browsers and versions of browsers when adding support for scroll-snap to your web site or app.</p>

<h2 id="What_should_I_do_if_I_used_the_old_Firefox_implementation">What should I do if I used the old Firefox implementation?</h2>

<p>If you have only used the old Firefox implementation of the specification, with the properties that are detailed in Scroll Snap Points, you should update your code to use the new specification. This will ensure your scroll snapping works in all browsers which implement the specification, including Firefox. If you do not do this your scroll snapping will no longer work in Firefox 68 and up.</p>

<p>The main things to note are as follows:</p>

<ul>
 <li>The {{CSSxRef("scroll-snap-type-x")}} and {{CSSxRef("scroll-snap-type-y")}} properties have been dropped</li>
 <li>The {{CSSxRef("scroll-snap-type")}} property has become a longhand, so the old shorthand syntax like <code>scroll-snap-type:mandatory</code> will stop working</li>
</ul>

<h2 id="Can_I_use_the_old_implementation_as_a_fallback">Can I use the old implementation as a fallback?</h2>

<p>If you have already used the old implementation as a fallback, or feel you want to support users of old Firefox (or -webkit prefixed Safari), then you can continue to use the old specification as outlined in the example below.</p>

<p>In this initial example we have used the old specification alongside the current specification in order to make scroll snapping work in all browsers which support some form of scroll snapping.</p>

<p>The example adds the {{CSSxRef("scroll-snap-points-y")}} and {{CSSxRef("scroll-snap-destination")}} properties, which are deprecated, to make scroll snapping work in Firefox. We also added the {{CSSxRef("scroll-snap-type")}} property twice, once with the <code>y</code> axis value needed for browsers that support the new spec, and once for Firefox pre-68, which supports the property but without the <code>y</code> value.</p>

<p>{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-y-old-spec.html", '100%', 700)}}</p>

<h2 id="Do_I_need_to_use_both_specs">Do I need to use both specs?</h2>

<p>Scroll snapping is one of those nice parts of CSS in which the fallback is that you don't get the enhanced functionality, but everything still works. I would suggest at this point you should implement the new specification only, unless you have data to show a large number of users who would benefit from a fallback version.</p>

<p>If you want to test using <a href="/en-US/docs/Web/CSS/@supports">Feature Queries</a> for support of the new spec then we'd suggest testing for {{CSSxRef("scroll-snap-align")}} as this property did not exist in the old implementation. However, these properties shouldn't cause any problems to non-supporting browsers due to the way that browsers ignore CSS that they do not understand.</p>

<h2 id="Why_are_there_two_versions_of_scroll_snap">Why are there two versions of scroll snap?</h2>

<p>Finally, you might wonder why we ended up in a scenario where two versions exist at all. This is the reality of developing new CSS — it can't be developed in a vacuum away from browser implementations. At some point browsers need to implement a spec to show that it works, and to discover any problems that only become apparent when the spec is in use alongside other properties in the real world. In such cases we can end up with implementations of older versions available alongside newer versions as browsers are in the process of updating.</p>
