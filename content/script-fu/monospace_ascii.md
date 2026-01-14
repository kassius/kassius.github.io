> [!warning]
> this is ==𝚠𝚘𝚛𝚔 𝚒𝚗 𝚙𝚛𝚘𝚐𝚛𝚎𝚜𝚜==

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys

#  WIDE_MAP = dict((i, i + 0xFEE0) for i in range(0x21, 0x7F))
#  FIRST_CODEPOINT = 0x1D400 - 65
#  FIRST_CODEPOINT = 0x1D670 - 65
#  FIRST_CODEPOINT = 0x1D670
ALPHA_CODEPOINT = 0x1D670
NUMERIC_CODEPOINT = 0x1D7F6
#  SECOND_CODEPOINT = 0x1D68A - 65
#  THIRD_CODEPOINT = 0x1D7F6 - 65
UPPERCASE_RANGE = list(range(0x41, 0x5B))
LOWERCASE_RANGE = list(range(0x61, 0x7B))
ALPHA_RANGE = UPPERCASE_RANGE + LOWERCASE_RANGE
NUMERIC_RANGE = list(range(0x30, 0x3A))
#  WIDE_MAP = dict((i, i + FIRST_CODEPOINT) for i in range(0x41, 0x7F))
WIDE_MAP = dict((i, idx + ALPHA_CODEPOINT) for idx, i in enumerate(ALPHA_RANGE))
WIDE_MAP.update(dict((i, idx + NUMERIC_CODEPOINT) for idx, i in enumerate(NUMERIC_RANGE)))
#  WIDE_MAP = dict((i, i + FIRST_CODEPOINT) for i in range(0x41, 0x5B))
#  WIDE_MAP2 = dict((i, i + SECOND_CODEPOINT) for i in range(0x61, 0x7B))
#  WIDE_MAP3 = dict((i, i + THIRD_CODEPOINT) for i in range(0x30, 0x3A))
#  WIDE_MAP = dict((i, i + 0x1D400) for i in range(0x21, 0x7F))
#  WIDE_MAP = dict((i, i + 0x1D3DF) for i in range(0x21, 0x7F))
#  WIDE_MAP[0x20] = 0x3000

def widen(s):
    """
    Convert all ASCII characters to the full-width counterpart.

    >>> print widen('test, Foo!')
    ｔｅｓｔ，　Ｆｏｏ！
    >>>
    """
    return s.translate(WIDE_MAP)

#while True:
#    line = sys.stdin.readline()
#    if not line: break
#    sys.stdout.write(widen(line.decode('utf-8')).encode('utf-8'))

#print(widen('the wizards club'))
#print(widen('imlabs'))
print(widen(str(sys.stdin.read())))
```