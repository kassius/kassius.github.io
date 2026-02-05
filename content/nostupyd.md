https://gist.github.com/iacchus/5e5a4c3f0badf49e87ced15ef84889bd

* **encode** — Encode the string using the codec registered for encoding.

  ```python
  encode(encoding='utf-8', errors='strict')
  ```
    
      encoding
        The encoding in which to encode the string.
      errors
        The error handling scheme to use for encoding errors.
        The default is 'strict' meaning that encoding errors raise a
        UnicodeEncodeError.  Other possible values are 'ignore', 'replace' and
        'xmlcharrefreplace' as well as any other name registered with
        codecs.register_error that can handle UnicodeEncodeErrors.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Encode the string using the codec registered for encoding.` |
  | 2 | `  encoding` <br /> `    The encoding in which to encode the string.` <br /> `  errors` <br /> `    The error handling scheme to use for encoding errors.` <br /> `    The default is 'strict' meaning that encoding errors raise a` <br /> `    UnicodeEncodeError.  Other possible values are 'ignore', 'replace' and` <br /> `    'xmlcharrefreplace' as well as any other name registered with` <br /> `    codecs.register_error that can handle UnicodeEncodeErrors.` |
---

* **replace** — Return a copy with all occurrences of substring old replaced by new.

  ```python
  replace(old, new, count=-1, /)
  ```
    
      count
        Maximum number of occurrences to replace.
        -1 (the default value) means replace all occurrences.
    
    If the optional argument count is given, only the first count occurrences are
    replaced.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a copy with all occurrences of substring old replaced by new.` |
  | 2 | `  count` <br /> `    Maximum number of occurrences to replace.` <br /> `    -1 (the default value) means replace all occurrences.` |
  | 3 | `If the optional argument count is given, only the first count occurrences are` <br /> `replaced.` |
---

* **split** — Return a list of the substrings in the string, using sep as the separator string.

  ```python
  split(sep=None, maxsplit=-1)
  ```
    
      sep
        The separator used to split the string.
    
        When set to None (the default value), will split on any whitespace
        character (including \n \r \t \f and spaces) and will discard
        empty strings from the result.
      maxsplit
        Maximum number of splits.
        -1 (the default value) means no limit.
    
    Splitting starts at the front of the string and works to the end.
    
    Note, str.split() is mainly useful for data that has been intentionally
    delimited.  With natural text that includes punctuation, consider using
    the regular expression module.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a list of the substrings in the string, using sep as the separator string.` |
  | 2 | `  sep` <br /> `    The separator used to split the string.` |
  | 3 | `    When set to None (the default value), will split on any whitespace` <br /> `    character (including \n \r \t \f and spaces) and will discard` <br /> `    empty strings from the result.` <br /> `  maxsplit` <br /> `    Maximum number of splits.` <br /> `    -1 (the default value) means no limit.` |
  | 4 | `Splitting starts at the front of the string and works to the end.` |
  | 5 | `Note, str.split() is mainly useful for data that has been intentionally` <br /> `delimited.  With natural text that includes punctuation, consider using` <br /> `the regular expression module.` |
---

* **rsplit** — Return a list of the substrings in the string, using sep as the separator string.

  ```python
  rsplit(sep=None, maxsplit=-1)
  ```
    
      sep
        The separator used to split the string.
    
        When set to None (the default value), will split on any whitespace
        character (including \n \r \t \f and spaces) and will discard
        empty strings from the result.
      maxsplit
        Maximum number of splits.
        -1 (the default value) means no limit.
    
    Splitting starts at the end of the string and works to the front.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a list of the substrings in the string, using sep as the separator string.` |
  | 2 | `  sep` <br /> `    The separator used to split the string.` |
  | 3 | `    When set to None (the default value), will split on any whitespace` <br /> `    character (including \n \r \t \f and spaces) and will discard` <br /> `    empty strings from the result.` <br /> `  maxsplit` <br /> `    Maximum number of splits.` <br /> `    -1 (the default value) means no limit.` |
  | 4 | `Splitting starts at the end of the string and works to the front.` |
---

* **join** — Concatenate any number of strings.

  ```python
  join(iterable, /)
  ```
    
    The string whose method is called is inserted in between each given string.
    The result is returned as a new string.
    
    Example: '.'.join(['ab', 'pq', 'rs']) -> 'ab.pq.rs'

  
  | Part | Description |
  |------|-------------|
  | 1 | `Concatenate any number of strings.` |
  | 2 | `The string whose method is called is inserted in between each given string.` <br /> `The result is returned as a new string.` |
  | 3 | `Example: '.'.join(['ab', 'pq', 'rs']) -> 'ab.pq.rs'` |
