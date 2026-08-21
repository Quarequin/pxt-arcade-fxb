# Fx Block

An Fx8 fixed-point math wrapper for Microsoft MakeCode Arcade block code.

`pxt-arcade-fxb` exposes the built-in Arcade `Fx8` type through a block-friendly namespace named `Fxb`. It provides conversion, arithmetic, comparison, rounding, range, integer-operation, and template-value blocks without requiring users to work directly with the underlying fixed-point representation.

## Add the extension to MakeCode Arcade

1. Open [Microsoft MakeCode Arcade](https://arcade.makecode.com/).

1. Create a new project.

1. Open the **Settings** gear menu and select **Extensions**.

1. Search for this repository or import the following URL:

   ```
   https://github.com/Quarequin/pxt-arcade-fxb
   ```

1. Select **Fx Block** from the toolbox to use the extension blocks.

You can also import the complete project directly:

1. Open [MakeCode Arcade](https://arcade.makecode.com/).

1. Select **Import** and then **Import URL**.

1. Paste the repository URL above and confirm the import.

## What is Fx8?

`Fx8` is MakeCode Arcade's fixed-point number type. It is useful when a game needs fractional values such as subpixel positions, movement speeds, animation progress, or other calculations that are more precise than integer-only arithmetic.

The extension keeps values as `Fx8` while calculations are performed. Convert an `Fx8` value back to an ordinary number only when a regular integer or floating-point value is required, such as when assigning a sprite coordinate or displaying a debug value.

## Block categories and operations

All blocks are provided by the `Fxb` namespace and appear under the **Fx Block** category.

| Block or function | Description |
| --- | --- |
| `fx8 v` / `Fxb.make(v)` | Convert a regular number into an `Fx8` value. |
| `integer value` / `Fxb.send(int, v)` | Convert an `Fx8` value to an integer. |
| `float value` / `Fxb.send(float, v)` | Convert an `Fx8` value to a floating-point number. |
| `x + y`, `x - y`, `x × y`, `x / y` / `Fxb.calc` | Perform arithmetic with two `Fx8` values. |
| `min x and y`, `max x and y` / `Fxb.clip` | Return the smaller or larger of two `Fx8` values. |
| `v integer + a`, `v integer × a`, `v integer / a` / `Fxb.icalc` | Perform an operation between an `Fx8` value and an integer. |
| `v << a`, `v >> a` / `Fxb.icalc` | Shift the internal fixed-point value left or right. |
| `abs value`, `neg value`, `floor value`, `ceil value` / `Fxb.algeb` | Apply a single operation to an `Fx8` value. |
| `compare x and y` / `Fxb.cmp` | Return the difference between two `Fx8` values for comparison. |
| `0.0`, `0.5`, `1.0`, `2.0` / `Fxb.pset` | Insert a predefined Fx8 template value. |

## Template values

The template block provides frequently used constants without requiring a numeric conversion block.

| Template block | Value |
| --- | --- |
| `0.0` | Zero |
| `0.5` | One half |
| `1.0` | One |
| `2.0` | Two |

## Example: smooth subpixel movement

The following example stores a sprite's logical position as an `Fx8` value. The position can contain a fractional part, while the visible sprite coordinate is converted to an integer when it is assigned to the sprite.

```typescript
let position = Fxb.make(10)
let velocity = Fxb.make(0.25)
let player = sprites.create(img`
    . . . . . . . .
    . . 2 2 2 2 . .
    . 2 2 2 2 2 2 .
    . 2 2 2 2 2 2 .
    . . 2 2 2 2 . .
    . . . . . . . .
`, SpriteKind.Player)

game.onUpdate(function () {
    position = Fxb.calc(position, Fxb.alu.add, velocity)
    player.x = Fxb.send(position, Fxb.fmt.integer)
})
```

The equivalent block workflow is:

```
on start
    position = fx8 10
    velocity = fx8 0.25

on game update
    position = position + velocity
    set player x to integer position
```

## Comparing Fx8 values

`Fxb.cmp(x, y)` returns the difference between two `Fx8` values rather than a Boolean value. Use the result with a comparison block:

| Result | Meaning |
| --- | --- |
| Less than `0` | `x` is smaller than `y`. |
| Equal to `0` | `x` and `y` are equal. |
| Greater than `0` | `x` is greater than `y`. |

## TypeScript API

The public namespace is `Fxb`. Its exported enum types are also contained inside the namespace:

| Enum | Values |
| --- | --- |
| `Fxb.tmpl` | `zero`, `oneHalf`, `one`, `two` |
| `Fxb.fmt` | `integer`, `float` |
| `Fxb.alu` | `add`, `sub`, `mul`, `div` |
| `Fxb.lim` | `min`, `max` |
| `Fxb.ialu` | `add`, `mul`, `div`, `lsh`, `rsh` |
| `Fxb.ab` | `abs`, `neg`, `floor`, `ceil` |

The main exported functions are `make`, `send`, `calc`, `clip`, `icalc`, `algeb`, `cmp`, and `pset`. The implementation is provided in [`api.ts`](api.ts), while the project targets MakeCode Arcade through [`pxt.json`](pxt.json).

## Project links

- [Open the project site](https://quarequin.github.io/pxt-arcade-fxb/)

- [View the source repository](https://github.com/Quarequin/pxt-arcade-fxb/)

- [Open MakeCode Arcade](https://arcade.makecode.com/)

## Metadata

This project is a MakeCode Arcade extension.

```html
<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>
makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}" )
</script>
```