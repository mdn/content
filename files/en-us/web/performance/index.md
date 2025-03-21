---
title: Web performance
short-title: Performance
slug: Web/Performance
page-type: landing-page
sidebar: performancesidebar
---

Web performance is the objective measurements and the perceived user experience of load time and runtime.
Web performance is how long a site takes to load, become interactive and responsive, and how smooth the content is during user interactions.
Performance concerns questions like: Is scrolling smooth? Are buttons responsive? Do pop-ups load quickly and animate fluidly?
The objective measurements include time to load, frames per second, and time to become interactive, and subjective experience means how long it feels like it takes for content to load.

The longer it takes for a site to respond, the more users will abandon the site. It is important to minimize the loading and response times and add additional features to conceal latency by making the experience as available and interactive as possible, as soon as possible, while asynchronously loading in the longer tail parts of the experience.

There are tools, APIs, and best practices that help us measure and improve web performance. We cover them in the following pages.

## Web performance guides

- [Performance fundamentals](/en-US/docs/Web/Performance/Guides/Fundamentals)
  - : Performance means efficiency. In the context of Open Web Apps, this document explains in general what performance is, how the browser platform helps improve it, and what tools and processes you can use to test and improve it.
- [Populating the page: how browsers work](/en-US/docs/Web/Performance/Guides/How_browsers_work)
  - : Users want web experiences with content that is fast to load and smooth to interact with. Therefore, a developer should strive to achieve these two goals.
    To understand how to improve performance and perceived performance, it helps to understand how the browser works.
- [Understanding latency](/en-US/docs/Web/Performance/Guides/Understanding_latency)
  - : **Latency** is the time it takes for a packet of data to travel from source to a destination. In terms of performance optimization, it's important to optimize to reduce causes of latency and to test site performance emulating high latency to optimize for users with slow or unreliable connections.
- [Recommended Web Performance Timings: How long is too long?](/en-US/docs/Web/Performance/Guides/How_long_is_too_long)
  - : There are no clear set rules as to what constitutes a slow pace when loading pages, but there are specific guidelines for indicating content will load (1 second), idling (50ms), animating (16.7ms) and responding to user input (50 to 200ms).
- [Using dns-prefetch](/en-US/docs/Web/Performance/Guides/dns-prefetch)
  - : **`DNS-prefetch`** is an attempt to resolve domain names before resources get requested. This could be a file loaded later or link target a user tries to follow.
- [Navigation and resource timings](/en-US/docs/Web/Performance/Guides/Navigation_and_resource_timings)
  - : **Navigation timings** are metrics measuring a browser's document navigation events. **Resource timings** are detailed network timing measurements regarding the loading of an application's resources. Both provide the same read-only properties, but navigation timing measures the main document's timings whereas the resource timing provides the times for all the assets or resources called in by that main document and the resources' requested resources.
- [Optimizing startup performance](/en-US/docs/Web/Performance/Guides/Optimizing_startup_performance)
  - : Improving your startup performance is often one of the highest value performance optimizations that can be made.
    Good user experience includes ensuring your app loads quickly. This article provides performance tips and suggestions for both writing new applications and porting applications to the web from other platforms.
- [Critical rendering path](/en-US/docs/Web/Performance/Guides/Critical_rendering_path)
  - : The Critical Rendering Path is the sequence of steps the browser goes through to convert the HTML, CSS, and JavaScript into pixels on the screen. Optimizing the critical render path improves render performance.
    The critical rendering path includes the [Document Object Model](/en-US/docs/Web/API/Document_Object_Model) (DOM), [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model) (CSSOM), render tree and layout.
- [Lazy loading](/en-US/docs/Web/Performance/Guides/Lazy_loading)
  - : **Lazy loading** is a strategy to identify resources as non-blocking (non-critical) and load these only when needed. It's a way to shorten the length of the [critical rendering path](/en-US/docs/Web/Performance/Guides/Critical_rendering_path), which translates into reduced page load times.
