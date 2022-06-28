/*
 * @Author       : zhanghsoft
 * @Date         : 2022-06-28 13:54:44
 * @LastEditors  : zhanghsoft
 * @LastEditTime : 2022-06-28 14:31:46
 * @Description  : 装饰模式
 * 概述：
 * 扩展系统功能
 * 定义：
 * 动态地给一个对象增加一些额外的职责。
 * 就扩展功能而言，装饰模式提供了一种比使用子类更加灵活的替代方案
 * 优点：
 * 1、对于扩展一个对象的功能，装饰模式比继承更加灵活，不会导致类的个数急剧增加
 * 2、可以通过一种动态的方式来扩展一个对象的功能
 * 3、可以对一个对象进行多次装饰
 */

/**
 * 抽象构件
 * 具体构件和抽象装饰类的共同父类，声明了在具体构件中实现的业务方法。
 * 引入抽象构件可以使客户端以一致地方式处理未被装饰的对象以及装饰之后对象，
 * 实现客户端的透明操作
 */
export interface Component {
  operation(): string;
}

/**
 * 具体构件
 * 抽象构件类的子类，装饰器可以给他增加额外的职责（方法）
 */
export class ConcreteComponent implements Component {
  operation(): string {
    return 'ConcreteComponent';
  }
}

/**
 * 抽象装饰类
 * 也是抽象构件类的子类，用于给具体构件增加职责，但是具体职责在其子类中实现
 * 她维护一个指向抽象构件对象的引用，通过该引用可以调用装饰之前构件对象的方法
 * 并通过其子类扩展该方法，已达到装饰的目的
 */
export class Decorator implements Component {
  protected component: Component;
  constructor(component: Component) {
    this.component = component;
  }
  operation(): string {
    return this.component.operation();
  }
}

/**
 * 具体装饰类
 * 抽象装饰类的子类，负责向构件添加新的职责。
 */
export class ConcreteDecoratorA extends Decorator {
  operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

/**
 * 具体装饰类
 * 抽象装饰类的子类，负责向构件添加新的职责。
 */
export class ConcreteDecoratorB extends Decorator {
  operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

export class ClientCode {
  static main() {
    const simple = new ConcreteComponent();
    const decorator1 = new ConcreteDecoratorA(simple);
    const decorator2 = new ConcreteDecoratorB(decorator1);
    console.log(decorator2.operation());
  }
}

ClientCode.main();
