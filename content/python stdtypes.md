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

let's essay a little cheatsheet for python standard types

**int**

* conjugate — does this and that
* bit_lenght

**str**

| method | what it does       |
| ------ | ------------------ |
| encode | does this and that |
