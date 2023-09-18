# Performance API Overview

The Performance API is a suite of web standards designed to measure and assess the performance of web applications. In this comprehensive guide, we'll explore the key concepts, usage, reference materials, and related guides to help you leverage the Performance API effectively.

## Concepts and Usage

To ensure that web applications deliver a fast and smooth user experience, it's crucial to measure and analyze various performance metrics. The Performance API equips developers with a set of built-in metrics and the capability to add custom measurements to the browser's performance timeline. This timeline contains high-precision timestamps and can be visualized in developer tools. Additionally, you can transmit this data to analytics endpoints to monitor performance metrics over time.

Each performance metric is represented by a `PerformanceEntry`, which includes essential properties such as `name`, `duration`, `startTime`, and `type`. Various performance metrics extend the `PerformanceEntry` interface, further categorizing them based on their specific characteristics.

While many performance entries are automatically recorded without manual intervention and can be accessed using `Performance.getEntries()`, the preferred method is through the use of the `PerformanceObserver` interface. For instance, `PerformanceEventTiming` entries are automatically recorded for events that surpass a predefined threshold. However, the Performance API empowers developers to define and record custom events using the `PerformanceMark` and `PerformanceMeasure` interfaces.

The main `Performance` interface is available for each global context via `self.performance`. It allows you to add custom performance entries, clear existing entries, and retrieve performance data programmatically.

The `PerformanceObserver` interface offers the ability to listen for various types of performance entries as they are recorded, providing real-time insights into your web application's performance.

For further conceptual information, refer to the [Performance API guides](#guides) below.

![UML diagram of Performance APIs](diagram.svg)

## Reference

The Performance API comprises several key interfaces, each serving specific purposes:

- `EventCounts`: A read-only map returned by `performance.eventCounts`, providing the count of dispatched events per event type.
- `LargestContentfulPaint`: Measures the render time of the largest image or text block visible within the viewport, recorded from the page's initial load.
- `LayoutShift`: Offers insights into the layout stability of web pages based on element movements.
- `LayoutShiftAttribution`: Provides debugging information about elements that have shifted.
- `Performance`: The primary interface for accessing performance measurements, available in both window and worker contexts via `self.performance`.
- `PerformanceElementTiming`: Measures rendering timestamps of specific elements.
- `PerformanceEntry`: Represents an entry on the performance timeline encapsulating a single performance metric, serving as the base interface for all performance metrics.
- `PerformanceEventTiming`: Measures latency of events and first input delay (FID).
- `PerformanceLongTaskTiming`: Detects long tasks that occupy rendering resources and block other tasks from executing.
- `PerformanceMark`: Allows you to create custom markers on the performance timeline.
- `PerformanceMeasure`: Enables custom time measurements between two performance entries.
- `PerformanceNavigationTiming`: Measures document navigation events, such as document load times.
- `PerformanceObserver`: Listens for new performance entries as they are recorded in the performance timeline.
- `PerformanceObserverEntryList`: Provides a list of entries observed by a performance observer.
- `PerformancePaintTiming`: Measures render operations during web page construction.
- `PerformanceResourceTiming`: Measures network loading metrics, including redirect times, DNS lookup, response times for resources like images and scripts.
- `PerformanceServerTiming`: Exposes server metrics sent with the response via the `Server-Timing` HTTP header.
- `TaskAttributionTiming`: Identifies the type of task and its responsible container for long tasks.
- `VisibilityStateEntry`: Measures the timing of page visibility state changes, such as when a tab switches between foreground and background.

## Guides

To deepen your understanding of the Performance API and its capabilities, explore the following guides:

- [Performance Data](/en-US/docs/Web/API/Performance_API/Performance_data): Learn how to collect, access, and work with performance data.
- [High-Precision Timing](/en-US/docs/Web/API/Performance_API/High_precision_timing): Explore the use of high-precision time measurements and monotonic clocks.
- [Resource Timing](/en-US/docs/Web/API/Performance_API/Resource_timing): Understand how to measure network timing for fetched resources, such as images, CSS, and JavaScript.
- [Navigation Timing](/en-US/docs/Web/API/Performance_API/Navigation_timing): Learn how to measure navigation timing events in a document.
- [User Timing](/en-US/docs/Web/API/Performance_API/User_timing): Discover how to measure and record custom performance data tailored to your application.
- [Server Timing](/en-US/docs/Web/API/Performance_API/Server_timing): Gain insights into collecting server-side metrics.

## Specifications

For detailed technical specifications of the Performance API, refer to the following documents:

- [W3C Element Timing Specification](https://wicg.github.io/element-timing/)
- [W3C Event Timing Specification](https://w3c.github.io/event-timing/)
- [W3C High-Resolution Time Level 3 Specification](https://w3c.github.io/hr-time/)
- [W3C Largest Contentful Paint Specification](https://w3c.github.io/largest-contentful-paint/)
- [W3C Layout Instability Specification](https://wicg.github.io/layout-instability/)
- [W3C Long Tasks Specification](https://w3c.github.io/longtasks/)
- [W3C Navigation Timing Specification](https://w3c.github.io/navigation-timing/)
- [W3C Paint Timing Specification](https://w3c.github.io/paint-timing/)
- [W3C Performance Timeline Specification](https://w3c.github.io/performance-timeline/)
- [W3C Resource Timing Specification](https://w3c.github.io/resource-timing/)
- [W3C Server Timing Specification](https://w3c.github.io/server-timing/)
- [W3C User Timing Specification](https://w3c.github.io/user-timing/)

## See Also

For further information on web performance and learning resources, explore the following links:

- [Web Performance](/en-US/docs/Web/Performance)
- [Learn: Web Performance](/en-US/docs/Learn/Performance)

With the Performance API and the wealth of information provided in this guide, you can effectively monitor, optimize, and enhance the performance of your web applications, ensuring a seamless and responsive user experience.
