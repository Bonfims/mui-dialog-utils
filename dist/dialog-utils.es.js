import { jsxs as Se, jsx as P } from "react/jsx-runtime";
import * as E from "react";
import xe, { Children as dr, isValidElement as Je, cloneElement as dt, createContext as fr, Component as pr, createElement as Cn, useState as mr } from "react";
import { ThemeContext as hr, keyframes as on } from "@emotion/react";
import gr from "@emotion/styled";
import * as yr from "react-dom";
import at from "react-dom";
const mo = xe.createContext({
  /**
   * Envia um dialogo de alerta na tela do usuário.  
   * Você pode enviar `options.title` para adicionar um titulo ao modal e também `options.label` para trocar o label do botão
   * @param {string} message Mensagem
   * @param {object} options Dados adicionais
   * @returns {Promise}
   */
  setAlert: (e, t) => new Promise((n) => alert(e) | n()),
  /**
   * Envia um dialogo de confirmação na tela do usuário.  
   * Você pode enviar `options.confirmLabel` ou `options.cancelLabel` para trocar o label dos botões
   * @param {string} message Mensagem do dialogo
   * @param {string} title Titulo do modal
   * @param {options} options Dados adicionais
   * @returns {Promise}
   */
  setConfirm: (e, t, n) => new Promise((o) => confirm(e) ? o(!0) : o(!1)),
  /**
   * Envia um dialogo com o conteúdo livre determinado por parâmetro.
   * > Use `setDialog(false)` para fechar o dialogo mais recente.
   * @param {object} content Conteúdo
   * @param {options} title Dados adicionais
   * @returns {null}
   */
  setDialog: (e, t) => console.error("Dialog context not initialized", e, t),
  initialized: !1
});
function ie(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), i, s;
  for (s = 0; s < o.length; s++)
    i = o[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function y() {
  return y = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, y.apply(this, arguments);
}
function br(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qt = { exports: {} }, lt = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function vr() {
  if (Rn)
    return ee;
  Rn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function T(h) {
    if (typeof h == "object" && h !== null) {
      var w = h.$$typeof;
      switch (w) {
        case t:
          switch (h = h.type, h) {
            case c:
            case u:
            case o:
            case s:
            case i:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case l:
                case d:
                case b:
                case v:
                case a:
                  return h;
                default:
                  return w;
              }
          }
        case n:
          return w;
      }
    }
  }
  function C(h) {
    return T(h) === u;
  }
  return ee.AsyncMode = c, ee.ConcurrentMode = u, ee.ContextConsumer = l, ee.ContextProvider = a, ee.Element = t, ee.ForwardRef = d, ee.Fragment = o, ee.Lazy = b, ee.Memo = v, ee.Portal = n, ee.Profiler = s, ee.StrictMode = i, ee.Suspense = p, ee.isAsyncMode = function(h) {
    return C(h) || T(h) === c;
  }, ee.isConcurrentMode = C, ee.isContextConsumer = function(h) {
    return T(h) === l;
  }, ee.isContextProvider = function(h) {
    return T(h) === a;
  }, ee.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, ee.isForwardRef = function(h) {
    return T(h) === d;
  }, ee.isFragment = function(h) {
    return T(h) === o;
  }, ee.isLazy = function(h) {
    return T(h) === b;
  }, ee.isMemo = function(h) {
    return T(h) === v;
  }, ee.isPortal = function(h) {
    return T(h) === n;
  }, ee.isProfiler = function(h) {
    return T(h) === s;
  }, ee.isStrictMode = function(h) {
    return T(h) === i;
  }, ee.isSuspense = function(h) {
    return T(h) === p;
  }, ee.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === o || h === u || h === s || h === i || h === p || h === f || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === v || h.$$typeof === a || h.$$typeof === l || h.$$typeof === d || h.$$typeof === m || h.$$typeof === S || h.$$typeof === z || h.$$typeof === g);
  }, ee.typeOf = T, ee;
}
var te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sn;
function Er() {
  return Sn || (Sn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
    function T(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === o || R === u || R === s || R === i || R === p || R === f || typeof R == "object" && R !== null && (R.$$typeof === b || R.$$typeof === v || R.$$typeof === a || R.$$typeof === l || R.$$typeof === d || R.$$typeof === m || R.$$typeof === S || R.$$typeof === z || R.$$typeof === g);
    }
    function C(R) {
      if (typeof R == "object" && R !== null) {
        var ue = R.$$typeof;
        switch (ue) {
          case t:
            var $ = R.type;
            switch ($) {
              case c:
              case u:
              case o:
              case s:
              case i:
              case p:
                return $;
              default:
                var $e = $ && $.$$typeof;
                switch ($e) {
                  case l:
                  case d:
                  case b:
                  case v:
                  case a:
                    return $e;
                  default:
                    return ue;
                }
            }
          case n:
            return ue;
        }
      }
    }
    var h = c, w = u, B = l, H = a, Z = t, k = d, _ = o, W = b, G = v, I = n, X = s, M = i, F = p, Q = !1;
    function Te(R) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(R) || C(R) === c;
    }
    function x(R) {
      return C(R) === u;
    }
    function O(R) {
      return C(R) === l;
    }
    function U(R) {
      return C(R) === a;
    }
    function L(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function N(R) {
      return C(R) === d;
    }
    function D(R) {
      return C(R) === o;
    }
    function A(R) {
      return C(R) === b;
    }
    function V(R) {
      return C(R) === v;
    }
    function Y(R) {
      return C(R) === n;
    }
    function j(R) {
      return C(R) === s;
    }
    function q(R) {
      return C(R) === i;
    }
    function fe(R) {
      return C(R) === p;
    }
    te.AsyncMode = h, te.ConcurrentMode = w, te.ContextConsumer = B, te.ContextProvider = H, te.Element = Z, te.ForwardRef = k, te.Fragment = _, te.Lazy = W, te.Memo = G, te.Portal = I, te.Profiler = X, te.StrictMode = M, te.Suspense = F, te.isAsyncMode = Te, te.isConcurrentMode = x, te.isContextConsumer = O, te.isContextProvider = U, te.isElement = L, te.isForwardRef = N, te.isFragment = D, te.isLazy = A, te.isMemo = V, te.isPortal = Y, te.isProfiler = j, te.isStrictMode = q, te.isSuspense = fe, te.isValidElementType = T, te.typeOf = C;
  }()), te;
}
var On;
function ho() {
  return On || (On = 1, process.env.NODE_ENV === "production" ? lt.exports = vr() : lt.exports = Er()), lt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var At, $n;
function xr() {
  if ($n)
    return At;
  $n = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function o(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return At = i() ? Object.assign : function(s, a) {
    for (var l, c = o(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        u = e(l);
        for (var f = 0; f < u.length; f++)
          n.call(l, u[f]) && (c[u[f]] = l[u[f]]);
      }
    }
    return c;
  }, At;
}
var Dt, Pn;
function rn() {
  if (Pn)
    return Dt;
  Pn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Dt = e, Dt;
}
var Bt, Nn;
function go() {
  return Nn || (Nn = 1, Bt = Function.call.bind(Object.prototype.hasOwnProperty)), Bt;
}
var jt, wn;
function Tr() {
  if (wn)
    return jt;
  wn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = rn(), n = {}, o = go();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (o(s, d)) {
          var p;
          try {
            if (typeof s[d] != "function") {
              var f = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            p = s[d](a, d, c, l, null, t);
          } catch (b) {
            p = b;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var v = u ? u() : "";
            e(
              "Failed " + l + " type: " + p.message + (v ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, jt = i, jt;
}
var zt, Mn;
function Cr() {
  if (Mn)
    return zt;
  Mn = 1;
  var e = ho(), t = xr(), n = rn(), o = go(), i = Tr(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return zt = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(x) {
      var O = x && (u && x[u] || x[d]);
      if (typeof O == "function")
        return O;
    }
    var f = "<<anonymous>>", v = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: z(),
      arrayOf: T,
      element: C(),
      elementType: h(),
      instanceOf: w,
      node: k(),
      objectOf: H,
      oneOf: B,
      oneOfType: Z,
      shape: W,
      exact: G
    };
    function b(x, O) {
      return x === O ? x !== 0 || 1 / x === 1 / O : x !== x && O !== O;
    }
    function g(x, O) {
      this.message = x, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function m(x) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, U = 0;
      function L(D, A, V, Y, j, q, fe) {
        if (Y = Y || f, q = q || V, fe !== n) {
          if (c) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = Y + ":" + V;
            !O[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            U < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[ue] = !0, U++);
          }
        }
        return A[V] == null ? D ? A[V] === null ? new g("The " + j + " `" + q + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new g("The " + j + " `" + q + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : x(A, V, Y, j, q);
      }
      var N = L.bind(null, !1);
      return N.isRequired = L.bind(null, !0), N;
    }
    function S(x) {
      function O(U, L, N, D, A, V) {
        var Y = U[L], j = M(Y);
        if (j !== x) {
          var q = F(Y);
          return new g(
            "Invalid " + D + " `" + A + "` of type " + ("`" + q + "` supplied to `" + N + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return m(O);
    }
    function z() {
      return m(a);
    }
    function T(x) {
      function O(U, L, N, D, A) {
        if (typeof x != "function")
          return new g("Property `" + A + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var V = U[L];
        if (!Array.isArray(V)) {
          var Y = M(V);
          return new g("Invalid " + D + " `" + A + "` of type " + ("`" + Y + "` supplied to `" + N + "`, expected an array."));
        }
        for (var j = 0; j < V.length; j++) {
          var q = x(V, j, N, D, A + "[" + j + "]", n);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return m(O);
    }
    function C() {
      function x(O, U, L, N, D) {
        var A = O[U];
        if (!l(A)) {
          var V = M(A);
          return new g("Invalid " + N + " `" + D + "` of type " + ("`" + V + "` supplied to `" + L + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(x);
    }
    function h() {
      function x(O, U, L, N, D) {
        var A = O[U];
        if (!e.isValidElementType(A)) {
          var V = M(A);
          return new g("Invalid " + N + " `" + D + "` of type " + ("`" + V + "` supplied to `" + L + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(x);
    }
    function w(x) {
      function O(U, L, N, D, A) {
        if (!(U[L] instanceof x)) {
          var V = x.name || f, Y = Te(U[L]);
          return new g("Invalid " + D + " `" + A + "` of type " + ("`" + Y + "` supplied to `" + N + "`, expected ") + ("instance of `" + V + "`."));
        }
        return null;
      }
      return m(O);
    }
    function B(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function O(U, L, N, D, A) {
        for (var V = U[L], Y = 0; Y < x.length; Y++)
          if (b(V, x[Y]))
            return null;
        var j = JSON.stringify(x, function(fe, R) {
          var ue = F(R);
          return ue === "symbol" ? String(R) : R;
        });
        return new g("Invalid " + D + " `" + A + "` of value `" + String(V) + "` " + ("supplied to `" + N + "`, expected one of " + j + "."));
      }
      return m(O);
    }
    function H(x) {
      function O(U, L, N, D, A) {
        if (typeof x != "function")
          return new g("Property `" + A + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var V = U[L], Y = M(V);
        if (Y !== "object")
          return new g("Invalid " + D + " `" + A + "` of type " + ("`" + Y + "` supplied to `" + N + "`, expected an object."));
        for (var j in V)
          if (o(V, j)) {
            var q = x(V, j, N, D, A + "." + j, n);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return m(O);
    }
    function Z(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var O = 0; O < x.length; O++) {
        var U = x[O];
        if (typeof U != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Q(U) + " at index " + O + "."
          ), a;
      }
      function L(N, D, A, V, Y) {
        for (var j = [], q = 0; q < x.length; q++) {
          var fe = x[q], R = fe(N, D, A, V, Y, n);
          if (R == null)
            return null;
          R.data && o(R.data, "expectedType") && j.push(R.data.expectedType);
        }
        var ue = j.length > 0 ? ", expected one of type [" + j.join(", ") + "]" : "";
        return new g("Invalid " + V + " `" + Y + "` supplied to " + ("`" + A + "`" + ue + "."));
      }
      return m(L);
    }
    function k() {
      function x(O, U, L, N, D) {
        return I(O[U]) ? null : new g("Invalid " + N + " `" + D + "` supplied to " + ("`" + L + "`, expected a ReactNode."));
      }
      return m(x);
    }
    function _(x, O, U, L, N) {
      return new g(
        (x || "React class") + ": " + O + " type `" + U + "." + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function W(x) {
      function O(U, L, N, D, A) {
        var V = U[L], Y = M(V);
        if (Y !== "object")
          return new g("Invalid " + D + " `" + A + "` of type `" + Y + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var j in x) {
          var q = x[j];
          if (typeof q != "function")
            return _(N, D, A, j, F(q));
          var fe = q(V, j, N, D, A + "." + j, n);
          if (fe)
            return fe;
        }
        return null;
      }
      return m(O);
    }
    function G(x) {
      function O(U, L, N, D, A) {
        var V = U[L], Y = M(V);
        if (Y !== "object")
          return new g("Invalid " + D + " `" + A + "` of type `" + Y + "` " + ("supplied to `" + N + "`, expected `object`."));
        var j = t({}, U[L], x);
        for (var q in j) {
          var fe = x[q];
          if (o(x, q) && typeof fe != "function")
            return _(N, D, A, q, F(fe));
          if (!fe)
            return new g(
              "Invalid " + D + " `" + A + "` key `" + q + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(U[L], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var R = fe(V, q, N, D, A + "." + q, n);
          if (R)
            return R;
        }
        return null;
      }
      return m(O);
    }
    function I(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(I);
          if (x === null || l(x))
            return !0;
          var O = p(x);
          if (O) {
            var U = O.call(x), L;
            if (O !== x.entries) {
              for (; !(L = U.next()).done; )
                if (!I(L.value))
                  return !1;
            } else
              for (; !(L = U.next()).done; ) {
                var N = L.value;
                if (N && !I(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function X(x, O) {
      return x === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function M(x) {
      var O = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : X(O, x) ? "symbol" : O;
    }
    function F(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var O = M(x);
      if (O === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function Q(x) {
      var O = F(x);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function Te(x) {
      return !x.constructor || !x.constructor.name ? f : x.constructor.name;
    }
    return v.checkPropTypes = i, v.resetWarningCache = i.resetWarningCache, v.PropTypes = v, v;
  }, zt;
}
var Ft, In;
function Rr() {
  if (In)
    return Ft;
  In = 1;
  var e = rn();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ft = function() {
    function o(a, l, c, u, d, p) {
      if (p !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    o.isRequired = o;
    function i() {
      return o;
    }
    var s = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: i,
      element: o,
      elementType: o,
      instanceOf: i,
      node: o,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Ft;
}
if (process.env.NODE_ENV !== "production") {
  var Sr = ho(), Or = !0;
  qt.exports = Cr()(Sr.isElement, Or);
} else
  qt.exports = Rr()();
var $r = qt.exports;
const r = /* @__PURE__ */ br($r);
function yo(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = yo(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function re() {
  for (var e, t, n = 0, o = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = yo(e)) && (o && (o += " "), o += t);
  return o;
}
function tt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...o) {
    return e(...o) || t(...o);
  };
}
function Pe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function bo(e) {
  if (!Pe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = bo(e[n]);
  }), t;
}
function Ce(e, t, n = {
  clone: !0
}) {
  const o = n.clone ? y({}, e) : e;
  return Pe(e) && Pe(t) && Object.keys(t).forEach((i) => {
    i !== "__proto__" && (Pe(t[i]) && i in e && Pe(e[i]) ? o[i] = Ce(e[i], t[i], n) : n.clone ? o[i] = Pe(t[i]) ? bo(t[i]) : t[i] : o[i] = t[i]);
  }), o;
}
function Pr(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function vo(e, t, n, o, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !Pr(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Eo = tt(r.element, vo);
Eo.isRequired = tt(r.element.isRequired, vo);
const sn = Eo;
function Nr(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function wr(e, t, n, o, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !Nr(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Mr = tt(r.elementType, wr), Ir = "exact-prop: ​";
function xo(e) {
  return process.env.NODE_ENV === "production" ? e : y({}, e, {
    [Ir]: (t) => {
      const n = Object.keys(t).filter((o) => !e.hasOwnProperty(o));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Ke(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var Kt = { exports: {} }, ne = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function _r() {
  if (_n)
    return ne;
  _n = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function g(m) {
    if (typeof m == "object" && m !== null) {
      var S = m.$$typeof;
      switch (S) {
        case e:
          switch (m = m.type, m) {
            case n:
            case i:
            case o:
            case u:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case l:
                case a:
                case c:
                case f:
                case p:
                case s:
                  return m;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return ne.ContextConsumer = a, ne.ContextProvider = s, ne.Element = e, ne.ForwardRef = c, ne.Fragment = n, ne.Lazy = f, ne.Memo = p, ne.Portal = t, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = u, ne.SuspenseList = d, ne.isAsyncMode = function() {
    return !1;
  }, ne.isConcurrentMode = function() {
    return !1;
  }, ne.isContextConsumer = function(m) {
    return g(m) === a;
  }, ne.isContextProvider = function(m) {
    return g(m) === s;
  }, ne.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, ne.isForwardRef = function(m) {
    return g(m) === c;
  }, ne.isFragment = function(m) {
    return g(m) === n;
  }, ne.isLazy = function(m) {
    return g(m) === f;
  }, ne.isMemo = function(m) {
    return g(m) === p;
  }, ne.isPortal = function(m) {
    return g(m) === t;
  }, ne.isProfiler = function(m) {
    return g(m) === i;
  }, ne.isStrictMode = function(m) {
    return g(m) === o;
  }, ne.isSuspense = function(m) {
    return g(m) === u;
  }, ne.isSuspenseList = function(m) {
    return g(m) === d;
  }, ne.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === i || m === o || m === u || m === d || m === v || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === p || m.$$typeof === s || m.$$typeof === a || m.$$typeof === c || m.$$typeof === b || m.getModuleId !== void 0);
  }, ne.typeOf = g, ne;
}
var oe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kn;
function kr() {
  return kn || (kn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), b = !1, g = !1, m = !1, S = !1, z = !1, T;
    T = Symbol.for("react.module.reference");
    function C($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === n || $ === i || z || $ === o || $ === u || $ === d || S || $ === v || b || g || m || typeof $ == "object" && $ !== null && ($.$$typeof === f || $.$$typeof === p || $.$$typeof === s || $.$$typeof === a || $.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === T || $.getModuleId !== void 0));
    }
    function h($) {
      if (typeof $ == "object" && $ !== null) {
        var $e = $.$$typeof;
        switch ($e) {
          case e:
            var Be = $.type;
            switch (Be) {
              case n:
              case i:
              case o:
              case u:
              case d:
                return Be;
              default:
                var it = Be && Be.$$typeof;
                switch (it) {
                  case l:
                  case a:
                  case c:
                  case f:
                  case p:
                  case s:
                    return it;
                  default:
                    return $e;
                }
            }
          case t:
            return $e;
        }
      }
    }
    var w = a, B = s, H = e, Z = c, k = n, _ = f, W = p, G = t, I = i, X = o, M = u, F = d, Q = !1, Te = !1;
    function x($) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O($) {
      return Te || (Te = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U($) {
      return h($) === a;
    }
    function L($) {
      return h($) === s;
    }
    function N($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === e;
    }
    function D($) {
      return h($) === c;
    }
    function A($) {
      return h($) === n;
    }
    function V($) {
      return h($) === f;
    }
    function Y($) {
      return h($) === p;
    }
    function j($) {
      return h($) === t;
    }
    function q($) {
      return h($) === i;
    }
    function fe($) {
      return h($) === o;
    }
    function R($) {
      return h($) === u;
    }
    function ue($) {
      return h($) === d;
    }
    oe.ContextConsumer = w, oe.ContextProvider = B, oe.Element = H, oe.ForwardRef = Z, oe.Fragment = k, oe.Lazy = _, oe.Memo = W, oe.Portal = G, oe.Profiler = I, oe.StrictMode = X, oe.Suspense = M, oe.SuspenseList = F, oe.isAsyncMode = x, oe.isConcurrentMode = O, oe.isContextConsumer = U, oe.isContextProvider = L, oe.isElement = N, oe.isForwardRef = D, oe.isFragment = A, oe.isLazy = V, oe.isMemo = Y, oe.isPortal = j, oe.isProfiler = q, oe.isStrictMode = fe, oe.isSuspense = R, oe.isSuspenseList = ue, oe.isValidElementType = C, oe.typeOf = h;
  }()), oe;
}
process.env.NODE_ENV === "production" ? Kt.exports = _r() : Kt.exports = kr();
var An = Kt.exports;
const Ar = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Dr(e) {
  const t = `${e}`.match(Ar);
  return t && t[1] || "";
}
function To(e, t = "") {
  return e.displayName || e.name || Dr(e) || t;
}
function Dn(e, t, n) {
  const o = To(t);
  return e.displayName || (o !== "" ? `${n}(${o})` : n);
}
function Br(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return To(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case An.ForwardRef:
          return Dn(e, e.render, "ForwardRef");
        case An.Memo:
          return Dn(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Co(e, t, n, o, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const jr = r.oneOfType([r.func, r.object]), zr = jr;
function J(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ke(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Bn(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function we(e) {
  return e && e.ownerDocument || document;
}
function an(e) {
  return we(e).defaultView || window;
}
function Ht(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Gt = typeof window < "u" ? E.useLayoutEffect : E.useEffect;
let jn = 0;
function Fr(e) {
  const [t, n] = E.useState(e), o = e || t;
  return E.useEffect(() => {
    t == null && (jn += 1, n(`mui-${jn}`));
  }, [t]), o;
}
const zn = E.useId;
function Lr(e) {
  if (zn !== void 0) {
    const t = zn();
    return e ?? t;
  }
  return Fr(e);
}
function Ye(e) {
  const t = E.useRef(e);
  return Gt(() => {
    t.current = e;
  }), E.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Ae(...e) {
  return E.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Ht(n, t);
    });
  }, e);
}
const Fn = {};
function Vr(e, t) {
  const n = E.useRef(Fn);
  return n.current === Fn && (n.current = e(t)), n;
}
const Wr = [];
function Ur(e) {
  E.useEffect(e, Wr);
}
class vt {
  constructor() {
    this.currentId = 0, this.clear = () => {
      this.currentId !== 0 && (clearTimeout(this.currentId), this.currentId = 0);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new vt();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = 0, n();
    }, t);
  }
}
function Yr() {
  const e = Vr(vt.create).current;
  return Ur(e.disposeEffect), e;
}
let Et = !0, Xt = !1;
const qr = new vt(), Kr = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Hr(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Kr[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Gr(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Et = !0);
}
function Lt() {
  Et = !1;
}
function Xr() {
  this.visibilityState === "hidden" && Xt && (Et = !0);
}
function Jr(e) {
  e.addEventListener("keydown", Gr, !0), e.addEventListener("mousedown", Lt, !0), e.addEventListener("pointerdown", Lt, !0), e.addEventListener("touchstart", Lt, !0), e.addEventListener("visibilitychange", Xr, !0);
}
function Zr(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Et || Hr(t);
}
function Qr() {
  const e = E.useCallback((i) => {
    i != null && Jr(i.ownerDocument);
  }, []), t = E.useRef(!1);
  function n() {
    return t.current ? (Xt = !0, qr.start(100, () => {
      Xt = !1;
    }), t.current = !1, !0) : !1;
  }
  function o(i) {
    return Zr(i) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: o,
    onBlur: n,
    ref: e
  };
}
function ei(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function ti(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function ni(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const oi = Number.isInteger || ni;
function Ro(e, t, n, o) {
  const i = e[t];
  if (i == null || !oi(i)) {
    const s = ti(i);
    return new RangeError(`Invalid ${o} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function So(e, t, ...n) {
  return e[t] === void 0 ? null : Ro(e, t, ...n);
}
function Jt() {
  return null;
}
So.isRequired = Ro;
Jt.isRequired = Jt;
const ri = process.env.NODE_ENV === "production" ? Jt : So;
function ln(e, t) {
  const n = y({}, t);
  return Object.keys(e).forEach((o) => {
    if (o.toString().match(/^(components|slots)$/))
      n[o] = y({}, e[o], n[o]);
    else if (o.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[o] || {}, s = t[o];
      n[o] = {}, !s || !Object.keys(s) ? n[o] = i : !i || !Object.keys(i) ? n[o] = s : (n[o] = y({}, s), Object.keys(i).forEach((a) => {
        n[o][a] = ln(i[a], s[a]);
      }));
    } else
      n[o] === void 0 && (n[o] = e[o]);
  }), n;
}
function ge(e, t, n = void 0) {
  const o = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (i) => {
      o[i] = e[i].reduce((s, a) => {
        if (a) {
          const l = t(a);
          l !== "" && s.push(l), n && n[a] && s.push(n[a]);
        }
        return s;
      }, []).join(" ");
    }
  ), o;
}
const Ln = (e) => e, ii = () => {
  let e = Ln;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ln;
    }
  };
}, si = ii(), ai = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function pe(e, t, n = "Mui") {
  const o = ai[t];
  return o ? `${n}-${o}` : `${si.generate(e)}-${t}`;
}
function me(e, t, n = "Mui") {
  const o = {};
  return t.forEach((i) => {
    o[i] = pe(e, i, n);
  }), o;
}
function li(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function ci(e) {
  return typeof e == "string";
}
function ui(e, t, n) {
  return e === void 0 || ci(e) ? t : y({}, t, {
    ownerState: y({}, t.ownerState, n)
  });
}
function Oo(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    n[o] = e[o];
  }), n;
}
function di(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Vn(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function fi(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const v = re(n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, o == null ? void 0 : o.className), b = y({}, n == null ? void 0 : n.style, i == null ? void 0 : i.style, o == null ? void 0 : o.style), g = y({}, n, i, o);
    return v.length > 0 && (g.className = v), Object.keys(b).length > 0 && (g.style = b), {
      props: g,
      internalRef: void 0
    };
  }
  const a = Oo(y({}, i, o)), l = Vn(o), c = Vn(i), u = t(a), d = re(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, o == null ? void 0 : o.className), p = y({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, i == null ? void 0 : i.style, o == null ? void 0 : o.style), f = y({}, u, n, c, l);
  return d.length > 0 && (f.className = d), Object.keys(p).length > 0 && (f.style = p), {
    props: f,
    internalRef: u.ref
  };
}
const pi = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Wn(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: o,
    ownerState: i,
    skipResolvingSlotProps: s = !1
  } = e, a = ie(e, pi), l = s ? {} : di(o, i), {
    props: c,
    internalRef: u
  } = fi(y({}, a, {
    externalSlotProps: l
  })), d = Ae(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return ui(n, y({}, c, {
    ref: d
  }), i);
}
function mi(e) {
  const t = we(e);
  return t.body === e ? an(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Ze(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Un(e) {
  return parseInt(an(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function hi(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function Yn(e, t, n, o, i) {
  const s = [t, n, ...o];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1, c = !hi(a);
    l && c && Ze(a, i);
  });
}
function Vt(e, t) {
  let n = -1;
  return e.some((o, i) => t(o) ? (n = i, !0) : !1), n;
}
function gi(e, t) {
  const n = [], o = e.container;
  if (!t.disableScrollLock) {
    if (mi(o)) {
      const a = ei(we(o));
      n.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${Un(o) + a}px`;
      const l = we(o).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Un(c) + a}px`;
      });
    }
    let s;
    if (o.parentNode instanceof DocumentFragment)
      s = we(o).body;
    else {
      const a = o.parentElement, l = an(o);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : o;
    }
    n.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function yi(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class bi {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && Ze(t.modalRef, !1);
    const i = yi(n);
    Yn(n, t.mount, t.modalRef, i, !0);
    const s = Vt(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), o);
  }
  mount(t, n) {
    const o = Vt(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[o];
    i.restore || (i.restore = gi(i, n));
  }
  remove(t, n = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const i = Vt(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(o, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Ze(t.modalRef, n), Yn(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Ze(a.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function vi(e) {
  return typeof e == "function" ? e() : e;
}
function Ei(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const xi = new bi();
function Ti(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: o = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: i = xi,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: p
  } = e, f = E.useRef({}), v = E.useRef(null), b = E.useRef(null), g = Ae(b, p), [m, S] = E.useState(!d), z = Ei(c);
  let T = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (T = !1);
  const C = () => we(v.current), h = () => (f.current.modalRef = b.current, f.current.mount = v.current, f.current), w = () => {
    i.mount(h(), {
      disableScrollLock: o
    }), b.current && (b.current.scrollTop = 0);
  }, B = Ye(() => {
    const M = vi(t) || C().body;
    i.add(h(), M), b.current && w();
  }), H = E.useCallback(() => i.isTopModal(h()), [i]), Z = Ye((M) => {
    v.current = M, M && (d && H() ? w() : b.current && Ze(b.current, T));
  }), k = E.useCallback(() => {
    i.remove(h(), T);
  }, [T, i]);
  E.useEffect(() => () => {
    k();
  }, [k]), E.useEffect(() => {
    d ? B() : (!z || !s) && k();
  }, [d, k, z, s, B]);
  const _ = (M) => (F) => {
    var Q;
    (Q = M.onKeyDown) == null || Q.call(M, F), !(F.key !== "Escape" || F.which === 229 || // Wait until IME is settled.
    !H()) && (n || (F.stopPropagation(), u && u(F, "escapeKeyDown")));
  }, W = (M) => (F) => {
    var Q;
    (Q = M.onClick) == null || Q.call(M, F), F.target === F.currentTarget && u && u(F, "backdropClick");
  };
  return {
    getRootProps: (M = {}) => {
      const F = Oo(e);
      delete F.onTransitionEnter, delete F.onTransitionExited;
      const Q = y({}, F, M);
      return y({
        role: "presentation"
      }, Q, {
        onKeyDown: _(Q),
        ref: g
      });
    },
    getBackdropProps: (M = {}) => {
      const F = M;
      return y({
        "aria-hidden": !0
      }, F, {
        onClick: W(F),
        open: d
      });
    },
    getTransitionProps: () => {
      const M = () => {
        S(!1), a && a();
      }, F = () => {
        S(!0), l && l(), s && k();
      };
      return {
        onEnter: Bn(M, c == null ? void 0 : c.props.onEnter),
        onExited: Bn(F, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: g,
    portalRef: Z,
    isTopModal: H,
    exited: m,
    hasTransition: z
  };
}
const Ci = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Ri(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Si(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Oi(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Si(e));
}
function $i(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Ci)).forEach((o, i) => {
    const s = Ri(o);
    s === -1 || !Oi(o) || (s === 0 ? t.push(o) : n.push({
      documentOrder: i,
      tabIndex: s,
      node: o
    }));
  }), n.sort((o, i) => o.tabIndex === i.tabIndex ? o.documentOrder - i.documentOrder : o.tabIndex - i.tabIndex).map((o) => o.node).concat(t);
}
function Pi() {
  return !0;
}
function mt(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = $i,
    isEnabled: a = Pi,
    open: l
  } = e, c = E.useRef(!1), u = E.useRef(null), d = E.useRef(null), p = E.useRef(null), f = E.useRef(null), v = E.useRef(!1), b = E.useRef(null), g = Ae(t.ref, b), m = E.useRef(null);
  E.useEffect(() => {
    !l || !b.current || (v.current = !n);
  }, [n, l]), E.useEffect(() => {
    if (!l || !b.current)
      return;
    const T = we(b.current);
    return b.current.contains(T.activeElement) || (b.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), b.current.setAttribute("tabIndex", "-1")), v.current && b.current.focus()), () => {
      i || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), E.useEffect(() => {
    if (!l || !b.current)
      return;
    const T = we(b.current), C = (B) => {
      m.current = B, !(o || !a() || B.key !== "Tab") && T.activeElement === b.current && B.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, h = () => {
      const B = b.current;
      if (B === null)
        return;
      if (!T.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (B.contains(T.activeElement) || o && T.activeElement !== u.current && T.activeElement !== d.current)
        return;
      if (T.activeElement !== f.current)
        f.current = null;
      else if (f.current !== null)
        return;
      if (!v.current)
        return;
      let H = [];
      if ((T.activeElement === u.current || T.activeElement === d.current) && (H = s(b.current)), H.length > 0) {
        var Z, k;
        const _ = !!((Z = m.current) != null && Z.shiftKey && ((k = m.current) == null ? void 0 : k.key) === "Tab"), W = H[0], G = H[H.length - 1];
        typeof W != "string" && typeof G != "string" && (_ ? G.focus() : W.focus());
      } else
        B.focus();
    };
    T.addEventListener("focusin", h), T.addEventListener("keydown", C, !0);
    const w = setInterval(() => {
      T.activeElement && T.activeElement.tagName === "BODY" && h();
    }, 50);
    return () => {
      clearInterval(w), T.removeEventListener("focusin", h), T.removeEventListener("keydown", C, !0);
    };
  }, [n, o, i, a, l, s]);
  const S = (T) => {
    p.current === null && (p.current = T.relatedTarget), v.current = !0, f.current = T.target;
    const C = t.props.onFocus;
    C && C(T);
  }, z = (T) => {
    p.current === null && (p.current = T.relatedTarget), v.current = !0;
  };
  return /* @__PURE__ */ Se(E.Fragment, {
    children: [/* @__PURE__ */ P("div", {
      tabIndex: l ? 0 : -1,
      onFocus: z,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(t, {
      ref: g,
      onFocus: S
    }), /* @__PURE__ */ P("div", {
      tabIndex: l ? 0 : -1,
      onFocus: z,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (mt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: sn,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: r.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: r.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: r.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: r.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: r.func,
  /**
   * If `true`, focus is locked.
   */
  open: r.bool.isRequired
});
process.env.NODE_ENV !== "production" && (mt.propTypes = xo(mt.propTypes));
function Ni(e) {
  return typeof e == "function" ? e() : e;
}
const ht = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    children: o,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = E.useState(null), c = Ae(/* @__PURE__ */ E.isValidElement(o) ? o.ref : null, n);
  if (Gt(() => {
    s || l(Ni(i) || document.body);
  }, [i, s]), Gt(() => {
    if (a && !s)
      return Ht(n, a), () => {
        Ht(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ E.isValidElement(o)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ E.cloneElement(o, u);
    }
    return /* @__PURE__ */ P(E.Fragment, {
      children: o
    });
  }
  return /* @__PURE__ */ P(E.Fragment, {
    children: a && /* @__PURE__ */ yr.createPortal(o, a)
  });
});
process.env.NODE_ENV !== "production" && (ht.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: r.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([Co, r.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool
});
process.env.NODE_ENV !== "production" && (ht.propTypes = xo(ht.propTypes));
/**
 * @mui/styled-engine v5.15.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function wi(e, t) {
  const n = gr(e, t);
  return process.env.NODE_ENV !== "production" ? (...o) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return o.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : o.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...o);
  } : n;
}
const Mi = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Ii = ["values", "unit", "step"], _i = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, o) => n.val - o.val), t.reduce((n, o) => y({}, n, {
    [o.key]: o.val
  }), {});
};
function ki(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: o = 5
  } = e, i = ie(e, Ii), s = _i(t), a = Object.keys(s);
  function l(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function c(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - o / 100}${n})`;
  }
  function u(f, v) {
    const b = a.indexOf(v);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(b !== -1 && typeof t[a[b]] == "number" ? t[a[b]] : v) - o / 100}${n})`;
  }
  function d(f) {
    return a.indexOf(f) + 1 < a.length ? u(f, a[a.indexOf(f) + 1]) : l(f);
  }
  function p(f) {
    const v = a.indexOf(f);
    return v === 0 ? l(a[1]) : v === a.length - 1 ? c(a[v]) : u(f, a[a.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return y({
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: d,
    not: p,
    unit: n
  }, i);
}
const Ai = {
  borderRadius: 4
}, Di = Ai, Bi = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.string, r.object, r.array]) : {}, Me = Bi;
function Qe(e, t) {
  return t ? Ce(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const cn = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, qn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${cn[e]}px)`
};
function Re(e, t, n) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const s = o.breakpoints || qn;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = o.breakpoints || qn;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(s.values || cn).indexOf(l) !== -1) {
        const c = s.up(l);
        a[c] = n(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return n(t);
}
function ji(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((o, i) => {
    const s = e.up(i);
    return o[s] = {}, o;
  }, {})) || {};
}
function zi(e, t) {
  return e.reduce((n, o) => {
    const i = n[o];
    return (!i || Object.keys(i).length === 0) && delete n[o], n;
  }, t);
}
function xt(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const o = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, i) => o && o[i] != null ? o[i] : null, e);
}
function gt(e, t, n, o = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || o : i = xt(e, n) || o, t && (i = t(i, o, e)), i;
}
function de(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: o,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = xt(c, o) || {};
    return Re(a, l, (p) => {
      let f = gt(u, i, p);
      return p === f && typeof p == "string" && (f = gt(u, i, `${t}${p === "default" ? "" : J(p)}`, p)), n === !1 ? f : {
        [n]: f
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Me
  } : {}, s.filterProps = [t], s;
}
function Fi(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Li = {
  m: "margin",
  p: "padding"
}, Vi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Kn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Wi = Fi((e) => {
  if (e.length > 2)
    if (Kn[e])
      e = Kn[e];
    else
      return [e];
  const [t, n] = e.split(""), o = Li[t], i = Vi[n] || "";
  return Array.isArray(i) ? i.map((s) => o + s) : [o + i];
}), Tt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ct = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ui = [...Tt, ...Ct];
function nt(e, t, n, o) {
  var i;
  const s = (i = xt(e, t, !1)) != null ? i : n;
  return typeof s == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${o} argument to be a number or a string, got ${a}.`), s * a) : Array.isArray(s) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > s.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${a} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[a]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function $o(e) {
  return nt(e, "spacing", 8, "spacing");
}
function ot(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), o = e(n);
  return t >= 0 ? o : typeof o == "number" ? -o : `-${o}`;
}
function Yi(e, t) {
  return (n) => e.reduce((o, i) => (o[i] = ot(t, n), o), {});
}
function qi(e, t, n, o) {
  if (t.indexOf(n) === -1)
    return null;
  const i = Wi(n), s = Yi(i, o), a = e[n];
  return Re(e, a, s);
}
function Po(e, t) {
  const n = $o(e.theme);
  return Object.keys(e).map((o) => qi(e, t, o, n)).reduce(Qe, {});
}
function le(e) {
  return Po(e, Tt);
}
le.propTypes = process.env.NODE_ENV !== "production" ? Tt.reduce((e, t) => (e[t] = Me, e), {}) : {};
le.filterProps = Tt;
function ce(e) {
  return Po(e, Ct);
}
ce.propTypes = process.env.NODE_ENV !== "production" ? Ct.reduce((e, t) => (e[t] = Me, e), {}) : {};
ce.filterProps = Ct;
process.env.NODE_ENV !== "production" && Ui.reduce((e, t) => (e[t] = Me, e), {});
function Ki(e = 8) {
  if (e.mui)
    return e;
  const t = $o({
    spacing: e
  }), n = (...o) => (process.env.NODE_ENV !== "production" && (o.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${o.length}`)), (o.length === 0 ? [1] : o).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function Rt(...e) {
  const t = e.reduce((o, i) => (i.filterProps.forEach((s) => {
    o[s] = i;
  }), o), {}), n = (o) => Object.keys(o).reduce((i, s) => t[s] ? Qe(i, t[s](o)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, i) => Object.assign(o, i.propTypes), {}) : {}, n.filterProps = e.reduce((o, i) => o.concat(i.filterProps), []), n;
}
function ve(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ee(e, t) {
  return de({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Hi = Ee("border", ve), Gi = Ee("borderTop", ve), Xi = Ee("borderRight", ve), Ji = Ee("borderBottom", ve), Zi = Ee("borderLeft", ve), Qi = Ee("borderColor"), es = Ee("borderTopColor"), ts = Ee("borderRightColor"), ns = Ee("borderBottomColor"), os = Ee("borderLeftColor"), rs = Ee("outline", ve), is = Ee("outlineColor"), St = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = nt(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (o) => ({
      borderRadius: ot(t, o)
    });
    return Re(e, e.borderRadius, n);
  }
  return null;
};
St.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Me
} : {};
St.filterProps = ["borderRadius"];
Rt(Hi, Gi, Xi, Ji, Zi, Qi, es, ts, ns, os, St, rs, is);
const Ot = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = nt(e.theme, "spacing", 8, "gap"), n = (o) => ({
      gap: ot(t, o)
    });
    return Re(e, e.gap, n);
  }
  return null;
};
Ot.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Me
} : {};
Ot.filterProps = ["gap"];
const $t = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = nt(e.theme, "spacing", 8, "columnGap"), n = (o) => ({
      columnGap: ot(t, o)
    });
    return Re(e, e.columnGap, n);
  }
  return null;
};
$t.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Me
} : {};
$t.filterProps = ["columnGap"];
const Pt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = nt(e.theme, "spacing", 8, "rowGap"), n = (o) => ({
      rowGap: ot(t, o)
    });
    return Re(e, e.rowGap, n);
  }
  return null;
};
Pt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Me
} : {};
Pt.filterProps = ["rowGap"];
const ss = de({
  prop: "gridColumn"
}), as = de({
  prop: "gridRow"
}), ls = de({
  prop: "gridAutoFlow"
}), cs = de({
  prop: "gridAutoColumns"
}), us = de({
  prop: "gridAutoRows"
}), ds = de({
  prop: "gridTemplateColumns"
}), fs = de({
  prop: "gridTemplateRows"
}), ps = de({
  prop: "gridTemplateAreas"
}), ms = de({
  prop: "gridArea"
});
Rt(Ot, $t, Pt, ss, as, ls, cs, us, ds, fs, ps, ms);
function qe(e, t) {
  return t === "grey" ? t : e;
}
const hs = de({
  prop: "color",
  themeKey: "palette",
  transform: qe
}), gs = de({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: qe
}), ys = de({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: qe
});
Rt(hs, gs, ys);
function ye(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const bs = de({
  prop: "width",
  transform: ye
}), un = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i;
      const s = ((o = e.theme) == null || (o = o.breakpoints) == null || (o = o.values) == null ? void 0 : o[n]) || cn[n];
      return s ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: ye(n)
      };
    };
    return Re(e, e.maxWidth, t);
  }
  return null;
};
un.filterProps = ["maxWidth"];
const vs = de({
  prop: "minWidth",
  transform: ye
}), Es = de({
  prop: "height",
  transform: ye
}), xs = de({
  prop: "maxHeight",
  transform: ye
}), Ts = de({
  prop: "minHeight",
  transform: ye
});
de({
  prop: "size",
  cssProperty: "width",
  transform: ye
});
de({
  prop: "size",
  cssProperty: "height",
  transform: ye
});
const Cs = de({
  prop: "boxSizing"
});
Rt(bs, un, vs, Es, xs, Ts, Cs);
const Rs = {
  // borders
  border: {
    themeKey: "borders",
    transform: ve
  },
  borderTop: {
    themeKey: "borders",
    transform: ve
  },
  borderRight: {
    themeKey: "borders",
    transform: ve
  },
  borderBottom: {
    themeKey: "borders",
    transform: ve
  },
  borderLeft: {
    themeKey: "borders",
    transform: ve
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: ve
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: St
  },
  // palette
  color: {
    themeKey: "palette",
    transform: qe
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: qe
  },
  backgroundColor: {
    themeKey: "palette",
    transform: qe
  },
  // spacing
  p: {
    style: ce
  },
  pt: {
    style: ce
  },
  pr: {
    style: ce
  },
  pb: {
    style: ce
  },
  pl: {
    style: ce
  },
  px: {
    style: ce
  },
  py: {
    style: ce
  },
  padding: {
    style: ce
  },
  paddingTop: {
    style: ce
  },
  paddingRight: {
    style: ce
  },
  paddingBottom: {
    style: ce
  },
  paddingLeft: {
    style: ce
  },
  paddingX: {
    style: ce
  },
  paddingY: {
    style: ce
  },
  paddingInline: {
    style: ce
  },
  paddingInlineStart: {
    style: ce
  },
  paddingInlineEnd: {
    style: ce
  },
  paddingBlock: {
    style: ce
  },
  paddingBlockStart: {
    style: ce
  },
  paddingBlockEnd: {
    style: ce
  },
  m: {
    style: le
  },
  mt: {
    style: le
  },
  mr: {
    style: le
  },
  mb: {
    style: le
  },
  ml: {
    style: le
  },
  mx: {
    style: le
  },
  my: {
    style: le
  },
  margin: {
    style: le
  },
  marginTop: {
    style: le
  },
  marginRight: {
    style: le
  },
  marginBottom: {
    style: le
  },
  marginLeft: {
    style: le
  },
  marginX: {
    style: le
  },
  marginY: {
    style: le
  },
  marginInline: {
    style: le
  },
  marginInlineStart: {
    style: le
  },
  marginInlineEnd: {
    style: le
  },
  marginBlock: {
    style: le
  },
  marginBlockStart: {
    style: le
  },
  marginBlockEnd: {
    style: le
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Ot
  },
  rowGap: {
    style: Pt
  },
  columnGap: {
    style: $t
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ye
  },
  maxWidth: {
    style: un
  },
  minWidth: {
    transform: ye
  },
  height: {
    transform: ye
  },
  maxHeight: {
    transform: ye
  },
  minHeight: {
    transform: ye
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Nt = Rs;
function Ss(...e) {
  const t = e.reduce((o, i) => o.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((o) => n.size === Object.keys(o).length);
}
function Os(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function $s() {
  function e(n, o, i, s) {
    const a = {
      [n]: o,
      theme: i
    }, l = s[n];
    if (!l)
      return {
        [n]: o
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: d,
      style: p
    } = l;
    if (o == null)
      return null;
    if (u === "typography" && o === "inherit")
      return {
        [n]: o
      };
    const f = xt(i, u) || {};
    return p ? p(a) : Re(a, o, (b) => {
      let g = gt(f, d, b);
      return b === g && typeof b == "string" && (g = gt(f, d, `${n}${b === "default" ? "" : J(b)}`, b)), c === !1 ? g : {
        [c]: g
      };
    });
  }
  function t(n) {
    var o;
    const {
      sx: i,
      theme: s = {}
    } = n || {};
    if (!i)
      return null;
    const a = (o = s.unstable_sxConfig) != null ? o : Nt;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(s);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = ji(s.breakpoints), p = Object.keys(d);
      let f = d;
      return Object.keys(u).forEach((v) => {
        const b = Os(u[v], s);
        if (b != null)
          if (typeof b == "object")
            if (a[v])
              f = Qe(f, e(v, b, s, a));
            else {
              const g = Re({
                theme: s
              }, b, (m) => ({
                [v]: m
              }));
              Ss(g, b) ? f[v] = t({
                sx: b,
                theme: s
              }) : f = Qe(f, g);
            }
          else
            f = Qe(f, e(v, b, s, a));
      }), zi(p, f);
    }
    return Array.isArray(i) ? i.map(l) : l(i);
  }
  return t;
}
const wt = $s();
wt.filterProps = ["sx"];
function Ps(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Ns = ["breakpoints", "palette", "spacing", "shape"];
function dn(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: o = {},
    spacing: i,
    shape: s = {}
  } = e, a = ie(e, Ns), l = ki(n), c = Ki(i);
  let u = Ce({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: y({
      mode: "light"
    }, o),
    spacing: c,
    shape: y({}, Di, s)
  }, a);
  return u.applyStyles = Ps, u = t.reduce((d, p) => Ce(d, p), u), u.unstable_sxConfig = y({}, Nt, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(p) {
    return wt({
      sx: p,
      theme: this
    });
  }, u;
}
function ws(e) {
  return Object.keys(e).length === 0;
}
function Ms(e = null) {
  const t = E.useContext(hr);
  return !t || ws(t) ? e : t;
}
const Is = dn();
function No(e = Is) {
  return Ms(e);
}
const _s = ["sx"], ks = (e) => {
  var t, n;
  const o = {
    systemProps: {},
    otherProps: {}
  }, i = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Nt;
  return Object.keys(e).forEach((s) => {
    i[s] ? o.systemProps[s] = e[s] : o.otherProps[s] = e[s];
  }), o;
};
function As(e) {
  const {
    sx: t
  } = e, n = ie(e, _s), {
    systemProps: o,
    otherProps: i
  } = ks(n);
  let s;
  return Array.isArray(t) ? s = [o, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return Pe(l) ? y({}, o, l) : o;
  } : s = y({}, o, t), y({}, i, {
    sx: s
  });
}
const Ds = ["ownerState"], Bs = ["variants"], js = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function zs(e) {
  return Object.keys(e).length === 0;
}
function Fs(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ft(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ls = dn(), Hn = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function ct({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return zs(t) ? e : t[n] || t;
}
function Vs(e) {
  return e ? (t, n) => n[e] : null;
}
function pt(e, t) {
  let {
    ownerState: n
  } = t, o = ie(t, Ds);
  const i = typeof e == "function" ? e(y({
    ownerState: n
  }, o)) : e;
  if (Array.isArray(i))
    return i.flatMap((s) => pt(s, y({
      ownerState: n
    }, o)));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: s = []
    } = i;
    let l = ie(i, Bs);
    return s.forEach((c) => {
      let u = !0;
      typeof c.props == "function" ? u = c.props(y({
        ownerState: n
      }, o)) : Object.keys(c.props).forEach((d) => {
        (n == null ? void 0 : n[d]) !== c.props[d] && o[d] !== c.props[d] && (u = !1);
      }), u && (Array.isArray(l) || (l = [l]), l.push(typeof c.style == "function" ? c.style(y({
        ownerState: n
      }, o)) : c.style));
    }), l;
  }
  return i;
}
function Ws(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Ls,
    rootShouldForwardProp: o = ft,
    slotShouldForwardProp: i = ft
  } = e, s = (a) => wt(y({}, a, {
    theme: ct(y({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (a, l = {}) => {
    Mi(a, (h) => h.filter((w) => !(w != null && w.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = Vs(Hn(u))
    } = l, v = ie(l, js), b = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), g = p || !1;
    let m;
    process.env.NODE_ENV !== "production" && c && (m = `${c}-${Hn(u || "Root")}`);
    let S = ft;
    u === "Root" || u === "root" ? S = o : u ? S = i : Fs(a) && (S = void 0);
    const z = wi(a, y({
      shouldForwardProp: S,
      label: m
    }, v)), T = (h) => typeof h == "function" && h.__emotion_real !== h || Pe(h) ? (w) => pt(h, y({}, w, {
      theme: ct({
        theme: w.theme,
        defaultTheme: n,
        themeId: t
      })
    })) : h, C = (h, ...w) => {
      let B = T(h);
      const H = w ? w.map(T) : [];
      c && f && H.push((_) => {
        const W = ct(y({}, _, {
          defaultTheme: n,
          themeId: t
        }));
        if (!W.components || !W.components[c] || !W.components[c].styleOverrides)
          return null;
        const G = W.components[c].styleOverrides, I = {};
        return Object.entries(G).forEach(([X, M]) => {
          I[X] = pt(M, y({}, _, {
            theme: W
          }));
        }), f(_, I);
      }), c && !b && H.push((_) => {
        var W;
        const G = ct(y({}, _, {
          defaultTheme: n,
          themeId: t
        })), I = G == null || (W = G.components) == null || (W = W[c]) == null ? void 0 : W.variants;
        return pt({
          variants: I
        }, y({}, _, {
          theme: G
        }));
      }), g || H.push(s);
      const Z = H.length - w.length;
      if (Array.isArray(h) && Z > 0) {
        const _ = new Array(Z).fill("");
        B = [...h, ..._], B.raw = [...h.raw, ..._];
      }
      const k = z(B, ...H);
      if (process.env.NODE_ENV !== "production") {
        let _;
        c && (_ = `${c}${J(u || "")}`), _ === void 0 && (_ = `Styled(${Br(a)})`), k.displayName = _;
      }
      return a.muiName && (k.muiName = a.muiName), k;
    };
    return z.withConfig && (C.withConfig = z.withConfig), C;
  };
}
function Us(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? o : ln(t.components[n].defaultProps, o);
}
function Ys({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: o
}) {
  let i = No(n);
  return o && (i = i[o] || i), Us({
    theme: i,
    name: t,
    props: e
  });
}
function fn(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), li(e, t, n);
}
function qs(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((o) => o + o)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, i) => i < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function De(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return De(qs(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ke(9, e));
  let o = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (o = o.split(" "), i = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ke(10, i));
  } else
    o = o.split(",");
  return o = o.map((s) => parseFloat(s)), {
    type: n,
    values: o,
    colorSpace: i
  };
}
function Mt(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: o
  } = e;
  return t.indexOf("rgb") !== -1 ? o = o.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.indexOf("color") !== -1 ? o = `${n} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function Ks(e) {
  e = De(e);
  const {
    values: t
  } = e, n = t[0], o = t[1] / 100, i = t[2] / 100, s = o * Math.min(i, 1 - i), a = (u, d = (u + n / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Mt({
    type: l,
    values: c
  });
}
function Gn(e) {
  e = De(e);
  let t = e.type === "hsl" || e.type === "hsla" ? De(Ks(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Xn(e, t) {
  const n = Gn(e), o = Gn(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function Ne(e, t) {
  return e = De(e), t = fn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Mt(e);
}
function Zt(e, t) {
  if (e = De(e), t = fn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Mt(e);
}
function Qt(e, t) {
  if (e = De(e), t = fn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Mt(e);
}
function Hs(e, t) {
  return y({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const Gs = {
  black: "#000",
  white: "#fff"
}, et = Gs, Xs = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Js = Xs, Zs = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, je = Zs, Qs = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, ze = Qs, ea = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Ge = ea, ta = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Fe = ta, na = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Le = na, oa = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Ve = oa, ra = ["mode", "contrastThreshold", "tonalOffset"], Jn = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: et.white,
    default: et.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Wt = {
  text: {
    primary: et.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: et.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Zn(e, t, n, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Qt(e.main, i) : t === "dark" && (e.dark = Zt(e.main, s)));
}
function ia(e = "light") {
  return e === "dark" ? {
    main: Fe[200],
    light: Fe[50],
    dark: Fe[400]
  } : {
    main: Fe[700],
    light: Fe[400],
    dark: Fe[800]
  };
}
function sa(e = "light") {
  return e === "dark" ? {
    main: je[200],
    light: je[50],
    dark: je[400]
  } : {
    main: je[500],
    light: je[300],
    dark: je[700]
  };
}
function aa(e = "light") {
  return e === "dark" ? {
    main: ze[500],
    light: ze[300],
    dark: ze[700]
  } : {
    main: ze[700],
    light: ze[400],
    dark: ze[800]
  };
}
function la(e = "light") {
  return e === "dark" ? {
    main: Le[400],
    light: Le[300],
    dark: Le[700]
  } : {
    main: Le[700],
    light: Le[500],
    dark: Le[900]
  };
}
function ca(e = "light") {
  return e === "dark" ? {
    main: Ve[400],
    light: Ve[300],
    dark: Ve[700]
  } : {
    main: Ve[800],
    light: Ve[500],
    dark: Ve[900]
  };
}
function ua(e = "light") {
  return e === "dark" ? {
    main: Ge[400],
    light: Ge[300],
    dark: Ge[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ge[500],
    dark: Ge[900]
  };
}
function da(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: o = 0.2
  } = e, i = ie(e, ra), s = e.primary || ia(t), a = e.secondary || sa(t), l = e.error || aa(t), c = e.info || la(t), u = e.success || ca(t), d = e.warning || ua(t);
  function p(g) {
    const m = Xn(g, Wt.text.primary) >= n ? Wt.text.primary : Jn.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = Xn(g, m);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${m} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const f = ({
    color: g,
    name: m,
    mainShade: S = 500,
    lightShade: z = 300,
    darkShade: T = 700
  }) => {
    if (g = y({}, g), !g.main && g[S] && (g.main = g[S]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : Ke(11, m ? ` (${m})` : "", S));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ke(12, m ? ` (${m})` : "", JSON.stringify(g.main)));
    return Zn(g, "light", z, o), Zn(g, "dark", T, o), g.contrastText || (g.contrastText = p(g.main)), g;
  }, v = {
    dark: Wt,
    light: Jn
  };
  return process.env.NODE_ENV !== "production" && (v[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ce(y({
    // A collection of common colors.
    common: y({}, et),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: f({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: f({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: f({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: f({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Js,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o
  }, v[t]), i);
}
const fa = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function pa(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Qn = {
  textTransform: "uppercase"
}, eo = '"Roboto", "Helvetica", "Arial", sans-serif';
function ma(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: o = eo,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p
  } = n, f = ie(n, fa);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const v = i / 14, b = p || ((S) => `${S / u * v}rem`), g = (S, z, T, C, h) => y({
    fontFamily: o,
    fontWeight: S,
    fontSize: b(z),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T
  }, o === eo ? {
    letterSpacing: `${pa(C / z)}em`
  } : {}, h, d), m = {
    h1: g(s, 96, 1.167, -1.5),
    h2: g(s, 60, 1.2, -0.5),
    h3: g(a, 48, 1.167, 0),
    h4: g(a, 34, 1.235, 0.25),
    h5: g(a, 24, 1.334, 0),
    h6: g(l, 20, 1.6, 0.15),
    subtitle1: g(a, 16, 1.75, 0.15),
    subtitle2: g(l, 14, 1.57, 0.1),
    body1: g(a, 16, 1.5, 0.15),
    body2: g(a, 14, 1.43, 0.15),
    button: g(l, 14, 1.75, 0.4, Qn),
    caption: g(a, 12, 1.66, 0.4),
    overline: g(a, 12, 2.66, 1, Qn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ce(y({
    htmlFontSize: u,
    pxToRem: b,
    fontFamily: o,
    fontSize: i,
    fontWeightLight: s,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: c
  }, m), f, {
    clone: !1
    // No need to clone deep
  });
}
const ha = 0.2, ga = 0.14, ya = 0.12;
function ae(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ha})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ga})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ya})`].join(",");
}
const ba = ["none", ae(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ae(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ae(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ae(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ae(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ae(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ae(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ae(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ae(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ae(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ae(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ae(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ae(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ae(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ae(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ae(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ae(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ae(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ae(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ae(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ae(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ae(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ae(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ae(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], va = ["duration", "easing", "delay"], Ea = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, xa = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function to(e) {
  return `${Math.round(e)}ms`;
}
function Ta(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Ca(e) {
  const t = y({}, Ea, e.easing), n = y({}, xa, e.duration);
  return y({
    getAutoHeightDuration: Ta,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = s, u = ie(s, va);
      if (process.env.NODE_ENV !== "production") {
        const d = (f) => typeof f == "string", p = (f) => !isNaN(parseFloat(f));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : to(a)} ${l} ${typeof c == "string" ? c : to(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Ra = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Sa = Ra, Oa = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function $a(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: o = {},
    transitions: i = {},
    typography: s = {}
  } = e, a = ie(e, Oa);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ke(18));
  const l = da(o), c = dn(e);
  let u = Ce(c, {
    mixins: Hs(c.breakpoints, n),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ba.slice(),
    typography: ma(l, s),
    transitions: Ca(i),
    zIndex: y({}, Sa)
  });
  if (u = Ce(u, a), u = t.reduce((d, p) => Ce(d, p), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (f, v) => {
      let b;
      for (b in f) {
        const g = f[b];
        if (d.indexOf(b) !== -1 && Object.keys(g).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = pe("", b);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${b}\` internal state.`, "You can not override it like this: ", JSON.stringify(f, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: g
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          f[b] = {};
        }
      }
    };
    Object.keys(u.components).forEach((f) => {
      const v = u.components[f].styleOverrides;
      v && f.indexOf("Mui") === 0 && p(v, f);
    });
  }
  return u.unstable_sxConfig = y({}, Nt, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(p) {
    return wt({
      sx: p,
      theme: this
    });
  }, u;
}
const Pa = $a(), pn = Pa, mn = "$$material", hn = (e) => ft(e) && e !== "classes", se = Ws({
  themeId: mn,
  defaultTheme: pn,
  rootShouldForwardProp: hn
});
function he({
  props: e,
  name: t
}) {
  return Ys({
    props: e,
    name: t,
    defaultTheme: pn,
    themeId: mn
  });
}
function en(e, t) {
  return en = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, en(e, t);
}
function wo(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, en(e, t);
}
const no = {
  disabled: !1
};
var Na = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.shape({
  enter: r.number,
  exit: r.number,
  appear: r.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && r.oneOfType([r.string, r.shape({
  enter: r.string,
  exit: r.string,
  active: r.string
}), r.shape({
  enter: r.string,
  enterDone: r.string,
  enterActive: r.string,
  exit: r.string,
  exitDone: r.string,
  exitActive: r.string
})]);
const yt = xe.createContext(null);
var wa = function(t) {
  return t.scrollTop;
}, Xe = "unmounted", Ie = "exited", _e = "entering", Ue = "entered", tn = "exiting", Oe = /* @__PURE__ */ function(e) {
  wo(t, e);
  function t(o, i) {
    var s;
    s = e.call(this, o, i) || this;
    var a = i, l = a && !a.isMounting ? o.enter : o.appear, c;
    return s.appearStatus = null, o.in ? l ? (c = Ie, s.appearStatus = _e) : c = Ue : o.unmountOnExit || o.mountOnEnter ? c = Xe : c = Ie, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Xe ? {
      status: Ie
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== _e && a !== Ue && (s = _e) : (a === _e || a === Ue) && (s = tn);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, s, a, l;
    return s = a = l = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, n.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === _e) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : at.findDOMNode(this);
          a && wa(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Ie && this.setState({
        status: Xe
      });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [at.findDOMNode(this), l], u = c[0], d = c[1], p = this.getTimeouts(), f = l ? p.appear : p.enter;
    if (!i && !a || no.disabled) {
      this.safeSetState({
        status: Ue
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: _e
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(f, function() {
        s.safeSetState({
          status: Ue
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : at.findDOMNode(this);
    if (!s || no.disabled) {
      this.safeSetState({
        status: Ie
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: tn
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Ie
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, n.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : at.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === Xe)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = ie(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ xe.createElement(yt.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : xe.cloneElement(xe.Children.only(a), l))
    );
  }, t;
}(xe.Component);
Oe.contextType = yt;
Oe.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: r.shape({
    current: typeof Element > "u" ? r.any : function(e, t, n, o, i, s) {
      var a = e[t];
      return r.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, o, i, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: r.oneOfType([r.func.isRequired, r.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: r.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: r.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: r.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: r.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: r.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: r.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = Na;
    t.addEndListener || (n = n.isRequired);
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
      i[s - 1] = arguments[s];
    return n.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: r.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: r.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: r.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: r.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: r.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: r.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: r.func
} : {};
function We() {
}
Oe.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: We,
  onEntering: We,
  onEntered: We,
  onExit: We,
  onExiting: We,
  onExited: We
};
Oe.UNMOUNTED = Xe;
Oe.EXITED = Ie;
Oe.ENTERING = _e;
Oe.ENTERED = Ue;
Oe.EXITING = tn;
const Ma = Oe;
function Ia(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gn(e, t) {
  var n = function(s) {
    return t && Je(s) ? t(s) : s;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && dr.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    o[i.key] = n(i);
  }), o;
}
function _a(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var o = /* @__PURE__ */ Object.create(null), i = [];
  for (var s in e)
    s in t ? i.length && (o[s] = i, i = []) : i.push(s);
  var a, l = {};
  for (var c in t) {
    if (o[c])
      for (a = 0; a < o[c].length; a++) {
        var u = o[c][a];
        l[o[c][a]] = n(u);
      }
    l[c] = n(c);
  }
  for (a = 0; a < i.length; a++)
    l[i[a]] = n(i[a]);
  return l;
}
function ke(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function ka(e, t) {
  return gn(e.children, function(n) {
    return dt(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: ke(n, "appear", e),
      enter: ke(n, "enter", e),
      exit: ke(n, "exit", e)
    });
  });
}
function Aa(e, t, n) {
  var o = gn(e.children), i = _a(t, o);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (Je(a)) {
      var l = s in t, c = s in o, u = t[s], d = Je(u) && !u.props.in;
      c && (!l || d) ? i[s] = dt(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: ke(a, "exit", e),
        enter: ke(a, "enter", e)
      }) : !c && l && !d ? i[s] = dt(a, {
        in: !1
      }) : c && l && Je(u) && (i[s] = dt(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: ke(a, "exit", e),
        enter: ke(a, "enter", e)
      }));
    }
  }), i;
}
var Da = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Ba = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, yn = /* @__PURE__ */ function(e) {
  wo(t, e);
  function t(o, i) {
    var s;
    s = e.call(this, o, i) || this;
    var a = s.handleExited.bind(Ia(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? ka(i, l) : Aa(i, a, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, s) {
    var a = gn(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = y({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = ie(i, ["component", "childFactory"]), c = this.state.contextValue, u = Da(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ xe.createElement(yt.Provider, {
      value: c
    }, u) : /* @__PURE__ */ xe.createElement(yt.Provider, {
      value: c
    }, /* @__PURE__ */ xe.createElement(s, l, u));
  }, t;
}(xe.Component);
yn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: r.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: r.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: r.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: r.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: r.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: r.func
} : {};
yn.defaultProps = Ba;
const ja = yn;
function bn() {
  const e = No(pn);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e[mn] || e;
}
const za = (e) => e.scrollTop;
function oo(e, t) {
  var n, o;
  const {
    timeout: i,
    easing: s,
    style: a = {}
  } = e;
  return {
    duration: (n = a.transitionDuration) != null ? n : typeof i == "number" ? i : i[t.mode] || 0,
    easing: (o = a.transitionTimingFunction) != null ? o : typeof s == "object" ? s[t.mode] : s,
    delay: a.transitionDelay
  };
}
const Fa = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], La = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Mo = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = bn(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: p,
    onEntering: f,
    onExit: v,
    onExited: b,
    onExiting: g,
    style: m,
    timeout: S = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: z = Ma
  } = t, T = ie(t, Fa), C = E.useRef(null), h = Ae(C, l.ref, n), w = (I) => (X) => {
    if (I) {
      const M = C.current;
      X === void 0 ? I(M) : I(M, X);
    }
  }, B = w(f), H = w((I, X) => {
    za(I);
    const M = oo({
      style: m,
      timeout: S,
      easing: c
    }, {
      mode: "enter"
    });
    I.style.webkitTransition = o.transitions.create("opacity", M), I.style.transition = o.transitions.create("opacity", M), d && d(I, X);
  }), Z = w(p), k = w(g), _ = w((I) => {
    const X = oo({
      style: m,
      timeout: S,
      easing: c
    }, {
      mode: "exit"
    });
    I.style.webkitTransition = o.transitions.create("opacity", X), I.style.transition = o.transitions.create("opacity", X), v && v(I);
  }), W = w(b);
  return /* @__PURE__ */ P(z, y({
    appear: a,
    in: u,
    nodeRef: C,
    onEnter: H,
    onEntered: Z,
    onEntering: B,
    onExit: _,
    onExited: W,
    onExiting: k,
    addEndListener: (I) => {
      s && s(C.current, I);
    },
    timeout: S
  }, T, {
    children: (I, X) => /* @__PURE__ */ E.cloneElement(l, y({
      style: y({
        opacity: 0,
        visibility: I === "exited" && !u ? "hidden" : void 0
      }, La[I], m, l.props.style),
      ref: h
    }, X))
  }));
});
process.env.NODE_ENV !== "production" && (Mo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: r.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: r.bool,
  /**
   * A single child content element.
   */
  children: sn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: r.oneOfType([r.shape({
    enter: r.string,
    exit: r.string
  }), r.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: r.bool,
  /**
   * @ignore
   */
  onEnter: r.func,
  /**
   * @ignore
   */
  onEntered: r.func,
  /**
   * @ignore
   */
  onEntering: r.func,
  /**
   * @ignore
   */
  onExit: r.func,
  /**
   * @ignore
   */
  onExited: r.func,
  /**
   * @ignore
   */
  onExiting: r.func,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
const Io = Mo;
function Va(e) {
  return pe("MuiBackdrop", e);
}
me("MuiBackdrop", ["root", "invisible"]);
const Wa = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Ua = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ge({
    root: ["root", n && "invisible"]
  }, Va, t);
}, Ya = se("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => y({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), _o = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var o, i, s;
  const a = he({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: p = {},
    invisible: f = !1,
    open: v,
    slotProps: b = {},
    slots: g = {},
    TransitionComponent: m = Io,
    transitionDuration: S
  } = a, z = ie(a, Wa), T = y({}, a, {
    component: u,
    invisible: f
  }), C = Ua(T), h = (o = b.root) != null ? o : p.root;
  return /* @__PURE__ */ P(m, y({
    in: v,
    timeout: S
  }, z, {
    children: /* @__PURE__ */ P(Ya, y({
      "aria-hidden": !0
    }, h, {
      as: (i = (s = g.root) != null ? s : d.Root) != null ? i : u,
      className: re(C.root, c, h == null ? void 0 : h.className),
      ownerState: y({}, T, h == null ? void 0 : h.ownerState),
      classes: C,
      ref: n,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (_o.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: r.shape({
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: r.shape({
    root: r.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: r.bool,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: r.shape({
    root: r.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: r.shape({
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: r.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
const ko = _o;
function qa(e) {
  return pe("MuiModal", e);
}
me("MuiModal", ["root", "hidden", "backdrop"]);
const Ka = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Ha = (e) => {
  const {
    open: t,
    exited: n,
    classes: o
  } = e;
  return ge({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, qa, o);
}, Ga = se("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Xa = se(ko, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Ao = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var o, i, s, a, l, c;
  const u = he({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = Xa,
    BackdropProps: p,
    className: f,
    closeAfterTransition: v = !1,
    children: b,
    container: g,
    component: m,
    components: S = {},
    componentsProps: z = {},
    disableAutoFocus: T = !1,
    disableEnforceFocus: C = !1,
    disableEscapeKeyDown: h = !1,
    disablePortal: w = !1,
    disableRestoreFocus: B = !1,
    disableScrollLock: H = !1,
    hideBackdrop: Z = !1,
    keepMounted: k = !1,
    onBackdropClick: _,
    open: W,
    slotProps: G,
    slots: I
    // eslint-disable-next-line react/prop-types
  } = u, X = ie(u, Ka), M = y({}, u, {
    closeAfterTransition: v,
    disableAutoFocus: T,
    disableEnforceFocus: C,
    disableEscapeKeyDown: h,
    disablePortal: w,
    disableRestoreFocus: B,
    disableScrollLock: H,
    hideBackdrop: Z,
    keepMounted: k
  }), {
    getRootProps: F,
    getBackdropProps: Q,
    getTransitionProps: Te,
    portalRef: x,
    isTopModal: O,
    exited: U,
    hasTransition: L
  } = Ti(y({}, M, {
    rootRef: n
  })), N = y({}, M, {
    exited: U
  }), D = Ha(N), A = {};
  if (b.props.tabIndex === void 0 && (A.tabIndex = "-1"), L) {
    const {
      onEnter: ue,
      onExited: $
    } = Te();
    A.onEnter = ue, A.onExited = $;
  }
  const V = (o = (i = I == null ? void 0 : I.root) != null ? i : S.Root) != null ? o : Ga, Y = (s = (a = I == null ? void 0 : I.backdrop) != null ? a : S.Backdrop) != null ? s : d, j = (l = G == null ? void 0 : G.root) != null ? l : z.root, q = (c = G == null ? void 0 : G.backdrop) != null ? c : z.backdrop, fe = Wn({
    elementType: V,
    externalSlotProps: j,
    externalForwardedProps: X,
    getSlotProps: F,
    additionalProps: {
      ref: n,
      as: m
    },
    ownerState: N,
    className: re(f, j == null ? void 0 : j.className, D == null ? void 0 : D.root, !N.open && N.exited && (D == null ? void 0 : D.hidden))
  }), R = Wn({
    elementType: Y,
    externalSlotProps: q,
    additionalProps: p,
    getSlotProps: (ue) => Q(y({}, ue, {
      onClick: ($) => {
        _ && _($), ue != null && ue.onClick && ue.onClick($);
      }
    })),
    className: re(q == null ? void 0 : q.className, p == null ? void 0 : p.className, D == null ? void 0 : D.backdrop),
    ownerState: N
  });
  return !k && !W && (!L || U) ? null : /* @__PURE__ */ P(ht, {
    ref: x,
    container: g,
    disablePortal: w,
    children: /* @__PURE__ */ Se(V, y({}, fe, {
      children: [!Z && d ? /* @__PURE__ */ P(Y, y({}, R)) : null, /* @__PURE__ */ P(mt, {
        disableEnforceFocus: C,
        disableAutoFocus: T,
        disableRestoreFocus: B,
        isEnabled: O,
        open: W,
        children: /* @__PURE__ */ E.cloneElement(b, A)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ao.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: r.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: r.object,
  /**
   * A single child content element.
   */
  children: sn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: r.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: r.shape({
    Backdrop: r.elementType,
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([Co, r.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: r.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: r.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: r.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: r.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: r.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: r.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: r.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: r.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: r.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: r.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    backdrop: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Ja = Ao, Za = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, ro = Za;
function Qa(e) {
  return pe("MuiPaper", e);
}
me("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const el = ["className", "component", "elevation", "square", "variant"], tl = (e) => {
  const {
    square: t,
    elevation: n,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${n}`]
  };
  return ge(s, Qa, i);
}, nl = se("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return y({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && y({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Ne("#fff", ro(t.elevation))}, ${Ne("#fff", ro(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Do = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: l = !1,
    variant: c = "elevation"
  } = o, u = ie(o, el), d = y({}, o, {
    component: s,
    elevation: a,
    square: l,
    variant: c
  }), p = tl(d);
  return process.env.NODE_ENV !== "production" && bn().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ P(nl, y({
    as: s,
    ownerState: d,
    className: re(p.root, i),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (Do.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: tt(ri, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: r.oneOfType([r.oneOf(["elevation", "outlined"]), r.string])
});
const vn = Do;
function ol(e) {
  return pe("MuiDialog", e);
}
const rl = me("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Ut = rl, Bo = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (Bo.displayName = "DialogContext");
const jo = Bo, il = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], sl = se(ko, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), al = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: o,
    fullWidth: i,
    fullScreen: s
  } = e, a = {
    root: ["root"],
    container: ["container", `scroll${J(n)}`],
    paper: ["paper", `paperScroll${J(n)}`, `paperWidth${J(String(o))}`, i && "paperFullWidth", s && "paperFullScreen"]
  };
  return ge(a, ol, t);
}, ll = se(Ja, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), cl = se("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${J(n.scroll)}`]];
  }
})(({
  ownerState: e
}) => y({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, e.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, e.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
})), ul = se(vn, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${J(n.scroll)}`], t[`paperWidth${J(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, t.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, t.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !t.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, t.maxWidth === "xs" && {
  maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
  [`&.${Ut.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.maxWidth && t.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
  [`&.${Ut.paperScrollBody}`]: {
    [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.fullWidth && {
  width: "calc(100% - 64px)"
}, t.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${Ut.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), zo = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiDialog"
  }), i = bn(), s = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    "aria-describedby": a,
    "aria-labelledby": l,
    BackdropComponent: c,
    BackdropProps: u,
    children: d,
    className: p,
    disableEscapeKeyDown: f = !1,
    fullScreen: v = !1,
    fullWidth: b = !1,
    maxWidth: g = "sm",
    onBackdropClick: m,
    onClose: S,
    open: z,
    PaperComponent: T = vn,
    PaperProps: C = {},
    scroll: h = "paper",
    TransitionComponent: w = Io,
    transitionDuration: B = s,
    TransitionProps: H
  } = o, Z = ie(o, il), k = y({}, o, {
    disableEscapeKeyDown: f,
    fullScreen: v,
    fullWidth: b,
    maxWidth: g,
    scroll: h
  }), _ = al(k), W = E.useRef(), G = (F) => {
    W.current = F.target === F.currentTarget;
  }, I = (F) => {
    W.current && (W.current = null, m && m(F), S && S(F, "backdropClick"));
  }, X = Lr(l), M = E.useMemo(() => ({
    titleId: X
  }), [X]);
  return /* @__PURE__ */ P(ll, y({
    className: re(_.root, p),
    closeAfterTransition: !0,
    components: {
      Backdrop: sl
    },
    componentsProps: {
      backdrop: y({
        transitionDuration: B,
        as: c
      }, u)
    },
    disableEscapeKeyDown: f,
    onClose: S,
    open: z,
    ref: n,
    onClick: I,
    ownerState: k
  }, Z, {
    children: /* @__PURE__ */ P(w, y({
      appear: !0,
      in: z,
      timeout: B,
      role: "presentation"
    }, H, {
      children: /* @__PURE__ */ P(cl, {
        className: re(_.container),
        onMouseDown: G,
        ownerState: k,
        children: /* @__PURE__ */ P(ul, y({
          as: T,
          elevation: 24,
          role: "dialog",
          "aria-describedby": a,
          "aria-labelledby": X
        }, C, {
          className: re(_.paper, C.className),
          ownerState: k,
          children: /* @__PURE__ */ P(jo.Provider, {
            value: M,
            children: d
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (zo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": r.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": r.string,
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: r.elementType,
  /**
   * @ignore
   */
  BackdropProps: r.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: r.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: r.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: r.oneOfType([r.oneOf(["xs", "sm", "md", "lg", "xl", !1]), r.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: r.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: r.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: r.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: r.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: r.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: r.object
});
const dl = zo;
function fl(e) {
  return pe("MuiDialogContent", e);
}
me("MuiDialogContent", ["root", "dividers"]);
function pl(e) {
  return pe("MuiDialogTitle", e);
}
const ml = me("MuiDialogTitle", ["root"]), hl = ml, gl = ["className", "dividers"], yl = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return ge({
    root: ["root", n && "dividers"]
  }, fl, t);
}, bl = se("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, t.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${(e.vars || e).palette.divider}`,
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
} : {
  [`.${hl.root} + &`]: {
    paddingTop: 0
  }
})), Fo = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: i,
    dividers: s = !1
  } = o, a = ie(o, gl), l = y({}, o, {
    dividers: s
  }), c = yl(l);
  return /* @__PURE__ */ P(bl, y({
    className: re(c.root, i),
    ownerState: l,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (Fo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const vl = Fo;
function El(e) {
  return pe("MuiDialogActions", e);
}
me("MuiDialogActions", ["root", "spacing"]);
const xl = ["className", "disableSpacing"], Tl = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return ge({
    root: ["root", !n && "spacing"]
  }, El, t);
}, Cl = se("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableSpacing && t.spacing];
  }
})(({
  ownerState: e
}) => y({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), Lo = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: i,
    disableSpacing: s = !1
  } = o, a = ie(o, xl), l = y({}, o, {
    disableSpacing: s
  }), c = Tl(l);
  return /* @__PURE__ */ P(Cl, y({
    className: re(c.root, i),
    ownerState: l,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (Lo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Rl = Lo;
function Sl(e) {
  return pe("MuiTypography", e);
}
me("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Ol = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], $l = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: o,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${J(t)}`, n && "gutterBottom", o && "noWrap", i && "paragraph"]
  };
  return ge(l, Sl, a);
}, Pl = se("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${J(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), io = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, Nl = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, wl = (e) => Nl[e] || e, Vo = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiTypography"
  }), i = wl(o.color), s = As(y({}, o, {
    color: i
  })), {
    align: a = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: p = !1,
    variant: f = "body1",
    variantMapping: v = io
  } = s, b = ie(s, Ol), g = y({}, s, {
    align: a,
    color: i,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: d,
    paragraph: p,
    variant: f,
    variantMapping: v
  }), m = c || (p ? "p" : v[f] || io[f]) || "span", S = $l(g);
  return /* @__PURE__ */ P(Pl, y({
    as: m,
    ref: n,
    ownerState: g,
    className: re(S.root, l)
  }, b));
});
process.env.NODE_ENV !== "production" && (Vo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: r.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: r.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: r.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: r.oneOfType([r.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), r.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: r.object
});
const Wo = Vo;
function Ml(e) {
  return pe("MuiDialogContentText", e);
}
me("MuiDialogContentText", ["root"]);
const Il = ["children", "className"], _l = (e) => {
  const {
    classes: t
  } = e, o = ge({
    root: ["root"]
  }, Ml, t);
  return y({}, t, o);
}, kl = se(Wo, {
  shouldForwardProp: (e) => hn(e) || e === "classes",
  name: "MuiDialogContentText",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Uo = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiDialogContentText"
  }), {
    className: i
  } = o, s = ie(o, Il), a = _l(s);
  return /* @__PURE__ */ P(kl, y({
    component: "p",
    variant: "body1",
    color: "text.secondary",
    ref: n,
    ownerState: s,
    className: re(a.root, i)
  }, o, {
    classes: a
  }));
});
process.env.NODE_ENV !== "production" && (Uo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Al = Uo, Dl = ["className", "id"], Bl = (e) => {
  const {
    classes: t
  } = e;
  return ge({
    root: ["root"]
  }, pl, t);
}, jl = se(Wo, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Yo = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: i,
    id: s
  } = o, a = ie(o, Dl), l = o, c = Bl(l), {
    titleId: u = s
  } = E.useContext(jo);
  return /* @__PURE__ */ P(jl, y({
    component: "h2",
    className: re(c.root, i),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: s ?? u
  }, a));
});
process.env.NODE_ENV !== "production" && (Yo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * @ignore
   */
  id: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const zl = Yo;
function qo(e) {
  const {
    className: t,
    classes: n,
    pulsate: o = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, p] = E.useState(!1), f = re(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), v = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, b = re(n.child, d && n.childLeaving, o && n.childPulsate);
  return !l && !d && p(!0), E.useEffect(() => {
    if (!l && c != null) {
      const g = setTimeout(c, u);
      return () => {
        clearTimeout(g);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ P("span", {
    className: f,
    style: v,
    children: /* @__PURE__ */ P("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (qo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: r.object.isRequired,
  className: r.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: r.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: r.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: r.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: r.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: r.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: r.number,
  /**
   * exit delay
   */
  timeout: r.number.isRequired
});
const be = me("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Fl = ["center", "classes", "className"];
let It = (e) => e, so, ao, lo, co;
const nn = 550, Ll = 80, Vl = on(so || (so = It`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Wl = on(ao || (ao = It`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Ul = on(lo || (lo = It`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Yl = se("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), ql = se(qo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(co || (co = It`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), be.rippleVisible, Vl, nn, ({
  theme: e
}) => e.transitions.easing.easeInOut, be.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, be.child, be.childLeaving, Wl, nn, ({
  theme: e
}) => e.transitions.easing.easeInOut, be.childPulsate, Ul, ({
  theme: e
}) => e.transitions.easing.easeInOut), Ko = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a
  } = o, l = ie(o, Fl), [c, u] = E.useState([]), d = E.useRef(0), p = E.useRef(null);
  E.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const f = E.useRef(!1), v = Yr(), b = E.useRef(null), g = E.useRef(null), m = E.useCallback((C) => {
    const {
      pulsate: h,
      rippleX: w,
      rippleY: B,
      rippleSize: H,
      cb: Z
    } = C;
    u((k) => [...k, /* @__PURE__ */ P(ql, {
      classes: {
        ripple: re(s.ripple, be.ripple),
        rippleVisible: re(s.rippleVisible, be.rippleVisible),
        ripplePulsate: re(s.ripplePulsate, be.ripplePulsate),
        child: re(s.child, be.child),
        childLeaving: re(s.childLeaving, be.childLeaving),
        childPulsate: re(s.childPulsate, be.childPulsate)
      },
      timeout: nn,
      pulsate: h,
      rippleX: w,
      rippleY: B,
      rippleSize: H
    }, d.current)]), d.current += 1, p.current = Z;
  }, [s]), S = E.useCallback((C = {}, h = {}, w = () => {
  }) => {
    const {
      pulsate: B = !1,
      center: H = i || h.pulsate,
      fakeElement: Z = !1
      // For test purposes
    } = h;
    if ((C == null ? void 0 : C.type) === "mousedown" && f.current) {
      f.current = !1;
      return;
    }
    (C == null ? void 0 : C.type) === "touchstart" && (f.current = !0);
    const k = Z ? null : g.current, _ = k ? k.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let W, G, I;
    if (H || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      W = Math.round(_.width / 2), G = Math.round(_.height / 2);
    else {
      const {
        clientX: X,
        clientY: M
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      W = Math.round(X - _.left), G = Math.round(M - _.top);
    }
    if (H)
      I = Math.sqrt((2 * _.width ** 2 + _.height ** 2) / 3), I % 2 === 0 && (I += 1);
    else {
      const X = Math.max(Math.abs((k ? k.clientWidth : 0) - W), W) * 2 + 2, M = Math.max(Math.abs((k ? k.clientHeight : 0) - G), G) * 2 + 2;
      I = Math.sqrt(X ** 2 + M ** 2);
    }
    C != null && C.touches ? b.current === null && (b.current = () => {
      m({
        pulsate: B,
        rippleX: W,
        rippleY: G,
        rippleSize: I,
        cb: w
      });
    }, v.start(Ll, () => {
      b.current && (b.current(), b.current = null);
    })) : m({
      pulsate: B,
      rippleX: W,
      rippleY: G,
      rippleSize: I,
      cb: w
    });
  }, [i, m, v]), z = E.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), T = E.useCallback((C, h) => {
    if (v.clear(), (C == null ? void 0 : C.type) === "touchend" && b.current) {
      b.current(), b.current = null, v.start(0, () => {
        T(C, h);
      });
      return;
    }
    b.current = null, u((w) => w.length > 0 ? w.slice(1) : w), p.current = h;
  }, [v]);
  return E.useImperativeHandle(n, () => ({
    pulsate: z,
    start: S,
    stop: T
  }), [z, S, T]), /* @__PURE__ */ P(Yl, y({
    className: re(be.root, s.root, a),
    ref: g
  }, l, {
    children: /* @__PURE__ */ P(ja, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (Ko.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: r.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string
});
const Kl = Ko;
function Hl(e) {
  return pe("MuiButtonBase", e);
}
const Gl = me("MuiButtonBase", ["root", "disabled", "focusVisible"]), Xl = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Jl = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: o,
    classes: i
  } = e, a = ge({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Hl, i);
  return n && o && (a.root += ` ${o}`), a;
}, Zl = se("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Gl.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Ho = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: s = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: f = !1,
    LinkComponent: v = "a",
    onBlur: b,
    onClick: g,
    onContextMenu: m,
    onDragLeave: S,
    onFocus: z,
    onFocusVisible: T,
    onKeyDown: C,
    onKeyUp: h,
    onMouseDown: w,
    onMouseLeave: B,
    onMouseUp: H,
    onTouchEnd: Z,
    onTouchMove: k,
    onTouchStart: _,
    tabIndex: W = 0,
    TouchRippleProps: G,
    touchRippleRef: I,
    type: X
  } = o, M = ie(o, Xl), F = E.useRef(null), Q = E.useRef(null), Te = Ae(Q, I), {
    isFocusVisibleRef: x,
    onFocus: O,
    onBlur: U,
    ref: L
  } = Qr(), [N, D] = E.useState(!1);
  u && N && D(!1), E.useImperativeHandle(i, () => ({
    focusVisible: () => {
      D(!0), F.current.focus();
    }
  }), []);
  const [A, V] = E.useState(!1);
  E.useEffect(() => {
    V(!0);
  }, []);
  const Y = A && !d && !u;
  E.useEffect(() => {
    N && f && !d && A && Q.current.pulsate();
  }, [d, f, N, A]);
  function j(K, xn, ur = p) {
    return Ye((Tn) => (xn && xn(Tn), !ur && Q.current && Q.current[K](Tn), !0));
  }
  const q = j("start", w), fe = j("stop", m), R = j("stop", S), ue = j("stop", H), $ = j("stop", (K) => {
    N && K.preventDefault(), B && B(K);
  }), $e = j("start", _), Be = j("stop", Z), it = j("stop", k), rr = j("stop", (K) => {
    U(K), x.current === !1 && D(!1), b && b(K);
  }, !1), ir = Ye((K) => {
    F.current || (F.current = K.currentTarget), O(K), x.current === !0 && (D(!0), T && T(K)), z && z(K);
  }), _t = () => {
    const K = F.current;
    return c && c !== "button" && !(K.tagName === "A" && K.href);
  }, kt = E.useRef(!1), sr = Ye((K) => {
    f && !kt.current && N && Q.current && K.key === " " && (kt.current = !0, Q.current.stop(K, () => {
      Q.current.start(K);
    })), K.target === K.currentTarget && _t() && K.key === " " && K.preventDefault(), C && C(K), K.target === K.currentTarget && _t() && K.key === "Enter" && !u && (K.preventDefault(), g && g(K));
  }), ar = Ye((K) => {
    f && K.key === " " && Q.current && N && !K.defaultPrevented && (kt.current = !1, Q.current.stop(K, () => {
      Q.current.pulsate(K);
    })), h && h(K), g && K.target === K.currentTarget && _t() && K.key === " " && !K.defaultPrevented && g(K);
  });
  let st = c;
  st === "button" && (M.href || M.to) && (st = v);
  const He = {};
  st === "button" ? (He.type = X === void 0 ? "button" : X, He.disabled = u) : (!M.href && !M.to && (He.role = "button"), u && (He["aria-disabled"] = u));
  const lr = Ae(n, L, F);
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    Y && !Q.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [Y]);
  const En = y({}, o, {
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: f,
    tabIndex: W,
    focusVisible: N
  }), cr = Jl(En);
  return /* @__PURE__ */ Se(Zl, y({
    as: st,
    className: re(cr.root, l),
    ownerState: En,
    onBlur: rr,
    onClick: g,
    onContextMenu: fe,
    onFocus: ir,
    onKeyDown: sr,
    onKeyUp: ar,
    onMouseDown: q,
    onMouseLeave: $,
    onMouseUp: ue,
    onDragLeave: R,
    onTouchEnd: Be,
    onTouchMove: it,
    onTouchStart: $e,
    ref: lr,
    tabIndex: u ? -1 : W,
    type: X
  }, He, M, {
    children: [a, Y ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ P(Kl, y({
        ref: Te,
        center: s
      }, G))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Ho.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: zr,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: r.bool,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Mr,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: r.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: r.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: r.string,
  /**
   * @ignore
   */
  href: r.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: r.elementType,
  /**
   * @ignore
   */
  onBlur: r.func,
  /**
   * @ignore
   */
  onClick: r.func,
  /**
   * @ignore
   */
  onContextMenu: r.func,
  /**
   * @ignore
   */
  onDragLeave: r.func,
  /**
   * @ignore
   */
  onFocus: r.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: r.func,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * @ignore
   */
  onKeyUp: r.func,
  /**
   * @ignore
   */
  onMouseDown: r.func,
  /**
   * @ignore
   */
  onMouseLeave: r.func,
  /**
   * @ignore
   */
  onMouseUp: r.func,
  /**
   * @ignore
   */
  onTouchEnd: r.func,
  /**
   * @ignore
   */
  onTouchMove: r.func,
  /**
   * @ignore
   */
  onTouchStart: r.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @default 0
   */
  tabIndex: r.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: r.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: r.oneOfType([r.func, r.shape({
    current: r.shape({
      pulsate: r.func.isRequired,
      start: r.func.isRequired,
      stop: r.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: r.oneOfType([r.oneOf(["button", "reset", "submit"]), r.string])
});
const Go = Ho;
function Ql(e) {
  return pe("MuiButton", e);
}
const ec = me("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), ut = ec, Xo = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (Xo.displayName = "ButtonGroupContext");
const tc = Xo, Jo = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (Jo.displayName = "ButtonGroupButtonContext");
const nc = Jo, oc = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], rc = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: o,
    size: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, `${s}${J(t)}`, `size${J(i)}`, `${s}Size${J(i)}`, t === "inherit" && "colorInherit", n && "disableElevation", o && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${J(i)}`],
    endIcon: ["endIcon", `iconSize${J(i)}`]
  }, c = ge(l, Ql, a);
  return y({}, a, c);
}, Zo = (e) => y({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), ic = se(Go, {
  shouldForwardProp: (e) => hn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${J(n.color)}`], t[`size${J(n.size)}`], t[`${n.variant}Size${J(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, o;
  const i = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], s = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return y({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": y({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ne(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ne(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ne(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : s,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": y({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${ut.focusVisible}`]: y({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${ut.disabled}`]: y({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Ne(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (n = (o = e.palette).getContrastText) == null ? void 0 : n.call(o, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : i,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${ut.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${ut.disabled}`]: {
    boxShadow: "none"
  }
}), sc = se("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${J(n.size)}`]];
  }
})(({
  ownerState: e
}) => y({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Zo(e))), ac = se("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${J(n.size)}`]];
  }
})(({
  ownerState: e
}) => y({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Zo(e))), Qo = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = E.useContext(tc), i = E.useContext(nc), s = ln(o, t), a = he({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: p = !1,
    disableElevation: f = !1,
    disableFocusRipple: v = !1,
    endIcon: b,
    focusVisibleClassName: g,
    fullWidth: m = !1,
    size: S = "medium",
    startIcon: z,
    type: T,
    variant: C = "text"
  } = a, h = ie(a, oc), w = y({}, a, {
    color: c,
    component: u,
    disabled: p,
    disableElevation: f,
    disableFocusRipple: v,
    fullWidth: m,
    size: S,
    type: T,
    variant: C
  }), B = rc(w), H = z && /* @__PURE__ */ P(sc, {
    className: B.startIcon,
    ownerState: w,
    children: z
  }), Z = b && /* @__PURE__ */ P(ac, {
    className: B.endIcon,
    ownerState: w,
    children: b
  }), k = i || "";
  return /* @__PURE__ */ Se(ic, y({
    ownerState: w,
    className: re(o.className, B.root, d, k),
    component: u,
    disabled: p,
    focusRipple: !v,
    focusVisibleClassName: re(B.focusVisible, g),
    ref: n,
    type: T
  }, h, {
    classes: B,
    children: [H, l, Z]
  }));
});
process.env.NODE_ENV !== "production" && (Qo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * Element placed after the children.
   */
  endIcon: r.node,
  /**
   * @ignore
   */
  focusVisibleClassName: r.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: r.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["small", "medium", "large"]), r.string]),
  /**
   * Element placed before the children.
   */
  startIcon: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @ignore
   */
  type: r.oneOfType([r.oneOf(["button", "reset", "submit"]), r.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: r.oneOfType([r.oneOf(["contained", "outlined", "text"]), r.string])
});
const lc = Qo, cc = fr(null), Yt = {
  didCatch: !1,
  error: null
};
class uc extends pr {
  constructor(t) {
    super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Yt;
  }
  static getDerivedStateFromError(t) {
    return {
      didCatch: !0,
      error: t
    };
  }
  resetErrorBoundary() {
    const {
      error: t
    } = this.state;
    if (t !== null) {
      for (var n, o, i = arguments.length, s = new Array(i), a = 0; a < i; a++)
        s[a] = arguments[a];
      (n = (o = this.props).onReset) === null || n === void 0 || n.call(o, {
        args: s,
        reason: "imperative-api"
      }), this.setState(Yt);
    }
  }
  componentDidCatch(t, n) {
    var o, i;
    (o = (i = this.props).onError) === null || o === void 0 || o.call(i, t, n);
  }
  componentDidUpdate(t, n) {
    const {
      didCatch: o
    } = this.state, {
      resetKeys: i
    } = this.props;
    if (o && n.error !== null && dc(t.resetKeys, i)) {
      var s, a;
      (s = (a = this.props).onReset) === null || s === void 0 || s.call(a, {
        next: i,
        prev: t.resetKeys,
        reason: "keys"
      }), this.setState(Yt);
    }
  }
  render() {
    const {
      children: t,
      fallbackRender: n,
      FallbackComponent: o,
      fallback: i
    } = this.props, {
      didCatch: s,
      error: a
    } = this.state;
    let l = t;
    if (s) {
      const c = {
        error: a,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof n == "function")
        l = n(c);
      else if (o)
        l = Cn(o, c);
      else if (i === null || Je(i))
        l = i;
      else
        throw a;
    }
    return Cn(cc.Provider, {
      value: {
        didCatch: s,
        error: a,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, l);
  }
}
function dc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== t.length || e.some((n, o) => !Object.is(n, t[o]));
}
function fc(e) {
  return pe("MuiAlert", e);
}
const pc = me("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]), uo = pc;
function mc(e) {
  return pe("MuiIconButton", e);
}
const hc = me("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), gc = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], yc = (e) => {
  const {
    classes: t,
    disabled: n,
    color: o,
    edge: i,
    size: s
  } = e, a = {
    root: ["root", n && "disabled", o !== "default" && `color${J(o)}`, i && `edge${J(i)}`, `size${J(s)}`]
  };
  return ge(a, mc, t);
}, bc = se(Go, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${J(n.color)}`], n.edge && t[`edge${J(n.edge)}`], t[`size${J(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Ne(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var n;
  const o = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
  return y({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && y({
    color: o == null ? void 0 : o.main
  }, !t.disableRipple && {
    "&:hover": y({}, o && {
      backgroundColor: e.vars ? `rgba(${o.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ne(o.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${hc.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), er = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: s,
    className: a,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium"
  } = o, p = ie(o, gc), f = y({}, o, {
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), v = yc(f);
  return /* @__PURE__ */ P(bc, y({
    className: re(v.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: n,
    ownerState: f
  }, p, {
    children: s
  }));
});
process.env.NODE_ENV !== "production" && (er.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: tt(r.node, (e) => E.Children.toArray(e.children).some((n) => /* @__PURE__ */ E.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: r.oneOfType([r.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: r.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["small", "medium", "large"]), r.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const vc = er;
function Ec(e) {
  return pe("MuiSvgIcon", e);
}
me("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const xc = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Tc = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: o
  } = e, i = {
    root: ["root", t !== "inherit" && `color${J(t)}`, `fontSize${J(n)}`]
  };
  return ge(i, Ec, o);
}, Cc = se("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${J(n.color)}`], t[`fontSize${J(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, o, i, s, a, l, c, u, d, p, f, v, b;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (o = n.create) == null ? void 0 : o.call(n, "fill", {
      duration: (i = e.transitions) == null || (i = i.duration) == null ? void 0 : i.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((s = e.typography) == null || (a = s.pxToRem) == null ? void 0 : a.call(s, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (f = (e.vars || e).palette) == null || (f = f[t.color]) == null ? void 0 : f.main) != null ? p : {
      action: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.active,
      disabled: (b = (e.vars || e).palette) == null || (b = b.action) == null ? void 0 : b.disabled,
      inherit: void 0
    }[t.color]
  };
}), bt = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: p,
    viewBox: f = "0 0 24 24"
  } = o, v = ie(o, xc), b = /* @__PURE__ */ E.isValidElement(i) && i.type === "svg", g = y({}, o, {
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: f,
    hasSvgAsChild: b
  }), m = {};
  d || (m.viewBox = f);
  const S = Tc(g);
  return /* @__PURE__ */ Se(Cc, y({
    as: l,
    className: re(S.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n
  }, m, v, b && i.props, {
    ownerState: g,
    children: [b ? i.props.children : i, p ? /* @__PURE__ */ P("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (bt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: r.oneOfType([r.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: r.oneOfType([r.oneOf(["inherit", "large", "medium", "small"]), r.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: r.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: r.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: r.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: r.string
});
bt.muiName = "SvgIcon";
function rt(e, t) {
  function n(o, i) {
    return /* @__PURE__ */ P(bt, y({
      "data-testid": `${t}Icon`,
      ref: i
    }, o, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = bt.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(n));
}
const Rc = rt(/* @__PURE__ */ P("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), Sc = rt(/* @__PURE__ */ P("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), Oc = rt(/* @__PURE__ */ P("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), $c = rt(/* @__PURE__ */ P("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), Pc = rt(/* @__PURE__ */ P("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), Nc = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"], wc = (e) => {
  const {
    variant: t,
    color: n,
    severity: o,
    classes: i
  } = e, s = {
    root: ["root", `${t}${J(n || o)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return ge(s, fc, i);
}, Mc = se(vn, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${J(n.color || n.severity)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? Zt : Qt, o = e.palette.mode === "light" ? Qt : Zt, i = t.color || t.severity;
  return y({}, e.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px"
  }, i && t.variant === "standard" && {
    color: e.vars ? e.vars.palette.Alert[`${i}Color`] : n(e.palette[i].light, 0.6),
    backgroundColor: e.vars ? e.vars.palette.Alert[`${i}StandardBg`] : o(e.palette[i].light, 0.9),
    [`& .${uo.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${i}IconColor`]
    } : {
      color: e.palette[i].main
    }
  }, i && t.variant === "outlined" && {
    color: e.vars ? e.vars.palette.Alert[`${i}Color`] : n(e.palette[i].light, 0.6),
    border: `1px solid ${(e.vars || e).palette[i].light}`,
    [`& .${uo.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${i}IconColor`]
    } : {
      color: e.palette[i].main
    }
  }, i && t.variant === "filled" && y({
    fontWeight: e.typography.fontWeightMedium
  }, e.vars ? {
    color: e.vars.palette.Alert[`${i}FilledColor`],
    backgroundColor: e.vars.palette.Alert[`${i}FilledBg`]
  } : {
    backgroundColor: e.palette.mode === "dark" ? e.palette[i].dark : e.palette[i].main,
    color: e.palette.getContrastText(e.palette[i].main)
  }));
}), Ic = se("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), _c = se("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), fo = se("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), po = {
  success: /* @__PURE__ */ P(Rc, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ P(Sc, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ P(Oc, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ P($c, {
    fontSize: "inherit"
  })
}, tr = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var o, i, s, a, l, c;
  const u = he({
    props: t,
    name: "MuiAlert"
  }), {
    action: d,
    children: p,
    className: f,
    closeText: v = "Close",
    color: b,
    components: g = {},
    componentsProps: m = {},
    icon: S,
    iconMapping: z = po,
    onClose: T,
    role: C = "alert",
    severity: h = "success",
    slotProps: w = {},
    slots: B = {},
    variant: H = "standard"
  } = u, Z = ie(u, Nc), k = y({}, u, {
    color: b,
    severity: h,
    variant: H
  }), _ = wc(k), W = (o = (i = B.closeButton) != null ? i : g.CloseButton) != null ? o : vc, G = (s = (a = B.closeIcon) != null ? a : g.CloseIcon) != null ? s : Pc, I = (l = w.closeButton) != null ? l : m.closeButton, X = (c = w.closeIcon) != null ? c : m.closeIcon;
  return /* @__PURE__ */ Se(Mc, y({
    role: C,
    elevation: 0,
    ownerState: k,
    className: re(_.root, f),
    ref: n
  }, Z, {
    children: [S !== !1 ? /* @__PURE__ */ P(Ic, {
      ownerState: k,
      className: _.icon,
      children: S || z[h] || po[h]
    }) : null, /* @__PURE__ */ P(_c, {
      ownerState: k,
      className: _.message,
      children: p
    }), d != null ? /* @__PURE__ */ P(fo, {
      ownerState: k,
      className: _.action,
      children: d
    }) : null, d == null && T ? /* @__PURE__ */ P(fo, {
      ownerState: k,
      className: _.action,
      children: /* @__PURE__ */ P(W, y({
        size: "small",
        "aria-label": v,
        title: v,
        color: "inherit",
        onClick: T
      }, I, {
        children: /* @__PURE__ */ P(G, y({
          fontSize: "small"
        }, X))
      }))
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (tr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: r.node,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: r.string,
  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: r.oneOfType([r.oneOf(["error", "info", "success", "warning"]), r.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: r.shape({
    CloseButton: r.elementType,
    CloseIcon: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: r.shape({
    closeButton: r.object,
    closeIcon: r.object
  }),
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   * Set to `false` to remove the `icon`.
   */
  icon: r.node,
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: r.shape({
    error: r.node,
    info: r.node,
    success: r.node,
    warning: r.node
  }),
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: r.func,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: r.string,
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: r.oneOfType([r.oneOf(["error", "info", "success", "warning"]), r.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: r.shape({
    closeButton: r.object,
    closeIcon: r.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: r.shape({
    closeButton: r.elementType,
    closeIcon: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: r.oneOfType([r.oneOf(["filled", "outlined", "standard"]), r.string])
});
const nr = tr;
function kc({ label: e }) {
  return /* @__PURE__ */ P(zl, { children: e || "Title's default label" });
}
function Ac({ message: e }) {
  return /* @__PURE__ */ P(vl, { sx: { p: 3 }, children: /* @__PURE__ */ P(Al, { sx: { whiteSpace: "pre-line" }, children: e || "Description's default message" }) });
}
function Dc({ children: e }) {
  return /* @__PURE__ */ P(
    uc,
    {
      fallback: (t) => /* @__PURE__ */ Se(nr, { severity: "error", children: [
        "Erro ao apresentar conteúdo do dialogo: ",
        t.message
      ] }),
      children: e
    }
  );
}
function Bc({ children: e }) {
  return /* @__PURE__ */ P(Rl, { sx: { mr: 3, mb: 1 }, children: e || /* @__PURE__ */ P(nr, { severity: "warning", children: "Nenhuma ação disponível." }) });
}
function or({ title: e, content: t, actions: n, options: o, index: i, next: s }) {
  return /* @__PURE__ */ Se(
    dl,
    {
      ...o,
      ...o == null ? void 0 : o.dialogProps,
      open: !0,
      onClose: o == null ? void 0 : o.onClose,
      children: [
        s && /* @__PURE__ */ P(or, { ...s }),
        e,
        t,
        n
      ]
    },
    `${i || "last"}-${e || "custom"}`
  );
}
function Uc({ children: e }) {
  const [t, n] = mr([]), o = () => t.pop() | n([...t]), i = (u, d, p, f = {}) => t.push({ title: u, content: d, actions: p, options: f }) | n([...t]), s = (u, d, p, f, v) => new Promise((b, g) => i(
    u ? /* @__PURE__ */ P(kc, { label: u }) : void 0,
    /* @__PURE__ */ P(Ac, { message: d }),
    /* @__PURE__ */ P(Bc, { children: [p].flat().map(
      (m, S) => /* @__PURE__ */ P(
        lc,
        {
          onClick: () => o() | b((m == null ? void 0 : m.value) === void 0 ? m == null ? void 0 : m.label : m == null ? void 0 : m.value),
          ...f == null ? void 0 : f.buttonProps,
          children: m == null ? void 0 : m.label
        },
        S
      )
    ) }),
    { onClose: () => o() | v ? g("dialog closed") : b(), ...f }
  )), a = (u, d) => s(
    d == null ? void 0 : d.title,
    u,
    { label: (d == null ? void 0 : d.label) || "Confirmar" },
    d
  ), l = (u, d, p) => s(
    d,
    u,
    [
      { label: (p == null ? void 0 : p.confirmLabel) || "Confirmar", value: !0 },
      { label: (p == null ? void 0 : p.cancelLabel) || "Cancelar", value: !1 }
    ],
    p,
    !0
  ), c = (u, d) => u ? i(
    null,
    /* @__PURE__ */ P(Dc, { children: u }),
    null,
    d
  ) : o();
  return /* @__PURE__ */ Se(mo.Provider, { value: { initialized: !0, setDialog: c, setConfirm: l, setAlert: a }, children: [
    e,
    (t == null ? void 0 : t.length) > 0 && /* @__PURE__ */ P(or, { ...t.reduceRight((u, d, p) => ({ ...d, next: { ...u, index: p } })) })
  ] });
}
function Yc() {
  return xe.useContext(mo);
}
export {
  Uc as DialogProvider,
  Yc as useDialog
};