---

* **capitalize** — Return a capitalized version of the string.

  ```python
  capitalize()
  ```
    
    More specifically, make the first character have upper case and the rest lower
    case.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a capitalized version of the string.` |
  | 2 | `More specifically, make the first character have upper case and the rest lower` <br /> `case.` |
---

* **casefold** — Return a version of the string suitable for caseless comparisons.

  ```python
  casefold()
  ```
    


  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a version of the string suitable for caseless comparisons.` |
---

* **title** — Return a version of the string where each word is titlecased.

  ```python
  title()
  ```
    
    More specifically, words start with uppercased characters and all remaining
    cased characters have lower case.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a version of the string where each word is titlecased.` |
  | 2 | `More specifically, words start with uppercased characters and all remaining` <br /> `cased characters have lower case.` |
---

* **center** — Return a centered string of length width.

  ```python
  center(width, fillchar=' ', /)
  ```
    
    Padding is done using the specified fill character (default is a space).

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a centered string of length width.` |
  | 2 | `Padding is done using the specified fill character (default is a space).` |
---

* **count** — S.count(sub[, start[, end]]) -> int

      Return the number of non-overlapping occurrences of substring sub in
    string S[start:end].  Optional arguments start and end are
    interpreted as in slice notation.

  
  | Part | Description |
  |------|-------------|
  | 1 | `S.count(sub[, start[, end]]) -> int` |
  | 2 | `Return the number of non-overlapping occurrences of substring sub in` <br /> `string S[start:end].  Optional arguments start and end are` <br /> `interpreted as in slice notation.` |
---

* **expandtabs** — Return a copy where all tab characters are expanded using spaces.

  ```python
  expandtabs(tabsize=8)
  ```
    
    If tabsize is not given, a tab size of 8 characters is assumed.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a copy where all tab characters are expanded using spaces.` |
  | 2 | `If tabsize is not given, a tab size of 8 characters is assumed.` |
---

* **find** — S.find(sub[, start[, end]]) -> int

      Return the lowest index in S where substring sub is found,
    such that sub is contained within S[start:end].  Optional
    arguments start and end are interpreted as in slice notation.
    
    Return -1 on failure.

  
  | Part | Description |
  |------|-------------|
  | 1 | `S.find(sub[, start[, end]]) -> int` |
  | 2 | `Return the lowest index in S where substring sub is found,` <br /> `such that sub is contained within S[start:end].  Optional` <br /> `arguments start and end are interpreted as in slice notation.` |
  | 3 | `Return -1 on failure.` |
---

* **partition** — Partition the string into three parts using the given separator.

  ```python
  partition(sep, /)
  ```
    
    This will search for the separator in the string.  If the separator is found,
    returns a 3-tuple containing the part before the separator, the separator
    itself, and the part after it.
    
    If the separator is not found, returns a 3-tuple containing the original string
    and two empty strings.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Partition the string into three parts using the given separator.` |
  | 2 | `This will search for the separator in the string.  If the separator is found,` <br /> `returns a 3-tuple containing the part before the separator, the separator` <br /> `itself, and the part after it.` |
  | 3 | `If the separator is not found, returns a 3-tuple containing the original string` <br /> `and two empty strings.` |
---

* **index** — S.index(sub[, start[, end]]) -> int

      Return the lowest index in S where substring sub is found,
    such that sub is contained within S[start:end].  Optional
    arguments start and end are interpreted as in slice notation.
    
    Raises ValueError when the substring is not found.

  
  | Part | Description |
  |------|-------------|
  | 1 | `S.index(sub[, start[, end]]) -> int` |
  | 2 | `Return the lowest index in S where substring sub is found,` <br /> `such that sub is contained within S[start:end].  Optional` <br /> `arguments start and end are interpreted as in slice notation.` |
  | 3 | `Raises ValueError when the substring is not found.` |
---

* **ljust** — Return a left-justified string of length width.

  ```python
  ljust(width, fillchar=' ', /)
  ```
    
    Padding is done using the specified fill character (default is a space).

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a left-justified string of length width.` |
  | 2 | `Padding is done using the specified fill character (default is a space).` |
---

* **lower** — Return a copy of the string converted to lowercase.

  ```python
  lower()
  ```
    


  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a copy of the string converted to lowercase.` |
---

