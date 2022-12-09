# Creative javaScript v3.0

A game engine for *stupid* people <br/>*Insparation from __24a2__ by, jamesroutley*

> View the other versions!

- [v2.0](https://github.com/ClassicMC-Studios/c.Js-v2)
- [v1.0](https://github.com/ClassicMC-Studios/c.Js)

## Getting Started

> Download the `cjsV3.js` file<br/>
> Create a `index.html` file

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cjsV3Tutorial</title>
</head>
<body>
    <canvas id="myCanvas"></canvas>
    <script src="./cjsV3.js"></script>
    <script src="./yourProject.js"></script>
</body>
</html>
```

> Inside of `yourProject.js` include a `createCanvas()` funciton

```js
createCanvas(length,height,blockWidth,blockHeight);
```

> The `setDot()` function will set a colored dot at a position

```js
setDot(x,y,color);
```

> The `clear()` function resets the screen

```js
clear();
```

## Porting old cjs projects

> 1. Remove all cjs. as well as class initilization functions.<br/>
> 2. The `createOriginalCanvas()` function will draw the original canvas from v1.0

```js
// Nothing goes inside of the function
createOriginalCanvas();
```

> To clear the original canvas use `clearOriginalCanvas()`

```js
clearOriginalCanvas();
```

> The `setDot()` function works with OriginalCanvas

## Credits

### A game engine designed by, ClassicMC

#### Insparation from 24a2 by, jamesroutley

##### Other ideas from my family


