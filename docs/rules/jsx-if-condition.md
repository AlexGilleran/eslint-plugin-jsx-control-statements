# If tag must contain condition attribute (jsx-if-condition)

Warn if `If` tag is missing `condition` attribute.


## Rule Details

The following patterns are considered warnings:

```js

<If>
    <div/>
</If>

<If>
    <div/>
<Else/>
    <div/>
</If>

```

The following patterns are not warnings:

```js

<If condition={foo}>
    <div/>
</If>

<If condition={foo}>
    <div/>
<Else/>
    <div/>
</If>

// fill me in

```

## When Not To Use It

If you are not using JSX, you can disable this rule