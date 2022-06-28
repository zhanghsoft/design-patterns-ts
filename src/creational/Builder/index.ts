/*
 * @Author       : zhanghsoft
 * @Date         : 2022-06-28 09:09:23
 * @LastEditors  : zhanghsoft
 * @LastEditTime : 2022-06-28 10:12:56
 * @Description  :建造者模式
 * 概述：
 * 复杂对象的组装与创建
 * 定义：
 * 将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。
 * 解决问题：
 * 建造者模式的核心在于如何一步一步地构建一个包含多个组成部件的完整对象，使用相同的构建过程构建不同的产品
 * 优点：
 * 1、客户端不需要知道产品内部组成的细节，解耦产品本身与产品创建过程
 * 2、增加新的具体构建者无须修改原有类库的代码，系统扩展方便，符合开闭原则
 * 3、可以更加精细地控制产品的创建过程
 * 缺点：
 * 1、建造者模式所创建的产品一般具有较多的共同点，其组成相似。若产品的差异性很大，就不适用该模式。
 * 2、若产品的内部结构复杂且多变，可能会需要定义很多具体建造者类来实现这种变化，这就导致系统变得很庞大，增加系统的理解难度和运行成本
 * 适用场景：
 * 1、需要生成的产品对象有复杂的内部结构，这些产品对象通常包含多个成员变量
 * 2、需要生成的产品对象的属性相互依赖，需要指定其生成顺序
 * 3、隔离复杂对象的创建和使用，并使得相同的创建过程可以创建不同的产品
 */

//产品类
export class Product {
  private _partA!: string;
  private _partB!: string;
  private _partC!: string;

  public get partA(): string {
    return this._partA;
  }
  public set partA(value: string) {
    this._partA = value;
  }

  public get partB(): string {
    return this._partB;
  }
  public set partB(value: string) {
    this._partB = value;
  }
  public get partC(): string {
    return this._partC;
  }
  public set partC(value: string) {
    this._partC = value;
  }
}

/**
 * 抽象构建者
 * 抽象产品创建个部件的接口
 */
export abstract class Builder {
  protected product = new Product();
  abstract buildPartA(): void;
  abstract buildPartB(): void;
  abstract buildPartC(): void;

  // 返回产品对象
  getResult() {
    return this.product;
  }
}

// 具体构建者类
export class ConcreteBuilder extends Builder {
  buildPartA(): void {
    this.product.partA = 'PartA';
  }
  buildPartB(): void {
    this.product.partB = 'PartB';
  }
  buildPartC(): void {
    this.product.partC = 'PartC';
  }
}

/**
 * 指挥者类
 * 隔离客户与创建的过程
 * 控制产品的创建过程
 */
export class Director {
  private builder: Builder;
  // 构造器注入
  constructor(builder: Builder) {
    this.builder = builder;
  }
  // 设值注入
  setBuilder(builder: Builder) {
    this.builder = builder;
  }
  // 产品构建与组装方法
  construct() {
    this.builder.buildPartA();
    this.builder.buildPartB();
    this.builder.buildPartC();
    return this.builder.getResult();
  }
}

export class Client {
  static main() {
    const builder = new ConcreteBuilder();
    const director = new Director(builder);
    const product = director.construct();
    console.log(product);
  }
}
