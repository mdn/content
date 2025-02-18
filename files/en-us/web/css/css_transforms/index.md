---
title: CSS transforms
slug: Web/CSS/CSS_transforms
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-transforms/
  - https://drafts.csswg.org/css-transforms-2/
---

{{CSSRef}}

The **CSS transforms** module defines how elements styled with CSS can be transformed in two-dimensional or three-dimensional space.

## CSS transforms in action

Use the sliders in the example below to modify the translation, rotation, scale, and skew CSS transform properties of the cube in 3D space. As you move the cube through 3D space, notice the way it interacts with the element labelled `z:0px`, which is located at the 3D position `(0, 0, 0)`.

```html hidden live-sample___transforms
<article>
  <fieldset id="allTransformFieldset">
    <legend>
      Transform settings
      <button id="resetAllButton" aria-label="Reset">↻</button>
    </legend>
    <section id="fieldsetSection">
      <fieldset class="transformFieldset">
        <legend>
          <label>
            <span>Translation</span>
          </label>
          <button
            id="translateSectionReset"
            class="resetSectionButton"
            aria-label="Reset">
            ↻
          </button>
        </legend>
        <div class="controlsContainer">
          <div>
            <label>
              <span id="translateXLabel">X</span>
              <input
                type="range"
                min="-100"
                max="100"
                value="0"
                data-default="0"
                id="translateXRange"
                aria-labelledby="translateXLabel" />
            </label>
            <output id="translateXOutput" for="translateXRange"></output>
          </div>
          <div>
            <label>
              <span id="translateYLabel">Y</span>
              <input
                type="range"
                min="-100"
                max="100"
                value="0"
                data-default="0"
                id="translateYRange"
                aria-labelledby="translateYLabel" />
            </label>
            <output id="translateYOutput" for="translateYRange"></output>
          </div>
          <div>
            <label>
              <span id="translateZLabel">Z</span>
              <input
                type="range"
                min="-100"
                max="100"
                value="0"
                data-default="0"
                id="translateZRange"
                aria-labelledby="translateZLabel" />
            </label>
            <output id="translateZOutput" for="translateZRange"></output>
          </div>
        </div>
      </fieldset>

      <fieldset class="transformFieldset">
        <legend>
          <label>
            <span>Rotation</span>
          </label>
          <button
            id="rotateSectionReset"
            class="resetSectionButton"
            aria-label="Reset">
            ↻
          </button>
        </legend>
        <div class="controlsContainer">
          <div>
            <label>
              <span id="rotateXLabel">X</span>
              <input
                type="range"
                min="-360"
                max="360"
                value="0"
                data-default="0"
                id="rotateXRange"
                aria-labelledby="rotateXLabel" />
            </label>
            <output id="rotateXOutput" for="rotateXRange"></output>
          </div>
          <div>
            <label>
              <span id="rotateYLabel">Y</span>
              <input
                type="range"
                min="-360"
                max="360"
                value="0"
                data-default="0"
                id="rotateYRange"
                aria-labelledby="rotateYLabel" />
            </label>
            <output id="rotateYOutput" for="rotateYRange"></output>
          </div>
          <div>
            <label>
              <span id="rotateZLabel">Z</span>
              <input
                type="range"
                min="-360"
                max="360"
                value="0"
                data-default="0"
                id="rotateZRange"
                aria-labelledby="rotateZLabel" />
            </label>
            <output id="rotateZOutput" for="rotateZRange"></output>
          </div>
        </div>
      </fieldset>

      <fieldset class="transformFieldset">
        <legend>
          <label>
            <span>Scale</span>
          </label>
          <button
            id="scaleSectionReset"
            class="resetSectionButton"
            aria-label="Reset">
            ↻
          </button>
        </legend>
        <div class="controlsContainer">
          <div>
            <label>
              <span id="scaleXLabel">X</span>
              <input
                type="range"
                min="0.1"
                max="2.5"
                value="1"
                data-default="1"
                step="0.1"
                id="scaleXRange"
                aria-labelledby="scaleXLabel" />
            </label>
            <output id="scaleXOutput" for="scaleXRange"></output>
          </div>
          <div>
            <label id="scaleYLabel">
              <span>Y</span>
              <input
                type="range"
                min="0.1"
                max="2.5"
                value="1"
                data-default="1"
                step="0.1"
                id="scaleYRange"
                aria-labelledby="scaleYLabel" />
            </label>
            <output id="scaleYOutput" for="scaleYRange"></output>
          </div>
          <div>
            <label id="scaleZLabel">
              <span>Z</span>
              <input
                type="range"
                min="0.1"
                max="2.5"
                value="1"
                data-default="1"
                step="0.1"
                id="scaleZRange"
                aria-labelledby="scaleZLabel" />
            </label>
            <output id="scaleZOutput" for="scaleZRange"></output>
          </div>
        </div>
      </fieldset>

      <fieldset class="transformFieldset">
        <legend>
          <label>
            <span>Skew</span>
          </label>
          <button
            id="skewSectionReset"
            class="resetSectionButton"
            aria-label="Reset">
            ↻
          </button>
        </legend>
        <div class="controlsContainer">
          <div>
            <label>
              <span id="skewXLabel">X</span>
              <input
                type="range"
                min="-90"
                max="90"
                value="0"
                data-default="0"
                id="skewXRange"
                aria-labelledby="skewXLabel" />
            </label>
            <output id="skewXOutput" for="skewXRange"></output>
          </div>
          <div>
            <label>
              <span id="skewYLabel">Y</span>
              <input
                type="range"
                min="-90"
                max="90"
                value="0"
                data-default="0"
                id="skewYRange"
                aria-labelledby="skewYLabel" />
            </label>
            <output id="skewYOutput" for="skewYRange"></output>
          </div>
        </div>
      </fieldset>

      <fieldset class="transformFieldset">
        <legend>
          <label>
            <span>Container Perspective</span>
          </label>
          <button
            id="containerPerspectiveSectionReset"
            class="resetSectionButton"
            aria-label="Reset">
            ↻
          </button>
        </legend>
        <div class="controlsContainer">
          <div>
            <label>
              <span id="perspectiveLabel"><code>perspective</code></span>
              <input
                type="range"
                min="75"
                max="500"
                value="200"
                data-default="200"
                id="perspectiveRange"
                aria-labelledby="perspectiveLabel" />
            </label>
            <output id="perspectiveOutput" for="perspectiveRange"></output>
          </div>
          <div>
            <label>
              <span id="perspectiveOriginXLabel"
                ><code>perspective-origin</code> X (%)</span
              >
              <input
                type="range"
                min="0"
                max="100"
                value="50"
                data-default="50"
                id="perspectiveOriginXRange"
                aria-labelledby="perspectiveOriginXLabel" />
            </label>
            <output
              id="perspectiveOriginXOutput"
              for="perspectiveOriginXRange"></output>
          </div>
          <div>
            <label>
              <span><code>perspective-origin</code> Y (%)</span>
              <input
                type="range"
                min="0"
                max="100"
                value="50"
                data-default="50"
                id="perspectiveOriginYRange"
                aria-labelledby="perspectiveOriginYLabel" />
            </label>
            <output
              id="perspectiveOriginYOutput"
              for="perspectiveOriginYRange"></output>
          </div>
        </div>
      </fieldset>

      <fieldset class="transformFieldset">
        <legend>
          <label>
            <span>Other Properties</span>
          </label>
          <button
            id="otherSectionReset"
            class="resetSectionButton"
            aria-label="Reset">
            ↻
          </button>
        </legend>
        <div class="controlsContainer">
          <div>
            <label>
              <span><code>backface-visibility</code></span>
              <input
                type="checkbox"
                checked="checked"
                data-default="checked"
                id="backfaceVisibilityCheckbox" />
            </label>
          </div>
        </div>
      </fieldset>
    </section>
  </fieldset>
  <section id="outputSection">
    <div id="outputContainer">
      <div id="cube">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
      <div id="z0"><code>z:0px</code></div>
    </div>
    <div id="perspectiveDot"></div>
  </section>
</article>
```

