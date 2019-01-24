import { IHelloService } from "./hello.service.interface";

export class HelloComponent {

    constructor(private helloService: IHelloService) {}
    public sayBye(): string {
        return "bye";
    }

    public sayHello1(): string {
        return this.helloService.sayHello();
    }
}
