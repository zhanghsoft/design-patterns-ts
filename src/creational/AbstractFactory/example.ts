// 抽象产品类
export interface Button {
  display(): void;
}
// 具体产品类
export class SpringButton implements Button {
  display(): void {
    console.log('显示绿色按钮');
  }
}
// 具体产品类
export class SummerButton implements Button {
  display(): void {
    console.log('显示浅蓝色按钮');
  }
}

// 抽象工厂类
export interface SkinFactory {
  createButton(): Button;
}

// 具体工厂
export class SpringSkinFactory implements SkinFactory {
  createButton(): Button {
    return new SpringButton();
  }
}

// 具体工厂
export class SummerSkinFactory implements SkinFactory {
  createButton(): Button {
    return new SummerButton();
  }
}

export class ClientNode {
  static main() {
    const factory = new SpringSkinFactory();
    const btn = factory.createButton();
    btn.display();
  }
}

ClientNode.main();
