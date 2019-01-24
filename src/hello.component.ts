import { IHelloService } from "./hello.service.interface";

export class HelloComponent {

    constructor(private helloService: IHelloService) {}
    public sayBye(): string {
        return "bye";
    }

    public sayHello1(): string {
        return this.helloService.sayHello();
    }
    public sayHello2(): string {
        return this.helloService.sayHello();
    }
    public sayHello3(): string {
        return this.helloService.sayHello();
    }
    public sayHello4(): string {
        return this.helloService.sayHello();
    }
    public sayHello5(): string {
        return this.helloService.sayHello();
    }
    public sayHello6(): string {
        return this.helloService.sayHello();
    }
    public sayHello7(): string {
        return this.helloService.sayHello();
    }
}
