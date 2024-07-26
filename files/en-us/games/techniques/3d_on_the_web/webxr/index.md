---
title: WebXR — Virtual and Augmented Reality for the Web
slug: Games/Techniques/3D_on_the_web/WebXR
page-type: guide
---

{{GamesSidebar}}

The concepts of virtual reality (VR) and augmented reality (AR) aren't new, but the technology is more accessible than ever. We can also use a JavaScript API to make use of it in web applications. This article introduces WebXR from the perspective of its use in games.

> [!NOTE]
> You may see references to the non-standard WebVR API. WebVR was never ratified as a standard, was implemented and enabled by default in very few browsers, and supported only a few devices. The **WebVR** API is replaced by the [**WebXR** Device API](/en-US/docs/Web/API/WebXR_Device_API).

## VR devices

With the popularity of existing VR headsets such as Meta Quest, Valve Index, and PlayStation VR, the future looks bright — we already have sufficient technology to create meaningful VR gaming experiences.

![Three different VR devices: the Meta Quest 3, the Valve Index, and the Sony PSVR2.](hmds.jpg)

### Development of WebVR

The [WebVR spec](https://mozvr.github.io/webvr-spec/webvr.html) is being replaced by the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API). WebVR may still be available in some browsers while WebXR is finalized.
For more info, see the [WebVR.info](https://webvr.info/) website.

## The WebXR API

The core of any WebXR experience is built on top of two foundational concepts:

1. The application must receive real-time data about your headset's position and your controllers' positions in three-dimensional space
2. The application must render a real-time, stereoscopic view to the headset's display(s) according to that positional data

The [WebXR API](/en-US/docs/Web/API/WebXR_Device_API) is the central API for capturing information about XR devices connected to a computer. The API can capture headset and controller position, orientation, velocity, acceleration, and other information that you can use in your games.

There are other APIs useful for creating games such as [the Gamepad API](/en-US/docs/Web/API/Gamepad_API) for non-XR controller inputs and the [Device Orientation API](/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation) for handling display orientation.

### Using the WebXR API

The best place to start with the WebXR API is with our [Fundamentals of WebXR](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals) guide. After that, see [Starting up and shutting down a WebXR session](/en-US/docs/Web/API/WebXR_Device_API/Startup_and_shutdown).

## Tools and techniques

[A-Frame](https://aframe.io/) is a web framework that offers simple building blocks for WebXR, so you can rapidly build and experiment with VR websites and games. You can read MDN's [Building up a basic demo with A-Frame](/en-US/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) tutorial for more details.

Separately, Three.js is one of the most popular 3D engines for the web, and it can be used for WebXR games. Check out Three.js' [How to create VR content](https://threejs.org/docs/#manual/en/introduction/How-to-create-VR-content) documentation to help you make WebXR games with Three.js.

![A 3D representation of a landscape: it's a pinkish sunset, with a blue mountainous land in the background surrounded by a mirror sea and a darker blue island in the second plan.](sechelt.jpg)

Immersion takes priority over gameplay and graphics - you must feel part of the experience. It's not easy to achieve, but it doesn't require realistic images. On the contrary, even basic shapes soaring past at high frame rates can be thrilling if the experience is immersive. Remember: experimenting is key - feel free to go with what works well for your project.

## The future of WebXR

Consumer devices are available on the market, and we have JavaScript APIs to support them on the web. As hardware becomes more affordable and the ecosystem matures, developers can focus on building experiences through good UX and UI. It's the perfect time to dive in and experiment with WebXR.

## See also

- [WebVR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- [Fundamentals of WebXR](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Building up a basic demo with A-Frame](/en-US/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
