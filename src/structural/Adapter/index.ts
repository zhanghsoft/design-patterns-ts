/*
 * @Author       : zhanghsoft
 * @Date         : 2022-06-28 10:45:28
 * @LastEditors  : zhanghsoft
 * @LastEditTime : 2022-06-28 11:11:40
 * @Description  : 适配器模式
 * 概述：
 * 不兼容结构的协调
 * 定义：
 * 将一个类的接口转换成客户希望的另一个接口。适配器模式让那些接口不兼容的类可以一起工作
 * 优点：
 * 1、一个对象适配器可以把多个不同的适配者适配到同一个目标
 * 2、可以适配一个适配者的子类。
 * 缺点：
 * 1、很多语言无法支持多重类继承，不能同时适配多个适配者
 * 适用场景：
 * 1、系统需要使用一些现有的类，而这些类的接口（如方法名）不符合系统的要求。
 * 2、想创建一个可以复用的类，用于与一些彼此之间没有太大关联的类
 */

/**
 * 目标抽象类
 * 定义客户所需接口，可以是一个抽象类或接口
 */
export abstract class Target {
  abstract request(): void;
}

/**
 * 适配者类
 * 被适配角色，一个已经存在的接口，该接口需要适配
 */
export abstract class Adaptee {
  abstract specificRequest(): void;
}

// 具体适配者类
export class ConcreteAdaptee extends Adaptee {
  specificRequest(): void {
    console.log('发送请求');
  }
}

/**
 * 适配器类
 * 对目标抽象类和适配者类进行适配
 */
export class Adapter extends Target {
  private adaptee: Adaptee;
  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }
  request(): void {
    this.adaptee.specificRequest();
  }
}

export class ClientCode {
  static main() {
    const adaptee = new ConcreteAdaptee();
    const adapter = new Adapter(adaptee);
    adapter.request();
  }
}
