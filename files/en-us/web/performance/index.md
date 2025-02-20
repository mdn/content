---
title: Web performance
short-title: Performance
slug: Web/Performance
page-type: landing-page
sidebar: performancesidebar
---

Web performance is the objective measurements and the perceived user experience of load time and runtime. Web performance is how long a site takes to load, become interactive and responsive, and how smooth the content is during user interactions - is the scrolling smooth? are buttons clickable? Are pop-ups quick to load and display, and do they animate smoothly as they do so? Web performance includes both objective measurements like time to load, frames per second, and time to become interactive, and subjective experiences of how long it felt like it took the content to load.

The longer it takes for a site to respond, the more users will abandon the site. It is important to minimize the loading and response times and add additional features to conceal latency by making the experience as available and interactive as possible, as soon as possible, while asynchronously loading in the longer tail parts of the experience.

There are tools, APIs, and best practices that help us measure and improve web performance. We cover them in this section:

## Web performance guides

- [Animation performance and frame rate](/en-US/docs/Web/Performance/Guides/Animation_performance_and_frame_rate)
  - : Animation on the web can be done via {{domxref('SVGAnimationElement', 'SVG')}}, {{domxref('window.requestAnimationFrame','JavaScript')}}, including {{htmlelement('canvas')}} and {{domxref('WebGL_API', 'WebGL')}}, CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animated GIFs and even animated PNGs and other image types.
    The performance cost of animating a CSS property can vary from one property to another, and animating expensive CSS properties can result in {{glossary('jank')}} as the browser struggles to hit a smooth {{glossary("FPS", "frame rate")}}.
- [Critical rendering path](/en-US/docs/Web/Performance/Guides/Critical_rendering_path)
  - : The Critical Rendering Path is the sequence of steps the browser goes through to convert the HTML, CSS, and JavaScript into pixels on the screen. Optimizing the critical render path improves render performance.
    The critical rendering path includes the [Document Object Model](/en-US/docs/Web/API/Document_Object_Model) (DOM), [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model) (CSSOM), render tree and layout.
