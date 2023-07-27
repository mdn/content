---
title: Web performance
slug: Web/Performance
page-type: landing-page
---

{{QuickLinksWithSubPages}}

Web performance is the objective measurements and the perceived user experience of load time and runtime. Web performance is how long a site takes to load, become interactive and responsive, and how smooth the content is during user interactions - is the scrolling smooth? are buttons clickable? Are pop-ups quick to load and display, and do they animate smoothly as they do so? Web performance includes both objective measurements like time to load, frames per second, and time to become interactive, and subjective experiences of how long it felt like it took the content to load.

The longer it takes for a site to respond, the more users will abandon the site. It is important to minimize the loading and response times and add additional features to conceal latency by making the experience as available and interactive as possible, as soon as possible, while asynchronously loading in the longer tail parts of the experience.

There are tools, APIs, and best practices that help us measure and improve web performance. We cover them in this section:

## Key performance guides

{{LandingPageListSubpages}}

## Beginner's tutorials

The MDN [Web Performance Learning Area](/en-US/docs/Learn/Performance) contains modern, up-to-date tutorials covering Performance essentials. Start here if you are a newcomer to performance:

- [Web performance: brief overview](/en-US/docs/Learn/Performance/What_is_web_performance)
  - : Overview of the web performance learning path. Start your journey here.
- [What is web performance?](/en-US/docs/Learn/Performance/What_is_web_performance)
  - : This article starts the module off with a good look at what performance actually is — this includes the tools, metrics, APIs, networks, and groups of people we need to consider when thinking about performance, and how we can make performance part of our web development workflow.
- [How do users perceive performance?](/en-US/docs/Learn/Performance/Perceived_performance)
  - : More important than how fast your website is in milliseconds, is how fast your users perceive your site to be. These perceptions are impacted by actual page load time, idling, responsiveness to user interaction, and the smoothness of scrolling and other animations. In this article, we discuss the various loading metrics, animation, and responsiveness metrics, along with best practices to improve user perception, if not the actual timings.
- [Web performance basics](/en-US/docs/Learn/Performance/Web_Performance_Basics)
  - : In addition to the front end components of HTML, CSS, JavaScript, and media files, there are features that can make applications slower and features that can make applications subjectively and objectively faster. There are many APIs, developer tools, best practices, and bad practices relating to web performance. Here we'll introduce many of these features ad the basic level and provide links to deeper dives to improve performance for each topic.
- [HTML performance features](/en-US/docs/Learn/Performance/HTML)
  - : Some attributes and the source order of your markup can impact the performance or your website. By minimizing the number of DOM nodes, making sure the best order and attributes are used for including content such as styles, scripts, media, and third-party scripts, you can drastically improve the user experience. This article looks in detail at how HTML can be used to ensure maximum performance.
- [Multimedia: images and video](/en-US/docs/Learn/Performance/Multimedia)
  - : The lowest hanging fruit of web performance is often media optimization. Serving different media files based on each user agent's capability, size, and pixel density is possible. Additional tips like removing audio tracks from background videos can improve performance even further. In this article we discuss the impact video, audio, and image content has on performance, and the methods to ensure that impact is as minimal as possible.
- [CSS performance features](/en-US/docs/Learn/Performance/CSS)
  - : CSS may be a less important optimization focus for improved performance, but there are some CSS features that impact performance more than others. In this article we look at some CSS properties that impact performance and suggested ways of handling styles to ensure performance is not negatively impacted.
- [JavaScript performance best practices](/en-US/docs/Learn/Performance/JavaScript)
  - : JavaScript, when used properly, can allow for interactive and immersive web experiences — or it can significantly harm download time, render time, in-app performance, battery life, and user experience. This article outlines some JavaScript best practices that should be considered to ensure even complex content is as performant as possible.
- [Mobile performance](/en-US/docs/Learn/Performance/Mobile)
  - : With web access on mobile devices being so popular, and all mobile platforms having fully-fledged web browsers, but possibly limited bandwidth, CPU and battery life, it is important to consider the performance of your web content on these platforms. This article looks at mobile-specific performance considerations.

## Using Performance APIs

