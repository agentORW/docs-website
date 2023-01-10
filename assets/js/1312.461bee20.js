(self["webpackChunkbte_docs"] = self["webpackChunkbte_docs"] || []).push([[1312],{

/***/ 7479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ Alert)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 25 modules
var MantineProvider = __webpack_require__(4215);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-id/use-id.js
var use_id = __webpack_require__(6289);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(6817);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Alert/Alert.styles.js


var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function getVariantStyles({ variant, color, theme }) {
  if (variant === "filled") {
    const colors2 = theme.fn.variant({ variant: "filled", color });
    return {
      backgroundColor: colors2.background,
      color: theme.white
    };
  }
  if (variant === "outline") {
    const colors2 = theme.fn.variant({ variant: "outline", color });
    return {
      color: colors2.color,
      borderColor: colors2.border,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white
    };
  }
  const colors = theme.fn.variant({ variant: "light", color });
  return {
    backgroundColor: colors.background,
    color: colors.color
  };
}
var useStyles = (0,create_styles/* createStyles */.k)((theme, { color, radius, variant }) => ({
  root: __spreadValues(__spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
    position: "relative",
    overflow: "hidden",
    padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
    borderRadius: theme.fn.radius(radius),
    border: "1px solid transparent"
  }), getVariantStyles({ variant, color, theme })),
  wrapper: {
    display: "flex"
  },
  body: {
    flex: 1
  },
  title: {
    boxSizing: "border-box",
    margin: 0,
    marginBottom: 7,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    "&[data-with-close-button]": {
      paddingRight: theme.spacing.md
    }
  },
  label: {
    display: "block",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  icon: {
    lineHeight: 1,
    width: 20,
    height: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight: theme.spacing.md,
    marginTop: 1
  },
  message: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
    lineHeight: theme.lineHeight,
    textOverflow: "ellipsis",
    overflow: "hidden",
    fontSize: theme.fontSizes.sm,
    color: variant === "filled" ? theme.white : theme.colorScheme === "dark" ? variant === "light" ? theme.white : theme.colors.dark[0] : theme.black
  }),
  closeButton: {
    position: "absolute",
    top: theme.spacing.sm,
    right: theme.spacing.sm,
    color: "inherit"
  }
}));

/* harmony default export */ const Alert_styles = (useStyles);
//# sourceMappingURL=Alert.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 10 modules
var Box = __webpack_require__(9845);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js
var create_polymorphic_component = __webpack_require__(8427);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/ActionIcon/ActionIcon.js + 1 modules
var ActionIcon = __webpack_require__(9834);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/CloseButton/CloseIcon.js


var CloseIcon_defProp = Object.defineProperty;
var CloseIcon_getOwnPropSymbols = Object.getOwnPropertySymbols;
var CloseIcon_hasOwnProp = Object.prototype.hasOwnProperty;
var CloseIcon_propIsEnum = Object.prototype.propertyIsEnumerable;
var CloseIcon_defNormalProp = (obj, key, value) => key in obj ? CloseIcon_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var CloseIcon_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (CloseIcon_hasOwnProp.call(b, prop))
      CloseIcon_defNormalProp(a, prop, b[prop]);
  if (CloseIcon_getOwnPropSymbols)
    for (var prop of CloseIcon_getOwnPropSymbols(b)) {
      if (CloseIcon_propIsEnum.call(b, prop))
        CloseIcon_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function CloseIcon(props) {
  return /* @__PURE__ */ react.createElement("svg", CloseIcon_spreadValues({
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ react.createElement("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}
CloseIcon.displayName = "@mantine/core/CloseIcon";


//# sourceMappingURL=CloseIcon.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/CloseButton/CloseButton.js






var CloseButton_defProp = Object.defineProperty;
var CloseButton_getOwnPropSymbols = Object.getOwnPropertySymbols;
var CloseButton_hasOwnProp = Object.prototype.hasOwnProperty;
var CloseButton_propIsEnum = Object.prototype.propertyIsEnumerable;
var CloseButton_defNormalProp = (obj, key, value) => key in obj ? CloseButton_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var CloseButton_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (CloseButton_hasOwnProp.call(b, prop))
      CloseButton_defNormalProp(a, prop, b[prop]);
  if (CloseButton_getOwnPropSymbols)
    for (var prop of CloseButton_getOwnPropSymbols(b)) {
      if (CloseButton_propIsEnum.call(b, prop))
        CloseButton_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (CloseButton_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && CloseButton_getOwnPropSymbols)
    for (var prop of CloseButton_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && CloseButton_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const iconSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24
};
const defaultProps = {
  size: "md"
};
const _CloseButton = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("CloseButton", defaultProps, props), {
    iconSize,
    size = "md"
  } = _a, others = __objRest(_a, [
    "iconSize",
    "size"
  ]);
  const theme = (0,MantineProvider/* useMantineTheme */.rZ)();
  const _iconSize = iconSize || theme.fn.size({ size, sizes: iconSizes });
  return /* @__PURE__ */ react.createElement(ActionIcon/* ActionIcon */.A, CloseButton_spreadValues({
    size,
    ref
  }, others), /* @__PURE__ */ react.createElement(CloseIcon, {
    width: _iconSize,
    height: _iconSize
  }));
});
_CloseButton.displayName = "@mantine/core/CloseButton";
const CloseButton = (0,create_polymorphic_component/* createPolymorphicComponent */.F)(_CloseButton);


//# sourceMappingURL=CloseButton.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Alert/Alert.js







var Alert_defProp = Object.defineProperty;
var Alert_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Alert_hasOwnProp = Object.prototype.hasOwnProperty;
var Alert_propIsEnum = Object.prototype.propertyIsEnumerable;
var Alert_defNormalProp = (obj, key, value) => key in obj ? Alert_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Alert_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Alert_hasOwnProp.call(b, prop))
      Alert_defNormalProp(a, prop, b[prop]);
  if (Alert_getOwnPropSymbols)
    for (var prop of Alert_getOwnPropSymbols(b)) {
      if (Alert_propIsEnum.call(b, prop))
        Alert_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Alert_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Alert_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Alert_getOwnPropSymbols)
    for (var prop of Alert_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Alert_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Alert_defaultProps = {
  variant: "light"
};
const Alert = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Alert", Alert_defaultProps, props), {
    id,
    className,
    title,
    variant,
    children,
    color,
    classNames,
    icon,
    styles,
    onClose,
    radius,
    withCloseButton,
    closeButtonLabel,
    unstyled
  } = _a, others = Alert_objRest(_a, [
    "id",
    "className",
    "title",
    "variant",
    "children",
    "color",
    "classNames",
    "icon",
    "styles",
    "onClose",
    "radius",
    "withCloseButton",
    "closeButtonLabel",
    "unstyled"
  ]);
  const { classes, cx } = Alert_styles({ color, radius, variant }, { classNames, styles, unstyled, name: "Alert" });
  const rootId = (0,use_id/* useId */.M)(id);
  const titleId = title && `${rootId}-title`;
  const bodyId = `${rootId}-body`;
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, Alert_spreadValues({
    id: rootId,
    role: "alert",
    "aria-labelledby": titleId,
    "aria-describedby": bodyId,
    className: cx(classes.root, classes[variant], className),
    ref
  }, others), /* @__PURE__ */ react.createElement("div", {
    className: classes.wrapper
  }, icon && /* @__PURE__ */ react.createElement("div", {
    className: classes.icon
  }, icon), /* @__PURE__ */ react.createElement("div", {
    className: classes.body
  }, title && /* @__PURE__ */ react.createElement("div", {
    className: classes.title,
    "data-with-close-button": withCloseButton || void 0
  }, /* @__PURE__ */ react.createElement("span", {
    id: titleId,
    className: classes.label
  }, title)), withCloseButton && /* @__PURE__ */ react.createElement(CloseButton, {
    className: classes.closeButton,
    onClick: onClose,
    variant: "transparent",
    size: 16,
    iconSize: 16,
    "aria-label": closeButtonLabel
  }), /* @__PURE__ */ react.createElement("div", {
    id: bodyId,
    className: classes.message
  }, children))));
});
Alert.displayName = "@mantine/core/Alert";


//# sourceMappingURL=Alert.js.map


/***/ }),

/***/ 7084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ Code)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 25 modules
var MantineProvider = __webpack_require__(4215);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(6817);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Code/Code.styles.js


var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var useStyles = (0,create_styles/* createStyles */.k)((theme, { color: _color }) => {
  const color = _color || (theme.colorScheme === "dark" ? "dark" : "gray");
  const colors = theme.fn.variant({ color, variant: "light" });
  return {
    root: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
      lineHeight: theme.lineHeight,
      padding: `2px calc(${theme.spacing.xs}px / 2)`,
      borderRadius: theme.radius.sm,
      color: theme.colorScheme === "dark" ? color === "dark" ? theme.colors.dark[0] : theme.white : theme.colors.dark[7],
      backgroundColor: theme.colorScheme === "dark" && color === "dark" ? theme.colors.dark[5] : colors.background,
      fontFamily: theme.fontFamilyMonospace,
      fontSize: theme.fontSizes.xs
    }),
    block: {
      padding: theme.spacing.xs,
      margin: 0,
      overflowX: "auto"
    }
  };
});

/* harmony default export */ const Code_styles = (useStyles);
//# sourceMappingURL=Code.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 10 modules
var Box = __webpack_require__(9845);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Code/Code.js





var Code_defProp = Object.defineProperty;
var Code_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Code_hasOwnProp = Object.prototype.hasOwnProperty;
var Code_propIsEnum = Object.prototype.propertyIsEnumerable;
var Code_defNormalProp = (obj, key, value) => key in obj ? Code_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Code_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Code_hasOwnProp.call(b, prop))
      Code_defNormalProp(a, prop, b[prop]);
  if (Code_getOwnPropSymbols)
    for (var prop of Code_getOwnPropSymbols(b)) {
      if (Code_propIsEnum.call(b, prop))
        Code_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Code_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Code_getOwnPropSymbols)
    for (var prop of Code_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Code_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Code = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Code", {}, props), { className, children, block, color, unstyled } = _a, others = __objRest(_a, ["className", "children", "block", "color", "unstyled"]);
  const { classes, cx } = Code_styles({ color }, { name: "Code", unstyled });
  if (block) {
    return /* @__PURE__ */ react.createElement(Box/* Box */.x, Code_spreadValues({
      component: "pre",
      dir: "ltr",
      className: cx(classes.root, classes.block, className),
      ref
    }, others), children);
  }
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, Code_spreadValues({
    component: "code",
    className: cx(classes.root, className),
    ref,
    dir: "ltr"
  }, others), children);
});
Code.displayName = "@mantine/core/Code";


//# sourceMappingURL=Code.js.map


/***/ }),

/***/ 9236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ Title)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 25 modules
var MantineProvider = __webpack_require__(4215);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(6817);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Title/Title.styles.js


var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function getFontSize(size, element, theme) {
  if (typeof size !== "undefined") {
    return size in theme.headings.sizes ? theme.headings.sizes[size].fontSize : size;
  }
  return theme.headings.sizes[element].fontSize;
}
function getLineHeight(size, element, theme) {
  if (typeof size !== "undefined" && size in theme.headings.sizes) {
    return theme.headings.sizes[size].lineHeight;
  }
  return theme.headings.sizes[element].lineHeight;
}
var useStyles = (0,create_styles/* createStyles */.k)((theme, { element, weight, size, inline }) => ({
  root: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
    fontFamily: theme.headings.fontFamily,
    fontWeight: weight || theme.headings.sizes[element].fontWeight || theme.headings.fontWeight,
    fontSize: getFontSize(size, element, theme),
    lineHeight: inline ? 1 : getLineHeight(size, element, theme),
    margin: 0
  })
}));

/* harmony default export */ const Title_styles = (useStyles);
//# sourceMappingURL=Title.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Text/Text.js + 1 modules
var Text = __webpack_require__(5117);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Title/Title.js





var Title_defProp = Object.defineProperty;
var Title_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Title_hasOwnProp = Object.prototype.hasOwnProperty;
var Title_propIsEnum = Object.prototype.propertyIsEnumerable;
var Title_defNormalProp = (obj, key, value) => key in obj ? Title_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Title_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Title_hasOwnProp.call(b, prop))
      Title_defNormalProp(a, prop, b[prop]);
  if (Title_getOwnPropSymbols)
    for (var prop of Title_getOwnPropSymbols(b)) {
      if (Title_propIsEnum.call(b, prop))
        Title_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Title_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Title_getOwnPropSymbols)
    for (var prop of Title_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Title_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  order: 1
};
const Title = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Title", defaultProps, props), { className, order, children, unstyled, size, weight, inline } = _a, others = __objRest(_a, ["className", "order", "children", "unstyled", "size", "weight", "inline"]);
  const { classes, cx } = Title_styles({ element: `h${order}`, weight, size, inline }, { name: "Title", unstyled });
  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(Text/* Text */.x, Title_spreadValues({
    component: `h${order}`,
    ref,
    className: cx(classes.root, className)
  }, others), children);
});
Title.displayName = "@mantine/core/Title";


//# sourceMappingURL=Title.js.map


/***/ }),

/***/ 6289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _use_isomorphic_effect_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(129);



const randomId = () => `mantine-${Math.random().toString(36).slice(2, 11)}`;
const useReactId = react__WEBPACK_IMPORTED_MODULE_0__["useId".toString()] || (() => void 0);
function useClientId() {
  const [uuid, setUuid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,_use_isomorphic_effect_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_1__/* .useIsomorphicEffect */ .Y)(() => {
    setUuid(randomId());
  }, []);
  return uuid;
}
function getReactId() {
  const id = useReactId();
  return id ? `mantine-${id.replace(/:/g, "")}` : "";
}
function useId(staticId) {
  return typeof staticId === "string" ? staticId : getReactId() || useClientId();
}


//# sourceMappingURL=use-id.js.map


/***/ }),

/***/ 129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useIsomorphicEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


const useIsomorphicEffect = typeof document !== "undefined" ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;


//# sourceMappingURL=use-isomorphic-effect.js.map


/***/ }),

/***/ 9180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ PrismExport)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 25 modules
var MantineProvider = __webpack_require__(4215);
;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/StylesApiContext.js


const StylesApiContext = (0,react.createContext)({
  classNames: {},
  styles: {},
  unstyled: false
});
function StylesApiProvider({
  children,
  classNames,
  unstyled,
  styles,
  staticSelector
}) {
  return /* @__PURE__ */ react.createElement(StylesApiContext.Provider, {
    value: { classNames, styles, unstyled, staticSelector }
  }, children);
}
function useContextStylesApi() {
  return (0,react.useContext)(StylesApiContext);
}


//# sourceMappingURL=StylesApiContext.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/utils/esm/create-safe-context/create-safe-context.js


