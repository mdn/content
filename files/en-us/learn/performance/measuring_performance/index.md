---
title: Measuring performance
slug: Learn/Performance/Measuring_performance
page-type: learn-module-chapter
---

{{LearnSidebar}} {{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}

Measuring performance provides an important metric to help you assess the success of your app, site, or web service.

For example, you can use performance metrics to determine how your app performs compared to a competitor or compare your app's performance across releases. Your metrics should be relevant to your users, site, and business goals. They should be collected, measured consistently, and analyzed in a format that non-technical stakeholders can consume and understand.

This article introduces tools you can use to access web performance metrics, which can be used to measure and optimize your site's performance.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy,
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >basic software installed</a
        >, and basic knowledge of
        <a href="/en-US/docs/Learn/Getting_started_with_the_web"
          >client-side web technologies</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        <p>
          To provide information about web performance metrics that you can
          collect through various web performance APIs and tools that you can
          use to visualize that data.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Performance tools

There are several different tools available to help you measure and improve performance. These can generally be classified into two categories:

- Tools that indicate or measure performance, such as [PageSpeed Insights](https://pagespeed.web.dev/) or the Firefox [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) and [Performance Monitor](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html). These tools show you how fast or slow your website is loading. They also indicate areas that can be improved to optimize your web app.
- [Performance APIs](/en-US/docs/Web/API/Performance_API) that you can use to build custom performance tools.

## General performance reporting tools

Tools like [PageSpeed Insights](https://pagespeed.web.dev/) can provide quick performance measurements. You can enter a URL and get a performance report in seconds. The report contains scores indicating how your website performs for mobile and desktop. This is a good start for understanding what you are doing well and what could be improved.

At the time of writing, MDN's performance report summary looks similar to the following:

![A screenshot of PageSpeed Insights report for the Mozilla homepage.](pagespeed-insight-mozilla-homepage.png)

A performance report contains information about things like how long a user has to wait before _anything_ is displayed on the page, how many bytes need to be downloaded to display a page, and much more. It also lets you know if the measured values are considered good or bad.

[webpagetest.org](https://webpagetest.org) is another example of a tool that automatically tests your site and returns valuable metrics.

You can try running your favorite website through these tools and see the scores.

## Network monitor tools

Modern browsers have tools available that you can use to run against loaded pages and determine how they are performing; most of them work similarly. For example, the Firefox [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) returns detailed information on all the assets downloaded from the network, along with a waterfall time graph that shows how long each one took to download.

![Firefox network monitor showing a list of assets that has loaded as well as load time per asset](network-monitor.png)

You should also check out [Chrome's Network Monitor documentation](https://developer.chrome.com/docs/devtools/network/).

## Performance monitor tools

You can also use browser performance tools such as the [Firefox Performance Monitor](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) to measure the performance of a web app or site's user interface as you perform different actions. This indicates the features that might slow down your web app or site.

![Developer tools performance panel showing the waterfall of recording #1.](perf-monitor.png)

See also [Chrome's Performance tool documentation](https://developer.chrome.com/docs/devtools/performance/).

## Performance APIs

When writing code for the Web, many [Web APIs](/en-US/docs/Web/API) are available to create your own performance-measuring tools.

You can use the [Navigation Timing API](/en-US/docs/Web/API/Performance_API/Navigation_timing) to measure client-side web performance, including the amount of time needed to unload the previous page, how long domain lookups take, the total time spent executing the window's load handler, and more. You can use the API for metrics related to all the navigation events in the diagram below.

![The various handlers that the navigation timing API can handle including Navigation timing API metrics Prompt for unload redirect unload App cache DNS TCP Request Response Processing onLoad navigationStart redirectStart redirectEnd fetchStart domainLookupEnd domainLookupStart connectStart (secureConnectionStart) connectEnd requestStart responseStart responseEnd unloadStart unloadEnd domLoading domInteractive domContentLoaded domComplete loadEventStart loadEventEnd](navigationtimingapi.jpg)

The [Performance API](/en-US/docs/Web/API/Performance_API), which provides access to performance-related information for the current page, includes several APIs including the [Navigation Timing API](/en-US/docs/Web/API/Performance_API/Navigation_timing), the [User Timing API](/en-US/docs/Web/API/Performance_API/User_timing), and the [Resource Timing API](/en-US/docs/Web/API/Performance_API/Resource_timing). These interfaces allow the accurate measurement of the time it takes for JavaScript tasks to complete.

The [PerformanceEntry](/en-US/docs/Web/API/PerformanceEntry) object is part of the _performance timeline_. A _performance entry_ can be directly created by making a performance _{{domxref("PerformanceMark","mark")}}_ or _{{domxref("PerformanceMeasure","measure")}}_ (for example by calling the {{domxref("Performance.mark","mark()")}} method) at an explicit point in an application. Performance entries are also created in indirect ways, such as loading a resource like an image.

The [PerformanceObserver API](/en-US/docs/Web/API/PerformanceObserver) can be used to observe performance measurement events and to notify you of new [performance entries](/en-US/docs/Web/API/PerformanceEntry) as they are recorded in the browser's performance timeline.

While this article does not dive into using these APIs, it is helpful to know they exist. Refer to the [Navigation and timings](/en-US/docs/Web/Performance/Navigation_and_resource_timings) article for further examples of using performance Web APIs.

## Conclusion

This article briefly overviews some tools that can help you measure performance on a web app or site. In the following article, we'll see how you can optimize images on your site to improve its performance.

{{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}
