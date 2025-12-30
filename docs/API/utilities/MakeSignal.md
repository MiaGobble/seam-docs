---
sidebar_position: 7
---

# MakeSignal
Creates a signal that mimics a bindable event.

|Type|Since|Scoped|
|----|-----|------|
|Utility|0.3.3|No|

## Constructor
```lua
MakeSignal()
```

## Usage
`MakeSignal` is handy for when you want to create the functionality of bindable events, without using bindable events. 

It works like just like it, as seen below:

```lua
local MakeSignal = Seam.MakeSignal

local MySignal = MakeSignal()

local MyConnection = MySignal:Connect(function()
	print("I've been fired!")
end)

MySignal:Once(function()
	print("I only print once!")
end)

MySignal:Fire() -- Prints "I've been fired" and "I only print once!"
MySignal:Fire() -- Prints "I've been fired"

MyConnection:Disconnect()

MySignal:Fire() -- Nothing happens
```