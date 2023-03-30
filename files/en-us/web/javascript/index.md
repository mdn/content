<!DOCTYPE html>
<!-- Provided the below working example for @property CSS attribute at https://developer.mozilla.org/en-US/docs/Web/CSS/@property for your incoporation-->
<html lang="en">
    <title>HTML</title>
<body>
<h1>ABC</h1>
<h2>DEF</h2>
<h3>GHI</h3>
<h3>XYZ</h3>
</body>
 <style>
@property --colorPrimary {
  syntax: '<color>';
  initial-value: magenta;
  inherits: false;
}
h1 {
   color: var(--colorPrimary); /* magenta */
}
h2 {
  --colorPrimary: yellow;
   color: var(--colorPrimary); /* yellow */
}
h3 {
   color: var(--colorPrimary); /* magenta */
}

h4 {
  --colorPrimary: 29;
   color: var(--colorPrimary); /* magenta , as 29 is invalid colorPrimary attribute,CSS color attribute fallsback to magenta color */
}
 </style>
</html>
