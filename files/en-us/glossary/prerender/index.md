---
title: Prerender
slug: Glossary/Prerender
page-type: glossary-definition
---

{{GlossarySidebar}}

Prerendering refers to the practice of speculatively {{Glossary("prefetch", "prefetching")}} and _rendering_ pages that the user is likely to navigate to in the near future (the browser renders the page in the background in what is effectively an invisible separate tab). Prerendering includes downloading a document's subresources and running associated JavaScript.

If the user then chooses to navigate to the page, display of its content can be near instant.

Prerendering might be used, for example, to fetch the page resources linked by a "Next" button, or a link popup that a user hovers over, or the likely page target of the URL being entered into the address bar. The following [speculation rules](/en-US/docs/Web/API/Speculation_Rules_API) could be included in the head of a document to hint to the browser that it should prerender `next.html` and `next2.html`, as either might reasonably be a target of the next navigation:

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"]
      }
    ]
  }
</script>
```

Prerendering results in faster display time than prefetching and hence a better user experience, at the cost of more resources being consumed.

## See also

- [Speculative loading](/en-US/docs/Web/Performance/Speculative_loading)
- Related glossary terms:
  - {{Glossary("Prefetch")}}
- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages#prerendering-from-the-address-bar) on developer.chrome.com
- [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API)
