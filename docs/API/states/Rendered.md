---
sidebar_position: 5
---

# Rendered
A reactive state that force-updates every frame

|Type|Since|Scoped|
|----|-----|------|
|State|0.0.3|Yes|

## Constructor
```lua
Rendered(CalculationFunction : () -> Value.Value) -> nil)
```

## Properties
#### `Value : any`
The current value of the render. Read-only.

## Usage
Similar to `Computed()`, `Rendered()` acts as an ever-changing reactive state. However, it does not include the `Use()` method, and instead can react to any userdata. As such, it force-updates every `RunService.RenderStepped`.

```lua
local XPosition = 0

New(MyFrame, {
    Position = Rendered(function() -- Updates every frame
        return UDim2.fromScale(XPosition, 0) -- Can react to any userdata
    end)
})

XPosition = 0.5 -- Updates x position to 0.5, meaning rendered.value = UDim2.fromScale(0.5, 0)
```