function createSafeContext(errorMessage) {
  const Context = (0,react.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0,react.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ react.createElement(Context.Provider, {
    value
  }, children);
  return [Provider, useSafeContext];
}


//# sourceMappingURL=create-safe-context.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/Tabs.errors.js
const TABS_ERRORS = {
  context: "Tabs component was not found in the tree",
  value: "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value"
};


//# sourceMappingURL=Tabs.errors.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/Tabs.context.js



const [TabsContextProvider, useTabsContext] = createSafeContext(TABS_ERRORS.context);


//# sourceMappingURL=Tabs.context.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(6817);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Group/Group.styles.js
var Group_styles = __webpack_require__(9893);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/TabsList/TabsList.styles.js



var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function getVariantStyles({ variant, orientation, inverted, placement }, theme) {
  const vertical = orientation === "vertical";
  if (variant === "default") {
    return {
      [vertical ? placement === "left" ? "borderRight" : "borderLeft" : inverted ? "borderTop" : "borderBottom"]: `2px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`
    };
  }
  if (variant === "outline") {
    return {
      [vertical ? placement === "left" ? "borderRight" : "borderLeft" : inverted ? "borderTop" : "borderBottom"]: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`
    };
  }
  if (variant === "pills") {
    return {
      gap: `calc(${theme.spacing.sm}px / 2)`
    };
  }
  return {};
}
var useStyles = (0,create_styles/* createStyles */.k)((theme, params) => {
  const vertical = params.orientation === "vertical";
  return {
    tabsList: __spreadValues({
      display: "flex",
      flexWrap: "wrap",
      flexDirection: vertical ? "column" : "row",
      justifyContent: Group_styles/* GROUP_POSITIONS */.H[params.position],
      '& [role="tab"]': {
        flex: params.grow ? 1 : void 0
      }
    }, getVariantStyles(params, theme))
  };
});

/* harmony default export */ const TabsList_styles = (useStyles);
//# sourceMappingURL=TabsList.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 10 modules
var Box = __webpack_require__(9845);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/TabsList/TabsList.js






var TabsList_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var TabsList_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TabsList_hasOwnProp = Object.prototype.hasOwnProperty;
var TabsList_propIsEnum = Object.prototype.propertyIsEnumerable;
var TabsList_defNormalProp = (obj, key, value) => key in obj ? TabsList_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TabsList_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TabsList_hasOwnProp.call(b, prop))
      TabsList_defNormalProp(a, prop, b[prop]);
  if (TabsList_getOwnPropSymbols)
    for (var prop of TabsList_getOwnPropSymbols(b)) {
      if (TabsList_propIsEnum.call(b, prop))
        TabsList_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (TabsList_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && TabsList_getOwnPropSymbols)
    for (var prop of TabsList_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && TabsList_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TabsList = (0,react.forwardRef)((_a, ref) => {
  var _b = _a, { children, className, grow = false, position = "left" } = _b, others = __objRest(_b, ["children", "className", "grow", "position"]);
  const { orientation, variant, color, radius, inverted, placement } = useTabsContext();
  const { classNames, styles, unstyled } = useContextStylesApi();
  const { classes, cx } = TabsList_styles({ orientation, grow, variant, color, position, radius, inverted, placement }, { name: "Tabs", unstyled, classNames, styles });
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, __spreadProps(TabsList_spreadValues({}, others), {
    className: cx(classes.tabsList, className),
    ref,
    role: "tablist",
    "aria-orientation": orientation
  }), children);
});
TabsList.displayName = "@mantine/core/TabsList";


//# sourceMappingURL=TabsList.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/pack-sx/pack-sx.js
var pack_sx = __webpack_require__(7818);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/TabsPanel/TabsPanel.styles.js


var TabsPanel_styles_useStyles = (0,create_styles/* createStyles */.k)((_theme, { orientation }) => ({
  panel: {
    flex: orientation === "vertical" ? 1 : void 0
  }
}));

/* harmony default export */ const TabsPanel_styles = (TabsPanel_styles_useStyles);
//# sourceMappingURL=TabsPanel.styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/TabsPanel/TabsPanel.js







var TabsPanel_defProp = Object.defineProperty;
var TabsPanel_defProps = Object.defineProperties;
var TabsPanel_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var TabsPanel_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TabsPanel_hasOwnProp = Object.prototype.hasOwnProperty;
var TabsPanel_propIsEnum = Object.prototype.propertyIsEnumerable;
var TabsPanel_defNormalProp = (obj, key, value) => key in obj ? TabsPanel_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TabsPanel_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TabsPanel_hasOwnProp.call(b, prop))
      TabsPanel_defNormalProp(a, prop, b[prop]);
  if (TabsPanel_getOwnPropSymbols)
    for (var prop of TabsPanel_getOwnPropSymbols(b)) {
      if (TabsPanel_propIsEnum.call(b, prop))
        TabsPanel_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var TabsPanel_spreadProps = (a, b) => TabsPanel_defProps(a, TabsPanel_getOwnPropDescs(b));
var TabsPanel_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (TabsPanel_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && TabsPanel_getOwnPropSymbols)
    for (var prop of TabsPanel_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && TabsPanel_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TabsPanel = (0,react.forwardRef)((_a, ref) => {
  var _b = _a, { value, children, sx, className } = _b, others = TabsPanel_objRest(_b, ["value", "children", "sx", "className"]);
  const ctx = useTabsContext();
  const { classNames, styles, unstyled } = useContextStylesApi();
  const { classes, cx } = TabsPanel_styles({
    orientation: ctx.orientation,
    variant: ctx.variant,
    color: ctx.color,
    radius: ctx.radius,
    inverted: ctx.inverted,
    placement: ctx.placement
  }, { name: "Tabs", unstyled, classNames, styles });
  const active = ctx.value === value;
  const content = ctx.keepMounted ? children : active ? children : null;
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, TabsPanel_spreadProps(TabsPanel_spreadValues({}, others), {
    ref,
    sx: [{ display: !active ? "none" : void 0 }, ...(0,pack_sx/* packSx */.R)(sx)],
    className: cx(classes.panel, className),
    role: "tabpanel",
    id: ctx.getPanelId(value),
    "aria-labelledby": ctx.getTabId(value)
  }), content);
});
TabsPanel.displayName = "@mantine/core/TabsPanel";


//# sourceMappingURL=TabsPanel.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/utils/esm/find-element-ancestor/find-element-ancestor.js
function findElementAncestor(element, selector) {
  let _element = element;
  while ((_element = _element.parentElement) && !_element.matches(selector))
    ;
  return _element;
}


//# sourceMappingURL=find-element-ancestor.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/utils/esm/create-scoped-keydown-handler/create-scoped-keydown-handler.js


function getPreviousIndex(current, elements, loop) {
  for (let i = current - 1; i >= 0; i -= 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }
  if (loop) {
    for (let i = elements.length - 1; i > -1; i -= 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }
  return current;
}
function getNextIndex(current, elements, loop) {
  for (let i = current + 1; i < elements.length; i += 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }
  if (loop) {
    for (let i = 0; i < elements.length; i += 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }
  return current;
}
function onSameLevel(target, sibling, parentSelector) {
  return findElementAncestor(target, parentSelector) === findElementAncestor(sibling, parentSelector);
}
function createScopedKeydownHandler({
  parentSelector,
  siblingSelector,
  onKeyDown,
  loop = true,
  activateOnFocus = false,
  dir = "rtl",
  orientation
}) {
  return (event) => {
    var _a;
    onKeyDown == null ? void 0 : onKeyDown(event);
    const elements = Array.from(((_a = findElementAncestor(event.currentTarget, parentSelector)) == null ? void 0 : _a.querySelectorAll(siblingSelector)) || []).filter((node) => onSameLevel(event.currentTarget, node, parentSelector));
    const current = elements.findIndex((el) => event.currentTarget === el);
    const _nextIndex = getNextIndex(current, elements, loop);
    const _previousIndex = getPreviousIndex(current, elements, loop);
    const nextIndex = dir === "rtl" ? _previousIndex : _nextIndex;
    const previousIndex = dir === "rtl" ? _nextIndex : _previousIndex;
    switch (event.key) {
      case "ArrowRight": {
        if (orientation === "horizontal") {
          event.stopPropagation();
          event.preventDefault();
          elements[nextIndex].focus();
          activateOnFocus && elements[nextIndex].click();
        }
        break;
      }
      case "ArrowLeft": {
        if (orientation === "horizontal") {
          event.stopPropagation();
          event.preventDefault();
          elements[previousIndex].focus();
          activateOnFocus && elements[previousIndex].click();
        }
        break;
      }
      case "ArrowUp": {
        if (orientation === "vertical") {
          event.stopPropagation();
          event.preventDefault();
          elements[_previousIndex].focus();
          activateOnFocus && elements[_previousIndex].click();
        }
        break;
      }
      case "ArrowDown": {
        if (orientation === "vertical") {
          event.stopPropagation();
          event.preventDefault();
          elements[_nextIndex].focus();
          activateOnFocus && elements[_nextIndex].click();
        }
        break;
      }
      case "Home": {
        event.stopPropagation();
        event.preventDefault();
        !elements[0].disabled && elements[0].focus();
        break;
      }
      case "End": {
        event.stopPropagation();
        event.preventDefault();
        const last = elements.length - 1;
        !elements[last].disabled && elements[last].focus();
        break;
      }
    }
  };
}


//# sourceMappingURL=create-scoped-keydown-handler.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/Tab/Tab.styles.js


var Tab_styles_defProp = Object.defineProperty;
var Tab_styles_defProps = Object.defineProperties;
var Tab_styles_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Tab_styles_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Tab_styles_hasOwnProp = Object.prototype.hasOwnProperty;
var Tab_styles_propIsEnum = Object.prototype.propertyIsEnumerable;
var Tab_styles_defNormalProp = (obj, key, value) => key in obj ? Tab_styles_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Tab_styles_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Tab_styles_hasOwnProp.call(b, prop))
      Tab_styles_defNormalProp(a, prop, b[prop]);
  if (Tab_styles_getOwnPropSymbols)
    for (var prop of Tab_styles_getOwnPropSymbols(b)) {
      if (Tab_styles_propIsEnum.call(b, prop))
        Tab_styles_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Tab_styles_spreadProps = (a, b) => Tab_styles_defProps(a, Tab_styles_getOwnPropDescs(b));
function Tab_styles_getVariantStyles(theme, { variant, orientation, color, radius, inverted, placement }) {
  const vertical = orientation === "vertical";
  const filledScheme = theme.fn.variant({ color, variant: "filled" });
  const radiusValue = theme.fn.radius(radius);
  const borderRadius = orientation === "vertical" ? placement === "left" ? `${radiusValue}px 0 0 ${radiusValue}px` : ` 0 ${radiusValue}px ${radiusValue}px 0` : inverted ? `0 0 ${radiusValue}px ${radiusValue}px` : `${radiusValue}px ${radiusValue}px 0 0`;
  if (variant === "default") {
    return Tab_styles_spreadProps(Tab_styles_spreadValues({
      [vertical ? placement === "left" ? "borderRight" : "borderLeft" : inverted ? "borderTop" : "borderBottom"]: "2px solid transparent",
      [vertical ? placement === "left" ? "marginRight" : "marginLeft" : inverted ? "marginTop" : "marginBottom"]: -2,
      borderRadius
    }, theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
      borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    })), {
      "&[data-active]": Tab_styles_spreadValues({
        borderColor: filledScheme.background,
        color: theme.colorScheme === "dark" ? theme.white : theme.black
      }, theme.fn.hover({ borderColor: filledScheme.background }))
    });
  }
  if (variant === "outline") {
    return {
      borderRadius,
      border: "1px solid transparent",
      [vertical ? placement === "left" ? "borderRight" : "borderLeft" : inverted ? "borderTop" : "borderBottom"]: "none",
      "&[data-active]": {
        borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3],
        "&::before": {
          content: '""',
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          position: "absolute",
          bottom: vertical ? 0 : inverted ? "unset" : -1,
          top: vertical ? 0 : inverted ? -1 : "unset",
          [vertical ? "width" : "height"]: 1,
          right: vertical ? placement === "left" ? -1 : "unset" : 0,
          left: vertical ? placement === "left" ? "unset" : -1 : 0
        }
      }
    };
  }
  if (variant === "pills") {
    return Tab_styles_spreadProps(Tab_styles_spreadValues({
      borderRadius: theme.fn.radius(radius)
    }, theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
    })), {
      "&[data-active]": Tab_styles_spreadValues({
        backgroundColor: filledScheme.background,
        color: theme.white
      }, theme.fn.hover({ backgroundColor: filledScheme.background }))
    });
  }
  return {};
}
var Tab_styles_useStyles = (0,create_styles/* createStyles */.k)((theme, params) => ({
  tabLabel: {},
  tab: Tab_styles_spreadValues({
    position: "relative",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: params.withIcon ? theme.spacing.xs : void 0,
    paddingRight: params.withRightSection ? theme.spacing.xs : void 0,
    fontSize: theme.fontSizes.sm,
    whiteSpace: "nowrap",
    zIndex: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: params.orientation === "horizontal" ? "center" : void 0,
    lineHeight: 1,
    "&:disabled": Tab_styles_spreadValues({
      opacity: 0.5,
      cursor: "not-allowed"
    }, theme.fn.hover({ backgroundColor: "transparent" })),
    "&:focus": {
      zIndex: 1
    }
  }, Tab_styles_getVariantStyles(theme, params)),
  tabRightSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:not(:only-child)": {
      marginLeft: 7
    }
  },
  tabIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:not(:only-child)": {
      marginRight: 7
    }
  }
}));

/* harmony default export */ const Tab_styles = (Tab_styles_useStyles);
//# sourceMappingURL=Tab.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/UnstyledButton/UnstyledButton.js + 1 modules
var UnstyledButton = __webpack_require__(4736);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/Tab/Tab.js







var Tab_defProp = Object.defineProperty;
var Tab_defProps = Object.defineProperties;
var Tab_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Tab_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Tab_hasOwnProp = Object.prototype.hasOwnProperty;
var Tab_propIsEnum = Object.prototype.propertyIsEnumerable;
var Tab_defNormalProp = (obj, key, value) => key in obj ? Tab_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Tab_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Tab_hasOwnProp.call(b, prop))
      Tab_defNormalProp(a, prop, b[prop]);
  if (Tab_getOwnPropSymbols)
    for (var prop of Tab_getOwnPropSymbols(b)) {
      if (Tab_propIsEnum.call(b, prop))
        Tab_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Tab_spreadProps = (a, b) => Tab_defProps(a, Tab_getOwnPropDescs(b));
var Tab_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Tab_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Tab_getOwnPropSymbols)
    for (var prop of Tab_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Tab_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Tab = (0,react.forwardRef)((_a, ref) => {
  var _b = _a, { value, children, onKeyDown, onClick, className, icon, rightSection, color } = _b, others = Tab_objRest(_b, ["value", "children", "onKeyDown", "onClick", "className", "icon", "rightSection", "color"]);
  const ctx = useTabsContext();
  const { classNames, styles, unstyled } = useContextStylesApi();
  const hasIcon = !!icon;
  const hasRightSection = !!rightSection;
  const { theme, classes, cx } = Tab_styles({
    withIcon: hasIcon || hasRightSection && !children,
    withRightSection: hasRightSection || hasIcon && !children,
    orientation: ctx.orientation,
    color: color || ctx.color,
    variant: ctx.variant,
    radius: ctx.radius,
    inverted: ctx.inverted,
    placement: ctx.placement
  }, { name: "Tabs", unstyled, classNames, styles });
  const isActive = value === ctx.value;
  const activateTab = (event) => {
    ctx.onTabChange(ctx.allowTabDeactivation ? value === ctx.value ? null : value : value);
    onClick == null ? void 0 : onClick(event);
  };
  return /* @__PURE__ */ react.createElement(UnstyledButton/* UnstyledButton */.k, Tab_spreadProps(Tab_spreadValues({}, others), {
    unstyled,
    className: cx(classes.tab, className),
    "data-active": isActive || void 0,
    ref,
    type: "button",
    role: "tab",
    id: ctx.getTabId(value),
    "aria-selected": isActive,
    tabIndex: isActive || ctx.value === null ? 0 : -1,
    "aria-controls": ctx.getPanelId(value),
    onClick: activateTab,
    onKeyDown: createScopedKeydownHandler({
      siblingSelector: '[role="tab"]',
      parentSelector: '[role="tablist"]',
      activateOnFocus: ctx.activateTabWithKeyboard,
      loop: ctx.loop,
      dir: theme.dir,
      orientation: ctx.orientation,
      onKeyDown
    })
  }), icon && /* @__PURE__ */ react.createElement("div", {
    className: classes.tabIcon
  }, icon), children && /* @__PURE__ */ react.createElement("div", {
    className: classes.tabLabel
  }, children), rightSection && /* @__PURE__ */ react.createElement("div", {
    className: classes.tabRightSection
  }, rightSection));
});
Tab.displayName = "@mantine/core/Tab";


//# sourceMappingURL=Tab.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/utils/esm/get-safe-id/get-safe-id.js
function getSafeId(uid, errorMessage) {
  return (value) => {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error(errorMessage);
    }
    return `${uid}-${value}`;
  };
}


//# sourceMappingURL=get-safe-id.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-id/use-id.js
var use_id = __webpack_require__(6289);
;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.js


function useUncontrolled({
  value,
  defaultValue,
  finalValue,
  onChange = () => {
  }
}) {
  const [uncontrolledValue, setUncontrolledValue] = (0,react.useState)(defaultValue !== void 0 ? defaultValue : finalValue);
  const handleUncontrolledChange = (val) => {
    setUncontrolledValue(val);
    onChange == null ? void 0 : onChange(val);
  };
  if (value !== void 0) {
    return [value, onChange, true];
  }
  return [uncontrolledValue, handleUncontrolledChange, false];
}


//# sourceMappingURL=use-uncontrolled.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/TabsProvider.js






function TabsProvider({
  defaultValue,
  value,
  onTabChange,
  orientation,
  children,
  loop,
  id,
  activateTabWithKeyboard,
  allowTabDeactivation,
  variant,
  color,
  radius,
  inverted,
  placement,
  keepMounted = true
}) {
  const uid = (0,use_id/* useId */.M)(id);
  const [_value, onChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange: onTabChange
  });
  return /* @__PURE__ */ react.createElement(TabsContextProvider, {
    value: {
      placement,
      value: _value,
      orientation,
      id: uid,
      loop,
      activateTabWithKeyboard,
      getTabId: getSafeId(`${uid}-tab`, TABS_ERRORS.value),
      getPanelId: getSafeId(`${uid}-panel`, TABS_ERRORS.value),
      onTabChange: onChange,
      allowTabDeactivation,
      variant,
      color,
      radius,
      inverted,
      keepMounted
    }
  }, children);
}
TabsProvider.displayName = "@mantine/core/TabsProvider";


//# sourceMappingURL=TabsProvider.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/Tabs.styles.js


var Tabs_styles_useStyles = (0,create_styles/* createStyles */.k)((_theme, { orientation, placement }) => ({
  root: {
    display: orientation === "vertical" ? "flex" : void 0,
    flexDirection: placement === "right" ? "row-reverse" : "row"
  }
}));

/* harmony default export */ const Tabs_styles = (Tabs_styles_useStyles);
//# sourceMappingURL=Tabs.styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/Tabs.js









var Tabs_defProp = Object.defineProperty;
var Tabs_defProps = Object.defineProperties;
var Tabs_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Tabs_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Tabs_hasOwnProp = Object.prototype.hasOwnProperty;
var Tabs_propIsEnum = Object.prototype.propertyIsEnumerable;
var Tabs_defNormalProp = (obj, key, value) => key in obj ? Tabs_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Tabs_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Tabs_hasOwnProp.call(b, prop))
      Tabs_defNormalProp(a, prop, b[prop]);
  if (Tabs_getOwnPropSymbols)
    for (var prop of Tabs_getOwnPropSymbols(b)) {
      if (Tabs_propIsEnum.call(b, prop))
        Tabs_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Tabs_spreadProps = (a, b) => Tabs_defProps(a, Tabs_getOwnPropDescs(b));
var Tabs_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Tabs_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Tabs_getOwnPropSymbols)
    for (var prop of Tabs_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Tabs_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  orientation: "horizontal",
  loop: true,
  activateTabWithKeyboard: true,
  allowTabDeactivation: false,
  unstyled: false,
  inverted: false,
  variant: "default",
  placement: "left"
};
const Tabs = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Tabs", defaultProps, props), {
    defaultValue,
    value,
    orientation,
    loop,
    activateTabWithKeyboard,
    allowTabDeactivation,
    children,
    id,
    onTabChange,
    variant,
    color,
    className,
    unstyled,
    classNames,
    styles,
    radius,
    inverted,
    keepMounted,
    placement
  } = _a, others = Tabs_objRest(_a, [
    "defaultValue",
    "value",
    "orientation",
    "loop",
    "activateTabWithKeyboard",
    "allowTabDeactivation",
    "children",
    "id",
    "onTabChange",
    "variant",
    "color",
    "className",
    "unstyled",
    "classNames",
    "styles",
    "radius",
    "inverted",
    "keepMounted",
    "placement"
  ]);
  const { classes, cx } = Tabs_styles({ orientation, color, variant, radius, inverted, placement }, { unstyled, name: "Tabs", classNames, styles });
  return /* @__PURE__ */ react.createElement(StylesApiProvider, {
    classNames,
    styles,
    unstyled
  }, /* @__PURE__ */ react.createElement(TabsProvider, {
    activateTabWithKeyboard,
    defaultValue,
    orientation,
    onTabChange,
    value,
    id,
    loop,
    allowTabDeactivation,
    color,
    variant,
    radius,
    inverted,
    keepMounted,
    placement
  }, /* @__PURE__ */ react.createElement(Box/* Box */.x, Tabs_spreadProps(Tabs_spreadValues({}, others), {
    className: cx(classes.root, className),
    id,
    ref
  }), children)));
});
Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = TabsPanel;
Tabs.displayName = "@mantine/core/Tabs";


//# sourceMappingURL=Tabs.js.map

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(7410);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ const duotoneDark = (theme);

;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/dist/index.js





var dist_defaultProps = {
  // $FlowFixMe
  Prism: prism/* default */.Z,
  theme: duotoneDark
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react.Component);

/* harmony default export */ const dist = (Highlight);


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.module.js



/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$var$setRef(ref, value) {
    if (typeof ref === 'function') ref(value);
    else if (ref !== null && ref !== undefined) ref.current = value;
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
    return (node)=>refs.forEach((ref)=>$6ed0406888f73fc4$var$setRef(ref, node)
        )
    ;
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return (0,react.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}





//# sourceMappingURL=index.module.js.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-slot/dist/index.module.js







/* -------------------------------------------------------------------------------------------------
 * Slot
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { children: children , ...slotProps } = props;
    const childrenArray = react.Children.toArray(children);
    const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
    if (slottable) {
        // the new element to render is the one passed as a child of `Slottable`
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                // because the new element will be the one rendered, we are only interested
                // in grabbing its children (`newElement.props.children`)
                if (react.Children.count(newElement) > 1) return react.Children.only(null);
                return /*#__PURE__*/ (0,react.isValidElement)(newElement) ? newElement.props.children : null;
            } else return child;
        });
        return /*#__PURE__*/ (0,react.createElement)($5e63c961fc1ce211$var$SlotClone, (0,esm_extends/* default */.Z)({}, slotProps, {
            ref: forwardedRef
        }), /*#__PURE__*/ (0,react.isValidElement)(newElement) ? /*#__PURE__*/ (0,react.cloneElement)(newElement, undefined, newChildren) : null);
    }
    return /*#__PURE__*/ (0,react.createElement)($5e63c961fc1ce211$var$SlotClone, (0,esm_extends/* default */.Z)({}, slotProps, {
        ref: forwardedRef
    }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = 'Slot';
/* -------------------------------------------------------------------------------------------------
 * SlotClone
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$var$SlotClone = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { children: children , ...slotProps } = props;
    if (/*#__PURE__*/ (0,react.isValidElement)(children)) return /*#__PURE__*/ (0,react.cloneElement)(children, {
        ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
        ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref)
    });
    return react.Children.count(children) > 1 ? react.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = 'SlotClone';
/* -------------------------------------------------------------------------------------------------
 * Slottable
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children: children  })=>{
    return /*#__PURE__*/ (0,react.createElement)(react.Fragment, null, children);
};
/* ---------------------------------------------------------------------------------------------- */ function $5e63c961fc1ce211$var$isSlottable(child) {
    return /*#__PURE__*/ (0,react.isValidElement)(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
    // all child props should override
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName); // if it's a handler, modify the override by composing the base handler
        if (isHandler) overrideProps[propName] = (...args)=>{
            childPropValue === null || childPropValue === void 0 || childPropValue(...args);
            slotPropValue === null || slotPropValue === void 0 || slotPropValue(...args);
        };
        else if (propName === 'style') overrideProps[propName] = {
            ...slotPropValue,
            ...childPropValue
        };
        else if (propName === 'className') overrideProps[propName] = [
            slotPropValue,
            childPropValue
        ].filter(Boolean).join(' ');
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
const $5e63c961fc1ce211$export$be92b6f5f03c0fe9 = (/* unused pure expression or super */ null && ($5e63c961fc1ce211$export$8c6ed5c666ac1360));





//# sourceMappingURL=index.module.js.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.module.js









const $8927f6f2acc4f386$var$NODES = [
    'a',
    'button',
    'div',
    'h2',
    'h3',
    'img',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul'
]; // Temporary while we await merge of this fix:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396
// prettier-ignore
/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/ const $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node)=>{
    const Node = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
        const { asChild: asChild , ...primitiveProps } = props;
        const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
        (0,react.useEffect)(()=>{
            window[Symbol.for('radix-ui')] = true;
        }, []);
        return /*#__PURE__*/ (0,react.createElement)(Comp, (0,esm_extends/* default */.Z)({}, primitiveProps, {
            ref: forwardedRef
        }));
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/ /**
 * Flush custom event dispatch
 * https://github.com/radix-ui/primitives/pull/1378
 *
 * React batches *all* event handlers since version 18, this introduces certain considerations when using custom event types.
 *
 * Internally, React prioritises events in the following order:
 *  - discrete
 *  - continuous
 *  - default
 *
 * https://github.com/facebook/react/blob/a8a4742f1c54493df00da648a3f9d26e3db9c8b5/packages/react-dom/src/events/ReactDOMEventListener.js#L294-L350
 *
 * `discrete` is an  important distinction as updates within these events are applied immediately.
 * React however, is not able to infer the priority of custom event types due to how they are detected internally.
 * Because of this, it's possible for updates from custom events to be unexpectedly batched when
 * dispatched by another `discrete` event.
 *
 * In order to ensure that updates from custom events are applied predictably, we need to manually flush the batch.
 * This utility should be used when dispatching a custom event from within another `discrete` event, this utility
 * is not nessesary when dispatching known event types, or if dispatching a custom type inside a non-discrete event.
 * For example:
 *
 * dispatching a known click 👎
 * target.dispatchEvent(new Event(‘click’))
 *
 * dispatching a custom type within a non-discrete event 👎
 * onScroll={(event) => event.target.dispatchEvent(new CustomEvent(‘customType’))}
 *
 * dispatching a custom type within a `discrete` event 👍
 * onPointerDown={(event) => dispatchDiscreteCustomEvent(event.target, new CustomEvent(‘customType’))}
 *
 * Note: though React classifies `focus`, `focusin` and `focusout` events as `discrete`, it's  not recommended to use
 * this utility with them. This is because it's possible for those handlers to be called implicitly during render
 * e.g. when focus is within a component as it is unmounted, or when managing focus on mount.
 */ function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
    if (target) $4q5Fq$flushSync(()=>target.dispatchEvent(event)
    );
}
/* -----------------------------------------------------------------------------------------------*/ const $8927f6f2acc4f386$export$be92b6f5f03c0fe9 = (/* unused pure expression or super */ null && ($8927f6f2acc4f386$export$250ffa63cdc0d034));





//# sourceMappingURL=index.module.js.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js



/**
 * On the server, React emits a warning when calling `useLayoutEffect`.
 * This is because neither `useLayoutEffect` nor `useEffect` run on the server.
 * We use this safe version which suppresses the warning by replacing it with a noop on the server.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */ const $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? react.useLayoutEffect : ()=>{};





//# sourceMappingURL=index.module.js.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-presence/dist/index.module.js










function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
    return (0,react.useReducer)((state, event)=>{
        const nextState = machine[state][event];
        return nextState !== null && nextState !== void 0 ? nextState : state;
    }, initialState);
}


const $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props)=>{
    const { present: present , children: children  } = props;
    const presence = $921a889cee6df7e8$var$usePresence(present);
    const child = typeof children === 'function' ? children({
        present: presence.isPresent
    }) : react.Children.only(children);
    const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
    const forceMount = typeof children === 'function';
    return forceMount || presence.isPresent ? /*#__PURE__*/ (0,react.cloneElement)(child, {
        ref: ref
    }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = 'Presence';
/* -------------------------------------------------------------------------------------------------
 * usePresence
 * -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$usePresence(present) {
    const [node1, setNode] = (0,react.useState)();
    const stylesRef = (0,react.useRef)({});
    const prevPresentRef = (0,react.useRef)(present);
    const prevAnimationNameRef = (0,react.useRef)('none');
    const initialState = present ? 'mounted' : 'unmounted';
    const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
        mounted: {
            UNMOUNT: 'unmounted',
            ANIMATION_OUT: 'unmountSuspended'
        },
        unmountSuspended: {
            MOUNT: 'mounted',
            ANIMATION_END: 'unmounted'
        },
        unmounted: {
            MOUNT: 'mounted'
        }
    });
    (0,react.useEffect)(()=>{
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === 'mounted' ? currentAnimationName : 'none';
    }, [
        state
    ]);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
            if (present) send('MOUNT');
            else if (currentAnimationName === 'none' || (styles === null || styles === void 0 ? void 0 : styles.display) === 'none') // If there is no exit animation or the element is hidden, animations won't run
            // so we unmount instantly
            send('UNMOUNT');
            else {
                /**
         * When `present` changes to `false`, we check changes to animation-name to
         * determine whether an animation has started. We chose this approach (reading
         * computed styles) because there is no `animationrun` event and `animationstart`
         * fires after `animation-delay` has expired which would be too late.
         */ const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) send('ANIMATION_OUT');
                else send('UNMOUNT');
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (node1) {
            /**
       * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
       * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
       * make sure we only trigger ANIMATION_END for the currently active animation.
       */ const handleAnimationEnd = (event)=>{
                const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(event.animationName);
                if (event.target === node1 && isCurrentAnimation) // With React 18 concurrency this update is applied
                // a frame after the animation ends, creating a flash of visible content.
                // By manually flushing we ensure they sync within a frame, removing the flash.
                (0,react_dom.flushSync)(()=>send('ANIMATION_END')
                );
            };
            const handleAnimationStart = (event)=>{
                if (event.target === node1) // if animation occurred, store its name as the previous animation.
                prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
            };
            node1.addEventListener('animationstart', handleAnimationStart);
            node1.addEventListener('animationcancel', handleAnimationEnd);
            node1.addEventListener('animationend', handleAnimationEnd);
            return ()=>{
                node1.removeEventListener('animationstart', handleAnimationStart);
                node1.removeEventListener('animationcancel', handleAnimationEnd);
                node1.removeEventListener('animationend', handleAnimationEnd);
            };
        } else // Transition to the unmounted state if the node is removed prematurely.
        // We avoid doing so during cleanup as the node may change but still exist.
        send('ANIMATION_END');
    }, [
        node1,
        send
    ]);
    return {
        isPresent: [
            'mounted',
            'unmountSuspended'
        ].includes(state),
        ref: (0,react.useCallback)((node)=>{
            if (node) stylesRef.current = getComputedStyle(node);
            setNode(node);
        }, [])
    };
}
/* -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$getAnimationName(styles) {
    return (styles === null || styles === void 0 ? void 0 : styles.animationName) || 'none';
}





//# sourceMappingURL=index.module.js.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-context/dist/index.module.js



function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const Context = /*#__PURE__*/ $3bkAK$createContext(defaultContext);
    function Provider(props) {
        const { children: children , ...context } = props; // Only re-memoize when prop values change
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const value = $3bkAK$useMemo(()=>context
        , Object.values(context));
        return /*#__PURE__*/ $3bkAK$createElement(Context.Provider, {
            value: value
        }, children);
    }
    function useContext(consumerName) {
        const context = $3bkAK$useContext(Context);
        if (context) return context;
        if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + 'Provider';
    return [
        Provider,
        useContext
    ];
}
/* -------------------------------------------------------------------------------------------------
 * createContextScope
 * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    /* -----------------------------------------------------------------------------------------------
   * createContext
   * ---------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
        const BaseContext = /*#__PURE__*/ (0,react.createContext)(defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        function Provider(props) {
            const { scope: scope , children: children , ...context } = props;
            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext; // Only re-memoize when prop values change
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const value = (0,react.useMemo)(()=>context
            , Object.values(context));
            return /*#__PURE__*/ (0,react.createElement)(Context.Provider, {
                value: value
            }, children);
        }
        function useContext(consumerName, scope) {
            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
            const context = (0,react.useContext)(Context);
            if (context) return context;
            if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        Provider.displayName = rootComponentName + 'Provider';
        return [
            Provider,
            useContext
        ];
    }
    /* -----------------------------------------------------------------------------------------------
   * createScope
   * ---------------------------------------------------------------------------------------------*/ const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return /*#__PURE__*/ (0,react.createContext)(defaultContext);
        });
        return function useScope(scope) {
            const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
            return (0,react.useMemo)(()=>({
                    [`__scope${scopeName}`]: {
                        ...scope,
                        [scopeName]: contexts
                    }
                })
            , [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        $c512c27ab02ef895$export$fd42f52fd3ae1109,
        $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
/* -------------------------------------------------------------------------------------------------
 * composeContextScopes
 * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope1 = ()=>{
        const scopeHooks = scopes.map((createScope)=>({
                useScope: createScope(),
                scopeName: createScope.scopeName
            })
        );
        return function useComposedScopes(overrideScopes) {
            const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope: useScope , scopeName: scopeName  })=>{
                // We are calling a hook inside a callback which React warns against to avoid inconsistent
                // renders, however, scoping doesn't have render side effects so we ignore the rule.
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes,
                    ...currentScope
                };
            }, {});
            return (0,react.useMemo)(()=>({
                    [`__scope${baseScope.scopeName}`]: nextScopes1
                })
            , [
                nextScopes1
            ]);
        };
    };
    createScope1.scopeName = baseScope.scopeName;
    return createScope1;
}





//# sourceMappingURL=index.module.js.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js



/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */ function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
    const callbackRef = (0,react.useRef)(callback);
    (0,react.useEffect)(()=>{
        callbackRef.current = callback;
    }); // https://github.com/facebook/react/issues/19240
    return (0,react.useMemo)(()=>(...args)=>{
            var _callbackRef$current;
            return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
        }
    , []);
}





//# sourceMappingURL=index.module.js.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-direction/dist/index.module.js



const $f631663db3294ace$var$DirectionContext = /*#__PURE__*/ (0,react.createContext)(undefined);
/* -------------------------------------------------------------------------------------------------
 * Direction
 * -----------------------------------------------------------------------------------------------*/ const $f631663db3294ace$export$c760c09fdd558351 = (props)=>{
    const { dir: dir , children: children  } = props;
    return /*#__PURE__*/ $7Gjcd$createElement($f631663db3294ace$var$DirectionContext.Provider, {
        value: dir
    }, children);
};
/* -----------------------------------------------------------------------------------------------*/ function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
    const globalDir = (0,react.useContext)($f631663db3294ace$var$DirectionContext);
    return localDir || globalDir || 'ltr';
}
const $f631663db3294ace$export$2881499e37b75b9a = (/* unused pure expression or super */ null && ($f631663db3294ace$export$c760c09fdd558351));





//# sourceMappingURL=index.module.js.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/number/dist/index.module.js
function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}





//# sourceMappingURL=index.module.js.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/primitive/dist/index.module.js
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented: checkForDefaultPrevented = true  } = {}) {
    return function handleEvent(event) {
        originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
    };
}





//# sourceMappingURL=index.module.js.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-scroll-area/dist/index.module.js
























function $6c2e24571c90391f$export$3e6543de14f8614f(initialState, machine) {
    return (0,react.useReducer)((state, event)=>{
        const nextState = machine[state][event];
        return nextState !== null && nextState !== void 0 ? nextState : state;
    }, initialState);
}


/* -------------------------------------------------------------------------------------------------
 * ScrollArea
 * -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$SCROLL_AREA_NAME = 'ScrollArea';
const [$57acba87d6e25586$var$createScrollAreaContext, $57acba87d6e25586$export$488468afe3a6f2b1] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($57acba87d6e25586$var$SCROLL_AREA_NAME);
const [$57acba87d6e25586$var$ScrollAreaProvider, $57acba87d6e25586$var$useScrollAreaContext] = $57acba87d6e25586$var$createScrollAreaContext($57acba87d6e25586$var$SCROLL_AREA_NAME);
const $57acba87d6e25586$export$ccf8d8d7bbf3c2cc = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { __scopeScrollArea: __scopeScrollArea , type: type = 'hover' , dir: dir , scrollHideDelay: scrollHideDelay = 600 , ...scrollAreaProps } = props;
    const [scrollArea, setScrollArea] = (0,react.useState)(null);
    const [viewport, setViewport] = (0,react.useState)(null);
    const [content, setContent] = (0,react.useState)(null);
    const [scrollbarX, setScrollbarX] = (0,react.useState)(null);
    const [scrollbarY, setScrollbarY] = (0,react.useState)(null);
    const [cornerWidth, setCornerWidth] = (0,react.useState)(0);
    const [cornerHeight, setCornerHeight] = (0,react.useState)(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = (0,react.useState)(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = (0,react.useState)(false);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>setScrollArea(node)
    );
    const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
    return /*#__PURE__*/ (0,react.createElement)($57acba87d6e25586$var$ScrollAreaProvider, {
        scope: __scopeScrollArea,
        type: type,
        dir: direction,
        scrollHideDelay: scrollHideDelay,
        scrollArea: scrollArea,
        viewport: viewport,
        onViewportChange: setViewport,
        content: content,
        onContentChange: setContent,
        scrollbarX: scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled: scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY: scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled: scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight
    }, /*#__PURE__*/ (0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, (0,esm_extends/* default */.Z)({
        dir: direction
    }, scrollAreaProps, {
        ref: composedRefs,
        style: {
            position: 'relative',
            // Pass corner sizes as CSS vars to reduce re-renders of context consumers
            ['--radix-scroll-area-corner-width']: cornerWidth + 'px',
            ['--radix-scroll-area-corner-height']: cornerHeight + 'px',
            ...props.style
        }
    })));
});
/*#__PURE__*/ Object.assign($57acba87d6e25586$export$ccf8d8d7bbf3c2cc, {
    displayName: $57acba87d6e25586$var$SCROLL_AREA_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ScrollAreaViewport
 * -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$VIEWPORT_NAME = 'ScrollAreaViewport';
const $57acba87d6e25586$export$a21cbf9f11fca853 = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { __scopeScrollArea: __scopeScrollArea , children: children , ...viewportProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$VIEWPORT_NAME, __scopeScrollArea);
    const ref = (0,react.useRef)(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onViewportChange);
    return /*#__PURE__*/ (0,react.createElement)(react.Fragment, null, /*#__PURE__*/ (0,react.createElement)("style", {
        dangerouslySetInnerHTML: {
            __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
        }
    }), /*#__PURE__*/ (0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, (0,esm_extends/* default */.Z)({
        "data-radix-scroll-area-viewport": ""
    }, viewportProps, {
        ref: composedRefs,
        style: {
            /**
       * We don't support `visible` because the intention is to have at least one scrollbar
       * if this component is used and `visible` will behave like `auto` in that case
       * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
       *
       * We don't handle `auto` because the intention is for the native implementation
       * to be hidden if using this component. We just want to ensure the node is scrollable
       * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
       * the browser from having to work out whether to render native scrollbars or not,
       * we tell it to with the intention of hiding them in CSS.
       */ overflowX: context.scrollbarXEnabled ? 'scroll' : 'hidden',
            overflowY: context.scrollbarYEnabled ? 'scroll' : 'hidden',
            ...props.style
        }
    }), /*#__PURE__*/ (0,react.createElement)("div", {
        ref: context.onContentChange,
        style: {
            minWidth: '100%',
            display: 'table'
        }
    }, children)));
});
/*#__PURE__*/ Object.assign($57acba87d6e25586$export$a21cbf9f11fca853, {
    displayName: $57acba87d6e25586$var$VIEWPORT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ScrollAreaScrollbar
 * -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$SCROLLBAR_NAME = 'ScrollAreaScrollbar';
const $57acba87d6e25586$export$2fabd85d0eba3c57 = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { forceMount: forceMount , ...scrollbarProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange: onScrollbarXEnabledChange , onScrollbarYEnabledChange: onScrollbarYEnabledChange  } = context;
    const isHorizontal = props.orientation === 'horizontal';
    (0,react.useEffect)(()=>{
        isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
        return ()=>{
            isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
        };
    }, [
        isHorizontal,
        onScrollbarXEnabledChange,
        onScrollbarYEnabledChange
    ]);
    return context.type === 'hover' ? /*#__PURE__*/ (0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarHover, (0,esm_extends/* default */.Z)({}, scrollbarProps, {
        ref: forwardedRef,
        forceMount: forceMount
    })) : context.type === 'scroll' ? /*#__PURE__*/ (0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarScroll, (0,esm_extends/* default */.Z)({}, scrollbarProps, {
        ref: forwardedRef,
        forceMount: forceMount
    })) : context.type === 'auto' ? /*#__PURE__*/ (0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarAuto, (0,esm_extends/* default */.Z)({}, scrollbarProps, {
        ref: forwardedRef,
        forceMount: forceMount
    })) : context.type === 'always' ? /*#__PURE__*/ (0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible, (0,esm_extends/* default */.Z)({}, scrollbarProps, {
        ref: forwardedRef
    })) : null;
});
/*#__PURE__*/ Object.assign($57acba87d6e25586$export$2fabd85d0eba3c57, {
    displayName: $57acba87d6e25586$var$SCROLLBAR_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$ScrollAreaScrollbarHover = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { forceMount: forceMount , ...scrollbarProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
    const [visible, setVisible] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        const scrollArea = context.scrollArea;
        let hideTimer = 0;
        if (scrollArea) {
            const handlePointerEnter = ()=>{
                window.clearTimeout(hideTimer);
                setVisible(true);
            };
            const handlePointerLeave = ()=>{
                hideTimer = window.setTimeout(()=>setVisible(false)
                , context.scrollHideDelay);
            };
            scrollArea.addEventListener('pointerenter', handlePointerEnter);
            scrollArea.addEventListener('pointerleave', handlePointerLeave);
            return ()=>{
                window.clearTimeout(hideTimer);
                scrollArea.removeEventListener('pointerenter', handlePointerEnter);
                scrollArea.removeEventListener('pointerleave', handlePointerLeave);
            };
        }
    }, [
        context.scrollArea,
        context.scrollHideDelay
    ]);
    return /*#__PURE__*/ (0,react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || visible
    }, /*#__PURE__*/ (0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarAuto, (0,esm_extends/* default */.Z)({
        "data-state": visible ? 'visible' : 'hidden'
    }, scrollbarProps, {
        ref: forwardedRef
    })));
});
const $57acba87d6e25586$var$ScrollAreaScrollbarScroll = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { forceMount: forceMount , ...scrollbarProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
    const isHorizontal = props.orientation === 'horizontal';
    const debounceScrollEnd = $57acba87d6e25586$var$useDebounceCallback(()=>send('SCROLL_END')
    , 100);
    const [state, send] = $6c2e24571c90391f$export$3e6543de14f8614f('hidden', {
        hidden: {
            SCROLL: 'scrolling'
        },
        scrolling: {
            SCROLL_END: 'idle',
            POINTER_ENTER: 'interacting'
        },
        interacting: {
            SCROLL: 'interacting',
            POINTER_LEAVE: 'idle'
        },
        idle: {
            HIDE: 'hidden',
            SCROLL: 'scrolling',
            POINTER_ENTER: 'interacting'
        }
    });
    (0,react.useEffect)(()=>{
        if (state === 'idle') {
            const hideTimer = window.setTimeout(()=>send('HIDE')
            , context.scrollHideDelay);
            return ()=>window.clearTimeout(hideTimer)
            ;
        }
    }, [
        state,
        context.scrollHideDelay,
        send
    ]);
    (0,react.useEffect)(()=>{
        const viewport = context.viewport;
        const scrollDirection = isHorizontal ? 'scrollLeft' : 'scrollTop';
        if (viewport) {
            let prevScrollPos = viewport[scrollDirection];
            const handleScroll = ()=>{
                const scrollPos = viewport[scrollDirection];
                const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
                if (hasScrollInDirectionChanged) {
                    send('SCROLL');
                    debounceScrollEnd();
                }
                prevScrollPos = scrollPos;
            };
            viewport.addEventListener('scroll', handleScroll);
            return ()=>viewport.removeEventListener('scroll', handleScroll)
            ;
        }
    }, [
        context.viewport,
        isHorizontal,
        send,
        debounceScrollEnd
    ]);
    return /*#__PURE__*/ (0,react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || state !== 'hidden'
    }, /*#__PURE__*/ (0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible, (0,esm_extends/* default */.Z)({
        "data-state": state === 'hidden' ? 'hidden' : 'visible'
    }, scrollbarProps, {
        ref: forwardedRef,
        onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, ()=>send('POINTER_ENTER')
        ),
        onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, ()=>send('POINTER_LEAVE')
        )
    })));
});
const $57acba87d6e25586$var$ScrollAreaScrollbarAuto = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
    const { forceMount: forceMount , ...scrollbarProps } = props;
    const [visible, setVisible] = (0,react.useState)(false);
    const isHorizontal = props.orientation === 'horizontal';
    const handleResize = $57acba87d6e25586$var$useDebounceCallback(()=>{
        if (context.viewport) {
            const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
            const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
            setVisible(isHorizontal ? isOverflowX : isOverflowY);
        }
    }, 10);
    $57acba87d6e25586$var$useResizeObserver(context.viewport, handleResize);
    $57acba87d6e25586$var$useResizeObserver(context.content, handleResize);
    return /*#__PURE__*/ (0,react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || visible
    }, /*#__PURE__*/ (0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible, (0,esm_extends/* default */.Z)({
        "data-state": visible ? 'visible' : 'hidden'
    }, scrollbarProps, {
        ref: forwardedRef
    })));
});
/* -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$ScrollAreaScrollbarVisible = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { orientation: orientation = 'vertical' , ...scrollbarProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
    const thumbRef = (0,react.useRef)(null);
    const pointerOffsetRef = (0,react.useRef)(0);
    const [sizes, setSizes] = (0,react.useState)({
        content: 0,
        viewport: 0,
        scrollbar: {
            size: 0,
            paddingStart: 0,
            paddingEnd: 0
        }
    });
    const thumbRatio = $57acba87d6e25586$var$getThumbRatio(sizes.viewport, sizes.content);
    const commonProps = {
        ...scrollbarProps,
        sizes: sizes,
        onSizesChange: setSizes,
        hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
        onThumbChange: (thumb)=>thumbRef.current = thumb
        ,
        onThumbPointerUp: ()=>pointerOffsetRef.current = 0
        ,
        onThumbPointerDown: (pointerPos)=>pointerOffsetRef.current = pointerPos
    };
    function getScrollPosition(pointerPos, dir) {
        return $57acba87d6e25586$var$getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
    }
    if (orientation === 'horizontal') return /*#__PURE__*/ (0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarX, (0,esm_extends/* default */.Z)({}, commonProps, {
        ref: forwardedRef,
        onThumbPositionChange: ()=>{
            if (context.viewport && thumbRef.current) {
                const scrollPos = context.viewport.scrollLeft;
                const offset = $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
                thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
            }
        },
        onWheelScroll: (scrollPos)=>{
            if (context.viewport) context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos)=>{
            if (context.viewport) context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
        }
    }));
    if (orientation === 'vertical') return /*#__PURE__*/ (0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarY, (0,esm_extends/* default */.Z)({}, commonProps, {
        ref: forwardedRef,
        onThumbPositionChange: ()=>{
            if (context.viewport && thumbRef.current) {
                const scrollPos = context.viewport.scrollTop;
                const offset = $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes);
                thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
            }
        },
        onWheelScroll: (scrollPos)=>{
            if (context.viewport) context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos)=>{
            if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
    }));
    return null;
});
/* -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$ScrollAreaScrollbarX = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { sizes: sizes , onSizesChange: onSizesChange , ...scrollbarProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = (0,react.useState)();
    const ref = (0,react.useRef)(null);
    const composeRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onScrollbarXChange);
    (0,react.useEffect)(()=>{
        if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [
        ref
    ]);
    return /*#__PURE__*/ (0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarImpl, (0,esm_extends/* default */.Z)({
        "data-orientation": "horizontal"
    }, scrollbarProps, {
        ref: composeRefs,
        sizes: sizes,
        style: {
            bottom: 0,
            left: context.dir === 'rtl' ? 'var(--radix-scroll-area-corner-width)' : 0,
            right: context.dir === 'ltr' ? 'var(--radix-scroll-area-corner-width)' : 0,
            ['--radix-scroll-area-thumb-width']: $57acba87d6e25586$var$getThumbSize(sizes) + 'px',
            ...props.style
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.x)
        ,
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.x)
        ,
        onWheelScroll: (event, maxScrollPos)=>{
            if (context.viewport) {
                const scrollPos = context.viewport.scrollLeft + event.deltaX;
                props.onWheelScroll(scrollPos); // prevent window scroll when wheeling on scrollbar
                if ($57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) event.preventDefault();
            }
        },
        onResize: ()=>{
            if (ref.current && context.viewport && computedStyle) onSizesChange({
                content: context.viewport.scrollWidth,
                viewport: context.viewport.offsetWidth,
                scrollbar: {
                    size: ref.current.clientWidth,
                    paddingStart: $57acba87d6e25586$var$toInt(computedStyle.paddingLeft),
                    paddingEnd: $57acba87d6e25586$var$toInt(computedStyle.paddingRight)
                }
            });
        }
    }));
});
const $57acba87d6e25586$var$ScrollAreaScrollbarY = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { sizes: sizes , onSizesChange: onSizesChange , ...scrollbarProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = (0,react.useState)();
    const ref = (0,react.useRef)(null);
    const composeRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onScrollbarYChange);
    (0,react.useEffect)(()=>{
        if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [
        ref
    ]);
    return /*#__PURE__*/ (0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarImpl, (0,esm_extends/* default */.Z)({
        "data-orientation": "vertical"
    }, scrollbarProps, {
        ref: composeRefs,
        sizes: sizes,
        style: {
            top: 0,
            right: context.dir === 'ltr' ? 0 : undefined,
            left: context.dir === 'rtl' ? 0 : undefined,
            bottom: 'var(--radix-scroll-area-corner-height)',
            ['--radix-scroll-area-thumb-height']: $57acba87d6e25586$var$getThumbSize(sizes) + 'px',
            ...props.style
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.y)
        ,
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.y)
        ,
        onWheelScroll: (event, maxScrollPos)=>{
            if (context.viewport) {
                const scrollPos = context.viewport.scrollTop + event.deltaY;
                props.onWheelScroll(scrollPos); // prevent window scroll when wheeling on scrollbar
                if ($57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) event.preventDefault();
            }
        },
        onResize: ()=>{
            if (ref.current && context.viewport && computedStyle) onSizesChange({
                content: context.viewport.scrollHeight,
                viewport: context.viewport.offsetHeight,
                scrollbar: {
                    size: ref.current.clientHeight,
                    paddingStart: $57acba87d6e25586$var$toInt(computedStyle.paddingTop),
                    paddingEnd: $57acba87d6e25586$var$toInt(computedStyle.paddingBottom)
                }
            });
        }
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const [$57acba87d6e25586$var$ScrollbarProvider, $57acba87d6e25586$var$useScrollbarContext] = $57acba87d6e25586$var$createScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME);
const $57acba87d6e25586$var$ScrollAreaScrollbarImpl = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { __scopeScrollArea: __scopeScrollArea , sizes: sizes , hasThumb: hasThumb , onThumbChange: onThumbChange , onThumbPointerUp: onThumbPointerUp , onThumbPointerDown: onThumbPointerDown , onThumbPositionChange: onThumbPositionChange , onDragScroll: onDragScroll , onWheelScroll: onWheelScroll , onResize: onResize , ...scrollbarProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, __scopeScrollArea);
    const [scrollbar, setScrollbar] = (0,react.useState)(null);
    const composeRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>setScrollbar(node)
    );
    const rectRef = (0,react.useRef)(null);
    const prevWebkitUserSelectRef = (0,react.useRef)('');
    const viewport = context.viewport;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onWheelScroll);
    const handleThumbPositionChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPositionChange);
    const handleResize = $57acba87d6e25586$var$useDebounceCallback(onResize, 10);
    function handleDragScroll(event) {
        if (rectRef.current) {
            const x = event.clientX - rectRef.current.left;
            const y = event.clientY - rectRef.current.top;
            onDragScroll({
                x: x,
                y: y
            });
        }
    }
    /**
   * We bind wheel event imperatively so we can switch off passive
   * mode for document wheel event to allow it to be prevented
   */ (0,react.useEffect)(()=>{
        const handleWheel = (event)=>{
            const element = event.target;
            const isScrollbarWheel = scrollbar === null || scrollbar === void 0 ? void 0 : scrollbar.contains(element);
            if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
        };
        document.addEventListener('wheel', handleWheel, {
            passive: false
        });
        return ()=>document.removeEventListener('wheel', handleWheel, {
                passive: false
            })
        ;
    }, [
        viewport,
        scrollbar,
        maxScrollPos,
        handleWheelScroll
    ]);
    /**
   * Update thumb position on sizes change
   */ (0,react.useEffect)(handleThumbPositionChange, [
        sizes,
        handleThumbPositionChange
    ]);
    $57acba87d6e25586$var$useResizeObserver(scrollbar, handleResize);
    $57acba87d6e25586$var$useResizeObserver(context.content, handleResize);
    return /*#__PURE__*/ (0,react.createElement)($57acba87d6e25586$var$ScrollbarProvider, {
        scope: __scopeScrollArea,
        scrollbar: scrollbar,
        hasThumb: hasThumb,
        onThumbChange: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbChange),
        onThumbPointerUp: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPointerDown)
    }, /*#__PURE__*/ (0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, (0,esm_extends/* default */.Z)({}, scrollbarProps, {
        ref: composeRefs,
        style: {
            position: 'absolute',
            ...scrollbarProps.style
        },
        onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, (event)=>{
            const mainPointer = 0;
            if (event.button === mainPointer) {
                const element = event.target;
                element.setPointerCapture(event.pointerId);
                rectRef.current = scrollbar.getBoundingClientRect(); // pointer capture doesn't prevent text selection in Safari
                // so we remove text selection manually when scrolling
                prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
                document.body.style.webkitUserSelect = 'none';
                handleDragScroll(event);
            }
        }),
        onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, handleDragScroll),
        onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event)=>{
            const element = event.target;
            element.releasePointerCapture(event.pointerId);
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            rectRef.current = null;
        })
    })));
});
/* -------------------------------------------------------------------------------------------------
 * ScrollAreaThumb
 * -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$THUMB_NAME = 'ScrollAreaThumb';
const $57acba87d6e25586$export$9fba1154677d7cd2 = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { forceMount: forceMount , ...thumbProps } = props;
    const scrollbarContext = $57acba87d6e25586$var$useScrollbarContext($57acba87d6e25586$var$THUMB_NAME, props.__scopeScrollArea);
    return /*#__PURE__*/ (0,react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || scrollbarContext.hasThumb
    }, /*#__PURE__*/ (0,react.createElement)($57acba87d6e25586$var$ScrollAreaThumbImpl, (0,esm_extends/* default */.Z)({
        ref: forwardedRef
    }, thumbProps)));
});
const $57acba87d6e25586$var$ScrollAreaThumbImpl = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { __scopeScrollArea: __scopeScrollArea , style: style , ...thumbProps } = props;
    const scrollAreaContext = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = $57acba87d6e25586$var$useScrollbarContext($57acba87d6e25586$var$THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange: onThumbPositionChange  } = scrollbarContext;
    const composedRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>scrollbarContext.onThumbChange(node)
    );
    const removeUnlinkedScrollListenerRef = (0,react.useRef)();
    const debounceScrollEnd = $57acba87d6e25586$var$useDebounceCallback(()=>{
        if (removeUnlinkedScrollListenerRef.current) {
            removeUnlinkedScrollListenerRef.current();
            removeUnlinkedScrollListenerRef.current = undefined;
        }
    }, 100);
    (0,react.useEffect)(()=>{
        const viewport = scrollAreaContext.viewport;
        if (viewport) {
            /**
       * We only bind to native scroll event so we know when scroll starts and ends.
       * When scroll starts we start a requestAnimationFrame loop that checks for
       * changes to scroll position. That rAF loop triggers our thumb position change
       * when relevant to avoid scroll-linked effects. We cancel the loop when scroll ends.
       * https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Scroll-linked_effects
       */ const handleScroll = ()=>{
                debounceScrollEnd();
                if (!removeUnlinkedScrollListenerRef.current) {
                    const listener = $57acba87d6e25586$var$addUnlinkedScrollListener(viewport, onThumbPositionChange);
                    removeUnlinkedScrollListenerRef.current = listener;
                    onThumbPositionChange();
                }
            };
            onThumbPositionChange();
            viewport.addEventListener('scroll', handleScroll);
            return ()=>viewport.removeEventListener('scroll', handleScroll)
            ;
        }
    }, [
        scrollAreaContext.viewport,
        debounceScrollEnd,
        onThumbPositionChange
    ]);
    return /*#__PURE__*/ (0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, (0,esm_extends/* default */.Z)({
        "data-state": scrollbarContext.hasThumb ? 'visible' : 'hidden'
    }, thumbProps, {
        ref: composedRef,
        style: {
            width: 'var(--radix-scroll-area-thumb-width)',
            height: 'var(--radix-scroll-area-thumb-height)',
            ...style
        },
        onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, (event)=>{
            const thumb = event.target;
            const thumbRect = thumb.getBoundingClientRect();
            const x = event.clientX - thumbRect.left;
            const y = event.clientY - thumbRect.top;
            scrollbarContext.onThumbPointerDown({
                x: x,
                y: y
            });
        }),
        onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, scrollbarContext.onThumbPointerUp)
    }));
});
/*#__PURE__*/ Object.assign($57acba87d6e25586$export$9fba1154677d7cd2, {
    displayName: $57acba87d6e25586$var$THUMB_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ScrollAreaCorner
 * -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$CORNER_NAME = 'ScrollAreaCorner';
const $57acba87d6e25586$export$56969d565df7cc4b = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== 'scroll' && hasBothScrollbarsVisible;
    return hasCorner ? /*#__PURE__*/ (0,react.createElement)($57acba87d6e25586$var$ScrollAreaCornerImpl, (0,esm_extends/* default */.Z)({}, props, {
        ref: forwardedRef
    })) : null;
});
/*#__PURE__*/ Object.assign($57acba87d6e25586$export$56969d565df7cc4b, {
    displayName: $57acba87d6e25586$var$CORNER_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$ScrollAreaCornerImpl = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { __scopeScrollArea: __scopeScrollArea , ...cornerProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$CORNER_NAME, __scopeScrollArea);
    const [width1, setWidth] = (0,react.useState)(0);
    const [height1, setHeight] = (0,react.useState)(0);
    const hasSize = Boolean(width1 && height1);
    $57acba87d6e25586$var$useResizeObserver(context.scrollbarX, ()=>{
        var _context$scrollbarX;
        const height = ((_context$scrollbarX = context.scrollbarX) === null || _context$scrollbarX === void 0 ? void 0 : _context$scrollbarX.offsetHeight) || 0;
        context.onCornerHeightChange(height);
        setHeight(height);
    });
    $57acba87d6e25586$var$useResizeObserver(context.scrollbarY, ()=>{
        var _context$scrollbarY;
        const width = ((_context$scrollbarY = context.scrollbarY) === null || _context$scrollbarY === void 0 ? void 0 : _context$scrollbarY.offsetWidth) || 0;
        context.onCornerWidthChange(width);
        setWidth(width);
    });
    return hasSize ? /*#__PURE__*/ (0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, (0,esm_extends/* default */.Z)({}, cornerProps, {
        ref: forwardedRef,
        style: {
            width: width1,
            height: height1,
            position: 'absolute',
            right: context.dir === 'ltr' ? 0 : undefined,
            left: context.dir === 'rtl' ? 0 : undefined,
            bottom: 0,
            ...props.style
        }
    })) : null;
});
/* -----------------------------------------------------------------------------------------------*/ function $57acba87d6e25586$var$toInt(value) {
    return value ? parseInt(value, 10) : 0;
}
function $57acba87d6e25586$var$getThumbRatio(viewportSize, contentSize) {
    const ratio = viewportSize / contentSize;
    return isNaN(ratio) ? 0 : ratio;
}
function $57acba87d6e25586$var$getThumbSize(sizes) {
    const ratio = $57acba87d6e25586$var$getThumbRatio(sizes.viewport, sizes.content);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio; // minimum of 18 matches macOS minimum
    return Math.max(thumbSize, 18);
}
function $57acba87d6e25586$var$getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = 'ltr') {
    const thumbSizePx = $57acba87d6e25586$var$getThumbSize(sizes);
    const thumbCenter = thumbSizePx / 2;
    const offset = pointerOffset || thumbCenter;
    const thumbOffsetFromEnd = thumbSizePx - offset;
    const minPointerPos = sizes.scrollbar.paddingStart + offset;
    const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
    const maxScrollPos = sizes.content - sizes.viewport;
    const scrollRange = dir === 'ltr' ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const interpolate = $57acba87d6e25586$var$linearScale([
        minPointerPos,
        maxPointerPos
    ], scrollRange);
    return interpolate(pointerPos);
}
function $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes, dir = 'ltr') {
    const thumbSizePx = $57acba87d6e25586$var$getThumbSize(sizes);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const scrollbar = sizes.scrollbar.size - scrollbarPadding;
    const maxScrollPos = sizes.content - sizes.viewport;
    const maxThumbPos = scrollbar - thumbSizePx;
    const scrollClampRange = dir === 'ltr' ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const scrollWithoutMomentum = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(scrollPos, scrollClampRange);
    const interpolate = $57acba87d6e25586$var$linearScale([
        0,
        maxScrollPos
    ], [
        0,
        maxThumbPos
    ]);
    return interpolate(scrollWithoutMomentum);
} // https://github.com/tmcw-up-for-adoption/simple-linear-scale/blob/master/index.js
function $57acba87d6e25586$var$linearScale(input, output) {
    return (value)=>{
        if (input[0] === input[1] || output[0] === output[1]) return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
    };
}
function $57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
    return scrollPos > 0 && scrollPos < maxScrollPos;
} // Custom scroll handler to avoid scroll-linked effects
// https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Scroll-linked_effects
const $57acba87d6e25586$var$addUnlinkedScrollListener = (node, handler = ()=>{})=>{
    let prevPosition = {
        left: node.scrollLeft,
        top: node.scrollTop
    };
    let rAF = 0;
    (function loop() {
        const position = {
            left: node.scrollLeft,
            top: node.scrollTop
        };
        const isHorizontalScroll = prevPosition.left !== position.left;
        const isVerticalScroll = prevPosition.top !== position.top;
        if (isHorizontalScroll || isVerticalScroll) handler();
        prevPosition = position;
        rAF = window.requestAnimationFrame(loop);
    })();
    return ()=>window.cancelAnimationFrame(rAF)
    ;
};
function $57acba87d6e25586$var$useDebounceCallback(callback, delay) {
    const handleCallback = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback);
    const debounceTimerRef = (0,react.useRef)(0);
    (0,react.useEffect)(()=>()=>window.clearTimeout(debounceTimerRef.current)
    , []);
    return (0,react.useCallback)(()=>{
        window.clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = window.setTimeout(handleCallback, delay);
    }, [
        handleCallback,
        delay
    ]);
}
function $57acba87d6e25586$var$useResizeObserver(element, onResize) {
    const handleResize = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onResize);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        let rAF = 0;
        if (element) {
            /**
       * Resize Observer will throw an often benign error that says `ResizeObserver loop
       * completed with undelivered notifications`. This means that ResizeObserver was not
       * able to deliver all observations within a single animation frame, so we use
       * `requestAnimationFrame` to ensure we don't deliver unnecessary observations.
       * Further reading: https://github.com/WICG/resize-observer/issues/38
       */ const resizeObserver = new ResizeObserver(()=>{
                cancelAnimationFrame(rAF);
                rAF = window.requestAnimationFrame(handleResize);
            });
            resizeObserver.observe(element);
            return ()=>{
                window.cancelAnimationFrame(rAF);
                resizeObserver.unobserve(element);
            };
        }
    }, [
        element,
        handleResize
    ]);
}
/* -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$export$be92b6f5f03c0fe9 = $57acba87d6e25586$export$ccf8d8d7bbf3c2cc;
const $57acba87d6e25586$export$d5c6c08dc2d3ca7 = $57acba87d6e25586$export$a21cbf9f11fca853;
const $57acba87d6e25586$export$9a4e88b92edfce6b = $57acba87d6e25586$export$2fabd85d0eba3c57;
const $57acba87d6e25586$export$6521433ed15a34db = $57acba87d6e25586$export$9fba1154677d7cd2;
const $57acba87d6e25586$export$ac61190d9fc311a9 = $57acba87d6e25586$export$56969d565df7cc4b;





//# sourceMappingURL=index.module.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/ScrollArea/ScrollArea.styles.js


var ScrollArea_styles_useStyles = (0,create_styles/* createStyles */.k)((theme, { scrollbarSize, offsetScrollbars, scrollbarHovered, hidden }, getRef) => ({
  root: {
    overflow: "hidden"
  },
  viewport: {
    width: "100%",
    height: "100%",
    paddingRight: offsetScrollbars ? scrollbarSize : void 0,
    paddingBottom: offsetScrollbars ? scrollbarSize : void 0
  },
  scrollbar: {
    display: hidden ? "none" : "flex",
    userSelect: "none",
    touchAction: "none",
    boxSizing: "border-box",
    padding: scrollbarSize / 5,
    transition: "background-color 150ms ease, opacity 150ms ease",
    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
      [`& .${getRef("thumb")}`]: {
        backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.white, 0.5) : theme.fn.rgba(theme.black, 0.5)
      }
    },
    '&[data-orientation="vertical"]': {
      width: scrollbarSize
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: "column",
      height: scrollbarSize
    },
    '&[data-state="hidden"]': {
      display: "none",
      opacity: 0
    }
  },
  thumb: {
    ref: getRef("thumb"),
    flex: 1,
    backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.white, 0.4) : theme.fn.rgba(theme.black, 0.4),
    borderRadius: scrollbarSize,
    position: "relative",
    transition: "background-color 150ms ease",
    display: hidden ? "none" : void 0,
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      height: "100%"
    }
  },
  corner: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    transition: "opacity 150ms ease",
    opacity: scrollbarHovered ? 1 : 0,
    display: hidden ? "none" : void 0
  }
}));

/* harmony default export */ const ScrollArea_styles = (ScrollArea_styles_useStyles);
//# sourceMappingURL=ScrollArea.styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/ScrollArea/ScrollArea.js







var ScrollArea_defProp = Object.defineProperty;
var ScrollArea_defProps = Object.defineProperties;
var ScrollArea_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ScrollArea_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ScrollArea_hasOwnProp = Object.prototype.hasOwnProperty;
var ScrollArea_propIsEnum = Object.prototype.propertyIsEnumerable;
var ScrollArea_defNormalProp = (obj, key, value) => key in obj ? ScrollArea_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ScrollArea_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ScrollArea_hasOwnProp.call(b, prop))
      ScrollArea_defNormalProp(a, prop, b[prop]);
  if (ScrollArea_getOwnPropSymbols)
    for (var prop of ScrollArea_getOwnPropSymbols(b)) {
      if (ScrollArea_propIsEnum.call(b, prop))
        ScrollArea_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ScrollArea_spreadProps = (a, b) => ScrollArea_defProps(a, ScrollArea_getOwnPropDescs(b));
var ScrollArea_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (ScrollArea_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && ScrollArea_getOwnPropSymbols)
    for (var prop of ScrollArea_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && ScrollArea_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ScrollArea_defaultProps = {
  scrollbarSize: 12,
  scrollHideDelay: 1e3,
  type: "hover",
  offsetScrollbars: false
};
const _ScrollArea = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("ScrollArea", ScrollArea_defaultProps, props), {
    children,
    className,
    classNames,
    styles,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled
  } = _a, others = ScrollArea_objRest(_a, [
    "children",
    "className",
    "classNames",
    "styles",
    "scrollbarSize",
    "scrollHideDelay",
    "type",
    "dir",
    "offsetScrollbars",
    "viewportRef",
    "onScrollPositionChange",
    "unstyled"
  ]);
  const [scrollbarHovered, setScrollbarHovered] = (0,react.useState)(false);
  const theme = (0,MantineProvider/* useMantineTheme */.rZ)();
  const { classes, cx } = ScrollArea_styles({ scrollbarSize, offsetScrollbars, scrollbarHovered, hidden: type === "never" }, { name: "ScrollArea", classNames, styles, unstyled });
  return /* @__PURE__ */ react.createElement($57acba87d6e25586$export$be92b6f5f03c0fe9, {
    type: type === "never" ? "always" : type,
    scrollHideDelay,
    dir: dir || theme.dir,
    ref,
    asChild: true
  }, /* @__PURE__ */ react.createElement(Box/* Box */.x, ScrollArea_spreadValues({
    className: cx(classes.root, className)
  }, others), /* @__PURE__ */ react.createElement($57acba87d6e25586$export$d5c6c08dc2d3ca7, {
    className: classes.viewport,
    ref: viewportRef,
    onScroll: typeof onScrollPositionChange === "function" ? ({ currentTarget }) => onScrollPositionChange({
      x: currentTarget.scrollLeft,
      y: currentTarget.scrollTop
    }) : void 0
  }, children), /* @__PURE__ */ react.createElement($57acba87d6e25586$export$9a4e88b92edfce6b, {
    orientation: "horizontal",
    className: classes.scrollbar,
    forceMount: true,
    onMouseEnter: () => setScrollbarHovered(true),
    onMouseLeave: () => setScrollbarHovered(false)
  }, /* @__PURE__ */ react.createElement($57acba87d6e25586$export$6521433ed15a34db, {
    className: classes.thumb
  })), /* @__PURE__ */ react.createElement($57acba87d6e25586$export$9a4e88b92edfce6b, {
    orientation: "vertical",
    className: classes.scrollbar,
    forceMount: true,
    onMouseEnter: () => setScrollbarHovered(true),
    onMouseLeave: () => setScrollbarHovered(false)
  }, /* @__PURE__ */ react.createElement($57acba87d6e25586$export$6521433ed15a34db, {
    className: classes.thumb
  })), /* @__PURE__ */ react.createElement($57acba87d6e25586$export$ac61190d9fc311a9, {
    className: classes.corner
  })));
});
const ScrollAreaAutosize = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("ScrollAreaAutosize", ScrollArea_defaultProps, props), {
    maxHeight,
    children,
    classNames,
    styles,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    sx
  } = _a, others = ScrollArea_objRest(_a, [
    "maxHeight",
    "children",
    "classNames",
    "styles",
    "scrollbarSize",
    "scrollHideDelay",
    "type",
    "dir",
    "offsetScrollbars",
    "viewportRef",
    "onScrollPositionChange",
    "unstyled",
    "sx"
  ]);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, ScrollArea_spreadProps(ScrollArea_spreadValues({}, others), {
    ref,
    sx: [{ display: "flex", maxHeight }, ...(0,pack_sx/* packSx */.R)(sx)]
  }), /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    sx: { display: "flex", flexDirection: "column", flex: 1 }
  }, /* @__PURE__ */ react.createElement(_ScrollArea, {
    classNames,
    styles,
    scrollHideDelay,
    scrollbarSize,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled
  }, children)));
});
ScrollAreaAutosize.displayName = "@mantine/core/ScrollAreaAutosize";
_ScrollArea.displayName = "@mantine/core/ScrollArea";
_ScrollArea.Autosize = ScrollAreaAutosize;
const ScrollArea = _ScrollArea;


//# sourceMappingURL=ScrollArea.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/utils/esm/is-element/is-element.js


function isElement(value) {
  if (Array.isArray(value) || value === null) {
    return false;
  }
  if (typeof value === "object") {
    if (value.type === react.Fragment) {
      return false;
    }
    return true;
  }
  return false;
}


//# sourceMappingURL=is-element.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/utils/assign-ref/assign-ref.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (typeof ref === "object" && ref !== null && "current" in ref) {
    ref.current = value;
  }
}


//# sourceMappingURL=assign-ref.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.js



function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}
function useMergedRef(...refs) {
  return (0,react.useCallback)(mergeRefs(...refs), refs);
}


//# sourceMappingURL=use-merged-ref.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/utils/get-default-z-index/get-default-z-index.js
var get_default_z_index = __webpack_require__(3594);
;// CONCATENATED MODULE: ./node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
function t(t){return t.split("-")[0]}function e(t){return t.split("-")[1]}function n(e){return["top","bottom"].includes(t(e))?"x":"y"}function r(t){return"y"===t?"height":"width"}function i(i,o,a){let{reference:l,floating:s}=i;const c=l.x+l.width/2-s.width/2,f=l.y+l.height/2-s.height/2,u=n(o),m=r(u),g=l[m]/2-s[m]/2,d="x"===u;let p;switch(t(o)){case"top":p={x:c,y:l.y-s.height};break;case"bottom":p={x:c,y:l.y+l.height};break;case"right":p={x:l.x+l.width,y:f};break;case"left":p={x:l.x-s.width,y:f};break;default:p={x:l.x,y:l.y}}switch(e(o)){case"start":p[u]-=g*(a&&d?-1:1);break;case"end":p[u]+=g*(a&&d?-1:1)}return p}const floating_ui_core_browser_min_o=async(t,e,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:a=[],platform:l}=n,s=a.filter(Boolean),c=await(null==l.isRTL?void 0:l.isRTL(e));let f=await l.getElementRects({reference:t,floating:e,strategy:o}),{x:u,y:m}=i(f,r,c),g=r,d={},p=0;for(let n=0;n<s.length;n++){const{name:a,fn:h}=s[n],{x:y,y:x,data:w,reset:v}=await h({x:u,y:m,initialPlacement:r,placement:g,strategy:o,middlewareData:d,rects:f,platform:l,elements:{reference:t,floating:e}});u=null!=y?y:u,m=null!=x?x:m,d={...d,[a]:{...d[a],...w}},v&&p<=50&&(p++,"object"==typeof v&&(v.placement&&(g=v.placement),v.rects&&(f=!0===v.rects?await l.getElementRects({reference:t,floating:e,strategy:o}):v.rects),({x:u,y:m}=i(f,g,c))),n=-1)}return{x:u,y:m,placement:g,strategy:o,middlewareData:d}};function a(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function l(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function s(t,e){var n;void 0===e&&(e={});const{x:r,y:i,platform:o,rects:s,elements:c,strategy:f}=t,{boundary:u="clippingAncestors",rootBoundary:m="viewport",elementContext:g="floating",altBoundary:d=!1,padding:p=0}=e,h=a(p),y=c[d?"floating"===g?"reference":"floating":g],x=l(await o.getClippingRect({element:null==(n=await(null==o.isElement?void 0:o.isElement(y)))||n?y:y.contextElement||await(null==o.getDocumentElement?void 0:o.getDocumentElement(c.floating)),boundary:u,rootBoundary:m,strategy:f})),w=l(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===g?{...s.floating,x:r,y:i}:s.reference,offsetParent:await(null==o.getOffsetParent?void 0:o.getOffsetParent(c.floating)),strategy:f}):s[g]);return{top:x.top-w.top+h.top,bottom:w.bottom-x.bottom+h.bottom,left:x.left-w.left+h.left,right:w.right-x.right+h.right}}const c=Math.min,f=Math.max;function u(t,e,n){return f(t,c(e,n))}const m=t=>({name:"arrow",options:t,async fn(i){const{element:o,padding:l=0}=null!=t?t:{},{x:s,y:c,placement:f,rects:m,platform:g}=i;if(null==o)return{};const d=a(l),p={x:s,y:c},h=n(f),y=e(f),x=r(h),w=await g.getDimensions(o),v="y"===h?"top":"left",b="y"===h?"bottom":"right",R=m.reference[x]+m.reference[h]-p[h]-m.floating[x],A=p[h]-m.reference[h],P=await(null==g.getOffsetParent?void 0:g.getOffsetParent(o));let T=P?"y"===h?P.clientHeight||0:P.clientWidth||0:0;0===T&&(T=m.floating[x]);const O=R/2-A/2,L=d[v],D=T-w[x]-d[b],k=T/2-w[x]/2+O,E=u(L,k,D),B=("start"===y?d[v]:d[b])>0&&k!==E&&m.reference[x]<=m.floating[x];return{[h]:p[h]-(B?k<L?L-k:D-k:0),data:{[h]:E,centerOffset:k-E}}}}),g={left:"right",right:"left",bottom:"top",top:"bottom"};function d(t){return t.replace(/left|right|bottom|top/g,(t=>g[t]))}function p(t,i,o){void 0===o&&(o=!1);const a=e(t),l=n(t),s=r(l);let c="x"===l?a===(o?"end":"start")?"right":"left":"start"===a?"bottom":"top";return i.reference[s]>i.floating[s]&&(c=d(c)),{main:c,cross:d(c)}}const h={start:"end",end:"start"};function y(t){return t.replace(/start|end/g,(t=>h[t]))}const x=["top","right","bottom","left"],w=x.reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]);const v=function(n){return void 0===n&&(n={}),{name:"autoPlacement",options:n,async fn(r){var i,o,a,l,c;const{x:f,y:u,rects:m,middlewareData:g,placement:d,platform:h,elements:x}=r,{alignment:v=null,allowedPlacements:b=w,autoAlignment:R=!0,...A}=n,P=function(n,r,i){return(n?[...i.filter((t=>e(t)===n)),...i.filter((t=>e(t)!==n))]:i.filter((e=>t(e)===e))).filter((t=>!n||e(t)===n||!!r&&y(t)!==t))}(v,R,b),T=await s(r,A),O=null!=(i=null==(o=g.autoPlacement)?void 0:o.index)?i:0,L=P[O];if(null==L)return{};const{main:D,cross:k}=p(L,m,await(null==h.isRTL?void 0:h.isRTL(x.floating)));if(d!==L)return{x:f,y:u,reset:{placement:P[0]}};const E=[T[t(L)],T[D],T[k]],B=[...null!=(a=null==(l=g.autoPlacement)?void 0:l.overflows)?a:[],{placement:L,overflows:E}],C=P[O+1];if(C)return{data:{index:O+1,overflows:B},reset:{placement:C}};const H=B.slice().sort(((t,e)=>t.overflows[0]-e.overflows[0])),V=null==(c=H.find((t=>{let{overflows:e}=t;return e.every((t=>t<=0))})))?void 0:c.placement,F=null!=V?V:H[0].placement;return F!==d?{data:{index:O+1,overflows:B},reset:{placement:F}}:{}}}};const b=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(n){var r;const{placement:i,middlewareData:o,rects:a,initialPlacement:l,platform:c,elements:f}=n,{mainAxis:u=!0,crossAxis:m=!0,fallbackPlacements:g,fallbackStrategy:h="bestFit",flipAlignment:x=!0,...w}=e,v=t(i),b=g||(v===l||!x?[d(l)]:function(t){const e=d(t);return[y(t),e,y(e)]}(l)),R=[l,...b],A=await s(n,w),P=[];let T=(null==(r=o.flip)?void 0:r.overflows)||[];if(u&&P.push(A[v]),m){const{main:t,cross:e}=p(i,a,await(null==c.isRTL?void 0:c.isRTL(f.floating)));P.push(A[t],A[e])}if(T=[...T,{placement:i,overflows:P}],!P.every((t=>t<=0))){var O,L;const t=(null!=(O=null==(L=o.flip)?void 0:L.index)?O:0)+1,e=R[t];if(e)return{data:{index:t,overflows:T},reset:{placement:e}};let n="bottom";switch(h){case"bestFit":{var D;const t=null==(D=T.map((t=>[t,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:D[0].placement;t&&(n=t);break}case"initialPlacement":n=l}if(i!==n)return{reset:{placement:n}}}return{}}}};function R(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function A(t){return x.some((e=>t[e]>=0))}const P=function(t){let{strategy:e="referenceHidden",...n}=void 0===t?{}:t;return{name:"hide",async fn(t){const{rects:r}=t;switch(e){case"referenceHidden":{const e=R(await s(t,{...n,elementContext:"reference"}),r.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:A(e)}}}case"escaped":{const e=R(await s(t,{...n,altBoundary:!0}),r.floating);return{data:{escapedOffsets:e,escaped:A(e)}}}default:return{}}}}};const T=function(r){return void 0===r&&(r=0),{name:"offset",options:r,async fn(i){const{x:o,y:a}=i,l=await async function(r,i){const{placement:o,platform:a,elements:l}=r,s=await(null==a.isRTL?void 0:a.isRTL(l.floating)),c=t(o),f=e(o),u="x"===n(o),m=["left","top"].includes(c)?-1:1,g=s&&u?-1:1,d="function"==typeof i?i(r):i;let{mainAxis:p,crossAxis:h,alignmentAxis:y}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return f&&"number"==typeof y&&(h="end"===f?-1*y:y),u?{x:h*g,y:p*m}:{x:p*m,y:h*g}}(i,r);return{x:o+l.x,y:a+l.y,data:l}}}};function O(t){return"x"===t?"y":"x"}const L=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(r){const{x:i,y:o,placement:a}=r,{mainAxis:l=!0,crossAxis:c=!1,limiter:f={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...m}=e,g={x:i,y:o},d=await s(r,m),p=n(t(a)),h=O(p);let y=g[p],x=g[h];if(l){const t="y"===p?"bottom":"right";y=u(y+d["y"===p?"top":"left"],y,y-d[t])}if(c){const t="y"===h?"bottom":"right";x=u(x+d["y"===h?"top":"left"],x,x-d[t])}const w=f.fn({...r,[p]:y,[h]:x});return{...w,data:{x:w.x-i,y:w.y-o}}}}},D=function(e){return void 0===e&&(e={}),{options:e,fn(r){const{x:i,y:o,placement:a,rects:l,middlewareData:s}=r,{offset:c=0,mainAxis:f=!0,crossAxis:u=!0}=e,m={x:i,y:o},g=n(a),d=O(g);let p=m[g],h=m[d];const y="function"==typeof c?c(r):c,x="number"==typeof y?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(f){const t="y"===g?"height":"width",e=l.reference[g]-l.floating[t]+x.mainAxis,n=l.reference[g]+l.reference[t]-x.mainAxis;p<e?p=e:p>n&&(p=n)}if(u){var w,v,b,R;const e="y"===g?"width":"height",n=["top","left"].includes(t(a)),r=l.reference[d]-l.floating[e]+(n&&null!=(w=null==(v=s.offset)?void 0:v[d])?w:0)+(n?0:x.crossAxis),i=l.reference[d]+l.reference[e]+(n?0:null!=(b=null==(R=s.offset)?void 0:R[d])?b:0)-(n?x.crossAxis:0);h<r?h=r:h>i&&(h=i)}return{[g]:p,[d]:h}}}},k=function(n){return void 0===n&&(n={}),{name:"size",options:n,async fn(r){const{placement:i,rects:o,platform:a,elements:l}=r,{apply:c=(()=>{}),...u}=n,m=await s(r,u),g=t(i),d=e(i);let p,h;"top"===g||"bottom"===g?(p=g,h=d===(await(null==a.isRTL?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(h=g,p="end"===d?"top":"bottom");const y=f(m.left,0),x=f(m.right,0),w=f(m.top,0),v=f(m.bottom,0),b={availableHeight:o.floating.height-(["left","right"].includes(i)?2*(0!==w||0!==v?w+v:f(m.top,m.bottom)):m[p]),availableWidth:o.floating.width-(["top","bottom"].includes(i)?2*(0!==y||0!==x?y+x:f(m.left,m.right)):m[h])};await c({...r,...b});const R=await a.getDimensions(l.floating);return o.floating.width!==R.width||o.floating.height!==R.height?{reset:{rects:!0}}:{}}}},E=function(e){return void 0===e&&(e={}),{name:"inline",options:e,async fn(r){var i;const{placement:o,elements:s,rects:u,platform:m,strategy:g}=r,{padding:d=2,x:p,y:h}=e,y=l(m.convertOffsetParentRelativeRectToViewportRelativeRect?await m.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u.reference,offsetParent:await(null==m.getOffsetParent?void 0:m.getOffsetParent(s.floating)),strategy:g}):u.reference),x=null!=(i=await(null==m.getClientRects?void 0:m.getClientRects(s.reference)))?i:[],w=a(d);const v=await m.getElementRects({reference:{getBoundingClientRect:function(){var e;if(2===x.length&&x[0].left>x[1].right&&null!=p&&null!=h)return null!=(e=x.find((t=>p>t.left-w.left&&p<t.right+w.right&&h>t.top-w.top&&h<t.bottom+w.bottom)))?e:y;if(x.length>=2){if("x"===n(o)){const e=x[0],n=x[x.length-1],r="top"===t(o),i=e.top,a=n.bottom,l=r?e.left:n.left,s=r?e.right:n.right;return{top:i,bottom:a,left:l,right:s,width:s-l,height:a-i,x:l,y:i}}const e="left"===t(o),r=f(...x.map((t=>t.right))),i=c(...x.map((t=>t.left))),a=x.filter((t=>e?t.left===i:t.right===r)),l=a[0].top,s=a[a.length-1].bottom;return{top:l,bottom:s,left:i,right:r,width:r-i,height:s-l,x:i,y:l}}return y}},floating:s.floating,strategy:g});return u.reference.x!==v.reference.x||u.reference.y!==v.reference.y||u.reference.width!==v.reference.width||u.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}};

;// CONCATENATED MODULE: ./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function floating_ui_dom_browser_min_n(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function o(t){if(null==t)return window;if(!floating_ui_dom_browser_min_n(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function floating_ui_dom_browser_min_i(t){return o(t).getComputedStyle(t)}function floating_ui_dom_browser_min_r(t){return floating_ui_dom_browser_min_n(t)?"":t?(t.nodeName||"").toLowerCase():""}function floating_ui_dom_browser_min_l(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function floating_ui_dom_browser_min_c(t){return t instanceof o(t).HTMLElement}function floating_ui_dom_browser_min_s(t){return t instanceof o(t).Element}function floating_ui_dom_browser_min_f(t){if("undefined"==typeof ShadowRoot)return!1;return t instanceof o(t).ShadowRoot||t instanceof ShadowRoot}function floating_ui_dom_browser_min_u(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=floating_ui_dom_browser_min_i(t);return/auto|scroll|overlay|hidden/.test(e+o+n)&&!["inline","contents"].includes(r)}function floating_ui_dom_browser_min_a(t){return["table","td","th"].includes(floating_ui_dom_browser_min_r(t))}function floating_ui_dom_browser_min_d(t){const e=/firefox/i.test(floating_ui_dom_browser_min_l()),n=floating_ui_dom_browser_min_i(t),o=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!o&&"none"!==o||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((t=>n.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=n.contain;return null!=e&&e.includes(t)}))}function floating_ui_dom_browser_min_h(){return!/^((?!chrome|android).)*safari/i.test(floating_ui_dom_browser_min_l())}function floating_ui_dom_browser_min_g(t){return["html","body","#document"].includes(floating_ui_dom_browser_min_r(t))}const floating_ui_dom_browser_min_m=Math.min,floating_ui_dom_browser_min_p=Math.max,floating_ui_dom_browser_min_w=Math.round;function floating_ui_dom_browser_min_v(t,e,n){var i,r,l,f;void 0===e&&(e=!1),void 0===n&&(n=!1);const u=t.getBoundingClientRect();let a=1,d=1;e&&floating_ui_dom_browser_min_c(t)&&(a=t.offsetWidth>0&&floating_ui_dom_browser_min_w(u.width)/t.offsetWidth||1,d=t.offsetHeight>0&&floating_ui_dom_browser_min_w(u.height)/t.offsetHeight||1);const g=floating_ui_dom_browser_min_s(t)?o(t):window,m=!floating_ui_dom_browser_min_h()&&n,p=(u.left+(m&&null!=(i=null==(r=g.visualViewport)?void 0:r.offsetLeft)?i:0))/a,v=(u.top+(m&&null!=(l=null==(f=g.visualViewport)?void 0:f.offsetTop)?l:0))/d,y=u.width/a,x=u.height/d;return{width:y,height:x,top:v,right:p+y,bottom:v+x,left:p,x:p,y:v}}function floating_ui_dom_browser_min_y(t){return(e=t,(e instanceof o(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function floating_ui_dom_browser_min_x(t){return floating_ui_dom_browser_min_s(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function floating_ui_dom_browser_min_b(t){return floating_ui_dom_browser_min_v(floating_ui_dom_browser_min_y(t)).left+floating_ui_dom_browser_min_x(t).scrollLeft}function floating_ui_dom_browser_min_L(t,e,n){const o=floating_ui_dom_browser_min_c(e),i=floating_ui_dom_browser_min_y(e),l=floating_ui_dom_browser_min_v(t,o&&function(t){const e=floating_ui_dom_browser_min_v(t);return floating_ui_dom_browser_min_w(e.width)!==t.offsetWidth||floating_ui_dom_browser_min_w(e.height)!==t.offsetHeight}(e),"fixed"===n);let s={scrollLeft:0,scrollTop:0};const f={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==floating_ui_dom_browser_min_r(e)||floating_ui_dom_browser_min_u(i))&&(s=floating_ui_dom_browser_min_x(e)),floating_ui_dom_browser_min_c(e)){const t=floating_ui_dom_browser_min_v(e,!0);f.x=t.x+e.clientLeft,f.y=t.y+e.clientTop}else i&&(f.x=floating_ui_dom_browser_min_b(i));return{x:l.left+s.scrollLeft-f.x,y:l.top+s.scrollTop-f.y,width:l.width,height:l.height}}function floating_ui_dom_browser_min_E(t){if("html"===floating_ui_dom_browser_min_r(t))return t;const e=t.assignedSlot||t.parentNode||(floating_ui_dom_browser_min_f(t)?t.host:null)||floating_ui_dom_browser_min_y(t);return floating_ui_dom_browser_min_f(e)?e.host:e}function floating_ui_dom_browser_min_R(t){return floating_ui_dom_browser_min_c(t)&&"fixed"!==floating_ui_dom_browser_min_i(t).position?t.offsetParent:null}function floating_ui_dom_browser_min_T(t){const e=o(t);let n=floating_ui_dom_browser_min_R(t);for(;n&&floating_ui_dom_browser_min_a(n)&&"static"===floating_ui_dom_browser_min_i(n).position;)n=floating_ui_dom_browser_min_R(n);return n&&("html"===floating_ui_dom_browser_min_r(n)||"body"===floating_ui_dom_browser_min_r(n)&&"static"===floating_ui_dom_browser_min_i(n).position&&!floating_ui_dom_browser_min_d(n))?e:n||function(t){let e=floating_ui_dom_browser_min_E(t);for(;floating_ui_dom_browser_min_c(e)&&!floating_ui_dom_browser_min_g(e);){if(floating_ui_dom_browser_min_d(e))return e;e=floating_ui_dom_browser_min_E(e)}return null}(t)||e}function W(t){const e=floating_ui_dom_browser_min_E(t);return floating_ui_dom_browser_min_g(e)?t.ownerDocument.body:floating_ui_dom_browser_min_c(e)&&floating_ui_dom_browser_min_u(e)?e:W(e)}function H(t,e){var n;void 0===e&&(e=[]);const i=W(t),r=i===(null==(n=t.ownerDocument)?void 0:n.body),l=o(i),c=r?[l].concat(l.visualViewport||[],floating_ui_dom_browser_min_u(i)?i:[]):i,s=e.concat(c);return r?s:s.concat(H(c))}function floating_ui_dom_browser_min_D(e,n,r){return"viewport"===n?l(function(t,e){const n=o(t),i=floating_ui_dom_browser_min_y(t),r=n.visualViewport;let l=i.clientWidth,c=i.clientHeight,s=0,f=0;if(r){l=r.width,c=r.height;const t=floating_ui_dom_browser_min_h();(t||!t&&"fixed"===e)&&(s=r.offsetLeft,f=r.offsetTop)}return{width:l,height:c,x:s,y:f}}(e,r)):floating_ui_dom_browser_min_s(n)?function(t,e){const n=floating_ui_dom_browser_min_v(t,!1,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft;return{top:o,left:i,x:i,y:o,right:i+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(n,r):l(function(t){var e;const n=floating_ui_dom_browser_min_y(t),o=floating_ui_dom_browser_min_x(t),r=null==(e=t.ownerDocument)?void 0:e.body,l=floating_ui_dom_browser_min_p(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),c=floating_ui_dom_browser_min_p(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0);let s=-o.scrollLeft+floating_ui_dom_browser_min_b(t);const f=-o.scrollTop;return"rtl"===floating_ui_dom_browser_min_i(r||n).direction&&(s+=floating_ui_dom_browser_min_p(n.clientWidth,r?r.clientWidth:0)-l),{width:l,height:c,x:s,y:f}}(floating_ui_dom_browser_min_y(e)))}const floating_ui_dom_browser_min_A={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:l}=t;const c="clippingAncestors"===n?function(t){let e=H(t).filter((t=>floating_ui_dom_browser_min_s(t)&&"body"!==floating_ui_dom_browser_min_r(t))),n=null;const o="fixed"===floating_ui_dom_browser_min_i(t).position;let l=o?floating_ui_dom_browser_min_E(t):t;for(;floating_ui_dom_browser_min_s(l)&&!floating_ui_dom_browser_min_g(l);){const t=floating_ui_dom_browser_min_i(l),r=floating_ui_dom_browser_min_d(l);(o?r||n:r||"static"!==t.position||!n||!["absolute","fixed"].includes(n.position))?n=t:e=e.filter((t=>t!==l)),l=floating_ui_dom_browser_min_E(l)}return e}(e):[].concat(n),f=[...c,o],u=f[0],a=f.reduce(((t,n)=>{const o=floating_ui_dom_browser_min_D(e,n,l);return t.top=floating_ui_dom_browser_min_p(o.top,t.top),t.right=floating_ui_dom_browser_min_m(o.right,t.right),t.bottom=floating_ui_dom_browser_min_m(o.bottom,t.bottom),t.left=floating_ui_dom_browser_min_p(o.left,t.left),t}),floating_ui_dom_browser_min_D(e,u,l));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=floating_ui_dom_browser_min_c(n),l=floating_ui_dom_browser_min_y(n);if(n===l)return e;let s={scrollLeft:0,scrollTop:0};const f={x:0,y:0};if((i||!i&&"fixed"!==o)&&(("body"!==floating_ui_dom_browser_min_r(n)||floating_ui_dom_browser_min_u(l))&&(s=floating_ui_dom_browser_min_x(n)),floating_ui_dom_browser_min_c(n))){const t=floating_ui_dom_browser_min_v(n,!0);f.x=t.x+n.clientLeft,f.y=t.y+n.clientTop}return{...e,x:e.x-s.scrollLeft+f.x,y:e.y-s.scrollTop+f.y}},isElement:floating_ui_dom_browser_min_s,getDimensions:function(t){if(floating_ui_dom_browser_min_c(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=floating_ui_dom_browser_min_v(t);return{width:e.width,height:e.height}},getOffsetParent:floating_ui_dom_browser_min_T,getDocumentElement:floating_ui_dom_browser_min_y,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||floating_ui_dom_browser_min_T,r=this.getDimensions;return{reference:floating_ui_dom_browser_min_L(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===floating_ui_dom_browser_min_i(t).direction};function C(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l=!0,animationFrame:c=!1}=o,f=i&&!c,u=f||r?[...floating_ui_dom_browser_min_s(t)?H(t):t.contextElement?H(t.contextElement):[],...H(e)]:[];u.forEach((t=>{f&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));let a,d=null;if(l){let o=!0;d=new ResizeObserver((()=>{o||n(),o=!1})),floating_ui_dom_browser_min_s(t)&&!c&&d.observe(t),floating_ui_dom_browser_min_s(t)||!t.contextElement||c||d.observe(t.contextElement),d.observe(e)}let h=c?floating_ui_dom_browser_min_v(t):null;return c&&function e(){const o=floating_ui_dom_browser_min_v(t);!h||o.x===h.x&&o.y===h.y&&o.width===h.width&&o.height===h.height||n();h=o,a=requestAnimationFrame(e)}(),n(),()=>{var t;u.forEach((t=>{f&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),null==(t=d)||t.disconnect(),d=null,c&&cancelAnimationFrame(a)}}const floating_ui_dom_browser_min_O=(t,n,o)=>floating_ui_core_browser_min_o(t,n,{platform:floating_ui_dom_browser_min_A,...o});

;// CONCATENATED MODULE: ./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js






var index = typeof document !== 'undefined' ? react.useLayoutEffect : react.useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }

  let length, i, keys;

  if (a && b && typeof a == 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }

      return true;
    }

    keys = Object.keys(a);
    length = keys.length;

    if (length !== Object.keys(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }

    for (i = length; i-- !== 0;) {
      const key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        continue;
      }

      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  return a !== a && b !== b;
}

function useLatestRef(value) {
  const ref = react.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

function useFloating(_temp) {
  let {
    middleware = [],
    placement = 'bottom',
    strategy = 'absolute',
    whileElementsMounted
  } = _temp === void 0 ? {} : _temp;
  const [data, setData] = react.useState({
    // Setting these to `null` will allow the consumer to determine if
    // `computePosition()` has run yet
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {}
  });
  const [latestMiddleware, setLatestMiddleware] = react.useState(middleware);

  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }

  const reference = react.useRef(null);
  const floating = react.useRef(null);
  const cleanupRef = react.useRef(null);
  const dataRef = react.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const update = react.useCallback(() => {
    if (!reference.current || !floating.current) {
      return;
    }

    floating_ui_dom_browser_min_O(reference.current, floating.current, {
      middleware: latestMiddleware,
      placement,
      strategy
    }).then(data => {
      if (isMountedRef.current && !deepEqual(dataRef.current, data)) {
        dataRef.current = data;
        react_dom.flushSync(() => {
          setData(data);
        });
      }
    });
  }, [latestMiddleware, placement, strategy]);
  index(() => {
    // Skip first update
    if (isMountedRef.current) {
      update();
    }
  }, [update]);
  const isMountedRef = react.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const runElementMountCallback = react.useCallback(() => {
    if (typeof cleanupRef.current === 'function') {
      cleanupRef.current();
      cleanupRef.current = null;
    }

    if (reference.current && floating.current) {
      if (whileElementsMountedRef.current) {
        const cleanupFn = whileElementsMountedRef.current(reference.current, floating.current, update);
        cleanupRef.current = cleanupFn;
      } else {
        update();
      }
    }
  }, [update, whileElementsMountedRef]);
  const setReference = react.useCallback(node => {
    reference.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const setFloating = react.useCallback(node => {
    floating.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const refs = react.useMemo(() => ({
    reference,
    floating
  }), []);
  return react.useMemo(() => ({ ...data,
    update,
    refs,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, setReference, setFloating]);
}

/**
 * Positions an inner element of the floating element such that it is centered
 * to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */

const arrow = options => {
  const {
    element,
    padding
  } = options;

  function isRef(value) {
    return Object.prototype.hasOwnProperty.call(value, 'current');
  }

  return {
    name: 'arrow',
    options,

    fn(args) {
      if (isRef(element)) {
        if (element.current != null) {
          return m({
            element: element.current,
            padding
          }).fn(args);
        }

        return {};
      } else if (element) {
        return m({
          element,
          padding
        }).fn(args);
      }

      return {};
    }

  };
};



;// CONCATENATED MODULE: ./node_modules/@floating-ui/react-dom-interactions/dist/floating-ui.react-dom-interactions.esm.js







var floating_ui_react_dom_interactions_esm_index = typeof document !== 'undefined' ? react.useLayoutEffect : react.useEffect;

function createPubSub() {
  const map = new Map();
  return {
    emit(event, data) {
      var _map$get;

      (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach(handler => handler(data));
    },

    on(event, listener) {
      map.set(event, [...(map.get(event) || []), listener]);
    },

    off(event, listener) {
      map.set(event, (map.get(event) || []).filter(l => l !== listener));
    }

  };
}

let serverHandoffComplete = false;
let count = 0;

const genId = () => "floating-ui-" + count++;

function useFloatingId() {
  const [id, setId] = react.useState(() => serverHandoffComplete ? genId() : undefined);
  floating_ui_react_dom_interactions_esm_index(() => {
    if (id == null) {
      setId(genId());
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  react.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
} // `toString()` prevents bundlers from trying to `import { useId } from 'react'`


const useReactId = react_namespaceObject[/*#__PURE__*/'useId'.toString()];
/**
 * Uses React 18's built-in `useId()` when available, or falls back to a
 * slightly less performant (requiring a double render) implementation for
 * earlier React versions.
 * @see https://floating-ui.com/docs/useId
 */

const useId = useReactId != null ? useReactId : useFloatingId;

const FloatingNodeContext = /*#__PURE__*/react.createContext(null);
const FloatingTreeContext = /*#__PURE__*/react.createContext(null);
const useFloatingParentNodeId = () => {
  var _React$useContext$id, _React$useContext;

  return (_React$useContext$id = (_React$useContext = react.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) != null ? _React$useContext$id : null;
};
const useFloatingTree = () => react.useContext(FloatingTreeContext);
/**
 * Registers a node into the floating tree, returning its id.
 */

const useFloatingNodeId = () => {
  const id = useId();
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  floating_ui_react_dom_interactions_esm_index(() => {
    const node = {
      id,
      parentId
    };
    tree == null ? void 0 : tree.addNode(node);
    return () => {
      tree == null ? void 0 : tree.removeNode(node);
    };
  }, [tree, id, parentId]);
  return id;
};
/**
 * Provides parent node context for nested floating elements.
 * @see https://floating-ui.com/docs/FloatingTree
 */

const FloatingNode = _ref => {
  let {
    children,
    id
  } = _ref;
  const parentId = useFloatingParentNodeId();
  return /*#__PURE__*/React.createElement(FloatingNodeContext.Provider, {
    value: React.useMemo(() => ({
      id,
      parentId
    }), [id, parentId])
  }, children);
};
/**
 * Provides context for nested floating elements when they are not children of
 * each other on the DOM (i.e. portalled to a common node, rather than their
 * respective parent).
 * @see https://floating-ui.com/docs/FloatingTree
 */

const FloatingTree = _ref2 => {
  let {
    children
  } = _ref2;
  const nodesRef = React.useRef([]);
  const addNode = React.useCallback(node => {
    nodesRef.current = [...nodesRef.current, node];
  }, []);
  const removeNode = React.useCallback(node => {
    nodesRef.current = nodesRef.current.filter(n => n !== node);
  }, []);
  const events = React.useState(() => createPubSub())[0];
  return /*#__PURE__*/React.createElement(FloatingTreeContext.Provider, {
    value: React.useMemo(() => ({
      nodesRef,
      addNode,
      removeNode,
      events
    }), [nodesRef, addNode, removeNode, events])
  }, children);
};

function getDocument(floating) {
  var _floating$ownerDocume;

  return (_floating$ownerDocume = floating == null ? void 0 : floating.ownerDocument) != null ? _floating$ownerDocume : document;
}

function getWindow(value) {
  var _getDocument$defaultV;

  return (_getDocument$defaultV = getDocument(value).defaultView) != null ? _getDocument$defaultV : window;
}

function floating_ui_react_dom_interactions_esm_isElement(value) {
  return value ? value instanceof getWindow(value).Element : false;
}
function isHTMLElement(value) {
  return value ? value instanceof getWindow(value).HTMLElement : false;
}

// `toString()` prevents bundlers from trying to `import { useInsertionEffect } from 'react'`
const useInsertionEffect = react_namespaceObject[/*#__PURE__*/'useInsertionEffect'.toString()];
function useEvent(callback) {
  const ref = react.useRef(() => {
    if (false) {}
  });

  if (useInsertionEffect) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useInsertionEffect(() => {
      ref.current = callback;
    });
  } else {
    ref.current = callback;
  }

  return react.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}

function floating_ui_react_dom_interactions_esm_useFloating(_temp) {
  let {
    open = false,
    onOpenChange: unstable_onOpenChange,
    whileElementsMounted,
    placement,
    middleware,
    strategy,
    nodeId
  } = _temp === void 0 ? {} : _temp;
  const [domReference, setDomReference] = react.useState(null);
  const tree = useFloatingTree();
  const domReferenceRef = react.useRef(null);
  const dataRef = react.useRef({});
  const events = react.useState(() => createPubSub())[0];
  const position = useFloating({
    placement,
    middleware,
    strategy,
    whileElementsMounted
  });
  const onOpenChange = useEvent(unstable_onOpenChange);
  const refs = react.useMemo(() => ({ ...position.refs,
    domReference: domReferenceRef
  }), [position.refs]);
  const context = react.useMemo(() => ({ ...position,
    refs,
    dataRef,
    nodeId,
    events,
    open,
    onOpenChange,
    _: {
      domReference
    }
  }), [position, nodeId, events, open, onOpenChange, refs, domReference]);
  floating_ui_react_dom_interactions_esm_index(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find(node => node.id === nodeId);

    if (node) {
      node.context = context;
    }
  });
  const {
    reference
  } = position;
  const setReference = react.useCallback(node => {
    if (floating_ui_react_dom_interactions_esm_isElement(node) || node === null) {
      context.refs.domReference.current = node;
      setDomReference(node);
    }

    reference(node);
  }, [reference, context.refs]);
  return react.useMemo(() => ({ ...position,
    context,
    refs,
    reference: setReference
  }), [position, refs, context, setReference]);
}

function mergeProps(userProps, propsList, elementKey) {
  const map = new Map();
  return { ...(elementKey === 'floating' && {
      tabIndex: -1
    }),
    ...userProps,
    ...propsList.map(value => value ? value[elementKey] : null).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }

      Object.entries(props).forEach(_ref => {
        let [key, value] = _ref;

        if (key.indexOf('on') === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }

          if (typeof value === 'function') {
            var _map$get;

            (_map$get = map.get(key)) == null ? void 0 : _map$get.push(value);

            acc[key] = function () {
              var _map$get2;

              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.forEach(fn => fn(...args));
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}

const useInteractions = function (propsList) {
  if (propsList === void 0) {
    propsList = [];
  }

  // The dependencies are a dynamic array, so we can't use the linter's
  // suggestion to add it to the deps array.
  const deps = propsList;
  const getReferenceProps = react.useCallback(userProps => mergeProps(userProps, propsList, 'reference'), // eslint-disable-next-line react-hooks/exhaustive-deps
  deps);
  const getFloatingProps = react.useCallback(userProps => mergeProps(userProps, propsList, 'floating'), // eslint-disable-next-line react-hooks/exhaustive-deps
  deps);
  const getItemProps = react.useCallback(userProps => mergeProps(userProps, propsList, 'item'), // eslint-disable-next-line react-hooks/exhaustive-deps
  deps);
  return react.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
};

function getChildren(nodes, id) {
  var _nodes$filter;

  let allChildren = (_nodes$filter = nodes.filter(node => {
    var _node$context;

    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  })) != null ? _nodes$filter : [];
  let currentChildren = allChildren;

  while (currentChildren.length) {
    var _nodes$filter2;

    currentChildren = (_nodes$filter2 = nodes.filter(node => {
      var _currentChildren;

      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some(n => {
        var _node$context2;

        return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    })) != null ? _nodes$filter2 : [];
    allChildren = allChildren.concat(currentChildren);
  }

  return allChildren;
}

function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let isInside = false;
  const length = polygon.length;

  for (let i = 0, j = length - 1; i < length; j = i++) {
    const [xi, yi] = polygon[i] || [0, 0];
    const [xj, yj] = polygon[j] || [0, 0];
    const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;

    if (intersect) {
      isInside = !isInside;
    }
  }

  return isInside;
}

function safePolygon(_temp) {
  let {
    restMs = 0,
    buffer = 0.5,
    blockPointerEvents = true,
    debug = null
  } = _temp === void 0 ? {} : _temp;
  let timeoutId;
  let polygonIsDestroyed = false;

  const fn = _ref => {
    let {
      x,
      y,
      placement,
      refs,
      onClose,
      nodeId,
      tree,
      leave = false
    } = _ref;
    return function onPointerMove(event) {
      var _refs$domReference$cu, _refs$floating$curren, _refs$floating$curren2;

      clearTimeout(timeoutId);

      function close() {
        clearTimeout(timeoutId);
        onClose();
      }

      if (event.pointerType && event.pointerType !== 'mouse') {
        return;
      }

      const {
        clientX,
        clientY
      } = event;
      const target = 'composedPath' in event ? event.composedPath()[0] : event.target;
      const targetNode = target; // If the pointer is over the reference, there is no need to run the logic

      if (event.type === 'pointermove' && (_refs$domReference$cu = refs.domReference.current) != null && _refs$domReference$cu.contains(targetNode)) {
        return;
      } // Prevent overlapping floating element from being stuck in an open-close
      // loop: https://github.com/floating-ui/floating-ui/issues/1910


      if (event.type === 'mouseleave' && floating_ui_react_dom_interactions_esm_isElement(event.relatedTarget) && (_refs$floating$curren = refs.floating.current) != null && _refs$floating$curren.contains(event.relatedTarget)) {
        return;
      } // If any nested child is open, abort.


      if (tree && getChildren(tree.nodesRef.current, nodeId).some(_ref2 => {
        let {
          context
        } = _ref2;
        return context == null ? void 0 : context.open;
      })) {
        return;
      } // The cursor landed, so we destroy the polygon logic


      if ((_refs$floating$curren2 = refs.floating.current) != null && _refs$floating$curren2.contains(targetNode) && !leave) {
        polygonIsDestroyed = true;
        return;
      }

      if (!refs.domReference.current || !refs.floating.current || placement == null || x == null || y == null) {
        return;
      }

      const refRect = refs.domReference.current.getBoundingClientRect();
      const rect = refs.floating.current.getBoundingClientRect();
      const side = placement.split('-')[0];
      const cursorLeaveFromRight = x > rect.right - rect.width / 2;
      const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2; // If the pointer is leaving from the opposite side, the "buffer" logic
      // creates a point where the floating element remains open, but should be
      // ignored.
      // A constant of 1 handles floating point rounding errors.

      if (side === 'top' && y >= refRect.bottom - 1 || side === 'bottom' && y <= refRect.top + 1 || side === 'left' && x >= refRect.right - 1 || side === 'right' && x <= refRect.left + 1) {
        return close();
      } // Ignore when the cursor is within the rectangular trough between the
      // two elements. Since the triangle is created from the cursor point,
      // which can start beyond the ref element's edge, traversing back and
      // forth from the ref to the floating element can cause it to close. This
      // ensures it always remains open in that case.


      switch (side) {
        case 'top':
          if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= refRect.top + 1) {
            return;
          }

          break;

        case 'bottom':
          if (clientX >= rect.left && clientX <= rect.right && clientY >= refRect.bottom - 1 && clientY <= rect.bottom) {
            return;
          }

          break;

        case 'left':
          if (clientX >= rect.left && clientX <= refRect.left + 1 && clientY >= rect.top && clientY <= rect.bottom) {
            return;
          }

          break;

        case 'right':
          if (clientX >= refRect.right - 1 && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
            return;
          }

          break;
      }

      if (polygonIsDestroyed) {
        return close();
      }

      function getPolygon(_ref3) {
        let [x, y] = _ref3;
        const isFloatingWider = rect.width > refRect.width;
        const isFloatingTaller = rect.height > refRect.height;

        switch (side) {
          case 'top':
            {
              const cursorPointOne = [isFloatingWider ? x + buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y + buffer + 1];
              const cursorPointTwo = [isFloatingWider ? x - buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y + buffer + 1];
              const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.bottom - buffer : isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]];
              return [cursorPointOne, cursorPointTwo, ...commonPoints];
            }

          case 'bottom':
            {
              const cursorPointOne = [isFloatingWider ? x + buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y - buffer];
              const cursorPointTwo = [isFloatingWider ? x - buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y - buffer];
              const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.top + buffer : isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]];
              return [cursorPointOne, cursorPointTwo, ...commonPoints];
            }

          case 'left':
            {
              const cursorPointOne = [x + buffer + 1, isFloatingTaller ? y + buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const cursorPointTwo = [x + buffer + 1, isFloatingTaller ? y - buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const commonPoints = [[cursorLeaveFromBottom ? rect.right - buffer : isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]];
              return [...commonPoints, cursorPointOne, cursorPointTwo];
            }

          case 'right':
            {
              const cursorPointOne = [x - buffer, isFloatingTaller ? y + buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const cursorPointTwo = [x - buffer, isFloatingTaller ? y - buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const commonPoints = [[cursorLeaveFromBottom ? rect.left + buffer : isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]];
              return [cursorPointOne, cursorPointTwo, ...commonPoints];
            }
        }
      }

      const poly = getPolygon([x, y]);

      if (false) {}

      if (!isPointInPolygon([clientX, clientY], poly)) {
        close();
      } else if (restMs) {
        timeoutId = setTimeout(onClose, restMs);
      }
    };
  };

  fn.__options = {
    blockPointerEvents
  };
  return fn;
}

const DEFAULT_ID = 'floating-ui-root';
const useFloatingPortalNode = function (_temp) {
  let {
    id = DEFAULT_ID,
    enabled = true
  } = _temp === void 0 ? {} : _temp;
  const [portalEl, setPortalEl] = React.useState(null);
  floating_ui_react_dom_interactions_esm_index(() => {
    if (!enabled) {
      return;
    }

    const rootNode = document.getElementById(id);

    if (rootNode) {
      setPortalEl(rootNode);
    } else {
      const newPortalEl = document.createElement('div');
      newPortalEl.id = id;
      setPortalEl(newPortalEl);

      if (!document.body.contains(newPortalEl)) {
        document.body.appendChild(newPortalEl);
      }
    }
  }, [id, enabled]);
  return portalEl;
};
/**
 * Portals your floating element outside of the main app node.
 * @see https://floating-ui.com/docs/FloatingPortal
 */

const FloatingPortal = _ref => {
  let {
    children,
    id = DEFAULT_ID,
    root = null
  } = _ref;
  const portalNode = useFloatingPortalNode({
    id,
    enabled: !root
  });

  if (root) {
    return /*#__PURE__*/createPortal(children, root);
  }

  if (portalNode) {
    return /*#__PURE__*/createPortal(children, portalNode);
  }

  return null;
};

function floating_ui_react_dom_interactions_esm_extends() {
  floating_ui_react_dom_interactions_esm_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return floating_ui_react_dom_interactions_esm_extends.apply(this, arguments);
}

// Avoid Chrome DevTools blue warning
function getPlatform() {
  const uaData = navigator.userAgentData;

  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }

  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(_ref => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(' ');
  }

  return navigator.userAgent;
}

const identifier = 'data-floating-ui-scroll-lock';
/**
 * Provides base styling for a fixed overlay element to dim content or block
 * pointer events behind a floating element.
 * It's a regular `<div>`, so it can be styled via any CSS solution you prefer.
 * @see https://floating-ui.com/docs/FloatingOverlay
 */

const FloatingOverlay = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function FloatingOverlay(_ref, ref) {
  let {
    lockScroll = false,
    ...rest
  } = _ref;
  floating_ui_react_dom_interactions_esm_index(() => {
    var _window$visualViewpor, _window$visualViewpor2, _window$visualViewpor3, _window$visualViewpor4;

    if (!lockScroll) {
      return;
    }

    const alreadyLocked = document.body.hasAttribute(identifier);

    if (alreadyLocked) {
      return;
    }

    document.body.setAttribute(identifier, ''); // RTL <body> scrollbar

    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? 'paddingLeft' : 'paddingRight';
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth; // Only iOS doesn't respect `overflow: hidden` on document.body, and this
    // technique has fewer side effects.

    if (!/iP(hone|ad|od)|iOS/.test(getPlatform())) {
      Object.assign(document.body.style, {
        overflow: 'hidden',
        [paddingProp]: scrollbarWidth + "px"
      });
      return () => {
        document.body.removeAttribute(identifier);
        Object.assign(document.body.style, {
          overflow: '',
          [paddingProp]: ''
        });
      };
    } // iOS 12 does not support `visuaViewport`.


    const offsetLeft = (_window$visualViewpor = (_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetLeft) != null ? _window$visualViewpor : 0;
    const offsetTop = (_window$visualViewpor3 = (_window$visualViewpor4 = window.visualViewport) == null ? void 0 : _window$visualViewpor4.offsetTop) != null ? _window$visualViewpor3 : 0;
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    Object.assign(document.body.style, {
      position: 'fixed',
      overflow: 'hidden',
      top: -(scrollY - Math.floor(offsetTop)) + "px",
      left: -(scrollX - Math.floor(offsetLeft)) + "px",
      right: '0',
      [paddingProp]: scrollbarWidth + "px"
    });
    return () => {
      Object.assign(document.body.style, {
        position: '',
        overflow: '',
        top: '',
        left: '',
        right: '',
        [paddingProp]: ''
      });
      document.body.removeAttribute(identifier);
      window.scrollTo(scrollX, scrollY);
    };
  }, [lockScroll]);
  return /*#__PURE__*/React.createElement("div", floating_ui_react_dom_interactions_esm_extends({
    ref: ref
  }, rest, {
    style: {
      position: 'fixed',
      overflow: 'auto',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
})));

/**
 * Find the real active element. Traverses into shadowRoots.
 */
function activeElement(doc) {
  let activeElement = doc.activeElement;

  while (((_activeElement = activeElement) == null ? void 0 : (_activeElement$shadow = _activeElement.shadowRoot) == null ? void 0 : _activeElement$shadow.activeElement) != null) {
    var _activeElement, _activeElement$shadow;

    activeElement = activeElement.shadowRoot.activeElement;
  }

  return activeElement;
}

function getAncestors(nodes, id) {
  var _nodes$find;

  let allAncestors = [];
  let currentParentId = (_nodes$find = nodes.find(node => node.id === id)) == null ? void 0 : _nodes$find.parentId;

  while (currentParentId) {
    const currentNode = nodes.find(node => node.id === currentParentId);
    currentParentId = currentNode == null ? void 0 : currentNode.parentId;

    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }

  return allAncestors;
}

function getTarget(event) {
  if ('composedPath' in event) {
    return event.composedPath()[0];
  } // TS thinks `event` is of type never as it assumes all browsers support
  // `composedPath()`, but browsers without shadow DOM don't.


  return event.target;
}

const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled])," + "[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function isTypeableElement(element) {
  return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
}

function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

function floating_ui_react_dom_interactions_esm_useLatestRef(value) {
  const ref = (0,react.useRef)(value);
  floating_ui_react_dom_interactions_esm_index(() => {
    ref.current = value;
  });
  return ref;
}

function floating_ui_react_dom_interactions_esm_focus(el, preventScroll) {
  if (preventScroll === void 0) {
    preventScroll = false;
  }

  // `mousedown` clicks occur before `focus`, so the button will steal the
  // focus unless we wait a frame.
  requestAnimationFrame(() => {
    el == null ? void 0 : el.focus({
      preventScroll
    });
  });
}

const SELECTOR = 'select:not([disabled]),a[href],button:not([disabled]),[tabindex],' + 'iframe,object,embed,area[href],audio[controls],video[controls],' + TYPEABLE_SELECTOR;
const FocusGuard = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function FocusGuard(props, ref) {
  return /*#__PURE__*/React.createElement("span", floating_ui_react_dom_interactions_esm_extends({}, props, {
    ref: ref,
    tabIndex: 0,
    style: {
      position: 'fixed',
      opacity: '0',
      pointerEvents: 'none',
      outline: '0'
    }
  }));
})));

/**
 * Provides focus management for the floating element.
 * @see https://floating-ui.com/docs/FloatingFocusManager
 */
function FloatingFocusManager(_ref) {
  let {
    context: {
      refs,
      nodeId,
      onOpenChange,
      dataRef,
      events
    },
    children,
    order = ['content'],
    endGuard = true,
    initialFocus = 0,
    returnFocus = true,
    modal = true
  } = _ref;
  const orderRef = floating_ui_react_dom_interactions_esm_useLatestRef(order);
  const tree = useFloatingTree();
  const getTabbableElements = React.useCallback(() => {
    return orderRef.current.map(type => {
      if (type === 'reference') {
        return refs.domReference.current;
      }

      if (refs.floating.current && type === 'floating') {
        return refs.floating.current;
      }

      if (type === 'content') {
        var _refs$floating$curren, _refs$floating$curren2;

        return Array.from((_refs$floating$curren = (_refs$floating$curren2 = refs.floating.current) == null ? void 0 : _refs$floating$curren2.querySelectorAll(SELECTOR)) != null ? _refs$floating$curren : []);
      }

      return null;
    }).flat().filter(el => {
      if (el === refs.floating.current || el === refs.domReference.current) {
        return true;
      }

      if (isHTMLElement(el)) {
        var _el$getAttribute;

        const tabIndex = (_el$getAttribute = el.getAttribute('tabindex')) != null ? _el$getAttribute : '0';
        return tabIndex[0].trim() !== '-';
      }
    });
  }, [orderRef, refs]);
  React.useEffect(() => {
    if (!modal) {
      return;
    } // If the floating element has no focusable elements inside it, fallback
    // to focusing the floating element and preventing tab navigation


    const noTabbableContentElements = getTabbableElements().filter(el => el !== refs.floating.current && el !== refs.domReference.current).length === 0;

    function onKeyDown(event) {
      if (event.key === 'Tab') {
        if (noTabbableContentElements) {
          stopEvent(event);
        }

        const els = getTabbableElements();
        const target = getTarget(event);

        if (orderRef.current[0] === 'reference' && target === refs.domReference.current) {
          stopEvent(event);

          if (event.shiftKey) {
            floating_ui_react_dom_interactions_esm_focus(els[els.length - 1]);
          } else {
            floating_ui_react_dom_interactions_esm_focus(els[1]);
          }
        }

        if (orderRef.current[1] === 'floating' && target === refs.floating.current && event.shiftKey) {
          stopEvent(event);
          floating_ui_react_dom_interactions_esm_focus(els[0]);
        }
      }
    }

    const doc = getDocument(refs.floating.current);
    doc.addEventListener('keydown', onKeyDown);
    return () => {
      doc.removeEventListener('keydown', onKeyDown);
    };
  }, [modal, getTabbableElements, orderRef, refs]);
  React.useEffect(() => {
    let isPointerDown = false;

    function onFocusOut(event) {
      var _refs$floating$curren3, _getAncestors;

      const relatedTarget = event.relatedTarget;
      const focusMovedOutsideFloating = !((_refs$floating$curren3 = refs.floating.current) != null && _refs$floating$curren3.contains(relatedTarget));
      const focusMovedOutsideReference = floating_ui_react_dom_interactions_esm_isElement(refs.domReference.current) && !refs.domReference.current.contains(relatedTarget);
      const isChildOpen = tree && getChildren(tree.nodesRef.current, nodeId).length > 0;
      const isParentRelated = tree && event.currentTarget === refs.domReference.current && ((_getAncestors = getAncestors(tree.nodesRef.current, nodeId)) == null ? void 0 : _getAncestors.some(node => {
        var _node$context, _node$context$refs$fl;

        return (_node$context = node.context) == null ? void 0 : (_node$context$refs$fl = _node$context.refs.floating.current) == null ? void 0 : _node$context$refs$fl.contains(relatedTarget);
      }));

      if (focusMovedOutsideFloating && focusMovedOutsideReference && !isChildOpen && !isParentRelated && !isPointerDown) {
        onOpenChange(false);
      }
    }

    function onPointerDown() {
      // In Safari, buttons *lose* focus when pressing them. This causes the
      // reference `focusout` to fire, which closes the floating element.
      isPointerDown = true;
      setTimeout(() => {
        isPointerDown = false;
      });
    }

    const floating = refs.floating.current;
    const reference = refs.domReference.current;

    if (floating && isHTMLElement(reference)) {
      if (!modal) {
        floating.addEventListener('focusout', onFocusOut);
        reference.addEventListener('focusout', onFocusOut);
        reference.addEventListener('pointerdown', onPointerDown);
      }

      let cleanup;

      if (modal) {
        if (orderRef.current.includes('reference')) {
          cleanup = hideOthers([reference, floating]);
        } else {
          cleanup = hideOthers(floating);
        }
      }

      return () => {
        if (!modal) {
          floating.removeEventListener('focusout', onFocusOut);
          reference.removeEventListener('focusout', onFocusOut);
          reference.removeEventListener('pointerdown', onPointerDown);
        }

        cleanup == null ? void 0 : cleanup();
      };
    }
  }, [nodeId, tree, modal, onOpenChange, orderRef, dataRef, getTabbableElements, refs]);
  React.useEffect(() => {
    const floating = refs.floating.current;
    const doc = getDocument(floating);
    let returnFocusValue = returnFocus;
    let preventReturnFocusScroll = false;
    let previouslyFocusedElement = activeElement(doc);

    if (previouslyFocusedElement === doc.body && refs.domReference.current) {
      previouslyFocusedElement = refs.domReference.current;
    }

    if (typeof initialFocus === 'number') {
      var _getTabbableElements$;

      const el = (_getTabbableElements$ = getTabbableElements()[initialFocus]) != null ? _getTabbableElements$ : floating;
      floating_ui_react_dom_interactions_esm_focus(el, el === floating);
    } else if (isHTMLElement(initialFocus.current)) {
      var _initialFocus$current;

      const el = (_initialFocus$current = initialFocus.current) != null ? _initialFocus$current : floating;
      floating_ui_react_dom_interactions_esm_focus(el, el === floating);
    } // Dismissing via outside press should always ignore `returnFocus` to
    // prevent unwanted scrolling.


    function onDismiss(allowReturnFocus) {
      if (allowReturnFocus === void 0) {
        allowReturnFocus = false;
      }

      if (typeof allowReturnFocus === 'object') {
        returnFocusValue = true;
        preventReturnFocusScroll = allowReturnFocus.preventScroll;
      } else {
        returnFocusValue = allowReturnFocus;
      }
    }

    events.on('dismiss', onDismiss);
    return () => {
      events.off('dismiss', onDismiss);

      if (returnFocusValue && isHTMLElement(previouslyFocusedElement)) {
        floating_ui_react_dom_interactions_esm_focus(previouslyFocusedElement, preventReturnFocusScroll);
      }
    };
  }, [getTabbableElements, initialFocus, returnFocus, refs, events]);

  const isTypeableCombobox = () => {
    var _refs$domReference$cu;

    return ((_refs$domReference$cu = refs.domReference.current) == null ? void 0 : _refs$domReference$cu.getAttribute('role')) === 'combobox' && isTypeableElement(refs.domReference.current);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, modal && /*#__PURE__*/React.createElement(FocusGuard, {
    onFocus: event => {
      if (isTypeableCombobox()) {
        return;
      }

      stopEvent(event);
      const els = getTabbableElements();

      if (order[0] === 'reference') {
        floating_ui_react_dom_interactions_esm_focus(els[0]);
      } else {
        floating_ui_react_dom_interactions_esm_focus(els[els.length - 1]);
      }
    }
  }), /*#__PURE__*/React.cloneElement(children, order.includes('floating') ? {
    tabIndex: 0
  } : {}), modal && endGuard && /*#__PURE__*/React.createElement(FocusGuard, {
    onFocus: event => {
      if (isTypeableCombobox()) {
        return;
      }

      stopEvent(event);
      floating_ui_react_dom_interactions_esm_focus(getTabbableElements()[0]);
    }
  }));
}

function usePrevious(value) {
  const ref = (0,react.useRef)();
  floating_ui_react_dom_interactions_esm_index(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function getDelay(value, prop, pointerType) {
  if (pointerType && pointerType !== 'mouse') {
    return 0;
  }

  if (typeof value === 'number') {
    return value;
  }

  return value == null ? void 0 : value[prop];
}

/**
 * Adds hover event listeners that change the open state, like CSS :hover.
 * @see https://floating-ui.com/docs/useHover
 */
const useHover = function (context, _temp) {
  let {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = _temp === void 0 ? {} : _temp;
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    refs,
    _
  } = context;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const handleCloseRef = floating_ui_react_dom_interactions_esm_useLatestRef(handleClose);
  const delayRef = floating_ui_react_dom_interactions_esm_useLatestRef(delay);
  const previousOpen = usePrevious(open);
  const pointerTypeRef = react.useRef();
  const timeoutRef = react.useRef();
  const handlerRef = react.useRef();
  const restTimeoutRef = react.useRef();
  const blockMouseMoveRef = react.useRef(true);
  const performedPointerEventsMutationRef = react.useRef(false);
  const isHoverOpen = react.useCallback(() => {
    var _dataRef$current$open;

    const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
    return (type == null ? void 0 : type.includes('mouse')) && type !== 'mousedown';
  }, [dataRef]);
  react.useEffect(() => {
    if (!enabled) {
      return;
    }

    function onDismiss() {
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      blockMouseMoveRef.current = true;
    }

    events.on('dismiss', onDismiss);
    return () => {
      events.off('dismiss', onDismiss);
    };
  }, [enabled, events, refs]);
  react.useEffect(() => {
    if (!enabled || !handleCloseRef.current) {
      return;
    }

    function onLeave() {
      if (isHoverOpen()) {
        onOpenChange(false);
      }
    }

    const html = getDocument(refs.floating.current).documentElement;
    html.addEventListener('mouseleave', onLeave);
    return () => {
      html.removeEventListener('mouseleave', onLeave);
    };
  }, [refs, onOpenChange, enabled, handleCloseRef, dataRef, isHoverOpen]);
  const closeWithDelay = react.useCallback(function (runElseBranch) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }

    const closeDelay = getDelay(delayRef.current, 'close', pointerTypeRef.current);

    if (closeDelay && !handlerRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => onOpenChange(false), closeDelay);
    } else if (runElseBranch) {
      clearTimeout(timeoutRef.current);
      onOpenChange(false);
    }
  }, [delayRef, onOpenChange]);
  const cleanupPointerMoveHandler = react.useCallback(() => {
    if (handlerRef.current) {
      getDocument(refs.floating.current).removeEventListener('pointermove', handlerRef.current);
      handlerRef.current = undefined;
    }
  }, [refs]);
  const clearPointerEvents = react.useCallback(() => {
    getDocument(refs.floating.current).body.style.pointerEvents = '';
    performedPointerEventsMutationRef.current = false;
  }, [refs]); // Registering the mouse events on the reference directly to bypass React's
  // delegation system. If the cursor was on a disabled element and then entered
  // the reference (no gap), `mouseenter` doesn't fire in the delegation system.

  react.useEffect(() => {
    if (!enabled) {
      return;
    }

    function isClickLikeOpenEvent() {
      return dataRef.current.openEvent ? ['click', 'mousedown'].includes(dataRef.current.openEvent.type) : false;
    }

    function onMouseEnter(event) {
      clearTimeout(timeoutRef.current);
      blockMouseMoveRef.current = false;

      if (mouseOnly && pointerTypeRef.current !== 'mouse' || restMs > 0 && getDelay(delayRef.current, 'open') === 0) {
        return;
      }

      dataRef.current.openEvent = event;
      const openDelay = getDelay(delayRef.current, 'open', pointerTypeRef.current);

      if (openDelay) {
        timeoutRef.current = setTimeout(() => {
          onOpenChange(true);
        }, openDelay);
      } else {
        onOpenChange(true);
      }
    }

    function onMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }

      const doc = getDocument(refs.floating.current);
      clearTimeout(restTimeoutRef.current);

      if (handleCloseRef.current) {
        clearTimeout(timeoutRef.current);
        handlerRef.current && doc.removeEventListener('pointermove', handlerRef.current);
        handlerRef.current = handleCloseRef.current({ ...context,
          tree,
          x: event.clientX,
          y: event.clientY,

          onClose() {
            clearPointerEvents();
            cleanupPointerMoveHandler();
            closeWithDelay();
          }

        });
        doc.addEventListener('pointermove', handlerRef.current);
        return;
      }

      closeWithDelay();
    } // Ensure the floating element closes after scrolling even if the pointer
    // did not move.
    // https://github.com/floating-ui/floating-ui/discussions/1692


    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }

      handleCloseRef.current == null ? void 0 : handleCloseRef.current({ ...context,
        tree,
        x: event.clientX,
        y: event.clientY,
        leave: true,

        onClose() {
          clearPointerEvents();
          cleanupPointerMoveHandler();
          closeWithDelay();
        }

      })(event);
    }

    const floating = refs.floating.current;
    const reference = refs.domReference.current;

    if (floating_ui_react_dom_interactions_esm_isElement(reference)) {
      open && reference.addEventListener('mouseleave', onScrollMouseLeave);
      floating == null ? void 0 : floating.addEventListener('mouseleave', onScrollMouseLeave);
      move && reference.addEventListener('mousemove', onMouseEnter, {
        once: true
      });
      reference.addEventListener('mouseenter', onMouseEnter);
      reference.addEventListener('mouseleave', onMouseLeave);
      return () => {
        open && reference.removeEventListener('mouseleave', onScrollMouseLeave);
        floating == null ? void 0 : floating.removeEventListener('mouseleave', onScrollMouseLeave);
        move && reference.removeEventListener('mousemove', onMouseEnter);
        reference.removeEventListener('mouseenter', onMouseEnter);
        reference.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, [// Ensure the effect is re-run when the reference changes.
  // https://github.com/floating-ui/floating-ui/issues/1833
  _.domReference, enabled, context, mouseOnly, restMs, move, closeWithDelay, cleanupPointerMoveHandler, clearPointerEvents, onOpenChange, open, tree, refs, delayRef, handleCloseRef, dataRef]); // Block pointer-events of every element other than the reference and floating
  // while the floating element is open and has a `handleClose` handler. Also
  // handles nested floating elements.
  // https://github.com/floating-ui/floating-ui/issues/1722

  floating_ui_react_dom_interactions_esm_index(() => {
    if (!enabled) {
      return;
    }

    if (open && handleCloseRef.current && handleCloseRef.current.__options.blockPointerEvents && isHoverOpen()) {
      getDocument(refs.floating.current).body.style.pointerEvents = 'none';
      performedPointerEventsMutationRef.current = true;
      const reference = refs.domReference.current;
      const floating = refs.floating.current;

      if (floating_ui_react_dom_interactions_esm_isElement(reference) && floating) {
        var _tree$nodesRef$curren, _tree$nodesRef$curren2;

        const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find(node => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.refs.floating.current;

        if (parentFloating) {
          parentFloating.style.pointerEvents = '';
        }

        reference.style.pointerEvents = 'auto';
        floating.style.pointerEvents = 'auto';
        return () => {
          reference.style.pointerEvents = '';
          floating.style.pointerEvents = '';
        };
      }
    }
  }, [enabled, open, parentId, refs, tree, handleCloseRef, dataRef, isHoverOpen]);
  floating_ui_react_dom_interactions_esm_index(() => {
    if (previousOpen && !open) {
      pointerTypeRef.current = undefined;
      cleanupPointerMoveHandler();
      clearPointerEvents();
    }
  });
  react.useEffect(() => {
    return () => {
      cleanupPointerMoveHandler();
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);

      if (performedPointerEventsMutationRef.current) {
        clearPointerEvents();
      }
    };
  }, [enabled, cleanupPointerMoveHandler, clearPointerEvents]);
  return react.useMemo(() => {
    if (!enabled) {
      return {};
    }

    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }

    return {
      reference: {
        onPointerDown: setPointerRef,
        onPointerEnter: setPointerRef,

        onMouseMove() {
          if (open || restMs === 0) {
            return;
          }

          clearTimeout(restTimeoutRef.current);
          restTimeoutRef.current = setTimeout(() => {
            if (!blockMouseMoveRef.current) {
              onOpenChange(true);
            }
          }, restMs);
        }

      },
      floating: {
        onMouseEnter() {
          clearTimeout(timeoutRef.current);
        },

        onMouseLeave() {
          closeWithDelay(false);
        }

      }
    };
  }, [enabled, restMs, open, onOpenChange, closeWithDelay]);
};

const FloatingDelayGroupContext = /*#__PURE__*/react.createContext({
  delay: 1000,
  initialDelay: 1000,
  currentId: null,
  setCurrentId: () => {},
  setState: () => {}
});
const useDelayGroupContext = () => react.useContext(FloatingDelayGroupContext);
/**
 * Provides context for a group of floating elements that should share a
 * `delay`.
 * @see https://floating-ui.com/docs/FloatingDelayGroup
 */

const FloatingDelayGroup = _ref => {
  let {
    children,
    delay
  } = _ref;
  const [state, setState] = react.useState({
    delay,
    initialDelay: delay,
    currentId: null
  });
  const setCurrentId = react.useCallback(currentId => {
    setState(state => ({ ...state,
      currentId
    }));
  }, []);
  return /*#__PURE__*/react.createElement(FloatingDelayGroupContext.Provider, {
    value: react.useMemo(() => ({ ...state,
      setState,
      setCurrentId
    }), [state, setState, setCurrentId])
  }, children);
};
const useDelayGroup = (_ref2, _ref3) => {
  let {
    open,
    onOpenChange
  } = _ref2;
  let {
    id
  } = _ref3;
  const {
    currentId,
    initialDelay,
    setState
  } = useDelayGroupContext();
  react.useEffect(() => {
    if (currentId) {
      setState(state => ({ ...state,
        delay: {
          open: 1,
          close: getDelay(initialDelay, 'close')
        }
      }));

      if (currentId !== id) {
        onOpenChange(false);
      }
    }
  }, [id, onOpenChange, setState, currentId, initialDelay]);
  react.useEffect(() => {
    if (!open && currentId === id) {
      onOpenChange(false);
      setState(state => ({ ...state,
        delay: initialDelay,
        currentId: null
      }));
    }
  }, [open, setState, currentId, id, onOpenChange, initialDelay]);
};

function getArgsWithCustomFloatingHeight(args, prop) {
  return { ...args,
    rects: { ...args.rects,
      floating: { ...args.rects.floating,
        height: args.elements.floating[prop]
      }
    }
  };
}

const inner = options => ({
  name: 'inner',
  options,

  async fn(middlewareArguments) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      ...detectOverflowOptions
    } = options;
    const {
      rects,
      elements: {
        floating
      }
    } = middlewareArguments;
    const item = listRef.current[index];

    if (false) {}

    if (!item) {
      return {};
    }

    const nextArgs = { ...middlewareArguments,
      ...(await offset(-item.offsetTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(middlewareArguments))
    };
    const overflow = await detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, 'scrollHeight'), detectOverflowOptions);
    const refOverflow = await detectOverflow(nextArgs, { ...detectOverflowOptions,
      elementContext: 'reference'
    });
    const diffY = Math.max(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const maxHeight = Math.max(0, floating.scrollHeight - diffY - Math.max(0, overflow.bottom));
    floating.style.maxHeight = maxHeight + "px";
    floating.scrollTop = diffY; // There is not enough space, fallback to standard anchored positioning

    if (onFallbackChange) {
      if (floating.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current.length - 1) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold) {
        flushSync(() => onFallbackChange(true));
      } else {
        flushSync(() => onFallbackChange(false));
      }
    }

    if (overflowRef) {
      overflowRef.current = await detectOverflow(getArgsWithCustomFloatingHeight({ ...nextArgs,
        y: nextY
      }, 'offsetHeight'), detectOverflowOptions);
    }

    return {
      y: nextY
    };
  }

});
const useInnerOffset = (_ref, _ref2) => {
  let {
    open,
    refs
  } = _ref;
  let {
    enabled = true,
    overflowRef,
    onChange: unstable_onChange
  } = _ref2;
  const onChange = useEvent(unstable_onChange);
  const controlledScrollingRef = React.useRef(false);
  const prevScrollTopRef = React.useRef(null);
  const initialOverflowRef = React.useRef(null);
  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    function onWheel(e) {
      if (e.ctrlKey || !el || overflowRef.current == null) {
        return;
      }

      const dY = e.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? 'max' : 'min';

      if (el.scrollHeight <= el.clientHeight) {
        return;
      }

      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e.preventDefault();
        flushSync(() => {
          onChange(d => d + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test(getUserAgent())) {
        // Needed to propagate scrolling during momentum scrolling phase once
        // it gets limited by the boundary. UX improvement, not critical.
        el.scrollTop += dY;
      }
    }

    const el = refs.floating.current;

    if (open && el) {
      el.addEventListener('wheel', onWheel); // Wait for the position to be ready.

      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;

        if (overflowRef.current != null) {
          initialOverflowRef.current = { ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener('wheel', onWheel);
      };
    }
  }, [enabled, open, refs, overflowRef, onChange]);
  return React.useMemo(() => {
    if (!enabled) {
      return {};
    }

    return {
      floating: {
        onKeyDown() {
          controlledScrollingRef.current = true;
        },

        onWheel() {
          controlledScrollingRef.current = false;
        },

        onPointerMove() {
          controlledScrollingRef.current = false;
        },

        onScroll() {
          const el = refs.floating.current;

          if (!overflowRef.current || !el || !controlledScrollingRef.current) {
            return;
          }

          if (prevScrollTopRef.current !== null) {
            const scrollDiff = el.scrollTop - prevScrollTopRef.current;

            if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
              flushSync(() => onChange(d => d + scrollDiff));
            }
          } // [Firefox] Wait for the height change to have been applied.


          requestAnimationFrame(() => {
            prevScrollTopRef.current = el.scrollTop;
          });
        }

      }
    };
  }, [enabled, overflowRef, refs, onChange]);
};

/**
 * Adds relevant screen reader props for a given element `role`.
 * @see https://floating-ui.com/docs/useRole
 */
const useRole = function (_ref, _temp) {
  let {
    open
  } = _ref;
  let {
    enabled = true,
    role = 'dialog'
  } = _temp === void 0 ? {} : _temp;
  const rootId = useId();
  const referenceId = useId();
  return react.useMemo(() => {
    const floatingProps = {
      id: rootId,
      role
    };

    if (!enabled) {
      return {};
    }

    if (role === 'tooltip') {
      return {
        reference: {
          'aria-describedby': open ? rootId : undefined
        },
        floating: floatingProps
      };
    }

    return {
      reference: {
        'aria-expanded': open ? 'true' : 'false',
        'aria-haspopup': role === 'alertdialog' ? 'dialog' : role,
        'aria-controls': open ? rootId : undefined,
        ...(role === 'listbox' && {
          role: 'combobox'
        }),
        ...(role === 'menu' && {
          id: referenceId
        })
      },
      floating: { ...floatingProps,
        ...(role === 'menu' && {
          'aria-labelledby': referenceId
        })
      }
    };
  }, [enabled, role, open, rootId, referenceId]);
};

function isButtonTarget(event) {
  return isHTMLElement(event.target) && event.target.tagName === 'BUTTON';
}

function isSpaceIgnored(element) {
  return isTypeableElement(element);
}

/**
 * Adds click event listeners that change the open state.
 * @see https://floating-ui.com/docs/useClick
 */
const useClick = function (_ref, _temp) {
  let {
    open,
    onOpenChange,
    dataRef,
    refs
  } = _ref;
  let {
    enabled = true,
    event: eventOption = 'click',
    toggle = true,
    ignoreMouse = false,
    keyboardHandlers = true
  } = _temp === void 0 ? {} : _temp;
  const pointerTypeRef = React.useRef();
  return React.useMemo(() => {
    if (!enabled) {
      return {};
    }

    return {
      reference: {
        onPointerDown(event) {
          pointerTypeRef.current = event.pointerType;
        },

        onMouseDown(event) {
          // Ignore all buttons except for the "main" button.
          // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
          if (event.button !== 0) {
            return;
          }

          if (pointerTypeRef.current === 'mouse' && ignoreMouse) {
            return;
          }

          if (eventOption === 'click') {
            return;
          }

          if (open) {
            if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === 'mousedown' : true)) {
              onOpenChange(false);
            }
          } else {
            onOpenChange(true);
          }

          dataRef.current.openEvent = event.nativeEvent;
        },

        onClick(event) {
          if (eventOption === 'mousedown' && pointerTypeRef.current) {
            pointerTypeRef.current = undefined;
            return;
          }

          if (pointerTypeRef.current === 'mouse' && ignoreMouse) {
            return;
          }

          if (open) {
            if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === 'click' : true)) {
              onOpenChange(false);
            }
          } else {
            onOpenChange(true);
          }

          dataRef.current.openEvent = event.nativeEvent;
        },

        onKeyDown(event) {
          pointerTypeRef.current = undefined;

          if (!keyboardHandlers) {
            return;
          }

          if (isButtonTarget(event)) {
            return;
          }

          if (event.key === ' ' && !isSpaceIgnored(refs.domReference.current)) {
            // Prvent scrolling
            event.preventDefault();
          }

          if (event.key === 'Enter') {
            if (open) {
              if (toggle) {
                onOpenChange(false);
              }
            } else {
              onOpenChange(true);
            }
          }
        },

        onKeyUp(event) {
          if (!keyboardHandlers) {
            return;
          }

          if (isButtonTarget(event) || isSpaceIgnored(refs.domReference.current)) {
            return;
          }

          if (event.key === ' ') {
            if (open) {
              if (toggle) {
                onOpenChange(false);
              }
            } else {
              onOpenChange(true);
            }
          }
        }

      }
    };
  }, [enabled, dataRef, eventOption, ignoreMouse, keyboardHandlers, refs, toggle, open, onOpenChange]);
};

/**
 * Check whether the event.target is within the provided node. Uses event.composedPath if available for custom element support.
 *
 * @param event The event whose target/composedPath to check
 * @param node The node to check against
 * @returns Whether the event.target/composedPath is within the node.
 */
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }

  if ('composedPath' in event) {
    return event.composedPath().includes(node);
  } // TS thinks `event` is of type never as it assumes all browsers support composedPath, but browsers without shadow dom don't


  const e = event;
  return e.target != null && node.contains(e.target);
}

const bubbleHandlerKeys = {
  pointerdown: 'onPointerDown',
  mousedown: 'onMouseDown',
  click: 'onClick'
};
const captureHandlerKeys = {
  pointerdown: 'onPointerDownCapture',
  mousedown: 'onMouseDownCapture',
  click: 'onClickCapture'
};

/**
 * Adds listeners that dismiss (close) the floating element.
 * @see https://floating-ui.com/docs/useDismiss
 */
const useDismiss = function (_ref, _temp) {
  let {
    open,
    onOpenChange,
    refs,
    events,
    nodeId
  } = _ref;
  let {
    enabled = true,
    escapeKey = true,
    outsidePress = true,
    outsidePressEvent = 'pointerdown',
    referencePress = false,
    referencePressEvent = 'pointerdown',
    ancestorScroll = false,
    bubbles = true
  } = _temp === void 0 ? {} : _temp;
  const tree = useFloatingTree();
  const nested = useFloatingParentNodeId() != null;
  const insideReactTreeRef = react.useRef(false);
  react.useEffect(() => {
    if (!open || !enabled) {
      return;
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        if (!bubbles && tree && getChildren(tree.nodesRef.current, nodeId).length > 0) {
          return;
        }

        events.emit('dismiss', {
          preventScroll: false
        });
        onOpenChange(false);
      }
    }

    function onOutsidePress(event) {
      // Given developers can stop the propagation of the synthetic event,
      // we can only be confident with a positive value.
      const insideReactTree = insideReactTreeRef.current;
      insideReactTreeRef.current = false;

      if (insideReactTree) {
        return;
      }

      const target = getTarget(event); // Check if the click occurred on the scrollbar

      if (floating_ui_react_dom_interactions_esm_isElement(target) && refs.floating.current) {
        var _refs$floating$curren;

        const win = (_refs$floating$curren = refs.floating.current.ownerDocument.defaultView) != null ? _refs$floating$curren : window;
        const canScrollX = target.scrollWidth > target.clientWidth;
        const canScrollY = target.scrollHeight > target.clientHeight;
        let xCond = canScrollY && event.offsetX > target.clientWidth; // In some browsers it is possible to change the <body> (or window)
        // scrollbar to the left side, but is very rare and is difficult to
        // check for. Plus, for modal dialogs with backdrops, it is more
        // important that the backdrop is checked but not so much the window.

        if (canScrollY) {
          const isRTL = win.getComputedStyle(target).direction === 'rtl';

          if (isRTL) {
            xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
          }
        }

        if (xCond || canScrollX && event.offsetY > target.clientHeight) {
          return;
        }
      }

      const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some(node => {
        var _node$context;

        return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.refs.floating.current);
      });

      if (isEventTargetWithin(event, refs.floating.current) || isEventTargetWithin(event, refs.domReference.current) || targetIsInsideChildren) {
        return;
      }

      if (!bubbles && tree && getChildren(tree.nodesRef.current, nodeId).length > 0) {
        return;
      }

      events.emit('dismiss', nested ? {
        preventScroll: true
      } : false);
      onOpenChange(false);
    }

    function onScroll() {
      onOpenChange(false);
    }

    const doc = getDocument(refs.floating.current);
    escapeKey && doc.addEventListener('keydown', onKeyDown);
    outsidePress && doc.addEventListener(outsidePressEvent, onOutsidePress);
    let ancestors = [];

    if (ancestorScroll) {
      if (floating_ui_react_dom_interactions_esm_isElement(refs.domReference.current)) {
        ancestors = H(refs.domReference.current);
      }

      if (floating_ui_react_dom_interactions_esm_isElement(refs.floating.current)) {
        ancestors = ancestors.concat(H(refs.floating.current));
      }

      if (!floating_ui_react_dom_interactions_esm_isElement(refs.reference.current) && refs.reference.current && // @ts-expect-error is VirtualElement
      refs.reference.current.contextElement) {
        ancestors = ancestors.concat( // @ts-expect-error is VirtualElement
        H(refs.reference.current.contextElement));
      }
    } // Ignore the visual viewport for scrolling dismissal (allow pinch-zoom)


    ancestors = ancestors.filter(ancestor => {
      var _doc$defaultView;

      return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
    });
    ancestors.forEach(ancestor => {
      ancestor.addEventListener('scroll', onScroll, {
        passive: true
      });
    });
    return () => {
      escapeKey && doc.removeEventListener('keydown', onKeyDown);
      outsidePress && doc.removeEventListener(outsidePressEvent, onOutsidePress);
      ancestors.forEach(ancestor => {
        ancestor.removeEventListener('scroll', onScroll);
      });
    };
  }, [escapeKey, outsidePress, outsidePressEvent, events, tree, nodeId, open, onOpenChange, ancestorScroll, enabled, bubbles, refs, nested]);
  react.useEffect(() => {
    insideReactTreeRef.current = false;
  }, [outsidePress, outsidePressEvent]);
  return react.useMemo(() => {
    if (!enabled) {
      return {};
    }

    return {
      reference: {
        [bubbleHandlerKeys[referencePressEvent]]: () => {
          if (referencePress) {
            events.emit('dismiss');
            onOpenChange(false);
          }
        }
      },
      floating: {
        [captureHandlerKeys[outsidePressEvent]]: () => {
          insideReactTreeRef.current = true;
        }
      }
    };
  }, [enabled, events, referencePress, outsidePressEvent, referencePressEvent, onOpenChange]);
};

/**
 * Adds focus event listeners that change the open state, like CSS :focus.
 * @see https://floating-ui.com/docs/useFocus
 */
const useFocus = function (_ref, _temp) {
  let {
    open,
    onOpenChange,
    dataRef,
    refs,
    events
  } = _ref;
  let {
    enabled = true,
    keyboardOnly = true
  } = _temp === void 0 ? {} : _temp;
  const pointerTypeRef = react.useRef('');
  const blockFocusRef = react.useRef(false);
  const timeoutRef = react.useRef();
  react.useEffect(() => {
    var _doc$defaultView;

    if (!enabled) {
      return;
    }

    const doc = getDocument(refs.floating.current);
    const win = (_doc$defaultView = doc.defaultView) != null ? _doc$defaultView : window;

    function onBlur() {
      if (!open && isHTMLElement(refs.domReference.current)) {
        refs.domReference.current.blur();
      }
    }

    win.addEventListener('blur', onBlur);
    return () => {
      win.removeEventListener('blur', onBlur);
    };
  }, [refs, open, enabled]);
  react.useEffect(() => {
    if (!enabled) {
      return;
    }

    function onDismiss() {
      blockFocusRef.current = true;
    }

    events.on('dismiss', onDismiss);
    return () => {
      events.off('dismiss', onDismiss);
    };
  }, [events, enabled]);
  react.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return react.useMemo(() => {
    if (!enabled) {
      return {};
    }

    return {
      reference: {
        onPointerDown(_ref2) {
          let {
            pointerType
          } = _ref2;
          pointerTypeRef.current = pointerType;
          blockFocusRef.current = !!(pointerType && keyboardOnly);
        },

        onPointerLeave() {
          blockFocusRef.current = false;
        },

        onFocus(event) {
          var _dataRef$current$open, _refs$domReference$cu, _dataRef$current$open2;

          if (blockFocusRef.current) {
            return;
          } // Dismiss with click should ignore the subsequent `focus` trigger, but
          // only if the click originated inside the reference element.


          if (event.type === 'focus' && ((_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type) === 'mousedown' && (_refs$domReference$cu = refs.domReference.current) != null && _refs$domReference$cu.contains((_dataRef$current$open2 = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open2.target)) {
            return;
          }

          dataRef.current.openEvent = event.nativeEvent;
          onOpenChange(true);
        },

        onBlur(event) {
          const target = event.relatedTarget; // Wait for the window blur listener to fire.

          timeoutRef.current = setTimeout(() => {
            var _refs$floating$curren, _refs$domReference$cu2;

            // When focusing the reference element (e.g. regular click), then
            // clicking into the floating element, prevent it from hiding.
            // Note: it must be focusable, e.g. `tabindex="-1"`.
            if ((_refs$floating$curren = refs.floating.current) != null && _refs$floating$curren.contains(target) || (_refs$domReference$cu2 = refs.domReference.current) != null && _refs$domReference$cu2.contains(target)) {
              return;
            }

            blockFocusRef.current = false;
            onOpenChange(false);
          });
        }

      }
    };
  }, [enabled, keyboardOnly, refs, dataRef, onOpenChange]);
};

const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';

function isDifferentRow(index, cols, prevRow) {
  return Math.floor(index / cols) !== prevRow;
}

function isIndexOutOfBounds(listRef, index) {
  return index < 0 || index >= listRef.current.length;
}

function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index = startingIndex;

  do {
    var _list$index, _list$index2;

    index = index + (decrement ? -amount : amount);
  } while (index >= 0 && index <= list.length - 1 && (disabledIndices ? disabledIndices.includes(index) : list[index] == null || ((_list$index = list[index]) == null ? void 0 : _list$index.hasAttribute('disabled')) || ((_list$index2 = list[index]) == null ? void 0 : _list$index2.getAttribute('aria-disabled')) === 'true'));

  return index;
}

function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case 'vertical':
      return vertical;

    case 'horizontal':
      return horizontal;

    default:
      return vertical || horizontal;
  }
}

function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}

function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === 'Enter' || key == ' ' || key === '';
}

function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}

function isCrossOrientationCloseKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  return doSwitch(orientation, vertical, horizontal);
}

function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}

function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}

/**
 * Adds focus-managed indexed navigation via arrow keys to a list of items
 * within the floating element.
 * @see https://floating-ui.com/docs/useListNavigation
 */
const useListNavigation = function (_ref, _temp2) {
  let {
    open,
    onOpenChange,
    refs
  } = _ref;
  let {
    listRef,
    activeIndex,
    onNavigate: unstable_onNavigate = () => {},
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loop = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = 'auto',
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = undefined,
    orientation = 'vertical',
    cols = 1
  } = _temp2 === void 0 ? {
    listRef: {
      current: []
    },
    activeIndex: null,
    onNavigate: () => {}
  } : _temp2;

  if (false) {}

  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree();
  const previousOpen = usePrevious(open);
  const onNavigate = useEvent(unstable_onNavigate);
  const previousOnNavigate = useEvent(usePrevious(unstable_onNavigate));
  const focusItemOnOpenRef = React.useRef(focusItemOnOpen);
  const indexRef = React.useRef(selectedIndex != null ? selectedIndex : -1);
  const keyRef = React.useRef(null);
  const disabledIndicesRef = floating_ui_react_dom_interactions_esm_useLatestRef(disabledIndices);
  const blockPointerLeaveRef = React.useRef(false);
  const frameRef = React.useRef(-1);
  const [activeId, setActiveId] = React.useState();
  const focusItem = React.useCallback((listRef, indexRef) => {
    // `mousedown` clicks occur before `focus`, so the button will steal the
    // focus unless we wait a frame.
    frameRef.current = requestAnimationFrame(() => {
      if (virtual) {
        var _listRef$current$inde;

        setActiveId((_listRef$current$inde = listRef.current[indexRef.current]) == null ? void 0 : _listRef$current$inde.id);
      } else {
        var _listRef$current$inde2;

        (_listRef$current$inde2 = listRef.current[indexRef.current]) == null ? void 0 : _listRef$current$inde2.focus({
          preventScroll: true
        });
      }
    });
  }, [virtual]); // Sync `selectedIndex` to be the `activeIndex` upon opening the floating
  // element. Also, reset `activeIndex` upon closing the floating element.

  floating_ui_react_dom_interactions_esm_index(() => {
    if (!enabled) {
      return;
    }

    if (!previousOpen && open && focusItemOnOpenRef.current && selectedIndex != null) {
      onNavigate(selectedIndex);
    } // Unset `activeIndex`. Since the user can specify `onNavigate`
    // conditionally (onNavigate: open ? setActiveIndex : setSelectedIndex)
    // we store and call the previous function


    if (previousOpen && !open) {
      cancelAnimationFrame(frameRef.current);
      indexRef.current = -1;
      previousOnNavigate(null);
    }
  }, [open, previousOpen, selectedIndex, listRef, focusItem, enabled, onNavigate, previousOnNavigate]); // Sync `activeIndex` to be the focused item while the floating element is
  // open.

  floating_ui_react_dom_interactions_esm_index(() => {
    if (!enabled) {
      return;
    }

    if (open) {
      if (activeIndex == null) {
        if (selectedIndex != null) {
          return;
        } // Reset while the floating element was open (e.g. the list changed).


        if (previousOpen) {
          indexRef.current = -1;
          focusItem(listRef, indexRef);
        } // Initial sync


        if (!previousOpen && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
          indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
          onNavigate(indexRef.current);
          focusItem(listRef, indexRef);
        }
      } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
        indexRef.current = activeIndex;
        focusItem(listRef, indexRef);
      }
    }
  }, [open, previousOpen, activeIndex, selectedIndex, nested, listRef, onNavigate, focusItem, enabled, allowEscape, orientation, rtl, virtual, disabledIndicesRef]); // Ensure the parent floating element has focus when a nested child closes
  // to allow arrow key navigation to work after the pointer leaves the child.

  floating_ui_react_dom_interactions_esm_index(() => {
    if (!enabled) {
      return;
    }

    if (!open && previousOpen) {
      var _tree$nodesRef$curren, _tree$nodesRef$curren2;

      const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find(node => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.refs.floating.current;

      if (parentFloating && !parentFloating.contains(activeElement(getDocument(parentFloating)))) {
        parentFloating.focus({
          preventScroll: true
        });
      }
    }
  }, [enabled, open, previousOpen, tree, parentId]);
  floating_ui_react_dom_interactions_esm_index(() => {
    keyRef.current = null;
  });
  return React.useMemo(() => {
    if (!enabled) {
      return {};
    }

    const disabledIndices = disabledIndicesRef.current;

    function onKeyDown(event) {
      blockPointerLeaveRef.current = true;

      if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
        stopEvent(event);
        onOpenChange(false);

        if (isHTMLElement(refs.domReference.current)) {
          refs.domReference.current.focus();
        }

        return;
      }

      const currentIndex = indexRef.current;
      const minIndex = getMinIndex(listRef, disabledIndices);
      const maxIndex = getMaxIndex(listRef, disabledIndices);

      if (event.key === 'Home') {
        indexRef.current = minIndex;
        onNavigate(indexRef.current);
      }

      if (event.key === 'End') {
        indexRef.current = maxIndex;
        onNavigate(indexRef.current);
      } // Grid navigation


      if (cols > 1) {
        const prevIndex = indexRef.current;

        if (event.key === ARROW_UP) {
          stopEvent(event);

          if (prevIndex === -1) {
            indexRef.current = maxIndex;
          } else {
            indexRef.current = findNonDisabledIndex(listRef, {
              startingIndex: prevIndex,
              amount: cols,
              decrement: true,
              disabledIndices
            });

            if (loop && (prevIndex - cols < minIndex || indexRef.current < 0)) {
              const col = prevIndex % cols;
              const maxCol = maxIndex % cols;
              const offset = maxIndex - (maxCol - col);

              if (maxCol === col) {
                indexRef.current = maxIndex;
              } else {
                indexRef.current = maxCol > col ? offset : offset - cols;
              }
            }
          }

          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            indexRef.current = prevIndex;
          }

          onNavigate(indexRef.current);
        }

        if (event.key === ARROW_DOWN) {
          stopEvent(event);

          if (prevIndex === -1) {
            indexRef.current = minIndex;
          } else {
            indexRef.current = findNonDisabledIndex(listRef, {
              startingIndex: prevIndex,
              amount: cols,
              disabledIndices
            });

            if (loop && prevIndex + cols > maxIndex) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex % cols - cols,
                amount: cols,
                disabledIndices
              });
            }
          }

          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            indexRef.current = prevIndex;
          }

          onNavigate(indexRef.current);
        } // Remains on the same row/column


        if (orientation === 'both') {
          const prevRow = Math.floor(prevIndex / cols);

          if (event.key === ARROW_RIGHT) {
            stopEvent(event);

            if (prevIndex % cols !== cols - 1) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex,
                disabledIndices
              });

              if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                indexRef.current = findNonDisabledIndex(listRef, {
                  startingIndex: prevIndex - prevIndex % cols - 1,
                  disabledIndices
                });
              }
            } else if (loop) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex - prevIndex % cols - 1,
                disabledIndices
              });
            }

            if (isDifferentRow(indexRef.current, cols, prevRow)) {
              indexRef.current = prevIndex;
            }
          }

          if (event.key === ARROW_LEFT) {
            stopEvent(event);

            if (prevIndex % cols !== 0) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex,
                disabledIndices,
                decrement: true
              });

              if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                indexRef.current = findNonDisabledIndex(listRef, {
                  startingIndex: prevIndex + (cols - prevIndex % cols),
                  decrement: true,
                  disabledIndices
                });
              }
            } else if (loop) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex + (cols - prevIndex % cols),
                decrement: true,
                disabledIndices
              });
            }

            if (isDifferentRow(indexRef.current, cols, prevRow)) {
              indexRef.current = prevIndex;
            }
          }

          const lastRow = Math.floor(maxIndex / cols) === prevRow;

          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            if (loop && lastRow) {
              indexRef.current = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(listRef, {
                startingIndex: prevIndex - prevIndex % cols - 1,
                disabledIndices
              });
            } else {
              indexRef.current = prevIndex;
            }
          }

          onNavigate(indexRef.current);
          return;
        }
      }

      if (isMainOrientationKey(event.key, orientation)) {
        stopEvent(event); // Reset the index if no item is focused.

        if (open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
          indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
          onNavigate(indexRef.current);
          return;
        }

        if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
          if (loop) {
            indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices
            });
          } else {
            indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices
            }));
          }
        } else {
          if (loop) {
            indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices
            });
          } else {
            indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices
            }));
          }
        }

        if (isIndexOutOfBounds(listRef, indexRef.current)) {
          onNavigate(null);
        } else {
          onNavigate(indexRef.current);
        }
      }
    }

    return {
      reference: { ...(virtual && open && activeIndex != null && {
          'aria-activedescendant': activeId
        }),

        onKeyDown(event) {
          blockPointerLeaveRef.current = true;

          if (virtual && open) {
            return onKeyDown(event);
          }

          const isNavigationKey = event.key.indexOf('Arrow') === 0 || event.key === 'Enter' || event.key === ' ' || event.key === '';

          if (isNavigationKey) {
            keyRef.current = event.key;
          }

          if (nested) {
            if (isCrossOrientationOpenKey(event.key, orientation, rtl)) {
              stopEvent(event);

              if (open) {
                indexRef.current = getMinIndex(listRef, disabledIndices);
                onNavigate(indexRef.current);
              } else {
                onOpenChange(true);
              }
            }

            return;
          }

          if (isMainOrientationKey(event.key, orientation)) {
            if (selectedIndex != null) {
              indexRef.current = selectedIndex;
            }

            stopEvent(event);

            if (!open && openOnArrowKeyDown) {
              onOpenChange(true);
            } else {
              onKeyDown(event);
            }

            if (open) {
              onNavigate(indexRef.current);
            }
          }
        }

      },
      floating: {
        'aria-orientation': orientation === 'both' ? undefined : orientation,
        ...(virtual && activeIndex != null && {
          'aria-activedescendant': activeId
        }),
        onKeyDown,

        onPointerMove() {
          blockPointerLeaveRef.current = false;
        }

      },
      item: {
        onFocus(_ref2) {
          let {
            currentTarget
          } = _ref2;
          const index = listRef.current.indexOf(currentTarget);

          if (index !== -1) {
            onNavigate(index);
          }
        },

        onClick: _ref3 => {
          let {
            currentTarget
          } = _ref3;
          return currentTarget.focus({
            preventScroll: true
          });
        },
        // Safari
        ...(focusItemOnHover && {
          onMouseMove(_ref4) {
            let {
              currentTarget
            } = _ref4;
            const target = currentTarget;

            if (target) {
              const index = listRef.current.indexOf(target);

              if (index !== -1) {
                onNavigate(index);
              }
            }
          },

          onPointerLeave() {
            if (!blockPointerLeaveRef.current) {
              indexRef.current = -1;
              focusItem(listRef, indexRef);
              onNavigate(null);

              if (!virtual) {
                requestAnimationFrame(() => {
                  var _refs$floating$curren;

                  (_refs$floating$curren = refs.floating.current) == null ? void 0 : _refs$floating$curren.focus({
                    preventScroll: true
                  });
                });
              }
            }
          }

        })
      }
    };
  }, [activeId, disabledIndicesRef, listRef, enabled, orientation, rtl, virtual, open, activeIndex, nested, selectedIndex, openOnArrowKeyDown, focusItemOnHover, allowEscape, cols, loop, refs, focusItem, onNavigate, onOpenChange]);
};

/**
 * Provides a matching callback that can be used to focus an item as the user
 * types, often used in tandem with `useListNavigation()`.
 * @see https://floating-ui.com/docs/useTypeahead
 */
const useTypeahead = function (_ref, _temp) {
  var _ref2;

  let {
    open,
    dataRef
  } = _ref;
  let {
    listRef,
    activeIndex,
    onMatch: unstable_onMatch = () => {},
    enabled = true,
    findMatch = null,
    resetMs = 1000,
    ignoreKeys = [],
    selectedIndex = null
  } = _temp === void 0 ? {
    listRef: {
      current: []
    },
    activeIndex: null
  } : _temp;
  const timeoutIdRef = React.useRef();
  const stringRef = React.useRef('');
  const prevIndexRef = React.useRef((_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1);
  const matchIndexRef = React.useRef(null);
  const onMatch = useEvent(unstable_onMatch);
  const findMatchRef = floating_ui_react_dom_interactions_esm_useLatestRef(findMatch);
  const ignoreKeysRef = floating_ui_react_dom_interactions_esm_useLatestRef(ignoreKeys);
  floating_ui_react_dom_interactions_esm_index(() => {
    if (open) {
      clearTimeout(timeoutIdRef.current);
      matchIndexRef.current = null;
      stringRef.current = '';
    }
  }, [open]);
  floating_ui_react_dom_interactions_esm_index(() => {
    // Sync arrow key navigation but not typeahead navigation
    if (open && stringRef.current === '') {
      var _ref3;

      prevIndexRef.current = (_ref3 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref3 : -1;
    }
  }, [open, selectedIndex, activeIndex]);
  return React.useMemo(() => {
    if (!enabled) {
      return {};
    }

    function onKeyDown(event) {
      // Correctly scope nested non-portalled floating elements. Since the nested
      // floating element is inside of the another, we find the closest role
      // that indicates the floating element scope.
      const target = getTarget(event.nativeEvent);

      if (floating_ui_react_dom_interactions_esm_isElement(target) && (activeElement(getDocument(target)) !== event.currentTarget ? target.closest('[role="dialog"],[role="menu"],[role="listbox"],[role="tree"],[role="grid"]') !== event.currentTarget : false)) {
        return;
      }

      if (stringRef.current.length > 0 && stringRef.current[0] !== ' ') {
        dataRef.current.typing = true;

        if (event.key === ' ') {
          stopEvent(event);
        }
      }

      const listContent = listRef.current;

      if (listContent == null || ignoreKeysRef.current.includes(event.key) || // Character key
      event.key.length !== 1 || // Modifier key
      event.ctrlKey || event.metaKey || event.altKey) {
        return;
      } // Bail out if the list contains a word like "llama" or "aaron". TODO:
      // allow it in this case, too.


      const allowRapidSuccessionOfFirstLetter = listContent.every(text => {
        var _text$, _text$2;

        return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
      }); // Allows the user to cycle through items that start with the same letter
      // in rapid succession

      if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
        stringRef.current = '';
        prevIndexRef.current = matchIndexRef.current;
      }

      stringRef.current += event.key;
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = setTimeout(() => {
        stringRef.current = '';
        prevIndexRef.current = matchIndexRef.current;
        dataRef.current.typing = false;
      }, resetMs);
      const prevIndex = prevIndexRef.current;
      const orderedList = [...listContent.slice((prevIndex != null ? prevIndex : 0) + 1), ...listContent.slice(0, (prevIndex != null ? prevIndex : 0) + 1)];
      const str = findMatchRef.current ? findMatchRef.current(orderedList, stringRef.current) : orderedList.find(text => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(stringRef.current.toLocaleLowerCase())) === 0);
      const index = str ? listContent.indexOf(str) : -1;

      if (index !== -1) {
        onMatch(index);
        matchIndexRef.current = index;
      }
    }

    return {
      reference: {
        onKeyDown
      },
      floating: {
        onKeyDown
      }
    };
  }, [enabled, dataRef, listRef, resetMs, ignoreKeysRef, findMatchRef, onMatch]);
};



;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tooltip/TooltipGroup/TooltipGroup.context.js


const TooltipGroupContext = (0,react.createContext)(false);
const TooltipGroupProvider = TooltipGroupContext.Provider;
const useTooltipGroupContext = () => (0,react.useContext)(TooltipGroupContext);


//# sourceMappingURL=TooltipGroup.context.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tooltip/TooltipGroup/TooltipGroup.js




function TooltipGroup({ children, openDelay = 0, closeDelay = 0 }) {
  return /* @__PURE__ */ react.createElement(TooltipGroupProvider, {
    value: true
  }, /* @__PURE__ */ react.createElement(FloatingDelayGroup, {
    delay: { open: openDelay, close: closeDelay }
  }, children));
}
TooltipGroup.displayName = "@mantine/core/TooltipGroup";


//# sourceMappingURL=TooltipGroup.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tooltip/Tooltip.styles.js


var Tooltip_styles_defProp = Object.defineProperty;
var Tooltip_styles_defProps = Object.defineProperties;
var Tooltip_styles_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Tooltip_styles_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Tooltip_styles_hasOwnProp = Object.prototype.hasOwnProperty;
var Tooltip_styles_propIsEnum = Object.prototype.propertyIsEnumerable;
var Tooltip_styles_defNormalProp = (obj, key, value) => key in obj ? Tooltip_styles_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Tooltip_styles_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Tooltip_styles_hasOwnProp.call(b, prop))
      Tooltip_styles_defNormalProp(a, prop, b[prop]);
  if (Tooltip_styles_getOwnPropSymbols)
    for (var prop of Tooltip_styles_getOwnPropSymbols(b)) {
      if (Tooltip_styles_propIsEnum.call(b, prop))
        Tooltip_styles_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Tooltip_styles_spreadProps = (a, b) => Tooltip_styles_defProps(a, Tooltip_styles_getOwnPropDescs(b));
function getColors(theme, color) {
  if (!color) {
    return {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[9],
      color: theme.white
    };
  }
  const colors = theme.fn.variant({ variant: "filled", color, primaryFallback: false });
  return {
    backgroundColor: colors.background,
    color: colors.color
  };
}
var Tooltip_styles_useStyles = (0,create_styles/* createStyles */.k)((theme, { color, radius, width, multiline }) => ({
  tooltip: Tooltip_styles_spreadProps(Tooltip_styles_spreadValues(Tooltip_styles_spreadValues({}, theme.fn.fontStyles()), getColors(theme, color)), {
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.fn.radius(radius),
    padding: `calc(${theme.spacing.xs}px / 2) ${theme.spacing.xs}px`,
    position: "absolute",
    whiteSpace: multiline ? "unset" : "nowrap",
    pointerEvents: "none",
    width
  }),
  arrow: {
    backgroundColor: "inherit",
    border: 0,
    zIndex: 1
  }
}));

/* harmony default export */ const Tooltip_styles = (Tooltip_styles_useStyles);
//# sourceMappingURL=Tooltip.styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tooltip/Tooltip.errors.js
const TOOLTIP_ERRORS = {
  children: "Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
};


//# sourceMappingURL=Tooltip.errors.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tooltip/TooltipFloating/use-floating-tooltip.js



function useFloatingTooltip({
  offset,
  position
}) {
  const [opened, setOpened] = (0,react.useState)(false);
  const boundaryRef = (0,react.useRef)();
  const { x, y, reference, floating, refs, update, placement } = floating_ui_react_dom_interactions_esm_useFloating({
    placement: position,
    middleware: [
      L({
        crossAxis: true,
        padding: 5,
        rootBoundary: "document"
      })
    ]
  });
  const horizontalOffset = placement.includes("right") ? offset : position.includes("left") ? offset * -1 : 0;
  const verticalOffset = placement.includes("bottom") ? offset : position.includes("top") ? offset * -1 : 0;
  const handleMouseMove = (0,react.useCallback)(({ clientX, clientY }) => {
    reference({
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: clientX,
          y: clientY,
          left: clientX + horizontalOffset,
          top: clientY + verticalOffset,
          right: clientX,
          bottom: clientY
        };
      }
    });
  }, [reference]);
  (0,react.useEffect)(() => {
    if (refs.floating.current) {
      const boundary = boundaryRef.current;
      boundary.addEventListener("mousemove", handleMouseMove);
      const parents = H(refs.floating.current);
      parents.forEach((parent) => {
        parent.addEventListener("scroll", update);
      });
      return () => {
        boundary.removeEventListener("mousemove", handleMouseMove);
        parents.forEach((parent) => {
          parent.removeEventListener("scroll", update);
        });
      };
    }
    return void 0;
  }, [reference, refs.floating, update, handleMouseMove, opened]);
  return { handleMouseMove, x, y, opened, setOpened, boundaryRef, floating };
}


//# sourceMappingURL=use-floating-tooltip.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.js
var use_isomorphic_effect = __webpack_require__(129);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Portal/Portal.js





function Portal(props) {
  const { children, target, className } = (0,MantineProvider/* useComponentDefaultProps */.N4)("Portal", {}, props);
  const theme = (0,MantineProvider/* useMantineTheme */.rZ)();
  const [mounted, setMounted] = (0,react.useState)(false);
  const ref = (0,react.useRef)();
  (0,use_isomorphic_effect/* useIsomorphicEffect */.Y)(() => {
    setMounted(true);
    ref.current = !target ? document.createElement("div") : typeof target === "string" ? document.querySelector(target) : target;
    if (!target) {
      document.body.appendChild(ref.current);
    }
    return () => {
      !target && document.body.removeChild(ref.current);
    };
  }, [target]);
  if (!mounted) {
    return null;
  }
  return (0,react_dom.createPortal)(/* @__PURE__ */ react.createElement("div", {
    className,
    dir: theme.dir
  }, children), ref.current);
}
Portal.displayName = "@mantine/core/Portal";


//# sourceMappingURL=Portal.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Portal/OptionalPortal.js



var OptionalPortal_defProp = Object.defineProperty;
var OptionalPortal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var OptionalPortal_hasOwnProp = Object.prototype.hasOwnProperty;
var OptionalPortal_propIsEnum = Object.prototype.propertyIsEnumerable;
var OptionalPortal_defNormalProp = (obj, key, value) => key in obj ? OptionalPortal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var OptionalPortal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (OptionalPortal_hasOwnProp.call(b, prop))
      OptionalPortal_defNormalProp(a, prop, b[prop]);
  if (OptionalPortal_getOwnPropSymbols)
    for (var prop of OptionalPortal_getOwnPropSymbols(b)) {
      if (OptionalPortal_propIsEnum.call(b, prop))
        OptionalPortal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var OptionalPortal_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (OptionalPortal_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && OptionalPortal_getOwnPropSymbols)
    for (var prop of OptionalPortal_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && OptionalPortal_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function OptionalPortal(_a) {
  var _b = _a, { withinPortal = true, children } = _b, others = OptionalPortal_objRest(_b, ["withinPortal", "children"]);
  if (withinPortal) {
    return /* @__PURE__ */ react.createElement(Portal, OptionalPortal_spreadValues({}, others), children);
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, children);
}
OptionalPortal.displayName = "@mantine/core/OptionalPortal";


//# sourceMappingURL=OptionalPortal.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tooltip/TooltipFloating/TooltipFloating.js










var TooltipFloating_defProp = Object.defineProperty;
var TooltipFloating_defProps = Object.defineProperties;
var TooltipFloating_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var TooltipFloating_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TooltipFloating_hasOwnProp = Object.prototype.hasOwnProperty;
var TooltipFloating_propIsEnum = Object.prototype.propertyIsEnumerable;
var TooltipFloating_defNormalProp = (obj, key, value) => key in obj ? TooltipFloating_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TooltipFloating_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TooltipFloating_hasOwnProp.call(b, prop))
      TooltipFloating_defNormalProp(a, prop, b[prop]);
  if (TooltipFloating_getOwnPropSymbols)
    for (var prop of TooltipFloating_getOwnPropSymbols(b)) {
      if (TooltipFloating_propIsEnum.call(b, prop))
        TooltipFloating_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var TooltipFloating_spreadProps = (a, b) => TooltipFloating_defProps(a, TooltipFloating_getOwnPropDescs(b));
var TooltipFloating_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (TooltipFloating_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && TooltipFloating_getOwnPropSymbols)
    for (var prop of TooltipFloating_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && TooltipFloating_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TooltipFloating_defaultProps = {
  refProp: "ref",
  withinPortal: true,
  offset: 10,
  position: "right",
  zIndex: (0,get_default_z_index/* getDefaultZIndex */.w)("popover")
};
function TooltipFloating(props) {
  var _b;
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("TooltipFloating", TooltipFloating_defaultProps, props), {
    children,
    refProp,
    withinPortal,
    style,
    className,
    classNames,
    styles,
    unstyled,
    radius,
    color,
    label,
    offset,
    position,
    multiline,
    width,
    zIndex,
    disabled
  } = _a, others = TooltipFloating_objRest(_a, [
    "children",
    "refProp",
    "withinPortal",
    "style",
    "className",
    "classNames",
    "styles",
    "unstyled",
    "radius",
    "color",
    "label",
    "offset",
    "position",
    "multiline",
    "width",
    "zIndex",
    "disabled"
  ]);
  const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } = useFloatingTooltip({
    offset,
    position
  });
  const { classes, cx } = Tooltip_styles({ radius, color, multiline, width }, { name: "Tooltip", classNames, styles, unstyled });
  if (!isElement(children)) {
    throw new Error(TOOLTIP_ERRORS.children);
  }
  const targetRef = useMergedRef(boundaryRef, children.ref);
  const onMouseEnter = (event) => {
    var _a2, _b2;
    (_b2 = (_a2 = children.props).onMouseEnter) == null ? void 0 : _b2.call(_a2, event);
    handleMouseMove(event);
    setOpened(true);
  };
  const onMouseLeave = (event) => {
    var _a2, _b2;
    (_b2 = (_a2 = children.props).onMouseLeave) == null ? void 0 : _b2.call(_a2, event);
    setOpened(false);
  };
  if (disabled) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, children);
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(OptionalPortal, {
    withinPortal
  }, /* @__PURE__ */ react.createElement(Box/* Box */.x, TooltipFloating_spreadProps(TooltipFloating_spreadValues({}, others), {
    ref: floating,
    className: cx(classes.tooltip, className),
    style: TooltipFloating_spreadProps(TooltipFloating_spreadValues({}, style), {
      zIndex,
      display: opened ? "block" : "none",
      top: y != null ? y : "",
      left: (_b = Math.round(x)) != null ? _b : ""
    })
  }), label)), (0,react.cloneElement)(children, TooltipFloating_spreadProps(TooltipFloating_spreadValues({}, children.props), {
    [refProp]: targetRef,
    onMouseEnter,
    onMouseLeave
  })));
}
TooltipFloating.displayName = "@mantine/core/TooltipFloating";


//# sourceMappingURL=TooltipFloating.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-did-update/use-did-update.js
var use_did_update = __webpack_require__(7048);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Floating/use-floating-auto-update.js




function useFloatingAutoUpdate({ opened, floating, positionDependencies }) {
  const [delayedUpdate, setDelayedUpdate] = (0,react.useState)(0);
  (0,react.useEffect)(() => {
    if (floating.refs.reference.current && floating.refs.floating.current) {
      return C(floating.refs.reference.current, floating.refs.floating.current, floating.update);
    }
    return void 0;
  }, [floating.refs.reference, floating.refs.floating, opened, delayedUpdate]);
  (0,use_did_update/* useDidUpdate */.l)(() => {
    floating.update();
  }, positionDependencies);
  (0,use_did_update/* useDidUpdate */.l)(() => {
    setDelayedUpdate((c) => c + 1);
  }, [opened]);
}


//# sourceMappingURL=use-floating-auto-update.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tooltip/use-tooltip.js






function useTooltip(settings) {
  const [uncontrolledOpened, setUncontrolledOpened] = (0,react.useState)(false);
  const controlled = typeof settings.opened === "boolean";
  const opened = controlled ? settings.opened : uncontrolledOpened;
  const withinGroup = useTooltipGroupContext();
  const uid = (0,use_id/* useId */.M)();
  const { delay: groupDelay, currentId, setCurrentId } = useDelayGroupContext();
  const onChange = (0,react.useCallback)((_opened) => {
    setUncontrolledOpened(_opened);
    if (_opened) {
      setCurrentId(uid);
    }
  }, [setCurrentId, uid]);
  const {
    x,
    y,
    reference,
    floating,
    context,
    refs,
    update,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }
  } = floating_ui_react_dom_interactions_esm_useFloating({
    placement: settings.position,
    open: opened,
    onOpenChange: onChange,
    middleware: [
      T(settings.offset),
      L({ padding: 8 }),
      b(),
      arrow({ element: settings.arrowRef, padding: settings.arrowOffset }),
      ...settings.inline ? [E()] : []
    ]
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      enabled: settings.events.hover,
      delay: withinGroup ? groupDelay : { open: settings.openDelay, close: settings.closeDelay },
      mouseOnly: !settings.events.touch
    }),
    useFocus(context, { enabled: settings.events.focus, keyboardOnly: true }),
    useRole(context, { role: "tooltip" }),
    useDismiss(context, { enabled: typeof settings.opened === void 0 }),
    useDelayGroup(context, { id: uid })
  ]);
  useFloatingAutoUpdate({
    opened,
    positionDependencies: settings.positionDependencies,
    floating: { refs, update }
  });
  (0,use_did_update/* useDidUpdate */.l)(() => {
    var _a;
    (_a = settings.onPositionChange) == null ? void 0 : _a.call(settings, placement);
  }, [placement]);
  const isGroupPhase = opened && currentId && currentId !== uid;
  return {
    x,
    y,
    arrowX,
    arrowY,
    reference,
    floating,
    getFloatingProps,
    getReferenceProps,
    isGroupPhase,
    opened,
    placement
  };
}


//# sourceMappingURL=use-tooltip.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Floating/get-floating-position/get-floating-position.js
function getFloatingPosition(dir, position) {
  if (dir === "rtl" && (position.includes("right") || position.includes("left"))) {
    const [side, placement] = position.split("-");
    const flippedPosition = side === "right" ? "left" : "right";
    return placement === void 0 ? flippedPosition : `${flippedPosition}-${placement}`;
  }
  return position;
}


//# sourceMappingURL=get-floating-position.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Transition/Transition.js + 4 modules
var Transition = __webpack_require__(7838);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Floating/FloatingArrow/get-arrow-position-styles.js
var get_arrow_position_styles_defProp = Object.defineProperty;
var get_arrow_position_styles_defProps = Object.defineProperties;
var get_arrow_position_styles_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var get_arrow_position_styles_getOwnPropSymbols = Object.getOwnPropertySymbols;
var get_arrow_position_styles_hasOwnProp = Object.prototype.hasOwnProperty;
var get_arrow_position_styles_propIsEnum = Object.prototype.propertyIsEnumerable;
var get_arrow_position_styles_defNormalProp = (obj, key, value) => key in obj ? get_arrow_position_styles_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var get_arrow_position_styles_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (get_arrow_position_styles_hasOwnProp.call(b, prop))
      get_arrow_position_styles_defNormalProp(a, prop, b[prop]);
  if (get_arrow_position_styles_getOwnPropSymbols)
    for (var prop of get_arrow_position_styles_getOwnPropSymbols(b)) {
      if (get_arrow_position_styles_propIsEnum.call(b, prop))
        get_arrow_position_styles_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var get_arrow_position_styles_spreadProps = (a, b) => get_arrow_position_styles_defProps(a, get_arrow_position_styles_getOwnPropDescs(b));
const radiusByFloatingSide = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function getArrowPositionStyles({
  position,
  withBorder,
  arrowSize,
  arrowRadius,
  arrowX,
  arrowY
}) {
  const [side] = position.split("-");
  const baseStyles = {
    width: arrowSize,
    height: arrowSize,
    transform: "rotate(45deg)",
    position: "absolute",
    [radiusByFloatingSide[side]]: arrowRadius
  };
  const arrowPosition = withBorder ? -arrowSize / 2 - 1 : -arrowSize / 2;
  if (side === "left") {
    return get_arrow_position_styles_spreadProps(get_arrow_position_styles_spreadValues({}, baseStyles), {
      top: arrowY,
      right: arrowPosition,
      borderLeft: 0,
      borderBottom: 0
    });
  }
  if (side === "right") {
    return get_arrow_position_styles_spreadProps(get_arrow_position_styles_spreadValues({}, baseStyles), {
      top: arrowY,
      left: arrowPosition,
      borderRight: 0,
      borderTop: 0
    });
  }
  if (side === "top") {
    return get_arrow_position_styles_spreadProps(get_arrow_position_styles_spreadValues({}, baseStyles), {
      left: arrowX,
      bottom: arrowPosition,
      borderTop: 0,
      borderLeft: 0
    });
  }
  if (side === "bottom") {
    return get_arrow_position_styles_spreadProps(get_arrow_position_styles_spreadValues({}, baseStyles), {
      left: arrowX,
      top: arrowPosition,
      borderBottom: 0,
      borderRight: 0
    });
  }
  return {};
}


//# sourceMappingURL=get-arrow-position-styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Floating/FloatingArrow/FloatingArrow.js



var FloatingArrow_defProp = Object.defineProperty;
var FloatingArrow_defProps = Object.defineProperties;
var FloatingArrow_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var FloatingArrow_getOwnPropSymbols = Object.getOwnPropertySymbols;
var FloatingArrow_hasOwnProp = Object.prototype.hasOwnProperty;
var FloatingArrow_propIsEnum = Object.prototype.propertyIsEnumerable;
var FloatingArrow_defNormalProp = (obj, key, value) => key in obj ? FloatingArrow_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var FloatingArrow_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (FloatingArrow_hasOwnProp.call(b, prop))
      FloatingArrow_defNormalProp(a, prop, b[prop]);
  if (FloatingArrow_getOwnPropSymbols)
    for (var prop of FloatingArrow_getOwnPropSymbols(b)) {
      if (FloatingArrow_propIsEnum.call(b, prop))
        FloatingArrow_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var FloatingArrow_spreadProps = (a, b) => FloatingArrow_defProps(a, FloatingArrow_getOwnPropDescs(b));
var FloatingArrow_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (FloatingArrow_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && FloatingArrow_getOwnPropSymbols)
    for (var prop of FloatingArrow_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && FloatingArrow_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const FloatingArrow = (0,react.forwardRef)((_a, ref) => {
  var _b = _a, { withBorder, position, arrowSize, arrowRadius, visible, arrowX, arrowY } = _b, others = FloatingArrow_objRest(_b, ["withBorder", "position", "arrowSize", "arrowRadius", "visible", "arrowX", "arrowY"]);
  if (!visible) {
    return null;
  }
  return /* @__PURE__ */ react.createElement("div", FloatingArrow_spreadProps(FloatingArrow_spreadValues({}, others), {
    ref,
    style: getArrowPositionStyles({
      withBorder,
      position,
      arrowSize,
      arrowRadius,
      arrowX,
      arrowY
    })
  }));
});
FloatingArrow.displayName = "@mantine/core/FloatingArrow";


//# sourceMappingURL=FloatingArrow.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tooltip/Tooltip.js















var Tooltip_defProp = Object.defineProperty;
var Tooltip_defProps = Object.defineProperties;
var Tooltip_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Tooltip_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Tooltip_hasOwnProp = Object.prototype.hasOwnProperty;
var Tooltip_propIsEnum = Object.prototype.propertyIsEnumerable;
var Tooltip_defNormalProp = (obj, key, value) => key in obj ? Tooltip_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Tooltip_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Tooltip_hasOwnProp.call(b, prop))
      Tooltip_defNormalProp(a, prop, b[prop]);
  if (Tooltip_getOwnPropSymbols)
    for (var prop of Tooltip_getOwnPropSymbols(b)) {
      if (Tooltip_propIsEnum.call(b, prop))
        Tooltip_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Tooltip_spreadProps = (a, b) => Tooltip_defProps(a, Tooltip_getOwnPropDescs(b));
var Tooltip_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Tooltip_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Tooltip_getOwnPropSymbols)
    for (var prop of Tooltip_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Tooltip_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Tooltip_defaultProps = {
  position: "top",
  refProp: "ref",
  withinPortal: false,
  inline: false,
  arrowSize: 4,
  arrowOffset: 5,
  arrowRadius: 0,
  offset: 5,
  transition: "fade",
  transitionDuration: 100,
  width: "auto",
  events: { hover: true, focus: false, touch: false },
  zIndex: (0,get_default_z_index/* getDefaultZIndex */.w)("popover"),
  positionDependencies: []
};
const _Tooltip = (0,react.forwardRef)((props, ref) => {
  const arrowRef = (0,react.useRef)(null);
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Tooltip", Tooltip_defaultProps, props), {
    children,
    position,
    refProp,
    label,
    openDelay,
    closeDelay,
    onPositionChange,
    opened,
    withinPortal,
    radius,
    color,
    classNames,
    styles,
    unstyled,
    style,
    className,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    offset,
    transition,
    transitionDuration,
    multiline,
    width,
    events,
    zIndex,
    disabled,
    positionDependencies,
    onClick,
    onMouseEnter,
    onMouseLeave,
    inline
  } = _a, others = Tooltip_objRest(_a, [
    "children",
    "position",
    "refProp",
    "label",
    "openDelay",
    "closeDelay",
    "onPositionChange",
    "opened",
    "withinPortal",
    "radius",
    "color",
    "classNames",
    "styles",
    "unstyled",
    "style",
    "className",
    "withArrow",
    "arrowSize",
    "arrowOffset",
    "arrowRadius",
    "offset",
    "transition",
    "transitionDuration",
    "multiline",
    "width",
    "events",
    "zIndex",
    "disabled",
    "positionDependencies",
    "onClick",
    "onMouseEnter",
    "onMouseLeave",
    "inline"
  ]);
  const { classes, cx, theme } = Tooltip_styles({ radius, color, width, multiline }, { name: "Tooltip", classNames, styles, unstyled });
  const tooltip = useTooltip({
    position: getFloatingPosition(theme.dir, position),
    closeDelay,
    openDelay,
    onPositionChange,
    opened,
    events,
    arrowRef,
    arrowOffset,
    offset: offset + (withArrow ? arrowSize / 2 : 0),
    positionDependencies: [...positionDependencies, children],
    inline
  });
  if (!isElement(children)) {
    throw new Error(TOOLTIP_ERRORS.children);
  }
  const targetRef = useMergedRef(tooltip.reference, children.ref, ref);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(OptionalPortal, {
    withinPortal
  }, /* @__PURE__ */ react.createElement(Transition/* Transition */.u, {
    mounted: !disabled && tooltip.opened,
    transition,
    duration: tooltip.isGroupPhase ? 10 : transitionDuration
  }, (transitionStyles) => {
    var _a2, _b;
    return /* @__PURE__ */ react.createElement(Box/* Box */.x, Tooltip_spreadValues(Tooltip_spreadValues({}, others), tooltip.getFloatingProps({
      ref: tooltip.floating,
      className: classes.tooltip,
      style: Tooltip_spreadProps(Tooltip_spreadValues(Tooltip_spreadValues({}, style), transitionStyles), {
        zIndex,
        top: (_a2 = tooltip.y) != null ? _a2 : 0,
        left: (_b = tooltip.x) != null ? _b : 0
      })
    })), label, /* @__PURE__ */ react.createElement(FloatingArrow, {
      ref: arrowRef,
      arrowX: tooltip.arrowX,
      arrowY: tooltip.arrowY,
      visible: withArrow,
      withBorder: false,
      position: tooltip.placement,
      arrowSize,
      arrowRadius,
      className: classes.arrow
    }));
  })), (0,react.cloneElement)(children, tooltip.getReferenceProps(Tooltip_spreadValues({
    onClick,
    onMouseEnter,
    onMouseLeave,
    onMouseMove: props.onMouseMove,
    onPointerDown: props.onPointerDown,
    onPointerEnter: props.onPointerEnter,
    [refProp]: targetRef,
    className: cx(className, children.props.className)
  }, children.props))));
});
_Tooltip.Group = TooltipGroup;
_Tooltip.Floating = TooltipFloating;
_Tooltip.displayName = "@mantine/core/Tooltip";
const Tooltip = _Tooltip;


//# sourceMappingURL=Tooltip.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/ActionIcon/ActionIcon.js + 1 modules
var ActionIcon = __webpack_require__(9834);
;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-clipboard/use-clipboard.js


function useClipboard({ timeout = 2e3 } = {}) {
  const [error, setError] = (0,react.useState)(null);
  const [copied, setCopied] = (0,react.useState)(false);
  const [copyTimeout, setCopyTimeout] = (0,react.useState)(null);
  const handleCopyResult = (value) => {
    clearTimeout(copyTimeout);
    setCopyTimeout(setTimeout(() => setCopied(false), timeout));
    setCopied(value);
  };
  const copy = (valueToCopy) => {
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(valueToCopy).then(() => handleCopyResult(true)).catch((err) => setError(err));
    } else {
      setError(new Error("useClipboard: navigator.clipboard is not supported"));
    }
  };
  const reset = () => {
    setCopied(false);
    setError(null);
    clearTimeout(copyTimeout);
  };
  return { copy, reset, error, copied };
}


//# sourceMappingURL=use-clipboard.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/prism/esm/Prism/CopyIcon.js


function CopyIcon({ copied }) {
  return /* @__PURE__ */ react.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, copied ? /* @__PURE__ */ react.createElement("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }) : /* @__PURE__ */ react.createElement("path", {
    d: "M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}
CopyIcon.displayName = "@mantine/prism/CopyIcon";


//# sourceMappingURL=CopyIcon.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/prism/esm/Prism/prism-theme.js
const dark = (theme) => ({
  plain: {
    color: theme.colors.gray[4],
    backgroundColor: theme.colors.dark[8]
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: theme.colors.gray[6]
      }
    },
    {
      types: ["string", "inserted", "selector", "atrule"],
      style: {
        color: theme.colors.teal[4]
      }
    },
    {
      types: ["number"],
      style: {
        color: theme.colors.blue[4]
      }
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: theme.colors.orange[5]
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: theme.colors.gray[5]
      }
    },
    {
      types: ["variable"],
      style: {
        color: theme.colors.gray[5]
      }
    },
    {
      types: ["class-name", "attr-name"],
      style: {
        color: theme.colors.yellow[5]
      }
    },
    {
      types: ["tag", "deleted"],
      style: {
        color: theme.colors.red[6]
      }
    },
    {
      types: ["operator"],
      style: {
        color: theme.colors.gray[5]
      }
    },
    {
      types: ["boolean"],
      style: {
        color: theme.colors.red[6]
      }
    },
    {
      types: ["keyword"],
      style: {
        color: theme.colors.indigo[3]
      }
    },
    {
      types: ["doctype"],
      style: {
        color: theme.colors.gray[5]
      }
    },
    {
      types: ["url"],
      style: {
        color: theme.colors.gray[5]
      }
    }
  ]
});
const light = (theme) => ({
  plain: {
    color: theme.colors.gray[9],
    backgroundColor: theme.fn.rgba(theme.colors.gray[0], 0.65)
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: theme.colors.gray[6]
      }
    },
    {
      types: ["string", "inserted"],
      style: {
        color: theme.colors.indigo[9]
      }
    },
    {
      types: ["number"],
      style: {
        color: theme.colors.blue[7]
      }
    },
    {
      types: ["builtin", "char", "constant", "function", "selector", "atrule"],
      style: {
        color: theme.colors.lime[9]
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: theme.colors.gray[7]
      }
    },
    {
      types: ["variable"],
      style: {
        color: theme.colors.violet[9]
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: theme.colors.green[9]
      }
    },
    {
      types: ["class-name"],
      style: {
        color: theme.colors.red[9]
      }
    },
    {
      types: ["tag", "deleted"],
      style: {
        color: theme.colors.violet[9]
      }
    },
    {
      types: ["operator"],
      style: {
        color: theme.colors.red[9]
      }
    },
    {
      types: ["boolean"],
      style: {
        color: theme.colors.red[9]
      }
    },
    {
      types: ["keyword"],
      style: {
        color: theme.colors.red[9]
      }
    },
    {
      types: ["doctype"],
      style: {
        color: theme.colors.gray[7]
      }
    },
    {
      types: ["url"],
      style: {
        color: theme.colors.gray[7]
      }
    }
  ]
});
const getPrismTheme = (theme, colorScheme) => colorScheme === "dark" ? dark(theme) : light(theme);


//# sourceMappingURL=prism-theme.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/prism/esm/Prism/Prism.styles.js


var Prism_styles_useStyles = (0,create_styles/* createStyles */.k)((theme, { colorScheme, native, maxLineSize, radius }) => ({
  scrollArea: {},
  root: {
    position: "relative"
  },
  code: {
    boxSizing: "border-box",
    position: "relative",
    fontFamily: theme.fontFamilyMonospace,
    lineHeight: 1.7,
    fontSize: 13,
    overflowX: native ? "auto" : void 0,
    borderRadius: theme.fn.radius(radius),
    padding: `${theme.spacing.sm}px 0`,
    marginTop: 0,
    marginBottom: 0
  },
  copy: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.dir === "ltr" ? theme.spacing.xs : "unset",
    left: theme.dir === "rtl" ? theme.spacing.xs : "unset",
    zIndex: 2,
    "&, &:hover": {
      backgroundColor: colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
    }
  },
  line: {
    display: "flex",
    width: "100%",
    padding: `0 ${theme.spacing.md}px`
  },
  lineNumber: {
    color: colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4],
    textAlign: "right",
    width: 8 * maxLineSize,
    marginRight: theme.dir === "ltr" ? theme.spacing.xs : void 0,
    marginLeft: theme.dir === "rtl" ? theme.spacing.xs : void 0,
    userSelect: "none"
  },
  lineContent: {
    width: "100%"
  }
}));

/* harmony default export */ const Prism_styles = (Prism_styles_useStyles);
//# sourceMappingURL=Prism.styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/prism/esm/Prism/Prism.js








var Prism_defProp = Object.defineProperty;
var Prism_defProps = Object.defineProperties;
var Prism_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Prism_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Prism_hasOwnProp = Object.prototype.hasOwnProperty;
var Prism_propIsEnum = Object.prototype.propertyIsEnumerable;
var Prism_defNormalProp = (obj, key, value) => key in obj ? Prism_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Prism_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Prism_hasOwnProp.call(b, prop))
      Prism_defNormalProp(a, prop, b[prop]);
  if (Prism_getOwnPropSymbols)
    for (var prop of Prism_getOwnPropSymbols(b)) {
      if (Prism_propIsEnum.call(b, prop))
        Prism_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Prism_spreadProps = (a, b) => Prism_defProps(a, Prism_getOwnPropDescs(b));
var Prism_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Prism_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Prism_getOwnPropSymbols)
    for (var prop of Prism_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Prism_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const prismDefaultProps = {
  noCopy: false,
  copyLabel: "Copy code",
  copiedLabel: "Copied",
  withLineNumbers: false,
  trim: true,
  highlightLines: {},
  scrollAreaComponent: ScrollArea,
  getPrismTheme: getPrismTheme
};
const Prism = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Prism", prismDefaultProps, props), {
    className,
    children,
    language,
    noCopy,
    classNames,
    styles,
    copyLabel,
    copiedLabel,
    withLineNumbers,
    highlightLines,
    scrollAreaComponent: ScrollAreaComponent,
    colorScheme,
    trim,
    unstyled,
    radius,
    getPrismTheme
  } = _a, others = Prism_objRest(_a, [
    "className",
    "children",
    "language",
    "noCopy",
    "classNames",
    "styles",
    "copyLabel",
    "copiedLabel",
    "withLineNumbers",
    "highlightLines",
    "scrollAreaComponent",
    "colorScheme",
    "trim",
    "unstyled",
    "radius",
    "getPrismTheme"
  ]);
  const code = trim && typeof children === "string" ? children.trim() : children;
  const maxLineSize = code.split("\n").length.toString().length;
  const theme = (0,MantineProvider/* useMantineTheme */.rZ)();
  const clipboard = useClipboard();
  const _colorScheme = colorScheme || theme.colorScheme;
  const { classes, cx } = Prism_styles({
    colorScheme: _colorScheme,
    native: ScrollAreaComponent !== ScrollArea,
    maxLineSize,
    radius
  }, { classNames, styles, unstyled, name: "Prism" });
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, Prism_spreadProps(Prism_spreadValues({
    className: cx(classes.root, className),
    ref
  }, others), {
    translate: "no"
  }), !noCopy && /* @__PURE__ */ react.createElement(Tooltip, {
    label: clipboard.copied ? copiedLabel : copyLabel,
    position: "left",
    withArrow: true,
    arrowSize: 6,
    offset: 6,
    color: clipboard.copied ? "teal" : void 0,
    unstyled
  }, /* @__PURE__ */ react.createElement(ActionIcon/* ActionIcon */.A, {
    className: classes.copy,
    "aria-label": clipboard.copied ? copiedLabel : copyLabel,
    onClick: () => clipboard.copy(code),
    unstyled
  }, /* @__PURE__ */ react.createElement(CopyIcon, {
    copied: clipboard.copied
  }))), /* @__PURE__ */ react.createElement(dist, Prism_spreadProps(Prism_spreadValues({}, dist_defaultProps), {
    theme: getPrismTheme(theme, _colorScheme),
    code,
    language
  }), ({
    className: inheritedClassName,
    style: inheritedStyle,
    tokens,
    getLineProps,
    getTokenProps
  }) => /* @__PURE__ */ react.createElement(ScrollAreaComponent, {
    className: classes.scrollArea,
    dir: "ltr"
  }, /* @__PURE__ */ react.createElement("pre", {
    className: cx(classes.code, inheritedClassName),
    style: inheritedStyle,
    dir: "ltr"
  }, tokens.map((line, index) => {
    var _a2, _b, _c, _d;
    if (index === tokens.length - 1 && line.length === 1 && line[0].content === "\n") {
      return null;
    }
    const lineNumber = index + 1;
    const lineProps = getLineProps({ line, key: index });
    const shouldHighlight = lineNumber in highlightLines;
    const lineColor = _colorScheme === "dark" ? theme.fn.rgba(theme.fn.themeColor((_a2 = highlightLines[lineNumber]) == null ? void 0 : _a2.color, 9), 0.25) : theme.fn.themeColor((_b = highlightLines[lineNumber]) == null ? void 0 : _b.color, 0);
    return /* @__PURE__ */ react.createElement("div", Prism_spreadProps(Prism_spreadValues({}, lineProps), {
      className: cx(classes.line, lineProps.className),
      style: Prism_spreadValues({}, shouldHighlight ? { backgroundColor: lineColor } : null)
    }), withLineNumbers && /* @__PURE__ */ react.createElement("div", {
      className: classes.lineNumber,
      style: {
        color: shouldHighlight ? theme.fn.themeColor((_c = highlightLines[lineNumber]) == null ? void 0 : _c.color, _colorScheme === "dark" ? 5 : 8) : void 0
      }
    }, ((_d = highlightLines[lineNumber]) == null ? void 0 : _d.label) || lineNumber), /* @__PURE__ */ react.createElement("div", {
      className: classes.lineContent
    }, line.map((token, key) => {
      var _a3, _b2;
      const tokenProps = getTokenProps({ token, key });
      return /* @__PURE__ */ react.createElement("span", Prism_spreadProps(Prism_spreadValues({}, tokenProps), {
        style: Prism_spreadProps(Prism_spreadValues({}, tokenProps.style), {
          color: shouldHighlight ? theme.fn.themeColor((_a3 = highlightLines[lineNumber]) == null ? void 0 : _a3.color, _colorScheme === "dark" ? 5 : 8) : (_b2 = tokenProps == null ? void 0 : tokenProps.style) == null ? void 0 : _b2.color
        })
      }));
    })));
  }).filter(Boolean)))));
});
Prism.displayName = "@mantine/prism/Prism";


//# sourceMappingURL=Prism.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/prism/esm/PrismTabs/PrismTabs.styles.js


var PrismTabs_styles_useStyles = (0,create_styles/* createStyles */.k)((theme, { radius }) => ({
  tab: {
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.sm,
    height: 34,
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3]}`,
    borderBottom: 0,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    borderRadius: 0,
    "&:first-of-type": {
      borderTopLeftRadius: theme.radius.sm
    },
    "&:not(:first-of-type)": {
      borderLeft: 0
    },
    "&:last-of-type": {
      borderTopRightRadius: theme.radius.sm
    },
    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0]
    },
    "&[data-active]": {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.fn.rgba(theme.colors.gray[0], 0.65),
      "&::before": {
        backgroundColor: "transparent"
      }
    }
  },
  prism: {
    borderRadius: theme.fn.radius(radius),
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    borderTop: 0,
    overflow: "hidden"
  },
  code: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    border: 0
  }
}));

