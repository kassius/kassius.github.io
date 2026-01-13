## Remove image margin

```sh
magick input.png -fuzz 0% -trim +repage output.png
```

Here the 0% `fuzz` means *not even a minimal color variation* from the ==top-left== pixel.