* **lstrip** — Return a copy of the string with leading whitespace removed.

  ```python
  lstrip(chars=None, /)
  ```
    
    If chars is given and not None, remove characters in chars instead.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a copy of the string with leading whitespace removed.` |
  | 2 | `If chars is given and not None, remove characters in chars instead.` |
---

* **rfind** — S.rfind(sub[, start[, end]]) -> int

      Return the highest index in S where substring sub is found,
    such that sub is contained within S[start:end].  Optional
    arguments start and end are interpreted as in slice notation.
    
    Return -1 on failure.

  
  | Part | Description |
  |------|-------------|
  | 1 | `S.rfind(sub[, start[, end]]) -> int` |
  | 2 | `Return the highest index in S where substring sub is found,` <br /> `such that sub is contained within S[start:end].  Optional` <br /> `arguments start and end are interpreted as in slice notation.` |
  | 3 | `Return -1 on failure.` |
---

* **rindex** — S.rindex(sub[, start[, end]]) -> int

      Return the highest index in S where substring sub is found,
    such that sub is contained within S[start:end].  Optional
    arguments start and end are interpreted as in slice notation.
    
    Raises ValueError when the substring is not found.

  
  | Part | Description |
  |------|-------------|
  | 1 | `S.rindex(sub[, start[, end]]) -> int` |
  | 2 | `Return the highest index in S where substring sub is found,` <br /> `such that sub is contained within S[start:end].  Optional` <br /> `arguments start and end are interpreted as in slice notation.` |
  | 3 | `Raises ValueError when the substring is not found.` |
---

* **rjust** — Return a right-justified string of length width.

  ```python
  rjust(width, fillchar=' ', /)
  ```
    
    Padding is done using the specified fill character (default is a space).

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a right-justified string of length width.` |
  | 2 | `Padding is done using the specified fill character (default is a space).` |
---

* **rstrip** — Return a copy of the string with trailing whitespace removed.

  ```python
  rstrip(chars=None, /)
  ```
    
    If chars is given and not None, remove characters in chars instead.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a copy of the string with trailing whitespace removed.` |
  | 2 | `If chars is given and not None, remove characters in chars instead.` |
---

* **rpartition** — Partition the string into three parts using the given separator.

  ```python
  rpartition(sep, /)
  ```
    
    This will search for the separator in the string, starting at the end. If
    the separator is found, returns a 3-tuple containing the part before the
    separator, the separator itself, and the part after it.
    
    If the separator is not found, returns a 3-tuple containing two empty strings
    and the original string.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Partition the string into three parts using the given separator.` |
  | 2 | `This will search for the separator in the string, starting at the end. If` <br /> `the separator is found, returns a 3-tuple containing the part before the` <br /> `separator, the separator itself, and the part after it.` |
  | 3 | `If the separator is not found, returns a 3-tuple containing two empty strings` <br /> `and the original string.` |
---

* **splitlines** — Return a list of the lines in the string, breaking at line boundaries.

  ```python
  splitlines(keepends=False)
  ```
    
    Line breaks are not included in the resulting list unless keepends is given and
    true.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a list of the lines in the string, breaking at line boundaries.` |
  | 2 | `Line breaks are not included in the resulting list unless keepends is given and` <br /> `true.` |
---

* **strip** — Return a copy of the string with leading and trailing whitespace removed.

  ```python
  strip(chars=None, /)
  ```
    
    If chars is given and not None, remove characters in chars instead.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a copy of the string with leading and trailing whitespace removed.` |
  | 2 | `If chars is given and not None, remove characters in chars instead.` |
---

* **swapcase** — Convert uppercase characters to lowercase and lowercase characters to uppercase.

  ```python
  swapcase()
  ```
    


  
  | Part | Description |
  |------|-------------|
  | 1 | `Convert uppercase characters to lowercase and lowercase characters to uppercase.` |
---

* **translate** — Replace each character in the string using the given translation table.

  ```python
  translate(table, /)
  ```
    
      table
        Translation table, which must be a mapping of Unicode ordinals to
        Unicode ordinals, strings, or None.
    
    The table must implement lookup/indexing via __getitem__, for instance a
    dictionary or list.  If this operation raises LookupError, the character is
    left untouched.  Characters mapped to None are deleted.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Replace each character in the string using the given translation table.` |
  | 2 | `  table` <br /> `    Translation table, which must be a mapping of Unicode ordinals to` <br /> `    Unicode ordinals, strings, or None.` |
  | 3 | `The table must implement lookup/indexing via __getitem__, for instance a` <br /> `dictionary or list.  If this operation raises LookupError, the character is` <br /> `left untouched.  Characters mapped to None are deleted.` |
---

* **upper** — Return a copy of the string converted to uppercase.

  ```python
  upper()
  ```
    


  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a copy of the string converted to uppercase.` |