```css hidden live-sample___transforms
#allTransformFieldset {
  border: none;
  padding: 0;
  margin-bottom: 4px;
  accent-color: blue; /* or any color */
  font-family:
    Inter, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

#allTransformFieldset > legend {
  margin-bottom: 4px;
}

fieldset {
  margin: 0;
}

legend {
  font-weight: bold;
  padding: 0;
}

#fieldsetSection {
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 8px;
}

#outputSection {
  width: 100%;
  min-height: 400px;
  background: linear-gradient(skyblue, khaki);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: clip;
}

#outputContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  perspective: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  pointer-events: none;
}

#z0 {
  width: 50px;
  height: 50px;
  background: linear-gradient(
    to right bottom,
    rgb(223 223 223),
    rgb(190 190 190)
  );
  transform: translateZ(0px);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: black;
  border-radius: 50%;
  outline: 1px solid rgb(0 0 0 / 0.35);
  pointer-events: all;
}

#perspectiveDot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: rgb(240 0 0 / 0.5);
  transform: translate3d(-2px, -2px, 0px);
  position: absolute;
}

#cube {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: all 0.075s ease-out;
  position: absolute;
  pointer-events: all;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgb(90 90 90 / 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

.transformFieldset {
  margin: 0;
}

.controlsContainer {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
}

.controlsContainer {
  width: 100%;
}

.controlsContainer > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}

.controlsContainer > div > label {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}

button {
  font-size: 18px;
  border-radius: 50%;
  border: #ccc solid 1px;
  padding: 0;
  width: 26px;
  height: 26px;
  margin-left: 4px;
}

input[type="range"] {
  width: 172px;
}

output {
  width: 3em;
}
```

