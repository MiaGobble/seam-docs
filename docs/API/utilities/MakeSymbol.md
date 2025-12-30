---
sidebar_position: 6
---

# MakeSymbol
Creates a symbol generic userdata that can be coerced into a string.

|Type|Since|Scoped|
|----|-----|------|
|Utility|0.3.3|No|

## Constructor
```lua
MakeSymbol(SymbolName : string)
```

## Usage
This utility function takes a string for the symbol name and creates a generic userdata.

When this userdata is printed, though, it will be printed as a string. Other forms of string conversion, such as concatenation or `tostring`, will also convert this to a string.

Here is an example:

```lua
local MakeSymbol = Seam.MakeSymbol

local Foo = MakeSymbol("Test")
local Bar = MakeSymbol("Test")

print(Foo == Bar) -- Prints False

print(tostring(Foo) == tostring(Bar)) -- Prints True

print(Foo == "Test") -- Prints False

print(Foo) -- Prints "Test"
```