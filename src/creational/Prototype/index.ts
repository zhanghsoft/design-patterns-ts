/*
 * @Author       : zhanghsoft
 * @Date         : 2022-06-28 10:05:38
 * @LastEditors  : zhanghsoft
 * @LastEditTime : 2022-06-28 10:29:45
 * @Description  : 原型模式
 * 概述：
 * 对象的克隆
 * 定义：
 * 使用原型实例指定待创建对象的类型，并且通过复制这个原型来创建新的对象
 * 优点：
 * 1、提高实例的创建效率
 * 2、扩展性较好
 * 3、简化创建结构
 * 4、可以使用深克隆方式保存对象的状态
 * 缺点：
 * 1、需要为每一个类配备一个克隆方法，且该克隆方法位于一个类的内部。
 * 2、实现深克隆代码较复杂
 * 适用场景：
 * 1、创建新对象成本较大（如初始化需要占用较长时间，占用太多CPU资源或网络资源）
 *
 */

/**
 * 抽象原型类
 * 声明克隆方法的接口，可以是抽象类、接口
 */
export abstract class Prototype {
  abstract clone(): Prototype;
}

/**
 * 具体原型类
 * 实现抽象原型类中声明的克隆方法
 */
export class ConcretePrototypeA extends Prototype {
  private _attr!: string;
  public get attr(): string {
    return this._attr;
  }
  public set attr(value: string) {
    this._attr = value;
  }

  clone(): Prototype {
    const prototype = new ConcretePrototypeA(); // 创建新的对象
    prototype._attr = this._attr;
    return prototype;
  }
}

export class Client {
  static main() {
    const obj1 = new ConcretePrototypeA();
    obj1.attr = 'Sunny';
    const obj2 = obj1.clone();
  }
}