```js hidden live-sample___transforms
allTransformFieldset
  .querySelectorAll("input[type='range']")
  .forEach((rangeInput) => {
    // Event listeners for when the range inputs change
    rangeInput.addEventListener("input", (el) => {
      updateTransform();
    });

    // Reset the relevant transform setting when the range input is double clicked
    rangeInput.addEventListener("dblclick", (el) => {
      resetInput(el.target);
      updateTransform();
    });
  });

// Event listeners for when checkbox inputs change
allTransformFieldset
  .querySelectorAll("input[type='checkbox']")
  .forEach((checkboxInput) => {
    checkboxInput.addEventListener("input", (el) => {
      updateTransform();
    });
  });

// "Reset All" button event listener
resetAllButton.addEventListener("click", () => {
  allTransformFieldset.querySelectorAll("input").forEach((input) => {
    resetInput(input);
  });
  updateTransform();
});

// Section reset button event listeners
allTransformFieldset
  .querySelectorAll(".resetSectionButton")
  .forEach((resetSectionButton) => {
    resetSectionButton.addEventListener("click", (el) => {
      let allRanges = el.target.parentElement.parentElement.querySelectorAll(
        "input[type='range']",
      );
      allRanges.forEach((range) => {
        resetInput(range);
      });

      let allCheckboxes =
        el.target.parentElement.parentElement.querySelectorAll(
          "input[type='checkbox']",
        );
      allCheckboxes.forEach((check) => {
        resetInput(check);
      });

      updateTransform();
    });
  });

const resetInput = (inputEl) => {
  if (!inputEl) {
    console.warn(`inputEl \`${inputEl}\` is falsy!`);
    console.trace();
    return;
  }

  const defaultValue = inputEl.getAttribute("data-default");
  if (inputEl.getAttribute("type") === "checkbox") {
    inputEl.checked = defaultValue === "checked";
  } else {
    inputEl.value = defaultValue || "0";
  }
};

