---
title: 'Recommended Web Performance Timings: How long is too long?'
slug: Web/Performance/How_long_is_too_long
tags:
  - Performance
  - Reference
  - Tutorial
  - Web Performance
---
There are no clear set rules as to what constitutes a slow pace when loading pages, but there are specific guidelines for indicating content will load (1 second), idling (50ms), animating (16.7ms) and responding to user input (50 to 200ms).

## Load goal

The  'Under a second' is often touted as optimal for load, but what does that mean? A second should be considered a rule in the maximum amount of time to indicate to a user that the request for new content was made and will load, such as the browser displaying the page title and the background color of the page displaying.

The first asset retrieved from a request is usually an HTML document, which then makes calls for additional assets. As noted in the description of the [critical rendering path](/en-US/docs/Web/Performance/Critical_rendering_path), when received, browsers immediately start processing the HTML, rendering the content as it is received rather than waiting for additional assets to load.

Yes, one second for loading is a goal, but it's something few sites achieve. Expectations differ. A 'hello world' on the corporate network would be expected to load in milliseconds, but a user downloading a cat video on a five-year-old device over an edge network in northern Siberia would likely find a 20-second download speedy. If you wait three or four seconds without communicating to the user that a load is happening and showing some progress, the typical site will lose potential visitors, and those visitors will take a long time to come back if they ever do.

In optimizing for performance, do set an ambitious first load goal, such as 5 seconds over the mobile 3G network and 1.5 seconds on an office T1 line, with even more ambitious page load goals for subsequent page loads, leveraging service workers and caching. There are different suggested times for initially loading the page versus loading additional assets, responding to user interaction, and ensuring smooth animations:

## Idling goal

Browsers are single threaded (though background threads are supported for web workers). This means that user interaction, painting, and script execution are all on the same thread. If the thread is busy doing complex JavaScript execution, the main thread will not be available to react to user input, such as pressing a button. For this reason, script execution should be limited in scope, divided into chunks of code that can be executed in 50ms or less. This makes the thread available for user interactions.

## Animation goal

For scrolling and other animations to look smooth and feel responsive, the content repaints should occur at 60 frames per second (60fps), which is once every 16.7ms. The 16.7 milliseconds includes scripting, reflow, and repaint. Realize a document takes about 6ms to render a frame, leaving about 10ms for the rest. Anything less than 60fps, especially an un-even or changing frame rate, will appear janky.

## Responsiveness goal

When the user interacts with content, it is important to provide feedback and acknowledge the user's response or interaction and to do so within 100ms, preferably within 50ms. 50ms seconds feels immediate. The acknowledgment of user interaction should often feel immediate, such as a hover or button press, but that doesn't mean the completed response should be instantaneous. While a slower than 100ms reaction may create a disconnect between the user interaction and the response, a 100 to 200ms transition for a response may help the user notice the response their interaction initiated, such as a menu opening.  If a response takes longer than 100ms to complete, provide some form of feedback to inform the user the interaction has occurred.
