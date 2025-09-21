---
sidebar_position: 4
---

# DeclareComponent
A simple constructor/callback to tell Seam that you made a component

|Type|Since|Scoped|
|----|-----|------|
|Declaration|0.0.1|No|

## Constructor
```lua
DeclareComponent(ComponentName : string, Constructor : (HydratedInstance : Instance, ...any) -> Instance)
```

## Usage
`DeclareComponent` is used to declare components that you can later use. Components declared with this function can be called back to by using `From`.

Let’s assume we want to declare a component that turns a frame into a blue one. We can declare this component by typing:

```lua
DeclareComponent("BlueFrame", function(Frame : Instance)
    Frame.BackgroundColor3 = Color3.fromRGB(0, 0, 255)
    return Frame
end)
```

To use this, we can later use `From`, like so:
```lua
local MyFrame = New("Frame", {
    --... Properties here
}, From "BlueFrame")
```