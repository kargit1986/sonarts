import { IHelloService } from "./hello.service.interface";

export class HelloComponent {

    constructor(private helloService: IHelloService) {}
    public sayBye(): string {
        return "bye";
    }

    public sayHello(): string {
        return this.helloService.sayHello();
    }
}
