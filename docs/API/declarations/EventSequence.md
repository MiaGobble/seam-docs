---
sidebar_position: 12
---

# EventSequence
A sequence of value changes and custom callbacks that can be played/stopped/etc at any time.

|Type|Since|Scoped|
|----|-----|------|
|Declaration|0.3.4|No|

## Constructor
```lua
EventSequence({
	{
		Time : number,
		ValueSource : ValueInstance,
		NewValue : any,
		Callback : () -> nil,
	},

	-- ...
})
```

## Methods
#### `Play()`
Plays the event sequence in order of times provided.

#### `Stop()`
Stops the playing event sequence.

#### `Pause()`
Pauses the playing event sequence.

#### `Resume()`
Resumes the paused event sequence.

## Usage
`EventSequence` allows you to group timed callbacks with each other, and that group has methods to play and stop the sequence. This is particularly most helpful in applications such as complex animation, since it allows you to change values at time intervals.

Here is an example usage of this:

```lua
local TestValue = Value(5)

OnChanged(TestValue, function()
	print(TestValue.Value)
end)

local TestSequence = EventSequence({
	{
		Time = 0.1,
		ValueSource = TestValue,
		NewValue = 10,
	},
	
	{
		Time = 1,
		ValueSource = TestValue,
		NewValue = 15,
	},
	
	{
		Time = 3,
		ValueSource = TestValue,
		NewValue = 25,
	},
	
	{
		Time = 2.5,
		ValueSource = TestValue,
		NewValue = 20,
	},
	
	{
		Time = 5,
		Callback = function()
			print("Reached 5 seconds")
		end,
	}
})

TestSequence:Play() -- Over the course of 5 seconds, it prints 10, 15, 20, 25, and "Reached 5 seconds"
```

In an event sequence, you pass in an array of sequence keypoints. The keypoint type is this:

```lua
export type SequenceKeyframe = {
    Time : number,
    ValueSource : Value.ValueInstance<any>?,
    NewValue : any?,
    Callback : () -> nil?,
}
```

`Time` is always required, and `ValueSource` / `NewValue` are required if the other is present. `Callback` is only required if there is no value source or new value.

`ValueSource` is a Seam value object of any type, and `NewValue` is the value it will be changed to. `Callback` is a generic function that does anything.

An event sequence also has the following methods:
* `Play()`
* `Stop()`
* `Pause()`
* `Resume()`

Those methods are pretty self-explanatory.