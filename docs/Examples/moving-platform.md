---
sidebar_position: 3
---

# Moving platform
Let's make a moving platform, similar to what you see in platformer games!

It looks like this:

![](../../static/img/examples/moving-platform.gif)

And this is the code for it:

```lua
local PLATFORM_MOVE_TIME = 3

local ReplicatedFirst = game:GetService("ReplicatedFirst")

local Seam = require(ReplicatedFirst.Seam)
local Scope = Seam.Scope(Seam)
local EventSequence = Seam.EventSequence

local StartPoint = workspace:WaitForChild("StartPoint") -- An existing part in workspace
local EndPoint = workspace:WaitForChild("EndPoint") -- An existing part in workspace

local TargetPosition = Scope:Value(StartPoint.Position)
local AnimatedPosition = Scope:Tween(TargetPosition, TweenInfo.new(PLATFORM_MOVE_TIME))

local Platform = Scope:New(workspace:WaitForChild("Platform"), {
	Position = AnimatedPosition,
}) -- An existing part in workspace

local Animation = EventSequence({
	{5, function()
		TargetPosition.Value = EndPoint.Position
	end},
	
	{5, function()
		TargetPosition.Value = StartPoint.Position
	end},
})

Animation.Looped = true
Animation:Play()
```