---
title: Server-side rendering (SSR)
slug: Glossary/SSR
page-type: glossary-definition
---

{{GlossarySidebar}}

**Server-side rendering** (SSR) refers to the practice of generating HTML content on the server and sending it to the client. SSR is opposed to {{glossary("CSR", "client-side rendering")}}, where the client generates the HTML content using JavaScript. Both techniques are not mutually exclusive and can be used together in the same application.

A {{glossary("SSG", "static site")}} can be considered as SSR (and can be generated using SSR infrastructure), but there are nuanced differences. Content of a static site is generated at build time, not at request time. Static sites often do not need to be deployed on a server at all, and can be served from a {{glossary("CDN")}}.

The SSR/CSR distinction is more meaningful for sites with dynamic content, for example live-updating or user-specific content. In these cases, for every request, the server generates the HTML content on-the-fly because it is unrealistic to pregenerate every possible page. The HTML file contains near-complete page content, and any JavaScript asset is only to enable interactivity.

Benefits of SSR include:

- Accessibility: the page is (somewhat) usable without JavaScript, for example if Internet is slow, the user has disabled JavaScript, or the browser is old and JavaScript fails to run. However, any interactivity or client-side logic will not work.
- Crawler-friendliness: search engines, social media crawlers, and other bots can easily read the content without needing to execute JavaScript. Note that major search engines are capable of executing JavaScript so pure CSR sites can still be indexed, but social media crawlers usually cannot.
- Performance: the server can know ahead-of-time what content is needed and can fetch all necessary data at once, compared to CSR where the client is often only aware of further dependencies when it renders the initial page, causing a waterfall of requests.

Both SSR and CSR have their performance tradeoffs, and a mix of SSR and CSR can be used to combine the benefits of both techniques. For example, the server can generate a page skeleton with empty placeholders, and the client can fetch additional data and update the page as needed.

## See also

- [Introduction to client-side frameworks > server-side rendering](/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#server-side_rendering)
- [Server-side scripting](https://en.wikipedia.org/wiki/Server-side_scripting) on Wikipedia
- {{glossary("CSR", "Client-side rendering")}}
- {{glossary("SSG", "Static site generator")}}
- {{glossary("SPA", "Single-page application")}}
