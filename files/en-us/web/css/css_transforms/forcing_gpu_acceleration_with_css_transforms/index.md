---
title: Forcing GPU acceleration with CSS transforms
slug: Web/CSS/CSS_transforms/Forcing_gpu_acceleration_with_css_transforms
page-type: guide
---

{{CSSRef}}

On most web pages, a device's CPU is used to lay out and animate 2D elements.

You can force any element to be rendered with [GPU acceleration](/en-US/docs/Web/Performance/Fundamentals#use_css_transforms) by applying the CSS style `transform: translate3d(0, 0, 0);` to the element.

Rendering elements using GPU hardware acceleration may improve your page's performance at the cost of increasing your page's memory usage and increasing your page's impact on your device's battery life.

> Hardware acceleration is only used if it is supported by your browser and enabled.

## Example

```css
p {
  width: 200px;
  color: white;
  padding: 2px;
}

.no-hw-accel {
  animation: 3s infinite alternate slide-no-hw-accel;
  background-color: darkred;
}
@keyframes slide-no-hw-accel {
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(100%, 0);
  }
}

.hw-accel {
  animation: 3s infinite alternate slide-hw-accel;
  background-color: darkgreen;
}
@keyframes slide-hw-accel {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(100%, 0, 0);
  }
}
```

```html
<p class="no-hw-accel">
  This element is animated using your device's <i>CPU</i>.
</p>
<p class="hw-accel">This element is animated using your device's <i>GPU</i>.</p>
```

{{EmbedLiveSample('"Example"') }}