- [Performance API](/en-US/docs/Web/API/Performance_API/Using_the_Performance_API)
  - : This guide describes how to use the [`Performance`](/en-US/docs/Web/API/Performance) interfaces that are defined in the [High-Resolution Time](https://w3c.github.io/hr-time/) standard.
- [Resource Timing API](/en-US/docs/Web/API/Performance_API/Resource_timing)
  - : [Resource loading and timing](/en-US/docs/Web/API/Performance_API/Resource_timing) the loading of those resources, including managing the resource buffer and coping with CORS
- [The performance timeline](/en-US/docs/Web/API/Performance_Timeline/Using_Performance_Timeline)
  - : The [Performance Timeline](/en-US/docs/Web/API/Performance_Timeline) standard defines extensions to the [`Performance`](/en-US/docs/Web/API/Performance) interface to support client-side latency measurements within applications. Together, these interfaces can be used to help identify an application's performance bottlenecks.
- [User Timing API](/en-US/docs/Web/API/Performance_API/User_timing)
  - : Create application specific timestamps using the [user timing API](/en-US/docs/Web/API/Performance_API/User_timing)'s "mark" and "measure" entry types - that are part of the browser's performance timeline.
- [Beacon API](/en-US/docs/Web/API/Beacon_API)
  - : The [Beacon](/en-US/docs/Web/API/Beacon_API) interface schedules an asynchronous and non-blocking request to a web server.
- [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : Learn to time element visibility with the [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API) and be asynchronously notified when elements of interest becomes visible.

## Other documentation

- [Firefox Profiler Performance Features](https://profiler.firefox.com/docs/#/)
  - : This website provides information on how to use and understand the performance features in your developer tools, including [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) and [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profiling with the built-in profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Learn how to profile app performance with Firefox's built-in profiler.

## Glossary Terms

- {{glossary('Beacon')}}
- {{glossary('Brotli compression')}}
- [Client hints](/en-US/docs/Web/HTTP/Client_hints)
- {{glossary('Code splitting')}}
- {{glossary('CSSOM')}}
- {{glossary('Domain sharding')}}
- {{glossary('Effective connection type')}}
- {{glossary('First contentful paint')}}
- {{glossary('First CPU idle')}}
- {{glossary('First input delay')}}
- {{glossary('First interactive')}}
- {{glossary('First meaningful paint')}}
- {{glossary('First paint')}}
- {{glossary('HTTP')}}
- {{glossary('HTTP_2', 'HTTP/2')}}
- {{glossary('Jank')}}
- {{glossary('Latency')}}
- {{glossary('Lazy load')}}
- {{glossary('Long task')}}
- {{glossary('Lossless compression')}}
- {{glossary('Lossy compression')}}
- {{glossary('Main thread')}}
- {{glossary('Minification')}}
- {{glossary('Network throttling')}}
- {{glossary('Packet')}}
- {{glossary('Page load time')}}
- {{glossary('Page prediction')}}
- {{glossary('Parse')}}
- {{glossary('Perceived performance')}}
- {{glossary('Prefetch')}}
- {{glossary('Prerender')}}
- {{glossary('QUIC')}}
- {{glossary('RAIL')}}
- {{glossary('Real User Monitoring')}}
- {{glossary('Resource Timing')}}
- {{glossary('Round Trip Time', 'Round Trip Time (RTT)')}}
- {{glossary('Server Timing')}}
- {{glossary('Speculative parsing')}}
- {{glossary('Speed index')}}
- {{glossary('SSL')}}
- {{glossary('Synthetic monitoring')}}
- {{glossary('TCP handshake')}}
- {{glossary('TCP slow start')}}
- {{glossary('Time to first byte')}}
- {{glossary('Time to interactive')}}
- {{glossary('TLS')}}
- {{glossary('TCP', 'Transmission Control Protocol (TCP)')}}
- {{glossary('Tree shaking')}}
- {{glossary('Web performance')}}

## See also

HTML

- [The `<picture>` Element](/en-US/docs/Web/HTML/Element/picture)
- [The `<video>` Element](/en-US/docs/Web/HTML/Element/video)
- [The `<source>` Element](/en-US/docs/Web/HTML/Element/source)
- [The `<img> srcset` attribute](/en-US/docs/Web/HTML/Element/img#attributes)

  - [Responsive images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [Preloading content with `rel="preload"`](/en-US/docs/Web/HTML/Attributes/rel/preload)
- <https://w3c.github.io/preload/>

CSS

- [will-change](/en-US/docs/Web/CSS/will-change)
- GPU v CPU
- Measuring layout
- Font-loading best practices

JavaScript

- [DOMContentLoaded](/en-US/docs/Web/API/Window/DOMContentLoaded_event)
- [Garbage collection](/en-US/docs/Glossary/Garbage_collection)
- [requestAnimationFrame](/en-US/docs/Web/API/window/requestAnimationFrame)

APIs

- [Performance API](/en-US/docs/Web/API/Performance_API)
- [Navigation Timing API](/en-US/docs/Web/API/Performance_API/Navigation_timing)
- [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
- [Network Information API](/en-US/docs/Web/API/Network_Information_API)
- [PerformanceNavigationTiming](/en-US/docs/Web/API/PerformanceNavigationTiming)
- [Battery Status API](/en-US/docs/Web/API/Battery_Status_API)
- [Navigator.deviceMemory](/en-US/docs/Web/API/Navigator/deviceMemory)
- [Intersection Observer](/en-US/docs/Web/API/Intersection_Observer_API)
- [Using the User Timing API](/en-US/docs/Web/API/Performance_API/User_timing)
- [High Resolution Timing API](/en-US/docs/Web/API/DOMHighResTimeStamp) ([https://w3c.github.io/hr-time/)](https://w3c.github.io/hr-time/)
- [Resource Timing API](/en-US/docs/Web/API/Performance_API/Resource_timing)
- [Page Visibility](/en-US/docs/Web/API/Page_Visibility_API)
- [Cooperative Scheduling of Background Tasks API](/en-US/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/en-US/docs/Web/API/Window/requestIdleCallback)

- [Beacon API](/en-US/docs/Web/API/Beacon_API)
- Resource Hints - [dns-prefetch](/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), preconnect, [prefetch](/en-US/docs/Glossary/Prefetch), and prerender
- [FetchEvent.preloadResponse](/en-US/docs/Web/API/FetchEvent/preloadResponse)
- [Performance Server Timing API](/en-US/docs/Web/API/PerformanceServerTiming)

Headers

- [Content-encoding](/en-US/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- [gZip](/en-US/docs/Glossary/GZip_compression)
- Client Hints

Tools

- [Performance in Firefox Developer Tools](https://profiler.firefox.com/docs/#/)

Additional Metrics

- Speed Index and Perceptual Speed Index

Best Practices

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Using Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

  - [Web Workers API](/en-US/docs/Web/API/Web_Workers_API)

- [Offline and background operation](/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Caching](/en-US/docs/Web/HTTP/Caching)
- Content Delivery Networks (CDN)
