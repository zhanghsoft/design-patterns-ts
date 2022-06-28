/*
 * @Author       : zhanghsoft
 * @Date         : 2022-06-27 17:10:13
 * @LastEditors  : zhanghsoft
 * @LastEditTime : 2022-06-28 10:12:12
 * @Description  : 工厂方法模式
 * 概述：
 * 多态工厂的实现
 *  定义：
 * 定义一个用于创建对象的接口，但是让子类决定将哪个类实例化。工厂方法模式让一个类的实例延迟到其子类。
 *  优点：
 *  1、符合多态特性
 *  2、符合开闭原则
 * 缺点：
 *  1、产品与工厂类成对增加，增加了系统的复杂性
 * 适用场景：
 * 1、客户端不知道其所需要的对象的类
 * 2、抽象工厂类通过其子类来指定创建哪个对象
 */

// 产品抽象
export abstract class Product {
  abstract method(): void;
}

// 具体产品A
export class ConcreteProductA extends Product {
  method(): void {
    throw new Error('Method not implemented.');
  }
}
// 具体产品B
export class ConcreteProductB extends Product {
  method(): void {
    throw new Error('Method not implemented.');
  }
}
// 抽象工厂
export abstract class Factory {
  abstract factoryMethod(): Product;
}

// 具体工厂A
export class ConcreteProductAFactory extends Factory {
  factoryMethod(): Product {
    return new ConcreteProductA();
  }
}
// 具体工厂B
export class ConcreteProductBFactory extends Factory {
  factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

// 客户端代码
export class ClientNode {
  static main() {
    const factory = new ConcreteProductAFactory();
    const product = factory.factoryMethod();
    product.method();
  }
}
