(function (e) {
  function t(t) {
    for (
      var r, a, u = t[0], i = t[1], l = t[2], p = 0, f = [];
      p < u.length;
      p++
    )
      (a = u[p]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && f.push(o[a][0]),
        (o[a] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    d && d(t);
    while (f.length) f.shift()();
    return c.push.apply(c, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], r = !0, a = 1; a < n.length; a++) {
        var i = n[a];
        0 !== o[i] && (r = !1);
      }
      r && (c.splice(t--, 1), (e = u((u.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { app: 0 },
    c = [];
  function a(e) {
    return (
      u.p +
      "js/" +
      ({}[e] || e) +
      "." +
      { "chunk-2d0de903": "ceb2e765", "chunk-2d229048": "5dd507da" }[e] +
      ".js"
    );
  }
  function u(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, u), (n.l = !0), n.exports;
  }
  (u.e = function (e) {
    var t = [],
      n = o[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function (t, r) {
          n = o[e] = [t, r];
        });
        t.push((n[2] = r));
        var c,
          i = document.createElement("script");
        (i.charset = "utf-8"),
          (i.timeout = 120),
          u.nc && i.setAttribute("nonce", u.nc),
          (i.src = a(e));
        var l = new Error();
        c = function (t) {
          (i.onerror = i.onload = null), clearTimeout(p);
          var n = o[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                c = t && t.target && t.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + c + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = r),
                (l.request = c),
                n[1](l);
            }
            o[e] = void 0;
          }
        };
        var p = setTimeout(function () {
          c({ type: "timeout", target: i });
        }, 12e4);
        (i.onerror = i.onload = c), document.head.appendChild(i);
      }
    return Promise.all(t);
  }),
    (u.m = e),
    (u.c = r),
    (u.d = function (e, t, n) {
      u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (u.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (u.t = function (e, t) {
      if ((1 & t && (e = u(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (u.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          u.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (u.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return u.d(t, "a", t), t;
    }),
    (u.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (u.p = ""),
    (u.oe = function (e) {
      throw (console.error(e), e);
    });
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var p = 0; p < i.length; p++) t(i[p]);
  var d = l;
  c.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("cd49");
  },
  "7ce4": function (e, t, n) {
    "use strict";
    n("e94e");
  },
  cd49: function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("7a23"),
      o = (n("797a"), n("cf2e")),
      c = { id: "app" },
      a = Object(r["createTextVNode"])("login"),
      u = Object(r["createTextVNode"])("main"),
      i = Object(r["createTextVNode"])("哈哈哈");
    function l(e, t, n, l, p, d) {
      var f = Object(r["resolveComponent"])("router-link"),
        s = Object(r["resolveComponent"])("router-view"),
        b = o["a"];
      return (
        Object(r["openBlock"])(),
        Object(r["createElementBlock"])("div", c, [
          Object(r["createVNode"])(
            f,
            { to: "/login" },
            {
              default: Object(r["withCtx"])(function () {
                return [a];
              }),
              _: 1
            }
          ),
          Object(r["createVNode"])(
            f,
            { to: "/main" },
            {
              default: Object(r["withCtx"])(function () {
                return [u];
              }),
              _: 1
            }
          ),
          Object(r["createVNode"])(s),
          Object(r["createVNode"])(b, null, {
            default: Object(r["withCtx"])(function () {
              return [i];
            }),
            _: 1
          })
        ])
      );
    }
    var p = Object(r["defineComponent"])({ name: "App" }),
      d = (n("7ce4"), n("6b0d")),
      f = n.n(d);
    const s = f()(p, [["render", l]]);
    var b = s,
      h = (n("d3b7"), n("3ca3"), n("ddb0"), n("6c02")),
      m = [
        { path: "/", redirect: "/login" },
        {
          path: "/login",
          component: function () {
            return n.e("chunk-2d229048").then(n.bind(null, "dc3f"));
          }
        },
        {
          path: "/main",
          component: function () {
            return n.e("chunk-2d0de903").then(n.bind(null, "85d4"));
          }
        }
      ],
      v = Object(h["a"])({ routes: m, history: Object(h["b"])() }),
      j = v,
      O = n("bc3a"),
      g = n.n(O);
    g.a.get("http://123.207.32.32:8000/home/multidata").then(function (e) {
      console.log(e.data);
    }),
      g.a
        .post("http://httpbin.org/post", {
          data: { name: "r-c-m", age: 19 },
          "Content-Type": "application/json"
        })
        .then(function (e) {
          console.log(e);
        });
    var y = Object(r["createApp"])(b);
    console.log("马化腾"), y.use(j), y.mount("#app");
  },
  e94e: function (e, t, n) {}
});
//# sourceMappingURL=app.c229ca32.js.map
