---
title: Web Performance
slug: Web/Performance
tags:
  - API
  - App
  - App Performance
  - HTML
  - JavaScript
  - Landing
  - Mobile
  - Mobile Performance
  - Performance
  - Performance Budget
  - Start-Up Performance
  - Web
  - Web Performance
---
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
  - : More important than how fast your website is in milliseconds, is how fast your users perceive your site to be. These perceptions are impacted by actual page load time, idling, responsiveness to user interaction, and the smoothness of scrolling and other animations. In this article, we discuss the various loading metrics, animation, and responsiveness metrics, along with best practices to improve user perception, if not the actual timings.
- [Web performance basics](/en-US/docs/Learn/Performance/Web_Performance_Basics)
  - : In addition to the front end components of HTML, CSS, JavaScript, and media files, there are features that can make applications slower and features that can make applications subjectively and objectively faster. There are many APIs, developer tools, best practices, and bad practices relating to web performance. Here we'll introduce many of these features ad the basic level and provide links to deeper dives to improve performance for each topic.
- [HTML performance features](/en-US/docs/Learn/Performance/HTML)
  - : Some attributes and the source order of your mark-up can impact the performance or your website. By minimizing the number of DOM nodes, making sure the best order and attributes are used for including content such as styles, scripts, media, and third-party scripts, you can drastically improve the user experience. This article looks in detail at how HTML can be used to ensure maximum performance.
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
  - : This guide describes how to use the [`Performance`](/en-US/docs/Web/API/Performance "The Performance interface provides access to performance-related information for the current page. It's part of the High Resolution Time API, but is enhanced by the Performance Timeline API, the Navigation Timing API, the User Timing API, and the Resource Timing API.") interfaces that are defined in the [High-Resolution Time](https://w3c.github.io/hr-time/) standard.
- [Resource Timing API](/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)
  - : [Resource loading and timing](/en-US/docs/Web/API/Resource_Timing_API) the loading of those resources, including managing the resource buffer and coping with CORS
- [The performance timeline](/en-US/docs/Web/API/Performance_Timeline/Using_Performance_Timeline)
  - : The [Performance Timeline](/en-US/docs/Web/API/Performance_Timeline) standard defines extensions to the [`Performance`](/en-US/docs/Web/API/Performance "The Performance interface provides access to performance-related information for the current page. It's part of the High Resolution Time API, but is enhanced by the Performance Timeline API, the Navigation Timing API, the User Timing API, and the Resource Timing API.") interface to support client-side latency measurements within applications. Together, these interfaces can be used to help identify an application's performance bottlenecks.
- [User Timing API](/en-US/docs/Web/API/User_Timing_API/Using_the_User_Timing_API)
  - : Create application specific timestamps using the [user timing API](/en-US/docs/Web/API/User_Timing_API)'s "mark" and "measure" entry types - that are part of the browser's performance timeline.
- [Beacon API](/en-US/docs/Web/API/Beacon_API)
  - : The [Beacon](/en-US/docs/Web/API/Beacon_API) interface schedules an asynchronous and non-blocking request to a web server.
- [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : Learn to time element visibility with the [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API) and be asynchronously notified when elements of interest becomes visible.

## Other documentation

- [Developer Tools Performance Features](/en-US/docs/Tools/Performance)
  - : This section provides information on how to use and understand the performance features in your developer tools, including [Waterfall](/en-US/docs/Tools/Performance/Waterfall), [Call Tree](/en-US/docs/Tools/Performance/Call_Tree), and [Flame Charts](/en-US/docs/Tools/Performance/Flame_Chart).
- [Profiling with the built-in profiler](/en-US/docs/Mozilla/Performance/Profiling_with_the_Built-in_Profiler)
  - : Learn how to profile app performance with Firefox's built-in profiler.

## Glossary Terms

- {{glossary('Beacon')}}
- {{glossary('Brotli compression')}}
- {{glossary('Client hints')}}
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
- {{glossary('Round Trip Time (RTT)')}}
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

## Documents yet to be written

- [JavaScript performance best practices](/en-US/docs/Learn/Performance/JavaScript)
  - : JavaScript, when used properly, can allow for interactive and immersive web experiences ... or it can significantly harm download time, render time, in app performance, battery life, and user experience. This article outlines some JavaScript best practices that can ensure even complex content's performance is the highest possible.
- [Mobile performance](/en-US/docs/Learn/Performance/Mobile)
  - : With web access on mobile devices being so popular, and all mobile platforms having fully-fledged web browsers, but possibly limited bandwidth, CPU, and battery life, it is important to consider the performance of your web content on these platforms. This article also looks at mobile-specific performance considerations.
- Web font performance
  - : An often overlooked aspect of performance landscape are web fonts. Web fonts are more prominent in web design than ever, yet many developers embed them from a third party service and think nothing of it. In this article, we'll covers methods for getting your font files as small as possible with efficient file formats and sub setting. From there, we'll go on to talk about how browsers text, and how you can use CSS and JavaScript features to ensure your fonts render quickly, and with minimal disruption to the user experience.
- Understanding bandwidth
  - : Bandwidth is the amount of data measured in Megabits(Mb) or Kilobits(Kb) that one can send per second. This article explains the role of bandwidth in media-rich internet applications, how you can measure it, and how you can optimize applications to make the best use of available bandwidth
- The role of TLS in performance
  - : TLS—or HTTPS as we tend to call it—is crucial in creating secure and safe user experiences. While hardware has reduced the negative impacts TLS has had on server performance, it still represents a substantial slice of the time we spend waiting for browsers to connect to servers. This article explains the TLS handshake process, and offers some tips for reducing this time, such as OCSP stapling, HSTS preload headers, and the potential role of resource hints in masking TLS latency for third parties.
- Reading performance charts
  - : Developer tools provide information on performance, memory, and network requests. Knowing how to read [waterfall](/en-US/docs/Tools/Performance/Waterfall) charts, [call trees](/en-US/docs/Tools/Performance/Call_Tree), traces, [flame charts](/en-US/docs/Tools/Performance/Flame_Chart) , and [allocations](/en-US/docs/Tools/Performance/Allocations) in your browser developer tools will help you understand waterfall and flame charts in other performance tools.
- Alternative media formats
  - : When it comes to images and videos, there are more formats than you're likely aware of. Some of these formats can take your highly optimized media-rich pages even further by offering additional reductions in file size. In this guide we'll discuss some alternative media formats, how to use them responsibly so that non-supporting browsers don't get left out in the cold, and some advanced guidance on transcoding your existing assets to them.
- Analyzing JavaScript bundles
  - : No doubt, JavaScript is a big part of modern web development. While you should always strive to reduce the amount of JavaScript you use in your applications, it can be difficult to know where to start. In this guide, we'll show you how to analyze your application's script bundles, so you know _what_ you're using, as well how to detect if your app contains duplicated scripts between bundles.
- [Lazy loading](/en-US/docs/Web/Performance/Lazy_loading)
  - : It isn't always necessary to load all of a web applications assets on initial page load. Lazy Loading is deferring the loading of assets on a page, such as scripts, images, etc., on a page to a later point in time i.e when those assets are actually needed.
- Lazy-loading JavaScript with dynamic imports
  - : When developers hear the term "lazy loading", they immediately think of below-the-fold imagery that loads when it scrolls into the viewport. But did you know you can lazy load JavaScript as well? In this guide we'll talk about the dynamic import() statement, which is a feature in modern browsers that loads a JavaScript module on demand. Of course, since this feature isn't available everywhere, we'll also show you how you can configure your tooling to use this feature in a widely compatible fashion.
- [Controlling resource delivery with resource hints](/en-US/docs/Web/Performance/Controlling_resource_delivery_with_resource_hints)
  - : Browsers often know better than we do when it comes to resource prioritization and delivery however they're far from clairyovant. Native browser features enable us to hint to the browser when it should connect to another server, or preload a resource before the browser knows it ever needs it. When used judiciously, this can make fast experience seem even faster. In this article, we cover native browser features like rel=preconnect, rel=dns-prefetch, rel=prefetch, and rel=preload, and how to use them to your advantage.
- [Performance Budgets](/en-US/docs/Web/Performance/Performance_budgets)
  - : Marketing, design, and sales needs, and developer experience, often ad bloat, third-party scripts, and other features that can slow down web performance. To help set priorities, it is helpful to set a performance budget: a set of restrictions to not exceed during the development phase. In this article, we'll discuss creating and sticking to a performance budget.
- [Web performance checklist](/en-US/docs/Web/Performance/Checklist)
  - : A performance checklist of features to consider when developing applications with links to tutorials on how to implement each feature, include service workers, diagnosing performance problems, font loading best practices, client hints, creating performant animations, etc.
- [Mobile performance checklist](/en-US/docs/Web/Performance/Mobile_performance_checklist)
  - : A concise checklist of performance considerations impacting mobile network users on hand-held, battery operated devices.

## See also

HTML

- [The `<picture>` Element](/en-US/docs/Web/HTML/Element/picture)
- [The `<video>` Element](/en-US/docs/Web/HTML/Element/video)
- [The `<source>` Element](/en-US/docs/Web/HTML/Element/source)
- [The `<img> srcset` attribute](/en-US/docs/Web/HTML/Element/img#attributes)

  - [Responsive images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [Preloading content with `rel="preload"`](/en-US/docs/Web/HTML/Link_types/preload) - [(https://w3c.github.io/preload/ ](https://w3c.github.io/preload/))

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
- [Navigation Timing API](/en-US/docs/Web/API/Navigation_timing_API)
- [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
- [Network Information API](/en-US/docs/Web/API/Network_Information_API)
- [PerformanceNavigationTiming](/en-US/docs/Web/API/PerformanceNavigationTiming)
- [Battery Status API](/en-US/docs/Web/API/Battery_Status_API)
- [Navigator.deviceMemory](/en-US/docs/Web/API/Navigator/deviceMemory)
- [Intersection Observer](/en-US/docs/Web/API/Intersection_Observer_API)
- [Using the User Timing API](/en-US/docs/Web/API/User_Timing_API/Using_the_User_Timing_API)
- [Long Tasks API](/en-US/docs/Web/API/Long_Tasks_API)
- [High Resolution Timing API](/en-US/docs/Web/API/DOMHighResTimeStamp) ([https://w3c.github.io/hr-time/)](https://w3c.github.io/hr-time/)
- [Resource Timing API](/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)
- [Page Visibility](/en-US/docs/Web/API/Page_Visibility_API)
- [Cooperative Scheduling of Background Tasks API](/en-US/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/en-US/docs/Web/API/Window/requestIdleCallback)

- [Beacon API](/en-US/docs/Web/API/Beacon_API)
- Resource Hints - [dns-prefetch](/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), preconnect, [prefetch](/en-US/docs/Web/HTTP/Link_prefetching_FAQ), and prerender
- [FetchEvent.preloadResponse](/en-US/docs/Web/API/FetchEvent/preloadResponse)
- [Performance Server Timing API](/en-US/docs/Web/API/PerformanceServerTiming)

Headers

- [Content-encoding](/en-US/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- [gZip](/en-US/docs/Glossary/GZip_compression)
- Client Hints

Tools

- [Performance in Firefox Developer Tools](/en-US/docs/Tools/Performance)
- Flame charts
- The Network panel
- Waterfall charts

Additional Metrics

- Speed Index and Perceptual Speed Index

Best Practices

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Using Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

  - [Web Workers API](/en-US/docs/Web/API/Web_Workers_API)

- [PWA](/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers)
- [Caching](/en-US/docs/Web/HTTP/Caching)
- Content Delivery Networks (CDN)
