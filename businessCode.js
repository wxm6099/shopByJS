/**
 * @name 生成从min到max的随机数
 * @param {Number} min
 * @param {Number} max
 */
const randomNum = (min, max) => {
  return parseInt(Math.random() * (max - min + 1) + min, 10)
}

const checkBusinessLicenseCodeFor15 = (ints) => {
  let ti = 0;
  let si = 0;// pi|11+ti
  let cj = 0;// （si||10==0？10：si||10）*2
  let pj = 10;// pj=cj|11==0?10:cj|11
  let lastNum = '';
  for (let i = 0; i < ints.length; i++) {
    ti = parseInt(ints[i]);
    si = pj + ti;
    cj = (0 == si % 10 ? 10 : si % 10) * 2;
    pj = cj % 11;
    if (i == ints.length - 1) {
      //lastNum =(1 - pj < 0 ? 11 - pj : 1 - pj) % 10;
      lastNum = si % 10
    }
  }
  if (lastNum == 1) {
    return true;
  } else {
    return false
  }
}

const checkBusinessLicenseCodeFor18 = value => {
  if (value.length == 15) {
    return businessLicense15(value);
  } else {
    var reg = /^([159Y]{1})([1239]{1})([0-9ABCDEFGHJKLMNPQRTUWXY]{6})([0-9ABCDEFGHJKLMNPQRTUWXY]{9})([0-9ABCDEFGHJKLMNPQRTUWXY])$/;
    if (!reg.test(value)) {
      return false;
    }
    var str = '0123456789ABCDEFGHJKLMNPQRTUWXY';
    var ws = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];
    var codes = new Array();
    codes[0] = value.substr(0, value.length - 1);
    codes[1] = value.substr(value.length - 1, value.length);
    var sum = 0;
    for (var i = 0; i < 17; i++) {
      sum += str.indexOf(codes[0].charAt(i)) * ws[i];
    }
    var c18 = 31 - (sum % 31);
    if (c18 == 31) {
      c18 = 'Y';
    } else if (c18 == 30) {
      c18 = '0';
    }
    if (str.charAt(c18) != codes[1].charAt(0)) {
      return false;
    }
    return true;
  }
}

export const createBusinessLicenseCode = () => {
  let str1 = '159Y'
  let array1 = str1.split('')
  let result1 = array1[randomNum(0, array1.length - 1)];

  let str2 = '1239'
  let array2 = str2.split('')
  let result2 = array2[randomNum(0, array2.length - 1)];

  let str3 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let array3 = str3.split('')
  let result3 = ''
  for (let i = 0; i < 6; i++) {
    let element = array3[randomNum(0, array3.length - 1)];
    result3 = `${result3}${element}`
  }

  let str4 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let array4 = str4.split('')
  let result4 = ''
  for (let i = 0; i < 9; i++) {
    let element = array4[randomNum(0, array4.length - 1)];
    result4 = `${result4}${element}`
  }

  let str5 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let array5 = str5.split('')
  let result5 = array5[randomNum(0, array5.length - 1)];

  return `${result1}${result2}${result3}${result4}${result5}`
}

export const checkBusinessLicenseCode = (value) => {
  if (value.length == 15) {
    return checkBusinessLicenseCodeFor15(value);
  } else {
    return checkBusinessLicenseCodeFor18(value)
  }
}


export default {
  checkBusinessLicenseCode,
  createBusinessLicenseCode,
}