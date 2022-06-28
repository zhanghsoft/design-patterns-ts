/*
 * @Author       : zhanghsoft
 * @Date         : 2022-06-28 11:55:40
 * @LastEditors  : zhanghsoft
 * @LastEditTime : 2022-06-28 13:53:23
 * @Description  : 组合模式
 * 概述：
 * 处理树形结构
 * 定义：
 * 组合多个对象形成树形结构以表示具有部分-整体关系的层次结构。
 * 组合模式让客户端可以统一对待单个对象和组合对象。
 * 优点：
 * 1、客户端忽略层次的差异，可以一致地使用一个组合结构或其中单个对象，
 * 不必关心处理的是单个对象还是整个组合结构，简化了客户端代码
 * 2、在组合模式中增加新的容器构件和叶子构件都很方便，无须对现有类库进行任何修改，符合开闭原则
 * 3、组合模式为树形结构的面向对象实现提供了一种灵活的解决方案
 * 缺点：
 * 在增加新构件时很难对容器中的构件类型进行限制
 * 适用场景：
 * 1、在具有整体和部分的层次结构中，希望通过一种方式忽略整体与部分的差异，客户端可以一致性地对待它们
 * 2、在一个使用面向对象语言开发的系统中需要处理一个树形结构
 * 3、在一个系统中能够分离叶子对象和容器对象，而且它们的类型不固定，将来需要增加一些新的类型
 *
 */

/**
 * 抽象控件
 * 接口或者抽象类，为叶子构件和容器构件对象声明接口
 */
export abstract class Component {
  abstract add(c: Component): void;
  abstract remove(c: Component): void;
  abstract getChild(i: number): Component;
  abstract operation(): void;
}

/**
 * 叶子构件
 * 表示叶子节点对象。没有子节点，实现了抽象构件中定义的行为
 */
export class Leaf extends Component {
  add(c: Component): void {
    throw new Error('Method not implemented.');
  }
  remove(c: Component): void {
    throw new Error('Method not implemented.');
  }
  getChild(i: number): Component {
    throw new Error('Method not implemented.');
  }
  operation(): void {
    // 叶子构件具体业务方法的实现
  }
}

/**
 * 容器构件
 * 表示容器节点镀锡。容器节点包含子节点，子节点可以是叶子节点，也可以是容器节点。
 */
export class Composite extends Component {
  private list: Component[] = [];
  add(c: Component): void {
    this.list.push(c);
  }
  remove(c: Component): void {
    this.list.filter((item) => item !== c);
  }
  getChild(i: number): Component {
    return this.list[i];
  }
  operation(): void {
    for (const component of this.list) {
      component.operation();
    }
  }
}
