## This tool transpiles code with a BASIC-like syntax into SVG.
#### For now, there are only lines and circles :D

### /build contains a commonjs and an iife bundle.

### /testing contains examples for both bundles.

## Example:

```basic
line 0 100 300 100
line 0 200 300 200
line 100 0 100 300
line 200 0 200 300

circle 50 50 30
circle 150 50 30

line 230 230 270 270
line 270 230 230 270
```
#### The above turns into this:
```svg
<line stroke="#000"fill="#aaa"stroke-width="4"x1="0"y1="100"x2="300"y2="100" />
<line stroke="#000"fill="#aaa"stroke-width="4"x1="0"y1="200"x2="300"y2="200" />
<line stroke="#000"fill="#aaa"stroke-width="4"x1="100"y1="0"x2="100"y2="300" />
<line stroke="#000"fill="#aaa"stroke-width="4"x1="200"y1="0"x2="200"y2="300" />
<circle stroke="#000"fill="#aaa"stroke-width="4"cx="50"cy="50"r="30" />
<circle stroke="#000"fill="#aaa"stroke-width="4"cx="150"cy="50"r="30" />
<line stroke="#000"fill="#aaa"stroke-width="4"x1="230"y1="230"x2="270"y2="270" />
<line stroke="#000"fill="#aaa"stroke-width="4"x1="270"y1="230"x2="230"y2="270" />
```