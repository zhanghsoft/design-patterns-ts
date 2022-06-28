/*
 * @Author       : zhanghsoft
 * @Date         : 2022-06-28 14:33:21
 * @LastEditors  : zhanghsoft
 * @LastEditTime : 2022-06-28 14:51:32
 * @Description  : 外观模式
 * 概述：
 * 提供统一入口
 * 定义：
 * 为子系统中的一组接口提供一个统一的入口。
 * 外观模式定义了一个高层接口，这个接口使得子系统更加容易使用
 */

/**
 * SubSystem(子系统角色)
 * 在软件系统中可以有一个或者多个子系统角色
 */
class Subsystem1 {
  public operation1(): string {
    return 'Subsystem1: Ready!\n';
  }

  public operationN(): string {
    return 'Subsystem1: Go!\n';
  }
}

/**
 * SubSystem(子系统角色)
 * 在软件系统中可以有一个或者多个子系统角色
 */
class Subsystem2 {
  public operation1(): string {
    return 'Subsystem2: Get ready!\n';
  }

  public operationZ(): string {
    return 'Subsystem2: Fire!';
  }
}

/**
 * 外观角色（Facade）
 * 客户端可以调用这个角色的方法，在外观角色中可以知道相关的（一个或者多个）子系统的功能和责任
 * 正常情况下，它将所有从客户端发来的请求委派到响应的子系统中去，传递给相应的子系统对象处理
 *
 */
export class Facade {
  protected subsystem1: Subsystem1;
  protected subsystem2: Subsystem2;

  constructor(subsystem1: Subsystem1, subsystem2: Subsystem2) {
    this.subsystem1 = subsystem1 || new Subsystem1();
    this.subsystem2 = subsystem2 || new Subsystem2();
  }

  public operation(): string {
    let result = 'Facade initializes subsystems:\n';
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation1();
    result += 'Facade orders subsystems to perform the action:\n';
    result += this.subsystem1.operationN();
    result += this.subsystem2.operationZ();

    return result;
  }
}

export class ClientCode {
  static main() {
    const subsystem1 = new Subsystem1();
    const subsystem2 = new Subsystem2();
    const facade = new Facade(subsystem1, subsystem2);
    console.log( facade.operation())
  }
}

ClientCode.main()
