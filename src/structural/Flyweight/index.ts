/*
 * @Author       : zhanghsoft
 * @Date         : 2022-06-28 15:14:51
 * @LastEditors  : zhanghsoft
 * @LastEditTime : 2022-06-28 16:00:10
 * @Description  : 享元模式
 * 概述：
 * 实现对象的复用
 * 定义：
 * 运用共享技术有效地支持大量细粒度对象的复用
 * 优点：
 * 1、极大减少内存中的对象的数量，使得相同或相似对象在内存中只保存一份，从而可以节约系统资源，提高系统性能
 * 2、享元模式的外部状态相对独立，而且不会影响其内部状态，从而使得享元对象可以在不同的环境中被共享
 * 缺点：
 * 1、需要分离内部和外部状态，系统会复杂
 * 2、享元模式需要将享元对象的部分状态外部化，读取外部状态将使得运行时间变长
 * 适用场景:
 * 1、系统有大量相同或者相似的对象，造成内存的大量耗费
 * 2、对象的大部分状态都可以外部化，可以将这些外部状态传入对象中
 * 3、使用享元模式时需要维护一个存储享元对象的享元池，而这需要耗费一定的系统资源。因此，在需要多次重复使用同一享元对象时才值得使用
 *
 */

/**
 * 内部状态：
 *存储在享元对象内部并且不会碎环境改变而改变的状态，内部状态可以共享。
 * 外部状态：
 * 随环境改变而改变，不可以共享的状态
 */

/**
 * ConcreteFlyweight(具体享元类)
 * 实现了抽象享元类，实例为享元对象。
 * 在具体享元类中为内部状态提供了存储空间。通常，可以结合单例模式来设计具体享元类，
 * 为每个具体享元类提供唯一的享元对象。
 */
/**
 * UnsharedConcreteFlyweight(非共享具体享元类)
 * 并不是所有的抽象享元类的子类都需要被共享，
 * 不能被共享的子类可以设计为非共享具体享元类。
 */

/**
 * Flyweight(抽象享元类)
 * 一个接口或者是抽象类，在抽象享元类中声明了具体享元类公共方法，
 * 这些方法可以向外界提供享元对象的内部数据（内部状态），
 * 同时也可以通过这些方法来设置外部数据（外部状态）
 */
class Flyweight {
  private sharedState: any;

  constructor(sharedState: any) {
    this.sharedState = sharedState;
  }

  public operation(uniqueState: any): void {
    const s = JSON.stringify(this.sharedState);
    const u = JSON.stringify(uniqueState);
    console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
  }
}

/**
 * FlyweightFactory(享元工厂类)
 * 创建且管理享元对象。针对抽象享元类编程，将各种类型的具体享元对象存储在一个享元池中。
 */
class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = <any>{};

  constructor(initialFlyweights: string[][]) {
    for (const state of initialFlyweights) {
      this.flyweights[this.getKey(state)] = new Flyweight(state);
    }
  }

  private getKey(state: string[]): string {
    return state.join('_');
  }

  public getFlyweight(sharedState: string[]): Flyweight {
    const key = this.getKey(sharedState);

    if (!(key in this.flyweights)) {
      console.log(
        "FlyweightFactory: Can't find a flyweight, creating new one.",
      );
      this.flyweights[key] = new Flyweight(sharedState);
    } else {
      console.log('FlyweightFactory: Reusing existing flyweight.');
    }

    return this.flyweights[key];
  }

  public listFlyweights(): void {
    const count = Object.keys(this.flyweights).length;
    console.log(`\nFlyweightFactory: I have ${count} flyweights:`);
    for (const key in this.flyweights) {
      console.log(key);
    }
  }
}

const factory = new FlyweightFactory([
  ['Chevrolet', 'Camaro2018', 'pink'],
  ['Mercedes Benz', 'C300', 'black'],
  ['Mercedes Benz', 'C500', 'red'],
  ['BMW', 'M5', 'red'],
  ['BMW', 'X6', 'white'],
  // ...
]);
factory.listFlyweights();

// ...

function addCarToPoliceDatabase(
  ff: FlyweightFactory,
  plates: string,
  owner: string,
  brand: string,
  model: string,
  color: string,
) {
  console.log('\nClient: Adding a car to database.');
  const flyweight = ff.getFlyweight([brand, model, color]);

  // The client code either stores or calculates extrinsic state and passes it
  // to the flyweight's methods.
  flyweight.operation([plates, owner]);
}

addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');

addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');

factory.listFlyweights();