- [CSS and JavaScript animation performance](/en-US/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
  - : Animations are critical for a pleasurable user experience on many applications. There are many ways to implement web animations, such as CSS {{cssxref("transition","transitions")}}/{{cssxref("animation","animations")}} or JavaScript-based animations (using {{domxref("Window.requestAnimationFrame","requestAnimationFrame()")}}). In this article, we analyze the performance differences between CSS-based and JavaScript-based animation.
- [Using dns-prefetch](/en-US/docs/Web/Performance/Guides/dns-prefetch)
  - : **`DNS-prefetch`** is an attempt to resolve domain names before resources get requested. This could be a file loaded later or link target a user tries to follow.
- [Performance fundamentals](/en-US/docs/Web/Performance/Guides/Fundamentals)
  - : Performance means efficiency. In the context of Open Web Apps, this document explains in general what performance is, how the browser platform helps improve it, and what tools and processes you can use to test and improve it.
- [Populating the page: how browsers work](/en-US/docs/Web/Performance/Guides/How_browsers_work)
  - : Users want web experiences with content that is fast to load and smooth to interact with. Therefore, a developer should strive to achieve these two goals.
    To understand how to improve performance and perceived performance, it helps to understand how the browser works.
- [Recommended Web Performance Timings: How long is too long?](/en-US/docs/Web/Performance/Guides/How_long_is_too_long)
  - : There are no clear set rules as to what constitutes a slow pace when loading pages, but there are specific guidelines for indicating content will load (1 second), idling (50ms), animating (16.7ms) and responding to user input (50 to 200ms).
- [Lazy loading](/en-US/docs/Web/Performance/Guides/Lazy_loading)
  - : **Lazy loading** is a strategy to identify resources as non-blocking (non-critical) and load these only when needed. It's a way to shorten the length of the [critical rendering path](/en-US/docs/Web/Performance/Guides/Critical_rendering_path), which translates into reduced page load times.
- [Navigation and resource timings](/en-US/docs/Web/Performance/Guides/Navigation_and_resource_timings)
  - : **Navigation timings** are metrics measuring a browser's document navigation events. **Resource timings** are detailed network timing measurements regarding the loading of an application's resources. Both provide the same read-only properties, but navigation timing measures the main document's timings whereas the resource timing provides the times for all the assets or resources called in by that main document and the resources' requested resources.
- [Optimizing startup performance](/en-US/docs/Web/Performance/Guides/Optimizing_startup_performance)
  - : Improving your startup performance is often one of the highest value performance optimizations that can be made. How long does your app take to start up? Does it seem to lock up the device or the user's browser while the app loads? That makes users worry that your application has crashed, or that something else is wrong. Good user experience includes ensuring your app loads quickly. This article provides performance tips and suggestions for both writing new applications and porting applications to the web from other platforms.
- [Performance budgets](/en-US/docs/Web/Performance/Guides/Performance_budgets)
  - : A performance budget is a limit to prevent regressions. It can apply to a file, a file type, all files loaded on a page, a specific metric (e.g. [Time to Interactive](/en-US/docs/Glossary/Time_to_interactive)), a custom metric (e.g. Time to Hero Element), or a threshold over a period of time.
- [Performance Monitoring: RUM vs. synthetic monitoring](/en-US/docs/Web/Performance/Guides/Rum-vs-Synthetic)
  - : **Synthetic monitoring** and **real user monitoring (RUM)** are two approaches for monitoring and providing insight into web performance. RUM and synthetic monitoring provide for different views of performance and have benefits, good use cases and shortfalls. RUM is generally best suited for understanding long-term trends whereas synthetic monitoring is very well suited to regression testing and mitigating shorter-term performance issues during development. In this article we define and compare these two performance monitoring approaches.
- [Speculative loading](/en-US/docs/Web/Performance/Guides/Speculative_loading)
  - : **Speculative loading** refers to the practice of performing navigation actions (such as DNS fetching, fetching resources, or rendering documents) before the associated pages are actually visited, based on predictions as to what pages the user is most likely to visit next.
- [Understanding latency](/en-US/docs/Web/Performance/Guides/Understanding_latency)
  - : **Latency** is the time it takes for a packet of data to travel from source to a destination. In terms of performance optimization, it's important to optimize to reduce causes of latency and to test site performance emulating high latency to optimize for users with lousy connections. This article explains what latency is, how it impacts performance, how to measure latency, and how to reduce it.

## Tutorials for beginners

The MDN [Web Performance Learning Area](/en-US/docs/Learn_web_development/Extensions/Performance) contains modern, up-to-date tutorials covering Performance essentials. Start here if you are a newcomer to performance:

- [Web performance: brief overview](/en-US/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Overview of the web performance learning path. Start your journey here.
- [What is web performance?](/en-US/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : This article starts the module off with a good look at what performance actually is — this includes the tools, metrics, APIs, networks, and groups of people we need to consider when thinking about performance, and how we can make performance part of our web development workflow.
- [How do users perceive performance?](/en-US/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : More important than how fast your website is in milliseconds, is how fast your users perceive your site to be. These perceptions are impacted by actual page load time, idling, responsiveness to user interaction, and the smoothness of scrolling and other animations. In this article, we discuss the various loading metrics, animation, and responsiveness metrics, along with best practices to improve user perception, if not the actual timings.
- [Web performance basics](/en-US/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics)
  - : In addition to the front end components of HTML, CSS, JavaScript, and media files, there are features that can make applications slower and features that can make applications subjectively and objectively faster. There are many APIs, developer tools, best practices, and bad practices relating to web performance. Here we'll introduce many of these features ad the basic level and provide links to deeper dives to improve performance for each topic.
- [HTML performance features](/en-US/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Some attributes and the source order of your markup can impact the performance of your website. By minimizing the number of DOM nodes, making sure the best order and attributes are used for including content such as styles, scripts, media, and third-party scripts, you can drastically improve the user experience. This article looks in detail at how HTML can be used to ensure maximum performance.
- [Multimedia: images and video](/en-US/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : The lowest hanging fruit of web performance is often media optimization. Serving different media files based on each user agent's capability, size, and pixel density is possible. Additional tips like removing audio tracks from background videos can improve performance even further. In this article we discuss the impact video, audio, and image content has on performance, and the methods to ensure that impact is as minimal as possible.
- [CSS performance features](/en-US/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS may be a less important optimization focus for improved performance, but there are some CSS features that impact performance more than others. In this article we look at some CSS properties that impact performance and suggested ways of handling styles to ensure performance is not negatively impacted.
- [JavaScript performance best practices](/en-US/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript, when used properly, can allow for interactive and immersive web experiences — or it can significantly harm download time, render time, in-app performance, battery life, and user experience. This article outlines some JavaScript best practices that should be considered to ensure even complex content is as performant as possible.

## Using Performance APIs

- [Resource Timing API](/en-US/docs/Web/API/Performance_API/Resource_timing)
  - : [Resource loading and timing](/en-US/docs/Web/API/Performance_API/Resource_timing) the loading of those resources, including managing the resource buffer and coping with [CORS](/en-US/docs/Web/HTTP/CORS).
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
- {{glossary('CLS', 'Cumulative Layout Shifts')}}
- {{glossary('Domain sharding')}}
- {{glossary('Effective connection type')}}
- {{glossary('First Contentful Paint')}}
- {{glossary('First CPU idle')}}
- {{glossary('First Paint')}}
- {{glossary('HTTP')}}
- {{glossary('HTTP_2', 'HTTP/2')}}
- {{glossary('Interaction to Next Paint')}}
- {{glossary('Jank')}}
- {{glossary('Largest Contentful Paint')}}
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

  - [Responsive images](/en-US/docs/Web/HTML/Responsive_images)

- [Preloading content with `rel="preload"`](/en-US/docs/Web/HTML/Attributes/rel/preload)
- <https://w3c.github.io/preload/>

CSS

- [will-change](/en-US/docs/Web/CSS/will-change)
- GPU v CPU
- Measuring layout
- Font-loading best practices

JavaScript

- [DOMContentLoaded](/en-US/docs/Web/API/Document/DOMContentLoaded_event)
- [Garbage collection](/en-US/docs/Glossary/Garbage_collection)
- [requestAnimationFrame](/en-US/docs/Web/API/Window/requestAnimationFrame)

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
- [High Resolution Timing API](/en-US/docs/Web/API/DOMHighResTimeStamp) (<https://w3c.github.io/hr-time/>)
- [Resource Timing API](/en-US/docs/Web/API/Performance_API/Resource_timing)
- [Page Visibility](/en-US/docs/Web/API/Page_Visibility_API)
- [Cooperative Scheduling of Background Tasks API](/en-US/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/en-US/docs/Web/API/Window/requestIdleCallback)

- [Beacon API](/en-US/docs/Web/API/Beacon_API)
- Resource Hints - [dns-prefetch](/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), [preconnect](/en-US/docs/Web/HTML/Attributes/rel/preconnect), [prefetch](/en-US/docs/Glossary/Prefetch), and prerender
- [FetchEvent.preloadResponse](/en-US/docs/Web/API/FetchEvent/preloadResponse)
- [Performance Server Timing API](/en-US/docs/Web/API/PerformanceServerTiming)

Headers

- [Content-encoding](/en-US/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- [gZip](/en-US/docs/Glossary/gzip_compression)
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
