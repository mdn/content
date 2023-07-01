---
title: Prerender
slug: Glossary/Prerender
page-type: glossary-definition
---

{{GlossarySidebar}}

Prerendering refers to the practice of speculatively [prefetching](/en-US/docs/Glossary/Prefetch) and rendering pages that the user is _likely_ to navigate to in the near future (the browser renders the page in the background in what is effectively an invisible separate tab).
If the user then chooses to navigate to the page, display of its content can be near instant.

Prerendering might be used, for example, to fetch the page resources linked by a "Next" button, or a link popup that a user hovers over, or the likely page target of the URL being entered into the address bar.

```html
<link rel="prerender" href="https://example.com/content/to/prerender" />
```

Prerendering results in faster display time than prefetching and hence a better user experience, at the cost of more resources being consumed.

## See also

- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/blog/prerender-pages/#prerendering-from-the-address-bar) describes Chrome-only features for prerending, such as pre-rendering URLs in the address bar, and use of the proposed speculation rules API.
- [prefetch](/en-US/docs/Glossary/Prefetch)
