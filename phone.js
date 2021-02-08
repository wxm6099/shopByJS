/**
 * 移动
 */
const chinaMobile = [134, 135, 136, 137, 138, 139, 147, 150, 151, 152, 157, 158, 159, 165, 172, 178, 182, 183, 184, 187, 188, 198]

/**
 * 联通
 */
const chinaUnicom = [130, 131, 132, 145, 155, 156, 166, 171, 175, 176, 185, 186]

/**
 * 电信
 */
const chinaTelecom = [133, 149, 153, 173, 177, 180, 181, 189, 199]

/**
 * @name 生成从min到max的随机数
 * @param {Number} min
 * @param {Number} max
 */
const randomNum = (min, max) => {
  return parseInt(Math.random() * (max - min + 1) + min, 10)
}

export const createPhone = (count) => {

  let arr = [chinaMobile, chinaUnicom, chinaTelecom]
  let result = []
  for (let i = 0; i < count; i++) {
    let arr0 = arr[randomNum(0,2)]
    let str = arr0[randomNum(0,arr0.length-1)]

    for (let j = 0; j < 8; j++) {
      let num = randomNum(0,9)
      str = `${str}${num}`
    }
    let dic = {phone: str}
    result.push(dic)
  }
  return result
}

export default {
  createPhone
}