- [Speculative loading](/en-US/docs/Web/Performance/Guides/Speculative_loading)
  - : **Speculative loading** refers to the practice of performing navigation actions (such as DNS fetching, fetching resources, or rendering documents) before the associated pages are actually visited, based on predictions as to what pages the user is most likely to visit next.
- [Performance budgets](/en-US/docs/Web/Performance/Guides/Performance_budgets)
  - : A performance budget is a limit to prevent regressions. It can apply to a file, a file type, all files loaded on a page, a specific metric (e.g. [Time to Interactive](/en-US/docs/Glossary/Time_to_interactive)), a custom metric (e.g. Time to Hero Element), or a threshold over a period of time.
- [Performance Monitoring: RUM vs. synthetic monitoring](/en-US/docs/Web/Performance/Guides/Rum-vs-Synthetic)
  - : **Synthetic monitoring** and **real user monitoring (RUM)** are two approaches for monitoring and providing insight into web performance. RUM and synthetic monitoring provide for different views of performance and have benefits, good use cases and shortfalls. RUM is generally best suited for understanding long-term trends whereas synthetic monitoring is very well suited to regression testing and mitigating shorter-term performance issues during development. In this article we define and compare these two performance monitoring approaches.
- [CSS and JavaScript animation performance](/en-US/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
  - : Animations are critical for a pleasurable user experience on many applications. There are many ways to implement web animations, such as CSS {{cssxref("transition","transitions")}}/{{cssxref("animation","animations")}} or JavaScript-based animations (using {{domxref("Window.requestAnimationFrame","requestAnimationFrame()")}}). In this article, we analyze the performance differences between CSS-based and JavaScript-based animation.
- [Animation performance and frame rate](/en-US/docs/Web/Performance/Guides/Animation_performance_and_frame_rate)
  - : Animation on the web can be done via {{domxref('SVGAnimationElement', 'SVG')}}, {{domxref('Window.requestAnimationFrame','JavaScript')}}, including {{htmlelement('canvas')}} and {{domxref('WebGL_API', 'WebGL')}}, CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animated GIFs and even animated PNGs and other image types.
    The performance cost of animating a CSS property can vary from one property to another, and animating expensive CSS properties can result in {{glossary('Jank')}} as the browser struggles to hit a smooth {{glossary("FPS", "frame rate")}}.

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

## Performance APIs

The [Performance API](/en-US/docs/Web/API/Performance_API) is a group of standards used to measure the performance of web applications.
The following pages provide overviews of the Performance APIs including information on how to use them:

- [High precision timing](/en-US/docs/Web/API/Performance_API/High_precision_timing)
  - : The Performance API allows high precision measurements that are based on time in potential sub-millisecond resolution and a stable monotonic clock that is not subject to system clock skew or adjustments.
    The high resolution timers are needed for accurate benchmarking instead of the less precise and non-monotonic {{jsxref("Date")}} timestamps.
- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
  - : **Long animation frames** (LoAFs) can impact the user experience of a website.
    They can cause slow user interface (UI) updates, resulting in seemingly unresponsive controls and [janky](/en-US/docs/Glossary/Jank) (or non-smooth) animated effects and scrolling, leading to user frustration.
    The [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) allows developers to get information about the long animation frames and better understand their root causes. This article shows how to use the Long Animation Frames API.
- [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
  - : The {{domxref("PerformanceNavigationTiming.notRestoredReasons")}} property reports information on why the current document was blocked from using the {{Glossary("bfcache")}} on navigation.
    Developers can use this information to identify pages that need updates to make them bfcache-compatible, thereby improving site performance.
- [Navigation timing](/en-US/docs/Web/API/Performance_API/Navigation_timing)
  - : Navigation Timing provides metrics associated with navigating from one page to another via the [PerformanceNavigationTiming](/en-US/docs/Web/API/PerformanceNavigationTiming) API.
    For example, you can determine how much time it takes to load or unload a document, or log the time it took until {{Glossary("DOM")}} construction has finished and interaction with the DOM is possible.
- [Performance data](/en-US/docs/Web/API/Performance_API/Performance_data)
  - : The Performance API doesn't provide performance data analysis, or visualizations.
    However, the Performance API is integrated well with developer tools and its data is often sent to analytics end points and libraries to record performance metrics which help you to evaluate the data to find performance bottlenecks affecting your users.
    This page provides an overview about what sorts of Performance API data exists, how it is collected, and how it can be accessed.
- [Resource Timing API](/en-US/docs/Web/API/Performance_API/Resource_timing)
  - : Resource Timing enables retrieving and analyzing detailed network timing data for the loading of an application's resources.
    An application can use the timing metrics to determine, for example, the length of time it takes to load a specific resource (such as an image or a script) either implicitly as part of page load or explicitly from JavaScript, for example using the {{domxref("Window/fetch", "fetch()")}} API.
- [Server timing](/en-US/docs/Web/API/Performance_API/Server_timing)
  - : Server-Timing allows servers to communicate metrics about the request-response cycle to the user agent.
    You can collect this information and act on server-side metrics in the same way as all the other metrics processed with the Performance API.
- [User Timing API](/en-US/docs/Web/API/Performance_API/User_timing)
  - : Create application specific timestamps using the [user timing API](/en-US/docs/Web/API/Performance_API/User_timing)'s "mark" and "measure" entry types using [high-precision timestamps](/en-US/docs/Web/API/DOMHighResTimeStamp) that are part of the browser's performance timeline.

### Related APIs

The following APIs are also useful for measuring and influencing page performance:

- [Page Visibility API](/en-US/docs/Web/API/Page_Visibility_API)
  - : Provides events you can watch for to know when a document becomes visible or hidden, as well as features to look at the current visibility state of the page.
- [Background Tasks API](/en-US/docs/Web/API/Background_Tasks_API)
  - : The **Cooperative Scheduling of Background Tasks API** (also referred to as the Background Tasks API or the [`requestIdleCallback()`](/en-US/docs/Web/API/Window/requestIdleCallback) API) provides the ability to queue tasks to be executed automatically by the user agent when it determines that there is free time to do so.
- [Beacon API](/en-US/docs/Web/API/Beacon_API)
  - : The [Beacon](/en-US/docs/Web/API/Beacon_API) interface schedules an asynchronous and non-blocking request to a web server.
- [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API)
  - : The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's {{Glossary("Viewport")}}.
    This enabled use cases such as [Timing element visibility](/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) to get asynchronously notified when elements of interest become visible.
- [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
  - : Exposes decoding and encoding abilities of a client device, such as whether media is supported and whether playback should be smooth and power efficient, with real time feedback about playback to better enable adaptive streaming, and access to display property information.
- [Network Information API](/en-US/docs/Web/API/Network_Information_API)
  - : Information about the system's connection in terms of general connection type (e.g., 'wifi, 'cellular', etc.).
    This can be used to select high definition content or low definition content based on the user's connection.
- [Battery Status API](/en-US/docs/Web/API/Battery_Status_API)
  - : The **Battery API**, provides information about the system's battery charge level and lets you be notified by events that are sent when the battery level or charging status change.
    This can be used to adjust your app's resource usage to reduce battery drain when the battery is low, or to save changes before the battery runs out in order to prevent data loss.
- [Navigator.deviceMemory](/en-US/docs/Web/API/Navigator/deviceMemory)
  - : The **`deviceMemory`** read-only property of the {{domxref("Navigator")}} interface returns the approximate amount of device memory in gigabytes.
- [FetchEvent.preloadResponse](/en-US/docs/Web/API/FetchEvent/preloadResponse)
  - : The **`preloadResponse`** read-only property of the {{domxref("FetchEvent")}} interface returns a {{jsxref("Promise")}} that resolves to the navigation preload {{domxref("Response")}} if [navigation preload](/en-US/docs/Web/API/NavigationPreloadManager) was triggered, or `undefined` otherwise.

## Profiling and tooling

- [Firefox Profiler Performance Features](https://profiler.firefox.com/docs/#/)
  - : This website provides information on how to use and understand the performance features in your developer tools, including [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) and [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profiling with the built-in profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Learn how to profile app performance with Firefox's built-in profiler.

## References

### HTML

- [`<picture>`](/en-US/docs/Web/HTML/Element/picture) element
- [`<video>`](/en-US/docs/Web/HTML/Element/video) element
- [`<source>`](/en-US/docs/Web/HTML/Element/source) element
- [`<img>`](/en-US/docs/Web/HTML/Element/img#attributes) attributes (like `srcset`) for responsive images
- [`rel="preload"`](/en-US/docs/Web/HTML/Attributes/rel/preload) attribute for preloading content via HTML

### CSS

- [will-change](/en-US/docs/Web/CSS/will-change)

### JavaScript

- [DOMContentLoaded](/en-US/docs/Web/API/Document/DOMContentLoaded_event)
- [Garbage collection](/en-US/docs/Glossary/Garbage_collection)
- [requestAnimationFrame](/en-US/docs/Web/API/Window/requestAnimationFrame)

### HTTP

- [Content-encoding](/en-US/docs/Web/HTTP/Reference/Headers/Content-Encoding)
- Resource hints via [dns-prefetch](/en-US/docs/Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control), [preconnect](/en-US/docs/Web/HTML/Attributes/rel/preconnect), [prefetch](/en-US/docs/Glossary/Prefetch), and prerender
- [HTTP/2](/en-US/docs/Web/HTTP/Guides/Messages#http2_messages)
- [Client Hints](/en-US/docs/Web/HTTP/Guides/Client_hints)

## See also

- [Responsive images](/en-US/docs/Web/HTML/Responsive_images) HTML guide
- [Web Workers API](/en-US/docs/Web/API/Web_Workers_API), including [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) and [Using Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Offline and background operation](/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Caching](/en-US/docs/Web/HTTP/Guides/Caching)
- [Client hints](/en-US/docs/Web/HTTP/Guides/Client_hints)
- Glossary terms:
  - {{glossary('Beacon')}}
  - {{glossary('Brotli compression')}}
  - {{glossary('CDN', 'Content Delivery Networks (CDN)')}}
  - {{glossary('CLS', 'Cumulative Layout Shifts (CLS)')}}
  - {{glossary('Code splitting')}}
  - {{glossary('CSSOM')}}
  - {{glossary('Domain sharding')}}
  - {{glossary('Effective connection type')}}
  - {{glossary('First contentful paint', 'First contentful paint (FCP)')}}
  - {{glossary('First CPU idle')}}
  - {{glossary('First paint')}}
  - {{glossary('gzip_compression')}}
  - {{glossary('HTTP_2', 'HTTP/2')}}
  - {{glossary('HTTP')}}
  - {{glossary('Interaction to next paint', 'Interaction to next paint (INP)')}}
  - {{glossary('Jank')}}
  - {{glossary('Largest contentful paint', 'Largest Contentful Paint (LCP)')}}
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
  - {{glossary('Real User Monitoring', 'Real User Monitoring (RUM)')}}
  - {{glossary('Resource Timing')}}
  - {{glossary('Round Trip Time', 'Round Trip Time (RTT)')}}
  - {{glossary('Server Timing')}}
  - {{glossary('Speculative parsing')}}
  - {{glossary('Speed index')}} (and Perceptual Speed Index)
  - {{glossary('SSL')}}
  - {{glossary('Synthetic monitoring')}}
  - {{glossary('TCP handshake')}}
  - {{glossary('TCP slow start')}}
  - {{glossary('TCP', 'Transmission Control Protocol (TCP)')}}
  - {{glossary('Time to first byte', 'Time to first byte (TTFB)')}}
  - {{glossary('Time to interactive', 'Time to interactive (TTI)')}}
  - {{glossary('TLS')}}
  - {{glossary('Tree shaking')}}
  - {{glossary('Web performance')}}
- [Performance in Firefox Developer Tools](https://profiler.firefox.com/docs/#/)