/* harmony default export */ const PrismTabs_styles = (PrismTabs_styles_useStyles);
//# sourceMappingURL=PrismTabs.styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/prism/esm/PrismTabs/PrismTabs.js





var PrismTabs_defProp = Object.defineProperty;
var PrismTabs_defProps = Object.defineProperties;
var PrismTabs_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var PrismTabs_getOwnPropSymbols = Object.getOwnPropertySymbols;
var PrismTabs_hasOwnProp = Object.prototype.hasOwnProperty;
var PrismTabs_propIsEnum = Object.prototype.propertyIsEnumerable;
var PrismTabs_defNormalProp = (obj, key, value) => key in obj ? PrismTabs_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var PrismTabs_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (PrismTabs_hasOwnProp.call(b, prop))
      PrismTabs_defNormalProp(a, prop, b[prop]);
  if (PrismTabs_getOwnPropSymbols)
    for (var prop of PrismTabs_getOwnPropSymbols(b)) {
      if (PrismTabs_propIsEnum.call(b, prop))
        PrismTabs_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var PrismTabs_spreadProps = (a, b) => PrismTabs_defProps(a, PrismTabs_getOwnPropDescs(b));
var PrismTabs_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (PrismTabs_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && PrismTabs_getOwnPropSymbols)
    for (var prop of PrismTabs_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && PrismTabs_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function PrismTabs(props) {
  const { classes } = PrismTabs_styles({ radius: props.radius });
  return /* @__PURE__ */ react.createElement(Tabs, PrismTabs_spreadProps(PrismTabs_spreadValues({}, props), {
    variant: "outline",
    classNames: { tab: classes.tab },
    translate: "no"
  }));
}
function PrismPanel(_a) {
  var _b = _a, {
    language,
    children,
    radius,
    noCopy,
    copyLabel,
    copiedLabel,
    withLineNumbers,
    highlightLines,
    scrollAreaComponent,
    trim,
    getPrismTheme,
    colorScheme
  } = _b, others = PrismTabs_objRest(_b, [
    "language",
    "children",
    "radius",
    "noCopy",
    "copyLabel",
    "copiedLabel",
    "withLineNumbers",
    "highlightLines",
    "scrollAreaComponent",
    "trim",
    "getPrismTheme",
    "colorScheme"
  ]);
  const { classes } = PrismTabs_styles({ radius });
  return /* @__PURE__ */ react.createElement(Tabs.Panel, PrismTabs_spreadValues({}, others), /* @__PURE__ */ react.createElement(Prism, {
    language,
    classNames: { root: classes.prism, code: classes.code },
    radius,
    noCopy,
    copyLabel,
    copiedLabel,
    withLineNumbers,
    highlightLines,
    scrollAreaComponent,
    trim,
    getPrismTheme,
    colorScheme
  }, children));
}


//# sourceMappingURL=PrismTabs.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/prism/esm/index.js




const PrismExport = Prism;
PrismExport.Tabs = PrismTabs;
PrismExport.Tab = Tabs.Tab;
PrismExport.TabsList = Tabs.List;
PrismExport.Panel = PrismPanel;


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ packSx)
/* harmony export */ });
function packSx(sx) {
  return Array.isArray(sx) ? sx : [sx];
}


