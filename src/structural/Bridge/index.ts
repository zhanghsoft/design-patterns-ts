/*
 * @Author       : zhanghsoft
 * @Date         : 2022-06-28 11:12:56
 * @LastEditors  : zhanghsoft
 * @LastEditTime : 2022-06-28 11:54:54
 * @Description  : 桥接模式
 * 概述：
 * 处理多纬度的变化
 * 定义：
 * 将抽象部分与它的实现部分解耦，使得两者都能独立变化
 * 优点：
 * 1、桥接模式可以取代多层继承方案
 * 2、分离抽象接口以及实现部分
 * 3、扩展性好
 * 缺点：
 * 1、会增加系统的理解和设计难度
 * 2、要求正确识别出系统中两个独立变化的纬度，因此使用范围具有一定的局限性
 * 适用场景:
 * 1、若系统需要在抽象类和具体类之间增加更多的灵活性，
 * 避免在两个层次之间建立静态继承关系，该模式可以使他们在抽象层建立一个关联关系
 * 2、当系统需要对抽象类和实现类进行动态耦合时
 * 3、在不希望使用继承或因为多层继承导致系统类的个数急剧增加的系统
 */

/**
 * 抽象类
 * 定义抽象类的接口，一般为抽象类而不是接口，其中定义了一个Implementor(实现类接口)类型对象
 */
export abstract class Abstraction {
  protected impl!: Implementor;
  setImpl(impl: Implementor) {
    this.impl = impl;
  }

  abstract operation(): void;
}

/**
 * 扩充抽象类
 * 扩充有Abstraction定义的接口，通常情况下它是具体类。实现了Abstraction中声明的抽象业务方法。
 *
 */

export class RefinedAbstraction extends Abstraction {
  operation(): void {
    this.impl.operationImpl(); // 调用实现类的方法
  }
}

/**
 * 实现类接口
 *
 */
export interface Implementor {
  operationImpl(): void;
}
// 具体实现类

export class ConcreteImplementor implements Implementor {
  operationImpl(): void {
    throw new Error('Method not implemented.');
  }
}
