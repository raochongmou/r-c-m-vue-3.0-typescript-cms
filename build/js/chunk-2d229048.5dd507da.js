(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d229048"],
  {
    dc3f: function (e, t, c) {
      "use strict";
      c.r(t);
      c("797a");
      var n = c("cf2e"),
        r = c("7a23"),
        a = Object(r["createElementVNode"])("div", null, "login", -1),
        o = Object(r["createTextVNode"])("Default"),
        u = Object(r["createTextVNode"])("Primary"),
        d = Object(r["createTextVNode"])("Success"),
        i = Object(r["createTextVNode"])("Info"),
        b = Object(r["createTextVNode"])("Warning"),
        j = Object(r["createTextVNode"])("Danger");
      function O(e, t, c, O, f, l) {
        var p = n["a"];
        return (
          Object(r["openBlock"])(),
          Object(r["createElementBlock"])(
            r["Fragment"],
            null,
            [
              a,
              Object(r["createVNode"])(p, null, {
                default: Object(r["withCtx"])(function () {
                  return [o];
                }),
                _: 1
              }),
              Object(r["createVNode"])(
                p,
                { type: "primary" },
                {
                  default: Object(r["withCtx"])(function () {
                    return [u];
                  }),
                  _: 1
                }
              ),
              Object(r["createVNode"])(
                p,
                { type: "success" },
                {
                  default: Object(r["withCtx"])(function () {
                    return [d];
                  }),
                  _: 1
                }
              ),
              Object(r["createVNode"])(
                p,
                { type: "info" },
                {
                  default: Object(r["withCtx"])(function () {
                    return [i];
                  }),
                  _: 1
                }
              ),
              Object(r["createVNode"])(
                p,
                { type: "warning" },
                {
                  default: Object(r["withCtx"])(function () {
                    return [b];
                  }),
                  _: 1
                }
              ),
              Object(r["createVNode"])(
                p,
                { type: "danger" },
                {
                  default: Object(r["withCtx"])(function () {
                    return [j];
                  }),
                  _: 1
                }
              )
            ],
            64
          )
        );
      }
      var f = Object(r["defineComponent"])({ name: "login" }),
        l = c("6b0d"),
        p = c.n(l);
      const w = p()(f, [["render", O]]);
      t["default"] = w;
    }
  }
]);
//# sourceMappingURL=chunk-2d229048.5dd507da.js.map