//# sourceMappingURL=pack-sx.js.map


/***/ }),

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": () => (/* binding */ MDXProvider),
/* harmony export */   "kt": () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 9960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ exports_Link)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(8780);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2263);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(3919);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(412);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/LinksCollector.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const createStatefulLinksCollector=()=>{// Set to dedup, as it's not useful to collect multiple times the same link
const allLinks=new Set();return{collectLink:link=>{allLinks.add(link);},getCollectedLinks:()=>[...allLinks]};};const Context=/*#__PURE__*/react.createContext({collectLink:()=>{// No-op for client. We only use the broken links checker server-side.
}});const useLinksCollector=()=>(0,react.useContext)(Context);function LinksCollectorProvider(_ref){let{children,linksCollector}=_ref;return/*#__PURE__*/React.createElement(Context.Provider,{value:linksCollector},children);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(4996);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO all this wouldn't be necessary if we used ReactRouter basename feature
// We don't automatically add base urls to all links,
// only the "safe" ones, starting with / (like /docs/introduction)
// this is because useBaseUrl() actually transforms relative links
// like "introduction" to "/baseUrl/introduction" => bad behavior to fix
const shouldAddBaseUrlAutomatically=to=>to.startsWith('/');function Link(_ref,forwardedRef){let{isNavLink,to,href,activeClassName,isActive,'data-noBrokenLinkCheck':noBrokenLinkCheck,autoAddBaseUrl=true,...props}=_ref;const{siteConfig:{trailingSlash,baseUrl}}=(0,useDocusaurusContext/* default */.Z)();const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.C)();const linksCollector=useLinksCollector();const innerRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(forwardedRef,()=>innerRef.current);// IMPORTANT: using to or href should not change anything
// For example, MDX links will ALWAYS give us the href props
// Using one prop or the other should not be used to distinguish
// internal links (/docs/myDoc) from external links (https://github.com)
const targetLinkUnprefixed=to||href;function maybeAddBaseUrl(str){return autoAddBaseUrl&&shouldAddBaseUrlAutomatically(str)?withBaseUrl(str):str;}const isInternal=(0,isInternalUrl/* default */.Z)(targetLinkUnprefixed);// pathname:// is a special "protocol" we use to tell Docusaurus link
// that a link is not "internal" and that we shouldn't use history.push()
// this is not ideal but a good enough escape hatch for now
// see https://github.com/facebook/docusaurus/issues/3309
// note: we want baseUrl to be appended (see issue for details)
// TODO read routes and automatically detect internal/external links?
const targetLinkWithoutPathnameProtocol=targetLinkUnprefixed?.replace('pathname://','');// TODO we should use ReactRouter basename feature instead!
// Automatically apply base url in links that start with /
let targetLink=typeof targetLinkWithoutPathnameProtocol!=='undefined'?maybeAddBaseUrl(targetLinkWithoutPathnameProtocol):undefined;if(targetLink&&isInternal){targetLink=(0,lib.applyTrailingSlash)(targetLink,{trailingSlash,baseUrl});}const preloaded=(0,react.useRef)(false);const LinkComponent=isNavLink?react_router_dom/* NavLink */.OL:react_router_dom/* Link */.rU;const IOSupported=ExecutionEnvironment/* default.canUseIntersectionObserver */.Z.canUseIntersectionObserver;const ioRef=(0,react.useRef)();const handleRef=el=>{innerRef.current=el;if(IOSupported&&el&&isInternal){// If IO supported and element reference found, set up Observer.
ioRef.current=new window.IntersectionObserver(entries=>{entries.forEach(entry=>{if(el===entry.target){// If element is in viewport, stop observing and run callback.
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
if(entry.isIntersecting||entry.intersectionRatio>0){ioRef.current.unobserve(el);ioRef.current.disconnect();if(targetLink!=null){window.docusaurus.prefetch(targetLink);}}}});});// Add element to the observer.
ioRef.current.observe(el);}};const onInteractionEnter=()=>{if(!preloaded.current&&targetLink!=null){window.docusaurus.preload(targetLink);preloaded.current=true;}};(0,react.useEffect)(()=>{// If IO is not supported. We prefetch by default (only once).
if(!IOSupported&&isInternal){if(targetLink!=null){window.docusaurus.prefetch(targetLink);}}// When unmounting, stop intersection observer from watching.
return()=>{if(IOSupported&&ioRef.current){ioRef.current.disconnect();}};},[ioRef,targetLink,IOSupported,isInternal]);const isAnchorLink=targetLink?.startsWith('#')??false;const isRegularHtmlLink=!targetLink||!isInternal||isAnchorLink;if(!isRegularHtmlLink&&!noBrokenLinkCheck){linksCollector.collectLink(targetLink);}return isRegularHtmlLink?/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
react.createElement("a",(0,esm_extends/* default */.Z)({ref:innerRef,href:targetLink},targetLinkUnprefixed&&!isInternal&&{target:'_blank',rel:'noopener noreferrer'},props)):/*#__PURE__*/react.createElement(LinkComponent,(0,esm_extends/* default */.Z)({},props,{onMouseEnter:onInteractionEnter,onTouchStart:onInteractionEnter,innerRef:handleRef,to:targetLink// Avoid "React does not recognize the `activeClassName` prop on a DOM
// element"
},isNavLink&&{isActive,activeClassName}));}/* harmony default export */ const exports_Link = (/*#__PURE__*/react.forwardRef(Link));

