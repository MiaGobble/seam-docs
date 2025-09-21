---
sidebar_position: 1
---

# New
Constructs a Roblox instance, or hydrates an existing one with Seam states

|Type|Since|Scoped|
|----|-----|------|
|Declaration|0.0.1|Yes|

## Constructor
```lua
New(Object : string | Instance, Properties : {[any] : any}, From : From?) -> Instance
```

## Usage
`New` is the heart of Seam, giving everything the framework functionality. It’s a constructor to make new instances, or hydrate existing ones.

To make a brand new instance, use `New` like this:

```lua
local Object = New("Frame", {
    -- Properties here
    Size = UDim2.fromScale(0.5, 0.5), -- Example
})
```

Or alternatively, hydrate an existing instance by replacing the string with the instance you want, like this:

```lua
local ExistingFrame = Gui:FindFirstChild("Frame")

local Object = New(ExistingFrame, {
    -- Properties here
    Size = UDim2.fromScale(0.5, 0.5), -- Example
})
```

There are three parameters: object (as a string or instance), properties (as a dictionary), and optionally a common component (read more about `From()` to learn about this third parameter).

You can use states and other declarations with `New`. Read more about it in the rest of the documentation!