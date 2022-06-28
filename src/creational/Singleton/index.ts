/*
 * @Author       : zhanghsoft
 * @Date         : 2022-06-28 10:31:15
 * @LastEditors  : zhanghsoft
 * @LastEditTime : 2022-06-28 10:41:12
 * @Description  : 单例模式
 * 概述：
 * 确保对象的唯一性
 * 定义：
 * 确保一个类只有一个实例，且提供一个全局访问点来访问这个唯一实例
 * 优点:
 * 1、单例模式提供了对唯一实例的受控访问
 * 2、只存在一个对象，节约系统资源
 * 缺点：
 * 1、单例模式无抽象层，扩展很困难
 * 适用场景：
 * 1、系统只需要一个实例对象
 */

export class Singleton {
  private static instance: Singleton;
  private constructor() {}
  static getInstance() {
    if (!Singleton.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

export class ClientNode {
  static main() {
    const obj = Singleton.getInstance();
  }
}