const updateOutputs = () => {
  translateXOutput.value = `${parseInt(translateXRange.value)}px`;
  translateYOutput.value = `${parseInt(translateYRange.value)}px`;
  translateZOutput.value = `${parseInt(translateZRange.value)}px`;

  rotateXOutput.value = `${parseInt(rotateXRange.value)}°`;
  rotateYOutput.value = `${parseInt(rotateYRange.value)}°`;
  rotateZOutput.value = `${parseInt(rotateZRange.value)}°`;

  scaleXOutput.value = `${parseFloat(scaleXRange.value)}x`;
  scaleYOutput.value = `${parseFloat(scaleYRange.value)}x`;
  scaleZOutput.value = `${parseFloat(scaleZRange.value)}x`;

  skewXOutput.value = `${parseFloat(skewXRange.value)}°`;
  skewYOutput.value = `${parseFloat(skewYRange.value)}°`;

  perspectiveOutput.value = `${parseInt(perspectiveRange.value)}px`;

  perspectiveOriginXOutput.value = `${parseInt(perspectiveOriginXRange.value)}%`;
  perspectiveOriginYOutput.value = `${parseInt(perspectiveOriginYRange.value)}%`;
};

const updateTransform = () => {
  updateOutputs();

  cube.style.transform = `translate3d(${translateXRange.value}px,
                ${translateYRange.value}px,
                ${translateZRange.value}px)
                rotateX(${rotateXRange.value}deg)
                rotateY(${rotateYRange.value}deg)
                rotateZ(${rotateZRange.value}deg)
                scale3d(${scaleXRange.value},
                ${scaleYRange.value},
                ${scaleZRange.value})
                skewX(${skewXRange.value}deg)
                skewY(${skewYRange.value}deg)`;
  cube.style.backfaceVisibility = `${backfaceVisibilityCheckbox.checked ? "visible" : "hidden"}`;

  outputContainer.style.perspective = `${perspectiveRange.value}px`;
  outputContainer.style.perspectiveOrigin = `${perspectiveOriginXRange.value}% ${perspectiveOriginYRange.value}%`;

  perspectiveDot.style.top = `${perspectiveOriginYRange.value}%`;
  perspectiveDot.style.left = `${perspectiveOriginXRange.value}%`;
};
updateTransform();
```

{{EmbedLiveSample("transforms", "", "850px")}}

You can also use the `perspective` slider to modify the [`perspective`](/en-US/docs/Web/CSS/perspective) property of the cube's container, which determines the distance between you and the `z=0` plane.

The [`perspective-origin`](/en-US/docs/Web/CSS/perspective-origin) sliders determine where you, the viewer, are looking into the 3D space for purposes of determining the view's _vanishing point_. This vanishing point is indicated by a small red dot. You can imagine modifying these sliders as physically moving your head up, down, left, and right to see different parts of the cube without moving the cube itself.

The `backface-visibility` checkbox determines whether the cube's back faces are set to `visible` or `hidden`.

The cube in the above example is comprised of six `<div>` elements, all of which are styled with CSS to create the cube's faces. The cube is not drawn using a 2D or 3D canvas context, so **you can inspect the faces of the cube with your browser's developer tools as you would inspect any other DOM element**. Try using your browser's developer tools element picker to inspect different faces of the cube as you transform its position and rotation.

> [!NOTE]
> The order in which transformations, including 3D rotations, are applied affects the resultant transformation. In the above example, transforms are translated, scaled, rotated, then skewed. The rotations are applied in the order X → Y → Z.

## Reference

### Properties

- {{cssxref("backface-visibility")}}
- {{cssxref("perspective")}}
- {{cssxref("perspective-origin")}}
- {{cssxref("rotate")}}
- {{cssxref("scale")}}
- {{cssxref("transform")}}
- {{cssxref("transform-box")}}
- {{cssxref("transform-origin")}}
- {{cssxref("transform-style")}}
- {{cssxref("translate")}}

### Functions

- {{cssxref("transform-function/matrix", "matrix()")}}
- {{cssxref("transform-function/matrix3d", "matrix3d()")}}
- {{cssxref("transform-function/perspective", "perspective()")}}
- {{cssxref("transform-function/rotate", "rotate()")}}
- {{cssxref("transform-function/rotate3d", "rotate3d()")}}
- {{cssxref("transform-function/rotateX", "rotateX()")}}
- {{cssxref("transform-function/rotateY", "rotateY()")}}
- {{cssxref("transform-function/rotateZ", "rotateZ()")}}
- {{cssxref("transform-function/scale", "scale()")}}
- {{cssxref("transform-function/scale3d", "scale3d()")}}
- {{cssxref("transform-function/scaleX", "scaleX()")}}
- {{cssxref("transform-function/scaleY", "scaleY()")}}
- {{cssxref("transform-function/scaleZ", "scaleZ()")}}
- {{cssxref("transform-function/skew", "skew()")}}
- {{cssxref("transform-function/skewX", "skewX()")}}
- {{cssxref("transform-function/skewY", "skewY()")}}
- {{cssxref("transform-function/translate", "translate()")}}
- {{cssxref("transform-function/translate3d", "translate3d()")}}
- {{cssxref("transform-function/translateX", "translateX()")}}
- {{cssxref("transform-function/translateY", "translateY()")}}
- {{cssxref("transform-function/translateZ", "translateZ()")}}

### Data types

- {{cssxref("&lt;transform-function&gt;")}}

## Guides

- [Using CSS transforms](/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Step-by-step tutorial about how to transform elements styled with CSS.
- [Coordinate systems](/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems)
  - : Describes the way pixel locations are defined in the CSS object model.
- [Performance fundamentals: Use CSS transforms](/en-US/docs/Web/Performance/Fundamentals#use_css_transforms)
  - : An overview of web performance fundamentals, including how CSS transforms can improve performance.
- [Matrix math for the web](/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : Describes how object transformations can be represented by mathematical matrices.

## Related concepts

- CSS Properties:
  - [`animation`](/en-US/docs/Web/CSS/animation)
  - [`background-position`](/en-US/docs/Web/CSS/background-position)
  - [`clip`](/en-US/docs/Web/CSS/clip)
  - [`clip-path`](/en-US/docs/Web/CSS/clip-path)
  - [`contain`](/en-US/docs/Web/CSS/contain)
  - [`content-visibility`](/en-US/docs/Web/CSS/content-visibility)
  - [`isolation`](/en-US/docs/Web/CSS/isolation)
  - [`mask`](/en-US/docs/Web/CSS/mask)
  - [`mask-border-source`](/en-US/docs/Web/CSS/mask-border-source)
  - [`mask-image`](/en-US/docs/Web/CSS/mask-image)
  - [`mix-blend-mode`](/en-US/docs/Web/CSS/mix-blend-mode)
  - [`opacity`](/en-US/docs/Web/CSS/opacity)
  - [`overflow`](/en-US/docs/Web/CSS/overflow)
  - [`transition`](/en-US/docs/Web/CSS/transition)
  - [`visibility`](/en-US/docs/Web/CSS/visibility)
- Data types:
  - [`<angle>`](/en-US/docs/Web/CSS/angle)
  - {{cssxref("length-percentage")}}
  - {{cssxref("length")}}
  - [`<number>`](/en-US/docs/Web/CSS/number)
  - {{cssxref("percentage")}}
  - [`<position>`](/en-US/docs/Web/CSS/position_value)
- Glossary terms:
  - [Interpolation](/en-US/docs/Glossary/Interpolation)
  - [Stacking context](/en-US/docs/Glossary/Stacking_context)
- [SVG](/en-US/docs/Web/SVG) concepts:
  - [`<animate>`](/en-US/docs/Web/SVG/Element/animate) element
  - [`<animateTransform>`](/en-US/docs/Web/SVG/Element/animateTransform) element
  - [`<set>`](/en-US/docs/Web/SVG/Element/set) element
  - [`transform`](/en-US/docs/Web/SVG/Attribute/transform) element

## Specifications

{{Specifications}}

## See also

- [Basic SVG transformations](/en-US/docs/Web/SVG/Tutorial/Basic_Transformations) tutorial
- [CSS animations](/en-US/docs/Web/CSS/CSS_animations) module
- [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions) module
