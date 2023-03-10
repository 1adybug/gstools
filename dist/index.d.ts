/**
 * 休眠指定时间
 * @param {number} time - 休眠的毫秒数
 */
export declare function sleep(time: number): Promise<unknown>;
/**
 * 取两个整数之间的随机数
 * @param {string} start - 开始的数字，闭区间
 * @param {string} end - 结束的数字，闭区间
 */
export declare function getRandomBetween(start: number, end: number): number;
/**
 * 取数组中的随机一个元素
 * @param list - 数组
 */
export declare function getRandomItemFromList<T>(list: T[]): T;
/** 0-9集合 */
export declare const digitList: number[];
/**
 * 获取随机手机号
 */
export declare function getRandomPhone(): string;
/**
 * 可能性
 * @param {number} p - 可能性
 */
export declare function possibility(p: number): boolean;
/** 车牌号可用的字母 */
export declare const plateNoAlphabetList: string[];
/**
 * 获取随机一位车牌号
 */
export declare function getRandomPlateNoItem(): string | number;
/**
 * 获取一个随机车牌号
 * @param start - 开始的两位，默认是苏H
 */
export declare function getRandomPlateNo(start?: string): string;
/** 获取随机年份 */
export declare function getRandomYear(): number;
/** 获取一个月的长度，忽略闰年 */
export declare function getMonthLength(month: number): 31 | 30 | 28;
/** 获取一个随机月份日期 */
export declare function getRandomDate(): string;
/**
 * 获取一个随机身份证
 * @param area - 区号
 *
 */
export declare function getRandomId(area?: number): string;
/** 判断两个数字是否相等 */
export declare function twoNumberIsEqual(a: number, b: number): boolean;
/**
 * 获取两个经纬度坐标之间的距离
 * @param {number[]} coord1 - 经纬度一
 * @param {number[]} coord2 - 经纬度二
 */
export declare function getDistance(coord1: number[], coord2: number[]): number;
/**
 * 获取对象的某些属性
 * @param {object} obj - 对象
 * @param {string[]} keyList - 需要取出的 key 集合
 */
export declare function getProperties<T, K extends keyof T>(obj: T, ...keyList: K[]): Pick<T, K>;
/**
 * 判断一个变量是否是非 null 的对象
 */
export declare function isObject(a: any): boolean;
/**
 * 比较两个变量是否相等
 */
export declare function equal(a: any, b: any): boolean;
/**
 * 比较两个变量是否相等
 * @param {string[]} ignoreList - 忽略的 key 集合
 */
export declare function isEqual<A = any, B = any>(a: A, b: B, ...ignoreList: (keyof A | keyof B)[]): boolean;
/**
 * 比较两个对象的某些属性
 * @param {string[]} keyList - 比较的 key 集合
 */
export declare function compareProperties<T>(a: T, b: T, ...keyList: (keyof T)[]): boolean;
/** 身份证正则 */
export declare const idReg: RegExp;
/**
 * 判断是否是合法身份证号
 * @param {string} id - 身份证号
 */
export declare function isLegalId(id: string): boolean;
/**
 * 将字符串或者字符串的数组变成字符串数组
 * @param {string | (string[])} id - 字符串或者字符串数组
 */
export declare function stringToArray(id: string | string[]): string[];
/**
 * 将身份证打码
 * @param {string} id - 身份证号
 */
export declare function coverIdWithMosaics(id: string): string;
/** 格式化选项 */
export interface StringToNumberOption {
    /** 是否转换成小数，默认为 false */
    float?: boolean;
    /** 最小值，低于最小值将会输出最小值 */
    min?: number;
    /** 最大值，大于最大值将会输出最大值 */
    max?: number;
    /** NaN 时输出的值 */
    default: number;
}
/**
 * 将字符串转换为数字
 * @param {string} value - 字符串
 * @param {number | StringToNumberOption} option - 转换的选项
 */
export declare function stringToNumber(value: string, option?: number | StringToNumberOption): number;
/** 获取一个每帧执行一次的函数 */
export declare function getRunAtFrame(): (fun: () => void) => void;
/**
 * 从身份证中获取年龄
 * @param {string} id - 身份证号
 */
export declare function getAgeFromId(id: string): number;
/**
 * 立即执行，并且定期再执行的函数
 * @param {Function} callback - 回调函数
 * @param {number} period - 周期
 */
export declare function setPeriod(callback: () => void, period: number): number;
/**
 * 给数字补0
 * @param {number} number - 需要补0的数字，自然数
 * @param {number} length - 补足的长度，大于等于上一个数的位数
 */
export declare function addZero(number: number, length?: number): string;
/** 获取随机姓名 */
export declare function getRandomName(): string;
/** ECharts 的配色 */
export declare const ECHARTS_COLOR: {
    blue: string;
    green: string;
    yellow: string;
    red: string;
    skyblue: string;
    orange: string;
    deepGreen: string;
    purple: string;
};
/** ECharts 的配色列表 */
export declare const ECHARTS_COLOR_LIST: string[];
/** 一个经度的距离 */
export declare const ONE_LNG = 92693;
/** 一个纬度的距离 */
export declare const ONE_LAT = 111319;
