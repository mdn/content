---
title: Targeting and hit detection
slug: Web/API/WebXR_Device_API/Targeting
page-type: guide
tags:
  - Draft
---
{{DefaultAPISidebar("WebXR Device API")}}

## Virtual object hit testing

Detection of collisions with virtual objects usually doesn't actually involve testing for intersection of the ray with one of the scene's polygons, as a typical scene may have hundreds or thousands of polygons, which makes direct tracing of rays to polygons impractical in most cases. Instead, most applications find a way to simplify the implementation of their hit testing algorithms.

It's possible—or even likely—that whatever 3D graphics engine you're using offers hit testing, especially if it's designed specifically for game development.

### Simplified representative objects

One common solution is to overlay simplified, invisible objects atop the objects in your scene. These objects then serve a s. For instance, if you have a more-or-less rectangular object, use a rectangle as a surrogate for the object when performing hit testing. Likewise, if an object is essentially round, use the radius of the minimum enclosing circle to establish a collision test object.

## Real-world hit testing

The acronym "LIDAR" has multiple definitions depending on specifics of how it's implemented, but the end result is the same. Most commonly, it refers to "_Laser Imaging, Detection, And Ranging_" or "_LIght Detection and Ranging_").

Testing for collisions with the real world is a different problem, which may involve not only interpreting the imagery from the device's camera (if available) but also potentially multiple additional sensors. Some devices include infrared sensors to help range objects, and others provide powerful [LIDAR](https://en.wikipedia.org/wiki/LIDAR) systems, which use lasers (usually infrared lasers, which can't be seen by the human eye) to determine range to objects in the world.

The details of how to work with an individual platform's ranging system is beyond the scope of this article. However, there's hope: a proposal has been floated for a WebXR Hit Test Module that would layer atop WebXR to provide an API for performing hit testing and collision detection.

## See also

- [3D collision detection](/en-US/docs/Games/Techniques/3D_collision_detection)
- [HTML5 games: 3D collision detection](https://hacks.mozilla.org/2015/10/html-5-games-3d-collision-detection/) (Hacks blog)