/***/ }),

/***/ 3848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CodeBlockJSX)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(2949);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6668);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Returns a color-mode-dependent Prism theme: whatever the user specified in
 * the config. Falls back to `palenight`.
 */function usePrismTheme(){const{prism}=(0,useThemeConfig/* useThemeConfig */.L)();const{colorMode}=(0,contexts_colorMode/* useColorMode */.I)();const lightModeTheme=prism.theme;const darkModeTheme=prism.darkTheme||lightModeTheme;const prismTheme=colorMode==='dark'?darkModeTheme:lightModeTheme;return prismTheme;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(5281);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js
var codeBlockUtils = __webpack_require__(7016);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"codeBlockContainer":"codeBlockContainer_Ckt0"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockContainer(_ref){let{as:As,...props}=_ref;const prismTheme=usePrismTheme();const prismCssVariables=(0,codeBlockUtils/* getPrismCssVariables */.QC)(prismTheme);return/*#__PURE__*/react.createElement(As// Polymorphic components are hard to type, without `oneOf` generics
,(0,esm_extends/* default */.Z)({},props,{style:prismCssVariables,className:(0,clsx_m/* default */.Z)(props.className,styles_module.codeBlockContainer,ThemeClassNames/* ThemeClassNames.common.codeBlock */.k.common.codeBlock)}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Content_styles_module = ({"codeBlockContent":"codeBlockContent_biex","codeBlockTitle":"codeBlockTitle_Ktv7","codeBlock":"codeBlock_bY9V","codeBlockStandalone":"codeBlockStandalone_MEMb","codeBlockLines":"codeBlockLines_e6Vv","codeBlockLinesWithNumbering":"codeBlockLinesWithNumbering_o6Pm","buttonGroup":"buttonGroup__atx"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/Element.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// <pre> tags in markdown map to CodeBlocks. They may contain JSX children. When
// the children is not a simple string, we just return a styled block without
// actually highlighting.
function CodeBlockJSX(_ref){let{children,className}=_ref;return/*#__PURE__*/react.createElement(CodeBlockContainer,{as:"pre",tabIndex:0,className:(0,clsx_m/* default */.Z)(Content_styles_module.codeBlockStandalone,'thin-scrollbar',className)},/*#__PURE__*/react.createElement("code",{className:Content_styles_module.codeBlockLines},children));}

/***/ }),

/***/ 6215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EditThisPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5999);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5281);
/* harmony import */ var _theme_Icon_Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9839);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditThisPage(_ref){let{editUrl}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:editUrl,target:"_blank",rel:"noreferrer noopener",className:_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .ThemeClassNames.common.editThisPage */ .k.common.editThisPage},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Icon_Edit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"));}

/***/ }),

