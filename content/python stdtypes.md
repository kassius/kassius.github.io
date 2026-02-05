let's essay a little cheatsheet for python standard types

```python
>>> [method for method in a.__dir__() if not method.startswith("__")]
['encode', 'replace', 'split', 'rsplit', 'join', 'capitalize', 'casefold', 'title', 'center', 'count', 'expandtabs', 'find', 'partition', 'index', 'ljust', 'lower', 'lstrip', 'rfind', 'rindex', 'rjust', 'rstrip', 'rpartition', 'splitlines', 'strip', 'swapcase', 'translate', 'upper', 'startswith', 'endswith', 'removeprefix', 'removesuffix', 'isascii', 'islower', 'isupper', 'istitle', 'isspace', 'isdecimal', 'isdigit', 'isnumeric', 'isalpha', 'isalnum', 'isidentifier', 'isprintable', 'zfill', 'format', 'format_map', 'maketrans']
>>> a = str()
>>> [method for method in a.__dir__() if not method.startswith("__")]
['encode', 'replace', 'split', 'rsplit', 'join', 'capitalize', 'casefold', 'title', 'center', 'count', 'expandtabs', 'find', 'partition', 'index', 'ljust', 'lower', 'lstrip', 'rfind', 'rindex', 'rjust', 'rstrip', 'rpartition', 'splitlines', 'strip', 'swapcase', 'translate', 'upper', 'startswith', 'endswith', 'removeprefix', 'removesuffix', 'isascii', 'islower', 'isupper', 'istitle', 'isspace', 'isdecimal', 'isdigit', 'isnumeric', 'isalpha', 'isalnum', 'isidentifier', 'isprintable', 'zfill', 'format', 'format_map', 'maketrans']
>>> b = int()—
>>> [method for method in b.__dir__() if not method.startswith("__")]
['conjugate', 'bit_length', 'bit_count', 'to_bytes', 'from_bytes', 'as_integer_ratio', 'is_integer', 'real', 'imag', 'numerator', 'denominator']
>>>
```

also

```python
>>> a = str()
>>> a.__doc__
"str(object='') -> str\nstr(bytes_or_buffer[, encoding[, errors]]) -> str\n\nCreate a new string object from the given object. If encoding or\nerrors is specified, then the object must expose a data buffer\nthat will be decoded using the given encoding and error handler.\nOtherwise, returns the result of object.__str__() (if defined)\nor repr(object).\nencoding defaults to sys.getdefaultencoding().\nerrors defaults to 'strict'."
>>> a.startswith.__doc__
'S.startswith(prefix[, start[, end]]) -> bool\n\nReturn True if S starts with the specified prefix, False otherwise.\nWith optional start, test S beginning at that position.\nWith optional end, stop comparing S at that position.\nprefix can also be a tuple of strings to try.'
>>>
```

also

```sh
python -c 'help("str")'
```

**int**

* conjugate — does this and that
* bit_lenght

**str**

| method | what it does       |
| ------ | ------------------ |
| encode | does this and that |

---
