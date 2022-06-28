/*
 * @Author       : zhanghsoft
 * @Date         : 2022-06-28 14:53:14
 * @LastEditors  : zhanghsoft
 * @LastEditTime : 2022-06-28 15:13:20
 * @Description  : 代理模式
 * 概述：
 * 对象的间接访问
 * 定义：
 * 给某个对象提供一个代理或占位符，并由代理对象来控制对原对象的访问
 * 优点：
 * 1、代理模式可协调调用者和被调用者，在一定程度上降低了系统的耦合度
 * 2、客户端可以针对主题角色进行编程，增加和更换代理类无须修改源代码
 * 缺点：
 * 1、有些代理模式实现非常复杂
 * 适用场景：
 * 1、当客户端对象需要访问远程主机中的对象时，可以使用远程代理
 * 2、当需要用一个消耗资源较少的对象来代表一个消耗资源较多的对象，从而降低系统开销、缩短运行时间时，可以使用虚拟代理
 * 3、当需要控制对一个对象的访问，为不同用户提供不同级别的访问权限时，可以使用保护代理
 * 4、当需要为某一个被频繁访问的操作结果提供一个临时存储空间，以供多个客户端共享访问这些结果时，可以使用缓冲代理
 * 5、当需要为一个对象的访问提供一些额外的操作时，可以使用智能引用代理
 */

/**
 * Subject(抽象主题角色)
 * 真实主题和代理主题的共同接口
 */
export interface Subject {
  request(): void;
}

/**
 * Proxy(代理主题角色)
 * 内部包含了对真实主题的引用。
 * 代理主题角色中提供了一个与真实主题角色相同的接口，以便在任何时候都可以替代真实主题
 */
export class Proxy implements Subject {
  private realSubject: RealSubject;
  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }
  request(): void {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  private checkAccess(): boolean {
    console.log('Proxy: Checking access prior to firing a real request.');

    return true;
  }

  private logAccess(): void {
    console.log('Proxy: Logging the time of request.');
  }
}

/**
 * RealSubject(真实主题角色)
 * 定义了代理角色所代表的的真实对象，角色中实现了真实的业务操作
 */
export class RealSubject implements Subject {
  request(): void {
    console.log('RealSubject: Handling request.');
  }
}

export class ClientCode {
  static main() {
    const realSubject = new RealSubject();
    const proxy = new Proxy(realSubject);
    proxy.request();
  }
}

ClientCode.main();
