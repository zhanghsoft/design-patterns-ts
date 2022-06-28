/*
 * @Author       : zhanghsoft
 * @Date         : 2022-06-27 17:43:15
 * @LastEditors  : zhanghsoft
 * @LastEditTime : 2022-06-28 10:11:23
 * @Description  : 抽象工厂模式
 * 概述：
 *  产品族的创建
 * 定义：
 * 提供一个创建一系列相关或相互依赖对象的接口，而无须指定它们具体的类
 * 优点：
 *  增加新的产品族很方便，符合开闭原则
 * 缺点：
 * 增加新的产品等级结构麻烦，需要对原有系统进行较大的修改，甚至需要修改抽象层代码，违背了开闭原则
 * 适用场景：
 * 1、对象的创建于使用解耦
 * 2、系统有多个产品族，而每次只使用某一个产品族
 * 3、属于同一个产品族的产品将在一起使用
 * 4、产品等级结构稳定，设计完成之后，不经常增加新的产品等级结构或者删除已有的产品等级结构
 */

// 抽象产品A
export interface ProductA {
  method(): void;
}

// 抽象产品B
export interface ProductB {
  method(): void;
}

//具体产品A1
export class ConcreteProductA1 implements ProductA {
  method(): void {
    throw new Error('Method not implemented.');
  }
}
//具体产品A2
export class ConcreteProductA2 implements ProductA {
  method(): void {
    throw new Error('Method not implemented.');
  }
}

// 具体产品B1
export class ConcreteProductB1 implements ProductB {
  method(): void {
    throw new Error('Method not implemented.');
  }
}
// 具体产品B2
export class ConcreteProductB2 implements ProductB {
  method(): void {
    throw new Error('Method not implemented.');
  }
}

// 抽象工厂
export interface Factory {
  createProductA(): ProductA;
  createProductB(): ProductB;
}

// 具体工厂1
export class ConcreteFactory1 implements Factory {
  createProductA(): ProductA {
    throw new Error('Method not implemented.');
  }
  createProductB(): ProductB {
    throw new Error('Method not implemented.');
  }
}

// 具体工厂2
export class ConcreteFactory2 implements Factory {
  createProductA(): ProductA {
    throw new Error('Method not implemented.');
  }
  createProductB(): ProductB {
    throw new Error('Method not implemented.');
  }
}
