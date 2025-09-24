# API

:::warning
Warning! API is still a WIP and may have missing content or other issues.
:::

Seam is divided into five types:
- Declarations
- States
- Memory
- Connections
- Preset Components

### Declarations
Make, hydrate, and modify instances. Declarations are typically for construction or basic behavior.

### States
Reactive states for animation, input, and value simplification. These include computations, animations, and reactive values. 

### Memory
Manual and automatic cleanup, preventing memory leaks. At the moment, this is just `Scope`.

### Connections
Signal-based reactivity based on given input. Used to react to changes or signals without states.

## Preset Components
Out-of-the-box components you can use with `From()`. At the moment, this only includes a limited selection.