---

* **startswith** — S.startswith(prefix[, start[, end]]) -> bool

      Return True if S starts with the specified prefix, False otherwise.
    With optional start, test S beginning at that position.
    With optional end, stop comparing S at that position.
    prefix can also be a tuple of strings to try.

  
  | Part | Description |
  |------|-------------|
  | 1 | `S.startswith(prefix[, start[, end]]) -> bool` |
  | 2 | `Return True if S starts with the specified prefix, False otherwise.` <br /> `With optional start, test S beginning at that position.` <br /> `With optional end, stop comparing S at that position.` <br /> `prefix can also be a tuple of strings to try.` |
---

* **endswith** — S.endswith(suffix[, start[, end]]) -> bool

      Return True if S ends with the specified suffix, False otherwise.
    With optional start, test S beginning at that position.
    With optional end, stop comparing S at that position.
    suffix can also be a tuple of strings to try.

  
  | Part | Description |
  |------|-------------|
  | 1 | `S.endswith(suffix[, start[, end]]) -> bool` |
  | 2 | `Return True if S ends with the specified suffix, False otherwise.` <br /> `With optional start, test S beginning at that position.` <br /> `With optional end, stop comparing S at that position.` <br /> `suffix can also be a tuple of strings to try.` |
---

* **removeprefix** — Return a str with the given prefix string removed if present.

  ```python
  removeprefix(prefix, /)
  ```
    
    If the string starts with the prefix string, return string[len(prefix):].
    Otherwise, return a copy of the original string.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a str with the given prefix string removed if present.` |
  | 2 | `If the string starts with the prefix string, return string[len(prefix):].` <br /> `Otherwise, return a copy of the original string.` |
---

* **removesuffix** — Return a str with the given suffix string removed if present.

  ```python
  removesuffix(suffix, /)
  ```
    
    If the string ends with the suffix string and that suffix is not empty,
    return string[:-len(suffix)]. Otherwise, return a copy of the original
    string.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a str with the given suffix string removed if present.` |
  | 2 | `If the string ends with the suffix string and that suffix is not empty,` <br /> `return string[:-len(suffix)]. Otherwise, return a copy of the original` <br /> `string.` |
---

* **isascii** — Return True if all characters in the string are ASCII, False otherwise.

  ```python
  isascii()
  ```
    
    ASCII characters have code points in the range U+0000-U+007F.
    Empty string is ASCII too.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return True if all characters in the string are ASCII, False otherwise.` |
  | 2 | `ASCII characters have code points in the range U+0000-U+007F.` <br /> `Empty string is ASCII too.` |
---

* **islower** — Return True if the string is a lowercase string, False otherwise.

  ```python
  islower()
  ```
    
    A string is lowercase if all cased characters in the string are lowercase and
    there is at least one cased character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return True if the string is a lowercase string, False otherwise.` |
  | 2 | `A string is lowercase if all cased characters in the string are lowercase and` <br /> `there is at least one cased character in the string.` |
---

* **isupper** — Return True if the string is an uppercase string, False otherwise.

  ```python
  isupper()
  ```
    
    A string is uppercase if all cased characters in the string are uppercase and
    there is at least one cased character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return True if the string is an uppercase string, False otherwise.` |
  | 2 | `A string is uppercase if all cased characters in the string are uppercase and` <br /> `there is at least one cased character in the string.` |
---

* **istitle** — Return True if the string is a title-cased string, False otherwise.

  ```python
  istitle()
  ```
    
    In a title-cased string, upper- and title-case characters may only
    follow uncased characters and lowercase characters only cased ones.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return True if the string is a title-cased string, False otherwise.` |
  | 2 | `In a title-cased string, upper- and title-case characters may only` <br /> `follow uncased characters and lowercase characters only cased ones.` |
---

* **isspace** — Return True if the string is a whitespace string, False otherwise.

  ```python
  isspace()
  ```
    
    A string is whitespace if all characters in the string are whitespace and there
    is at least one character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return True if the string is a whitespace string, False otherwise.` |
  | 2 | `A string is whitespace if all characters in the string are whitespace and there` <br /> `is at least one character in the string.` |
---

* **isdecimal** — Return True if the string is a decimal string, False otherwise.

  ```python
  isdecimal()
  ```
    
    A string is a decimal string if all characters in the string are decimal and
    there is at least one character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return True if the string is a decimal string, False otherwise.` |
  | 2 | `A string is a decimal string if all characters in the string are decimal and` <br /> `there is at least one character in the string.` |