/***/ 5639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MDXContent)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5742);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Head.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// MDX elements are wrapped through the MDX pragma. In some cases (notably usage
// with Head/Helmet) we need to unwrap those elements.
function unwrapMDXElement(element){if(element.props?.mdxType&&element.props.originalType){const{mdxType,originalType,...newProps}=element.props;return/*#__PURE__*/react.createElement(element.props.originalType,newProps);}return element;}function MDXHead(props){const unwrappedChildren=react.Children.map(props.children,child=>/*#__PURE__*/react.isValidElement(child)?unwrapMDXElement(child):child);return/*#__PURE__*/react.createElement(Head/* default */.Z,props,unwrappedChildren);}
// EXTERNAL MODULE: ./src/theme/MDXComponents/Code.tsx
var Code = __webpack_require__(3473);
// EXTERNAL MODULE: ./src/theme/MDXComponents/A.tsx
var A = __webpack_require__(4403);
// EXTERNAL MODULE: ./src/theme/CodeBlock/index.tsx + 1 modules
var CodeBlock = __webpack_require__(5442);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Pre.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXPre(props){return/*#__PURE__*/react.createElement(CodeBlock/* default */.Z// If this pre is created by a ``` fenced codeblock, unwrap the children
,/*#__PURE__*/(0,react.isValidElement)(props.children)&&props.children.props?.originalType==='code'?props.children.props:{...props});}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2389);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(6043);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"details":"details_lb9f","isBrowser":"isBrowser_bmU9","collapsibleContent":"collapsibleContent_i85q"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isInSummary(node){if(!node){return false;}return node.tagName==='SUMMARY'||isInSummary(node.parentElement);}function hasParent(node,parent){if(!node){return false;}return node===parent||hasParent(node.parentElement,parent);}/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */function Details(_ref){let{summary,children,...props}=_ref;const isBrowser=(0,useIsBrowser/* default */.Z)();const detailsRef=(0,react.useRef)(null);const{collapsed,setCollapsed}=(0,Collapsible/* useCollapsible */.u)({initialState:!props.open});// Use a separate state for the actual details prop, because it must be set
// only after animation completes, otherwise close animations won't work
const[open,setOpen]=(0,react.useState)(props.open);return/*#__PURE__*/ (// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
react.createElement("details",(0,esm_extends/* default */.Z)({},props,{ref:detailsRef,open:open,"data-collapsed":collapsed,className:(0,clsx_m/* default */.Z)(styles_module.details,isBrowser&&styles_module.isBrowser,props.className),onMouseDown:e=>{const target=e.target;// Prevent a double-click to highlight summary text
if(isInSummary(target)&&e.detail>1){e.preventDefault();}},onClick:e=>{e.stopPropagation();// For isolation of multiple nested details/summary
const target=e.target;const shouldToggle=isInSummary(target)&&hasParent(target,detailsRef.current);if(!shouldToggle){return;}e.preventDefault();if(collapsed){setCollapsed(false);setOpen(true);}else{setCollapsed(true);// Don't do this, it breaks close animation!
// setOpen(false);
}}}),summary??/*#__PURE__*/react.createElement("summary",null,"Details"),/*#__PURE__*/react.createElement(Collapsible/* Collapsible */.z,{lazy:false// Content might matter for SEO in this case
,collapsed:collapsed,disableSSRStyle:true// Allows component to work fine even with JS disabled!
,onCollapseTransitionEnd:newCollapsed=>{setCollapsed(newCollapsed);setOpen(!newCollapsed);}},/*#__PURE__*/react.createElement("div",{className:styles_module.collapsibleContent},children))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Details_styles_module = ({"details":"details_b_Ee"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses='alert alert--info';function Details_Details(_ref){let{...props}=_ref;return/*#__PURE__*/react.createElement(Details,(0,esm_extends/* default */.Z)({},props,{className:(0,clsx_m/* default */.Z)(InfimaClasses,Details_styles_module.details,props.className)}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Details.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXDetails(props){const items=react.Children.toArray(props.children);// Split summary item from the rest to pass it as a separate prop to the
// Details theme component
const summary=items.find(item=>/*#__PURE__*/react.isValidElement(item)&&item.props?.mdxType==='summary');const children=/*#__PURE__*/react.createElement(react.Fragment,null,items.filter(item=>item!==summary));return/*#__PURE__*/react.createElement(Details_Details,(0,esm_extends/* default */.Z)({},props,{summary:summary}),children);}
// EXTERNAL MODULE: ./src/theme/MDXComponents/Heading.tsx
var Heading = __webpack_require__(7411);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Ul_styles_module = ({"containsTaskList":"containsTaskList_mC6p"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function transformUlClassName(className){return (0,clsx_m/* default */.Z)(className,// This class is set globally by GitHub/MDX. We keep the global class, and
// add another class to get a task list without the default ul styling
// See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
className?.includes('contains-task-list')&&Ul_styles_module.containsTaskList);}function MDXUl(props){return/*#__PURE__*/react.createElement("ul",(0,esm_extends/* default */.Z)({},props,{className:transformUlClassName(props.className)}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Img_styles_module = ({"img":"img_ev3q"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function transformImgClassName(className){return (0,clsx_m/* default */.Z)(className,Img_styles_module.img);}function MDXImg(props){return/*#__PURE__*/ (// eslint-disable-next-line jsx-a11y/alt-text
react.createElement("img",(0,esm_extends/* default */.Z)({loading:"lazy"},props,{className:transformImgClassName(props.className)})));}
// EXTERNAL MODULE: ./src/theme/Admonition/index.tsx
var Admonition = __webpack_require__(5565);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Noop.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//* harmony default export */ const Noop = (()=>null);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const MDXComponents={head:MDXHead,code:Code/* default */.Z,a:A/* default */.Z,pre:MDXPre,details:MDXDetails,ul:MDXUl,img:MDXImg,h1:props=>/*#__PURE__*/react.createElement(Heading/* default */.Z,(0,esm_extends/* default */.Z)({as:"h1"},props)),h2:props=>/*#__PURE__*/react.createElement(Heading/* default */.Z,(0,esm_extends/* default */.Z)({as:"h2"},props)),h3:props=>/*#__PURE__*/react.createElement(Heading/* default */.Z,(0,esm_extends/* default */.Z)({as:"h3"},props)),h4:props=>/*#__PURE__*/react.createElement(Heading/* default */.Z,(0,esm_extends/* default */.Z)({as:"h4"},props)),h5:props=>/*#__PURE__*/react.createElement(Heading/* default */.Z,(0,esm_extends/* default */.Z)({as:"h5"},props)),h6:props=>/*#__PURE__*/react.createElement(Heading/* default */.Z,(0,esm_extends/* default */.Z)({as:"h6"},props)),admonition:Admonition/* default */.Z,mermaid:Noop};/* harmony default export */ const theme_MDXComponents = (MDXComponents);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXContent(_ref){let{children}=_ref;return/*#__PURE__*/react.createElement(esm/* MDXProvider */.Zo,{components:theme_MDXComponents},children);}

/***/ }),

/***/ 2244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PaginatorNavLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6010);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9960);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function PaginatorNavLink(props){const{permalink,title,subLabel,isNext}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('pagination-nav__link',isNext?'pagination-nav__link--next':'pagination-nav__link--prev'),to:permalink},subLabel&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pagination-nav__sublabel"},subLabel),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pagination-nav__label"},title));}

/***/ }),

/***/ 3008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9960);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_zVej","tagRegular":"tagRegular_sFm0","tagWithCount":"tagWithCount_h2kH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(_ref){let{permalink,label,count}=_ref;return/*#__PURE__*/react.createElement(Link/* default */.Z,{href:permalink,className:(0,clsx_m/* default */.Z)(styles_module.tag,count?styles_module.tagWithCount:styles_module.tagRegular)},label,count&&/*#__PURE__*/react.createElement("span",null,count));}

/***/ }),

/***/ 1526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TagsListInline)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(3008);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tags":"tags_jXut","tag":"tag_QGVx"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsListInline(_ref){let{tags}=_ref;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(styles_module.tags,'padding--none','margin-left--sm')},tags.map(_ref2=>{let{label,permalink:tagPermalink}=_ref2;return/*#__PURE__*/react.createElement("li",{key:tagPermalink,className:styles_module.tag},/*#__PURE__*/react.createElement(Tag/* default */.Z,{label:label,permalink:tagPermalink}));})));}

/***/ }),

