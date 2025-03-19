"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  HEY_AI_LINK: () => HEY_AI_LINK,
  formatDate: () => formatDate,
  formatRelativeTime: () => formatRelativeTime,
  isValidEmail: () => isValidEmail,
  isValidPassword: () => isValidPassword
});
module.exports = __toCommonJS(src_exports);

// src/formatting/dateFormatter.ts
function formatDate(date, format = "short") {
  if (format === "short") {
    return date.toLocaleDateString();
  }
  return date.toLocaleDateString(void 0, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function formatRelativeTime(date) {
  const now = /* @__PURE__ */ new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSecs = Math.floor(diffInMs / 1e3);
  const diffInMins = Math.floor(diffInSecs / 60);
  const diffInHours = Math.floor(diffInMins / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInSecs < 60) {
    return "just now";
  } else if (diffInMins < 60) {
    return `${diffInMins} minute${diffInMins > 1 ? "s" : ""} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  } else if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  } else {
    return formatDate(date);
  }
}

// src/validation/validators.ts
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidPassword(password, minLength = 8) {
  if (password.length < minLength) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  return true;
}

// src/constants/constants.ts
var HEY_AI_LINK = "https://heymax.ai";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HEY_AI_LINK,
  formatDate,
  formatRelativeTime,
  isValidEmail,
  isValidPassword
});
