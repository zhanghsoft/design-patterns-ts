/*
 * @Author       : zhanghsoft
 * @Date         : 2022-06-27 16:46:38
 * @LastEditors  : zhanghsoft
 * @LastEditTime : 2022-06-28 10:11:53
 * @Description  : 简单工厂模式
 * 概述：
 * 集中式工厂的实现
 * 定义：
 * 定义个工厂类，它可以根据参数的不同返回不同类的实例，被创建的实例通常都具有共同的父类
 * 优点：
 *  1、对象创建和使用分离
 *  2、客户端无需知道创建的具体产品类的类名，只需知道具体产品所对应的参数名
 *  3、通过引入配置文件，可以在不修改客户端代码的情况更换产品
 * 缺点：
 *  1、工厂类职责太重
 *  2、系统扩展难，一旦新增产品，不得不修改工厂类
 * 适用场景：
 *  1、工厂类负责创建的对象比较少
 *  2、客户端只知道传入工厂类参数，不关心如何创建对象
 */

// 抽象产品 （接口或者抽象类）
export interface Product {
  method(): void;
}

// 具体产品类
export class ConcreteProductA implements Product {
  method(): void {
    throw new Error('Method not implemented.');
  }
}
// 具体产品类
export class ConcreteProductB implements Product {
  method(): void {
    throw new Error('Method not implemented.');
  }
}

// 工厂类
// 工厂方法依赖具体的产品类
export class Factory {
  factoryMethod(args: any): Product {
    if (args === 'A') {
      return new ConcreteProductA();
    } else if (args === 'B') {
      return new ConcreteProductB();
    } else {
      throw new Error('不支持该参数');
    }
  }
}

// 客户端代码
export class ClientNode {
  static main() {
    const factory = new Factory();
    const product = factory.factoryMethod('A');
    product.method();
  }
}