---

* **isdigit** — Return True if the string is a digit string, False otherwise.

  ```python
  isdigit()
  ```
    
    A string is a digit string if all characters in the string are digits and there
    is at least one character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return True if the string is a digit string, False otherwise.` |
  | 2 | `A string is a digit string if all characters in the string are digits and there` <br /> `is at least one character in the string.` |
---

* **isnumeric** — Return True if the string is a numeric string, False otherwise.

  ```python
  isnumeric()
  ```
    
    A string is numeric if all characters in the string are numeric and there is at
    least one character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return True if the string is a numeric string, False otherwise.` |
  | 2 | `A string is numeric if all characters in the string are numeric and there is at` <br /> `least one character in the string.` |
---

* **isalpha** — Return True if the string is an alphabetic string, False otherwise.

  ```python
  isalpha()
  ```
    
    A string is alphabetic if all characters in the string are alphabetic and there
    is at least one character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return True if the string is an alphabetic string, False otherwise.` |
  | 2 | `A string is alphabetic if all characters in the string are alphabetic and there` <br /> `is at least one character in the string.` |
---

* **isalnum** — Return True if the string is an alpha-numeric string, False otherwise.

  ```python
  isalnum()
  ```
    
    A string is alpha-numeric if all characters in the string are alpha-numeric and
    there is at least one character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return True if the string is an alpha-numeric string, False otherwise.` |
  | 2 | `A string is alpha-numeric if all characters in the string are alpha-numeric and` <br /> `there is at least one character in the string.` |
---

* **isidentifier** — Return True if the string is a valid Python identifier, False otherwise.

  ```python
  isidentifier()
  ```
    
    Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
    such as "def" or "class".

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return True if the string is a valid Python identifier, False otherwise.` |
  | 2 | `Call keyword.iskeyword(s) to test whether string s is a reserved identifier,` <br /> `such as "def" or "class".` |
---

* **isprintable** — Return True if all characters in the string are printable, False otherwise.

  ```python
  isprintable()
  ```
    
    A character is printable if repr() may use it in its output.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return True if all characters in the string are printable, False otherwise.` |
  | 2 | `A character is printable if repr() may use it in its output.` |
---

* **zfill** — Pad a numeric string with zeros on the left, to fill a field of the given width.

  ```python
  zfill(width, /)
  ```
    
    The string is never truncated.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Pad a numeric string with zeros on the left, to fill a field of the given width.` |
  | 2 | `The string is never truncated.` |
---

* **format** — S.format(*args, **kwargs) -> str

      Return a formatted version of S, using substitutions from args and kwargs.
    The substitutions are identified by braces ('{' and '}').

  
  | Part | Description |
  |------|-------------|
  | 1 | `S.format(*args, **kwargs) -> str` |
  | 2 | `Return a formatted version of S, using substitutions from args and kwargs.` <br /> `The substitutions are identified by braces ('{' and '}').` |
---

* **format_map** — S.format_map(mapping) -> str

      Return a formatted version of S, using substitutions from mapping.
    The substitutions are identified by braces ('{' and '}').

  
  | Part | Description |
  |------|-------------|
  | 1 | `S.format_map(mapping) -> str` |
  | 2 | `Return a formatted version of S, using substitutions from mapping.` <br /> `The substitutions are identified by braces ('{' and '}').` |
---

* **maketrans** — Return a translation table usable for str.translate().

      If there is only one argument, it must be a dictionary mapping Unicode
    ordinals (integers) or characters to Unicode ordinals, strings or None.
    Character keys will be then converted to ordinals.
    If there are two arguments, they must be strings of equal length, and
    in the resulting dictionary, each character in x will be mapped to the
    character at the same position in y. If there is a third argument, it
    must be a string, whose characters will be mapped to None in the result.

  
  | Part | Description |
  |------|-------------|
  | 1 | `Return a translation table usable for str.translate().` |
  | 2 | `If there is only one argument, it must be a dictionary mapping Unicode` <br /> `ordinals (integers) or characters to Unicode ordinals, strings or None.` <br /> `Character keys will be then converted to ordinals.` <br /> `If there are two arguments, they must be strings of equal length, and` <br /> `in the resulting dictionary, each character in x will be mapped to the` <br /> `character at the same position in y. If there is a third argument, it` <br /> `must be a string, whose characters will be mapped to None in the result.` |
---