/***/ 6043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ useCollapsible),
/* harmony export */   "z": () => (/* binding */ Collapsible)
/* harmony export */ });
/* harmony import */ var _home_runner_work_docs_website_docs_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(412);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const DefaultAnimationEasing='ease-in-out';/**
 * This hook is a very thin wrapper around a `useState`.
 */function useCollapsible(_ref){let{initialState}=_ref;const[collapsed,setCollapsed]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState??false);const toggleCollapsed=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{setCollapsed(expanded=>!expanded);},[]);return{collapsed,setCollapsed,toggleCollapsed};}const CollapsedStyles={display:'none',overflow:'hidden',height:'0px'};const ExpandedStyles={display:'block',overflow:'visible',height:'auto'};function applyCollapsedStyle(el,collapsed){const collapsedStyles=collapsed?CollapsedStyles:ExpandedStyles;el.style.display=collapsedStyles.display;el.style.overflow=collapsedStyles.overflow;el.style.height=collapsedStyles.height;}/*
Lex111: Dynamic transition duration is used in Material design, this technique
is good for a large number of items.
https://material.io/archive/guidelines/motion/duration-easing.html#duration-easing-dynamic-durations
https://github.com/mui-org/material-ui/blob/e724d98eba018e55e1a684236a2037e24bcf050c/packages/material-ui/src/styles/createTransitions.js#L40-L43
 */function getAutoHeightDuration(height){const constant=height/36;return Math.round((4+15*constant**0.25+constant/5)*10);}function useCollapseAnimation(_ref2){let{collapsibleRef,collapsed,animation}=_ref2;const mounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const el=collapsibleRef.current;function getTransitionStyles(){const height=el.scrollHeight;const duration=animation?.duration??getAutoHeightDuration(height);const easing=animation?.easing??DefaultAnimationEasing;return{transition:`height ${duration}ms ${easing}`,height:`${height}px`};}function applyTransitionStyles(){const transitionStyles=getTransitionStyles();el.style.transition=transitionStyles.transition;el.style.height=transitionStyles.height;}// On mount, we just apply styles, no animated transition
if(!mounted.current){applyCollapsedStyle(el,collapsed);mounted.current=true;return undefined;}el.style.willChange='height';function startAnimation(){const animationFrame=requestAnimationFrame(()=>{// When collapsing
if(collapsed){applyTransitionStyles();requestAnimationFrame(()=>{el.style.height=CollapsedStyles.height;el.style.overflow=CollapsedStyles.overflow;});}// When expanding
else{el.style.display='block';requestAnimationFrame(()=>{applyTransitionStyles();});}});return()=>cancelAnimationFrame(animationFrame);}return startAnimation();},[collapsibleRef,collapsed,animation]);}/**
 * Prevent hydration layout shift before animations are handled imperatively
 * with JS
 */function getSSRStyle(collapsed){if(_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"].canUseDOM */ .Z.canUseDOM){return undefined;}return collapsed?CollapsedStyles:ExpandedStyles;}function CollapsibleBase(_ref3){let{as:As='div',collapsed,children,animation,onCollapseTransitionEnd,className,disableSSRStyle}=_ref3;const collapsibleRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);useCollapseAnimation({collapsibleRef,collapsed,animation});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(As// @ts-expect-error: the "too complicated type" is produced from
// "CollapsibleElementType" being a huge union
,{ref:collapsibleRef// Refs are contravariant, which is not expressible in TS
,style:disableSSRStyle?undefined:getSSRStyle(collapsed),onTransitionEnd:e=>{if(e.propertyName!=='height'){return;}applyCollapsedStyle(collapsibleRef.current,collapsed);onCollapseTransitionEnd?.(collapsed);},className:className},children);}function CollapsibleLazy(_ref4){let{collapsed,...props}=_ref4;const[mounted,setMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!collapsed);// Updated in effect so that first expansion transition can work
const[lazyCollapsed,setLazyCollapsed]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(collapsed);(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{if(!collapsed){setMounted(true);}},[collapsed]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{if(mounted){setLazyCollapsed(collapsed);}},[mounted,collapsed]);return mounted?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CollapsibleBase,(0,_home_runner_work_docs_website_docs_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},props,{collapsed:lazyCollapsed})):null;}/**
 * A headless component providing smooth and uniform collapsing behavior. The
 * component will be invisible (zero height) when collapsed. Doesn't provide
 * interactivity by itself: collapse state is toggled through props.
 */function Collapsible(_ref5){let{lazy,...props}=_ref5;const Comp=lazy?CollapsibleLazy:CollapsibleBase;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp,props);}

