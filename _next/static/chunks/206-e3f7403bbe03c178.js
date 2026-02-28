(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [206],
  {
    296: (t, e, i) => {
      "use strict";
      i.d(e, { L: () => s });
      let s = (0, i(2115).createContext)({});
    },
    737: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let s = i(8140)._(i(2115)).default.createContext({});
    },
    821: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          VALID_LOADERS: function () {
            return i;
          },
          imageConfigDefault: function () {
            return s;
          },
        });
      let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        s = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          qualities: void 0,
          unoptimized: !1,
        };
    },
    861: (t, e) => {
      "use strict";
      function i(t) {
        let {
          ampFirst: e = !1,
          hybrid: i = !1,
          hasQuery: s = !1,
        } = void 0 === t ? {} : t;
        return e || (i && s);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    905: (t, e, i) => {
      "use strict";
      let s;
      i.d(e, { P: () => rg });
      var n = i(2115);
      let r = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        a = new Set(r),
        o = (t) => (180 * t) / Math.PI,
        l = (t) => u(o(Math.atan2(t[1], t[0]))),
        h = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: l,
          rotateZ: l,
          skewX: (t) => o(Math.atan(t[1])),
          skewY: (t) => o(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        u = (t) => ((t %= 360) < 0 && (t += 360), t),
        d = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        c = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        p = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: d,
          scaleY: c,
          scale: (t) => (d(t) + c(t)) / 2,
          rotateX: (t) => u(o(Math.atan2(t[6], t[5]))),
          rotateY: (t) => u(o(Math.atan2(-t[2], t[0]))),
          rotateZ: l,
          rotate: l,
          skewX: (t) => o(Math.atan(t[4])),
          skewY: (t) => o(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function g(t) {
        return +!!t.includes("scale");
      }
      function m(t, e) {
        let i, s;
        if (!t || "none" === t) return g(e);
        let n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (n) (i = p), (s = n);
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          (i = h), (s = e);
        }
        if (!s) return g(e);
        let r = i[e],
          a = s[1].split(",").map(f);
        return "function" == typeof r ? r(a) : a[r];
      }
      function f(t) {
        return parseFloat(t.trim());
      }
      let y = (t) => (e) => "string" == typeof e && e.startsWith(t),
        v = y("--"),
        x = y("var(--"),
        w = (t) => !!x(t) && P.test(t.split("/*")[0].trim()),
        P =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
      function b({ top: t, left: e, right: i, bottom: s }) {
        return { x: { min: e, max: i }, y: { min: t, max: s } };
      }
      let S = (t, e, i) => t + (e - t) * i;
      function T(t) {
        return void 0 === t || 1 === t;
      }
      function C({ scale: t, scaleX: e, scaleY: i }) {
        return !T(t) || !T(e) || !T(i);
      }
      function M(t) {
        return (
          C(t) ||
          A(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function A(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function E(t, e, i, s, n) {
        return void 0 !== n && (t = s + n * (t - s)), s + i * (t - s) + e;
      }
      function D(t, e = 0, i = 1, s, n) {
        (t.min = E(t.min, e, i, s, n)), (t.max = E(t.max, e, i, s, n));
      }
      function R(t, { x: e, y: i }) {
        D(t.x, e.translate, e.scale, e.originPoint),
          D(t.y, i.translate, i.scale, i.originPoint);
      }
      function k(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function I(t, e, i, s, n = 0.5) {
        let r = S(t.min, t.max, n);
        D(t, e, i, r, s);
      }
      function L(t, e) {
        I(t.x, e.x, e.scaleX, e.scale, e.originX),
          I(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function V(t, e) {
        return b(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              s = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: s.y, right: s.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let j = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...r,
        ]),
        O = (t, e, i) => (i > e ? e : i < t ? t : i),
        B = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        F = { ...B, transform: (t) => O(0, 1, t) },
        _ = { ...B, default: 1 },
        W = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        U = W("deg"),
        $ = W("%"),
        H = W("px"),
        z = W("vh"),
        N = W("vw"),
        G = {
          ...$,
          parse: (t) => $.parse(t) / 100,
          transform: (t) => $.transform(100 * t),
        },
        Y = (t) => (e) => e.test(t),
        X = [B, H, $, U, N, z, { test: (t) => "auto" === t, parse: (t) => t }],
        q = (t) => X.find(Y(t)),
        K = () => {},
        Z = () => {},
        Q = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        J = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        tt = (t) => t === B || t === H,
        te = new Set(["x", "y", "z"]),
        ti = r.filter((t) => !te.has(t)),
        ts = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: (t, { transform: e }) => m(e, "x"),
          y: (t, { transform: e }) => m(e, "y"),
        };
      (ts.translateX = ts.x), (ts.translateY = ts.y);
      let tn = (t) => t,
        tr = {},
        ta = [
          "setup",
          "read",
          "resolveKeyframes",
          "preUpdate",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        to = { value: null, addProjectionMetrics: null };
      function tl(t, e) {
        let i = !1,
          s = !0,
          n = { delta: 0, timestamp: 0, isProcessing: !1 },
          r = () => (i = !0),
          a = ta.reduce(
            (t, i) => (
              (t[i] = (function (t, e) {
                let i = new Set(),
                  s = new Set(),
                  n = !1,
                  r = !1,
                  a = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 },
                  l = 0;
                function h(e) {
                  a.has(e) && (u.schedule(e), t()), l++, e(o);
                }
                let u = {
                  schedule: (t, e = !1, r = !1) => {
                    let o = r && n ? i : s;
                    return e && a.add(t), o.has(t) || o.add(t), t;
                  },
                  cancel: (t) => {
                    s.delete(t), a.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), n)) {
                      r = !0;
                      return;
                    }
                    (n = !0),
                      ([i, s] = [s, i]),
                      i.forEach(h),
                      e && to.value && to.value.frameloop[e].push(l),
                      (l = 0),
                      i.clear(),
                      (n = !1),
                      r && ((r = !1), u.process(t));
                  },
                };
                return u;
              })(r, e ? i : void 0)),
              t
            ),
            {}
          ),
          {
            setup: o,
            read: l,
            resolveKeyframes: h,
            preUpdate: u,
            update: d,
            preRender: c,
            render: p,
            postRender: g,
          } = a,
          m = () => {
            let r = tr.useManualTiming ? n.timestamp : performance.now();
            (i = !1),
              tr.useManualTiming ||
                (n.delta = s
                  ? 1e3 / 60
                  : Math.max(Math.min(r - n.timestamp, 40), 1)),
              (n.timestamp = r),
              (n.isProcessing = !0),
              o.process(n),
              l.process(n),
              h.process(n),
              u.process(n),
              d.process(n),
              c.process(n),
              p.process(n),
              g.process(n),
              (n.isProcessing = !1),
              i && e && ((s = !1), t(m));
          };
        return {
          schedule: ta.reduce((e, r) => {
            let o = a[r];
            return (
              (e[r] = (e, r = !1, a = !1) => (
                !i && ((i = !0), (s = !0), n.isProcessing || t(m)),
                o.schedule(e, r, a)
              )),
              e
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < ta.length; e++) a[ta[e]].cancel(t);
          },
          state: n,
          steps: a,
        };
      }
      let {
          schedule: th,
          cancel: tu,
          state: td,
          steps: tc,
        } = tl(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : tn,
          !0
        ),
        tp = new Set(),
        tg = !1,
        tm = !1,
        tf = !1;
      function ty() {
        if (tm) {
          let t = Array.from(tp).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                ti.forEach((i) => {
                  let s = t.getValue(i);
                  void 0 !== s &&
                    (e.push([i, s.get()]), s.set(+!!i.startsWith("scale")));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  t.getValue(e)?.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (tm = !1), (tg = !1), tp.forEach((t) => t.complete(tf)), tp.clear();
      }
      function tv() {
        tp.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (tm = !0);
        });
      }
      class tx {
        constructor(t, e, i, s, n, r = !1) {
          (this.state = "pending"),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = s),
            (this.element = n),
            (this.isAsync = r);
        }
        scheduleResolve() {
          (this.state = "scheduled"),
            this.isAsync
              ? (tp.add(this),
                tg || ((tg = !0), th.read(tv), th.resolveKeyframes(ty)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: s,
          } = this;
          if (null === t[0]) {
            let n = s?.get(),
              r = t[t.length - 1];
            if (void 0 !== n) t[0] = n;
            else if (i && e) {
              let s = i.readValue(e, r);
              null != s && (t[0] = s);
            }
            void 0 === t[0] && (t[0] = r), s && void 0 === n && s.set(t[0]);
          }
          for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          (this.state = "complete"),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
            tp.delete(this);
        }
        cancel() {
          "scheduled" === this.state &&
            (tp.delete(this), (this.state = "pending"));
        }
        resume() {
          "pending" === this.state && this.scheduleResolve();
        }
      }
      let tw = (t) => /^0[^.\s]+$/u.test(t),
        tP = (t) => Math.round(1e5 * t) / 1e5,
        tb = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tS =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tT = (t, e) => (i) =>
          !!(
            ("string" == typeof i && tS.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        tC = (t, e, i) => (s) => {
          if ("string" != typeof s) return s;
          let [n, r, a, o] = s.match(tb);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(r),
            [i]: parseFloat(a),
            alpha: void 0 !== o ? parseFloat(o) : 1,
          };
        },
        tM = { ...B, transform: (t) => Math.round(O(0, 255, t)) },
        tA = {
          test: tT("rgb", "red"),
          parse: tC("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
            "rgba(" +
            tM.transform(t) +
            ", " +
            tM.transform(e) +
            ", " +
            tM.transform(i) +
            ", " +
            tP(F.transform(s)) +
            ")",
        },
        tE = {
          test: tT("#"),
          parse: function (t) {
            let e = "",
              i = "",
              s = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (s = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (s = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (s += s),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(s, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: tA.transform,
        },
        tD = {
          test: tT("hsl", "hue"),
          parse: tC("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: s = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            $.transform(tP(e)) +
            ", " +
            $.transform(tP(i)) +
            ", " +
            tP(F.transform(s)) +
            ")",
        },
        tR = {
          test: (t) => tA.test(t) || tE.test(t) || tD.test(t),
          parse: (t) =>
            tA.test(t) ? tA.parse(t) : tD.test(t) ? tD.parse(t) : tE.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
              ? tA.transform(t)
              : tD.transform(t),
          getAnimatableNone: (t) => {
            let e = tR.parse(t);
            return (e.alpha = 0), tR.transform(e);
          },
        },
        tk =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tI = "number",
        tL = "color",
        tV =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function tj(t) {
        let e = t.toString(),
          i = [],
          s = { color: [], number: [], var: [] },
          n = [],
          r = 0,
          a = e
            .replace(
              tV,
              (t) => (
                tR.test(t)
                  ? (s.color.push(r), n.push(tL), i.push(tR.parse(t)))
                  : t.startsWith("var(")
                  ? (s.var.push(r), n.push("var"), i.push(t))
                  : (s.number.push(r), n.push(tI), i.push(parseFloat(t))),
                ++r,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: a, indexes: s, types: n };
      }
      function tO(t) {
        return tj(t).values;
      }
      function tB(t) {
        let { split: e, types: i } = tj(t),
          s = e.length;
        return (t) => {
          let n = "";
          for (let r = 0; r < s; r++)
            if (((n += e[r]), void 0 !== t[r])) {
              let e = i[r];
              e === tI
                ? (n += tP(t[r]))
                : e === tL
                ? (n += tR.transform(t[r]))
                : (n += t[r]);
            }
          return n;
        };
      }
      let tF = (t) =>
          "number" == typeof t ? 0 : tR.test(t) ? tR.getAnimatableNone(t) : t,
        t_ = {
          test: function (t) {
            return (
              isNaN(t) &&
              "string" == typeof t &&
              (t.match(tb)?.length || 0) + (t.match(tk)?.length || 0) > 0
            );
          },
          parse: tO,
          createTransformer: tB,
          getAnimatableNone: function (t) {
            let e = tO(t);
            return tB(t)(e.map(tF));
          },
        },
        tW = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function tU(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [s] = i.match(tb) || [];
        if (!s) return t;
        let n = i.replace(s, ""),
          r = +!!tW.has(e);
        return s !== i && (r *= 100), e + "(" + r + n + ")";
      }
      let t$ = /\b([a-z-]*)\(.*?\)/gu,
        tH = {
          ...t_,
          getAnimatableNone: (t) => {
            let e = t.match(t$);
            return e ? e.map(tU).join(" ") : t;
          },
        },
        tz = { ...B, transform: Math.round },
        tN = {
          borderWidth: H,
          borderTopWidth: H,
          borderRightWidth: H,
          borderBottomWidth: H,
          borderLeftWidth: H,
          borderRadius: H,
          radius: H,
          borderTopLeftRadius: H,
          borderTopRightRadius: H,
          borderBottomRightRadius: H,
          borderBottomLeftRadius: H,
          width: H,
          maxWidth: H,
          height: H,
          maxHeight: H,
          top: H,
          right: H,
          bottom: H,
          left: H,
          padding: H,
          paddingTop: H,
          paddingRight: H,
          paddingBottom: H,
          paddingLeft: H,
          margin: H,
          marginTop: H,
          marginRight: H,
          marginBottom: H,
          marginLeft: H,
          backgroundPositionX: H,
          backgroundPositionY: H,
          rotate: U,
          rotateX: U,
          rotateY: U,
          rotateZ: U,
          scale: _,
          scaleX: _,
          scaleY: _,
          scaleZ: _,
          skew: U,
          skewX: U,
          skewY: U,
          distance: H,
          translateX: H,
          translateY: H,
          translateZ: H,
          x: H,
          y: H,
          z: H,
          perspective: H,
          transformPerspective: H,
          opacity: F,
          originX: G,
          originY: G,
          originZ: H,
          zIndex: tz,
          fillOpacity: F,
          strokeOpacity: F,
          numOctaves: tz,
        },
        tG = {
          ...tN,
          color: tR,
          backgroundColor: tR,
          outlineColor: tR,
          fill: tR,
          stroke: tR,
          borderColor: tR,
          borderTopColor: tR,
          borderRightColor: tR,
          borderBottomColor: tR,
          borderLeftColor: tR,
          filter: tH,
          WebkitFilter: tH,
        },
        tY = (t) => tG[t];
      function tX(t, e) {
        let i = tY(t);
        return (
          i !== tH && (i = t_),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let tq = new Set(["auto", "none", "0"]);
      class tK extends tx {
        constructor(t, e, i, s, n) {
          super(t, e, i, s, n, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let s = t[i];
            if ("string" == typeof s && w((s = s.trim()))) {
              let n = (function t(e, i, s = 1) {
                Z(
                  s <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                  "max-css-var-depth"
                );
                let [n, r] = (function (t) {
                  let e = J.exec(t);
                  if (!e) return [,];
                  let [, i, s, n] = e;
                  return [`--${i ?? s}`, n];
                })(e);
                if (!n) return;
                let a = window.getComputedStyle(i).getPropertyValue(n);
                if (a) {
                  let t = a.trim();
                  return Q(t) ? parseFloat(t) : t;
                }
                return w(r) ? t(r, i, s + 1) : r;
              })(s, e.current);
              void 0 !== n && (t[i] = n),
                i === t.length - 1 && (this.finalKeyframe = s);
            }
          }
          if ((this.resolveNoneKeyframes(), !j.has(i) || 2 !== t.length))
            return;
          let [s, n] = t,
            r = q(s),
            a = q(n);
          if (r !== a)
            if (tt(r) && tt(a))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else ts[i] && (this.needsMeasurement = !0);
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var s;
            (null === t[e] ||
              ("number" == typeof (s = t[e])
                ? 0 === s
                : null === s || "none" === s || "0" === s || tw(s))) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let s,
                n = 0;
              for (; n < t.length && !s; ) {
                let e = t[n];
                "string" == typeof e &&
                  !tq.has(e) &&
                  tj(e).values.length &&
                  (s = t[n]),
                  n++;
              }
              if (s && i) for (let n of e) t[n] = tX(i, s);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = ts[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let s = e[e.length - 1];
          void 0 !== s && t.getValue(i, s).jump(s, !1);
        }
        measureEndState() {
          let { element: t, name: e, unresolvedKeyframes: i } = this;
          if (!t || !t.current) return;
          let s = t.getValue(e);
          s && s.jump(this.measuredOrigin, !1);
          let n = i.length - 1,
            r = i[n];
          (i[n] = ts[e](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== r &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = r),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([e, i]) => {
                t.getValue(e).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let tZ = (t) => !!(t && t.getVelocity);
      function tQ() {
        s = void 0;
      }
      let tJ = {
        now: () => (
          void 0 === s &&
            tJ.set(
              td.isProcessing || tr.useManualTiming
                ? td.timestamp
                : performance.now()
            ),
          s
        ),
        set: (t) => {
          (s = t), queueMicrotask(tQ);
        },
      };
      function t0(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function t1(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class t2 {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return t0(this.subscriptions, t), () => t1(this.subscriptions, t);
        }
        notify(t, e, i) {
          let s = this.subscriptions.length;
          if (s)
            if (1 === s) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < s; n++) {
                let s = this.subscriptions[n];
                s && s(t, e, i);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let t5 = { current: void 0 };
      class t3 {
        constructor(t, e = {}) {
          (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t) => {
              let e = tJ.now();
              if (
                (this.updatedAt !== e && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  (this.events.change?.notify(this.current), this.dependents))
              )
                for (let t of this.dependents) t.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = tJ.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new t2());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  th.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t) {
          this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        dirty() {
          this.events.change?.notify(this.current);
        }
        addDependent(t) {
          this.dependents || (this.dependents = new Set()),
            this.dependents.add(t);
        }
        removeDependent(t) {
          this.dependents && this.dependents.delete(t);
        }
        get() {
          return t5.current && t5.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = tJ.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function t4(t, e) {
        return new t3(t, e);
      }
      let t6 = [...X, tR, t_],
        { schedule: t8 } = tl(queueMicrotask, !1),
        t9 = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        t7 = {};
      for (let t in t9) t7[t] = { isEnabled: (e) => t9[t].some((t) => !!e[t]) };
      let et = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        ee = () => ({ x: et(), y: et() }),
        ei = () => ({ min: 0, max: 0 }),
        es = () => ({ x: ei(), y: ei() });
      var en = i(8662),
        er = i(4741);
      let ea = new WeakMap();
      function eo(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      function el(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let eh = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        eu = ["initial", ...eh];
      function ed(t) {
        return eo(t.animate) || eu.some((e) => el(t[e]));
      }
      function ec(t) {
        return !!(ed(t) || t.variants);
      }
      function ep(t) {
        let e = [{}, {}];
        return (
          t?.values.forEach((t, i) => {
            (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
          }),
          e
        );
      }
      function eg(t, e, i, s) {
        if ("function" == typeof e) {
          let [n, r] = ep(s);
          e = e(void 0 !== i ? i : t.custom, n, r);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [n, r] = ep(s);
          e = e(void 0 !== i ? i : t.custom, n, r);
        }
        return e;
      }
      let em = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class ef {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: s,
            blockInitialAnimation: n,
            visualState: r,
          },
          a = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tx),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = tJ.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), th.render(this.render, !1, !0));
            });
          let { latestValues: o, renderState: l } = r;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = s),
            (this.options = a),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = ed(e)),
            (this.isVariantNode = ec(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: h, ...u } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in u) {
            let e = u[t];
            void 0 !== o[t] && tZ(e) && e.set(o[t]);
          }
        }
        mount(t) {
          (this.current = t),
            ea.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            er.r.current || (0, en.U)(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || er.O.current)),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          tu(this.notifyUpdate),
          tu(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent?.removeChild(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        addChild(t) {
          this.children.add(t),
            this.enteringChildren ?? (this.enteringChildren = new Set()),
            this.enteringChildren.add(t);
        }
        removeChild(t) {
          this.children.delete(t),
            this.enteringChildren && this.enteringChildren.delete(t);
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let s = a.has(t);
          s && this.onBindTransform && this.onBindTransform();
          let n = e.on("change", (e) => {
            (this.latestValues[t] = e),
              this.props.onUpdate && th.preRender(this.notifyUpdate),
              s && this.projection && (this.projection.isTransformDirty = !0),
              this.scheduleRender();
          });
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              n(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in t7) {
            let e = t7[t];
            if (!e) continue;
            let { isEnabled: i, Feature: s } = e;
            if (
              (!this.features[t] &&
                s &&
                i(this.props) &&
                (this.features[t] = new s(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : es();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < em.length; e++) {
            let i = em[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let s = t["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let s in e) {
              let n = e[s],
                r = i[s];
              if (tZ(n)) t.addValue(s, n);
              else if (tZ(r)) t.addValue(s, t4(n, { owner: t }));
              else if (r !== n)
                if (t.hasValue(s)) {
                  let e = t.getValue(s);
                  !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                } else {
                  let e = t.getStaticValue(s);
                  t.addValue(s, t4(void 0 !== e ? e : n, { owner: t }));
                }
            }
            for (let s in i) void 0 === e[s] && t.removeValue(s);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = t4(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          let i =
            void 0 === this.latestValues[t] && this.current
              ? this.getBaseTargetFromProps(this.props, t) ??
                this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          if (null != i) {
            if ("string" == typeof i && (Q(i) || tw(i))) i = parseFloat(i);
            else {
              let s;
              (s = i), !t6.find(Y(s)) && t_.test(e) && (i = tX(t, e));
            }
            this.setBaseTarget(t, tZ(i) ? i.get() : i);
          }
          return tZ(i) ? i.get() : i;
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          let e,
            { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let s = eg(this.props, i, this.presenceContext?.custom);
            s && (e = s[t]);
          }
          if (i && void 0 !== e) return e;
          let s = this.getBaseTargetFromProps(this.props, t);
          return void 0 === s || tZ(s)
            ? void 0 !== this.initialValues[t] && void 0 === e
              ? void 0
              : this.baseTarget[t]
            : s;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new t2()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
        scheduleRenderMicrotask() {
          t8.render(this.render);
        }
      }
      class ey extends ef {
        constructor() {
          super(...arguments), (this.KeyframeResolver = tK);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          tZ(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      let ev = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        ex = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        ew = r.length;
      function eP(t, e, i) {
        let { style: s, vars: n, transformOrigin: o } = t,
          l = !1,
          h = !1;
        for (let t in e) {
          let i = e[t];
          if (a.has(t)) {
            l = !0;
            continue;
          }
          if (v(t)) {
            n[t] = i;
            continue;
          }
          {
            let e = ev(i, tN[t]);
            t.startsWith("origin") ? ((h = !0), (o[t] = e)) : (s[t] = e);
          }
        }
        if (
          (!e.transform &&
            (l || i
              ? (s.transform = (function (t, e, i) {
                  let s = "",
                    n = !0;
                  for (let a = 0; a < ew; a++) {
                    let o = r[a],
                      l = t[o];
                    if (void 0 === l) continue;
                    let h = !0;
                    if (
                      !(h =
                        "number" == typeof l
                          ? l === +!!o.startsWith("scale")
                          : 0 === parseFloat(l)) ||
                      i
                    ) {
                      let t = ev(l, tN[o]);
                      if (!h) {
                        n = !1;
                        let e = ex[o] || o;
                        s += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (s = s.trim()),
                    i ? (s = i(e, n ? "" : s)) : n && (s = "none"),
                    s
                  );
                })(e, t.transform, i))
              : s.transform && (s.transform = "none")),
          h)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = o;
          s.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function eb(t, { style: e, vars: i }, s, n) {
        let r,
          a = t.style;
        for (r in e) a[r] = e[r];
        for (r in (n?.applyProjectionStyles(a, s), i)) a.setProperty(r, i[r]);
      }
      let eS = {};
      function eT(t, { layout: e, layoutId: i }) {
        return (
          a.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!eS[t] || "opacity" === t))
        );
      }
      function eC(t, e, i) {
        let { style: s } = t,
          n = {};
        for (let r in s)
          (tZ(s[r]) ||
            (e.style && tZ(e.style[r])) ||
            eT(r, t) ||
            i?.getValue(r)?.liveStyle !== void 0) &&
            (n[r] = s[r]);
        return n;
      }
      class eM extends ey {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = eb);
        }
        readValueFromInstance(t, e) {
          if (a.has(e))
            return this.projection?.isProjecting
              ? g(e)
              : ((t, e) => {
                  let { transform: i = "none" } = getComputedStyle(t);
                  return m(i, e);
                })(t, e);
          {
            let i = window.getComputedStyle(t),
              s = (v(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof s ? s.trim() : s;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return V(t, e);
        }
        build(t, e, i) {
          eP(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return eC(t, e, i);
        }
      }
      let eA = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        eE = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        eD = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function eR(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: s,
          pathLength: n,
          pathSpacing: r = 1,
          pathOffset: a = 0,
          ...o
        },
        l,
        h,
        u
      ) {
        if ((eP(t, o, h), l)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: d, style: c } = t;
        d.transform && ((c.transform = d.transform), delete d.transform),
          (c.transform || d.transformOrigin) &&
            ((c.transformOrigin = d.transformOrigin ?? "50% 50%"),
            delete d.transformOrigin),
          c.transform &&
            ((c.transformBox = u?.transformBox ?? "fill-box"),
            delete d.transformBox),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== s && (d.scale = s),
          void 0 !== n &&
            (function (t, e, i = 1, s = 0, n = !0) {
              t.pathLength = 1;
              let r = n ? eE : eD;
              t[r.offset] = H.transform(-s);
              let a = H.transform(e),
                o = H.transform(i);
              t[r.array] = `${a} ${o}`;
            })(d, n, r, a, !1);
      }
      let ek = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
          "gradientTransform",
          "pathLength",
          "startOffset",
          "textLength",
          "lengthAdjust",
        ]),
        eI = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function eL(t, e, i) {
        let s = eC(t, e, i);
        for (let i in t)
          (tZ(t[i]) || tZ(e[i])) &&
            (s[
              -1 !== r.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return s;
      }
      class eV extends ey {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = es);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (a.has(e)) {
            let t = tY(e);
            return (t && t.default) || 0;
          }
          return (e = ek.has(e) ? e : eA(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return eL(t, e, i);
        }
        build(t, e, i) {
          eR(t, e, this.isSVGTag, i.transformTemplate, i.style);
        }
        renderInstance(t, e, i, s) {
          for (let i in (eb(t, e, void 0, s), e.attrs))
            t.setAttribute(ek.has(i) ? i : eA(i), e.attrs[i]);
        }
        mount(t) {
          (this.isSVGTag = eI(t.tagName)), super.mount(t);
        }
      }
      let ej = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function eO(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (ej.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var eB = i(5155),
        eF = i(296);
      let e_ = (0, n.createContext)({ strict: !1 });
      var eW = i(3127);
      let eU = (0, n.createContext)({});
      function e$(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let eH = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function ez(t, e, i) {
        for (let s in e) tZ(e[s]) || eT(s, i) || (t[s] = e[s]);
      }
      let eN = () => ({ ...eH(), attrs: {} }),
        eG = new Set([
          "animate",
          "exit",
          "variants",
          "initial",
          "style",
          "values",
          "variants",
          "transition",
          "transformTemplate",
          "custom",
          "inherit",
          "onBeforeLayoutMeasure",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "_dragX",
          "_dragY",
          "onHoverStart",
          "onHoverEnd",
          "onViewportEnter",
          "onViewportLeave",
          "globalTapTarget",
          "ignoreStrict",
          "viewport",
        ]);
      function eY(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          eG.has(t)
        );
      }
      let eX = (t) => !eY(t);
      try {
        !(function (t) {
          "function" == typeof t &&
            (eX = (e) => (e.startsWith("on") ? !eY(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch {}
      var eq = i(9686),
        eK = i(4416);
      function eZ(t) {
        return tZ(t) ? t.get() : t;
      }
      let eQ = (t) => (e, i) => {
          let s = (0, n.useContext)(eU),
            r = (0, n.useContext)(eq.t),
            a = () =>
              (function (t, e, i, s) {
                let { scrapeMotionValuesFromProps: n, createRenderState: r } =
                  t;
                return {
                  latestValues: (function (t, e, i, s) {
                    let n = {},
                      r = s(t, {});
                    for (let t in r) n[t] = eZ(r[t]);
                    let { initial: a, animate: o } = t,
                      l = ed(t),
                      h = ec(t);
                    e &&
                      h &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === a && (a = e.initial),
                      void 0 === o && (o = e.animate));
                    let u = !!i && !1 === i.initial,
                      d = (u = u || !1 === a) ? o : a;
                    if (d && "boolean" != typeof d && !eo(d)) {
                      let e = Array.isArray(d) ? d : [d];
                      for (let i = 0; i < e.length; i++) {
                        let s = eg(t, e[i]);
                        if (s) {
                          let { transitionEnd: t, transition: e, ...i } = s;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = u ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (n[t] = e);
                          }
                          for (let e in t) n[e] = t[e];
                        }
                      }
                    }
                    return n;
                  })(e, i, s, n),
                  renderState: r(),
                };
              })(t, e, s, r);
          return i ? a() : (0, eK.M)(a);
        },
        eJ = eQ({ scrapeMotionValuesFromProps: eC, createRenderState: eH }),
        e0 = eQ({ scrapeMotionValuesFromProps: eL, createRenderState: eN });
      var e1 = i(3577);
      let e2 = Symbol.for("motionComponentSymbol");
      function e5(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      let e3 = "data-" + eA("framerAppearId"),
        e4 = (0, n.createContext)({});
      var e6 = i(6553);
      function e8(t) {
        var e, i;
        let { forwardMotionProps: s = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = arguments.length > 3 ? arguments[3] : void 0;
        r &&
          (function (t) {
            for (let e in t) t7[e] = { ...t7[e], ...t[e] };
          })(r);
        let o = eO(t) ? e0 : eJ;
        function l(e, i) {
          var r;
          let l,
            h = {
              ...(0, n.useContext)(eW.Q),
              ...e,
              layoutId: (function (t) {
                let { layoutId: e } = t,
                  i = (0, n.useContext)(eF.L).id;
                return i && void 0 !== e ? i + "-" + e : e;
              })(e),
            },
            { isStatic: u } = h,
            d = (function (t) {
              let { initial: e, animate: i } = (function (t, e) {
                if (ed(t)) {
                  let { initial: e, animate: i } = t;
                  return {
                    initial: !1 === e || el(e) ? e : void 0,
                    animate: el(i) ? i : void 0,
                  };
                }
                return !1 !== t.inherit ? e : {};
              })(t, (0, n.useContext)(eU));
              return (0, n.useMemo)(
                () => ({ initial: e, animate: i }),
                [e$(e), e$(i)]
              );
            })(e),
            c = o(e, u);
          if (!u && e1.B) {
            (0, n.useContext)(e_).strict;
            let e = (function (t) {
              let { drag: e, layout: i } = t7;
              if (!e && !i) return {};
              let s = { ...e, ...i };
              return {
                MeasureLayout:
                  (null == e ? void 0 : e.isEnabled(t)) ||
                  (null == i ? void 0 : i.isEnabled(t))
                    ? s.MeasureLayout
                    : void 0,
                ProjectionNode: s.ProjectionNode,
              };
            })(h);
            (l = e.MeasureLayout),
              (d.visualElement = (function (t, e, i, s, r) {
                var a, o, l, h;
                let { visualElement: u } = (0, n.useContext)(eU),
                  d = (0, n.useContext)(e_),
                  c = (0, n.useContext)(eq.t),
                  p = (0, n.useContext)(eW.Q).reducedMotion,
                  g = (0, n.useRef)(null);
                (s = s || d.renderer),
                  !g.current &&
                    s &&
                    (g.current = s(t, {
                      visualState: e,
                      parent: u,
                      props: i,
                      presenceContext: c,
                      blockInitialAnimation: !!c && !1 === c.initial,
                      reducedMotionConfig: p,
                    }));
                let m = g.current,
                  f = (0, n.useContext)(e4);
                m &&
                  !m.projection &&
                  r &&
                  ("html" === m.type || "svg" === m.type) &&
                  (function (t, e, i, s) {
                    let {
                      layoutId: n,
                      layout: r,
                      drag: a,
                      dragConstraints: o,
                      layoutScroll: l,
                      layoutRoot: h,
                      layoutCrossfade: u,
                    } = e;
                    (t.projection = new i(
                      t.latestValues,
                      e["data-framer-portal-id"]
                        ? void 0
                        : (function t(e) {
                            if (e)
                              return !1 !== e.options.allowProjection
                                ? e.projection
                                : t(e.parent);
                          })(t.parent)
                    )),
                      t.projection.setOptions({
                        layoutId: n,
                        layout: r,
                        alwaysMeasureLayout: !!a || (o && e5(o)),
                        visualElement: t,
                        animationType: "string" == typeof r ? r : "both",
                        initialPromotionConfig: s,
                        crossfade: u,
                        layoutScroll: l,
                        layoutRoot: h,
                      });
                  })(g.current, i, r, f);
                let y = (0, n.useRef)(!1);
                (0, n.useInsertionEffect)(() => {
                  m && y.current && m.update(i, c);
                });
                let v = i[e3],
                  x = (0, n.useRef)(
                    !!v &&
                      !(null == (a = (o = window).MotionHandoffIsComplete)
                        ? void 0
                        : a.call(o, v)) &&
                      (null == (l = (h = window).MotionHasOptimisedAnimation)
                        ? void 0
                        : l.call(h, v))
                  );
                return (
                  (0, e6.E)(() => {
                    m &&
                      ((y.current = !0),
                      (window.MotionIsMounted = !0),
                      m.updateFeatures(),
                      m.scheduleRenderMicrotask(),
                      x.current &&
                        m.animationState &&
                        m.animationState.animateChanges());
                  }),
                  (0, n.useEffect)(() => {
                    m &&
                      (!x.current &&
                        m.animationState &&
                        m.animationState.animateChanges(),
                      x.current &&
                        (queueMicrotask(() => {
                          var t, e;
                          null ==
                            (t = (e = window).MotionHandoffMarkAsComplete) ||
                            t.call(e, v);
                        }),
                        (x.current = !1)),
                      (m.enteringChildren = void 0));
                  }),
                  m
                );
              })(t, c, h, a, e.ProjectionNode));
          }
          return (0, eB.jsxs)(eU.Provider, {
            value: d,
            children: [
              l && d.visualElement
                ? (0, eB.jsx)(l, { visualElement: d.visualElement, ...h })
                : null,
              (function (t, e, i, s, r) {
                let { latestValues: a } = s,
                  o =
                    arguments.length > 5 &&
                    void 0 !== arguments[5] &&
                    arguments[5],
                  l = (
                    eO(t)
                      ? function (t, e, i, s) {
                          let r = (0, n.useMemo)(() => {
                            let i = eN();
                            return (
                              eR(i, e, eI(s), t.transformTemplate, t.style),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            ez(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i = {},
                            s = (function (t, e) {
                              let i = t.style || {},
                                s = {};
                              return (
                                ez(s, i, t),
                                Object.assign(
                                  s,
                                  (function (t, e) {
                                    let { transformTemplate: i } = t;
                                    return (0, n.useMemo)(() => {
                                      let t = eH();
                                      return (
                                        eP(t, e, i),
                                        Object.assign({}, t.vars, t.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                s
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (s.userSelect =
                                s.WebkitUserSelect =
                                s.WebkitTouchCallout =
                                  "none"),
                              (s.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : "pan-".concat("x" === t.drag ? "y" : "x"))),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = s),
                            i
                          );
                        }
                  )(e, a, r, t),
                  h = (function (t, e, i) {
                    let s = {};
                    for (let n in t)
                      ("values" !== n || "object" != typeof t.values) &&
                        (eX(n) ||
                          (!0 === i && eY(n)) ||
                          (!e && !eY(n)) ||
                          (t.draggable && n.startsWith("onDrag"))) &&
                        (s[n] = t[n]);
                    return s;
                  })(e, "string" == typeof t, o),
                  u = t !== n.Fragment ? { ...h, ...l, ref: i } : {},
                  { children: d } = e,
                  c = (0, n.useMemo)(() => (tZ(d) ? d.get() : d), [d]);
                return (0, n.createElement)(t, { ...u, children: c });
              })(
                t,
                e,
                ((r = d.visualElement),
                (0, n.useCallback)(
                  (t) => {
                    t && c.onMount && c.onMount(t),
                      r && (t ? r.mount(t) : r.unmount()),
                      i &&
                        ("function" == typeof i
                          ? i(t)
                          : e5(i) && (i.current = t));
                  },
                  [r]
                )),
                c,
                u,
                s
              ),
            ],
          });
        }
        l.displayName = "motion.".concat(
          "string" == typeof t
            ? t
            : "create(".concat(
                null != (i = null != (e = t.displayName) ? e : t.name) ? i : "",
                ")"
              )
        );
        let h = (0, n.forwardRef)(l);
        return (h[e2] = t), h;
      }
      function e9(t, e, i) {
        let s = t.getProps();
        return eg(s, e, void 0 !== i ? i : s.custom, t);
      }
      function e7(t, e) {
        return t?.[e] ?? t?.default ?? t;
      }
      let it = (t) => Array.isArray(t);
      function ie(t, e) {
        let i = t.getValue("willChange");
        if (tZ(i) && i.add) return i.add(e);
        if (!i && tr.WillChange) {
          let i = new tr.WillChange("auto");
          t.addValue("willChange", i), i.add(e);
        }
      }
      function ii(t) {
        (t.duration = 0), (t.type = "keyframes");
      }
      let is = (t, e) => (i) => e(t(i)),
        ir = (...t) => t.reduce(is),
        ia = (t) => 1e3 * t,
        io = { layout: 0, mainThread: 0, waapi: 0 };
      function il(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      function ih(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let iu = (t, e, i) => {
          let s = t * t,
            n = i * (e * e - s) + s;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        id = [tE, tA, tD];
      function ic(t) {
        let e = id.find((e) => e.test(t));
        if (
          (K(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`,
            "color-not-animatable"
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tD &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: s }) {
              (t /= 360), (i /= 100);
              let n = 0,
                r = 0,
                a = 0;
              if ((e /= 100)) {
                let s = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  o = 2 * i - s;
                (n = il(o, s, t + 1 / 3)),
                  (r = il(o, s, t)),
                  (a = il(o, s, t - 1 / 3));
              } else n = r = a = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * r),
                blue: Math.round(255 * a),
                alpha: s,
              };
            })(i)),
          i
        );
      }
      let ip = (t, e) => {
          let i = ic(t),
            s = ic(e);
          if (!i || !s) return ih(t, e);
          let n = { ...i };
          return (t) => (
            (n.red = iu(i.red, s.red, t)),
            (n.green = iu(i.green, s.green, t)),
            (n.blue = iu(i.blue, s.blue, t)),
            (n.alpha = S(i.alpha, s.alpha, t)),
            tA.transform(n)
          );
        },
        ig = new Set(["none", "hidden"]);
      function im(t, e) {
        return (i) => S(t, e, i);
      }
      function iy(t) {
        return "number" == typeof t
          ? im
          : "string" == typeof t
          ? w(t)
            ? ih
            : tR.test(t)
            ? ip
            : iw
          : Array.isArray(t)
          ? iv
          : "object" == typeof t
          ? tR.test(t)
            ? ip
            : ix
          : ih;
      }
      function iv(t, e) {
        let i = [...t],
          s = i.length,
          n = t.map((t, i) => iy(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < s; e++) i[e] = n[e](t);
          return i;
        };
      }
      function ix(t, e) {
        let i = { ...t, ...e },
          s = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (s[n] = iy(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in s) i[e] = s[e](t);
          return i;
        };
      }
      let iw = (t, e) => {
        let i = t_.createTransformer(e),
          s = tj(t),
          n = tj(e);
        return s.indexes.var.length === n.indexes.var.length &&
          s.indexes.color.length === n.indexes.color.length &&
          s.indexes.number.length >= n.indexes.number.length
          ? (ig.has(t) && !n.values.length) || (ig.has(e) && !s.values.length)
            ? (function (t, e) {
                return ig.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : ir(
                iv(
                  (function (t, e) {
                    let i = [],
                      s = { color: 0, var: 0, number: 0 };
                    for (let n = 0; n < e.values.length; n++) {
                      let r = e.types[n],
                        a = t.indexes[r][s[r]],
                        o = t.values[a] ?? 0;
                      (i[n] = o), s[r]++;
                    }
                    return i;
                  })(s, n),
                  n.values
                ),
                i
              )
          : (K(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
              "complex-values-different"
            ),
            ih(t, e));
      };
      function iP(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? S(t, e, i)
          : iy(t)(t, e);
      }
      let ib = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: (t = !0) => th.update(e, t),
            stop: () => tu(e),
            now: () => (td.isProcessing ? td.timestamp : tJ.now()),
          };
        },
        iS = (t, e, i = 10) => {
          let s = "",
            n = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < n; e++)
            s += Math.round(1e4 * t(e / (n - 1))) / 1e4 + ", ";
          return `linear(${s.substring(0, s.length - 2)})`;
        };
      function iT(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      function iC(t, e, i) {
        var s, n;
        let r = Math.max(e - 5, 0);
        return (s = i - t(r)), (n = e - r) ? (1e3 / n) * s : 0;
      }
      let iM = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function iA(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let iE = ["duration", "bounce"],
        iD = ["stiffness", "damping", "mass"];
      function iR(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ik(t = iM.visualDuration, e = iM.bounce) {
        let i,
          s =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: n, restDelta: r } = s,
          a = s.keyframes[0],
          o = s.keyframes[s.keyframes.length - 1],
          l = { done: !1, value: a },
          {
            stiffness: h,
            damping: u,
            mass: d,
            duration: c,
            velocity: p,
            isResolvedFromDuration: g,
          } = (function (t) {
            let e = {
              velocity: iM.velocity,
              stiffness: iM.stiffness,
              damping: iM.damping,
              mass: iM.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!iR(t, iD) && iR(t, iE))
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  s = i * i,
                  n = 2 * O(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
                e = { ...e, mass: iM.mass, stiffness: s, damping: n };
              } else {
                let i = (function ({
                  duration: t = iM.duration,
                  bounce: e = iM.bounce,
                  velocity: i = iM.velocity,
                  mass: s = iM.mass,
                }) {
                  let n, r;
                  K(
                    t <= ia(iM.maxDuration),
                    "Spring duration must be 10 seconds or less",
                    "spring-duration-limit"
                  );
                  let a = 1 - e;
                  (a = O(iM.minDamping, iM.maxDamping, a)),
                    (t = O(iM.minDuration, iM.maxDuration, t / 1e3)),
                    a < 1
                      ? ((n = (e) => {
                          let s = e * a,
                            n = s * t;
                          return 0.001 - ((s - i) / iA(e, a)) * Math.exp(-n);
                        }),
                        (r = (e) => {
                          let s = e * a * t,
                            r = Math.pow(a, 2) * Math.pow(e, 2) * t,
                            o = Math.exp(-s),
                            l = iA(Math.pow(e, 2), a);
                          return (
                            ((s * i + i - r) *
                              o *
                              (-n(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((n = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (r = (e) => t * t * (i - e) * Math.exp(-e * t)));
                  let o = (function (t, e, i) {
                    let s = i;
                    for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                    return s;
                  })(n, r, 5 / t);
                  if (((t = ia(t)), isNaN(o)))
                    return {
                      stiffness: iM.stiffness,
                      damping: iM.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(o, 2) * s;
                    return {
                      stiffness: e,
                      damping: 2 * a * Math.sqrt(s * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: iM.mass }).isResolvedFromDuration = !0;
              }
            return e;
          })({ ...s, velocity: -((s.velocity || 0) / 1e3) }),
          m = p || 0,
          f = u / (2 * Math.sqrt(h * d)),
          y = o - a,
          v = Math.sqrt(h / d) / 1e3,
          x = 5 > Math.abs(y);
        if (
          (n || (n = x ? iM.restSpeed.granular : iM.restSpeed.default),
          r || (r = x ? iM.restDelta.granular : iM.restDelta.default),
          f < 1)
        ) {
          let t = iA(v, f);
          i = (e) =>
            o -
            Math.exp(-f * v * e) *
              (((m + f * v * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
        } else if (1 === f)
          i = (t) => o - Math.exp(-v * t) * (y + (m + v * y) * t);
        else {
          let t = v * Math.sqrt(f * f - 1);
          i = (e) => {
            let i = Math.exp(-f * v * e),
              s = Math.min(t * e, 300);
            return (
              o -
              (i * ((m + f * v * y) * Math.sinh(s) + t * y * Math.cosh(s))) / t
            );
          };
        }
        let w = {
          calculatedDuration: (g && c) || null,
          next: (t) => {
            let e = i(t);
            if (g) l.done = t >= c;
            else {
              let s = 0 === t ? m : 0;
              f < 1 && (s = 0 === t ? ia(m) : iC(i, t, e));
              let a = Math.abs(o - e) <= r;
              l.done = Math.abs(s) <= n && a;
            }
            return (l.value = l.done ? o : e), l;
          },
          toString: () => {
            let t = Math.min(iT(w), 2e4),
              e = iS((e) => w.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
          toTransition: () => {},
        };
        return w;
      }
      function iI({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: s = 325,
        bounceDamping: n = 10,
        bounceStiffness: r = 500,
        modifyTarget: a,
        min: o,
        max: l,
        restDelta: h = 0.5,
        restSpeed: u,
      }) {
        let d,
          c,
          p = t[0],
          g = { done: !1, value: p },
          m = i * e,
          f = p + m,
          y = void 0 === a ? f : a(f);
        y !== f && (m = y - p);
        let v = (t) => -m * Math.exp(-t / s),
          x = (t) => y + v(t),
          w = (t) => {
            let e = v(t),
              i = x(t);
            (g.done = Math.abs(e) <= h), (g.value = g.done ? y : i);
          },
          P = (t) => {
            let e;
            if (
              ((e = g.value),
              (void 0 !== o && e < o) || (void 0 !== l && e > l))
            ) {
              var i;
              (d = t),
                (c = ik({
                  keyframes: [
                    g.value,
                    ((i = g.value),
                    void 0 === o
                      ? l
                      : void 0 === l || Math.abs(o - i) < Math.abs(l - i)
                      ? o
                      : l),
                  ],
                  velocity: iC(x, t, g.value),
                  damping: n,
                  stiffness: r,
                  restDelta: h,
                  restSpeed: u,
                }));
            }
          };
        return (
          P(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), w(t), P(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || w(t), g);
            },
          }
        );
      }
      ik.applyToOptions = (t) => {
        let e = (function (t, e = 100, i) {
          let s = i({ ...t, keyframes: [0, e] }),
            n = Math.min(iT(s), 2e4);
          return {
            type: "keyframes",
            ease: (t) => s.next(n * t).value / e,
            duration: n / 1e3,
          };
        })(t, 100, ik);
        return (
          (t.ease = e.ease),
          (t.duration = ia(e.duration)),
          (t.type = "keyframes"),
          t
        );
      };
      let iL = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function iV(t, e, i, s) {
        return t === e && i === s
          ? tn
          : (n) =>
              0 === n || 1 === n
                ? n
                : iL(
                    (function (t, e, i, s, n) {
                      let r,
                        a,
                        o = 0;
                      do
                        (r = iL((a = e + (i - e) / 2), s, n) - t) > 0
                          ? (i = a)
                          : (e = a);
                      while (Math.abs(r) > 1e-7 && ++o < 12);
                      return a;
                    })(n, 0, 1, t, i),
                    e,
                    s
                  );
      }
      let ij = iV(0.42, 0, 1, 1),
        iO = iV(0, 0, 0.58, 1),
        iB = iV(0.42, 0, 0.58, 1),
        iF = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        i_ = (t) => (e) => 1 - t(1 - e),
        iW = iV(0.33, 1.53, 0.69, 0.99),
        iU = i_(iW),
        i$ = iF(iU),
        iH = (t) =>
          (t *= 2) < 1 ? 0.5 * iU(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        iz = (t) => 1 - Math.sin(Math.acos(t)),
        iN = i_(iz),
        iG = iF(iz),
        iY = (t) => Array.isArray(t) && "number" == typeof t[0],
        iX = {
          linear: tn,
          easeIn: ij,
          easeInOut: iB,
          easeOut: iO,
          circIn: iz,
          circInOut: iG,
          circOut: iN,
          backIn: iU,
          backInOut: i$,
          backOut: iW,
          anticipate: iH,
        },
        iq = (t) => {
          if (iY(t)) {
            Z(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
              "cubic-bezier-length"
            );
            let [e, i, s, n] = t;
            return iV(e, i, s, n);
          }
          return "string" == typeof t
            ? (Z(
                void 0 !== iX[t],
                `Invalid easing type '${t}'`,
                "invalid-easing-type"
              ),
              iX[t])
            : t;
        },
        iK = (t, e, i) => {
          let s = e - t;
          return 0 === s ? 1 : (i - t) / s;
        };
      function iZ({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: s = "easeInOut",
      }) {
        var n;
        let r = Array.isArray(s) && "number" != typeof s[0] ? s.map(iq) : iq(s),
          a = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: s, mixer: n } = {}) {
            let r = t.length;
            if (
              (Z(
                r === e.length,
                "Both input and output ranges must be the same length",
                "range-length"
              ),
              1 === r)
            )
              return () => e[0];
            if (2 === r && e[0] === e[1]) return () => e[1];
            let a = t[0] === t[1];
            t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let s = [],
                  n = i || tr.mix || iP,
                  r = t.length - 1;
                for (let i = 0; i < r; i++) {
                  let r = n(t[i], t[i + 1]);
                  e && (r = ir(Array.isArray(e) ? e[i] || tn : e, r)),
                    s.push(r);
                }
                return s;
              })(e, s, n),
              l = o.length,
              h = (i) => {
                if (a && i < t[0]) return e[0];
                let s = 0;
                if (l > 1) for (; s < t.length - 2 && !(i < t[s + 1]); s++);
                let n = iK(t[s], t[s + 1], i);
                return o[s](n);
              };
            return i ? (e) => h(O(t[0], t[r - 1], e)) : h;
          })(
            ((n =
              i && i.length === e.length
                ? i
                : (function (t) {
                    let e = [0];
                    return (
                      !(function (t, e) {
                        let i = t[t.length - 1];
                        for (let s = 1; s <= e; s++) {
                          let n = iK(0, e, s);
                          t.push(S(i, 1, n));
                        }
                      })(e, t.length - 1),
                      e
                    );
                  })(e)),
            n.map((e) => e * t)),
            e,
            {
              ease: Array.isArray(r)
                ? r
                : e.map(() => r || iB).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((a.value = o(e)), (a.done = e >= t), a),
        };
      }
      let iQ = (t) => null !== t;
      function iJ(t, { repeat: e, repeatType: i = "loop" }, s, n = 1) {
        let r = t.filter(iQ),
          a = n < 0 || (e && "loop" !== i && e % 2 == 1) ? 0 : r.length - 1;
        return a && void 0 !== s ? s : r[a];
      }
      let i0 = { decay: iI, inertia: iI, tween: iZ, keyframes: iZ, spring: ik };
      function i1(t) {
        "string" == typeof t.type && (t.type = i0[t.type]);
      }
      class i2 {
        constructor() {
          this.updateFinished();
        }
        get finished() {
          return this._finished;
        }
        updateFinished() {
          this._finished = new Promise((t) => {
            this.resolve = t;
          });
        }
        notifyFinished() {
          this.resolve();
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
      }
      let i5 = (t) => t / 100;
      class i3 extends i2 {
        constructor(t) {
          super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.stop = () => {
              let { motionValue: t } = this.options;
              t && t.updatedAt !== tJ.now() && this.tick(tJ.now()),
                (this.isStopped = !0),
                "idle" !== this.state &&
                  (this.teardown(), this.options.onStop?.());
            }),
            io.mainThread++,
            (this.options = t),
            this.initAnimation(),
            this.play(),
            !1 === t.autoplay && this.pause();
        }
        initAnimation() {
          let { options: t } = this;
          i1(t);
          let {
              type: e = iZ,
              repeat: i = 0,
              repeatDelay: s = 0,
              repeatType: n,
              velocity: r = 0,
            } = t,
            { keyframes: a } = t,
            o = e || iZ;
          o !== iZ &&
            "number" != typeof a[0] &&
            ((this.mixKeyframes = ir(i5, iP(a[0], a[1]))), (a = [0, 100]));
          let l = o({ ...t, keyframes: a });
          "mirror" === n &&
            (this.mirroredGenerator = o({
              ...t,
              keyframes: [...a].reverse(),
              velocity: -r,
            })),
            null === l.calculatedDuration && (l.calculatedDuration = iT(l));
          let { calculatedDuration: h } = l;
          (this.calculatedDuration = h),
            (this.resolvedDuration = h + s),
            (this.totalDuration = this.resolvedDuration * (i + 1) - s),
            (this.generator = l);
        }
        updateTime(t) {
          let e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = e);
        }
        tick(t, e = !1) {
          let {
            generator: i,
            totalDuration: s,
            mixKeyframes: n,
            mirroredGenerator: r,
            resolvedDuration: a,
            calculatedDuration: o,
          } = this;
          if (null === this.startTime) return i.next(0);
          let {
            delay: l = 0,
            keyframes: h,
            repeat: u,
            repeatType: d,
            repeatDelay: c,
            type: p,
            onUpdate: g,
            finalKeyframe: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - s / this.speed, this.startTime)),
            e ? (this.currentTime = t) : this.updateTime(t);
          let f = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
            y = this.playbackSpeed >= 0 ? f < 0 : f > s;
          (this.currentTime = Math.max(f, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = s);
          let v = this.currentTime,
            x = i;
          if (u) {
            let t = Math.min(this.currentTime, s) / a,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, u + 1)) % 2 &&
                ("reverse" === d
                  ? ((i = 1 - i), c && (i -= c / a))
                  : "mirror" === d && (x = r)),
              (v = O(0, 1, i) * a);
          }
          let w = y ? { done: !1, value: h[0] } : x.next(v);
          n && (w.value = n(w.value));
          let { done: P } = w;
          y ||
            null === o ||
            (P =
              this.playbackSpeed >= 0
                ? this.currentTime >= s
                : this.currentTime <= 0);
          let b =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && P));
          return (
            b && p !== iI && (w.value = iJ(h, this.options, m, this.speed)),
            g && g(w.value),
            b && this.finish(),
            w
          );
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
        get duration() {
          return this.calculatedDuration / 1e3;
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + t / 1e3;
        }
        get time() {
          return this.currentTime / 1e3;
        }
        set time(t) {
          (t = ia(t)),
            (this.currentTime = t),
            null === this.startTime ||
            null !== this.holdTime ||
            0 === this.playbackSpeed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.playbackSpeed),
            this.driver?.start(!1);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          this.updateTime(tJ.now());
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = this.currentTime / 1e3);
        }
        play() {
          if (this.isStopped) return;
          let { driver: t = ib, startTime: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))),
            this.options.onPlay?.();
          let i = this.driver.now();
          "finished" === this.state
            ? (this.updateFinished(), (this.startTime = i))
            : null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : this.startTime || (this.startTime = e ?? i),
            "finished" === this.state &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          (this.state = "paused"),
            this.updateTime(tJ.now()),
            (this.holdTime = this.currentTime);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.notifyFinished(),
            this.teardown(),
            (this.state = "finished"),
            this.options.onComplete?.();
        }
        cancel() {
          (this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            (this.startTime = this.holdTime = null),
            io.mainThread--;
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
        attachTimeline(t) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = "keyframes"),
              (this.options.ease = "linear"),
              this.initAnimation()),
            this.driver?.stop(),
            t.observe(this)
          );
        }
      }
      function i4(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let i6 = i4(() => void 0 !== window.ScrollTimeline),
        i8 = {},
        i9 = (function (t, e) {
          let i = i4(t);
          return () => i8[e] ?? i();
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        i7 = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
        st = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: i7([0, 0.65, 0.55, 1]),
          circOut: i7([0.55, 0, 1, 0.45]),
          backIn: i7([0.31, 0.01, 0.66, -0.59]),
          backOut: i7([0.33, 1.53, 0.69, 0.99]),
        };
      function se(t) {
        return "function" == typeof t && "applyToOptions" in t;
      }
      class si extends i2 {
        constructor(t) {
          if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
            return;
          let {
            element: e,
            name: i,
            keyframes: s,
            pseudoElement: n,
            allowFlatten: r = !1,
            finalKeyframe: a,
            onComplete: o,
          } = t;
          (this.isPseudoElement = !!n),
            (this.allowFlatten = r),
            (this.options = t),
            Z(
              "string" != typeof t.type,
              'Mini animate() doesn\'t support "type" as a string.',
              "mini-spring"
            );
          let l = (function ({ type: t, ...e }) {
            return se(t) && i9()
              ? t.applyToOptions(e)
              : (e.duration ?? (e.duration = 300),
                e.ease ?? (e.ease = "easeOut"),
                e);
          })(t);
          (this.animation = (function (
            t,
            e,
            i,
            {
              delay: s = 0,
              duration: n = 300,
              repeat: r = 0,
              repeatType: a = "loop",
              ease: o = "easeOut",
              times: l,
            } = {},
            h
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let d = (function t(e, i) {
              if (e)
                return "function" == typeof e
                  ? i9()
                    ? iS(e, i)
                    : "ease-out"
                  : iY(e)
                  ? i7(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, i) || st.easeOut)
                  : st[e];
            })(o, n);
            Array.isArray(d) && (u.easing = d), to.value && io.waapi++;
            let c = {
              delay: s,
              duration: n,
              easing: Array.isArray(d) ? "linear" : d,
              fill: "both",
              iterations: r + 1,
              direction: "reverse" === a ? "alternate" : "normal",
            };
            h && (c.pseudoElement = h);
            let p = t.animate(u, c);
            return (
              to.value &&
                p.finished.finally(() => {
                  io.waapi--;
                }),
              p
            );
          })(e, i, s, l, n)),
            !1 === l.autoplay && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !n)) {
                let t = iJ(s, this.options, a, this.speed);
                this.updateMotionValue
                  ? this.updateMotionValue(t)
                  : (function (t, e, i) {
                      e.startsWith("--")
                        ? t.style.setProperty(e, i)
                        : (t.style[e] = i);
                    })(e, i, t),
                  this.animation.cancel();
              }
              o?.(), this.notifyFinished();
            });
        }
        play() {
          this.isStopped ||
            (this.animation.play(),
            "finished" === this.state && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: t } = this;
          "idle" !== t &&
            "finished" !== t &&
            (this.updateMotionValue
              ? this.updateMotionValue()
              : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          this.isPseudoElement || this.animation.commitStyles?.();
        }
        get duration() {
          return (
            Number(this.animation.effect?.getComputedTiming?.().duration || 0) /
            1e3
          );
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + t / 1e3;
        }
        get time() {
          return (Number(this.animation.currentTime) || 0) / 1e3;
        }
        set time(t) {
          (this.finishedTime = null), (this.animation.currentTime = ia(t));
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(t) {
          t < 0 && (this.finishedTime = null),
            (this.animation.playbackRate = t);
        }
        get state() {
          return null !== this.finishedTime
            ? "finished"
            : this.animation.playState;
        }
        get startTime() {
          return Number(this.animation.startTime);
        }
        set startTime(t) {
          this.animation.startTime = t;
        }
        attachTimeline({ timeline: t, observe: e }) {
          return (this.allowFlatten &&
            this.animation.effect?.updateTiming({ easing: "linear" }),
          (this.animation.onfinish = null),
          t && i6())
            ? ((this.animation.timeline = t), tn)
            : e(this);
        }
      }
      let ss = { anticipate: iH, backInOut: i$, circInOut: iG };
      class sn extends si {
        constructor(t) {
          !(function (t) {
            "string" == typeof t.ease && t.ease in ss && (t.ease = ss[t.ease]);
          })(t),
            i1(t),
            super(t),
            t.startTime && (this.startTime = t.startTime),
            (this.options = t);
        }
        updateMotionValue(t) {
          let {
            motionValue: e,
            onUpdate: i,
            onComplete: s,
            element: n,
            ...r
          } = this.options;
          if (!e) return;
          if (void 0 !== t) return void e.set(t);
          let a = new i3({ ...r, autoplay: !1 }),
            o = ia(this.finishedTime ?? this.time);
          e.setWithVelocity(a.sample(o - 10).value, a.sample(o).value, 10),
            a.stop();
        }
      }
      let sr = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (t_.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        sa = new Set(["opacity", "clipPath", "filter", "transform"]),
        so = i4(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      class sl extends i2 {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: s = 0,
          repeatDelay: n = 0,
          repeatType: r = "loop",
          keyframes: a,
          name: o,
          motionValue: l,
          element: h,
          ...u
        }) {
          super(),
            (this.stop = () => {
              this._animation &&
                (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel();
            }),
            (this.createdAt = tJ.now());
          let d = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: s,
              repeatDelay: n,
              repeatType: r,
              name: o,
              motionValue: l,
              element: h,
              ...u,
            },
            c = h?.KeyframeResolver || tx;
          (this.keyframeResolver = new c(
            a,
            (t, e, i) => this.onKeyframesResolved(t, e, d, !i),
            o,
            l,
            h
          )),
            this.keyframeResolver?.scheduleResolve();
        }
        onKeyframesResolved(t, e, i, s) {
          this.keyframeResolver = void 0;
          let {
            name: n,
            type: r,
            velocity: a,
            delay: o,
            isHandoff: l,
            onUpdate: h,
          } = i;
          (this.resolvedAt = tJ.now()),
            !(function (t, e, i, s) {
              let n = t[0];
              if (null === n) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let r = t[t.length - 1],
                a = sr(n, e),
                o = sr(r, e);
              return (
                K(
                  a === o,
                  `You are trying to animate ${e} from "${n}" to "${r}". "${
                    a ? r : n
                  }" is not an animatable value.`,
                  "value-not-animatable"
                ),
                !!a &&
                  !!o &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || se(i)) && s))
              );
            })(t, n, r, a) &&
              ((tr.instantAnimations || !o) && h?.(iJ(t, i, e)),
              (t[0] = t[t.length - 1]),
              ii(i),
              (i.repeat = 0));
          let u = {
              startTime: s
                ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                  ? this.resolvedAt
                  : this.createdAt
                : void 0,
              finalKeyframe: e,
              ...i,
              keyframes: t,
            },
            d =
              !l &&
              (function (t) {
                let {
                  motionValue: e,
                  name: i,
                  repeatDelay: s,
                  repeatType: n,
                  damping: r,
                  type: a,
                } = t;
                if (!(e?.owner?.current instanceof HTMLElement)) return !1;
                let { onUpdate: o, transformTemplate: l } = e.owner.getProps();
                return (
                  so() &&
                  i &&
                  sa.has(i) &&
                  ("transform" !== i || !l) &&
                  !o &&
                  !s &&
                  "mirror" !== n &&
                  0 !== r &&
                  "inertia" !== a
                );
              })(u)
                ? new sn({ ...u, element: u.motionValue.owner.current })
                : new i3(u);
          d.finished.then(() => this.notifyFinished()).catch(tn),
            this.pendingTimeline &&
              ((this.stopTimeline = d.attachTimeline(this.pendingTimeline)),
              (this.pendingTimeline = void 0)),
            (this._animation = d);
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished;
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
        get animation() {
          return (
            this._animation ||
              (this.keyframeResolver?.resume(),
              (tf = !0),
              tv(),
              ty(),
              (tf = !1)),
            this._animation
          );
        }
        get duration() {
          return this.animation.duration;
        }
        get iterationDuration() {
          return this.animation.iterationDuration;
        }
        get time() {
          return this.animation.time;
        }
        set time(t) {
          this.animation.time = t;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(t) {
          this.animation.speed = t;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(t) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(t))
              : (this.pendingTimeline = t),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          this._animation && this.animation.cancel(),
            this.keyframeResolver?.cancel();
        }
      }
      let sh = (t) => null !== t,
        su = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        sd = { type: "keyframes", duration: 0.8 },
        sc = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        sp =
          (t, e, i, s = {}, n, r) =>
          (o) => {
            let l = e7(s, t) || {},
              h = l.delay || s.delay || 0,
              { elapsed: u = 0 } = s;
            u -= ia(h);
            let d = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...l,
              delay: -u,
              onUpdate: (t) => {
                e.set(t), l.onUpdate && l.onUpdate(t);
              },
              onComplete: () => {
                o(), l.onComplete && l.onComplete();
              },
              name: t,
              motionValue: e,
              element: r ? void 0 : n,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: s,
              staggerDirection: n,
              repeat: r,
              repeatType: a,
              repeatDelay: o,
              from: l,
              elapsed: h,
              ...u
            }) {
              return !!Object.keys(u).length;
            })(l) &&
              Object.assign(
                d,
                ((t, { keyframes: e }) =>
                  e.length > 2
                    ? sd
                    : a.has(t)
                    ? t.startsWith("scale")
                      ? {
                          type: "spring",
                          stiffness: 550,
                          damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
                          restSpeed: 10,
                        }
                      : su
                    : sc)(t, d)
              ),
              d.duration && (d.duration = ia(d.duration)),
              d.repeatDelay && (d.repeatDelay = ia(d.repeatDelay)),
              void 0 !== d.from && (d.keyframes[0] = d.from);
            let c = !1;
            if (
              ((!1 !== d.type && (0 !== d.duration || d.repeatDelay)) ||
                (ii(d), 0 === d.delay && (c = !0)),
              (tr.instantAnimations || tr.skipAnimations) &&
                ((c = !0), ii(d), (d.delay = 0)),
              (d.allowFlatten = !l.type && !l.ease),
              c && !r && void 0 !== e.get())
            ) {
              let t = (function (t, { repeat: e, repeatType: i = "loop" }, s) {
                let n = t.filter(sh),
                  r = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
                return n[r];
              })(d.keyframes, l);
              if (void 0 !== t)
                return void th.update(() => {
                  d.onUpdate(t), d.onComplete();
                });
            }
            return l.isSync ? new i3(d) : new sl(d);
          };
      function sg(t, e, { delay: i = 0, transitionOverride: s, type: n } = {}) {
        let {
          transition: r = t.getDefaultTransition(),
          transitionEnd: a,
          ...o
        } = e;
        s && (r = s);
        let l = [],
          h = n && t.animationState && t.animationState.getState()[n];
        for (let e in o) {
          let s = t.getValue(e, t.latestValues[e] ?? null),
            n = o[e];
          if (
            void 0 === n ||
            (h &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let s = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), s;
              })(h, e))
          )
            continue;
          let a = { delay: i, ...e7(r || {}, e) },
            u = s.get();
          if (
            void 0 !== u &&
            !s.isAnimating &&
            !Array.isArray(n) &&
            n === u &&
            !a.velocity
          )
            continue;
          let d = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[e3];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, th);
              null !== t && ((a.startTime = t), (d = !0));
            }
          }
          ie(t, e),
            s.start(
              sp(
                e,
                s,
                n,
                t.shouldReduceMotion && j.has(e) ? { type: !1 } : a,
                t,
                d
              )
            );
          let c = s.animation;
          c && l.push(c);
        }
        return (
          a &&
            Promise.all(l).then(() => {
              th.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: s = {},
                      ...n
                    } = e9(t, e) || {};
                    for (let e in (n = { ...n, ...i })) {
                      var r;
                      let i = it((r = n[e])) ? r[r.length - 1] || 0 : r;
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, t4(i));
                    }
                  })(t, a);
              });
            }),
          l
        );
      }
      function sm(t, e, i, s = 0, n = 1) {
        let r = Array.from(t)
            .sort((t, e) => t.sortNodePosition(e))
            .indexOf(e),
          a = t.size,
          o = (a - 1) * s;
        return "function" == typeof i ? i(r, a) : 1 === n ? r * s : o - r * s;
      }
      function sf(t, e, i = {}) {
        let s = e9(
            t,
            e,
            "exit" === i.type ? t.presenceContext?.custom : void 0
          ),
          { transition: n = t.getDefaultTransition() || {} } = s || {};
        i.transitionOverride && (n = i.transitionOverride);
        let r = s ? () => Promise.all(sg(t, s, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (s = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: a,
                    staggerDirection: o,
                  } = n;
                  return (function (t, e, i = 0, s = 0, n = 0, r = 1, a) {
                    let o = [];
                    for (let l of t.variantChildren)
                      l.notify("AnimationStart", e),
                        o.push(
                          sf(l, e, {
                            ...a,
                            delay:
                              i +
                              ("function" == typeof s ? 0 : s) +
                              sm(t.variantChildren, l, s, n, r),
                          }).then(() => l.notify("AnimationComplete", e))
                        );
                    return Promise.all(o);
                  })(t, e, s, r, a, o, i);
                }
              : () => Promise.resolve(),
          { when: o } = n;
        if (!o) return Promise.all([r(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === o ? [r, a] : [a, r];
          return t().then(() => e());
        }
      }
      function sy(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
        return !0;
      }
      let sv = eu.length,
        sx = [...eh].reverse(),
        sw = eh.length;
      function sP(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function sb() {
        return {
          animate: sP(!0),
          whileInView: sP(),
          whileHover: sP(),
          whileTap: sP(),
          whileDrag: sP(),
          whileFocus: sP(),
          exit: sP(),
        };
      }
      class sS {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class sT extends sS {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let s;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            s = Promise.all(e.map((e) => sf(t, e, i)));
                          else if ("string" == typeof e) s = sf(t, e, i);
                          else {
                            let n =
                              "function" == typeof e ? e9(t, e, i.custom) : e;
                            s = Promise.all(sg(t, n, i));
                          }
                          return s.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = sb(),
                  s = !0,
                  n = (e) => (i, s) => {
                    let n = e9(
                      t,
                      s,
                      "exit" === e ? t.presenceContext?.custom : void 0
                    );
                    if (n) {
                      let { transition: t, transitionEnd: e, ...s } = n;
                      i = { ...i, ...s, ...e };
                    }
                    return i;
                  };
                function r(r) {
                  let { props: a } = t,
                    o =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < sv; t++) {
                          let s = eu[t],
                            n = e.props[s];
                          (el(n) || !1 === n) && (i[s] = n);
                        }
                        return i;
                      })(t.parent) || {},
                    l = [],
                    h = new Set(),
                    u = {},
                    d = 1 / 0;
                  for (let e = 0; e < sw; e++) {
                    var c, p;
                    let g = sx[e],
                      m = i[g],
                      f = void 0 !== a[g] ? a[g] : o[g],
                      y = el(f),
                      v = g === r ? m.isActive : null;
                    !1 === v && (d = e);
                    let x = f === o[g] && f !== a[g] && y;
                    if (
                      (x && s && t.manuallyAnimateOnMount && (x = !1),
                      (m.protectedKeys = { ...u }),
                      (!m.isActive && null === v) ||
                        (!f && !m.prevProp) ||
                        eo(f) ||
                        "boolean" == typeof f)
                    )
                      continue;
                    let w =
                        ((c = m.prevProp),
                        "string" == typeof (p = f)
                          ? p !== c
                          : !!Array.isArray(p) && !sy(p, c)),
                      P =
                        w || (g === r && m.isActive && !x && y) || (e > d && y),
                      b = !1,
                      S = Array.isArray(f) ? f : [f],
                      T = S.reduce(n(g), {});
                    !1 === v && (T = {});
                    let { prevResolvedValues: C = {} } = m,
                      M = { ...C, ...T },
                      A = (e) => {
                        (P = !0),
                          h.has(e) && ((b = !0), h.delete(e)),
                          (m.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in M) {
                      let e = T[t],
                        i = C[t];
                      if (!u.hasOwnProperty(t))
                        (it(e) && it(i) ? sy(e, i) : e === i)
                          ? void 0 !== e && h.has(t)
                            ? A(t)
                            : (m.protectedKeys[t] = !0)
                          : null != e
                          ? A(t)
                          : h.add(t);
                    }
                    (m.prevProp = f),
                      (m.prevResolvedValues = T),
                      m.isActive && (u = { ...u, ...T }),
                      s && t.blockInitialAnimation && (P = !1);
                    let E = x && w,
                      D = !E || b;
                    P &&
                      D &&
                      l.push(
                        ...S.map((e) => {
                          let i = { type: g };
                          if (
                            "string" == typeof e &&
                            s &&
                            !E &&
                            t.manuallyAnimateOnMount &&
                            t.parent
                          ) {
                            let { parent: s } = t,
                              n = e9(s, e);
                            if (s.enteringChildren && n) {
                              let { delayChildren: e } = n.transition || {};
                              i.delay = sm(s.enteringChildren, t, e);
                            }
                          }
                          return { animation: e, options: i };
                        })
                      );
                  }
                  if (h.size) {
                    let e = {};
                    if ("boolean" != typeof a.initial) {
                      let i = e9(
                        t,
                        Array.isArray(a.initial) ? a.initial[0] : a.initial
                      );
                      i && i.transition && (e.transition = i.transition);
                    }
                    h.forEach((i) => {
                      let s = t.getBaseTarget(i),
                        n = t.getValue(i);
                      n && (n.liveStyle = !0), (e[i] = s ?? null);
                    }),
                      l.push({ animation: e });
                  }
                  let g = !!l.length;
                  return (
                    s &&
                      (!1 === a.initial || a.initial === a.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (g = !1),
                    (s = !1),
                    g ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: r,
                  setActive: function (e, s) {
                    if (i[e].isActive === s) return Promise.resolve();
                    t.variantChildren?.forEach((t) =>
                      t.animationState?.setActive(e, s)
                    ),
                      (i[e].isActive = s);
                    let n = r(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return n;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = sb()), (s = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          eo(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          this.node.animationState.reset(), this.unmountControls?.();
        }
      }
      let sC = 0;
      class sM extends sS {
        constructor() {
          super(...arguments), (this.id = sC++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let s = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            s.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          e && e(this.id), t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let sA = { x: !1, y: !1 };
      function sE(t, e, i, s = { passive: !0 }) {
        return t.addEventListener(e, i, s), () => t.removeEventListener(e, i);
      }
      let sD = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function sR(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      function sk(t, e, i, s) {
        return sE(t, e, (t) => sD(t) && i(t, sR(t)), s);
      }
      function sI(t) {
        return t.max - t.min;
      }
      function sL(t, e, i, s = 0.5) {
        (t.origin = s),
          (t.originPoint = S(e.min, e.max, t.origin)),
          (t.scale = sI(i) / sI(e)),
          (t.translate = S(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function sV(t, e, i, s) {
        sL(t.x, e.x, i.x, s ? s.originX : void 0),
          sL(t.y, e.y, i.y, s ? s.originY : void 0);
      }
      function sj(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + sI(e));
      }
      function sO(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + sI(e));
      }
      function sB(t, e, i) {
        sO(t.x, e.x, i.x), sO(t.y, e.y, i.y);
      }
      function sF(t) {
        return [t("x"), t("y")];
      }
      let s_ = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        sW = (t, e) => Math.abs(t - e);
      class sU {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: s = window,
            dragSnapToOrigin: n = !1,
            distanceThreshold: r = 3,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = sz(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(sW(t.x, e.x) ** 2 + sW(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
              if (!e && !i) return;
              let { point: s } = t,
                { timestamp: n } = td;
              this.history.push({ ...s, timestamp: n });
              let { onStart: r, onMove: a } = this.handlers;
              e ||
                (r && r(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                a && a(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = s$(e, this.transformPagePoint)),
                th.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: s,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = sz(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : s$(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, r), s && s(t, r);
            }),
            !sD(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.distanceThreshold = r),
            (this.contextWindow = s || window);
          let a = s$(sR(t), this.transformPagePoint),
            { point: o } = a,
            { timestamp: l } = td;
          this.history = [{ ...o, timestamp: l }];
          let { onSessionStart: h } = e;
          h && h(t, sz(a, this.history)),
            (this.removeListeners = ir(
              sk(this.contextWindow, "pointermove", this.handlePointerMove),
              sk(this.contextWindow, "pointerup", this.handlePointerUp),
              sk(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), tu(this.updatePoint);
        }
      }
      function s$(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function sH(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function sz({ point: t }, e) {
        return {
          point: t,
          delta: sH(t, sN(e)),
          offset: sH(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              s = null,
              n = sN(t);
            for (
              ;
              i >= 0 && ((s = t[i]), !(n.timestamp - s.timestamp > ia(0.1)));

            )
              i--;
            if (!s) return { x: 0, y: 0 };
            let r = (n.timestamp - s.timestamp) / 1e3;
            if (0 === r) return { x: 0, y: 0 };
            let a = { x: (n.x - s.x) / r, y: (n.y - s.y) / r };
            return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
          })(e, 0.1),
        };
      }
      function sN(t) {
        return t[t.length - 1];
      }
      function sG(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function sY(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
        );
      }
      function sX(t, e, i) {
        return { min: sq(t, e), max: sq(t, i) };
      }
      function sq(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let sK = new WeakMap();
      class sZ {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = es()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1, distanceThreshold: i } = {}) {
          let { presenceContext: s } = this.visualElement;
          if (s && !1 === s.isPresent) return;
          let n = (t) => {
              let { dragSnapToOrigin: i } = this.getProps();
              i ? this.pauseAnimation() : this.stopAnimation(),
                e && this.snapToCursor(sR(t).point);
            },
            r = (t, e) => {
              let {
                drag: i,
                dragPropagation: s,
                onDragStart: n,
              } = this.getProps();
              if (
                i &&
                !s &&
                (this.openDragLock && this.openDragLock(),
                (this.openDragLock = (function (t) {
                  if ("x" === t || "y" === t)
                    if (sA[t]) return null;
                    else
                      return (
                        (sA[t] = !0),
                        () => {
                          sA[t] = !1;
                        }
                      );
                  return sA.x || sA.y
                    ? null
                    : ((sA.x = sA.y = !0),
                      () => {
                        sA.x = sA.y = !1;
                      });
                })(i)),
                !this.openDragLock)
              )
                return;
              (this.latestPointerEvent = t),
                (this.latestPanInfo = e),
                (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                sF((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if ($.test(e)) {
                    let { projection: i } = this.visualElement;
                    if (i && i.layout) {
                      let s = i.layout.layoutBox[t];
                      s && (e = sI(s) * (parseFloat(e) / 100));
                    }
                  }
                  this.originPoint[t] = e;
                }),
                n && th.postRender(() => n(t, e)),
                ie(this.visualElement, "transform");
              let { animationState: r } = this.visualElement;
              r && r.setActive("whileDrag", !0);
            },
            a = (t, e) => {
              (this.latestPointerEvent = t), (this.latestPanInfo = e);
              let {
                dragPropagation: i,
                dragDirectionLock: s,
                onDirectionLock: n,
                onDrag: r,
              } = this.getProps();
              if (!i && !this.openDragLock) return;
              let { offset: a } = e;
              if (s && null === this.currentDirection) {
                (this.currentDirection = (function (t, e = 10) {
                  let i = null;
                  return (
                    Math.abs(t.y) > e
                      ? (i = "y")
                      : Math.abs(t.x) > e && (i = "x"),
                    i
                  );
                })(a)),
                  null !== this.currentDirection &&
                    n &&
                    n(this.currentDirection);
                return;
              }
              this.updateAxis("x", e.point, a),
                this.updateAxis("y", e.point, a),
                this.visualElement.render(),
                r && r(t, e);
            },
            o = (t, e) => {
              (this.latestPointerEvent = t),
                (this.latestPanInfo = e),
                this.stop(t, e),
                (this.latestPointerEvent = null),
                (this.latestPanInfo = null);
            },
            l = () =>
              sF(
                (t) =>
                  "paused" === this.getAnimationState(t) &&
                  this.getAxisMotionValue(t).animation?.play()
              ),
            { dragSnapToOrigin: h } = this.getProps();
          this.panSession = new sU(
            t,
            {
              onSessionStart: n,
              onStart: r,
              onMove: a,
              onSessionEnd: o,
              resumeAnimation: l,
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: h,
              distanceThreshold: i,
              contextWindow: s_(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = t || this.latestPointerEvent,
            s = e || this.latestPanInfo,
            n = this.isDragging;
          if ((this.cancel(), !n || !s || !i)) return;
          let { velocity: r } = s;
          this.startAnimation(r);
          let { onDragEnd: a } = this.getProps();
          a && th.postRender(() => a(i, s));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: s } = this.getProps();
          if (!i || !sQ(t, s, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, s) {
              return (
                void 0 !== e && t < e
                  ? (t = s ? S(e, t, s.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = s ? S(i, t, s.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            n.set(r);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            s = this.constraints;
          t && e5(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: s, right: n }
              ) {
                return { x: sG(t.x, i, n), y: sG(t.y, e, s) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: sX(t, "left", "right"), y: sX(t, "top", "bottom") }
              );
            })(e)),
            s !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              sF((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !e5(e)) return !1;
          let s = e.current;
          Z(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
            "drag-constraints-ref"
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let r = (function (t, e, i) {
              let s = V(t, i),
                { scroll: n } = e;
              return n && (k(s.x, n.offset.x), k(s.y, n.offset.y)), s;
            })(s, n.root, this.visualElement.getTransformPagePoint()),
            a =
              ((t = n.layout.layoutBox), { x: sY(t.x, r.x), y: sY(t.y, r.y) });
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(a)
            );
            (this.hasMutatedConstraints = !!t), t && (a = b(t));
          }
          return a;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: n,
              dragSnapToOrigin: r,
              onDragTransitionEnd: a,
            } = this.getProps(),
            o = this.constraints || {};
          return Promise.all(
            sF((a) => {
              if (!sQ(a, e, this.currentDirection)) return;
              let l = (o && o[a]) || {};
              r && (l = { min: 0, max: 0 });
              let h = {
                type: "inertia",
                velocity: i ? t[a] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(a, h);
            })
          ).then(a);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            ie(this.visualElement, t),
            i.start(sp(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          sF((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          sF((t) => this.getAxisMotionValue(t).animation?.pause());
        }
        getAnimationState(t) {
          return this.getAxisMotionValue(t).animation?.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          sF((e) => {
            let { drag: i } = this.getProps();
            if (!sQ(e, i, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (s && s.layout) {
              let { min: i, max: r } = s.layout.layoutBox[e];
              n.set(t[e] - S(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!e5(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          sF((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              s[t] = (function (t, e) {
                let i = 0.5,
                  s = sI(t),
                  n = sI(e);
                return (
                  n > s
                    ? (i = iK(e.min, e.max - s, t.min))
                    : s > n && (i = iK(t.min, t.max - n, e.min)),
                  O(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            sF((e) => {
              if (!sQ(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: r } = this.constraints[e];
              i.set(S(n, r, s[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          sK.set(this.visualElement, this);
          let t = sk(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              e5(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            s = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            th.read(e);
          let n = sE(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            r = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (sF((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), t(), s(), r && r();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: n = !1,
              dragElastic: r = 0.35,
              dragMomentum: a = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: n,
            dragElastic: r,
            dragMomentum: a,
          };
        }
      }
      function sQ(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class sJ extends sS {
        constructor(t) {
          super(t),
            (this.removeGroupControls = tn),
            (this.removeListeners = tn),
            (this.controls = new sZ(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tn);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let s0 = (t) => (e, i) => {
        t && th.postRender(() => t(e, i));
      };
      class s1 extends sS {
        constructor() {
          super(...arguments), (this.removePointerDownListener = tn);
        }
        onPointerDown(t) {
          this.session = new sU(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: s_(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: s,
          } = this.node.getProps();
          return {
            onSessionStart: s0(t),
            onStart: s0(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, s && th.postRender(() => s(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = sk(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var s2 = i(5601);
      let s5 = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function s3(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let s4 = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t)
              if (!H.test(t)) return t;
              else t = parseFloat(t);
            let i = s3(t, e.target.x),
              s = s3(t, e.target.y);
            return `${i}% ${s}%`;
          },
        },
        s6 = !1;
      class s8 extends n.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: s,
            } = this.props,
            { projection: n } = t;
          for (let t in s7) (eS[t] = s7[t]), v(t) && (eS[t].isCSSVariable = !0);
          n &&
            (e.group && e.group.add(n),
            i && i.register && s && i.register(n),
            s6 && n.root.didUpdate(),
            n.addEventListener("animationComplete", () => {
              this.safeToRemove();
            }),
            n.setOptions({
              ...n.options,
              onExitComplete: () => this.safeToRemove(),
            })),
            (s5.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: s,
              isPresent: n,
            } = this.props,
            { projection: r } = i;
          return (
            r &&
              ((r.isPresent = n),
              (s6 = !0),
              s || t.layoutDependency !== e || void 0 === e || t.isPresent !== n
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent !== n &&
                (n
                  ? r.promote()
                  : r.relegate() ||
                    th.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            t8.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: s } = t;
          (s6 = !0),
            s &&
              (s.scheduleCheckAfterUnmount(),
              e && e.group && e.group.remove(s),
              i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function s9(t) {
        let [e, i] = (0, s2.xQ)(),
          s = (0, n.useContext)(eF.L);
        return (0, eB.jsx)(s8, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, n.useContext)(e4),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let s7 = {
        borderRadius: {
          ...s4,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: s4,
        borderTopRightRadius: s4,
        borderBottomLeftRadius: s4,
        borderBottomRightRadius: s4,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let s = t_.parse(t);
            if (s.length > 5) return t;
            let n = t_.createTransformer(t),
              r = +("number" != typeof s[0]),
              a = i.x.scale * e.x,
              o = i.y.scale * e.y;
            (s[0 + r] /= a), (s[1 + r] /= o);
            let l = S(a, o, 0.5);
            return (
              "number" == typeof s[2 + r] && (s[2 + r] /= l),
              "number" == typeof s[3 + r] && (s[3 + r] /= l),
              n(s)
            );
          },
        },
      };
      var nt = i(3142);
      function ne(t) {
        return (0, nt.G)(t) && "ownerSVGElement" in t;
      }
      let ni = (t, e) => t.depth - e.depth;
      class ns {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          t0(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          t1(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(ni),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let nn = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nr = nn.length,
        na = (t) => ("string" == typeof t ? parseFloat(t) : t),
        no = (t) => "number" == typeof t || H.test(t);
      function nl(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nh = nd(0, 0.5, iN),
        nu = nd(0.5, 0.95, tn);
      function nd(t, e, i) {
        return (s) => (s < t ? 0 : s > e ? 1 : i(iK(t, e, s)));
      }
      function nc(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function np(t, e) {
        nc(t.x, e.x), nc(t.y, e.y);
      }
      function ng(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function nm(t, e, i, s, n) {
        return (
          (t -= e),
          (t = s + (1 / i) * (t - s)),
          void 0 !== n && (t = s + (1 / n) * (t - s)),
          t
        );
      }
      function nf(t, e, [i, s, n], r, a) {
        !(function (t, e = 0, i = 1, s = 0.5, n, r = t, a = t) {
          if (
            ($.test(e) &&
              ((e = parseFloat(e)), (e = S(a.min, a.max, e / 100) - a.min)),
            "number" != typeof e)
          )
            return;
          let o = S(r.min, r.max, s);
          t === r && (o -= e),
            (t.min = nm(t.min, e, i, o, n)),
            (t.max = nm(t.max, e, i, o, n));
        })(t, e[i], e[s], e[n], e.scale, r, a);
      }
      let ny = ["x", "scaleX", "originX"],
        nv = ["y", "scaleY", "originY"];
      function nx(t, e, i, s) {
        nf(t.x, e, ny, i ? i.x : void 0, s ? s.x : void 0),
          nf(t.y, e, nv, i ? i.y : void 0, s ? s.y : void 0);
      }
      function nw(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nP(t) {
        return nw(t.x) && nw(t.y);
      }
      function nb(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function nS(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function nT(t, e) {
        return nS(t.x, e.x) && nS(t.y, e.y);
      }
      function nC(t) {
        return sI(t.x) / sI(t.y);
      }
      function nM(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class nA {
        constructor() {
          this.members = [];
        }
        add(t) {
          t0(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (t1(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e,
            i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let nE = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        nD = ["", "X", "Y", "Z"],
        nR = 0;
      function nk(t, e, i, s) {
        let { latestValues: n } = e;
        n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
      }
      function nI({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = e?.()) {
            (this.id = nR++),
              (this.animationId = 0),
              (this.animationCommitId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  to.value &&
                    (nE.nodes =
                      nE.calculatedTargetDeltas =
                      nE.calculatedProjections =
                        0),
                  this.nodes.forEach(nj),
                  this.nodes.forEach(n$),
                  this.nodes.forEach(nH),
                  this.nodes.forEach(nO),
                  to.addProjectionMetrics && to.addProjectionMetrics(nE);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ns());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new t2()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e) {
            if (this.instance) return;
            (this.isSVG = ne(e) && !(ne(e) && "svg" === e.tagName)),
              (this.instance = e);
            let { layoutId: i, layout: s, visualElement: n } = this.options;
            if (
              (n && !n.current && n.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              this.root.hasTreeAnimated &&
                (s || i) &&
                (this.isLayoutDirty = !0),
              t)
            ) {
              let i,
                s = 0,
                n = () => (this.root.updateBlockedByResize = !1);
              th.read(() => {
                s = window.innerWidth;
              }),
                t(e, () => {
                  let t = window.innerWidth;
                  t !== s &&
                    ((s = t),
                    (this.root.updateBlockedByResize = !0),
                    i && i(),
                    (i = (function (t, e) {
                      let i = tJ.now(),
                        s = ({ timestamp: e }) => {
                          let n = e - i;
                          n >= 250 && (tu(s), t(n - 250));
                        };
                      return th.setup(s, !0), () => tu(s);
                    })(n, 250)),
                    s5.hasAnimatedSinceResize &&
                      ((s5.hasAnimatedSinceResize = !1),
                      this.nodes.forEach(nU)));
                });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                n &&
                (i || s) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: s,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        n.getDefaultTransition() ||
                        nq,
                      {
                        onLayoutAnimationStart: a,
                        onLayoutAnimationComplete: o,
                      } = n.getProps(),
                      l = !this.targetLayout || !nT(this.targetLayout, s),
                      h = !e && i;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      h ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0));
                      let e = { ...e7(r, "layout"), onPlay: a, onComplete: o };
                      (n.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e),
                        this.setAnimationOrigin(t, h);
                    } else
                      e || nU(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = s;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              this.eventHandlers.clear(),
              tu(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(nz),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let s = i.props[e3];
                  if (window.MotionHasOptimisedAnimation(s, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      s,
                      "transform",
                      th,
                      !(t || i)
                    );
                  }
                  let { parent: n } = e;
                  n && !n.hasCheckedOptimisedAppear && t(n);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let s = this.getTransformTemplate();
            (this.prevTransformTemplateValue = s
              ? s(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nF);
              return;
            }
            if (this.animationId <= this.animationCommitId)
              return void this.nodes.forEach(n_);
            (this.animationCommitId = this.animationId),
              this.isUpdating
                ? ((this.isUpdating = !1),
                  this.nodes.forEach(nW),
                  this.nodes.forEach(nL),
                  this.nodes.forEach(nV))
                : this.nodes.forEach(n_),
              this.clearAllSnapshots();
            let t = tJ.now();
            (td.delta = O(0, 1e3 / 60, t - td.timestamp)),
              (td.timestamp = t),
              (td.isProcessing = !0),
              tc.update.process(td),
              tc.preRender.process(td),
              tc.render.process(td),
              (td.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), t8.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nB), this.sharedNodes.forEach(nN);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              th.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            th.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot &&
              this.instance &&
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                sI(this.snapshot.measuredBox.x) ||
                sI(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = es()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e && this.instance)
            ) {
              let e = s(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!n) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !nP(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, "") : void 0,
              r = s !== this.prevTransformTemplateValue;
            t &&
              this.instance &&
              (e || M(this.latestValues) || r) &&
              (n(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              t && (s = this.removeTransform(s)),
              nQ((e = s).x),
              nQ(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return es();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(n0))) {
              let { scroll: t } = this.root;
              t && (k(e.x, t.offset.x), k(e.y, t.offset.y));
            }
            return e;
          }
          removeElementScroll(t) {
            let e = es();
            if ((np(e, t), this.scroll?.wasRoot)) return e;
            for (let i = 0; i < this.path.length; i++) {
              let s = this.path[i],
                { scroll: n, options: r } = s;
              s !== this.root &&
                n &&
                r.layoutScroll &&
                (n.wasRoot && np(e, t), k(e.x, n.offset.x), k(e.y, n.offset.y));
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = es();
            np(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let s = this.path[t];
              !e &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                L(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                M(s.latestValues) && L(i, s.latestValues);
            }
            return M(this.latestValues) && L(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = es();
            np(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !M(i.latestValues)) continue;
              C(i.latestValues) && i.updateSnapshot();
              let s = es();
              np(s, i.measurePageBox()),
                nx(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  s
                );
            }
            return M(this.latestValues) && nx(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== td.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            let e = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = e.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = e.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
            let i = !!this.resumingFrom || this !== e;
            if (
              !(
                t ||
                (i && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                this.parent?.isProjectionDirty ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: s, layoutId: n } = this.options;
            if (this.layout && (s || n)) {
              if (
                ((this.resolvedRelativeTargetAt = td.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = es()),
                    (this.relativeTargetOrigin = es()),
                    sB(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    np(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = es()), (this.targetWithTransforms = es())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                ) {
                  var r, a, o;
                  this.forceRelativeParentToResolveTarget(),
                    (r = this.target),
                    (a = this.relativeTarget),
                    (o = this.relativeParent.target),
                    sj(r.x, a.x, o.x),
                    sj(r.y, a.y, o.y);
                } else
                  this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : np(this.target, this.layout.layoutBox),
                      R(this.target, this.targetDelta))
                    : np(this.target, this.layout.layoutBox);
                if (this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = es()),
                      (this.relativeTargetOrigin = es()),
                      sB(this.relativeTargetOrigin, this.target, t.target),
                      np(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                to.value && nE.calculatedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            if (
              !(
                !this.parent ||
                C(this.parent.latestValues) ||
                A(this.parent.latestValues)
              )
            )
              if (this.parent.isProjecting()) return this.parent;
              else return this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            let t = this.getLead(),
              e = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
                (i = !1),
              e &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === td.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: s, layoutId: n } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(s || n))
            )
              return;
            np(this.layoutCorrected, this.layout.layoutBox);
            let r = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, s = !1) {
              let n,
                r,
                a = i.length;
              if (a) {
                e.x = e.y = 1;
                for (let o = 0; o < a; o++) {
                  r = (n = i[o]).projectionDelta;
                  let { visualElement: a } = n.options;
                  (!a ||
                    !a.props.style ||
                    "contents" !== a.props.style.display) &&
                    (s &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      L(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), R(t, r)),
                    s && M(n.latestValues) && L(t, n.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, e),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = es()));
            let { target: o } = t;
            if (!o) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (ng(this.prevProjectionDelta.x, this.projectionDelta.x),
                ng(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              sV(
                this.projectionDelta,
                this.layoutCorrected,
                o,
                this.latestValues
              ),
              (this.treeScale.x === r &&
                this.treeScale.y === a &&
                nM(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                nM(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", o)),
              to.value && nE.calculatedProjections++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if ((this.options.visualElement?.scheduleRender(), t)) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = ee()),
              (this.projectionDelta = ee()),
              (this.projectionDeltaWithTransform = ee());
          }
          setAnimationOrigin(t, e = !1) {
            let i,
              s = this.snapshot,
              n = s ? s.latestValues : {},
              r = { ...this.latestValues },
              a = ee();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let o = es(),
              l =
                (s ? s.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              h = this.getStack(),
              u = !h || h.members.length <= 1,
              d = !!(
                l &&
                !u &&
                !0 === this.options.crossfade &&
                !this.path.some(nX)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let s = e / 1e3;
                if (
                  (nG(a.x, t.x, s),
                  nG(a.y, t.y, s),
                  this.setTargetDelta(a),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var h, c, p, g, m, f;
                  sB(
                    o,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (g = this.relativeTargetOrigin),
                    (m = o),
                    (f = s),
                    nY(p.x, g.x, m.x, f),
                    nY(p.y, g.y, m.y, f),
                    i &&
                      ((h = this.relativeTarget),
                      (c = i),
                      nb(h.x, c.x) && nb(h.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = es()),
                    np(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = r),
                  (function (t, e, i, s, n, r) {
                    n
                      ? ((t.opacity = S(0, i.opacity ?? 1, nh(s))),
                        (t.opacityExit = S(e.opacity ?? 1, 0, nu(s))))
                      : r && (t.opacity = S(e.opacity ?? 1, i.opacity ?? 1, s));
                    for (let n = 0; n < nr; n++) {
                      let r = `border${nn[n]}Radius`,
                        a = nl(e, r),
                        o = nl(i, r);
                      (void 0 !== a || void 0 !== o) &&
                        (a || (a = 0),
                        o || (o = 0),
                        0 === a || 0 === o || no(a) === no(o)
                          ? ((t[r] = Math.max(S(na(a), na(o), s), 0)),
                            ($.test(o) || $.test(a)) && (t[r] += "%"))
                          : (t[r] = o));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = S(e.rotate || 0, i.rotate || 0, s));
                  })(r, n, this.latestValues, s, d, u)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s);
              }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation?.stop(),
              this.resumingFrom?.currentAnimation?.stop(),
              this.pendingAnimation &&
                (tu(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = th.update(() => {
                (s5.hasAnimatedSinceResize = !0),
                  io.layout++,
                  this.motionValue || (this.motionValue = t4(0)),
                  (this.currentAnimation = (function (t, e, i) {
                    let s = tZ(t) ? t : t4(t);
                    return s.start(sp("", s, e, i)), s.animation;
                  })(this.motionValue, [0, 1e3], {
                    ...t,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onStop: () => {
                      io.layout--;
                    },
                    onComplete: () => {
                      io.layout--,
                        t.onComplete && t.onComplete(),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: s,
                latestValues: n,
              } = t;
            if (e && i && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                nJ(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox
                )
              ) {
                i = this.target || es();
                let e = sI(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let s = sI(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
              }
              np(e, i),
                L(e, n),
                sV(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nA()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            let { layoutId: t } = this.options;
            return (t && this.getStack()?.lead) || this;
          }
          getPrevLead() {
            let { layoutId: t } = this.options;
            return t ? this.getStack()?.prevLead : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let s = this.getStack();
            s && s.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let s = {};
            i.z && nk("z", t, s, this.animationValues);
            for (let e = 0; e < nD.length; e++)
              nk(`rotate${nD[e]}`, t, s, this.animationValues),
                nk(`skew${nD[e]}`, t, s, this.animationValues);
            for (let e in (t.render(), s))
              t.setStaticValue(e, s[e]),
                this.animationValues && (this.animationValues[e] = s[e]);
            t.scheduleRender();
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
              t.visibility = "hidden";
              return;
            }
            let i = this.getTransformTemplate();
            if (this.needsReset) {
              (this.needsReset = !1),
                (t.visibility = ""),
                (t.opacity = ""),
                (t.pointerEvents = eZ(e?.pointerEvents) || ""),
                (t.transform = i ? i(this.latestValues, "") : "none");
              return;
            }
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              this.options.layoutId &&
                ((t.opacity =
                  void 0 !== this.latestValues.opacity
                    ? this.latestValues.opacity
                    : 1),
                (t.pointerEvents = eZ(e?.pointerEvents) || "")),
                this.hasProjected &&
                  !M(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1));
              return;
            }
            t.visibility = "";
            let n = s.animationValues || s.latestValues;
            this.applyTransformsToTarget();
            let r = (function (t, e, i) {
              let s = "",
                n = t.x.translate / e.x,
                r = t.y.translate / e.y,
                a = i?.z || 0;
              if (
                ((n || r || a) && (s = `translate3d(${n}px, ${r}px, ${a}px) `),
                (1 !== e.x || 1 !== e.y) &&
                  (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                i)
              ) {
                let {
                  transformPerspective: t,
                  rotate: e,
                  rotateX: n,
                  rotateY: r,
                  skewX: a,
                  skewY: o,
                } = i;
                t && (s = `perspective(${t}px) ${s}`),
                  e && (s += `rotate(${e}deg) `),
                  n && (s += `rotateX(${n}deg) `),
                  r && (s += `rotateY(${r}deg) `),
                  a && (s += `skewX(${a}deg) `),
                  o && (s += `skewY(${o}deg) `);
              }
              let o = t.x.scale * e.x,
                l = t.y.scale * e.y;
              return (
                (1 !== o || 1 !== l) && (s += `scale(${o}, ${l})`), s || "none"
              );
            })(this.projectionDeltaWithTransform, this.treeScale, n);
            i && (r = i(n, r)), (t.transform = r);
            let { x: a, y: o } = this.projectionDelta;
            for (let e in ((t.transformOrigin = `${100 * a.origin}% ${
              100 * o.origin
            }% 0`),
            s.animationValues
              ? (t.opacity =
                  s === this
                    ? n.opacity ?? this.latestValues.opacity ?? 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : n.opacityExit)
              : (t.opacity =
                  s === this
                    ? void 0 !== n.opacity
                      ? n.opacity
                      : ""
                    : void 0 !== n.opacityExit
                    ? n.opacityExit
                    : 0),
            eS)) {
              if (void 0 === n[e]) continue;
              let { correct: i, applyTo: a, isCSSVariable: o } = eS[e],
                l = "none" === r ? n[e] : i(n[e], s);
              if (a) {
                let e = a.length;
                for (let i = 0; i < e; i++) t[a[i]] = l;
              } else
                o
                  ? (this.options.visualElement.renderState.vars[e] = l)
                  : (t[e] = l);
            }
            this.options.layoutId &&
              (t.pointerEvents =
                s === this ? eZ(e?.pointerEvents) || "" : "none");
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => t.currentAnimation?.stop()),
              this.root.nodes.forEach(nF),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nL(t) {
        t.updateLayout();
      }
      function nV(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          let { layoutBox: i, measuredBox: s } = t.layout,
            { animationType: n } = t.options,
            r = e.source !== t.layout.source;
          "size" === n
            ? sF((t) => {
                let s = r ? e.measuredBox[t] : e.layoutBox[t],
                  n = sI(s);
                (s.min = i[t].min), (s.max = s.min + n);
              })
            : nJ(n, e.layoutBox, i) &&
              sF((s) => {
                let n = r ? e.measuredBox[s] : e.layoutBox[s],
                  a = sI(i[s]);
                (n.max = n.min + a),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[s].max = t.relativeTarget[s].min + a));
              });
          let a = ee();
          sV(a, i, e.layoutBox);
          let o = ee();
          r
            ? sV(o, t.applyTransform(s, !0), e.measuredBox)
            : sV(o, i, e.layoutBox);
          let l = !nP(a),
            h = !1;
          if (!t.resumeFrom) {
            let s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: n, layout: r } = s;
              if (n && r) {
                let a = es();
                sB(a, e.layoutBox, n.layoutBox);
                let o = es();
                sB(o, i, r.layoutBox),
                  nT(a, o) || (h = !0),
                  s.options.layoutRoot &&
                    ((t.relativeTarget = o),
                    (t.relativeTargetOrigin = a),
                    (t.relativeParent = s));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: e,
            delta: o,
            layoutDelta: a,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: h,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function nj(t) {
        to.value && nE.nodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nO(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nB(t) {
        t.clearSnapshot();
      }
      function nF(t) {
        t.clearMeasurements();
      }
      function n_(t) {
        t.isLayoutDirty = !1;
      }
      function nW(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function nU(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function n$(t) {
        t.resolveTargetDelta();
      }
      function nH(t) {
        t.calcProjection();
      }
      function nz(t) {
        t.resetSkewAndRotation();
      }
      function nN(t) {
        t.removeLeadSnapshot();
      }
      function nG(t, e, i) {
        (t.translate = S(e.translate, 0, i)),
          (t.scale = S(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function nY(t, e, i, s) {
        (t.min = S(e.min, i.min, s)), (t.max = S(e.max, i.max, s));
      }
      function nX(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let nq = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nK = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        nZ = nK("applewebkit/") && !nK("chrome/") ? Math.round : tn;
      function nQ(t) {
        (t.min = nZ(t.min)), (t.max = nZ(t.max));
      }
      function nJ(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(nC(e) - nC(i))))
        );
      }
      function n0(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      let n1 = nI({
          attachResizeListener: (t, e) => sE(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        n2 = { current: void 0 },
        n5 = nI({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!n2.current) {
              let t = new n1({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (n2.current = t);
            }
            return n2.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function n3(t, e) {
        let i = (function (t, e, i) {
            if (t instanceof EventTarget) return [t];
            if ("string" == typeof t) {
              let e = document,
                i = void 0 ?? e.querySelectorAll(t);
              return i ? Array.from(i) : [];
            }
            return Array.from(t);
          })(t),
          s = new AbortController();
        return [i, { passive: !0, ...e, signal: s.signal }, () => s.abort()];
      }
      function n4(t) {
        return !("touch" === t.pointerType || sA.x || sA.y);
      }
      function n6(t, e, i) {
        let { props: s } = t;
        t.animationState &&
          s.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let n = s["onHover" + i];
        n && th.postRender(() => n(e, sR(e)));
      }
      class n8 extends sS {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [s, n, r] = n3(t, i),
                a = (t) => {
                  if (!n4(t)) return;
                  let { target: i } = t,
                    s = e(i, t);
                  if ("function" != typeof s || !i) return;
                  let r = (t) => {
                    n4(t) && (s(t), i.removeEventListener("pointerleave", r));
                  };
                  i.addEventListener("pointerleave", r, n);
                };
              return (
                s.forEach((t) => {
                  t.addEventListener("pointerenter", a, n);
                }),
                r
              );
            })(
              t,
              (t, e) => (
                n6(this.node, e, "Start"), (t) => n6(this.node, t, "End")
              )
            ));
        }
        unmount() {}
      }
      class n9 extends sS {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = ir(
            sE(this.node.current, "focus", () => this.onFocus()),
            sE(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      var n7 = i(1402);
      let rt = (t, e) => !!e && (t === e || rt(t, e.parentElement)),
        re = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        ri = new WeakSet();
      function rs(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function rn(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      function rr(t) {
        return sD(t) && !(sA.x || sA.y);
      }
      function ra(t, e, i) {
        let { props: s } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          s.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let n = s["onTap" + ("End" === i ? "" : i)];
        n && th.postRender(() => n(e, sR(e)));
      }
      class ro extends sS {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [s, n, r] = n3(t, i),
                a = (t) => {
                  let s = t.currentTarget;
                  if (!rr(t)) return;
                  ri.add(s);
                  let r = e(s, t),
                    a = (t, e) => {
                      window.removeEventListener("pointerup", o),
                        window.removeEventListener("pointercancel", l),
                        ri.has(s) && ri.delete(s),
                        rr(t) && "function" == typeof r && r(t, { success: e });
                    },
                    o = (t) => {
                      a(
                        t,
                        s === window ||
                          s === document ||
                          i.useGlobalTarget ||
                          rt(s, t.target)
                      );
                    },
                    l = (t) => {
                      a(t, !1);
                    };
                  window.addEventListener("pointerup", o, n),
                    window.addEventListener("pointercancel", l, n);
                };
              return (
                s.forEach((t) => {
                  ((i.useGlobalTarget ? window : t).addEventListener(
                    "pointerdown",
                    a,
                    n
                  ),
                  (0, n7.s)(t)) &&
                    (t.addEventListener("focus", (t) =>
                      ((t, e) => {
                        let i = t.currentTarget;
                        if (!i) return;
                        let s = rs(() => {
                          if (ri.has(i)) return;
                          rn(i, "down");
                          let t = rs(() => {
                            rn(i, "up");
                          });
                          i.addEventListener("keyup", t, e),
                            i.addEventListener(
                              "blur",
                              () => rn(i, "cancel"),
                              e
                            );
                        });
                        i.addEventListener("keydown", s, e),
                          i.addEventListener(
                            "blur",
                            () => i.removeEventListener("keydown", s),
                            e
                          );
                      })(t, n)
                    ),
                    re.has(t.tagName) ||
                      -1 !== t.tabIndex ||
                      t.hasAttribute("tabindex") ||
                      (t.tabIndex = 0));
                }),
                r
              );
            })(
              t,
              (t, e) => (
                ra(this.node, e, "Start"),
                (t, { success: e }) => ra(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let rl = new WeakMap(),
        rh = new WeakMap(),
        ru = (t) => {
          let e = rl.get(t.target);
          e && e(t);
        },
        rd = (t) => {
          t.forEach(ru);
        },
        rc = { some: 0, all: 1 };
      class rp extends sS {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: s = "some", once: n } = t,
            r = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof s ? s : rc[s],
            },
            a = (t) => {
              let { isIntersecting: e } = t;
              if (
                this.isInView === e ||
                ((this.isInView = e), n && !e && this.hasEnteredView)
              )
                return;
              e && (this.hasEnteredView = !0),
                this.node.animationState &&
                  this.node.animationState.setActive("whileInView", e);
              let { onViewportEnter: i, onViewportLeave: s } =
                  this.node.getProps(),
                r = e ? i : s;
              r && r(t);
            };
          var o = this.node.current;
          let l = (function ({ root: t, ...e }) {
            let i = t || document;
            rh.has(i) || rh.set(i, {});
            let s = rh.get(i),
              n = JSON.stringify(e);
            return (
              s[n] || (s[n] = new IntersectionObserver(rd, { root: t, ...e })),
              s[n]
            );
          })(r);
          return (
            rl.set(o, a),
            l.observe(o),
            () => {
              rl.delete(o), l.unobserve(o);
            }
          );
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let rg = (function (t, e) {
        if ("undefined" == typeof Proxy) return e8;
        let i = new Map(),
          s = (i, s) => e8(i, s, t, e);
        return new Proxy((t, e) => s(t, e), {
          get: (n, r) =>
            "create" === r
              ? s
              : (i.has(r) || i.set(r, e8(r, void 0, t, e)), i.get(r)),
        });
      })(
        {
          animation: { Feature: sT },
          exit: { Feature: sM },
          inView: { Feature: rp },
          tap: { Feature: ro },
          focus: { Feature: n9 },
          hover: { Feature: n8 },
          pan: { Feature: s1 },
          drag: { Feature: sJ, ProjectionNode: n5, MeasureLayout: s9 },
          layout: { ProjectionNode: n5, MeasureLayout: s9 },
        },
        (t, e) =>
          eO(t) ? new eV(e) : new eM(e, { allowProjection: t !== n.Fragment })
      );
    },
    1124: (t, e) => {
      "use strict";
      function i(t) {
        var e;
        let { config: i, src: s, width: n, quality: r } = t,
          a =
            r ||
            (null == (e = i.qualities)
              ? void 0
              : e.reduce((t, e) =>
                  Math.abs(e - 75) < Math.abs(t - 75) ? e : t
                )) ||
            75;
        return s;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }),
        (i.__next_img_default = !0);
      let s = i;
    },
    1262: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let s = i(2115),
        n = s.useLayoutEffect,
        r = s.useEffect;
      function a(t) {
        let { headManager: e, reduceComponentsToState: i } = t;
        function a() {
          if (e && e.mountedInstances) {
            let n = s.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean)
            );
            e.updateHead(i(n, t));
          }
        }
        return (
          n(() => {
            var i;
            return (
              null == e ||
                null == (i = e.mountedInstances) ||
                i.add(t.children),
              () => {
                var i;
                null == e ||
                  null == (i = e.mountedInstances) ||
                  i.delete(t.children);
              }
            );
          }),
          n(
            () => (
              e && (e._pendingUpdate = a),
              () => {
                e && (e._pendingUpdate = a);
              }
            )
          ),
          r(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    1356: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let s = i(8140),
        n = i(9417),
        r = i(5155),
        a = n._(i(2115)),
        o = s._(i(7650)),
        l = s._(i(4841)),
        h = i(5040),
        u = i(821),
        d = i(3455);
      i(4781);
      let c = i(9862),
        p = s._(i(1124)),
        g = i(3011),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function f(t, e, i, s, n, r, a) {
        let o = null == t ? void 0 : t.src;
        t &&
          t["data-loaded-src"] !== o &&
          ((t["data-loaded-src"] = o),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && n(!0), null == i ? void 0 : i.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let s = !1,
                    n = !1;
                  i.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => s,
                    isPropagationStopped: () => n,
                    persist: () => {},
                    preventDefault: () => {
                      (s = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (n = !0), e.stopPropagation();
                    },
                  });
                }
                (null == s ? void 0 : s.current) && s.current(t);
              }
            }));
      }
      function y(t) {
        return a.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      let v = (0, a.forwardRef)((t, e) => {
        let {
            src: i,
            srcSet: s,
            sizes: n,
            height: o,
            width: l,
            decoding: h,
            className: u,
            style: d,
            fetchPriority: c,
            placeholder: p,
            loading: m,
            unoptimized: v,
            fill: x,
            onLoadRef: w,
            onLoadingCompleteRef: P,
            setBlurComplete: b,
            setShowAltText: S,
            sizesInput: T,
            onLoad: C,
            onError: M,
            ...A
          } = t,
          E = (0, a.useCallback)(
            (t) => {
              t && (M && (t.src = t.src), t.complete && f(t, p, w, P, b, v, T));
            },
            [i, p, w, P, b, M, v, T]
          ),
          D = (0, g.useMergedRef)(e, E);
        return (0, r.jsx)("img", {
          ...A,
          ...y(c),
          loading: m,
          width: l,
          height: o,
          decoding: h,
          "data-nimg": x ? "fill" : "1",
          className: u,
          style: d,
          sizes: n,
          srcSet: s,
          src: i,
          ref: D,
          onLoad: (t) => {
            f(t.currentTarget, p, w, P, b, v, T);
          },
          onError: (t) => {
            S(!0), "empty" !== p && b(!0), M && M(t);
          },
        });
      });
      function x(t) {
        let { isAppRouter: e, imgAttributes: i } = t,
          s = {
            as: "image",
            imageSrcSet: i.srcSet,
            imageSizes: i.sizes,
            crossOrigin: i.crossOrigin,
            referrerPolicy: i.referrerPolicy,
            ...y(i.fetchPriority),
          };
        return e && o.default.preload
          ? (o.default.preload(i.src, s), null)
          : (0, r.jsx)(l.default, {
              children: (0, r.jsx)(
                "link",
                { rel: "preload", href: i.srcSet ? void 0 : i.src, ...s },
                "__nimg-" + i.src + i.srcSet + i.sizes
              ),
            });
      }
      let w = (0, a.forwardRef)((t, e) => {
        let i = (0, a.useContext)(c.RouterContext),
          s = (0, a.useContext)(d.ImageConfigContext),
          n = (0, a.useMemo)(() => {
            var t;
            let e = m || s || u.imageConfigDefault,
              i = [...e.deviceSizes, ...e.imageSizes].sort((t, e) => t - e),
              n = e.deviceSizes.sort((t, e) => t - e),
              r = null == (t = e.qualities) ? void 0 : t.sort((t, e) => t - e);
            return { ...e, allSizes: i, deviceSizes: n, qualities: r };
          }, [s]),
          { onLoad: o, onLoadingComplete: l } = t,
          g = (0, a.useRef)(o);
        (0, a.useEffect)(() => {
          g.current = o;
        }, [o]);
        let f = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          f.current = l;
        }, [l]);
        let [y, w] = (0, a.useState)(!1),
          [P, b] = (0, a.useState)(!1),
          { props: S, meta: T } = (0, h.getImgProps)(t, {
            defaultLoader: p.default,
            imgConf: n,
            blurComplete: y,
            showAltText: P,
          });
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(v, {
              ...S,
              unoptimized: T.unoptimized,
              placeholder: T.placeholder,
              fill: T.fill,
              onLoadRef: g,
              onLoadingCompleteRef: f,
              setBlurComplete: w,
              setShowAltText: b,
              sizesInput: t.sizes,
              ref: e,
            }),
            T.priority
              ? (0, r.jsx)(x, { isAppRouter: !i, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1402: (t, e, i) => {
      "use strict";
      i.d(e, { s: () => n });
      var s = i(3142);
      function n(t) {
        return (0, s.G)(t) && "offsetHeight" in t;
      }
    },
    1407: (t, e, i) => {
      "use strict";
      i.d(e, { I: () => a });
      var s = i(2115),
        n = i(8662),
        r = i(4741);
      function a() {
        r.r.current || (0, n.U)();
        let [t] = (0, s.useState)(r.O.current);
        return t;
      }
    },
    3011: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let s = i(2115);
      function n(t, e) {
        let i = (0, s.useRef)(null),
          n = (0, s.useRef)(null);
        return (0, s.useCallback)(
          (s) => {
            if (null === s) {
              let t = i.current;
              t && ((i.current = null), t());
              let e = n.current;
              e && ((n.current = null), e());
            } else t && (i.current = r(t, s)), e && (n.current = r(e, s));
          },
          [t, e]
        );
      }
      function r(t, e) {
        if ("function" != typeof t)
          return (
            (t.current = e),
            () => {
              t.current = null;
            }
          );
        {
          let i = t(e);
          return "function" == typeof i ? i : () => t(null);
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    3127: (t, e, i) => {
      "use strict";
      i.d(e, { Q: () => s });
      let s = (0, i(2115).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    3142: (t, e, i) => {
      "use strict";
      function s(t) {
        return "object" == typeof t && null !== t;
      }
      i.d(e, { G: () => s });
    },
    3455: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let s = i(8140)._(i(2115)),
        n = i(821),
        r = s.default.createContext(n.imageConfigDefault);
    },
    3577: (t, e, i) => {
      "use strict";
      i.d(e, { B: () => s });
      let s = "undefined" != typeof window;
    },
    4105: (t, e) => {
      "use strict";
      function i(t) {
        let {
            widthInt: e,
            heightInt: i,
            blurWidth: s,
            blurHeight: n,
            blurDataURL: r,
            objectFit: a,
          } = t,
          o = s ? 40 * s : e,
          l = n ? 40 * n : i,
          h = o && l ? "viewBox='0 0 " + o + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          h +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (h
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          r +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    4416: (t, e, i) => {
      "use strict";
      i.d(e, { M: () => n });
      var s = i(2115);
      function n(t) {
        let e = (0, s.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    4652: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return o;
          },
        });
      let s = i(8140),
        n = i(5040),
        r = i(1356),
        a = s._(i(1124));
      function o(t) {
        let { props: e } = (0, n.getImgProps)(t, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
        return { props: e };
      }
      let l = r.Image;
    },
    4741: (t, e, i) => {
      "use strict";
      i.d(e, { O: () => s, r: () => n });
      let s = { current: null },
        n = { current: !1 };
    },
    4841: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return d;
          },
        });
      let s = i(8140),
        n = i(9417),
        r = i(5155),
        a = n._(i(2115)),
        o = s._(i(1262)),
        l = i(737),
        h = i(2073),
        u = i(861);
      function d(t) {
        void 0 === t && (t = !1);
        let e = [(0, r.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          t ||
            e.push(
              (0, r.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          e
        );
      }
      function c(t, e) {
        return "string" == typeof e || "number" == typeof e
          ? t
          : e.type === a.default.Fragment
          ? t.concat(
              a.default.Children.toArray(e.props.children).reduce(
                (t, e) =>
                  "string" == typeof e || "number" == typeof e
                    ? t
                    : t.concat(e),
                []
              )
            )
          : t.concat(e);
      }
      i(4781);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function g(t, e) {
        let { inAmpMode: i } = e;
        return t
          .reduce(c, [])
          .reverse()
          .concat(d(i).reverse())
          .filter(
            (function () {
              let t = new Set(),
                e = new Set(),
                i = new Set(),
                s = {};
              return (n) => {
                let r = !0,
                  a = !1;
                if (
                  n.key &&
                  "number" != typeof n.key &&
                  n.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let e = n.key.slice(n.key.indexOf("$") + 1);
                  t.has(e) ? (r = !1) : t.add(e);
                }
                switch (n.type) {
                  case "title":
                  case "base":
                    e.has(n.type) ? (r = !1) : e.add(n.type);
                    break;
                  case "meta":
                    for (let t = 0, e = p.length; t < e; t++) {
                      let e = p[t];
                      if (n.props.hasOwnProperty(e))
                        if ("charSet" === e) i.has(e) ? (r = !1) : i.add(e);
                        else {
                          let t = n.props[e],
                            i = s[e] || new Set();
                          ("name" !== e || !a) && i.has(t)
                            ? (r = !1)
                            : (i.add(t), (s[e] = i));
                        }
                    }
                }
                return r;
              };
            })()
          )
          .reverse()
          .map((t, e) => {
            let i = t.key || e;
            return a.default.cloneElement(t, { key: i });
          });
      }
      let m = function (t) {
        let { children: e } = t,
          i = (0, a.useContext)(l.AmpStateContext),
          s = (0, a.useContext)(h.HeadManagerContext);
        return (0, r.jsx)(o.default, {
          reduceComponentsToState: g,
          headManager: s,
          inAmpMode: (0, u.isInAmpMode)(i),
          children: e,
        });
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5040: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        i(4781);
      let s = i(4105),
        n = i(821),
        r = ["-moz-initial", "fill", "none", "scale-down", void 0];
      function a(t) {
        return void 0 !== t.default;
      }
      function o(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function l(t, e) {
        var i, l;
        let h,
          u,
          d,
          {
            src: c,
            sizes: p,
            unoptimized: g = !1,
            priority: m = !1,
            loading: f,
            className: y,
            quality: v,
            width: x,
            height: w,
            fill: P = !1,
            style: b,
            overrideSrc: S,
            onLoad: T,
            onLoadingComplete: C,
            placeholder: M = "empty",
            blurDataURL: A,
            fetchPriority: E,
            decoding: D = "async",
            layout: R,
            objectFit: k,
            objectPosition: I,
            lazyBoundary: L,
            lazyRoot: V,
            ...j
          } = t,
          { imgConf: O, showAltText: B, blurComplete: F, defaultLoader: _ } = e,
          W = O || n.imageConfigDefault;
        if ("allSizes" in W) h = W;
        else {
          let t = [...W.deviceSizes, ...W.imageSizes].sort((t, e) => t - e),
            e = W.deviceSizes.sort((t, e) => t - e),
            s = null == (i = W.qualities) ? void 0 : i.sort((t, e) => t - e);
          h = { ...W, allSizes: t, deviceSizes: e, qualities: s };
        }
        if (void 0 === _)
          throw Object.defineProperty(
            Error(
              "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
            ),
            "__NEXT_ERROR_CODE",
            { value: "E163", enumerable: !1, configurable: !0 }
          );
        let U = j.loader || _;
        delete j.loader, delete j.srcSet;
        let $ = "__next_img_default" in U;
        if ($) {
          if ("custom" === h.loader)
            throw Object.defineProperty(
              Error(
                'Image with src "' +
                  c +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              ),
              "__NEXT_ERROR_CODE",
              { value: "E252", enumerable: !1, configurable: !0 }
            );
        } else {
          let t = U;
          U = (e) => {
            let { config: i, ...s } = e;
            return t(s);
          };
        }
        if (R) {
          "fill" === R && (P = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[R];
          t && (b = { ...b, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[R];
          e && !p && (p = e);
        }
        let H = "",
          z = o(x),
          N = o(w);
        if ((l = c) && "object" == typeof l && (a(l) || void 0 !== l.src)) {
          let t = a(c) ? c.default : c;
          if (!t.src)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(t)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E460", enumerable: !1, configurable: !0 }
            );
          if (!t.height || !t.width)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(t)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E48", enumerable: !1, configurable: !0 }
            );
          if (
            ((u = t.blurWidth),
            (d = t.blurHeight),
            (A = A || t.blurDataURL),
            (H = t.src),
            !P)
          )
            if (z || N) {
              if (z && !N) {
                let e = z / t.width;
                N = Math.round(t.height * e);
              } else if (!z && N) {
                let e = N / t.height;
                z = Math.round(t.width * e);
              }
            } else (z = t.width), (N = t.height);
        }
        let G = !m && ("lazy" === f || void 0 === f);
        (!(c = "string" == typeof c ? c : H) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((g = !0), (G = !1)),
          h.unoptimized && (g = !0),
          $ &&
            !h.dangerouslyAllowSVG &&
            c.split("?", 1)[0].endsWith(".svg") &&
            (g = !0);
        let Y = o(v),
          X = Object.assign(
            P
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: k,
                  objectPosition: I,
                }
              : {},
            B ? {} : { color: "transparent" },
            b
          ),
          q =
            F || "empty" === M
              ? null
              : "blur" === M
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, s.getImageBlurSvg)({
                  widthInt: z,
                  heightInt: N,
                  blurWidth: u,
                  blurHeight: d,
                  blurDataURL: A || "",
                  objectFit: X.objectFit,
                }) +
                '")'
              : 'url("' + M + '")',
          K = r.includes(X.objectFit)
            ? "fill" === X.objectFit
              ? "100% 100%"
              : "cover"
            : X.objectFit,
          Z = q
            ? {
                backgroundSize: K,
                backgroundPosition: X.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: q,
              }
            : {},
          Q = (function (t) {
            let {
              config: e,
              src: i,
              unoptimized: s,
              width: n,
              quality: r,
              sizes: a,
              loader: o,
            } = t;
            if (s) return { src: i, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: h } = (function (t, e, i) {
                let { deviceSizes: s, allSizes: n } = t;
                if (i) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let s; (s = t.exec(i)); ) e.push(parseInt(s[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: n.filter((e) => e >= s[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: n, kind: "w" };
                }
                return "number" != typeof e
                  ? { widths: s, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => n.find((e) => e >= t) || n[n.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, n, a),
              u = l.length - 1;
            return {
              sizes: a || "w" !== h ? a : "100vw",
              srcSet: l
                .map(
                  (t, s) =>
                    o({ config: e, src: i, quality: r, width: t }) +
                    " " +
                    ("w" === h ? t : s + 1) +
                    h
                )
                .join(", "),
              src: o({ config: e, src: i, quality: r, width: l[u] }),
            };
          })({
            config: h,
            src: c,
            unoptimized: g,
            width: z,
            quality: Y,
            sizes: p,
            loader: U,
          });
        return {
          props: {
            ...j,
            loading: G ? "lazy" : f,
            fetchPriority: E,
            width: z,
            height: N,
            decoding: D,
            className: y,
            style: { ...X, ...Z },
            sizes: Q.sizes,
            srcSet: Q.srcSet,
            src: S || Q.src,
          },
          meta: { unoptimized: g, priority: m, placeholder: M, fill: P },
        };
      }
    },
    5239: (t, e, i) => {
      "use strict";
      i.d(e, { default: () => n.a });
      var s = i(4652),
        n = i.n(s);
    },
    5601: (t, e, i) => {
      "use strict";
      i.d(e, { xQ: () => r });
      var s = i(2115),
        n = i(9686);
      function r() {
        let t =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          e = (0, s.useContext)(n.t);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: r, register: a } = e,
          o = (0, s.useId)();
        (0, s.useEffect)(() => {
          if (t) return a(o);
        }, [t]);
        let l = (0, s.useCallback)(() => t && r && r(o), [o, r, t]);
        return !i && r ? [!1, l] : [!0];
      }
    },
    5768: function (t, e) {
      (function (t) {
        "use strict";
        class e {
          constructor(t, e) {
            (this.state = {
              angle: 0,
              area: [],
              position: { x: 0, y: 0 },
              hardAngle: 0,
              hardDrawingAngle: 0,
            }),
              (this.createdDensity = e),
              (this.nowDrawingDensity = this.createdDensity),
              (this.render = t);
          }
          setDensity(t) {
            (this.createdDensity = t), (this.nowDrawingDensity = t);
          }
          setDrawingDensity(t) {
            this.nowDrawingDensity = t;
          }
          setPosition(t) {
            this.state.position = t;
          }
          setAngle(t) {
            this.state.angle = t;
          }
          setArea(t) {
            this.state.area = t;
          }
          setHardDrawingAngle(t) {
            this.state.hardDrawingAngle = t;
          }
          setHardAngle(t) {
            (this.state.hardAngle = t), (this.state.hardDrawingAngle = t);
          }
          setOrientation(t) {
            this.orientation = t;
          }
          getDrawingDensity() {
            return this.nowDrawingDensity;
          }
          getDensity() {
            return this.createdDensity;
          }
          getHardAngle() {
            return this.state.hardAngle;
          }
        }
        class i extends e {
          constructor(t, e, i) {
            super(t, i),
              (this.image = null),
              (this.isLoad = !1),
              (this.loadingAngle = 0),
              (this.image = new Image()),
              (this.image.src = e);
          }
          draw(t) {
            let e = this.render.getContext(),
              i = this.render.convertToGlobal(this.state.position),
              s = this.render.getRect().pageWidth,
              n = this.render.getRect().height;
            for (let t of (e.save(),
            e.translate(i.x, i.y),
            e.beginPath(),
            this.state.area))
              null !== t &&
                ((t = this.render.convertToGlobal(t)),
                e.lineTo(t.x - i.x, t.y - i.y));
            e.rotate(this.state.angle),
              e.clip(),
              this.isLoad
                ? e.drawImage(this.image, 0, 0, s, n)
                : this.drawLoader(e, { x: 0, y: 0 }, s, n),
              e.restore();
          }
          simpleDraw(t) {
            let e = this.render.getRect(),
              i = this.render.getContext(),
              s = e.pageWidth,
              n = e.height,
              r = 1 === t ? e.left + e.pageWidth : e.left,
              a = e.top;
            this.isLoad
              ? i.drawImage(this.image, r, a, s, n)
              : this.drawLoader(i, { x: r, y: a }, s, n);
          }
          drawLoader(t, e, i, s) {
            t.beginPath(),
              (t.strokeStyle = "rgb(200, 200, 200)"),
              (t.fillStyle = "rgb(255, 255, 255)"),
              (t.lineWidth = 1),
              t.rect(e.x + 1, e.y + 1, i - 1, s - 1),
              t.stroke(),
              t.fill();
            let n = { x: e.x + i / 2, y: e.y + s / 2 };
            t.beginPath(),
              (t.lineWidth = 10),
              t.arc(
                n.x,
                n.y,
                20,
                this.loadingAngle,
                (3 * Math.PI) / 2 + this.loadingAngle
              ),
              t.stroke(),
              t.closePath(),
              (this.loadingAngle += 0.07),
              this.loadingAngle >= 2 * Math.PI && (this.loadingAngle = 0);
          }
          load() {
            this.isLoad ||
              (this.image.onload = () => {
                this.isLoad = !0;
              });
          }
          newTemporaryCopy() {
            return this;
          }
          getTemporaryCopy() {
            return this;
          }
          hideTemporaryCopy() {}
        }
        class s {
          constructor(t, e) {
            (this.pages = []),
              (this.currentPageIndex = 0),
              (this.currentSpreadIndex = 0),
              (this.landscapeSpread = []),
              (this.portraitSpread = []),
              (this.render = e),
              (this.app = t),
              (this.currentPageIndex = 0),
              (this.isShowCover = this.app.getSettings().showCover);
          }
          destroy() {
            this.pages = [];
          }
          createSpread() {
            (this.landscapeSpread = []), (this.portraitSpread = []);
            for (let t = 0; t < this.pages.length; t++)
              this.portraitSpread.push([t]);
            let t = 0;
            this.isShowCover &&
              (this.pages[0].setDensity("hard"),
              this.landscapeSpread.push([t]),
              t++);
            for (let e = t; e < this.pages.length; e += 2)
              e < this.pages.length - 1
                ? this.landscapeSpread.push([e, e + 1])
                : (this.landscapeSpread.push([e]),
                  this.pages[e].setDensity("hard"));
          }
          getSpread() {
            return "landscape" === this.render.getOrientation()
              ? this.landscapeSpread
              : this.portraitSpread;
          }
          getSpreadIndexByPage(t) {
            let e = this.getSpread();
            for (let i = 0; i < e.length; i++)
              if (t === e[i][0] || t === e[i][1]) return i;
            return null;
          }
          getPageCount() {
            return this.pages.length;
          }
          getPages() {
            return this.pages;
          }
          getPage(t) {
            if (t >= 0 && t < this.pages.length) return this.pages[t];
            throw Error("Invalid page number");
          }
          nextBy(t) {
            let e = this.pages.indexOf(t);
            return e < this.pages.length - 1 ? this.pages[e + 1] : null;
          }
          prevBy(t) {
            let e = this.pages.indexOf(t);
            return e > 0 ? this.pages[e - 1] : null;
          }
          getFlippingPage(t) {
            let e = this.currentSpreadIndex;
            if ("portrait" === this.render.getOrientation())
              return 0 === t
                ? this.pages[e].newTemporaryCopy()
                : this.pages[e - 1];
            {
              let i =
                0 === t ? this.getSpread()[e + 1] : this.getSpread()[e - 1];
              return 1 === i.length || 0 === t
                ? this.pages[i[0]]
                : this.pages[i[1]];
            }
          }
          getBottomPage(t) {
            let e = this.currentSpreadIndex;
            if ("portrait" === this.render.getOrientation())
              return 0 === t ? this.pages[e + 1] : this.pages[e - 1];
            {
              let i =
                0 === t ? this.getSpread()[e + 1] : this.getSpread()[e - 1];
              return 1 === i.length
                ? this.pages[i[0]]
                : 0 === t
                ? this.pages[i[1]]
                : this.pages[i[0]];
            }
          }
          showNext() {
            this.currentSpreadIndex < this.getSpread().length &&
              (this.currentSpreadIndex++, this.showSpread());
          }
          showPrev() {
            this.currentSpreadIndex > 0 &&
              (this.currentSpreadIndex--, this.showSpread());
          }
          getCurrentPageIndex() {
            return this.currentPageIndex;
          }
          show(t = null) {
            if (
              (null === t && (t = this.currentPageIndex),
              t < 0 || t >= this.pages.length)
            )
              return;
            let e = this.getSpreadIndexByPage(t);
            null !== e && ((this.currentSpreadIndex = e), this.showSpread());
          }
          getCurrentSpreadIndex() {
            return this.currentSpreadIndex;
          }
          setCurrentSpreadIndex(t) {
            if (!(t >= 0 && t < this.getSpread().length))
              throw Error("Invalid page");
            this.currentSpreadIndex = t;
          }
          showSpread() {
            let t = this.getSpread()[this.currentSpreadIndex];
            2 === t.length
              ? (this.render.setLeftPage(this.pages[t[0]]),
                this.render.setRightPage(this.pages[t[1]]))
              : "landscape" === this.render.getOrientation() &&
                t[0] === this.pages.length - 1
              ? (this.render.setLeftPage(this.pages[t[0]]),
                this.render.setRightPage(null))
              : (this.render.setLeftPage(null),
                this.render.setRightPage(this.pages[t[0]])),
              (this.currentPageIndex = t[0]),
              this.app.updatePageIndex(this.currentPageIndex);
          }
        }
        class n extends s {
          constructor(t, e, i) {
            super(t, e), (this.imagesHref = i);
          }
          load() {
            for (let t of this.imagesHref) {
              let e = new i(this.render, t, "soft");
              e.load(), this.pages.push(e);
            }
            this.createSpread();
          }
        }
        class r {
          static GetDistanceBetweenTwoPoint(t, e) {
            return null === t || null === e
              ? 1 / 0
              : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
          }
          static GetSegmentLength(t) {
            return r.GetDistanceBetweenTwoPoint(t[0], t[1]);
          }
          static GetAngleBetweenTwoLine(t, e) {
            let i = t[0].y - t[1].y,
              s = e[0].y - e[1].y,
              n = t[1].x - t[0].x,
              r = e[1].x - e[0].x;
            return Math.acos(
              (i * s + n * r) /
                (Math.sqrt(i * i + n * n) * Math.sqrt(s * s + r * r))
            );
          }
          static PointInRect(t, e) {
            return null === e
              ? null
              : e.x >= t.left &&
                e.x <= t.width + t.left &&
                e.y >= t.top &&
                e.y <= t.top + t.height
              ? e
              : null;
          }
          static GetRotatedPoint(t, e, i) {
            return {
              x: t.x * Math.cos(i) + t.y * Math.sin(i) + e.x,
              y: t.y * Math.cos(i) - t.x * Math.sin(i) + e.y,
            };
          }
          static LimitPointToCircle(t, e, i) {
            if (r.GetDistanceBetweenTwoPoint(t, i) <= e) return i;
            let s = t.x,
              n = t.y,
              a = i.x,
              o = i.y,
              l =
                Math.sqrt(
                  (Math.pow(e, 2) * Math.pow(s - a, 2)) /
                    (Math.pow(s - a, 2) + Math.pow(n - o, 2))
                ) + s;
            i.x < 0 && (l *= -1);
            let h = ((l - s) * (n - o)) / (s - a) + n;
            return s - a + n === 0 && (h = e), { x: l, y: h };
          }
          static GetIntersectBetweenTwoSegment(t, e, i) {
            return r.PointInRect(t, r.GetIntersectBeetwenTwoLine(e, i));
          }
          static GetIntersectBeetwenTwoLine(t, e) {
            let i = t[0].y - t[1].y,
              s = e[0].y - e[1].y,
              n = t[1].x - t[0].x,
              r = e[1].x - e[0].x,
              a = t[0].x * t[1].y - t[1].x * t[0].y,
              o = e[0].x * e[1].y - e[1].x * e[0].y,
              l = -(a * r - o * n) / (i * r - s * n),
              h = -(i * o - s * a) / (i * r - s * n);
            if (isFinite(l) && isFinite(h)) return { x: l, y: h };
            if (0.1 > Math.abs(i * o - s * a - (n * o - r * a)))
              throw Error("Segment included");
            return null;
          }
          static GetCordsFromTwoPoint(t, e) {
            let i = Math.abs(t.x - e.x),
              s = Math.abs(t.y - e.y),
              n = Math.max(i, s),
              r = [t];
            function a(t, e, i, s, n) {
              return e > t ? t + (i / s) * n : e < t ? t - (i / s) * n : t;
            }
            for (let o = 1; o <= n; o += 1)
              r.push({ x: a(t.x, e.x, i, n, o), y: a(t.y, e.y, s, n, o) });
            return r;
          }
        }
        class a extends e {
          constructor(t, e, i) {
            super(t, i),
              (this.copiedElement = null),
              (this.temporaryCopy = null),
              (this.isLoad = !1),
              (this.element = e),
              this.element.classList.add("stf__item"),
              this.element.classList.add("--" + i);
          }
          newTemporaryCopy() {
            return "hard" === this.nowDrawingDensity
              ? this
              : (null === this.temporaryCopy &&
                  ((this.copiedElement = this.element.cloneNode(!0)),
                  this.element.parentElement.appendChild(this.copiedElement),
                  (this.temporaryCopy = new a(
                    this.render,
                    this.copiedElement,
                    this.nowDrawingDensity
                  ))),
                this.getTemporaryCopy());
          }
          getTemporaryCopy() {
            return this.temporaryCopy;
          }
          hideTemporaryCopy() {
            null !== this.temporaryCopy &&
              (this.copiedElement.remove(),
              (this.copiedElement = null),
              (this.temporaryCopy = null));
          }
          draw(t) {
            let e = t || this.nowDrawingDensity,
              i = this.render.convertToGlobal(this.state.position),
              s = this.render.getRect().pageWidth,
              n = this.render.getRect().height;
            this.element.classList.remove("--simple");
            let r = `
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${s}px;
            height: ${n}px;
        `;
            "hard" === e ? this.drawHard(r) : this.drawSoft(i, r);
          }
          drawHard(t = "") {
            let e =
                this.render.getRect().left + this.render.getRect().width / 2,
              i = this.state.hardDrawingAngle,
              s =
                t +
                "\n                backface-visibility: hidden;\n                -webkit-backface-visibility: hidden;\n                clip-path: none;\n                -webkit-clip-path: none;\n            " +
                (0 === this.orientation
                  ? `transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${i}deg);`
                  : `transform-origin: 0 0; 
                   transform: translate3d(${e}px, 0, 0) rotateY(${i}deg);`);
            this.element.style.cssText = s;
          }
          drawSoft(t, e = "") {
            let i = "polygon( ";
            for (let t of this.state.area)
              if (null !== t) {
                let e =
                  1 === this.render.getDirection()
                    ? {
                        x: -t.x + this.state.position.x,
                        y: t.y - this.state.position.y,
                      }
                    : {
                        x: t.x - this.state.position.x,
                        y: t.y - this.state.position.y,
                      };
                i +=
                  (e = r.GetRotatedPoint(e, { x: 0, y: 0 }, this.state.angle))
                    .x +
                  "px " +
                  e.y +
                  "px, ";
              }
            i = i.slice(0, -2) + ")";
            let s =
              e +
              `transform-origin: 0 0; clip-path: ${i}; -webkit-clip-path: ${i};` +
              (this.render.isSafari() && 0 === this.state.angle
                ? `transform: translate(${t.x}px, ${t.y}px);`
                : `transform: translate3d(${t.x}px, ${t.y}px, 0) rotate(${this.state.angle}rad);`);
            this.element.style.cssText = s;
          }
          simpleDraw(t) {
            let e = this.render.getRect(),
              i = e.pageWidth,
              s = e.height,
              n = 1 === t ? e.left + e.pageWidth : e.left,
              r = e.top;
            this.element.classList.add("--simple"),
              (this.element.style.cssText = `
            position: absolute; 
            display: block; 
            height: ${s}px; 
            left: ${n}px; 
            top: ${r}px; 
            width: ${i}px; 
            z-index: ${this.render.getSettings().startZIndex + 1};`);
          }
          getElement() {
            return this.element;
          }
          load() {
            this.isLoad = !0;
          }
          setOrientation(t) {
            super.setOrientation(t),
              this.element.classList.remove("--left", "--right"),
              this.element.classList.add(1 === t ? "--right" : "--left");
          }
          setDrawingDensity(t) {
            this.element.classList.remove("--soft", "--hard"),
              this.element.classList.add("--" + t),
              super.setDrawingDensity(t);
          }
        }
        class o extends s {
          constructor(t, e, i, s) {
            super(t, e), (this.element = i), (this.pagesElement = s);
          }
          load() {
            for (let t of this.pagesElement) {
              let e = new a(
                this.render,
                t,
                "hard" === t.dataset.density ? "hard" : "soft"
              );
              e.load(), this.pages.push(e);
            }
            this.createSpread();
          }
        }
        class l {
          constructor(t, e, i, s) {
            (this.direction = t),
              (this.corner = e),
              (this.topIntersectPoint = null),
              (this.sideIntersectPoint = null),
              (this.bottomIntersectPoint = null),
              (this.pageWidth = parseInt(i, 10)),
              (this.pageHeight = parseInt(s, 10));
          }
          calc(t) {
            try {
              return (
                (this.position = this.calcAngleAndPosition(t)),
                this.calculateIntersectPoint(this.position),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          getFlippingClipArea() {
            let t = [],
              e = !1;
            return (
              t.push(this.rect.topLeft),
              t.push(this.topIntersectPoint),
              null === this.sideIntersectPoint
                ? (e = !0)
                : (t.push(this.sideIntersectPoint),
                  null === this.bottomIntersectPoint && (e = !1)),
              t.push(this.bottomIntersectPoint),
              (e || "bottom" === this.corner) && t.push(this.rect.bottomLeft),
              t
            );
          }
          getBottomClipArea() {
            let t = [];
            return (
              t.push(this.topIntersectPoint),
              "top" === this.corner
                ? t.push({ x: this.pageWidth, y: 0 })
                : (null !== this.topIntersectPoint &&
                    t.push({ x: this.pageWidth, y: 0 }),
                  t.push({ x: this.pageWidth, y: this.pageHeight })),
              null !== this.sideIntersectPoint
                ? r.GetDistanceBetweenTwoPoint(
                    this.sideIntersectPoint,
                    this.topIntersectPoint
                  ) >= 10 && t.push(this.sideIntersectPoint)
                : "top" === this.corner &&
                  t.push({ x: this.pageWidth, y: this.pageHeight }),
              t.push(this.bottomIntersectPoint),
              t.push(this.topIntersectPoint),
              t
            );
          }
          getAngle() {
            return 0 === this.direction ? -this.angle : this.angle;
          }
          getRect() {
            return this.rect;
          }
          getPosition() {
            return this.position;
          }
          getActiveCorner() {
            return 0 === this.direction
              ? this.rect.topLeft
              : this.rect.topRight;
          }
          getDirection() {
            return this.direction;
          }
          getFlippingProgress() {
            return Math.abs(
              ((this.position.x - this.pageWidth) / (2 * this.pageWidth)) * 100
            );
          }
          getCorner() {
            return this.corner;
          }
          getBottomPagePosition() {
            return 1 === this.direction
              ? { x: this.pageWidth, y: 0 }
              : { x: 0, y: 0 };
          }
          getShadowStartPoint() {
            return "top" === this.corner
              ? this.topIntersectPoint
              : null !== this.sideIntersectPoint
              ? this.sideIntersectPoint
              : this.topIntersectPoint;
          }
          getShadowAngle() {
            let t = r.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(), [
              { x: 0, y: 0 },
              { x: this.pageWidth, y: 0 },
            ]);
            return 0 === this.direction ? t : Math.PI - t;
          }
          calcAngleAndPosition(t) {
            let e = t;
            if (
              (this.updateAngleAndGeometry(e),
              1 >
                Math.abs(
                  (e =
                    "top" === this.corner
                      ? this.checkPositionAtCenterLine(
                          e,
                          { x: 0, y: 0 },
                          { x: 0, y: this.pageHeight }
                        )
                      : this.checkPositionAtCenterLine(
                          e,
                          { x: 0, y: this.pageHeight },
                          { x: 0, y: 0 }
                        )).x - this.pageWidth
                ) && 1 > Math.abs(e.y))
            )
              throw Error("Point is too small");
            return e;
          }
          updateAngleAndGeometry(t) {
            (this.angle = this.calculateAngle(t)),
              (this.rect = this.getPageRect(t));
          }
          calculateAngle(t) {
            let e = this.pageWidth - t.x + 1,
              i = "bottom" === this.corner ? this.pageHeight - t.y : t.y,
              s = 2 * Math.acos(e / Math.sqrt(i * i + e * e));
            i < 0 && (s = -s);
            let n = Math.PI - s;
            if (!isFinite(s) || (n >= 0 && n < 0.003))
              throw Error("The G point is too small");
            return "bottom" === this.corner && (s = -s), s;
          }
          getPageRect(t) {
            return "top" === this.corner
              ? this.getRectFromBasePoint(
                  [
                    { x: 0, y: 0 },
                    { x: this.pageWidth, y: 0 },
                    { x: 0, y: this.pageHeight },
                    { x: this.pageWidth, y: this.pageHeight },
                  ],
                  t
                )
              : this.getRectFromBasePoint(
                  [
                    { x: 0, y: -this.pageHeight },
                    { x: this.pageWidth, y: -this.pageHeight },
                    { x: 0, y: 0 },
                    { x: this.pageWidth, y: 0 },
                  ],
                  t
                );
          }
          getRectFromBasePoint(t, e) {
            return {
              topLeft: this.getRotatedPoint(t[0], e),
              topRight: this.getRotatedPoint(t[1], e),
              bottomLeft: this.getRotatedPoint(t[2], e),
              bottomRight: this.getRotatedPoint(t[3], e),
            };
          }
          getRotatedPoint(t, e) {
            return {
              x: t.x * Math.cos(this.angle) + t.y * Math.sin(this.angle) + e.x,
              y: t.y * Math.cos(this.angle) - t.x * Math.sin(this.angle) + e.y,
            };
          }
          calculateIntersectPoint(t) {
            let e = {
              left: -1,
              top: -1,
              width: this.pageWidth + 2,
              height: this.pageHeight + 2,
            };
            "top" === this.corner
              ? ((this.topIntersectPoint = r.GetIntersectBetweenTwoSegment(
                  e,
                  [t, this.rect.topRight],
                  [
                    { x: 0, y: 0 },
                    { x: this.pageWidth, y: 0 },
                  ]
                )),
                (this.sideIntersectPoint = r.GetIntersectBetweenTwoSegment(
                  e,
                  [t, this.rect.bottomLeft],
                  [
                    { x: this.pageWidth, y: 0 },
                    { x: this.pageWidth, y: this.pageHeight },
                  ]
                )))
              : ((this.topIntersectPoint = r.GetIntersectBetweenTwoSegment(
                  e,
                  [this.rect.topLeft, this.rect.topRight],
                  [
                    { x: 0, y: 0 },
                    { x: this.pageWidth, y: 0 },
                  ]
                )),
                (this.sideIntersectPoint = r.GetIntersectBetweenTwoSegment(
                  e,
                  [t, this.rect.topLeft],
                  [
                    { x: this.pageWidth, y: 0 },
                    { x: this.pageWidth, y: this.pageHeight },
                  ]
                ))),
              (this.bottomIntersectPoint = r.GetIntersectBetweenTwoSegment(
                e,
                [this.rect.bottomLeft, this.rect.bottomRight],
                [
                  { x: 0, y: this.pageHeight },
                  { x: this.pageWidth, y: this.pageHeight },
                ]
              ));
          }
          checkPositionAtCenterLine(t, e, i) {
            let s = t,
              n = r.LimitPointToCircle(e, this.pageWidth, s);
            s !== n && ((s = n), this.updateAngleAndGeometry(s));
            let a = Math.sqrt(
                Math.pow(this.pageWidth, 2) + Math.pow(this.pageHeight, 2)
              ),
              o = this.rect.bottomRight,
              l = this.rect.topLeft;
            if (
              ("bottom" === this.corner &&
                ((o = this.rect.topRight), (l = this.rect.bottomLeft)),
              o.x <= 0)
            ) {
              let t = r.LimitPointToCircle(i, a, l);
              t !== s && ((s = t), this.updateAngleAndGeometry(s));
            }
            return s;
          }
          getSegmentToShadowLine() {
            let t = this.getShadowStartPoint();
            return [
              t,
              t !== this.sideIntersectPoint && null !== this.sideIntersectPoint
                ? this.sideIntersectPoint
                : this.bottomIntersectPoint,
            ];
          }
        }
        class h {
          constructor(t, e) {
            (this.flippingPage = null),
              (this.bottomPage = null),
              (this.calc = null),
              (this.state = "read"),
              (this.render = t),
              (this.app = e);
          }
          fold(t) {
            this.setState("user_fold"),
              null === this.calc && this.start(t),
              this.do(this.render.convertToPage(t));
          }
          flip(t) {
            if (
              (this.app.getSettings().disableFlipByClick &&
                !this.isPointOnCorners(t)) ||
              (null !== this.calc && this.render.finishAnimation(),
              !this.start(t))
            )
              return;
            let e = this.getBoundsRect();
            this.setState("flipping");
            let i = e.height / 10,
              s = "bottom" === this.calc.getCorner() ? e.height - i : i,
              n = "bottom" === this.calc.getCorner() ? e.height : 0;
            this.calc.calc({ x: e.pageWidth - i, y: s }),
              this.animateFlippingTo(
                { x: e.pageWidth - i, y: s },
                { x: -e.pageWidth, y: n },
                !0
              );
          }
          start(t) {
            this.reset();
            let e = this.render.convertToBook(t),
              i = this.getBoundsRect(),
              s = this.getDirectionByPoint(e),
              n = e.y >= i.height / 2 ? "bottom" : "top";
            if (!this.checkDirection(s)) return !1;
            try {
              if (
                ((this.flippingPage = this.app
                  .getPageCollection()
                  .getFlippingPage(s)),
                (this.bottomPage = this.app
                  .getPageCollection()
                  .getBottomPage(s)),
                "landscape" === this.render.getOrientation())
              )
                if (1 === s) {
                  let t = this.app
                    .getPageCollection()
                    .nextBy(this.flippingPage);
                  null !== t &&
                    this.flippingPage.getDensity() !== t.getDensity() &&
                    (this.flippingPage.setDrawingDensity("hard"),
                    t.setDrawingDensity("hard"));
                } else {
                  let t = this.app
                    .getPageCollection()
                    .prevBy(this.flippingPage);
                  null !== t &&
                    this.flippingPage.getDensity() !== t.getDensity() &&
                    (this.flippingPage.setDrawingDensity("hard"),
                    t.setDrawingDensity("hard"));
                }
              return (
                this.render.setDirection(s),
                (this.calc = new l(
                  s,
                  n,
                  i.pageWidth.toString(10),
                  i.height.toString(10)
                )),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          do(t) {
            if (null !== this.calc && this.calc.calc(t)) {
              let t = this.calc.getFlippingProgress();
              this.bottomPage.setArea(this.calc.getBottomClipArea()),
                this.bottomPage.setPosition(this.calc.getBottomPagePosition()),
                this.bottomPage.setAngle(0),
                this.bottomPage.setHardAngle(0),
                this.flippingPage.setArea(this.calc.getFlippingClipArea()),
                this.flippingPage.setPosition(this.calc.getActiveCorner()),
                this.flippingPage.setAngle(this.calc.getAngle()),
                0 === this.calc.getDirection()
                  ? this.flippingPage.setHardAngle((90 * (200 - 2 * t)) / 100)
                  : this.flippingPage.setHardAngle((-90 * (200 - 2 * t)) / 100),
                this.render.setPageRect(this.calc.getRect()),
                this.render.setBottomPage(this.bottomPage),
                this.render.setFlippingPage(this.flippingPage),
                this.render.setShadowData(
                  this.calc.getShadowStartPoint(),
                  this.calc.getShadowAngle(),
                  t,
                  this.calc.getDirection()
                );
            }
          }
          flipToPage(t, e) {
            let i = this.app.getPageCollection().getCurrentSpreadIndex(),
              s = this.app.getPageCollection().getSpreadIndexByPage(t);
            try {
              s > i &&
                (this.app.getPageCollection().setCurrentSpreadIndex(s - 1),
                this.flipNext(e)),
                s < i &&
                  (this.app.getPageCollection().setCurrentSpreadIndex(s + 1),
                  this.flipPrev(e));
            } catch (t) {}
          }
          flipNext(t) {
            this.flip({
              x:
                this.render.getRect().left +
                2 * this.render.getRect().pageWidth -
                10,
              y: "top" === t ? 1 : this.render.getRect().height - 2,
            });
          }
          flipPrev(t) {
            this.flip({
              x: 10,
              y: "top" === t ? 1 : this.render.getRect().height - 2,
            });
          }
          stopMove() {
            if (null === this.calc) return;
            let t = this.calc.getPosition(),
              e = this.getBoundsRect(),
              i = "bottom" === this.calc.getCorner() ? e.height : 0;
            t.x <= 0
              ? this.animateFlippingTo(t, { x: -e.pageWidth, y: i }, !0)
              : this.animateFlippingTo(t, { x: e.pageWidth, y: i }, !1);
          }
          showCorner(t) {
            if (!this.checkState("read", "fold_corner")) return;
            let e = this.getBoundsRect(),
              i = e.pageWidth;
            if (this.isPointOnCorners(t))
              if (null === this.calc) {
                if (!this.start(t)) return;
                this.setState("fold_corner"),
                  this.calc.calc({ x: i - 1, y: 1 });
                let s = "bottom" === this.calc.getCorner() ? e.height - 1 : 1,
                  n = "bottom" === this.calc.getCorner() ? e.height - 50 : 50;
                this.animateFlippingTo(
                  { x: i - 1, y: s },
                  { x: i - 50, y: n },
                  !1,
                  !1
                );
              } else this.do(this.render.convertToPage(t));
            else
              this.setState("read"),
                this.render.finishAnimation(),
                this.stopMove();
          }
          animateFlippingTo(t, e, i, s = !0) {
            let n = r.GetCordsFromTwoPoint(t, e),
              a = [];
            for (let t of n) a.push(() => this.do(t));
            let o = this.getAnimationDuration(n.length);
            this.render.startAnimation(a, o, () => {
              this.calc &&
                (i &&
                  (1 === this.calc.getDirection()
                    ? this.app.turnToPrevPage()
                    : this.app.turnToNextPage()),
                s &&
                  (this.render.setBottomPage(null),
                  this.render.setFlippingPage(null),
                  this.render.clearShadow(),
                  this.setState("read"),
                  this.reset()));
            });
          }
          getCalculation() {
            return this.calc;
          }
          getState() {
            return this.state;
          }
          setState(t) {
            this.state !== t && (this.app.updateState(t), (this.state = t));
          }
          getDirectionByPoint(t) {
            let e = this.getBoundsRect();
            if ("portrait" === this.render.getOrientation()) {
              if (t.x - e.pageWidth <= e.width / 5) return 1;
            } else if (t.x < e.width / 2) return 1;
            return 0;
          }
          getAnimationDuration(t) {
            let e = this.app.getSettings().flippingTime;
            return t >= 1e3 ? e : (t / 1e3) * e;
          }
          checkDirection(t) {
            return 0 === t
              ? this.app.getCurrentPageIndex() < this.app.getPageCount() - 1
              : this.app.getCurrentPageIndex() >= 1;
          }
          reset() {
            (this.calc = null),
              (this.flippingPage = null),
              (this.bottomPage = null);
          }
          getBoundsRect() {
            return this.render.getRect();
          }
          checkState(...t) {
            for (let e of t) if (this.state === e) return !0;
            return !1;
          }
          isPointOnCorners(t) {
            let e = this.getBoundsRect(),
              i =
                Math.sqrt(Math.pow(e.pageWidth, 2) + Math.pow(e.height, 2)) / 5,
              s = this.render.convertToBook(t);
            return (
              s.x > 0 &&
              s.y > 0 &&
              s.x < e.width &&
              s.y < e.height &&
              (s.x < i || s.x > e.width - i) &&
              (s.y < i || s.y > e.height - i)
            );
          }
        }
        class u {
          constructor(t, e) {
            (this.leftPage = null),
              (this.rightPage = null),
              (this.flippingPage = null),
              (this.bottomPage = null),
              (this.direction = null),
              (this.orientation = null),
              (this.shadow = null),
              (this.animation = null),
              (this.pageRect = null),
              (this.boundsRect = null),
              (this.timer = 0),
              (this.safari = !1),
              (this.setting = e),
              (this.app = t);
            let i = RegExp("Version\\/[\\d\\.]+.*Safari/");
            this.safari = null !== i.exec(window.navigator.userAgent);
          }
          render(t) {
            if (null !== this.animation) {
              let e = Math.round(
                (t - this.animation.startedAt) / this.animation.durationFrame
              );
              e < this.animation.frames.length
                ? this.animation.frames[e]()
                : (this.animation.onAnimateEnd(), (this.animation = null));
            }
            (this.timer = t), this.drawFrame();
          }
          start() {
            this.update();
            let t = (e) => {
              this.render(e), requestAnimationFrame(t);
            };
            requestAnimationFrame(t);
          }
          startAnimation(t, e, i) {
            this.finishAnimation(),
              (this.animation = {
                frames: t,
                duration: e,
                durationFrame: e / t.length,
                onAnimateEnd: i,
                startedAt: this.timer,
              });
          }
          finishAnimation() {
            null !== this.animation &&
              (this.animation.frames[this.animation.frames.length - 1](),
              null !== this.animation.onAnimateEnd &&
                this.animation.onAnimateEnd()),
              (this.animation = null);
          }
          update() {
            this.boundsRect = null;
            let t = this.calculateBoundsRect();
            this.orientation !== t &&
              ((this.orientation = t), this.app.updateOrientation(t));
          }
          calculateBoundsRect() {
            let t = "landscape",
              e = this.getBlockWidth(),
              i = e / 2,
              s = this.getBlockHeight() / 2,
              n = this.setting.width / this.setting.height,
              r = this.setting.width,
              a = this.setting.height,
              o = i - r;
            return (
              "stretch" === this.setting.size
                ? (e < 2 * this.setting.minWidth &&
                    this.app.getSettings().usePortrait &&
                    (t = "portrait"),
                  (r =
                    "portrait" === t
                      ? this.getBlockWidth()
                      : this.getBlockWidth() / 2) > this.setting.maxWidth &&
                    (r = this.setting.maxWidth),
                  (a = r / n) > this.getBlockHeight() &&
                    (r = (a = this.getBlockHeight()) * n),
                  (o = "portrait" === t ? i - r / 2 - r : i - r))
                : e < 2 * r &&
                  this.app.getSettings().usePortrait &&
                  ((t = "portrait"), (o = i - r / 2 - r)),
              (this.boundsRect = {
                left: o,
                top: s - a / 2,
                width: 2 * r,
                height: a,
                pageWidth: r,
              }),
              t
            );
          }
          setShadowData(t, e, i, s) {
            if (!this.app.getSettings().drawShadow) return;
            let n = 100 * this.getSettings().maxShadowOpacity;
            this.shadow = {
              pos: t,
              angle: e,
              width: (((3 * this.getRect().pageWidth) / 4) * i) / 100,
              opacity: ((100 - i) * n) / 100 / 100,
              direction: s,
              progress: 2 * i,
            };
          }
          clearShadow() {
            this.shadow = null;
          }
          getBlockWidth() {
            return this.app.getUI().getDistElement().offsetWidth;
          }
          getBlockHeight() {
            return this.app.getUI().getDistElement().offsetHeight;
          }
          getDirection() {
            return this.direction;
          }
          getRect() {
            return (
              null === this.boundsRect && this.calculateBoundsRect(),
              this.boundsRect
            );
          }
          getSettings() {
            return this.app.getSettings();
          }
          getOrientation() {
            return this.orientation;
          }
          setPageRect(t) {
            this.pageRect = t;
          }
          setDirection(t) {
            this.direction = t;
          }
          setRightPage(t) {
            null !== t && t.setOrientation(1), (this.rightPage = t);
          }
          setLeftPage(t) {
            null !== t && t.setOrientation(0), (this.leftPage = t);
          }
          setBottomPage(t) {
            null !== t && t.setOrientation(+(1 !== this.direction)),
              (this.bottomPage = t);
          }
          setFlippingPage(t) {
            null !== t &&
              t.setOrientation(
                +(0 !== this.direction || "portrait" === this.orientation)
              ),
              (this.flippingPage = t);
          }
          convertToBook(t) {
            let e = this.getRect();
            return { x: t.x - e.left, y: t.y - e.top };
          }
          isSafari() {
            return this.safari;
          }
          convertToPage(t, e) {
            e || (e = this.direction);
            let i = this.getRect();
            return {
              x:
                0 === e
                  ? t.x - i.left - i.width / 2
                  : i.width / 2 - t.x + i.left,
              y: t.y - i.top,
            };
          }
          convertToGlobal(t, e) {
            if ((e || (e = this.direction), null == t)) return null;
            let i = this.getRect();
            return {
              x:
                0 === e
                  ? t.x + i.left + i.width / 2
                  : i.width / 2 - t.x + i.left,
              y: t.y + i.top,
            };
          }
          convertRectToGlobal(t, e) {
            return (
              e || (e = this.direction),
              {
                topLeft: this.convertToGlobal(t.topLeft, e),
                topRight: this.convertToGlobal(t.topRight, e),
                bottomLeft: this.convertToGlobal(t.bottomLeft, e),
                bottomRight: this.convertToGlobal(t.bottomRight, e),
              }
            );
          }
        }
        class d extends u {
          constructor(t, e, i) {
            super(t, e), (this.canvas = i), (this.ctx = i.getContext("2d"));
          }
          getContext() {
            return this.ctx;
          }
          reload() {}
          drawFrame() {
            this.clear(),
              "portrait" !== this.orientation &&
                null != this.leftPage &&
                this.leftPage.simpleDraw(0),
              null != this.rightPage && this.rightPage.simpleDraw(1),
              null != this.bottomPage && this.bottomPage.draw(),
              this.drawBookShadow(),
              null != this.flippingPage && this.flippingPage.draw(),
              null != this.shadow &&
                (this.drawOuterShadow(), this.drawInnerShadow());
            let t = this.getRect();
            "portrait" === this.orientation &&
              (this.ctx.beginPath(),
              this.ctx.rect(t.left + t.pageWidth, t.top, t.width, t.height),
              this.ctx.clip());
          }
          drawBookShadow() {
            let t = this.getRect();
            this.ctx.save(), this.ctx.beginPath();
            let e = t.width / 20;
            this.ctx.rect(t.left, t.top, t.width, t.height);
            let i = { x: t.left + t.width / 2 - e / 2, y: 0 };
            this.ctx.translate(i.x, i.y);
            let s = this.ctx.createLinearGradient(0, 0, e, 0);
            s.addColorStop(0, "rgba(0, 0, 0, 0)"),
              s.addColorStop(0.4, "rgba(0, 0, 0, 0.2)"),
              s.addColorStop(0.49, "rgba(0, 0, 0, 0.1)"),
              s.addColorStop(0.5, "rgba(0, 0, 0, 0.5)"),
              s.addColorStop(0.51, "rgba(0, 0, 0, 0.4)"),
              s.addColorStop(1, "rgba(0, 0, 0, 0)"),
              this.ctx.clip(),
              (this.ctx.fillStyle = s),
              this.ctx.fillRect(0, 0, e, 2 * t.height),
              this.ctx.restore();
          }
          drawOuterShadow() {
            let t = this.getRect();
            this.ctx.save(),
              this.ctx.beginPath(),
              this.ctx.rect(t.left, t.top, t.width, t.height);
            let e = this.convertToGlobal({
              x: this.shadow.pos.x,
              y: this.shadow.pos.y,
            });
            this.ctx.translate(e.x, e.y),
              this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
            let i = this.ctx.createLinearGradient(0, 0, this.shadow.width, 0);
            0 === this.shadow.direction
              ? (this.ctx.translate(0, -100),
                i.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"),
                i.addColorStop(1, "rgba(0, 0, 0, 0)"))
              : (this.ctx.translate(-this.shadow.width, -100),
                i.addColorStop(0, "rgba(0, 0, 0, 0)"),
                i.addColorStop(
                  1,
                  "rgba(0, 0, 0, " + this.shadow.opacity + ")"
                )),
              this.ctx.clip(),
              (this.ctx.fillStyle = i),
              this.ctx.fillRect(0, 0, this.shadow.width, 2 * t.height),
              this.ctx.restore();
          }
          drawInnerShadow() {
            let t = this.getRect();
            this.ctx.save(), this.ctx.beginPath();
            let e = this.convertToGlobal({
                x: this.shadow.pos.x,
                y: this.shadow.pos.y,
              }),
              i = this.convertRectToGlobal(this.pageRect);
            this.ctx.moveTo(i.topLeft.x, i.topLeft.y),
              this.ctx.lineTo(i.topRight.x, i.topRight.y),
              this.ctx.lineTo(i.bottomRight.x, i.bottomRight.y),
              this.ctx.lineTo(i.bottomLeft.x, i.bottomLeft.y),
              this.ctx.translate(e.x, e.y),
              this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
            let s = (3 * this.shadow.width) / 4,
              n = this.ctx.createLinearGradient(0, 0, s, 0);
            0 === this.shadow.direction
              ? (this.ctx.translate(-s, -100),
                n.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")"),
                n.addColorStop(0.9, "rgba(0, 0, 0, 0.05)"),
                n.addColorStop(
                  0.7,
                  "rgba(0, 0, 0, " + this.shadow.opacity + ")"
                ),
                n.addColorStop(0, "rgba(0, 0, 0, 0)"))
              : (this.ctx.translate(0, -100),
                n.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"),
                n.addColorStop(0.1, "rgba(0, 0, 0, 0.05)"),
                n.addColorStop(
                  0.3,
                  "rgba(0, 0, 0, " + this.shadow.opacity + ")"
                ),
                n.addColorStop(1, "rgba(0, 0, 0, 0)")),
              this.ctx.clip(),
              (this.ctx.fillStyle = n),
              this.ctx.fillRect(0, 0, s, 2 * t.height),
              this.ctx.restore();
          }
          clear() {
            (this.ctx.fillStyle = "white"),
              this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
          }
        }
        class c {
          constructor(t, e, i) {
            (this.touchPoint = null),
              (this.swipeTimeout = 250),
              (this.onResize = () => {
                this.update();
              }),
              (this.onMouseDown = (t) => {
                if (this.checkTarget(t.target)) {
                  let e = this.getMousePos(t.clientX, t.clientY);
                  this.app.startUserTouch(e), t.preventDefault();
                }
              }),
              (this.onTouchStart = (t) => {
                if (this.checkTarget(t.target) && t.changedTouches.length > 0) {
                  let e = t.changedTouches[0],
                    i = this.getMousePos(e.clientX, e.clientY);
                  (this.touchPoint = { point: i, time: Date.now() }),
                    setTimeout(() => {
                      null !== this.touchPoint && this.app.startUserTouch(i);
                    }, this.swipeTimeout),
                    this.app.getSettings().mobileScrollSupport ||
                      t.preventDefault();
                }
              }),
              (this.onMouseUp = (t) => {
                let e = this.getMousePos(t.clientX, t.clientY);
                this.app.userStop(e);
              }),
              (this.onMouseMove = (t) => {
                let e = this.getMousePos(t.clientX, t.clientY);
                this.app.userMove(e, !1);
              }),
              (this.onTouchMove = (t) => {
                if (t.changedTouches.length > 0) {
                  let e = t.changedTouches[0],
                    i = this.getMousePos(e.clientX, e.clientY);
                  this.app.getSettings().mobileScrollSupport
                    ? (null !== this.touchPoint &&
                        (Math.abs(this.touchPoint.point.x - i.x) > 10 ||
                          "read" !== this.app.getState()) &&
                        t.cancelable &&
                        this.app.userMove(i, !0),
                      "read" !== this.app.getState() && t.preventDefault())
                    : this.app.userMove(i, !0);
                }
              }),
              (this.onTouchEnd = (t) => {
                if (t.changedTouches.length > 0) {
                  let e = t.changedTouches[0],
                    i = this.getMousePos(e.clientX, e.clientY),
                    s = !1;
                  if (null !== this.touchPoint) {
                    let t = i.x - this.touchPoint.point.x,
                      e = Math.abs(i.y - this.touchPoint.point.y);
                    Math.abs(t) > this.swipeDistance &&
                      e < 2 * this.swipeDistance &&
                      Date.now() - this.touchPoint.time < this.swipeTimeout &&
                      (t > 0
                        ? this.app.flipPrev(
                            this.touchPoint.point.y <
                              this.app.getRender().getRect().height / 2
                              ? "top"
                              : "bottom"
                          )
                        : this.app.flipNext(
                            this.touchPoint.point.y <
                              this.app.getRender().getRect().height / 2
                              ? "top"
                              : "bottom"
                          ),
                      (s = !0)),
                      (this.touchPoint = null);
                  }
                  this.app.userStop(i, s);
                }
              }),
              (this.parentElement = t),
              t.classList.add("stf__parent"),
              t.insertAdjacentHTML(
                "afterbegin",
                '<div class="stf__wrapper"></div>'
              ),
              (this.wrapper = t.querySelector(".stf__wrapper")),
              (this.app = e);
            let s = this.app.getSettings().usePortrait ? 1 : 2;
            (t.style.minWidth = i.minWidth * s + "px"),
              (t.style.minHeight = i.minHeight + "px"),
              "fixed" === i.size &&
                ((t.style.minWidth = i.width * s + "px"),
                (t.style.minHeight = i.height + "px")),
              i.autoSize &&
                ((t.style.width = "100%"),
                (t.style.maxWidth = 2 * i.maxWidth + "px")),
              (t.style.display = "block"),
              window.addEventListener("resize", this.onResize, !1),
              (this.swipeDistance = i.swipeDistance);
          }
          destroy() {
            this.app.getSettings().useMouseEvents && this.removeHandlers(),
              this.distElement.remove(),
              this.wrapper.remove();
          }
          getDistElement() {
            return this.distElement;
          }
          getWrapper() {
            return this.wrapper;
          }
          setOrientationStyle(t) {
            this.wrapper.classList.remove("--portrait", "--landscape"),
              "portrait" === t
                ? (this.app.getSettings().autoSize &&
                    (this.wrapper.style.paddingBottom =
                      (this.app.getSettings().height /
                        this.app.getSettings().width) *
                        100 +
                      "%"),
                  this.wrapper.classList.add("--portrait"))
                : (this.app.getSettings().autoSize &&
                    (this.wrapper.style.paddingBottom =
                      (this.app.getSettings().height /
                        (2 * this.app.getSettings().width)) *
                        100 +
                      "%"),
                  this.wrapper.classList.add("--landscape")),
              this.update();
          }
          removeHandlers() {
            window.removeEventListener("resize", this.onResize),
              this.distElement.removeEventListener(
                "mousedown",
                this.onMouseDown
              ),
              this.distElement.removeEventListener(
                "touchstart",
                this.onTouchStart
              ),
              window.removeEventListener("mousemove", this.onMouseMove),
              window.removeEventListener("touchmove", this.onTouchMove),
              window.removeEventListener("mouseup", this.onMouseUp),
              window.removeEventListener("touchend", this.onTouchEnd);
          }
          setHandlers() {
            window.addEventListener("resize", this.onResize, !1),
              this.app.getSettings().useMouseEvents &&
                (this.distElement.addEventListener(
                  "mousedown",
                  this.onMouseDown
                ),
                this.distElement.addEventListener(
                  "touchstart",
                  this.onTouchStart
                ),
                window.addEventListener("mousemove", this.onMouseMove),
                window.addEventListener("touchmove", this.onTouchMove, {
                  passive: !this.app.getSettings().mobileScrollSupport,
                }),
                window.addEventListener("mouseup", this.onMouseUp),
                window.addEventListener("touchend", this.onTouchEnd));
          }
          getMousePos(t, e) {
            let i = this.distElement.getBoundingClientRect();
            return { x: t - i.left, y: e - i.top };
          }
          checkTarget(t) {
            return (
              !this.app.getSettings().clickEventForward ||
              !["a", "button"].includes(t.tagName.toLowerCase())
            );
          }
        }
        class p extends c {
          constructor(t, e, i, s) {
            for (let n of (super(t, e, i),
            this.wrapper.insertAdjacentHTML(
              "afterbegin",
              '<div class="stf__block"></div>'
            ),
            (this.distElement = t.querySelector(".stf__block")),
            (this.items = s),
            s))
              this.distElement.appendChild(n);
            this.setHandlers();
          }
          clear() {
            for (let t of this.items) this.parentElement.appendChild(t);
          }
          updateItems(t) {
            for (let e of (this.removeHandlers(),
            (this.distElement.innerHTML = ""),
            t))
              this.distElement.appendChild(e);
            (this.items = t), this.setHandlers();
          }
          update() {
            this.app.getRender().update();
          }
        }
        class g extends c {
          constructor(t, e, i) {
            super(t, e, i),
              (this.wrapper.innerHTML =
                '<canvas class="stf__canvas"></canvas>'),
              (this.canvas = t.querySelectorAll("canvas")[0]),
              (this.distElement = this.canvas),
              this.resizeCanvas(),
              this.setHandlers();
          }
          resizeCanvas() {
            let t = getComputedStyle(this.canvas),
              e = parseInt(t.getPropertyValue("width"), 10),
              i = parseInt(t.getPropertyValue("height"), 10);
            (this.canvas.width = e), (this.canvas.height = i);
          }
          getCanvas() {
            return this.canvas;
          }
          update() {
            this.resizeCanvas(), this.app.getRender().update();
          }
        }
        class m extends u {
          constructor(t, e, i) {
            super(t, e),
              (this.outerShadow = null),
              (this.innerShadow = null),
              (this.hardShadow = null),
              (this.hardInnerShadow = null),
              (this.element = i),
              this.createShadows();
          }
          createShadows() {
            this.element.insertAdjacentHTML(
              "beforeend",
              '<div class="stf__outerShadow"></div>\n             <div class="stf__innerShadow"></div>\n             <div class="stf__hardShadow"></div>\n             <div class="stf__hardInnerShadow"></div>'
            ),
              (this.outerShadow =
                this.element.querySelector(".stf__outerShadow")),
              (this.innerShadow =
                this.element.querySelector(".stf__innerShadow")),
              (this.hardShadow =
                this.element.querySelector(".stf__hardShadow")),
              (this.hardInnerShadow = this.element.querySelector(
                ".stf__hardInnerShadow"
              ));
          }
          clearShadow() {
            super.clearShadow(),
              (this.outerShadow.style.cssText = "display: none"),
              (this.innerShadow.style.cssText = "display: none"),
              (this.hardShadow.style.cssText = "display: none"),
              (this.hardInnerShadow.style.cssText = "display: none");
          }
          reload() {
            this.element.querySelector(".stf__outerShadow") ||
              this.createShadows();
          }
          drawHardInnerShadow() {
            let t = this.getRect(),
              e =
                this.shadow.progress > 100
                  ? 200 - this.shadow.progress
                  : this.shadow.progress,
              i = ((100 - e) * (2.5 * t.pageWidth)) / 100 + 20;
            i > t.pageWidth && (i = t.pageWidth);
            let s = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 5).toString(10)};
            width: ${i}px;
            height: ${t.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${(this.shadow.opacity * e) / 100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${t.left + t.width / 2}px;
            transform-origin: 0 0;
        `;
            (s +=
              (0 === this.getDirection() && this.shadow.progress > 100) ||
              (1 === this.getDirection() && this.shadow.progress <= 100)
                ? "transform: translate3d(0, 0, 0);"
                : "transform: translate3d(0, 0, 0) rotateY(180deg);"),
              (this.hardInnerShadow.style.cssText = s);
          }
          drawHardOuterShadow() {
            let t = this.getRect(),
              e =
                ((100 -
                  (this.shadow.progress > 100
                    ? 200 - this.shadow.progress
                    : this.shadow.progress)) *
                  (2.5 * t.pageWidth)) /
                  100 +
                20;
            e > t.pageWidth && (e = t.pageWidth);
            let i = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 4).toString(10)};
            width: ${e}px;
            height: ${t.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${
              this.shadow.opacity
            }) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${t.left + t.width / 2}px;
            transform-origin: 0 0;
        `;
            (i +=
              (0 === this.getDirection() && this.shadow.progress > 100) ||
              (1 === this.getDirection() && this.shadow.progress <= 100)
                ? "transform: translate3d(0, 0, 0) rotateY(180deg);"
                : "transform: translate3d(0, 0, 0);"),
              (this.hardShadow.style.cssText = i);
          }
          drawInnerShadow() {
            let t = this.getRect(),
              e = (3 * this.shadow.width) / 4,
              i = 0 === this.getDirection() ? e : 0,
              s = 0 === this.getDirection() ? "to left" : "to right",
              n = this.convertToGlobal(this.shadow.pos),
              a = this.shadow.angle + (3 * Math.PI) / 2,
              o = [
                this.pageRect.topLeft,
                this.pageRect.topRight,
                this.pageRect.bottomRight,
                this.pageRect.bottomLeft,
              ],
              l = "polygon( ";
            for (let t of o) {
              let e =
                1 === this.getDirection()
                  ? { x: -t.x + this.shadow.pos.x, y: t.y - this.shadow.pos.y }
                  : { x: t.x - this.shadow.pos.x, y: t.y - this.shadow.pos.y };
              l +=
                (e = r.GetRotatedPoint(e, { x: i, y: 100 }, a)).x +
                "px " +
                e.y +
                "px, ";
            }
            l = l.slice(0, -2) + ")";
            let h = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${e}px;
            height: ${2 * t.height}px;
            background: linear-gradient(${s},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${i}px 100px;
            transform: translate3d(${n.x - i}px, ${
              n.y - 100
            }px, 0) rotate(${a}rad);
            clip-path: ${l};
            -webkit-clip-path: ${l};
        `;
            this.innerShadow.style.cssText = h;
          }
          drawOuterShadow() {
            let t = this.getRect(),
              e = this.convertToGlobal({
                x: this.shadow.pos.x,
                y: this.shadow.pos.y,
              }),
              i = this.shadow.angle + (3 * Math.PI) / 2,
              s = 1 === this.getDirection() ? this.shadow.width : 0,
              n = 0 === this.getDirection() ? "to right" : "to left",
              a = [
                { x: 0, y: 0 },
                { x: t.pageWidth, y: 0 },
                { x: t.pageWidth, y: t.height },
                { x: 0, y: t.height },
              ],
              o = "polygon( ";
            for (let t of a)
              if (null !== t) {
                let e =
                  1 === this.getDirection()
                    ? {
                        x: -t.x + this.shadow.pos.x,
                        y: t.y - this.shadow.pos.y,
                      }
                    : {
                        x: t.x - this.shadow.pos.x,
                        y: t.y - this.shadow.pos.y,
                      };
                o +=
                  (e = r.GetRotatedPoint(e, { x: s, y: 100 }, i)).x +
                  "px " +
                  e.y +
                  "px, ";
              }
            o = o.slice(0, -2) + ")";
            let l = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2 * t.height}px;
            background: linear-gradient(${n}, rgba(0, 0, 0, ${
              this.shadow.opacity
            }), rgba(0, 0, 0, 0));
            transform-origin: ${s}px 100px;
            transform: translate3d(${e.x - s}px, ${
              e.y - 100
            }px, 0) rotate(${i}rad);
            clip-path: ${o};
            -webkit-clip-path: ${o};
        `;
            this.outerShadow.style.cssText = l;
          }
          drawLeftPage() {
            "portrait" !== this.orientation &&
              null !== this.leftPage &&
              (1 === this.direction &&
              null !== this.flippingPage &&
              "hard" === this.flippingPage.getDrawingDensity()
                ? ((this.leftPage.getElement().style.zIndex = (
                    this.getSettings().startZIndex + 5
                  ).toString(10)),
                  this.leftPage.setHardDrawingAngle(
                    180 + this.flippingPage.getHardAngle()
                  ),
                  this.leftPage.draw(this.flippingPage.getDrawingDensity()))
                : this.leftPage.simpleDraw(0));
          }
          drawRightPage() {
            null !== this.rightPage &&
              (0 === this.direction &&
              null !== this.flippingPage &&
              "hard" === this.flippingPage.getDrawingDensity()
                ? ((this.rightPage.getElement().style.zIndex = (
                    this.getSettings().startZIndex + 5
                  ).toString(10)),
                  this.rightPage.setHardDrawingAngle(
                    180 + this.flippingPage.getHardAngle()
                  ),
                  this.rightPage.draw(this.flippingPage.getDrawingDensity()))
                : this.rightPage.simpleDraw(1));
          }
          drawBottomPage() {
            if (null === this.bottomPage) return;
            let t =
              null != this.flippingPage
                ? this.flippingPage.getDrawingDensity()
                : null;
            ("portrait" === this.orientation && 1 === this.direction) ||
              ((this.bottomPage.getElement().style.zIndex = (
                this.getSettings().startZIndex + 3
              ).toString(10)),
              this.bottomPage.draw(t));
          }
          drawFrame() {
            this.clear(),
              this.drawLeftPage(),
              this.drawRightPage(),
              this.drawBottomPage(),
              null != this.flippingPage &&
                ((this.flippingPage.getElement().style.zIndex = (
                  this.getSettings().startZIndex + 5
                ).toString(10)),
                this.flippingPage.draw()),
              null != this.shadow &&
                null !== this.flippingPage &&
                ("soft" === this.flippingPage.getDrawingDensity()
                  ? (this.drawOuterShadow(), this.drawInnerShadow())
                  : (this.drawHardOuterShadow(), this.drawHardInnerShadow()));
          }
          clear() {
            for (let t of this.app.getPageCollection().getPages())
              t !== this.leftPage &&
                t !== this.rightPage &&
                t !== this.flippingPage &&
                t !== this.bottomPage &&
                (t.getElement().style.cssText = "display: none"),
                t.getTemporaryCopy() !== this.flippingPage &&
                  t.hideTemporaryCopy();
          }
          update() {
            super.update(),
              null !== this.rightPage && this.rightPage.setOrientation(1),
              null !== this.leftPage && this.leftPage.setOrientation(0);
          }
        }
        class f {
          constructor() {
            this._default = {
              startPage: 0,
              size: "fixed",
              width: 0,
              height: 0,
              minWidth: 0,
              maxWidth: 0,
              minHeight: 0,
              maxHeight: 0,
              drawShadow: !0,
              flippingTime: 1e3,
              usePortrait: !0,
              startZIndex: 0,
              autoSize: !0,
              maxShadowOpacity: 1,
              showCover: !1,
              mobileScrollSupport: !0,
              swipeDistance: 30,
              clickEventForward: !0,
              useMouseEvents: !0,
              showPageCorners: !0,
              disableFlipByClick: !1,
            };
          }
          getSettings(t) {
            let e = this._default;
            if (
              (Object.assign(e, t), "stretch" !== e.size && "fixed" !== e.size)
            )
              throw Error(
                'Invalid size type. Available only "fixed" and "stretch" value'
              );
            if (e.width <= 0 || e.height <= 0)
              throw Error("Invalid width or height");
            if (e.flippingTime <= 0) throw Error("Invalid flipping time");
            return (
              "stretch" === e.size
                ? (e.minWidth <= 0 && (e.minWidth = 100),
                  e.maxWidth < e.minWidth && (e.maxWidth = 2e3),
                  e.minHeight <= 0 && (e.minHeight = 100),
                  e.maxHeight < e.minHeight && (e.maxHeight = 2e3))
                : ((e.minWidth = e.width),
                  (e.maxWidth = e.width),
                  (e.minHeight = e.height),
                  (e.maxHeight = e.height)),
              e
            );
          }
        }
        !(function (t, e) {
          void 0 === e && (e = {});
          var i = e.insertAt;
          if (t && "undefined" != typeof document) {
            var s = document.head || document.getElementsByTagName("head")[0],
              n = document.createElement("style");
            (n.type = "text/css"),
              "top" === i && s.firstChild
                ? s.insertBefore(n, s.firstChild)
                : s.appendChild(n),
              n.styleSheet
                ? (n.styleSheet.cssText = t)
                : n.appendChild(document.createTextNode(t));
          }
        })(
          ".stf__parent {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  transform: translateZ(0);\n\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n\n.sft__wrapper {\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.stf__parent canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.stf__block {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  perspective: 2000px;\n}\n\n.stf__item {\n  display: none;\n  position: absolute;\n  transform-style: preserve-3d;\n}\n\n.stf__outerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__innerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__hardShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__hardInnerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}"
        ),
          (t.PageFlip = class extends (
            class {
              constructor() {
                this.events = new Map();
              }
              on(t, e) {
                return (
                  this.events.has(t)
                    ? this.events.get(t).push(e)
                    : this.events.set(t, [e]),
                  this
                );
              }
              off(t) {
                this.events.delete(t);
              }
              trigger(t, e, i = null) {
                if (this.events.has(t))
                  for (let s of this.events.get(t)) s({ data: i, object: e });
              }
            }
          ) {
            constructor(t, e) {
              super(),
                (this.isUserTouch = !1),
                (this.isUserMove = !1),
                (this.setting = null),
                (this.pages = null),
                (this.setting = new f().getSettings(e)),
                (this.block = t);
            }
            destroy() {
              this.ui.destroy(), this.block.remove();
            }
            update() {
              this.render.update(), this.pages.show();
            }
            loadFromImages(t) {
              this.ui = new g(this.block, this, this.setting);
              let e = this.ui.getCanvas();
              (this.render = new d(this, this.setting, e)),
                (this.flipController = new h(this.render, this)),
                (this.pages = new n(this, this.render, t)),
                this.pages.load(),
                this.render.start(),
                this.pages.show(this.setting.startPage),
                setTimeout(() => {
                  this.ui.update(),
                    this.trigger("init", this, {
                      page: this.setting.startPage,
                      mode: this.render.getOrientation(),
                    });
                }, 1);
            }
            loadFromHTML(t) {
              (this.ui = new p(this.block, this, this.setting, t)),
                (this.render = new m(
                  this,
                  this.setting,
                  this.ui.getDistElement()
                )),
                (this.flipController = new h(this.render, this)),
                (this.pages = new o(
                  this,
                  this.render,
                  this.ui.getDistElement(),
                  t
                )),
                this.pages.load(),
                this.render.start(),
                this.pages.show(this.setting.startPage),
                setTimeout(() => {
                  this.ui.update(),
                    this.trigger("init", this, {
                      page: this.setting.startPage,
                      mode: this.render.getOrientation(),
                    });
                }, 1);
            }
            updateFromImages(t) {
              let e = this.pages.getCurrentPageIndex();
              this.pages.destroy(),
                (this.pages = new n(this, this.render, t)),
                this.pages.load(),
                this.pages.show(e),
                this.trigger("update", this, {
                  page: e,
                  mode: this.render.getOrientation(),
                });
            }
            updateFromHtml(t) {
              let e = this.pages.getCurrentPageIndex();
              this.pages.destroy(),
                (this.pages = new o(
                  this,
                  this.render,
                  this.ui.getDistElement(),
                  t
                )),
                this.pages.load(),
                this.ui.updateItems(t),
                this.render.reload(),
                this.pages.show(e),
                this.trigger("update", this, {
                  page: e,
                  mode: this.render.getOrientation(),
                });
            }
            clear() {
              this.pages.destroy(), this.ui.clear();
            }
            turnToPrevPage() {
              this.pages.showPrev();
            }
            turnToNextPage() {
              this.pages.showNext();
            }
            turnToPage(t) {
              this.pages.show(t);
            }
            flipNext(t = "top") {
              this.flipController.flipNext(t);
            }
            flipPrev(t = "top") {
              this.flipController.flipPrev(t);
            }
            flip(t, e = "top") {
              this.flipController.flipToPage(t, e);
            }
            updateState(t) {
              this.trigger("changeState", this, t);
            }
            updatePageIndex(t) {
              this.trigger("flip", this, t);
            }
            updateOrientation(t) {
              this.ui.setOrientationStyle(t),
                this.update(),
                this.trigger("changeOrientation", this, t);
            }
            getPageCount() {
              return this.pages.getPageCount();
            }
            getCurrentPageIndex() {
              return this.pages.getCurrentPageIndex();
            }
            getPage(t) {
              return this.pages.getPage(t);
            }
            getRender() {
              return this.render;
            }
            getFlipController() {
              return this.flipController;
            }
            getOrientation() {
              return this.render.getOrientation();
            }
            getBoundsRect() {
              return this.render.getRect();
            }
            getSettings() {
              return this.setting;
            }
            getUI() {
              return this.ui;
            }
            getState() {
              return this.flipController.getState();
            }
            getPageCollection() {
              return this.pages;
            }
            startUserTouch(t) {
              (this.mousePosition = t),
                (this.isUserTouch = !0),
                (this.isUserMove = !1);
            }
            userMove(t, e) {
              this.isUserTouch || e || !this.setting.showPageCorners
                ? this.isUserTouch &&
                  r.GetDistanceBetweenTwoPoint(this.mousePosition, t) > 5 &&
                  ((this.isUserMove = !0), this.flipController.fold(t))
                : this.flipController.showCorner(t);
            }
            userStop(t, e = !1) {
              this.isUserTouch &&
                ((this.isUserTouch = !1),
                e ||
                  (this.isUserMove
                    ? this.flipController.stopMove()
                    : this.flipController.flip(t)));
            }
          }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(e);
    },
    6497: (t, e, i) => {
      "use strict";
      i.d(e, { N: () => x });
      var s = i(5155),
        n = i(2115),
        r = i(296),
        a = i(4416),
        o = i(6553),
        l = i(9686),
        h = i(1402),
        u = i(3127);
      function d(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e);
      }
      class c extends n.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = e.offsetParent,
              i = ((0, h.s)(t) && t.offsetWidth) || 0,
              s = this.props.sizeRef.current;
            (s.height = e.offsetHeight || 0),
              (s.width = e.offsetWidth || 0),
              (s.top = e.offsetTop),
              (s.left = e.offsetLeft),
              (s.right = i - s.width - s.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function p(t) {
        let { children: e, isPresent: i, anchorX: r, root: a } = t,
          o = (0, n.useId)(),
          l = (0, n.useRef)(null),
          h = (0, n.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: p } = (0, n.useContext)(u.Q),
          g = (function (...t) {
            return n.useCallback(
              (function (...t) {
                return (e) => {
                  let i = !1,
                    s = t.map((t) => {
                      let s = d(t, e);
                      return i || "function" != typeof s || (i = !0), s;
                    });
                  if (i)
                    return () => {
                      for (let e = 0; e < s.length; e++) {
                        let i = s[e];
                        "function" == typeof i ? i() : d(t[e], null);
                      }
                    };
                };
              })(...t),
              t
            );
          })(l, null == e ? void 0 : e.ref);
        return (
          (0, n.useInsertionEffect)(() => {
            let { width: t, height: e, top: s, left: n, right: u } = h.current;
            if (i || !l.current || !t || !e) return;
            l.current.dataset.motionPopId = o;
            let d = document.createElement("style");
            p && (d.nonce = p);
            let c = null != a ? a : document.head;
            return (
              c.appendChild(d),
              d.sheet &&
                d.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      o,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(t, "px !important;\n            height: ")
                    .concat(e, "px !important;\n            ")
                    .concat(
                      "left" === r ? "left: ".concat(n) : "right: ".concat(u),
                      "px !important;\n            top: "
                    )
                    .concat(s, "px !important;\n          }\n        ")
                ),
              () => {
                c.contains(d) && c.removeChild(d);
              }
            );
          }, [i]),
          (0, s.jsx)(c, {
            isPresent: i,
            childRef: l,
            sizeRef: h,
            children: n.cloneElement(e, { ref: g }),
          })
        );
      }
      let g = (t) => {
        let {
            children: e,
            initial: i,
            isPresent: r,
            onExitComplete: o,
            custom: h,
            presenceAffectsLayout: u,
            mode: d,
            anchorX: c,
            root: g,
          } = t,
          f = (0, a.M)(m),
          y = (0, n.useId)(),
          v = !0,
          x = (0, n.useMemo)(
            () => (
              (v = !1),
              {
                id: y,
                initial: i,
                isPresent: r,
                custom: h,
                onExitComplete: (t) => {
                  for (let e of (f.set(t, !0), f.values())) if (!e) return;
                  o && o();
                },
                register: (t) => (f.set(t, !1), () => f.delete(t)),
              }
            ),
            [r, f, o]
          );
        return (
          u && v && (x = { ...x }),
          (0, n.useMemo)(() => {
            f.forEach((t, e) => f.set(e, !1));
          }, [r]),
          n.useEffect(() => {
            r || f.size || !o || o();
          }, [r]),
          "popLayout" === d &&
            (e = (0, s.jsx)(p, {
              isPresent: r,
              anchorX: c,
              root: g,
              children: e,
            })),
          (0, s.jsx)(l.t.Provider, { value: x, children: e })
        );
      };
      function m() {
        return new Map();
      }
      var f = i(5601);
      let y = (t) => t.key || "";
      function v(t) {
        let e = [];
        return (
          n.Children.forEach(t, (t) => {
            (0, n.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      let x = (t) => {
        let {
            children: e,
            custom: i,
            initial: l = !0,
            onExitComplete: h,
            presenceAffectsLayout: u = !0,
            mode: d = "sync",
            propagate: c = !1,
            anchorX: p = "left",
            root: m,
          } = t,
          [x, w] = (0, f.xQ)(c),
          P = (0, n.useMemo)(() => v(e), [e]),
          b = c && !x ? [] : P.map(y),
          S = (0, n.useRef)(!0),
          T = (0, n.useRef)(P),
          C = (0, a.M)(() => new Map()),
          [M, A] = (0, n.useState)(P),
          [E, D] = (0, n.useState)(P);
        (0, o.E)(() => {
          (S.current = !1), (T.current = P);
          for (let t = 0; t < E.length; t++) {
            let e = y(E[t]);
            b.includes(e) ? C.delete(e) : !0 !== C.get(e) && C.set(e, !1);
          }
        }, [E, b.length, b.join("-")]);
        let R = [];
        if (P !== M) {
          let t = [...P];
          for (let e = 0; e < E.length; e++) {
            let i = E[e],
              s = y(i);
            b.includes(s) || (t.splice(e, 0, i), R.push(i));
          }
          return "wait" === d && R.length && (t = R), D(v(t)), A(P), null;
        }
        let { forceRender: k } = (0, n.useContext)(r.L);
        return (0, s.jsx)(s.Fragment, {
          children: E.map((t) => {
            let e = y(t),
              n = (!c || !!x) && (P === E || b.includes(e));
            return (0, s.jsx)(
              g,
              {
                isPresent: n,
                initial: (!S.current || !!l) && void 0,
                custom: i,
                presenceAffectsLayout: u,
                mode: d,
                root: m,
                onExitComplete: n
                  ? void 0
                  : () => {
                      if (!C.has(e)) return;
                      C.set(e, !0);
                      let t = !0;
                      C.forEach((e) => {
                        e || (t = !1);
                      }),
                        t &&
                          (null == k || k(),
                          D(T.current),
                          c && (null == w || w()),
                          h && h());
                    },
                anchorX: p,
                children: t,
              },
              e
            );
          }),
        });
      };
    },
    6553: (t, e, i) => {
      "use strict";
      i.d(e, { E: () => n });
      var s = i(2115);
      let n = i(3577).B ? s.useLayoutEffect : s.useEffect;
    },
    6676: (t, e, i) => {
      "use strict";
      i.d(e, { A: () => a });
      var s = i(2115),
        n = i(5768);
      let r = s.forwardRef((t, e) => {
          let i = (0, s.useRef)(null),
            r = (0, s.useRef)([]),
            a = (0, s.useRef)(),
            [o, l] = (0, s.useState)([]);
          (0, s.useImperativeHandle)(e, () => ({ pageFlip: () => a.current }));
          let h = (0, s.useCallback)(() => {
              a.current && a.current.clear();
            }, []),
            u = (0, s.useCallback)(() => {
              let t = a.current;
              t &&
                (t.off("flip"),
                t.off("changeOrientation"),
                t.off("changeState"),
                t.off("init"),
                t.off("update"));
            }, []);
          return (
            (0, s.useEffect)(() => {
              if (((r.current = []), t.children)) {
                let e = s.Children.map(t.children, (t) =>
                  s.cloneElement(t, {
                    ref: (t) => {
                      t && r.current.push(t);
                    },
                  })
                );
                (t.renderOnlyPageLengthChange && o.length === e.length) ||
                  (e.length < o.length && h(), l(e));
              }
            }, [t.children]),
            (0, s.useEffect)(() => {
              o.length > 0 &&
                r.current.length > 0 &&
                (u(),
                i.current &&
                  !a.current &&
                  (a.current = new n.PageFlip(i.current, t)),
                a.current.getFlipController()
                  ? a.current.updateFromHtml(r.current)
                  : a.current.loadFromHTML(r.current),
                (() => {
                  let e = a.current;
                  e &&
                    (t.onFlip && e.on("flip", (e) => t.onFlip(e)),
                    t.onChangeOrientation &&
                      e.on("changeOrientation", (e) =>
                        t.onChangeOrientation(e)
                      ),
                    t.onChangeState &&
                      e.on("changeState", (e) => t.onChangeState(e)),
                    t.onInit && e.on("init", (e) => t.onInit(e)),
                    t.onUpdate && e.on("update", (e) => t.onUpdate(e)));
                })());
            }, [o]),
            s.createElement(
              "div",
              { ref: i, className: t.className, style: t.style },
              o
            )
          );
        }),
        a = s.memo(r);
    },
    8662: (t, e, i) => {
      "use strict";
      i.d(e, { U: () => r });
      var s = i(3577),
        n = i(4741);
      function r() {
        if (((n.r.current = !0), s.B))
          if (window.matchMedia) {
            let t = window.matchMedia("(prefers-reduced-motion)"),
              e = () => (n.O.current = t.matches);
            t.addEventListener("change", e), e();
          } else n.O.current = !1;
      }
    },
    9686: (t, e, i) => {
      "use strict";
      i.d(e, { t: () => s });
      let s = (0, i(2115).createContext)(null);
    },
    9862: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let s = i(8140)._(i(2115)).default.createContext(null);
    },
  },
]);
