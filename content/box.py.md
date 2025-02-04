Esse script cria uma caixa com caracteres unicode para o texto recebido via *stdin*.

> [!info] Exemplo 
>![[box-py.png]]

## O script

```python title="box.py"
#!/usr/bin/env python

import sys

# FIXME: got to fix different padding sizes than 1

CHARS = { 'horizontal_char': '\u2500',
          'vertical_char': '\u2502',
          'topleft_char': '\u250c',
          'topright_char': '\u2510',
          'bottomleft_char': '\u2514',
          'bottomright_char': '\u2518' }

NEWLINE = '\n'

PAD_SIZE = 1
PAD_CHAR = '\u0020' * PAD_SIZE  # space char


def process_line(text_line, biggest_line_length, pad_size, pad_char,
                 vertical_char):
    """Adds side border to each line on input.
    """

    padding = pad_char * pad_size
    extra_padding = pad_char * (biggest_line_length - len(text_line))

    return (vertical_char + padding + text_line + extra_padding + padding
            + vertical_char)


line_list = sys.stdin.readlines()
lines = [line.expandtabs().strip('\n') for line in line_list]

biggest_line_length = max(map(len, lines))

horizontal_borders_length = biggest_line_length + (PAD_SIZE * 2)

top_border = (CHARS['topleft_char'] +
              CHARS['horizontal_char'] * horizontal_borders_length +
              CHARS['topright_char'])

bottom_border = (CHARS['bottomleft_char'] +
                 CHARS['horizontal_char'] * horizontal_borders_length +
                 CHARS['bottomright_char'])

text_with_side_borders_line_list = [process_line(text_line=line,
                                      biggest_line_length=biggest_line_length,
                                      pad_size=PAD_SIZE,
                                      pad_char=PAD_CHAR,
                                      vertical_char=CHARS['vertical_char'])
                                    for line in lines]

text_with_side_borders = str('\n').join(text_with_side_borders_line_list)
box_parts = [top_border, text_with_side_borders, bottom_border]

box = str('\n').join(box_parts)

print(box, end="\n"*2)
```
