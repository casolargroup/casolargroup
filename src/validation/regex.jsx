export const rgbReg = /rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/;
export const hslReg =
  /hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/;

export const hexRegexp = /^(?!(#?)$|#([0-9a-zA-Z]){1,6}$)/im;

// Validators
export const E_MAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const PASS_NUM = /\d/;

export const PASS_CHAR = /(?=.*[-!@#$%^&._*])/;

export const PASS_LEN = /^.{8,}$/;

export const PASS = new RegExp(`${PASS_NUM.source}|${PASS_CHAR.source}|${PASS_LEN.source}`);

export const NAME = /^[a-z ,.'-]+$/i;

export const PHONE = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

export const PHONENUMBER = /^(\+\d{1}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm;

export const ZIPCODE = /(^\d{5}(?:[\s]?[-\s][\s]?\d{4})?$)/;

export const LETTERS = /[a-zA-Z]+/;

export const LINK =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;
