import { IHelloService } from "./hello.service.interface";

export class HelloComponent {

    constructor(private helloService: IHelloService) {}
    public sayBye(): string {
        return "bye";
    }

    public sayAnotherthing(): string {
		return "another thing";
    }

    public sayAnotherthing2(): string {
		return "another thing 2";
    }

    public sayHello(): string {
        return this.helloService.sayHello();
    }
}
