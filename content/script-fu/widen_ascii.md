```python
#!/usr/bin/env python

import sys

WIDE_MAP = dict((i, i + 0xFEE0) for i in range(0x21, 0x7F))
WIDE_MAP[0x20] = 0x3000

def widen(s):
    """
    Convert all ASCII characters to the full-width counterpart.

    >>> from widen_ascii import widen
    >>> print(widen("test, Foo!"))
    ｔｅｓｔ，　Ｆｏｏ！
    >>>
    """
    return s.translate(WIDE_MAP)


if __name__ == "__main__":

    text = sys.stdin.read()

    widen_text = widen(text)

    print(widen_text)
```