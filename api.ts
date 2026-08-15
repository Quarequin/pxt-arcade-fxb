//% block="Fx Block" icon="\uf1ec" color="#ebc21e"
namespace FxB {

    export const enum tmps {
        //% block="0.0"
        zero = 0x0,
        //% block="0.5"
        oneHalf = 0x1,
        //% block="1.0"
        one = 0x2,
        //% block="2.0"
        two = 0x3,
    }

    export const enum fmts {
        //% block="integer"
        integer = 0x0,
        //% block="float"
        float = 0x1,
    }

    export const enum calcs {
        //% block="+"
        add = 0x0,
        //% block="-"
        sub = 0x1,
        //% block="×"
        mul = 0x2,
        //% block="/"
        div = 0x3,
    }

    export const enum lims {
        //% block="min"
        min = 0x0,
        //% block="max"
        max = 0x1,
    }

    export const enum ints {
        //% block="integer +"
        add = 0x0,
        //% block="integer ×"
        mul = 0x1,
        //% block="integer /"
        div = 0x2,
        //% block="<<"
        lsh = 0x4,
        //% block=">>"
        rsh = 0x5,
    }

    export const enum ones {
        //% block="abs"
        abs = 0x0,
        //% block="neg"
        neg = 0x1,
        //% block="floor"
        floor = 0x2,
        //% block="ceil"
        ceil = 0x3,
    }

    /**
     * Convert a regular number to an Fx8 value.
     */
    //% blockId=fxb_make block="fx8 $value"
    //% weight=10
    export function make(value: number): Fx8 {
        return Fx8(value);
    }

    /**
     * Convert an Fx8 value to an integer or a float.
     */
    //% blockId=fxb_fmt block="$value=fxb_make to $type"
    //% weight=9
    export function fmt(value: Fx8, type: fmts): number {
        switch (type) {
            case fmts.integer: default: return Fx.toInt(value);
            case fmts.float: return Fx.toFloat(value);
        }
    }

    /**
     * Calculate with two Fx8 values.
     */
    //% blockId=fxb_calc block="$x=fxb_make $op $y=fxb_make"
    //% weight=8
    export function calc(x: Fx8, op: calcs, y: Fx8): Fx8 {
        switch (op) {
            default: return null;
            case calcs.add: return Fx.add(x, y);
            case calcs.sub: return Fx.sub(x, y);
            case calcs.mul: return Fx.mul(x, y);
            case calcs.div: return Fx.div(x, y);
        }
    }

    /**
     * Return the minimum or maximum of two Fx8 values.
     */
    //% blockId=fxb_lim block="$x=fxb_make $op $y=fxb_make"
    //% weight=7
    export function lim(x: Fx8, op: lims, y: Fx8): Fx8 {
        switch (op) {
            default: return null;
            case lims.min: return Fx.min(x, y);
            case lims.max: return Fx.max(x, y);
        }
    }

    /**
     * Calculate with an Fx8 value and an integer.
     */
    //% blockId=fxb_int block="$v=fxb_make $operation $a"
    //% weight=6
    export function int(v: Fx8, operation: ints, a: number): Fx8 {
        switch (operation) {
            default: return null;
            case ints.add: return Fx.iadd(a, v)
            case ints.mul: return Fx.imul(v, a)
            case ints.div: return Fx.idiv(v, a)
            case ints.lsh: return Fx.leftShift(v, a)
            case ints.rsh: return Fx.rightShift(v, a)
        }
    }

    /**
     * Apply one operation to an Fx8 value.
     */
    //% blockId=fxb_one block="$op $v=fxb_make"
    //% weight=5
    export function one(op: ones, v: Fx8): Fx8 {
        switch (op) {
            default: return null;
            case ones.abs: return Fx.abs(v)
            case ones.neg: return Fx.neg(v)
            case ones.floor: return Fx.floor(v)
            case ones.ceil: return Fx.ceil(v)
        }
    }

    /**
     * Compare two Fx8 values and return their difference.
     */
    //% blockId=fxb_cmp block="cmp $x=fxb_make $y=fxb_make"
    //% weight=4
    export function cmp(x: Fx8, y: Fx8): number {
        return Fx.compare(x, y)
    }

    /**
     * Use Fx8 Template value.
     */
    //% blockId=fxb_tmp block="$p"
    //% weight=3
    export function tmp(p: tmps): Fx8 {
        switch (p) {
            case tmps.zero: default: return Fx.zeroFx8;
            case tmps.oneHalf: return Fx.oneHalfFx8;
            case tmps.one: return Fx.oneFx8;
            case tmps.two: return Fx.twoFx8;
        }
    }
}
