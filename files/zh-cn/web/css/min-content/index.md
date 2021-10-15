---
title: min-content
slug: Web/CSS/min-content
tags:
  - CSS
  - Keyword
  - Reference
  - min-content
  - sizing
browser-compat: css.properties.width.min-content
---
`min-content` 尺寸关键字代表着元素内容固有的最小宽度。对于文本内容，它意味着被内容的长度会受到单词长度的影响，内容长度等同于最长的单词长度。

## 语法

```css
/* Used as a length */
width: min-content;
inline-size: min-content;
height: min-content;
block-size: min-content;

/* used in grid tracks */
grid-template-columns: 200px 1fr min-content;

/* Global values */
min-content: inherit;
min-content: initial;
min-content: revert;
min-content: unset;
```

## 示例

### 使用 min-content 进行框大小调整

#### HTML

```html
<div class="item">Item</div>
<div class="item">Item with more text in it.</div>
```

#### CSS

```css
.item {
  width: min-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### 运行结果

{{EmbedLiveSample("Using_min-content_for_box_sizing", "100%", 200)}}

### 使用 min-content 调整网格列的大小

#### HTML

```html
<div id="container">
  <div>Item</div>
  <div>
    Item with more text in it.
  </div>
  <div>Flexible item</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: min-content min-content 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

#### 运行结果

{{EmbedLiveSample("Sizing_grid_columns_with_min-content", "100%", 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

### 支持宽度（和其他尺寸属性）

{{Compat}}
