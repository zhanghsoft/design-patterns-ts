// 像素矩阵类：辅助类
export class Matrix {}

// 抽象图像类：抽象类
export abstract class Image {
  protected imp!: ImageImp;
  setImageImp(imp: ImageImp) {
    this.imp = imp;
  }

  abstract parseFile(filename: string): void;
}

//抽象操作系统实现类：实现类接口
export interface ImageImp {
  doPaint(m: Matrix): void;
}

//windows操作系统实现类:具体实现类
export class WindowsImp implements ImageImp {
  doPaint(m: Matrix): void {
    console.log('在Windows操作系统中显示图像');
  }
}
//Linux操作系统实现类:具体实现类
export class LinuxImp implements ImageImp {
  doPaint(m: Matrix): void {
    console.log('在Linux操作系统中显示图像');
  }
}

export class JPGImage extends Image {
  parseFile(filename: string): void {
    const m = new Matrix();
    this.imp.doPaint(m);
    console.log(`${filename},格式为JPG。`);
  }
}
export class ClientCode {
  static main() {
    const image = new JPGImage();
    const imp = new LinuxImp();
    image.setImageImp(imp);
    image.parseFile('小农女');
  }
}

ClientCode.main()
