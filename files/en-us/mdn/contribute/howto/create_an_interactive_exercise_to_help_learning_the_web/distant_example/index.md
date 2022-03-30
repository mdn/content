---
title: distant example
slug: >-
  MDN/Contribute/Howto/Create_an_interactive_exercise_to_help_learning_the_web/distant_example
---
{{MDNSidebar}}

## The example

### HTML

```html
<div class="square">
  <p class="color">#000000</p>
</div>
```

### CSS

```css
body {
  padding: 10px;
  margin : 0;
}

.square {
  width  : 80px;
  height : 80px;
  padding: 10px;
  background-color: black;
  color: white;
  text-align: center;
}

.color {
  width: 60px;
  text-transform: uppercase;
}
```

### JS

```js
function setColor(color) {
  document.querySelector('.square').style.backgroundColor = '#' + color;
  document.querySelector('.color').textContent = '#' + color;
}

function getRandomColor() {
  var color = Math.floor(Math.random() * 16777215);
  return color.toString(16);
}

document.addEventListener('click', function (e) {
  setColor(getRandomColor());
});
```

## Live result

{{EmbedLiveSample('The_example', 120, 120)}}
