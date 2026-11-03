
```python
#!/usr/bin/env python

import sys

ALPHA_CODEPOINT = 0x1D670
NUMERIC_CODEPOINT = 0x1D7F6

UPPERCASE_RANGE = list(range(0x41, 0x5B))
LOWERCASE_RANGE = list(range(0x61, 0x7B))

ALPHA_RANGE = UPPERCASE_RANGE + LOWERCASE_RANGE

NUMERIC_RANGE = list(range(0x30, 0x3A))

WIDE_MAP = dict((i, idx + ALPHA_CODEPOINT)
                for idx, i in enumerate(ALPHA_RANGE))

WIDE_MAP.update(dict((i, idx + NUMERIC_CODEPOINT)
                     for idx, i in enumerate(NUMERIC_RANGE)))

def monospac_em(s):
    """
    Convert all ASCII characters to the monospace counterpart.

    >>> from monospace_ascii import monospac_em
    >>> monospac_em("test, Foo!")
    '𝚝𝚎𝚜𝚝, 𝙵𝚘𝚘!'
    >>>
    """
    return s.translate(WIDE_MAP)


if __name__ == "__main__":

    text = sys.stdin.read()

    monospaced_text = monospac_em(text)

    print(monospaced_text)
```

