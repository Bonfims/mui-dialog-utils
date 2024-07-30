import { jsxs as je, jsx as N } from "react/jsx-runtime";
import * as E from "react";
import ge, { Children as Ri, isValidElement as ht, cloneElement as At, createContext as Pi, Component as $i, createElement as br, useState as _i } from "react";
import wi from "@emotion/styled";
import { CacheProvider as Ni, Global as ki, ThemeContext as yo, css as Mi, keyframes as Gt } from "@emotion/react";
import * as Ii from "react-dom";
import wt from "react-dom";
const Lt = ge.createContext({
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
  setConfirm: (e, t, n) => new Promise((r) => confirm(e) ? r(!0) : r(!1)),
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
function ae(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0)
        continue;
      n[r] = e[r];
    }
  return n;
}
function v() {
  return v = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, v.apply(this, arguments);
}
function Ai(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ue(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var _n = { exports: {} }, Nt = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function Di() {
  if (vr)
    return ne;
  vr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function x(y) {
    if (typeof y == "object" && y !== null) {
      var P = y.$$typeof;
      switch (P) {
        case t:
          switch (y = y.type, y) {
            case l:
            case u:
            case r:
            case i:
            case o:
            case h:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case c:
                case d:
                case g:
                case b:
                case a:
                  return y;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function C(y) {
    return x(y) === u;
  }
  return ne.AsyncMode = l, ne.ConcurrentMode = u, ne.ContextConsumer = c, ne.ContextProvider = a, ne.Element = t, ne.ForwardRef = d, ne.Fragment = r, ne.Lazy = g, ne.Memo = b, ne.Portal = n, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = h, ne.isAsyncMode = function(y) {
    return C(y) || x(y) === l;
  }, ne.isConcurrentMode = C, ne.isContextConsumer = function(y) {
    return x(y) === c;
  }, ne.isContextProvider = function(y) {
    return x(y) === a;
  }, ne.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, ne.isForwardRef = function(y) {
    return x(y) === d;
  }, ne.isFragment = function(y) {
    return x(y) === r;
  }, ne.isLazy = function(y) {
    return x(y) === g;
  }, ne.isMemo = function(y) {
    return x(y) === b;
  }, ne.isPortal = function(y) {
    return x(y) === n;
  }, ne.isProfiler = function(y) {
    return x(y) === i;
  }, ne.isStrictMode = function(y) {
    return x(y) === o;
  }, ne.isSuspense = function(y) {
    return x(y) === h;
  }, ne.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === u || y === i || y === o || y === h || y === f || typeof y == "object" && y !== null && (y.$$typeof === g || y.$$typeof === b || y.$$typeof === a || y.$$typeof === c || y.$$typeof === d || y.$$typeof === m || y.$$typeof === T || y.$$typeof === $ || y.$$typeof === p);
  }, ne.typeOf = x, ne;
}
var re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr;
function ji() {
  return xr || (xr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function x(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === r || O === u || O === i || O === o || O === h || O === f || typeof O == "object" && O !== null && (O.$$typeof === g || O.$$typeof === b || O.$$typeof === a || O.$$typeof === c || O.$$typeof === d || O.$$typeof === m || O.$$typeof === T || O.$$typeof === $ || O.$$typeof === p);
    }
    function C(O) {
      if (typeof O == "object" && O !== null) {
        var fe = O.$$typeof;
        switch (fe) {
          case t:
            var w = O.type;
            switch (w) {
              case l:
              case u:
              case r:
              case i:
              case o:
              case h:
                return w;
              default:
                var ze = w && w.$$typeof;
                switch (ze) {
                  case c:
                  case d:
                  case g:
                  case b:
                  case a:
                    return ze;
                  default:
                    return fe;
                }
            }
          case n:
            return fe;
        }
      }
    }
    var y = l, P = u, R = c, V = a, ee = t, U = d, B = r, q = g, J = b, I = n, te = i, M = o, H = h, G = !1;
    function ke(O) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(O) || C(O) === l;
    }
    function S(O) {
      return C(O) === u;
    }
    function _(O) {
      return C(O) === c;
    }
    function L(O) {
      return C(O) === a;
    }
    function z(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function k(O) {
      return C(O) === d;
    }
    function D(O) {
      return C(O) === r;
    }
    function A(O) {
      return C(O) === g;
    }
    function F(O) {
      return C(O) === b;
    }
    function W(O) {
      return C(O) === n;
    }
    function j(O) {
      return C(O) === i;
    }
    function Y(O) {
      return C(O) === o;
    }
    function me(O) {
      return C(O) === h;
    }
    re.AsyncMode = y, re.ConcurrentMode = P, re.ContextConsumer = R, re.ContextProvider = V, re.Element = ee, re.ForwardRef = U, re.Fragment = B, re.Lazy = q, re.Memo = J, re.Portal = I, re.Profiler = te, re.StrictMode = M, re.Suspense = H, re.isAsyncMode = ke, re.isConcurrentMode = S, re.isContextConsumer = _, re.isContextProvider = L, re.isElement = z, re.isForwardRef = k, re.isFragment = D, re.isLazy = A, re.isMemo = F, re.isPortal = W, re.isProfiler = j, re.isStrictMode = Y, re.isSuspense = me, re.isValidElementType = x, re.typeOf = C;
  }()), re;
}
var Er;
function bo() {
  return Er || (Er = 1, process.env.NODE_ENV === "production" ? Nt.exports = Di() : Nt.exports = ji()), Nt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var gn, Tr;
function Bi() {
  if (Tr)
    return gn;
  Tr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return gn = o() ? Object.assign : function(i, a) {
    for (var c, l = r(i), u, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var h in c)
        t.call(c, h) && (l[h] = c[h]);
      if (e) {
        u = e(c);
        for (var f = 0; f < u.length; f++)
          n.call(c, u[f]) && (l[u[f]] = c[u[f]]);
      }
    }
    return l;
  }, gn;
}
var yn, Cr;
function Un() {
  if (Cr)
    return yn;
  Cr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return yn = e, yn;
}
var bn, Sr;
function vo() {
  return Sr || (Sr = 1, bn = Function.call.bind(Object.prototype.hasOwnProperty)), bn;
}
var vn, Or;
function zi() {
  if (Or)
    return vn;
  Or = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Un(), n = {}, r = vo();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (r(i, d)) {
          var h;
          try {
            if (typeof i[d] != "function") {
              var f = Error(
                (l || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            h = i[d](a, d, l, c, null, t);
          } catch (g) {
            h = g;
          }
          if (h && !(h instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in n)) {
            n[h.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + c + " type: " + h.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, vn = o, vn;
}
var xn, Rr;
function Fi() {
  if (Rr)
    return xn;
  Rr = 1;
  var e = bo(), t = Bi(), n = Un(), r = vo(), o = zi(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return xn = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(S) {
      var _ = S && (u && S[u] || S[d]);
      if (typeof _ == "function")
        return _;
    }
    var f = "<<anonymous>>", b = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: $(),
      arrayOf: x,
      element: C(),
      elementType: y(),
      instanceOf: P,
      node: U(),
      objectOf: V,
      oneOf: R,
      oneOfType: ee,
      shape: q,
      exact: J
    };
    function g(S, _) {
      return S === _ ? S !== 0 || 1 / S === 1 / _ : S !== S && _ !== _;
    }
    function p(S, _) {
      this.message = S, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function m(S) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, L = 0;
      function z(D, A, F, W, j, Y, me) {
        if (W = W || f, Y = Y || F, me !== n) {
          if (l) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = W + ":" + F;
            !_[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[fe] = !0, L++);
          }
        }
        return A[F] == null ? D ? A[F] === null ? new p("The " + j + " `" + Y + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new p("The " + j + " `" + Y + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : S(A, F, W, j, Y);
      }
      var k = z.bind(null, !1);
      return k.isRequired = z.bind(null, !0), k;
    }
    function T(S) {
      function _(L, z, k, D, A, F) {
        var W = L[z], j = M(W);
        if (j !== S) {
          var Y = H(W);
          return new p(
            "Invalid " + D + " `" + A + "` of type " + ("`" + Y + "` supplied to `" + k + "`, expected ") + ("`" + S + "`."),
            { expectedType: S }
          );
        }
        return null;
      }
      return m(_);
    }
    function $() {
      return m(a);
    }
    function x(S) {
      function _(L, z, k, D, A) {
        if (typeof S != "function")
          return new p("Property `" + A + "` of component `" + k + "` has invalid PropType notation inside arrayOf.");
        var F = L[z];
        if (!Array.isArray(F)) {
          var W = M(F);
          return new p("Invalid " + D + " `" + A + "` of type " + ("`" + W + "` supplied to `" + k + "`, expected an array."));
        }
        for (var j = 0; j < F.length; j++) {
          var Y = S(F, j, k, D, A + "[" + j + "]", n);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return m(_);
    }
    function C() {
      function S(_, L, z, k, D) {
        var A = _[L];
        if (!c(A)) {
          var F = M(A);
          return new p("Invalid " + k + " `" + D + "` of type " + ("`" + F + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(S);
    }
    function y() {
      function S(_, L, z, k, D) {
        var A = _[L];
        if (!e.isValidElementType(A)) {
          var F = M(A);
          return new p("Invalid " + k + " `" + D + "` of type " + ("`" + F + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(S);
    }
    function P(S) {
      function _(L, z, k, D, A) {
        if (!(L[z] instanceof S)) {
          var F = S.name || f, W = ke(L[z]);
          return new p("Invalid " + D + " `" + A + "` of type " + ("`" + W + "` supplied to `" + k + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return m(_);
    }
    function R(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function _(L, z, k, D, A) {
        for (var F = L[z], W = 0; W < S.length; W++)
          if (g(F, S[W]))
            return null;
        var j = JSON.stringify(S, function(me, O) {
          var fe = H(O);
          return fe === "symbol" ? String(O) : O;
        });
        return new p("Invalid " + D + " `" + A + "` of value `" + String(F) + "` " + ("supplied to `" + k + "`, expected one of " + j + "."));
      }
      return m(_);
    }
    function V(S) {
      function _(L, z, k, D, A) {
        if (typeof S != "function")
          return new p("Property `" + A + "` of component `" + k + "` has invalid PropType notation inside objectOf.");
        var F = L[z], W = M(F);
        if (W !== "object")
          return new p("Invalid " + D + " `" + A + "` of type " + ("`" + W + "` supplied to `" + k + "`, expected an object."));
        for (var j in F)
          if (r(F, j)) {
            var Y = S(F, j, k, D, A + "." + j, n);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return m(_);
    }
    function ee(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var _ = 0; _ < S.length; _++) {
        var L = S[_];
        if (typeof L != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + G(L) + " at index " + _ + "."
          ), a;
      }
      function z(k, D, A, F, W) {
        for (var j = [], Y = 0; Y < S.length; Y++) {
          var me = S[Y], O = me(k, D, A, F, W, n);
          if (O == null)
            return null;
          O.data && r(O.data, "expectedType") && j.push(O.data.expectedType);
        }
        var fe = j.length > 0 ? ", expected one of type [" + j.join(", ") + "]" : "";
        return new p("Invalid " + F + " `" + W + "` supplied to " + ("`" + A + "`" + fe + "."));
      }
      return m(z);
    }
    function U() {
      function S(_, L, z, k, D) {
        return I(_[L]) ? null : new p("Invalid " + k + " `" + D + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return m(S);
    }
    function B(S, _, L, z, k) {
      return new p(
        (S || "React class") + ": " + _ + " type `" + L + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + k + "`."
      );
    }
    function q(S) {
      function _(L, z, k, D, A) {
        var F = L[z], W = M(F);
        if (W !== "object")
          return new p("Invalid " + D + " `" + A + "` of type `" + W + "` " + ("supplied to `" + k + "`, expected `object`."));
        for (var j in S) {
          var Y = S[j];
          if (typeof Y != "function")
            return B(k, D, A, j, H(Y));
          var me = Y(F, j, k, D, A + "." + j, n);
          if (me)
            return me;
        }
        return null;
      }
      return m(_);
    }
    function J(S) {
      function _(L, z, k, D, A) {
        var F = L[z], W = M(F);
        if (W !== "object")
          return new p("Invalid " + D + " `" + A + "` of type `" + W + "` " + ("supplied to `" + k + "`, expected `object`."));
        var j = t({}, L[z], S);
        for (var Y in j) {
          var me = S[Y];
          if (r(S, Y) && typeof me != "function")
            return B(k, D, A, Y, H(me));
          if (!me)
            return new p(
              "Invalid " + D + " `" + A + "` key `" + Y + "` supplied to `" + k + "`.\nBad object: " + JSON.stringify(L[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  ")
            );
          var O = me(F, Y, k, D, A + "." + Y, n);
          if (O)
            return O;
        }
        return null;
      }
      return m(_);
    }
    function I(S) {
      switch (typeof S) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !S;
        case "object":
          if (Array.isArray(S))
            return S.every(I);
          if (S === null || c(S))
            return !0;
          var _ = h(S);
          if (_) {
            var L = _.call(S), z;
            if (_ !== S.entries) {
              for (; !(z = L.next()).done; )
                if (!I(z.value))
                  return !1;
            } else
              for (; !(z = L.next()).done; ) {
                var k = z.value;
                if (k && !I(k[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(S, _) {
      return S === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function M(S) {
      var _ = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : te(_, S) ? "symbol" : _;
    }
    function H(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var _ = M(S);
      if (_ === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function G(S) {
      var _ = H(S);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function ke(S) {
      return !S.constructor || !S.constructor.name ? f : S.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, xn;
}
var En, Pr;
function Li() {
  if (Pr)
    return En;
  Pr = 1;
  var e = Un();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, En = function() {
    function r(a, c, l, u, d, h) {
      if (h !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, En;
}
if (process.env.NODE_ENV !== "production") {
  var Vi = bo(), Wi = !0;
  _n.exports = Fi()(Vi.isElement, Wi);
} else
  _n.exports = Li()();
var Ui = _n.exports;
const s = /* @__PURE__ */ Ai(Ui);
function xo(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = xo(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function se() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = xo(e)) && (r && (r += " "), r += t);
  return r;
}
function Se(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      r[o] = e[o].reduce((i, a) => {
        if (a) {
          const c = t(a);
          c !== "" && i.push(c), n && n[a] && i.push(n[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
let $r = 0;
function qi(e) {
  const [t, n] = E.useState(e), r = e || t;
  return E.useEffect(() => {
    t == null && ($r += 1, n(`mui-${$r}`));
  }, [t]), r;
}
const _r = E.useId;
function Yi(e) {
  if (_r !== void 0) {
    const t = _r();
    return e ?? t;
  }
  return qi(e);
}
function yt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yt
}, Symbol.toStringTag, { value: "Module" }));
function X(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : yt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Hi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: X
}, Symbol.toStringTag, { value: "Module" }));
function Et(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Fe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Eo(e) {
  if (!Fe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Eo(e[n]);
  }), t;
}
function Ie(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? v({}, e) : e;
  return Fe(e) && Fe(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (Fe(t[o]) && o in e && Fe(e[o]) ? r[o] = Ie(e[o], t[o], n) : n.clone ? r[o] = Fe(t[o]) ? Eo(t[o]) : t[o] : r[o] = t[o]);
  }), r;
}
const Gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ie,
  isPlainObject: Fe
}, Symbol.toStringTag, { value: "Module" }));
function Xi(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function To(e, t, n, r, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = i.type;
  return typeof l == "function" && !Xi(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Xt = Et(s.element, To);
Xt.isRequired = Et(s.element.isRequired, To);
function Ji(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Zi(e, t, n, r, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !Ji(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Qi = Et(s.elementType, Zi), es = "exact-prop: ​";
function Co(e) {
  return process.env.NODE_ENV === "production" ? e : v({}, e, {
    [es]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
var wn = { exports: {} }, oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wr;
function ts() {
  if (wr)
    return oe;
  wr = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function p(m) {
    if (typeof m == "object" && m !== null) {
      var T = m.$$typeof;
      switch (T) {
        case e:
          switch (m = m.type, m) {
            case n:
            case o:
            case r:
            case u:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case a:
                case l:
                case f:
                case h:
                case i:
                  return m;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return oe.ContextConsumer = a, oe.ContextProvider = i, oe.Element = e, oe.ForwardRef = l, oe.Fragment = n, oe.Lazy = f, oe.Memo = h, oe.Portal = t, oe.Profiler = o, oe.StrictMode = r, oe.Suspense = u, oe.SuspenseList = d, oe.isAsyncMode = function() {
    return !1;
  }, oe.isConcurrentMode = function() {
    return !1;
  }, oe.isContextConsumer = function(m) {
    return p(m) === a;
  }, oe.isContextProvider = function(m) {
    return p(m) === i;
  }, oe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, oe.isForwardRef = function(m) {
    return p(m) === l;
  }, oe.isFragment = function(m) {
    return p(m) === n;
  }, oe.isLazy = function(m) {
    return p(m) === f;
  }, oe.isMemo = function(m) {
    return p(m) === h;
  }, oe.isPortal = function(m) {
    return p(m) === t;
  }, oe.isProfiler = function(m) {
    return p(m) === o;
  }, oe.isStrictMode = function(m) {
    return p(m) === r;
  }, oe.isSuspense = function(m) {
    return p(m) === u;
  }, oe.isSuspenseList = function(m) {
    return p(m) === d;
  }, oe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === o || m === r || m === u || m === d || m === b || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === h || m.$$typeof === i || m.$$typeof === a || m.$$typeof === l || m.$$typeof === g || m.getModuleId !== void 0);
  }, oe.typeOf = p, oe;
}
var ie = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function ns() {
  return Nr || (Nr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), g = !1, p = !1, m = !1, T = !1, $ = !1, x;
    x = Symbol.for("react.module.reference");
    function C(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === n || w === o || $ || w === r || w === u || w === d || T || w === b || g || p || m || typeof w == "object" && w !== null && (w.$$typeof === f || w.$$typeof === h || w.$$typeof === i || w.$$typeof === a || w.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === x || w.getModuleId !== void 0));
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ze = w.$$typeof;
        switch (ze) {
          case e:
            var Ge = w.type;
            switch (Ge) {
              case n:
              case o:
              case r:
              case u:
              case d:
                return Ge;
              default:
                var $t = Ge && Ge.$$typeof;
                switch ($t) {
                  case c:
                  case a:
                  case l:
                  case f:
                  case h:
                  case i:
                    return $t;
                  default:
                    return ze;
                }
            }
          case t:
            return ze;
        }
      }
    }
    var P = a, R = i, V = e, ee = l, U = n, B = f, q = h, J = t, I = o, te = r, M = u, H = d, G = !1, ke = !1;
    function S(w) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function _(w) {
      return ke || (ke = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(w) {
      return y(w) === a;
    }
    function z(w) {
      return y(w) === i;
    }
    function k(w) {
      return typeof w == "object" && w !== null && w.$$typeof === e;
    }
    function D(w) {
      return y(w) === l;
    }
    function A(w) {
      return y(w) === n;
    }
    function F(w) {
      return y(w) === f;
    }
    function W(w) {
      return y(w) === h;
    }
    function j(w) {
      return y(w) === t;
    }
    function Y(w) {
      return y(w) === o;
    }
    function me(w) {
      return y(w) === r;
    }
    function O(w) {
      return y(w) === u;
    }
    function fe(w) {
      return y(w) === d;
    }
    ie.ContextConsumer = P, ie.ContextProvider = R, ie.Element = V, ie.ForwardRef = ee, ie.Fragment = U, ie.Lazy = B, ie.Memo = q, ie.Portal = J, ie.Profiler = I, ie.StrictMode = te, ie.Suspense = M, ie.SuspenseList = H, ie.isAsyncMode = S, ie.isConcurrentMode = _, ie.isContextConsumer = L, ie.isContextProvider = z, ie.isElement = k, ie.isForwardRef = D, ie.isFragment = A, ie.isLazy = F, ie.isMemo = W, ie.isPortal = j, ie.isProfiler = Y, ie.isStrictMode = me, ie.isSuspense = O, ie.isSuspenseList = fe, ie.isValidElementType = C, ie.typeOf = y;
  }()), ie;
}
process.env.NODE_ENV === "production" ? wn.exports = ts() : wn.exports = ns();
var kr = wn.exports;
const rs = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function So(e) {
  const t = `${e}`.match(rs);
  return t && t[1] || "";
}
function Oo(e, t = "") {
  return e.displayName || e.name || So(e) || t;
}
function Mr(e, t, n) {
  const r = Oo(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function os(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Oo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case kr.ForwardRef:
          return Mr(e, e.render, "ForwardRef");
        case kr.Memo:
          return Mr(e, e.type, "memo");
        default:
          return;
      }
  }
}
const is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: os,
  getFunctionName: So
}, Symbol.toStringTag, { value: "Module" }));
function Ro(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], a = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const ss = s.oneOfType([s.func, s.object]);
function Ir(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Ve(e) {
  return e && e.ownerDocument || document;
}
function qn(e) {
  return Ve(e).defaultView || window;
}
function Nn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const kn = typeof window < "u" ? E.useLayoutEffect : E.useEffect;
function rt(e) {
  const t = E.useRef(e);
  return kn(() => {
    t.current = e;
  }), E.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function We(...e) {
  return E.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Nn(n, t);
    });
  }, e);
}
const Ar = {};
function as(e, t) {
  const n = E.useRef(Ar);
  return n.current === Ar && (n.current = e(t)), n;
}
const cs = [];
function ls(e) {
  E.useEffect(e, cs);
}
class Jt {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Jt();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function us() {
  const e = as(Jt.create).current;
  return ls(e.disposeEffect), e;
}
let Zt = !0, Mn = !1;
const ds = new Jt(), fs = {
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
function ps(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && fs[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function hs(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Zt = !0);
}
function Tn() {
  Zt = !1;
}
function ms() {
  this.visibilityState === "hidden" && Mn && (Zt = !0);
}
function gs(e) {
  e.addEventListener("keydown", hs, !0), e.addEventListener("mousedown", Tn, !0), e.addEventListener("pointerdown", Tn, !0), e.addEventListener("touchstart", Tn, !0), e.addEventListener("visibilitychange", ms, !0);
}
function ys(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Zt || ps(t);
}
function bs() {
  const e = E.useCallback((o) => {
    o != null && gs(o.ownerDocument);
  }, []), t = E.useRef(!1);
  function n() {
    return t.current ? (Mn = !0, ds.start(100, () => {
      Mn = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(o) {
    return ys(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function vs(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function xs(e) {
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
function Es(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Ts = Number.isInteger || Es;
function Po(e, t, n, r) {
  const o = e[t];
  if (o == null || !Ts(o)) {
    const i = xs(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function $o(e, t, ...n) {
  return e[t] === void 0 ? null : Po(e, t, ...n);
}
function In() {
  return null;
}
$o.isRequired = Po;
In.isRequired = In;
const Cs = process.env.NODE_ENV === "production" ? In : $o;
function Yn(e, t) {
  const n = v({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = v({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = v({}, i), Object.keys(o).forEach((a) => {
        n[r][a] = Yn(o[a], i[a]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
const Dr = (e) => e, Ss = () => {
  let e = Dr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Dr;
    }
  };
}, Os = Ss(), Rs = {
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
function xe(e, t, n = "Mui") {
  const r = Rs[t];
  return r ? `${n}-${r}` : `${Os.generate(e)}-${t}`;
}
function Ee(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = xe(e, o, n);
  }), r;
}
function Ps(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const $s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ps
}, Symbol.toStringTag, { value: "Module" }));
function _s(e) {
  return typeof e == "string";
}
function _o(e, t, n) {
  return e === void 0 || _s(e) ? t : v({}, t, {
    ownerState: v({}, t.ownerState, n)
  });
}
function wo(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function No(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function jr(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function ko(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const b = se(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), g = v({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), p = v({}, n, o, r);
    return b.length > 0 && (p.className = b), Object.keys(g).length > 0 && (p.style = g), {
      props: p,
      internalRef: void 0
    };
  }
  const a = wo(v({}, o, r)), c = jr(r), l = jr(o), u = t(a), d = se(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), h = v({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), f = v({}, u, n, l, c);
  return d.length > 0 && (f.className = d), Object.keys(h).length > 0 && (f.style = h), {
    props: f,
    internalRef: u.ref
  };
}
const ws = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Br(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, a = ae(e, ws), c = i ? {} : No(r, o), {
    props: l,
    internalRef: u
  } = ko(v({}, a, {
    externalSlotProps: c
  })), d = We(u, c == null ? void 0 : c.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return _o(n, v({}, l, {
    ref: d
  }), o);
}
function Ns(e) {
  const t = Ve(e);
  return t.body === e ? qn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function mt(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function zr(e) {
  return parseInt(qn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function ks(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Fr(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const c = i.indexOf(a) === -1, l = !ks(a);
    c && l && mt(a, o);
  });
}
function Cn(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Ms(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Ns(r)) {
      const a = vs(Ve(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${zr(r) + a}px`;
      const c = Ve(r).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${zr(l) + a}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = Ve(r).body;
    else {
      const a = r.parentElement, c = qn(r);
      i = (a == null ? void 0 : a.nodeName) === "HTML" && c.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: a,
      property: c
    }) => {
      i ? a.style.setProperty(c, i) : a.style.removeProperty(c);
    });
  };
}
function Is(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class As {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && mt(t.modalRef, !1);
    const o = Is(n);
    Fr(n, t.mount, t.modalRef, o, !0);
    const i = Cn(this.containers, (a) => a.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = Cn(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[r];
    o.restore || (o.restore = Ms(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = Cn(this.containers, (a) => a.modals.indexOf(t) !== -1), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && mt(t.modalRef, n), Fr(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && mt(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Ds(e) {
  return typeof e == "function" ? e() : e;
}
function js(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Bs = new As();
function zs(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = Bs,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: c,
    children: l,
    onClose: u,
    open: d,
    rootRef: h
  } = e, f = E.useRef({}), b = E.useRef(null), g = E.useRef(null), p = We(g, h), [m, T] = E.useState(!d), $ = js(l);
  let x = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (x = !1);
  const C = () => Ve(b.current), y = () => (f.current.modalRef = g.current, f.current.mount = b.current, f.current), P = () => {
    o.mount(y(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, R = rt(() => {
    const M = Ds(t) || C().body;
    o.add(y(), M), g.current && P();
  }), V = E.useCallback(() => o.isTopModal(y()), [o]), ee = rt((M) => {
    b.current = M, M && (d && V() ? P() : g.current && mt(g.current, x));
  }), U = E.useCallback(() => {
    o.remove(y(), x);
  }, [x, o]);
  E.useEffect(() => () => {
    U();
  }, [U]), E.useEffect(() => {
    d ? R() : (!$ || !i) && U();
  }, [d, U, $, i, R]);
  const B = (M) => (H) => {
    var G;
    (G = M.onKeyDown) == null || G.call(M, H), !(H.key !== "Escape" || H.which === 229 || // Wait until IME is settled.
    !V()) && (n || (H.stopPropagation(), u && u(H, "escapeKeyDown")));
  }, q = (M) => (H) => {
    var G;
    (G = M.onClick) == null || G.call(M, H), H.target === H.currentTarget && u && u(H, "backdropClick");
  };
  return {
    getRootProps: (M = {}) => {
      const H = wo(e);
      delete H.onTransitionEnter, delete H.onTransitionExited;
      const G = v({}, H, M);
      return v({
        role: "presentation"
      }, G, {
        onKeyDown: B(G),
        ref: p
      });
    },
    getBackdropProps: (M = {}) => {
      const H = M;
      return v({
        "aria-hidden": !0
      }, H, {
        onClick: q(H),
        open: d
      });
    },
    getTransitionProps: () => {
      const M = () => {
        T(!1), a && a();
      }, H = () => {
        T(!0), c && c(), i && U();
      };
      return {
        onEnter: Ir(M, l == null ? void 0 : l.props.onEnter),
        onExited: Ir(H, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: p,
    portalRef: ee,
    isTopModal: V,
    exited: m,
    hasTransition: $
  };
}
const Fs = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Ls(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Vs(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Ws(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Vs(e));
}
function Us(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Fs)).forEach((r, o) => {
    const i = Ls(r);
    i === -1 || !Ws(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function qs() {
  return !0;
}
function Vt(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = Us,
    isEnabled: a = qs,
    open: c
  } = e, l = E.useRef(!1), u = E.useRef(null), d = E.useRef(null), h = E.useRef(null), f = E.useRef(null), b = E.useRef(!1), g = E.useRef(null), p = We(t.ref, g), m = E.useRef(null);
  E.useEffect(() => {
    !c || !g.current || (b.current = !n);
  }, [n, c]), E.useEffect(() => {
    if (!c || !g.current)
      return;
    const x = Ve(g.current);
    return g.current.contains(x.activeElement) || (g.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", "-1")), b.current && g.current.focus()), () => {
      o || (h.current && h.current.focus && (l.current = !0, h.current.focus()), h.current = null);
    };
  }, [c]), E.useEffect(() => {
    if (!c || !g.current)
      return;
    const x = Ve(g.current), C = (R) => {
      m.current = R, !(r || !a() || R.key !== "Tab") && x.activeElement === g.current && R.shiftKey && (l.current = !0, d.current && d.current.focus());
    }, y = () => {
      const R = g.current;
      if (R === null)
        return;
      if (!x.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (R.contains(x.activeElement) || r && x.activeElement !== u.current && x.activeElement !== d.current)
        return;
      if (x.activeElement !== f.current)
        f.current = null;
      else if (f.current !== null)
        return;
      if (!b.current)
        return;
      let V = [];
      if ((x.activeElement === u.current || x.activeElement === d.current) && (V = i(g.current)), V.length > 0) {
        var ee, U;
        const B = !!((ee = m.current) != null && ee.shiftKey && ((U = m.current) == null ? void 0 : U.key) === "Tab"), q = V[0], J = V[V.length - 1];
        typeof q != "string" && typeof J != "string" && (B ? J.focus() : q.focus());
      } else
        R.focus();
    };
    x.addEventListener("focusin", y), x.addEventListener("keydown", C, !0);
    const P = setInterval(() => {
      x.activeElement && x.activeElement.tagName === "BODY" && y();
    }, 50);
    return () => {
      clearInterval(P), x.removeEventListener("focusin", y), x.removeEventListener("keydown", C, !0);
    };
  }, [n, r, o, a, c, i]);
  const T = (x) => {
    h.current === null && (h.current = x.relatedTarget), b.current = !0, f.current = x.target;
    const C = t.props.onFocus;
    C && C(x);
  }, $ = (x) => {
    h.current === null && (h.current = x.relatedTarget), b.current = !0;
  };
  return /* @__PURE__ */ je(E.Fragment, {
    children: [/* @__PURE__ */ N("div", {
      tabIndex: c ? 0 : -1,
      onFocus: $,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(t, {
      ref: p,
      onFocus: T
    }), /* @__PURE__ */ N("div", {
      tabIndex: c ? 0 : -1,
      onFocus: $,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Vt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Xt,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: s.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: s.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: s.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: s.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: s.func,
  /**
   * If `true`, focus is locked.
   */
  open: s.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Vt.propTypes = Co(Vt.propTypes));
function Ys(e) {
  return typeof e == "function" ? e() : e;
}
const Wt = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [a, c] = E.useState(null), l = We(/* @__PURE__ */ E.isValidElement(r) ? r.ref : null, n);
  if (kn(() => {
    i || c(Ys(o) || document.body);
  }, [o, i]), kn(() => {
    if (a && !i)
      return Nn(n, a), () => {
        Nn(n, null);
      };
  }, [n, a, i]), i) {
    if (/* @__PURE__ */ E.isValidElement(r)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ E.cloneElement(r, u);
    }
    return /* @__PURE__ */ N(E.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ N(E.Fragment, {
    children: a && /* @__PURE__ */ Ii.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (Wt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: s.node,
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
  container: s.oneOfType([Ro, s.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool
});
process.env.NODE_ENV !== "production" && (Wt.propTypes = Co(Wt.propTypes));
var Tt = {}, Mo = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Mo);
var Io = Mo.exports, Sn = { exports: {} }, Lr;
function Ks() {
  return Lr || (Lr = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var o = arguments[r];
          for (var i in o)
            Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Sn)), Sn.exports;
}
var On = { exports: {} }, Vr;
function Hs() {
  return Vr || (Vr = 1, function(e) {
    function t(n, r) {
      if (n == null)
        return {};
      var o = {};
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          if (r.indexOf(i) >= 0)
            continue;
          o[i] = n[i];
        }
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(On)), On.exports;
}
function Gs(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Xs(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Js = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? process.env.NODE_ENV === "production" : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Xs(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var a = Gs(o);
      try {
        a.insertRule(r, a.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(r) && console.error('There was a problem inserting the following rule: "' + r + '"', c);
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), ve = "-ms-", Ut = "-moz-", Z = "-webkit-", Kn = "comm", Hn = "rule", Gn = "decl", Zs = "@import", Ao = "@keyframes", Qs = "@layer", ea = Math.abs, Qt = String.fromCharCode, ta = Object.assign;
function na(e, t) {
  return be(e, 0) ^ 45 ? (((t << 2 ^ be(e, 0)) << 2 ^ be(e, 1)) << 2 ^ be(e, 2)) << 2 ^ be(e, 3) : 0;
}
function Do(e) {
  return e.trim();
}
function ra(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, n) {
  return e.replace(t, n);
}
function An(e, t) {
  return e.indexOf(t);
}
function be(e, t) {
  return e.charCodeAt(t) | 0;
}
function bt(e, t, n) {
  return e.slice(t, n);
}
function Me(e) {
  return e.length;
}
function Xn(e) {
  return e.length;
}
function kt(e, t) {
  return t.push(e), e;
}
function oa(e, t) {
  return e.map(t).join("");
}
var en = 1, st = 1, jo = 0, Ce = 0, ye = 0, at = "";
function tn(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: en, column: st, length: a, return: "" };
}
function dt(e, t) {
  return ta(tn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ia() {
  return ye;
}
function sa() {
  return ye = Ce > 0 ? be(at, --Ce) : 0, st--, ye === 10 && (st = 1, en--), ye;
}
function Re() {
  return ye = Ce < jo ? be(at, Ce++) : 0, st++, ye === 10 && (st = 1, en++), ye;
}
function Ae() {
  return be(at, Ce);
}
function Dt() {
  return Ce;
}
function Ct(e, t) {
  return bt(at, e, t);
}
function vt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Bo(e) {
  return en = st = 1, jo = Me(at = e), Ce = 0, [];
}
function zo(e) {
  return at = "", e;
}
function jt(e) {
  return Do(Ct(Ce - 1, Dn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function aa(e) {
  for (; (ye = Ae()) && ye < 33; )
    Re();
  return vt(e) > 2 || vt(ye) > 3 ? "" : " ";
}
function ca(e, t) {
  for (; --t && Re() && !(ye < 48 || ye > 102 || ye > 57 && ye < 65 || ye > 70 && ye < 97); )
    ;
  return Ct(e, Dt() + (t < 6 && Ae() == 32 && Re() == 32));
}
function Dn(e) {
  for (; Re(); )
    switch (ye) {
      case e:
        return Ce;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Dn(ye);
        break;
      case 40:
        e === 41 && Dn(e);
        break;
      case 92:
        Re();
        break;
    }
  return Ce;
}
function la(e, t) {
  for (; Re() && e + ye !== 57; )
    if (e + ye === 84 && Ae() === 47)
      break;
  return "/*" + Ct(t, Ce - 1) + "*" + Qt(e === 47 ? e : Re());
}
function ua(e) {
  for (; !vt(Ae()); )
    Re();
  return Ct(e, Ce);
}
function da(e) {
  return zo(Bt("", null, null, null, [""], e = Bo(e), 0, [0], e));
}
function Bt(e, t, n, r, o, i, a, c, l) {
  for (var u = 0, d = 0, h = a, f = 0, b = 0, g = 0, p = 1, m = 1, T = 1, $ = 0, x = "", C = o, y = i, P = r, R = x; m; )
    switch (g = $, $ = Re()) {
      case 40:
        if (g != 108 && be(R, h - 1) == 58) {
          An(R += Q(jt($), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += jt($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += aa(g);
        break;
      case 92:
        R += ca(Dt() - 1, 7);
        continue;
      case 47:
        switch (Ae()) {
          case 42:
          case 47:
            kt(fa(la(Re(), Dt()), t, n), l);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * p:
        c[u++] = Me(R) * T;
      case 125 * p:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            m = 0;
          case 59 + d:
            T == -1 && (R = Q(R, /\f/g, "")), b > 0 && Me(R) - h && kt(b > 32 ? Ur(R + ";", r, n, h - 1) : Ur(Q(R, " ", "") + ";", r, n, h - 2), l);
            break;
          case 59:
            R += ";";
          default:
            if (kt(P = Wr(R, t, n, u, d, o, c, x, C = [], y = [], h), i), $ === 123)
              if (d === 0)
                Bt(R, t, P, P, C, i, h, c, y);
              else
                switch (f === 99 && be(R, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Bt(e, P, P, r && kt(Wr(e, P, P, 0, 0, o, c, x, o, C = [], h), y), o, y, h, c, r ? C : y);
                    break;
                  default:
                    Bt(R, P, P, P, [""], y, 0, c, y);
                }
        }
        u = d = b = 0, p = T = 1, x = R = "", h = a;
        break;
      case 58:
        h = 1 + Me(R), b = g;
      default:
        if (p < 1) {
          if ($ == 123)
            --p;
          else if ($ == 125 && p++ == 0 && sa() == 125)
            continue;
        }
        switch (R += Qt($), $ * p) {
          case 38:
            T = d > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            c[u++] = (Me(R) - 1) * T, T = 1;
            break;
          case 64:
            Ae() === 45 && (R += jt(Re())), f = Ae(), d = h = Me(x = R += ua(Dt())), $++;
            break;
          case 45:
            g === 45 && Me(R) == 2 && (p = 0);
        }
    }
  return i;
}
function Wr(e, t, n, r, o, i, a, c, l, u, d) {
  for (var h = o - 1, f = o === 0 ? i : [""], b = Xn(f), g = 0, p = 0, m = 0; g < r; ++g)
    for (var T = 0, $ = bt(e, h + 1, h = ea(p = a[g])), x = e; T < b; ++T)
      (x = Do(p > 0 ? f[T] + " " + $ : Q($, /&\f/g, f[T]))) && (l[m++] = x);
  return tn(e, t, n, o === 0 ? Hn : c, l, u, d);
}
function fa(e, t, n) {
  return tn(e, t, n, Kn, Qt(ia()), bt(e, 2, -2), 0);
}
function Ur(e, t, n, r) {
  return tn(e, t, n, Gn, bt(e, 0, r), bt(e, r + 1, -1), r);
}
function ot(e, t) {
  for (var n = "", r = Xn(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function pa(e, t, n, r) {
  switch (e.type) {
    case Qs:
      if (e.children.length)
        break;
    case Zs:
    case Gn:
      return e.return = e.return || e.value;
    case Kn:
      return "";
    case Ao:
      return e.return = e.value + "{" + ot(e.children, r) + "}";
    case Hn:
      e.value = e.props.join(",");
  }
  return Me(n = ot(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function ha(e) {
  var t = Xn(e);
  return function(n, r, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, o, i) || "";
    return a;
  };
}
function ma(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ga = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Ae(), o === 38 && i === 12 && (n[r] = 1), !vt(i); )
    Re();
  return Ct(t, Ce);
}, ya = function(t, n) {
  var r = -1, o = 44;
  do
    switch (vt(o)) {
      case 0:
        o === 38 && Ae() === 12 && (n[r] = 1), t[r] += ga(Ce - 1, n, r);
        break;
      case 2:
        t[r] += jt(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Ae() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Qt(o);
    }
  while (o = Re());
  return t;
}, ba = function(t, n) {
  return zo(ya(Bo(t), n));
}, qr = /* @__PURE__ */ new WeakMap(), va = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !qr.get(r)) && !o) {
      qr.set(t, !0);
      for (var i = [], a = ba(n, i), c = r.props, l = 0, u = 0; l < a.length; l++)
        for (var d = 0; d < c.length; d++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, c[d]) : c[d] + " " + a[l];
    }
  }
}, xa = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, Ea = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Ta = function(t) {
  return t.type === "comm" && t.children.indexOf(Ea) > -1;
}, Ca = function(t) {
  return function(n, r, o) {
    if (!(n.type !== "rule" || t.compat)) {
      var i = n.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var a = !!n.parent, c = a ? n.parent.children : (
          // global rule at the root level
          o
        ), l = c.length - 1; l >= 0; l--) {
          var u = c[l];
          if (u.line < n.line)
            break;
          if (u.column < n.column) {
            if (Ta(u))
              return;
            break;
          }
        }
        i.forEach(function(d) {
          console.error('The pseudo class "' + d + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + d.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Fo = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Sa = function(t, n) {
  for (var r = t - 1; r >= 0; r--)
    if (!Fo(n[r]))
      return !0;
  return !1;
}, Yr = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Oa = function(t, n, r) {
  Fo(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Yr(t)) : Sa(n, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Yr(t)));
};
function Lo(e, t) {
  switch (na(e, t)) {
    case 5103:
      return Z + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Z + e + Ut + e + ve + e + e;
    case 6828:
    case 4268:
      return Z + e + ve + e + e;
    case 6165:
      return Z + e + ve + "flex-" + e + e;
    case 5187:
      return Z + e + Q(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + ve + "flex-$1$2") + e;
    case 5443:
      return Z + e + ve + "flex-item-" + Q(e, /flex-|-self/, "") + e;
    case 4675:
      return Z + e + ve + "flex-line-pack" + Q(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Z + e + ve + Q(e, "shrink", "negative") + e;
    case 5292:
      return Z + e + ve + Q(e, "basis", "preferred-size") + e;
    case 6060:
      return Z + "box-" + Q(e, "-grow", "") + Z + e + ve + Q(e, "grow", "positive") + e;
    case 4554:
      return Z + Q(e, /([^-])(transform)/g, "$1" + Z + "$2") + e;
    case 6187:
      return Q(Q(Q(e, /(zoom-|grab)/, Z + "$1"), /(image-set)/, Z + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Q(e, /(image-set\([^]*)/, Z + "$1$`$1");
    case 4968:
      return Q(Q(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + ve + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Z + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Q(e, /(.+)-inline(.+)/, Z + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Me(e) - 1 - t > 6)
        switch (be(e, t + 1)) {
          case 109:
            if (be(e, t + 4) !== 45)
              break;
          case 102:
            return Q(e, /(.+:)(.+)-([^]+)/, "$1" + Z + "$2-$3$1" + Ut + (be(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~An(e, "stretch") ? Lo(Q(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (be(e, t + 1) !== 115)
        break;
    case 6444:
      switch (be(e, Me(e) - 3 - (~An(e, "!important") && 10))) {
        case 107:
          return Q(e, ":", ":" + Z) + e;
        case 101:
          return Q(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Z + (be(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Z + "$2$3$1" + ve + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (be(e, t + 11)) {
        case 114:
          return Z + e + ve + Q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Z + e + ve + Q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Z + e + ve + Q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Z + e + ve + e + e;
  }
  return e;
}
var Ra = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Gn:
        t.return = Lo(t.value, t.length);
        break;
      case Ao:
        return ot([dt(t, {
          value: Q(t.value, "@", "@" + Z)
        })], o);
      case Hn:
        if (t.length)
          return oa(t.props, function(i) {
            switch (ra(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ot([dt(t, {
                  props: [Q(i, /:(read-\w+)/, ":" + Ut + "$1")]
                })], o);
              case "::placeholder":
                return ot([dt(t, {
                  props: [Q(i, /:(plac\w+)/, ":" + Z + "input-$1")]
                }), dt(t, {
                  props: [Q(i, /:(plac\w+)/, ":" + Ut + "$1")]
                }), dt(t, {
                  props: [Q(i, /:(plac\w+)/, ve + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Pa = [Ra], $a = function(t) {
  var n = t.key;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(p) {
      var m = p.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Pa;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(n))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + n + '" was passed');
  var i = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(p) {
      for (var m = p.getAttribute("data-emotion").split(" "), T = 1; T < m.length; T++)
        i[m[T]] = !0;
      c.push(p);
    }
  );
  var l, u = [va, xa];
  process.env.NODE_ENV !== "production" && u.push(Ca({
    get compat() {
      return g.compat;
    }
  }), Oa);
  {
    var d, h = [pa, process.env.NODE_ENV !== "production" ? function(p) {
      p.root || (p.return ? d.insert(p.return) : p.value && p.type !== Kn && d.insert(p.value + "{}"));
    } : ma(function(p) {
      d.insert(p);
    })], f = ha(u.concat(o, h)), b = function(m) {
      return ot(da(m), f);
    };
    l = function(m, T, $, x) {
      d = $, process.env.NODE_ENV !== "production" && T.map !== void 0 && (d = {
        insert: function(y) {
          $.insert(y + T.map);
        }
      }), b(m ? m + "{" + T.styles + "}" : T.styles), x && (g.inserted[T.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new Js({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return g.sheet.hydrate(c), g;
};
let jn;
typeof document == "object" && (jn = $a({
  key: "css",
  prepend: !0
}));
function Vo(e) {
  const {
    injectFirst: t,
    children: n
  } = e;
  return t && jn ? /* @__PURE__ */ N(Ni, {
    value: jn,
    children: n
  }) : n;
}
process.env.NODE_ENV !== "production" && (Vo.propTypes = {
  /**
   * Your component tree.
   */
  children: s.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: s.bool
});
function _a(e) {
  return e == null || Object.keys(e).length === 0;
}
function Wo(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ N(ki, {
    styles: typeof t == "function" ? (o) => t(_a(o) ? n : o) : t
  });
}
process.env.NODE_ENV !== "production" && (Wo.propTypes = {
  defaultTheme: s.object,
  styles: s.oneOfType([s.array, s.string, s.object, s.func])
});
/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function wa(e, t) {
  const n = wi(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const Na = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, ka = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Wo,
  StyledEngineProvider: Vo,
  ThemeContext: yo,
  css: Mi,
  default: wa,
  internal_processStyles: Na,
  keyframes: Gt
}, Symbol.toStringTag, { value: "Module" })), Ma = /* @__PURE__ */ Ue(ka), Ia = /* @__PURE__ */ Ue(Gi), Aa = /* @__PURE__ */ Ue(Hi), Da = /* @__PURE__ */ Ue(is), ja = ["values", "unit", "step"], Ba = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => v({}, n, {
    [r.key]: r.val
  }), {});
};
function Uo(e) {
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
    step: r = 5
  } = e, o = ae(e, ja), i = Ba(t), a = Object.keys(i);
  function c(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function u(f, b) {
    const g = a.indexOf(b);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : b) - r / 100}${n})`;
  }
  function d(f) {
    return a.indexOf(f) + 1 < a.length ? u(f, a[a.indexOf(f) + 1]) : c(f);
  }
  function h(f) {
    const b = a.indexOf(f);
    return b === 0 ? c(a[1]) : b === a.length - 1 ? l(a[b]) : u(f, a[a.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return v({
    keys: a,
    values: i,
    up: c,
    down: l,
    between: u,
    only: d,
    not: h,
    unit: n
  }, o);
}
const za = {
  borderRadius: 4
}, qe = process.env.NODE_ENV !== "production" ? s.oneOfType([s.number, s.string, s.object, s.array]) : {};
function gt(e, t) {
  return t ? Ie(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Jn = {
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
}, Kr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Jn[e]}px)`
};
function De(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Kr;
    return t.reduce((a, c, l) => (a[i.up(i.keys[l])] = n(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Kr;
    return Object.keys(t).reduce((a, c) => {
      if (Object.keys(i.values || Jn).indexOf(c) !== -1) {
        const l = i.up(c);
        a[l] = n(t[c], c);
      } else {
        const l = c;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return n(t);
}
function Fa(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function La(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function nn(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function qt(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = nn(e, n) || r, t && (o = t(o, r, e)), o;
}
function pe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], l = a.theme, u = nn(l, r) || {};
    return De(a, c, (h) => {
      let f = qt(u, o, h);
      return h === f && typeof h == "string" && (f = qt(u, o, `${t}${h === "default" ? "" : X(h)}`, h)), n === !1 ? f : {
        [n]: f
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: qe
  } : {}, i.filterProps = [t], i;
}
function Va(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Wa = {
  m: "margin",
  p: "padding"
}, Ua = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Hr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, qa = Va((e) => {
  if (e.length > 2)
    if (Hr[e])
      e = Hr[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Wa[t], o = Ua[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), rn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], on = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ya = [...rn, ...on];
function St(e, t, n, r) {
  var o;
  const i = (o = nn(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function qo(e) {
  return St(e, "spacing", 8, "spacing");
}
function Ot(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Ka(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Ot(t, n), r), {});
}
function Ha(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = qa(n), i = Ka(o, r), a = e[n];
  return De(e, a, i);
}
function Yo(e, t) {
  const n = qo(e.theme);
  return Object.keys(e).map((r) => Ha(e, t, r, n)).reduce(gt, {});
}
function ue(e) {
  return Yo(e, rn);
}
ue.propTypes = process.env.NODE_ENV !== "production" ? rn.reduce((e, t) => (e[t] = qe, e), {}) : {};
ue.filterProps = rn;
function de(e) {
  return Yo(e, on);
}
de.propTypes = process.env.NODE_ENV !== "production" ? on.reduce((e, t) => (e[t] = qe, e), {}) : {};
de.filterProps = on;
process.env.NODE_ENV !== "production" && Ya.reduce((e, t) => (e[t] = qe, e), {});
function Ga(e = 8) {
  if (e.mui)
    return e;
  const t = qo({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function sn(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? gt(o, t[i](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function _e(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ne(e, t) {
  return pe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Xa = Ne("border", _e), Ja = Ne("borderTop", _e), Za = Ne("borderRight", _e), Qa = Ne("borderBottom", _e), ec = Ne("borderLeft", _e), tc = Ne("borderColor"), nc = Ne("borderTopColor"), rc = Ne("borderRightColor"), oc = Ne("borderBottomColor"), ic = Ne("borderLeftColor"), sc = Ne("outline", _e), ac = Ne("outlineColor"), an = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = St(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Ot(t, r)
    });
    return De(e, e.borderRadius, n);
  }
  return null;
};
an.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: qe
} : {};
an.filterProps = ["borderRadius"];
sn(Xa, Ja, Za, Qa, ec, tc, nc, rc, oc, ic, an, sc, ac);
const cn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = St(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Ot(t, r)
    });
    return De(e, e.gap, n);
  }
  return null;
};
cn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: qe
} : {};
cn.filterProps = ["gap"];
const ln = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = St(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Ot(t, r)
    });
    return De(e, e.columnGap, n);
  }
  return null;
};
ln.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: qe
} : {};
ln.filterProps = ["columnGap"];
const un = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = St(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Ot(t, r)
    });
    return De(e, e.rowGap, n);
  }
  return null;
};
un.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: qe
} : {};
un.filterProps = ["rowGap"];
const cc = pe({
  prop: "gridColumn"
}), lc = pe({
  prop: "gridRow"
}), uc = pe({
  prop: "gridAutoFlow"
}), dc = pe({
  prop: "gridAutoColumns"
}), fc = pe({
  prop: "gridAutoRows"
}), pc = pe({
  prop: "gridTemplateColumns"
}), hc = pe({
  prop: "gridTemplateRows"
}), mc = pe({
  prop: "gridTemplateAreas"
}), gc = pe({
  prop: "gridArea"
});
sn(cn, ln, un, cc, lc, uc, dc, fc, pc, hc, mc, gc);
function it(e, t) {
  return t === "grey" ? t : e;
}
const yc = pe({
  prop: "color",
  themeKey: "palette",
  transform: it
}), bc = pe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: it
}), vc = pe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: it
});
sn(yc, bc, vc);
function Oe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const xc = pe({
  prop: "width",
  transform: Oe
}), Zn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Jn[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Oe(n)
      };
    };
    return De(e, e.maxWidth, t);
  }
  return null;
};
Zn.filterProps = ["maxWidth"];
const Ec = pe({
  prop: "minWidth",
  transform: Oe
}), Tc = pe({
  prop: "height",
  transform: Oe
}), Cc = pe({
  prop: "maxHeight",
  transform: Oe
}), Sc = pe({
  prop: "minHeight",
  transform: Oe
});
pe({
  prop: "size",
  cssProperty: "width",
  transform: Oe
});
pe({
  prop: "size",
  cssProperty: "height",
  transform: Oe
});
const Oc = pe({
  prop: "boxSizing"
});
sn(xc, Zn, Ec, Tc, Cc, Sc, Oc);
const Rt = {
  // borders
  border: {
    themeKey: "borders",
    transform: _e
  },
  borderTop: {
    themeKey: "borders",
    transform: _e
  },
  borderRight: {
    themeKey: "borders",
    transform: _e
  },
  borderBottom: {
    themeKey: "borders",
    transform: _e
  },
  borderLeft: {
    themeKey: "borders",
    transform: _e
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
    transform: _e
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: an
  },
  // palette
  color: {
    themeKey: "palette",
    transform: it
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: it
  },
  backgroundColor: {
    themeKey: "palette",
    transform: it
  },
  // spacing
  p: {
    style: de
  },
  pt: {
    style: de
  },
  pr: {
    style: de
  },
  pb: {
    style: de
  },
  pl: {
    style: de
  },
  px: {
    style: de
  },
  py: {
    style: de
  },
  padding: {
    style: de
  },
  paddingTop: {
    style: de
  },
  paddingRight: {
    style: de
  },
  paddingBottom: {
    style: de
  },
  paddingLeft: {
    style: de
  },
  paddingX: {
    style: de
  },
  paddingY: {
    style: de
  },
  paddingInline: {
    style: de
  },
  paddingInlineStart: {
    style: de
  },
  paddingInlineEnd: {
    style: de
  },
  paddingBlock: {
    style: de
  },
  paddingBlockStart: {
    style: de
  },
  paddingBlockEnd: {
    style: de
  },
  m: {
    style: ue
  },
  mt: {
    style: ue
  },
  mr: {
    style: ue
  },
  mb: {
    style: ue
  },
  ml: {
    style: ue
  },
  mx: {
    style: ue
  },
  my: {
    style: ue
  },
  margin: {
    style: ue
  },
  marginTop: {
    style: ue
  },
  marginRight: {
    style: ue
  },
  marginBottom: {
    style: ue
  },
  marginLeft: {
    style: ue
  },
  marginX: {
    style: ue
  },
  marginY: {
    style: ue
  },
  marginInline: {
    style: ue
  },
  marginInlineStart: {
    style: ue
  },
  marginInlineEnd: {
    style: ue
  },
  marginBlock: {
    style: ue
  },
  marginBlockStart: {
    style: ue
  },
  marginBlockEnd: {
    style: ue
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
    style: cn
  },
  rowGap: {
    style: un
  },
  columnGap: {
    style: ln
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
    transform: Oe
  },
  maxWidth: {
    style: Zn
  },
  minWidth: {
    transform: Oe
  },
  height: {
    transform: Oe
  },
  maxHeight: {
    transform: Oe
  },
  minHeight: {
    transform: Oe
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
};
function Rc(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Pc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ko() {
  function e(n, r, o, i) {
    const a = {
      [n]: r,
      theme: o
    }, c = i[n];
    if (!c)
      return {
        [n]: r
      };
    const {
      cssProperty: l = n,
      themeKey: u,
      transform: d,
      style: h
    } = c;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const f = nn(o, u) || {};
    return h ? h(a) : De(a, r, (g) => {
      let p = qt(f, d, g);
      return g === p && typeof g == "string" && (p = qt(f, d, `${n}${g === "default" ? "" : X(g)}`, g)), l === !1 ? p : {
        [l]: p
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: i = {}
    } = n || {};
    if (!o)
      return null;
    const a = (r = i.unstable_sxConfig) != null ? r : Rt;
    function c(l) {
      let u = l;
      if (typeof l == "function")
        u = l(i);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const d = Fa(i.breakpoints), h = Object.keys(d);
      let f = d;
      return Object.keys(u).forEach((b) => {
        const g = Pc(u[b], i);
        if (g != null)
          if (typeof g == "object")
            if (a[b])
              f = gt(f, e(b, g, i, a));
            else {
              const p = De({
                theme: i
              }, g, (m) => ({
                [b]: m
              }));
              Rc(p, g) ? f[b] = t({
                sx: g,
                theme: i
              }) : f = gt(f, p);
            }
          else
            f = gt(f, e(b, g, i, a));
      }), La(h, f);
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return t;
}
const dn = Ko();
dn.filterProps = ["sx"];
function Ho(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const $c = ["breakpoints", "palette", "spacing", "shape"];
function Qn(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, a = ae(e, $c), c = Uo(n), l = Ga(o);
  let u = Ie({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: v({
      mode: "light"
    }, r),
    spacing: l,
    shape: v({}, za, i)
  }, a);
  return u.applyStyles = Ho, u = t.reduce((d, h) => Ie(d, h), u), u.unstable_sxConfig = v({}, Rt, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(h) {
    return dn({
      sx: h,
      theme: this
    });
  }, u;
}
const _c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qn,
  private_createBreakpoints: Uo,
  unstable_applyStyles: Ho
}, Symbol.toStringTag, { value: "Module" })), wc = /* @__PURE__ */ Ue(_c), Nc = ["sx"], kc = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Rt;
  return Object.keys(e).forEach((i) => {
    o[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function Go(e) {
  const {
    sx: t
  } = e, n = ae(e, Nc), {
    systemProps: r,
    otherProps: o
  } = kc(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...a) => {
    const c = t(...a);
    return Fe(c) ? v({}, r, c) : r;
  } : i = v({}, r, t), v({}, o, {
    sx: i
  });
}
const Mc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dn,
  extendSxProp: Go,
  unstable_createStyleFunctionSx: Ko,
  unstable_defaultSxConfig: Rt
}, Symbol.toStringTag, { value: "Module" })), Ic = /* @__PURE__ */ Ue(Mc);
var ct = Io;
Object.defineProperty(Tt, "__esModule", {
  value: !0
});
var Ac = Tt.default = Gc;
Tt.shouldForwardProp = zt;
Tt.systemDefaultTheme = void 0;
var Pe = ct(Ks()), Bn = ct(Hs()), Gr = Uc(Ma), Dc = Ia, jc = ct(Aa), Bc = ct(Da), zc = ct(wc), Fc = ct(Ic);
const Lc = ["ownerState"], Vc = ["variants"], Wc = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Xo(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Xo = function(r) {
    return r ? n : t;
  })(e);
}
function Uc(e, t) {
  if (e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = Xo(t);
  if (n && n.has(e))
    return n.get(e);
  var r = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
    }
  return r.default = e, n && n.set(e, r), r;
}
function qc(e) {
  return Object.keys(e).length === 0;
}
function Yc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function zt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Kc = Tt.systemDefaultTheme = (0, zc.default)(), Xr = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Mt({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return qc(t) ? e : t[n] || t;
}
function Hc(e) {
  return e ? (t, n) => n[e] : null;
}
function Ft(e, t) {
  let {
    ownerState: n
  } = t, r = (0, Bn.default)(t, Lc);
  const o = typeof e == "function" ? e((0, Pe.default)({
    ownerState: n
  }, r)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => Ft(i, (0, Pe.default)({
      ownerState: n
    }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: i = []
    } = o;
    let c = (0, Bn.default)(o, Vc);
    return i.forEach((l) => {
      let u = !0;
      typeof l.props == "function" ? u = l.props((0, Pe.default)({
        ownerState: n
      }, r, n)) : Object.keys(l.props).forEach((d) => {
        (n == null ? void 0 : n[d]) !== l.props[d] && r[d] !== l.props[d] && (u = !1);
      }), u && (Array.isArray(c) || (c = [c]), c.push(typeof l.style == "function" ? l.style((0, Pe.default)({
        ownerState: n
      }, r, n)) : l.style));
    }), c;
  }
  return o;
}
function Gc(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Kc,
    rootShouldForwardProp: r = zt,
    slotShouldForwardProp: o = zt
  } = e, i = (a) => (0, Fc.default)((0, Pe.default)({}, a, {
    theme: Mt((0, Pe.default)({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, c = {}) => {
    (0, Gr.internal_processStyles)(a, (y) => y.filter((P) => !(P != null && P.__mui_systemSx)));
    const {
      name: l,
      slot: u,
      skipVariantsResolver: d,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = Hc(Xr(u))
    } = c, b = (0, Bn.default)(c, Wc), g = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), p = h || !1;
    let m;
    process.env.NODE_ENV !== "production" && l && (m = `${l}-${Xr(u || "Root")}`);
    let T = zt;
    u === "Root" || u === "root" ? T = r : u ? T = o : Yc(a) && (T = void 0);
    const $ = (0, Gr.default)(a, (0, Pe.default)({
      shouldForwardProp: T,
      label: m
    }, b)), x = (y) => typeof y == "function" && y.__emotion_real !== y || (0, Dc.isPlainObject)(y) ? (P) => Ft(y, (0, Pe.default)({}, P, {
      theme: Mt({
        theme: P.theme,
        defaultTheme: n,
        themeId: t
      })
    })) : y, C = (y, ...P) => {
      let R = x(y);
      const V = P ? P.map(x) : [];
      l && f && V.push((B) => {
        const q = Mt((0, Pe.default)({}, B, {
          defaultTheme: n,
          themeId: t
        }));
        if (!q.components || !q.components[l] || !q.components[l].styleOverrides)
          return null;
        const J = q.components[l].styleOverrides, I = {};
        return Object.entries(J).forEach(([te, M]) => {
          I[te] = Ft(M, (0, Pe.default)({}, B, {
            theme: q
          }));
        }), f(B, I);
      }), l && !g && V.push((B) => {
        var q;
        const J = Mt((0, Pe.default)({}, B, {
          defaultTheme: n,
          themeId: t
        })), I = J == null || (q = J.components) == null || (q = q[l]) == null ? void 0 : q.variants;
        return Ft({
          variants: I
        }, (0, Pe.default)({}, B, {
          theme: J
        }));
      }), p || V.push(i);
      const ee = V.length - P.length;
      if (Array.isArray(y) && ee > 0) {
        const B = new Array(ee).fill("");
        R = [...y, ...B], R.raw = [...y.raw, ...B];
      }
      const U = $(R, ...V);
      if (process.env.NODE_ENV !== "production") {
        let B;
        l && (B = `${l}${(0, jc.default)(u || "")}`), B === void 0 && (B = `Styled(${(0, Bc.default)(a)})`), U.displayName = B;
      }
      return a.muiName && (U.muiName = a.muiName), U;
    };
    return $.withConfig && (C.withConfig = $.withConfig), C;
  };
}
function Xc(e, t) {
  return v({
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
var he = {};
const Jc = /* @__PURE__ */ Ue(Ki), Zc = /* @__PURE__ */ Ue($s);
var Jo = Io;
Object.defineProperty(he, "__esModule", {
  value: !0
});
var Le = he.alpha = ti;
he.blend = cl;
he.colorChannel = void 0;
var zn = he.darken = tr;
he.decomposeColor = we;
he.emphasize = ni;
var Jr = he.getContrastRatio = rl;
he.getLuminance = Yt;
he.hexToRgb = Zo;
he.hslToRgb = ei;
var Fn = he.lighten = nr;
he.private_safeAlpha = ol;
he.private_safeColorChannel = void 0;
he.private_safeDarken = il;
he.private_safeEmphasize = al;
he.private_safeLighten = sl;
he.recomposeColor = lt;
he.rgbToHex = nl;
var Zr = Jo(Jc), Qc = Jo(Zc);
function er(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), (0, Qc.default)(e, t, n);
}
function Zo(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function el(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function we(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return we(Zo(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, Zr.default)(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, Zr.default)(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const Qo = (e) => {
  const t = we(e);
  return t.values.slice(0, 3).map((n, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n).join(" ");
};
he.colorChannel = Qo;
const tl = (e, t) => {
  try {
    return Qo(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
he.private_safeColorChannel = tl;
function lt(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function nl(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = we(e);
  return `#${t.map((n, r) => el(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function ei(e) {
  e = we(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), a = (u, d = (u + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), lt({
    type: c,
    values: l
  });
}
function Yt(e) {
  e = we(e);
  let t = e.type === "hsl" || e.type === "hsla" ? we(ei(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function rl(e, t) {
  const n = Yt(e), r = Yt(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ti(e, t) {
  return e = we(e), t = er(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, lt(e);
}
function ol(e, t, n) {
  try {
    return ti(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function tr(e, t) {
  if (e = we(e), t = er(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return lt(e);
}
function il(e, t, n) {
  try {
    return tr(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function nr(e, t) {
  if (e = we(e), t = er(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return lt(e);
}
function sl(e, t, n) {
  try {
    return nr(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function ni(e, t = 0.15) {
  return Yt(e) > 0.5 ? tr(e, t) : nr(e, t);
}
function al(e, t, n) {
  try {
    return ni(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function cl(e, t, n, r = 1) {
  const o = (l, u) => Math.round((l ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r), i = we(e), a = we(t), c = [o(i.values[0], a.values[0]), o(i.values[1], a.values[1]), o(i.values[2], a.values[2])];
  return lt({
    type: "rgb",
    values: c
  });
}
const xt = {
  black: "#000",
  white: "#fff"
}, ll = {
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
}, Xe = {
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
}, Je = {
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
}, ft = {
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
}, Ze = {
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
}, Qe = {
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
}, et = {
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
}, ul = ["mode", "contrastThreshold", "tonalOffset"], Qr = {
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
    paper: xt.white,
    default: xt.white
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
}, Rn = {
  text: {
    primary: xt.white,
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
    active: xt.white,
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
function eo(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Fn(e.main, o) : t === "dark" && (e.dark = zn(e.main, i)));
}
function dl(e = "light") {
  return e === "dark" ? {
    main: Ze[200],
    light: Ze[50],
    dark: Ze[400]
  } : {
    main: Ze[700],
    light: Ze[400],
    dark: Ze[800]
  };
}
function fl(e = "light") {
  return e === "dark" ? {
    main: Xe[200],
    light: Xe[50],
    dark: Xe[400]
  } : {
    main: Xe[500],
    light: Xe[300],
    dark: Xe[700]
  };
}
function pl(e = "light") {
  return e === "dark" ? {
    main: Je[500],
    light: Je[300],
    dark: Je[700]
  } : {
    main: Je[700],
    light: Je[400],
    dark: Je[800]
  };
}
function hl(e = "light") {
  return e === "dark" ? {
    main: Qe[400],
    light: Qe[300],
    dark: Qe[700]
  } : {
    main: Qe[700],
    light: Qe[500],
    dark: Qe[900]
  };
}
function ml(e = "light") {
  return e === "dark" ? {
    main: et[400],
    light: et[300],
    dark: et[700]
  } : {
    main: et[800],
    light: et[500],
    dark: et[900]
  };
}
function gl(e = "light") {
  return e === "dark" ? {
    main: ft[400],
    light: ft[300],
    dark: ft[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ft[500],
    dark: ft[900]
  };
}
function yl(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = ae(e, ul), i = e.primary || dl(t), a = e.secondary || fl(t), c = e.error || pl(t), l = e.info || hl(t), u = e.success || ml(t), d = e.warning || gl(t);
  function h(p) {
    const m = Jr(p, Rn.text.primary) >= n ? Rn.text.primary : Qr.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = Jr(p, m);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${m} on ${p}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const f = ({
    color: p,
    name: m,
    mainShade: T = 500,
    lightShade: $ = 300,
    darkShade: x = 700
  }) => {
    if (p = v({}, p), !p.main && p[T] && (p.main = p[T]), !p.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : yt(11, m ? ` (${m})` : "", T));
    if (typeof p.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(p.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : yt(12, m ? ` (${m})` : "", JSON.stringify(p.main)));
    return eo(p, "light", $, r), eo(p, "dark", x, r), p.contrastText || (p.contrastText = h(p.main)), p;
  }, b = {
    dark: Rn,
    light: Qr
  };
  return process.env.NODE_ENV !== "production" && (b[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ie(v({
    // A collection of common colors.
    common: v({}, xt),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: f({
      color: i,
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
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: f({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: ll,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, b[t]), o);
}
const bl = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function vl(e) {
  return Math.round(e * 1e5) / 1e5;
}
const to = {
  textTransform: "uppercase"
}, no = '"Roboto", "Helvetica", "Arial", sans-serif';
function xl(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = no,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: h
  } = n, f = ae(n, bl);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = o / 14, g = h || ((T) => `${T / u * b}rem`), p = (T, $, x, C, y) => v({
    fontFamily: r,
    fontWeight: T,
    fontSize: g($),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: x
  }, r === no ? {
    letterSpacing: `${vl(C / $)}em`
  } : {}, y, d), m = {
    h1: p(i, 96, 1.167, -1.5),
    h2: p(i, 60, 1.2, -0.5),
    h3: p(a, 48, 1.167, 0),
    h4: p(a, 34, 1.235, 0.25),
    h5: p(a, 24, 1.334, 0),
    h6: p(c, 20, 1.6, 0.15),
    subtitle1: p(a, 16, 1.75, 0.15),
    subtitle2: p(c, 14, 1.57, 0.1),
    body1: p(a, 16, 1.5, 0.15),
    body2: p(a, 14, 1.43, 0.15),
    button: p(c, 14, 1.75, 0.4, to),
    caption: p(a, 12, 1.66, 0.4),
    overline: p(a, 12, 2.66, 1, to),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ie(v({
    htmlFontSize: u,
    pxToRem: g,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: c,
    fontWeightBold: l
  }, m), f, {
    clone: !1
    // No need to clone deep
  });
}
const El = 0.2, Tl = 0.14, Cl = 0.12;
function le(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${El})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Tl})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Cl})`].join(",");
}
const Sl = ["none", le(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), le(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), le(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), le(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), le(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), le(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), le(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), le(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), le(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), le(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), le(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), le(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), le(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), le(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), le(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), le(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), le(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), le(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), le(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), le(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), le(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), le(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), le(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), le(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ol = ["duration", "easing", "delay"], Rl = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Pl = {
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
function ro(e) {
  return `${Math.round(e)}ms`;
}
function $l(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function _l(e) {
  const t = v({}, Rl, e.easing), n = v({}, Pl, e.duration);
  return v({
    getAutoHeightDuration: $l,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = n.standard,
        easing: c = t.easeInOut,
        delay: l = 0
      } = i, u = ae(i, Ol);
      if (process.env.NODE_ENV !== "production") {
        const d = (f) => typeof f == "string", h = (f) => !isNaN(parseFloat(f));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(c) || console.error('MUI: Argument "easing" must be a string.'), !h(l) && !d(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : ro(a)} ${c} ${typeof l == "string" ? l : ro(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const wl = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Nl = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function kl(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = ae(e, Nl);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : yt(18));
  const c = yl(r), l = Qn(e);
  let u = Ie(l, {
    mixins: Xc(l.breakpoints, n),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Sl.slice(),
    typography: xl(c, i),
    transitions: _l(o),
    zIndex: v({}, wl)
  });
  if (u = Ie(u, a), u = t.reduce((d, h) => Ie(d, h), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (f, b) => {
      let g;
      for (g in f) {
        const p = f[g];
        if (d.indexOf(g) !== -1 && Object.keys(p).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = xe("", g);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(f, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: p
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          f[g] = {};
        }
      }
    };
    Object.keys(u.components).forEach((f) => {
      const b = u.components[f].styleOverrides;
      b && f.indexOf("Mui") === 0 && h(b, f);
    });
  }
  return u.unstable_sxConfig = v({}, Rt, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(h) {
    return dn({
      sx: h,
      theme: this
    });
  }, u;
}
const rr = kl(), or = "$$material";
function Ml(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ir = (e) => Ml(e) && e !== "classes", ce = Ac({
  themeId: or,
  defaultTheme: rr,
  rootShouldForwardProp: ir
});
function Il(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Yn(t.components[n].defaultProps, r);
}
function Al(e) {
  return Object.keys(e).length === 0;
}
function Dl(e = null) {
  const t = E.useContext(yo);
  return !t || Al(t) ? e : t;
}
const jl = Qn();
function ri(e = jl) {
  return Dl(e);
}
function Bl({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = ri(n);
  return r && (o = o[r] || o), Il({
    theme: o,
    name: t,
    props: e
  });
}
function Te({
  props: e,
  name: t
}) {
  return Bl({
    props: e,
    name: t,
    defaultTheme: rr,
    themeId: or
  });
}
function Ln(e, t) {
  return Ln = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Ln(e, t);
}
function oi(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ln(e, t);
}
const oo = {
  disabled: !1
};
var zl = process.env.NODE_ENV !== "production" ? s.oneOfType([s.number, s.shape({
  enter: s.number,
  exit: s.number,
  appear: s.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && s.oneOfType([s.string, s.shape({
  enter: s.string,
  exit: s.string,
  active: s.string
}), s.shape({
  enter: s.string,
  enterDone: s.string,
  enterActive: s.string,
  exit: s.string,
  exitDone: s.string,
  exitActive: s.string
})]);
const Kt = ge.createContext(null);
var Fl = function(t) {
  return t.scrollTop;
}, pt = "unmounted", Ye = "exited", Ke = "entering", nt = "entered", Vn = "exiting", Be = /* @__PURE__ */ function(e) {
  oi(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = o, c = a && !a.isMounting ? r.enter : r.appear, l;
    return i.appearStatus = null, r.in ? c ? (l = Ye, i.appearStatus = Ke) : l = nt : r.unmountOnExit || r.mountOnEnter ? l = pt : l = Ye, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var a = o.in;
    return a && i.status === pt ? {
      status: Ye
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Ke && a !== nt && (i = Ke) : (a === Ke || a === nt) && (i = Vn);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, a, c;
    return i = a = c = o, o != null && typeof o != "number" && (i = o.exit, a = o.enter, c = o.appear !== void 0 ? o.appear : a), {
      exit: i,
      enter: a,
      appear: c
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === Ke) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : wt.findDOMNode(this);
          a && Fl(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Ye && this.setState({
        status: pt
      });
  }, n.performEnter = function(o) {
    var i = this, a = this.props.enter, c = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [c] : [wt.findDOMNode(this), c], u = l[0], d = l[1], h = this.getTimeouts(), f = c ? h.appear : h.enter;
    if (!o && !a || oo.disabled) {
      this.safeSetState({
        status: nt
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Ke
    }, function() {
      i.props.onEntering(u, d), i.onTransitionEnd(f, function() {
        i.safeSetState({
          status: nt
        }, function() {
          i.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : wt.findDOMNode(this);
    if (!i || oo.disabled) {
      this.safeSetState({
        status: Ye
      }, function() {
        o.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: Vn
    }, function() {
      o.props.onExiting(c), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: Ye
        }, function() {
          o.props.onExited(c);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, a = !0;
    return this.nextCallback = function(c) {
      a && (a = !1, i.nextCallback = null, o(c));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : wt.findDOMNode(this), c = o == null && !this.props.addEndListener;
    if (!a || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = l[0], d = l[1];
      this.props.addEndListener(u, d);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === pt)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var c = ae(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ge.createElement(Kt.Provider, {
        value: null
      }, typeof a == "function" ? a(o, c) : ge.cloneElement(ge.Children.only(a), c))
    );
  }, t;
}(ge.Component);
Be.contextType = Kt;
Be.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: s.shape({
    current: typeof Element > "u" ? s.any : function(e, t, n, r, o, i) {
      var a = e[t];
      return s.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, r, o, i);
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
  children: s.oneOfType([s.func.isRequired, s.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: s.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: s.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: s.bool,
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
  appear: s.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: s.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: s.bool,
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
    var n = zl;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      o[i - 1] = arguments[i];
    return n.apply(void 0, [t].concat(o));
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
  addEndListener: s.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: s.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: s.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: s.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: s.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: s.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: s.func
} : {};
function tt() {
}
Be.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: tt,
  onEntering: tt,
  onEntered: tt,
  onExit: tt,
  onExiting: tt,
  onExited: tt
};
Be.UNMOUNTED = pt;
Be.EXITED = Ye;
Be.ENTERING = Ke;
Be.ENTERED = nt;
Be.EXITING = Vn;
function Ll(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sr(e, t) {
  var n = function(i) {
    return t && ht(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Ri.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function Vl(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var l in t) {
    if (r[l])
      for (a = 0; a < r[l].length; a++) {
        var u = r[l][a];
        c[r[l][a]] = n(u);
      }
    c[l] = n(l);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = n(o[a]);
  return c;
}
function He(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Wl(e, t) {
  return sr(e.children, function(n) {
    return At(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: He(n, "appear", e),
      enter: He(n, "enter", e),
      exit: He(n, "exit", e)
    });
  });
}
function Ul(e, t, n) {
  var r = sr(e.children), o = Vl(t, r);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (ht(a)) {
      var c = i in t, l = i in r, u = t[i], d = ht(u) && !u.props.in;
      l && (!c || d) ? o[i] = At(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: He(a, "exit", e),
        enter: He(a, "enter", e)
      }) : !l && c && !d ? o[i] = At(a, {
        in: !1
      }) : l && c && ht(u) && (o[i] = At(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: He(a, "exit", e),
        enter: He(a, "enter", e)
      }));
    }
  }), o;
}
var ql = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Yl = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ar = /* @__PURE__ */ function(e) {
  oi(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = i.handleExited.bind(Ll(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
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
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, c = i.handleExited, l = i.firstRender;
    return {
      children: l ? Wl(o, c) : Ul(o, a, c),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var a = sr(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var l = v({}, c.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = ae(o, ["component", "childFactory"]), l = this.state.contextValue, u = ql(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ ge.createElement(Kt.Provider, {
      value: l
    }, u) : /* @__PURE__ */ ge.createElement(Kt.Provider, {
      value: l
    }, /* @__PURE__ */ ge.createElement(i, c, u));
  }, t;
}(ge.Component);
ar.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: s.any,
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
  children: s.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: s.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: s.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: s.bool,
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
  childFactory: s.func
} : {};
ar.defaultProps = Yl;
function cr() {
  const e = ri(rr);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e[or] || e;
}
const Kl = (e) => e.scrollTop;
function io(e, t) {
  var n, r;
  const {
    timeout: o,
    easing: i,
    style: a = {}
  } = e;
  return {
    duration: (n = a.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: a.transitionDelay
  };
}
const Hl = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Gl = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, lr = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = cr(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: a = !0,
    children: c,
    easing: l,
    in: u,
    onEnter: d,
    onEntered: h,
    onEntering: f,
    onExit: b,
    onExited: g,
    onExiting: p,
    style: m,
    timeout: T = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: $ = Be
  } = t, x = ae(t, Hl), C = E.useRef(null), y = We(C, c.ref, n), P = (I) => (te) => {
    if (I) {
      const M = C.current;
      te === void 0 ? I(M) : I(M, te);
    }
  }, R = P(f), V = P((I, te) => {
    Kl(I);
    const M = io({
      style: m,
      timeout: T,
      easing: l
    }, {
      mode: "enter"
    });
    I.style.webkitTransition = r.transitions.create("opacity", M), I.style.transition = r.transitions.create("opacity", M), d && d(I, te);
  }), ee = P(h), U = P(p), B = P((I) => {
    const te = io({
      style: m,
      timeout: T,
      easing: l
    }, {
      mode: "exit"
    });
    I.style.webkitTransition = r.transitions.create("opacity", te), I.style.transition = r.transitions.create("opacity", te), b && b(I);
  }), q = P(g);
  return /* @__PURE__ */ N($, v({
    appear: a,
    in: u,
    nodeRef: C,
    onEnter: V,
    onEntered: ee,
    onEntering: R,
    onExit: B,
    onExited: q,
    onExiting: U,
    addEndListener: (I) => {
      i && i(C.current, I);
    },
    timeout: T
  }, x, {
    children: (I, te) => /* @__PURE__ */ E.cloneElement(c, v({
      style: v({
        opacity: 0,
        visibility: I === "exited" && !u ? "hidden" : void 0
      }, Gl[I], m, c.props.style),
      ref: y
    }, te))
  }));
});
process.env.NODE_ENV !== "production" && (lr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: s.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: s.bool,
  /**
   * A single child content element.
   */
  children: Xt.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: s.oneOfType([s.shape({
    enter: s.string,
    exit: s.string
  }), s.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: s.bool,
  /**
   * @ignore
   */
  onEnter: s.func,
  /**
   * @ignore
   */
  onEntered: s.func,
  /**
   * @ignore
   */
  onEntering: s.func,
  /**
   * @ignore
   */
  onExit: s.func,
  /**
   * @ignore
   */
  onExited: s.func,
  /**
   * @ignore
   */
  onExiting: s.func,
  /**
   * @ignore
   */
  style: s.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: s.oneOfType([s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })])
});
function Xl(e) {
  return xe("MuiBackdrop", e);
}
Ee("MuiBackdrop", ["root", "invisible"]);
const Jl = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Zl = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Se({
    root: ["root", n && "invisible"]
  }, Xl, t);
}, Ql = ce("div", {
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
}) => v({
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
})), ur = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r, o, i;
  const a = Te({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: c,
    className: l,
    component: u = "div",
    components: d = {},
    componentsProps: h = {},
    invisible: f = !1,
    open: b,
    slotProps: g = {},
    slots: p = {},
    TransitionComponent: m = lr,
    transitionDuration: T
  } = a, $ = ae(a, Jl), x = v({}, a, {
    component: u,
    invisible: f
  }), C = Zl(x), y = (r = g.root) != null ? r : h.root;
  return /* @__PURE__ */ N(m, v({
    in: b,
    timeout: T
  }, $, {
    children: /* @__PURE__ */ N(Ql, v({
      "aria-hidden": !0
    }, y, {
      as: (o = (i = p.root) != null ? i : d.Root) != null ? o : u,
      className: se(C.root, l, y == null ? void 0 : y.className),
      ownerState: v({}, x, y == null ? void 0 : y.ownerState),
      classes: C,
      ref: n,
      children: c
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ur.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: s.shape({
    Root: s.elementType
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
  componentsProps: s.shape({
    root: s.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: s.bool,
  /**
   * If `true`, the component is shown.
   */
  open: s.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: s.shape({
    root: s.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: s.shape({
    root: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: s.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: s.oneOfType([s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })])
});
function eu(e) {
  return xe("MuiModal", e);
}
Ee("MuiModal", ["root", "hidden", "backdrop"]);
const tu = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], nu = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Se({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, eu, r);
}, ru = ce("div", {
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
}) => v({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), ou = ce(ur, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), ii = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r, o, i, a, c, l;
  const u = Te({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = ou,
    BackdropProps: h,
    className: f,
    closeAfterTransition: b = !1,
    children: g,
    container: p,
    component: m,
    components: T = {},
    componentsProps: $ = {},
    disableAutoFocus: x = !1,
    disableEnforceFocus: C = !1,
    disableEscapeKeyDown: y = !1,
    disablePortal: P = !1,
    disableRestoreFocus: R = !1,
    disableScrollLock: V = !1,
    hideBackdrop: ee = !1,
    keepMounted: U = !1,
    onBackdropClick: B,
    open: q,
    slotProps: J,
    slots: I
    // eslint-disable-next-line react/prop-types
  } = u, te = ae(u, tu), M = v({}, u, {
    closeAfterTransition: b,
    disableAutoFocus: x,
    disableEnforceFocus: C,
    disableEscapeKeyDown: y,
    disablePortal: P,
    disableRestoreFocus: R,
    disableScrollLock: V,
    hideBackdrop: ee,
    keepMounted: U
  }), {
    getRootProps: H,
    getBackdropProps: G,
    getTransitionProps: ke,
    portalRef: S,
    isTopModal: _,
    exited: L,
    hasTransition: z
  } = zs(v({}, M, {
    rootRef: n
  })), k = v({}, M, {
    exited: L
  }), D = nu(k), A = {};
  if (g.props.tabIndex === void 0 && (A.tabIndex = "-1"), z) {
    const {
      onEnter: fe,
      onExited: w
    } = ke();
    A.onEnter = fe, A.onExited = w;
  }
  const F = (r = (o = I == null ? void 0 : I.root) != null ? o : T.Root) != null ? r : ru, W = (i = (a = I == null ? void 0 : I.backdrop) != null ? a : T.Backdrop) != null ? i : d, j = (c = J == null ? void 0 : J.root) != null ? c : $.root, Y = (l = J == null ? void 0 : J.backdrop) != null ? l : $.backdrop, me = Br({
    elementType: F,
    externalSlotProps: j,
    externalForwardedProps: te,
    getSlotProps: H,
    additionalProps: {
      ref: n,
      as: m
    },
    ownerState: k,
    className: se(f, j == null ? void 0 : j.className, D == null ? void 0 : D.root, !k.open && k.exited && (D == null ? void 0 : D.hidden))
  }), O = Br({
    elementType: W,
    externalSlotProps: Y,
    additionalProps: h,
    getSlotProps: (fe) => G(v({}, fe, {
      onClick: (w) => {
        B && B(w), fe != null && fe.onClick && fe.onClick(w);
      }
    })),
    className: se(Y == null ? void 0 : Y.className, h == null ? void 0 : h.className, D == null ? void 0 : D.backdrop),
    ownerState: k
  });
  return !U && !q && (!z || L) ? null : /* @__PURE__ */ N(Wt, {
    ref: S,
    container: p,
    disablePortal: P,
    children: /* @__PURE__ */ je(F, v({}, me, {
      children: [!ee && d ? /* @__PURE__ */ N(W, v({}, O)) : null, /* @__PURE__ */ N(Vt, {
        disableEnforceFocus: C,
        disableAutoFocus: x,
        disableRestoreFocus: R,
        isEnabled: _,
        open: q,
        children: /* @__PURE__ */ E.cloneElement(g, A)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (ii.propTypes = {
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
  BackdropComponent: s.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: s.object,
  /**
   * A single child content element.
   */
  children: Xt.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: s.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: s.shape({
    Backdrop: s.elementType,
    Root: s.elementType
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
  componentsProps: s.shape({
    backdrop: s.oneOfType([s.func, s.object]),
    root: s.oneOfType([s.func, s.object])
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
  container: s.oneOfType([Ro, s.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: s.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: s.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: s.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: s.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: s.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: s.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: s.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: s.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: s.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: s.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: s.func,
  /**
   * If `true`, the component is shown.
   */
  open: s.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: s.shape({
    backdrop: s.oneOfType([s.func, s.object]),
    root: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: s.shape({
    backdrop: s.elementType,
    root: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const so = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
};
function iu(e) {
  return xe("MuiPaper", e);
}
Ee("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const su = ["className", "component", "elevation", "square", "variant"], au = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Se(i, iu, o);
}, cu = ce("div", {
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
  return v({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && v({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Le("#fff", so(t.elevation))}, ${Le("#fff", so(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), fn = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Te({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: a = 1,
    square: c = !1,
    variant: l = "elevation"
  } = r, u = ae(r, su), d = v({}, r, {
    component: i,
    elevation: a,
    square: c,
    variant: l
  }), h = au(d);
  return process.env.NODE_ENV !== "production" && cr().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ N(cu, v({
    as: i,
    ownerState: d,
    className: se(h.root, o),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (fn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Et(Cs, (e) => {
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
  square: s.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: s.oneOfType([s.oneOf(["elevation", "outlined"]), s.string])
});
function lu(e) {
  return xe("MuiDialog", e);
}
const Pn = Ee("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), dr = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (dr.displayName = "DialogContext");
const uu = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], du = ce(ur, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), fu = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, a = {
    root: ["root"],
    container: ["container", `scroll${X(n)}`],
    paper: ["paper", `paperScroll${X(n)}`, `paperWidth${X(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return Se(a, lu, t);
}, pu = ce(ii, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), hu = ce("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${X(n.scroll)}`]];
  }
})(({
  ownerState: e
}) => v({
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
})), mu = ce(fn, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${X(n.scroll)}`], t[`paperWidth${X(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(({
  theme: e,
  ownerState: t
}) => v({
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
  [`&.${Pn.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.maxWidth && t.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
  [`&.${Pn.paperScrollBody}`]: {
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
  [`&.${Pn.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), si = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Te({
    props: t,
    name: "MuiDialog"
  }), o = cr(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": a,
    "aria-labelledby": c,
    BackdropComponent: l,
    BackdropProps: u,
    children: d,
    className: h,
    disableEscapeKeyDown: f = !1,
    fullScreen: b = !1,
    fullWidth: g = !1,
    maxWidth: p = "sm",
    onBackdropClick: m,
    onClick: T,
    onClose: $,
    open: x,
    PaperComponent: C = fn,
    PaperProps: y = {},
    scroll: P = "paper",
    TransitionComponent: R = lr,
    transitionDuration: V = i,
    TransitionProps: ee
  } = r, U = ae(r, uu), B = v({}, r, {
    disableEscapeKeyDown: f,
    fullScreen: b,
    fullWidth: g,
    maxWidth: p,
    scroll: P
  }), q = fu(B), J = E.useRef(), I = (G) => {
    J.current = G.target === G.currentTarget;
  }, te = (G) => {
    T && T(G), J.current && (J.current = null, m && m(G), $ && $(G, "backdropClick"));
  }, M = Yi(c), H = E.useMemo(() => ({
    titleId: M
  }), [M]);
  return /* @__PURE__ */ N(pu, v({
    className: se(q.root, h),
    closeAfterTransition: !0,
    components: {
      Backdrop: du
    },
    componentsProps: {
      backdrop: v({
        transitionDuration: V,
        as: l
      }, u)
    },
    disableEscapeKeyDown: f,
    onClose: $,
    open: x,
    ref: n,
    onClick: te,
    ownerState: B
  }, U, {
    children: /* @__PURE__ */ N(R, v({
      appear: !0,
      in: x,
      timeout: V,
      role: "presentation"
    }, ee, {
      children: /* @__PURE__ */ N(hu, {
        className: se(q.container),
        onMouseDown: I,
        ownerState: B,
        children: /* @__PURE__ */ N(mu, v({
          as: C,
          elevation: 24,
          role: "dialog",
          "aria-describedby": a,
          "aria-labelledby": M
        }, y, {
          className: se(q.paper, y.className),
          ownerState: B,
          children: /* @__PURE__ */ N(dr.Provider, {
            value: H,
            children: d
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (si.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": s.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": s.string,
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
  BackdropComponent: s.elementType,
  /**
   * @ignore
   */
  BackdropProps: s.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: s.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: s.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: s.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: s.oneOfType([s.oneOf(["xs", "sm", "md", "lg", "xl", !1]), s.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: s.func,
  /**
   * @ignore
   */
  onClick: s.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: s.func,
  /**
   * If `true`, the component is shown.
   */
  open: s.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: s.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: s.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: s.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: s.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: s.oneOfType([s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: s.object
});
function gu(e) {
  return xe("MuiDialogContent", e);
}
Ee("MuiDialogContent", ["root", "dividers"]);
function yu(e) {
  return xe("MuiDialogTitle", e);
}
const bu = Ee("MuiDialogTitle", ["root"]), vu = ["className", "dividers"], xu = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return Se({
    root: ["root", n && "dividers"]
  }, gu, t);
}, Eu = ce("div", {
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
}) => v({
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
  [`.${bu.root} + &`]: {
    paddingTop: 0
  }
})), ai = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Te({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1
  } = r, a = ae(r, vu), c = v({}, r, {
    dividers: i
  }), l = xu(c);
  return /* @__PURE__ */ N(Eu, v({
    className: se(l.root, o),
    ownerState: c,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (ai.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: s.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
function Tu(e) {
  return xe("MuiDialogActions", e);
}
Ee("MuiDialogActions", ["root", "spacing"]);
const Cu = ["className", "disableSpacing"], Su = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return Se({
    root: ["root", !n && "spacing"]
  }, Tu, t);
}, Ou = ce("div", {
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
}) => v({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), ci = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Te({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1
  } = r, a = ae(r, Cu), c = v({}, r, {
    disableSpacing: i
  }), l = Su(c);
  return /* @__PURE__ */ N(Ou, v({
    className: se(l.root, o),
    ownerState: c,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (ci.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: s.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
function Ru(e) {
  return xe("MuiTypography", e);
}
Ee("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Pu = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], $u = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, e.align !== "inherit" && `align${X(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return Se(c, Ru, a);
}, _u = ce("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${X(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => v({
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
})), ao = {
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
}, wu = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Nu = (e) => wu[e] || e, fr = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Te({
    props: t,
    name: "MuiTypography"
  }), o = Nu(r.color), i = Go(v({}, r, {
    color: o
  })), {
    align: a = "inherit",
    className: c,
    component: l,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: h = !1,
    variant: f = "body1",
    variantMapping: b = ao
  } = i, g = ae(i, Pu), p = v({}, i, {
    align: a,
    color: o,
    className: c,
    component: l,
    gutterBottom: u,
    noWrap: d,
    paragraph: h,
    variant: f,
    variantMapping: b
  }), m = l || (h ? "p" : b[f] || ao[f]) || "span", T = $u(p);
  return /* @__PURE__ */ N(_u, v({
    as: m,
    ref: n,
    ownerState: p,
    className: se(T.root, c)
  }, g));
});
process.env.NODE_ENV !== "production" && (fr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: s.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: s.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: s.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: s.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: s.oneOfType([s.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), s.string]),
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
  variantMapping: s.object
});
function ku(e) {
  return xe("MuiDialogContentText", e);
}
Ee("MuiDialogContentText", ["root"]);
const Mu = ["children", "className"], Iu = (e) => {
  const {
    classes: t
  } = e, r = Se({
    root: ["root"]
  }, ku, t);
  return v({}, t, r);
}, Au = ce(fr, {
  shouldForwardProp: (e) => ir(e) || e === "classes",
  name: "MuiDialogContentText",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), li = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Te({
    props: t,
    name: "MuiDialogContentText"
  }), {
    className: o
  } = r, i = ae(r, Mu), a = Iu(i);
  return /* @__PURE__ */ N(Au, v({
    component: "p",
    variant: "body1",
    color: "text.secondary",
    ref: n,
    ownerState: i,
    className: se(a.root, o)
  }, r, {
    classes: a
  }));
});
process.env.NODE_ENV !== "production" && (li.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const Du = ["className", "id"], ju = (e) => {
  const {
    classes: t
  } = e;
  return Se({
    root: ["root"]
  }, yu, t);
}, Bu = ce(fr, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), ui = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Te({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i
  } = r, a = ae(r, Du), c = r, l = ju(c), {
    titleId: u = i
  } = E.useContext(dr);
  return /* @__PURE__ */ N(Bu, v({
    component: "h2",
    className: se(l.root, o),
    ownerState: c,
    ref: n,
    variant: "h6",
    id: i ?? u
  }, a));
});
process.env.NODE_ENV !== "production" && (ui.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * @ignore
   */
  id: s.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
function di(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: l,
    timeout: u
  } = e, [d, h] = E.useState(!1), f = se(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), b = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, g = se(n.child, d && n.childLeaving, r && n.childPulsate);
  return !c && !d && h(!0), E.useEffect(() => {
    if (!c && l != null) {
      const p = setTimeout(l, u);
      return () => {
        clearTimeout(p);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ N("span", {
    className: f,
    style: b,
    children: /* @__PURE__ */ N("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (di.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object.isRequired,
  className: s.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: s.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: s.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: s.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: s.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: s.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: s.number,
  /**
   * exit delay
   */
  timeout: s.number.isRequired
});
const $e = Ee("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), zu = ["center", "classes", "className"];
let pn = (e) => e, co, lo, uo, fo;
const Wn = 550, Fu = 80, Lu = Gt(co || (co = pn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Vu = Gt(lo || (lo = pn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Wu = Gt(uo || (uo = pn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Uu = ce("span", {
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
}), qu = ce(di, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(fo || (fo = pn`
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
`), $e.rippleVisible, Lu, Wn, ({
  theme: e
}) => e.transitions.easing.easeInOut, $e.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, $e.child, $e.childLeaving, Vu, Wn, ({
  theme: e
}) => e.transitions.easing.easeInOut, $e.childPulsate, Wu, ({
  theme: e
}) => e.transitions.easing.easeInOut), fi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Te({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a
  } = r, c = ae(r, zu), [l, u] = E.useState([]), d = E.useRef(0), h = E.useRef(null);
  E.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [l]);
  const f = E.useRef(!1), b = us(), g = E.useRef(null), p = E.useRef(null), m = E.useCallback((C) => {
    const {
      pulsate: y,
      rippleX: P,
      rippleY: R,
      rippleSize: V,
      cb: ee
    } = C;
    u((U) => [...U, /* @__PURE__ */ N(qu, {
      classes: {
        ripple: se(i.ripple, $e.ripple),
        rippleVisible: se(i.rippleVisible, $e.rippleVisible),
        ripplePulsate: se(i.ripplePulsate, $e.ripplePulsate),
        child: se(i.child, $e.child),
        childLeaving: se(i.childLeaving, $e.childLeaving),
        childPulsate: se(i.childPulsate, $e.childPulsate)
      },
      timeout: Wn,
      pulsate: y,
      rippleX: P,
      rippleY: R,
      rippleSize: V
    }, d.current)]), d.current += 1, h.current = ee;
  }, [i]), T = E.useCallback((C = {}, y = {}, P = () => {
  }) => {
    const {
      pulsate: R = !1,
      center: V = o || y.pulsate,
      fakeElement: ee = !1
      // For test purposes
    } = y;
    if ((C == null ? void 0 : C.type) === "mousedown" && f.current) {
      f.current = !1;
      return;
    }
    (C == null ? void 0 : C.type) === "touchstart" && (f.current = !0);
    const U = ee ? null : p.current, B = U ? U.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let q, J, I;
    if (V || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      q = Math.round(B.width / 2), J = Math.round(B.height / 2);
    else {
      const {
        clientX: te,
        clientY: M
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      q = Math.round(te - B.left), J = Math.round(M - B.top);
    }
    if (V)
      I = Math.sqrt((2 * B.width ** 2 + B.height ** 2) / 3), I % 2 === 0 && (I += 1);
    else {
      const te = Math.max(Math.abs((U ? U.clientWidth : 0) - q), q) * 2 + 2, M = Math.max(Math.abs((U ? U.clientHeight : 0) - J), J) * 2 + 2;
      I = Math.sqrt(te ** 2 + M ** 2);
    }
    C != null && C.touches ? g.current === null && (g.current = () => {
      m({
        pulsate: R,
        rippleX: q,
        rippleY: J,
        rippleSize: I,
        cb: P
      });
    }, b.start(Fu, () => {
      g.current && (g.current(), g.current = null);
    })) : m({
      pulsate: R,
      rippleX: q,
      rippleY: J,
      rippleSize: I,
      cb: P
    });
  }, [o, m, b]), $ = E.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), x = E.useCallback((C, y) => {
    if (b.clear(), (C == null ? void 0 : C.type) === "touchend" && g.current) {
      g.current(), g.current = null, b.start(0, () => {
        x(C, y);
      });
      return;
    }
    g.current = null, u((P) => P.length > 0 ? P.slice(1) : P), h.current = y;
  }, [b]);
  return E.useImperativeHandle(n, () => ({
    pulsate: $,
    start: T,
    stop: x
  }), [$, T, x]), /* @__PURE__ */ N(Uu, v({
    className: se($e.root, i.root, a),
    ref: p
  }, c, {
    children: /* @__PURE__ */ N(ar, {
      component: null,
      exit: !0,
      children: l
    })
  }));
});
process.env.NODE_ENV !== "production" && (fi.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: s.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string
});
function Yu(e) {
  return xe("MuiButtonBase", e);
}
const Ku = Ee("MuiButtonBase", ["root", "disabled", "focusVisible"]), Hu = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Gu = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, a = Se({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Yu, o);
  return n && r && (a.root += ` ${r}`), a;
}, Xu = ce("button", {
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
  [`&.${Ku.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), pr = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Te({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: l = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: h = !1,
    focusRipple: f = !1,
    LinkComponent: b = "a",
    onBlur: g,
    onClick: p,
    onContextMenu: m,
    onDragLeave: T,
    onFocus: $,
    onFocusVisible: x,
    onKeyDown: C,
    onKeyUp: y,
    onMouseDown: P,
    onMouseLeave: R,
    onMouseUp: V,
    onTouchEnd: ee,
    onTouchMove: U,
    onTouchStart: B,
    tabIndex: q = 0,
    TouchRippleProps: J,
    touchRippleRef: I,
    type: te
  } = r, M = ae(r, Hu), H = E.useRef(null), G = E.useRef(null), ke = We(G, I), {
    isFocusVisibleRef: S,
    onFocus: _,
    onBlur: L,
    ref: z
  } = bs(), [k, D] = E.useState(!1);
  u && k && D(!1), E.useImperativeHandle(o, () => ({
    focusVisible: () => {
      D(!0), H.current.focus();
    }
  }), []);
  const [A, F] = E.useState(!1);
  E.useEffect(() => {
    F(!0);
  }, []);
  const W = A && !d && !u;
  E.useEffect(() => {
    k && f && !d && A && G.current.pulsate();
  }, [d, f, k, A]);
  function j(K, gr, Oi = h) {
    return rt((yr) => (gr && gr(yr), !Oi && G.current && G.current[K](yr), !0));
  }
  const Y = j("start", P), me = j("stop", m), O = j("stop", T), fe = j("stop", V), w = j("stop", (K) => {
    k && K.preventDefault(), R && R(K);
  }), ze = j("start", B), Ge = j("stop", ee), $t = j("stop", U), vi = j("stop", (K) => {
    L(K), S.current === !1 && D(!1), g && g(K);
  }, !1), xi = rt((K) => {
    H.current || (H.current = K.currentTarget), _(K), S.current === !0 && (D(!0), x && x(K)), $ && $(K);
  }), hn = () => {
    const K = H.current;
    return l && l !== "button" && !(K.tagName === "A" && K.href);
  }, mn = E.useRef(!1), Ei = rt((K) => {
    f && !mn.current && k && G.current && K.key === " " && (mn.current = !0, G.current.stop(K, () => {
      G.current.start(K);
    })), K.target === K.currentTarget && hn() && K.key === " " && K.preventDefault(), C && C(K), K.target === K.currentTarget && hn() && K.key === "Enter" && !u && (K.preventDefault(), p && p(K));
  }), Ti = rt((K) => {
    f && K.key === " " && G.current && k && !K.defaultPrevented && (mn.current = !1, G.current.stop(K, () => {
      G.current.pulsate(K);
    })), y && y(K), p && K.target === K.currentTarget && hn() && K.key === " " && !K.defaultPrevented && p(K);
  });
  let _t = l;
  _t === "button" && (M.href || M.to) && (_t = b);
  const ut = {};
  _t === "button" ? (ut.type = te === void 0 ? "button" : te, ut.disabled = u) : (!M.href && !M.to && (ut.role = "button"), u && (ut["aria-disabled"] = u));
  const Ci = We(n, z, H);
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    W && !G.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [W]);
  const mr = v({}, r, {
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: h,
    focusRipple: f,
    tabIndex: q,
    focusVisible: k
  }), Si = Gu(mr);
  return /* @__PURE__ */ je(Xu, v({
    as: _t,
    className: se(Si.root, c),
    ownerState: mr,
    onBlur: vi,
    onClick: p,
    onContextMenu: me,
    onFocus: xi,
    onKeyDown: Ei,
    onKeyUp: Ti,
    onMouseDown: Y,
    onMouseLeave: w,
    onMouseUp: fe,
    onDragLeave: O,
    onTouchEnd: Ge,
    onTouchMove: $t,
    onTouchStart: ze,
    ref: Ci,
    tabIndex: u ? -1 : q,
    type: te
  }, ut, M, {
    children: [a, W ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ N(fi, v({
        ref: ke,
        center: i
      }, J))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (pr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: ss,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: s.bool,
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Qi,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: s.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: s.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: s.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: s.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: s.string,
  /**
   * @ignore
   */
  href: s.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: s.elementType,
  /**
   * @ignore
   */
  onBlur: s.func,
  /**
   * @ignore
   */
  onClick: s.func,
  /**
   * @ignore
   */
  onContextMenu: s.func,
  /**
   * @ignore
   */
  onDragLeave: s.func,
  /**
   * @ignore
   */
  onFocus: s.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: s.func,
  /**
   * @ignore
   */
  onKeyDown: s.func,
  /**
   * @ignore
   */
  onKeyUp: s.func,
  /**
   * @ignore
   */
  onMouseDown: s.func,
  /**
   * @ignore
   */
  onMouseLeave: s.func,
  /**
   * @ignore
   */
  onMouseUp: s.func,
  /**
   * @ignore
   */
  onTouchEnd: s.func,
  /**
   * @ignore
   */
  onTouchMove: s.func,
  /**
   * @ignore
   */
  onTouchStart: s.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * @default 0
   */
  tabIndex: s.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: s.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: s.oneOfType([s.func, s.shape({
    current: s.shape({
      pulsate: s.func.isRequired,
      start: s.func.isRequired,
      stop: s.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: s.oneOfType([s.oneOf(["button", "reset", "submit"]), s.string])
});
function Ju(e) {
  return xe("MuiButton", e);
}
const It = Ee("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), pi = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (pi.displayName = "ButtonGroupContext");
const hi = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (hi.displayName = "ButtonGroupButtonContext");
const Zu = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Qu = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, `${i}${X(t)}`, `size${X(o)}`, `${i}Size${X(o)}`, `color${X(t)}`, n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${X(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${X(o)}`]
  }, l = Se(c, Ju, a);
  return v({}, a, l);
}, mi = (e) => v({}, e.size === "small" && {
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
}), ed = ce(pr, {
  shouldForwardProp: (e) => ir(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${X(n.color)}`], t[`size${X(n.size)}`], t[`${n.variant}Size${X(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return v({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": v({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
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
    "&:active": v({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${It.focusVisible}`]: v({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${It.disabled}`]: v({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Le(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
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
  [`&.${It.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${It.disabled}`]: {
    boxShadow: "none"
  }
}), td = ce("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${X(n.size)}`]];
  }
})(({
  ownerState: e
}) => v({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, mi(e))), nd = ce("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${X(n.size)}`]];
  }
})(({
  ownerState: e
}) => v({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, mi(e))), gi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = E.useContext(pi), o = E.useContext(hi), i = Yn(r, t), a = Te({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: l = "primary",
    component: u = "button",
    className: d,
    disabled: h = !1,
    disableElevation: f = !1,
    disableFocusRipple: b = !1,
    endIcon: g,
    focusVisibleClassName: p,
    fullWidth: m = !1,
    size: T = "medium",
    startIcon: $,
    type: x,
    variant: C = "text"
  } = a, y = ae(a, Zu), P = v({}, a, {
    color: l,
    component: u,
    disabled: h,
    disableElevation: f,
    disableFocusRipple: b,
    fullWidth: m,
    size: T,
    type: x,
    variant: C
  }), R = Qu(P), V = $ && /* @__PURE__ */ N(td, {
    className: R.startIcon,
    ownerState: P,
    children: $
  }), ee = g && /* @__PURE__ */ N(nd, {
    className: R.endIcon,
    ownerState: P,
    children: g
  }), U = o || "";
  return /* @__PURE__ */ je(ed, v({
    ownerState: P,
    className: se(r.className, R.root, d, U),
    component: u,
    disabled: h,
    focusRipple: !b,
    focusVisibleClassName: se(R.focusVisible, p),
    ref: n,
    type: x
  }, y, {
    classes: R,
    children: [V, c, ee]
  }));
});
process.env.NODE_ENV !== "production" && (gi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: s.oneOfType([s.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), s.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: s.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: s.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: s.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: s.bool,
  /**
   * Element placed after the children.
   */
  endIcon: s.node,
  /**
   * @ignore
   */
  focusVisibleClassName: s.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: s.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: s.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: s.oneOfType([s.oneOf(["small", "medium", "large"]), s.string]),
  /**
   * Element placed before the children.
   */
  startIcon: s.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * @ignore
   */
  type: s.oneOfType([s.oneOf(["button", "reset", "submit"]), s.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: s.oneOfType([s.oneOf(["contained", "outlined", "text"]), s.string])
});
const rd = Pi(null), $n = {
  didCatch: !1,
  error: null
};
class od extends $i {
  constructor(t) {
    super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = $n;
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
      for (var n, r, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      (n = (r = this.props).onReset) === null || n === void 0 || n.call(r, {
        args: i,
        reason: "imperative-api"
      }), this.setState($n);
    }
  }
  componentDidCatch(t, n) {
    var r, o;
    (r = (o = this.props).onError) === null || r === void 0 || r.call(o, t, n);
  }
  componentDidUpdate(t, n) {
    const {
      didCatch: r
    } = this.state, {
      resetKeys: o
    } = this.props;
    if (r && n.error !== null && id(t.resetKeys, o)) {
      var i, a;
      (i = (a = this.props).onReset) === null || i === void 0 || i.call(a, {
        next: o,
        prev: t.resetKeys,
        reason: "keys"
      }), this.setState($n);
    }
  }
  render() {
    const {
      children: t,
      fallbackRender: n,
      FallbackComponent: r,
      fallback: o
    } = this.props, {
      didCatch: i,
      error: a
    } = this.state;
    let c = t;
    if (i) {
      const l = {
        error: a,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof n == "function")
        c = n(l);
      else if (r)
        c = br(r, l);
      else if (o === null || ht(o))
        c = o;
      else
        throw a;
    }
    return br(rd.Provider, {
      value: {
        didCatch: i,
        error: a,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, c);
  }
}
function id() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== t.length || e.some((n, r) => !Object.is(n, t[r]));
}
function sd(e) {
  return Te;
}
const ad = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"], cd = ["component", "slots", "slotProps"], ld = ["component"];
function po(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: i,
    getSlotOwnerState: a,
    internalForwardedProps: c
  } = t, l = ae(t, ad), {
    component: u,
    slots: d = {
      [e]: void 0
    },
    slotProps: h = {
      [e]: void 0
    }
  } = i, f = ae(i, cd), b = d[e] || r, g = No(h[e], o), p = ko(v({
    className: n
  }, l, {
    externalForwardedProps: e === "root" ? f : void 0,
    externalSlotProps: g
  })), {
    props: {
      component: m
    },
    internalRef: T
  } = p, $ = ae(p.props, ld), x = We(T, g == null ? void 0 : g.ref, t.ref), C = a ? a($) : {}, y = v({}, o, C), P = e === "root" ? m || u : m, R = _o(b, v({}, e === "root" && !u && !d[e] && c, e !== "root" && !d[e] && c, $, P && {
    as: P
  }, {
    ref: x
  }), y);
  return Object.keys(C).forEach((V) => {
    delete R[V];
  }), [b, R];
}
function ud(e) {
  return xe("MuiAlert", e);
}
const ho = Ee("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function dd(e) {
  return xe("MuiIconButton", e);
}
const fd = Ee("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), pd = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], hd = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", n && "disabled", r !== "default" && `color${X(r)}`, o && `edge${X(o)}`, `size${X(i)}`]
  };
  return Se(a, dd, t);
}, md = ce(pr, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${X(n.color)}`], n.edge && t[`edge${X(n.edge)}`], t[`size${X(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => v({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(e.palette.action.active, e.palette.action.hoverOpacity),
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
  const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
  return v({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && v({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": v({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(r.main, e.palette.action.hoverOpacity)
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
    [`&.${fd.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), yi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Te({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: c = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: d = "medium"
  } = r, h = ae(r, pd), f = v({}, r, {
    edge: o,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    size: d
  }), b = hd(f);
  return /* @__PURE__ */ N(md, v({
    className: se(b.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: n
  }, h, {
    ownerState: f,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (yi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Et(s.node, (e) => E.Children.toArray(e.children).some((n) => /* @__PURE__ */ E.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: s.oneOfType([s.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), s.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: s.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: s.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: s.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: s.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: s.oneOfType([s.oneOf(["small", "medium", "large"]), s.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
function gd(e) {
  return xe("MuiSvgIcon", e);
}
Ee("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const yd = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], bd = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${X(t)}`, `fontSize${X(n)}`]
  };
  return Se(o, gd, r);
}, vd = ce("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${X(n.color)}`], t[`fontSize${X(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, o, i, a, c, l, u, d, h, f, b, g;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (a = i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem",
      medium: ((c = e.typography) == null || (l = c.pxToRem) == null ? void 0 : l.call(c, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (h = (f = (e.vars || e).palette) == null || (f = f[t.color]) == null ? void 0 : f.main) != null ? h : {
      action: (b = (e.vars || e).palette) == null || (b = b.action) == null ? void 0 : b.active,
      disabled: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
      inherit: void 0
    }[t.color]
  };
}), Ht = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Te({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: c = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: h,
    viewBox: f = "0 0 24 24"
  } = r, b = ae(r, yd), g = /* @__PURE__ */ E.isValidElement(o) && o.type === "svg", p = v({}, r, {
    color: a,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: f,
    hasSvgAsChild: g
  }), m = {};
  d || (m.viewBox = f);
  const T = bd(p);
  return /* @__PURE__ */ je(vd, v({
    as: c,
    className: se(T.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: n
  }, m, b, g && o.props, {
    ownerState: p,
    children: [g ? o.props.children : o, h ? /* @__PURE__ */ N("title", {
      children: h
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Ht.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: s.oneOfType([s.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), s.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: s.oneOfType([s.oneOf(["inherit", "large", "medium", "small"]), s.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: s.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: s.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: s.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: s.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: s.string
});
Ht.muiName = "SvgIcon";
function Pt(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ N(Ht, v({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Ht.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(n));
}
const xd = Pt(/* @__PURE__ */ N("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), Ed = Pt(/* @__PURE__ */ N("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), Td = Pt(/* @__PURE__ */ N("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), Cd = Pt(/* @__PURE__ */ N("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), Sd = Pt(/* @__PURE__ */ N("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), Od = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"], Rd = sd(), Pd = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `color${X(n || r)}`, `${t}${X(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return Se(i, ud, o);
}, $d = ce(fn, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${X(n.color || n.severity)}`]];
  }
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? zn : Fn, n = e.palette.mode === "light" ? Fn : zn;
  return v({}, e.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(([, r]) => r.main && r.light).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
        [`& .${ho.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(([, r]) => r.main && r.light).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${ho.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(([, r]) => r.main && r.dark).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "filled"
      },
      style: v({
        fontWeight: e.typography.fontWeightMedium
      }, e.vars ? {
        color: e.vars.palette.Alert[`${r}FilledColor`],
        backgroundColor: e.vars.palette.Alert[`${r}FilledBg`]
      } : {
        backgroundColor: e.palette.mode === "dark" ? e.palette[r].dark : e.palette[r].main,
        color: e.palette.getContrastText(e.palette[r].main)
      })
    }))]
  });
}), _d = ce("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), wd = ce("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), mo = ce("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), go = {
  success: /* @__PURE__ */ N(xd, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ N(Ed, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ N(Td, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ N(Cd, {
    fontSize: "inherit"
  })
}, hr = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Rd({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: a,
    closeText: c = "Close",
    color: l,
    components: u = {},
    componentsProps: d = {},
    icon: h,
    iconMapping: f = go,
    onClose: b,
    role: g = "alert",
    severity: p = "success",
    slotProps: m = {},
    slots: T = {},
    variant: $ = "standard"
  } = r, x = ae(r, Od), C = v({}, r, {
    color: l,
    severity: p,
    variant: $,
    colorSeverity: l || p
  }), y = Pd(C), P = {
    slots: v({
      closeButton: u.CloseButton,
      closeIcon: u.CloseIcon
    }, T),
    slotProps: v({}, d, m)
  }, [R, V] = po("closeButton", {
    elementType: yi,
    externalForwardedProps: P,
    ownerState: C
  }), [ee, U] = po("closeIcon", {
    elementType: Sd,
    externalForwardedProps: P,
    ownerState: C
  });
  return /* @__PURE__ */ je($d, v({
    role: g,
    elevation: 0,
    ownerState: C,
    className: se(y.root, a),
    ref: n
  }, x, {
    children: [h !== !1 ? /* @__PURE__ */ N(_d, {
      ownerState: C,
      className: y.icon,
      children: h || f[p] || go[p]
    }) : null, /* @__PURE__ */ N(wd, {
      ownerState: C,
      className: y.message,
      children: i
    }), o != null ? /* @__PURE__ */ N(mo, {
      ownerState: C,
      className: y.action,
      children: o
    }) : null, o == null && b ? /* @__PURE__ */ N(mo, {
      ownerState: C,
      className: y.action,
      children: /* @__PURE__ */ N(R, v({
        size: "small",
        "aria-label": c,
        title: c,
        color: "inherit",
        onClick: b
      }, V, {
        children: /* @__PURE__ */ N(ee, v({
          fontSize: "small"
        }, U))
      }))
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (hr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: s.node,
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: s.string,
  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: s.oneOfType([s.oneOf(["error", "info", "success", "warning"]), s.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   *
   * @default {}
   */
  components: s.shape({
    CloseButton: s.elementType,
    CloseIcon: s.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   *
   * @default {}
   */
  componentsProps: s.shape({
    closeButton: s.object,
    closeIcon: s.object
  }),
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   * Set to `false` to remove the `icon`.
   */
  icon: s.node,
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: s.shape({
    error: s.node,
    info: s.node,
    success: s.node,
    warning: s.node
  }),
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: s.func,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: s.string,
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: s.oneOfType([s.oneOf(["error", "info", "success", "warning"]), s.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: s.shape({
    closeButton: s.oneOfType([s.func, s.object]),
    closeIcon: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: s.shape({
    closeButton: s.elementType,
    closeIcon: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: s.oneOfType([s.oneOf(["filled", "outlined", "standard"]), s.string])
});
function Nd({ label: e }) {
  return /* @__PURE__ */ N(ui, { children: e || "Title's default label" });
}
function kd({ message: e }) {
  return /* @__PURE__ */ N(ai, { sx: { p: 3 }, children: /* @__PURE__ */ N(li, { sx: { whiteSpace: "pre-line" }, children: e || "Description's default message" }) });
}
function Md({ children: e }) {
  return /* @__PURE__ */ N(
    od,
    {
      fallback: (t) => /* @__PURE__ */ je(hr, { severity: "error", children: [
        "Erro ao apresentar conteúdo do dialogo: ",
        t.message
      ] }),
      children: e
    }
  );
}
function Id({ children: e }) {
  return /* @__PURE__ */ N(ci, { sx: { mr: 3, mb: 1 }, children: e || /* @__PURE__ */ N(hr, { severity: "warning", children: "Nenhuma ação disponível." }) });
}
function bi({ title: e, content: t, actions: n, options: r, index: o, next: i }) {
  const { globalDialogProps: a } = ge.useContext(Lt);
  return /* @__PURE__ */ je(
    si,
    {
      ...r,
      ...a,
      ...r == null ? void 0 : r.dialogProps,
      open: !0,
      onClose: r == null ? void 0 : r.onClose,
      children: [
        i && /* @__PURE__ */ N(bi, { ...i }),
        e,
        t,
        n
      ]
    },
    `${o || "last"}-${e || "custom"}`
  );
}
function Ld({ globalDialogProps: e, children: t }) {
  const { globalDialogProps: n } = ge.useContext(Lt), [r, o] = _i([]), i = ge.useCallback(() => o((f) => {
    const b = [...f];
    return b.pop(), b;
  }), [o]), a = ge.useCallback((f, b, g, p = {}) => o((m) => [...m, { title: f, content: b, actions: g, options: p }]), [o]), c = ge.useCallback((f, b, g, p, m) => new Promise((T, $) => a(
    f ? /* @__PURE__ */ N(Nd, { label: f }) : void 0,
    /* @__PURE__ */ N(kd, { message: b }),
    /* @__PURE__ */ N(Id, { children: [g].flat().map(
      (x, C) => /* @__PURE__ */ N(
        gi,
        {
          onClick: () => i() | T((x == null ? void 0 : x.value) === void 0 ? x == null ? void 0 : x.label : x == null ? void 0 : x.value),
          ...p == null ? void 0 : p.buttonProps,
          children: x == null ? void 0 : x.label
        },
        C
      )
    ) }),
    { onClose: () => i() | m ? $("dialog closed") : T(), ...p }
  )), [a]), l = ge.useCallback((f, b) => c(
    b == null ? void 0 : b.title,
    f,
    { label: (b == null ? void 0 : b.label) || "Confirmar" },
    b
  ), [c]), u = ge.useCallback((f, b, g) => c(
    b,
    f,
    [
      { label: (g == null ? void 0 : g.confirmLabel) || "Confirmar", value: !0 },
      { label: (g == null ? void 0 : g.cancelLabel) || "Cancelar", value: !1 }
    ],
    g,
    !0
  ), [c]), d = ge.useCallback((f, b) => f ? a(
    null,
    /* @__PURE__ */ N(Md, { children: f }),
    null,
    b
  ) : i(), [i, a]), h = ge.useMemo(() => ({
    globalDialogProps: { ...n, ...e },
    setDialog: d,
    setConfirm: u,
    setAlert: l,
    handleClose: i
  }), [n, e, d, u, l, i]);
  return /* @__PURE__ */ je(Lt.Provider, { value: h, children: [
    t,
    (r == null ? void 0 : r.length) > 0 && /* @__PURE__ */ N(bi, { ...r.reduceRight((f, b, g) => ({ ...b, next: { ...f, index: g } })) })
  ] });
}
function Vd() {
  return ge.useContext(Lt);
}
export {
  Ld as DialogProvider,
  Vd as useDialog
};
