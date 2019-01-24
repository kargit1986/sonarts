import { HelloComponent } from "./hello.component";
import { IHelloService } from "./hello.service.interface";
class MockHelloService implements IHelloService {
    public sayHello(): string {
        return "Hello world!";
    }
}

describe("HelloComponent", () => {
    it("should say 'Hello world!'", () => {
        const mockHelloService = new MockHelloService();
        const helloComponent = new HelloComponent(mockHelloService);

        expect(helloComponent.sayHello1()).toEqual("Hello world!");
    });
});
