## Remove image margin

```sh
magick input.png -fuzz 0% -trim +repage output.png
```

Here the 0% `fuzz` means _not even a minimal color variation_ from the ==top-left== pixel.
