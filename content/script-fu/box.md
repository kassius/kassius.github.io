```python
#!/usr/bin/env python

import sys

# FIXME: got to fix different padding sizes than 1

characters = {
    'horizontal': '\u2500',
    'vertical': '\u2502'
}

flat_corners = {
    'top_left': '\u250c',
    'top_right': '\u2510',
    'bottom_left': '\u2514',
    'bottom_right': '\u2518'
}

round_corners = {
    'top_left': '\u256d',
    'top_right': '\u256e',
    'bottom_left': '\u2570',
    'bottom_right': '\u256f'
}

newline = '\n'

padding_size = 1
padding_char = '\u0020' * padding_size  # space char


def process_line(text_line, biggest_line_length, pad_size, pad_char,
                 vertical_char):
    """Adds side border to each line on input.
    """

    padding = pad_char * pad_size
    extra_padding = pad_char * (biggest_line_length - len(text_line))

    return (vertical_char + padding + text_line + extra_padding + padding
            + vertical_char)


def box_en(text: str, flat_borders: bool=False):
    """
    Frames str inside a unicode drawing box.

    >>> from box import box_en
    >>> print(box_en("test, Foo!"))
    ╭────────────╮
    │ test, Foo! │
    ╰────────────╯
    >>>
    """

    if flat_borders:
        characters.update(flat_borders)  # pyright: ignore
    else:
        characters.update(round_corners)

    line_list = text.splitlines()

    lines = [line.expandtabs().strip('\n') for line in line_list]

    biggest_line_length = max(map(len, lines))

    horizontal_borders_length = biggest_line_length + (padding_size * 2)

    top_border = (characters['top_left'] +
                  characters['horizontal'] * horizontal_borders_length +
                  characters['top_right'])

    bottom_border = (characters['bottom_left'] +
                     characters['horizontal'] * horizontal_borders_length +
                     characters['bottom_right'])

    text_with_side_borders_line_list = \
            [process_line(text_line=line,
                          biggest_line_length=biggest_line_length,
                          pad_size=padding_size,
                          pad_char=padding_char,
                          vertical_char=characters['vertical'])
             for line in lines]

    text_with_side_borders = str('\n').join(text_with_side_borders_line_list)
    box_parts = [top_border, text_with_side_borders, bottom_border]

    in_box = str('\n').join(box_parts)

    return in_box


if __name__ == "__main__":

    text = sys.stdin.read()
    boxed = box_en(text)
    print(boxed)
```

![[box-000.png]]