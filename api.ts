// % block="Fx Block" icon="\uf1ec" color="#008888"
//% blockNamespace="Math"
namespace Fxb {

    export const enum tmpl {
        //% block="0.0"
        zero = 0x0,
        //% block="0.5"
        oneHalf = 0x1,
        //% block="1.0"
        one = 0x2,
        //% block="2.0"
        two = 0x3,
    }

    export const enum fmt {
        //% block="integer"
        int = 0x0,
        //% block="float"
        float = 0x1,
    }

    export const enum alu {
        //% block="+"
        add = 0x0,
        //% block="-"
        sub = 0x1,
        //% block="×"
        mul = 0x2,
        //% block="/"
        div = 0x3,
    }

    export const enum lim {
        //% block="min"
        min = 0x0,
        //% block="max"
        max = 0x1,
    }

    export const enum ialu {
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

    export const enum ab {
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
    //% blockId=fxb_make block="Fx $value"
    //% subcategory="Fx Math" weight=10
    export function make(v: number): Fx8 {
        switch (v) {
            default: return Fx8(v);
            case tmpl.zero: return Fx.zeroFx8;
            case tmpl.oneHalf: return Fx.oneHalfFx8;
            case tmpl.one: return Fx.oneFx8;
            case tmpl.two: return Fx.twoFx8;
        }
    }

    /**
     * Convert an Fx8 value to an integer or float.
     */
    //% blockId=fxb_send block="$fmt $value=fxb_make"
    //% subcategory="Fx Math" weight=9
    export function send(type: fmt, v: Fx8): number {
        switch (type) {
            case fmt.int: default: return Fx.toInt(v);
            case fmt.float: return Fx.toFloat(v);
        }
    }

    /**
     * Calculate with two Fx8 values.
     */
    //% blockId=fxb_calc block="$x=fxb_make $op $y=fxb_make"
    //% subcategory="Fx Math" weight=8
    export function calc(x: Fx8, op: alu, y: Fx8): Fx8 {
        switch (op) {
            default: return null;
            case alu.add: return Fx.add(x, y);
            case alu.sub: return Fx.sub(x, y);
            case alu.mul: return Fx.mul(x, y);
            case alu.div: return Fx.div(x, y);
        }
    }

    /**
     * Return the minimum or maximum of two Fx8 values.
     */
    //% blockId=fxb_clip block="$op $x=fxb_make and $y=fxb_make"
    //% subcategory="Fx Math" weight=7
    export function clip(op: lim, x: Fx8, y: Fx8): Fx8 {
        switch (op) {
            default: return null;
            case lim.min: return Fx.min(x, y);
            case lim.max: return Fx.max(x, y);
        }
    }

    /**
     * Calculate with an Fx8 value and an integer.
     */
    //% blockId=fxb_int block="$v=fxb_make $op $a"
    //% subcategory="Fx Math" weight=6
    export function icalc(v: Fx8, op: ialu, a: number): Fx8 {
        switch (op) {
            default: return null;
            case ialu.add: return Fx.iadd(a, v);
            case ialu.mul: return Fx.imul(v, a);
            case ialu.div: return Fx.idiv(v, a);
            case ialu.lsh: return Fx.leftShift(v, a);
            case ialu.rsh: return Fx.rightShift(v, a);
        }
    }

    /**
     * Apply one operation to an Fx8 value.
     */
    //% blockId=fxb_algeb block="$op $v=fxb_make"
    //% subcategory="Fx Math" weight=5
    export function algeb(op: ab, v: Fx8): Fx8 {
        switch (op) {
            default: return null;
            case ab.abs: return Fx.abs(v);
            case ab.neg: return Fx.neg(v);
            case ab.floor: return Fx.floor(v);
            case ab.ceil: return Fx.ceil(v);
        }
    }

    /**
     * Compare two Fx8 values and return their difference.
     */
    //% blockId=fxb_cmp block="compare $x=fxb_make and $y=fxb_make"
    //% subcategory="Fx Math" weight=4
    export function cmp(x: Fx8, y: Fx8): number {
        return Fx.compare(x, y);
    }

    /**
     * Use Fx8 Template value.
     */
    //% blockId=fxb_tmp block="$p"
    //% subcategory="Fx Math" weight=3
    export function item(p: tmpl): Fx8 {
        switch (p) {
            case tmpl.zero: default: return Fx.zeroFx8;
            case tmpl.oneHalf: return Fx.oneHalfFx8;
            case tmpl.one: return Fx.oneFx8;
            case tmpl.two: return Fx.twoFx8;
        }
    }
}
