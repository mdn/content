---
title: blink element (<blink> tag)
slug: Glossary/blink_element
page-type: glossary-definition
---

{{GlossarySidebar}}

The **`<blink>` element** (blink tag) is an obsolete HTML feature no longer supported by web browsers and no longer documented on MDN. It was used to make text content blink on and off (flash) continually.

## Brief history

In the early days of the web (the early- to mid-90s), there were not many features available for styling web pages. The [CSS](/en-US/docs/Web/CSS) specification (version 1) was first released in 1996 and not adopted consistently by browsers until much later. Before CSS, browsers experimented with several features to make particular text sections stand out and grab the user's attention. The `<blink>` element was one of these, introduced in early versions of [Netscape Navigator](/en-US/docs/Glossary/Netscape_Navigator); [Internet Explorer's](/en-US/docs/Glossary/Microsoft_Internet_Explorer) {{htmlelement("marquee")}} element was another.

The `<blink>` element was apparently created after a conversation in a bar in Mountain View between Netscape engineer [Lou Montulli](https://en.wikipedia.org/wiki/Lou_Montulli) and colleagues. When he went into the office the next morning, he found that one of his fellow engineers had stayed up all night and implemented it ([read the story here](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag)).

While initially popular, `<blink>` became much maligned because of overuse; many people found it annoying. More importantly, it degrades readability and can be particularly problematic for users with visual impairments or [cognitive disorders](/en-US/docs/Web/Accessibility/Cognitive_accessibility) such as epilepsy or ADHD. It can be disorienting or, in the worst cases, even [trigger seizures](/en-US/docs/Web/Accessibility/Seizure_disorders).

`<blink>` was never properly specified and never achieved significant cross-browser support. It can be considered a piece of web history.

## Syntax

The `<blink>` element was used like this:

```html example-bad
<blink>In ancient browsers, I may have blinked</blink>
```

### Alternatives

- The CSS {{cssxref("text-decoration-line")}} property has a `blink` value that should have the same effect, but most modern browsers ignore it.
- The JavaScript {{jsxref("String.blink()")}} method wraps a text string in `<blink></blink>` tags but, as discussed earlier, this element is no longer supported anywhere.
- [CSS animations](/en-US/docs/Web/CSS/CSS_animations) could still be used to create blinking text. However, you should avoid blinking text on web pages for the reasons discussed above.

## See also

- [Blink element](https://en.wikipedia.org/wiki/Blink_element) on Wikipedia
- [WCAG 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)
- [WCAG 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold)