/***/ }),

/***/ 7016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QC": () => (/* binding */ getPrismCssVariables),
/* harmony export */   "Vo": () => (/* binding */ parseLanguage)
/* harmony export */ });
/* unused harmony exports parseCodeBlockTitle, containsLineNumbers, parseLines */
/* harmony import */ var parse_numeric_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7594);
/* harmony import */ var parse_numeric_range__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const codeBlockTitleRegex=/title=(?<quote>["'])(?<title>.*?)\1/;const metastringLinesRangeRegex=/\{(?<range>[\d,-]+)\}/;// Supported types of highlight comments
const commentPatterns={js:{start:'\\/\\/',end:''},jsBlock:{start:'\\/\\*',end:'\\*\\/'},jsx:{start:'\\{\\s*\\/\\*',end:'\\*\\/\\s*\\}'},bash:{start:'#',end:''},html:{start:'<!--',end:'-->'}};function getCommentPattern(languages,magicCommentDirectives){// To be more reliable, the opening and closing comment must match
const commentPattern=languages.map(lang=>{const{start,end}=commentPatterns[lang];return`(?:${start}\\s*(${magicCommentDirectives.flatMap(d=>[d.line,d.block?.start,d.block?.end].filter(Boolean)).join('|')})\\s*${end})`;}).join('|');// White space is allowed, but otherwise it should be on it's own line
return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);}/**
 * Select comment styles based on language
 */function getAllMagicCommentDirectiveStyles(lang,magicCommentDirectives){switch(lang){case'js':case'javascript':case'ts':case'typescript':return getCommentPattern(['js','jsBlock'],magicCommentDirectives);case'jsx':case'tsx':return getCommentPattern(['js','jsBlock','jsx'],magicCommentDirectives);case'html':return getCommentPattern(['js','jsBlock','html'],magicCommentDirectives);case'python':case'py':case'bash':return getCommentPattern(['bash'],magicCommentDirectives);case'markdown':case'md':// Text uses HTML, front matter uses bash
return getCommentPattern(['html','jsx','bash'],magicCommentDirectives);default:// All comment types
return getCommentPattern(Object.keys(commentPatterns),magicCommentDirectives);}}function parseCodeBlockTitle(metastring){return metastring?.match(codeBlockTitleRegex)?.groups.title??'';}function containsLineNumbers(metastring){return Boolean(metastring?.includes('showLineNumbers'));}/**
 * Gets the language name from the class name (set by MDX).
 * e.g. `"language-javascript"` => `"javascript"`.
 * Returns undefined if there is no language class name.
 */function parseLanguage(className){const languageClassName=className.split(' ').find(str=>str.startsWith('language-'));return languageClassName?.replace(/language-/,'');}/**
 * Parses the code content, strips away any magic comments, and returns the
 * clean content and the highlighted lines marked by the comments or metastring.
 *
 * If the metastring contains a range, the `content` will be returned as-is
 * without any parsing. The returned `lineClassNames` will be a map from that
 * number range to the first magic comment config entry (which _should_ be for
 * line highlight directives.)
 *
 * @param content The raw code with magic comments. Trailing newline will be
 * trimmed upfront.
 * @param options Options for parsing behavior.
 */function parseLines(content,options){let code=content.replace(/\n$/,'');const{language,magicComments,metastring}=options;// Highlighted lines specified in props: don't parse the content
if(metastring&&metastringLinesRangeRegex.test(metastring)){const linesRange=metastring.match(metastringLinesRangeRegex).groups.range;if(magicComments.length===0){throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${metastring}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);}const metastringRangeClassName=magicComments[0].className;const lines=rangeParser(linesRange).filter(n=>n>0).map(n=>[n-1,[metastringRangeClassName]]);return{lineClassNames:Object.fromEntries(lines),code};}if(language===undefined){return{lineClassNames:{},code};}const directiveRegex=getAllMagicCommentDirectiveStyles(language,magicComments);// Go through line by line
const lines=code.split('\n');const blocks=Object.fromEntries(magicComments.map(d=>[d.className,{start:0,range:''}]));const lineToClassName=Object.fromEntries(magicComments.filter(d=>d.line).map(_ref=>{let{className,line}=_ref;return[line,className];}));const blockStartToClassName=Object.fromEntries(magicComments.filter(d=>d.block).map(_ref2=>{let{className,block}=_ref2;return[block.start,className];}));const blockEndToClassName=Object.fromEntries(magicComments.filter(d=>d.block).map(_ref3=>{let{className,block}=_ref3;return[block.end,className];}));for(let lineNumber=0;lineNumber<lines.length;){const line=lines[lineNumber];const match=line.match(directiveRegex);if(!match){// Lines without directives are unchanged
lineNumber+=1;continue;}const directive=match.slice(1).find(item=>item!==undefined);if(lineToClassName[directive]){blocks[lineToClassName[directive]].range+=`${lineNumber},`;}else if(blockStartToClassName[directive]){blocks[blockStartToClassName[directive]].start=lineNumber;}else if(blockEndToClassName[directive]){blocks[blockEndToClassName[directive]].range+=`${blocks[blockEndToClassName[directive]].start}-${lineNumber-1},`;}lines.splice(lineNumber,1);}code=lines.join('\n');const lineClassNames={};Object.entries(blocks).forEach(_ref4=>{let[className,{range}]=_ref4;rangeParser(range).forEach(l=>{lineClassNames[l]??=[];lineClassNames[l].push(className);});});return{lineClassNames,code};}function getPrismCssVariables(prismTheme){const mapping={color:'--prism-color',backgroundColor:'--prism-background-color'};const properties={};Object.entries(prismTheme.plain).forEach(_ref5=>{let[key,value]=_ref5;const varName=mapping[key];if(varName&&typeof value==='string'){properties[varName]=value;}});return properties;}

/***/ }),

/***/ 8802:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports, "__esModule", ({value:true}));// Trailing slash handling depends in some site configuration options
function applyTrailingSlash(path,options){const{trailingSlash,baseUrl}=options;if(path.startsWith('#')){// Never apply trailing slash to an anchor link
return path;}// TODO deduplicate: also present in @docusaurus/utils
function addTrailingSlash(str){return str.endsWith('/')?str:`${str}/`;}function removeTrailingSlash(str){return str.endsWith('/')?str.slice(0,-1):str;}function handleTrailingSlash(str,trailing){return trailing?addTrailingSlash(str):removeTrailingSlash(str);}// undefined = legacy retrocompatible behavior
if(typeof trailingSlash==='undefined'){return path;}// The trailing slash should be handled before the ?search#hash !
const[pathname]=path.split(/[#?]/);// Never transform '/' to ''
// Never remove the baseUrl trailing slash!
// If baseUrl = /myBase/, we want to emit /myBase/index.html and not
// /myBase.html! See https://github.com/facebook/docusaurus/issues/5077
const shouldNotApply=pathname==='/'||pathname===baseUrl;const newPathname=shouldNotApply?pathname:handleTrailingSlash(pathname,trailingSlash);return path.replace(pathname,newPathname);}exports["default"]=applyTrailingSlash;

/***/ }),

/***/ 8780:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports, "__esModule", ({value:true}));exports.applyTrailingSlash=exports.blogPostContainerID=void 0;exports.blogPostContainerID='post-content';var applyTrailingSlash_1=__webpack_require__(8802);Object.defineProperty(exports, "applyTrailingSlash", ({enumerable:true,get:function(){return __importDefault(applyTrailingSlash_1).default;}}));

/***/ }),

/***/ 7594:
/***/ ((module, exports) => {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


/***/ })

}]);