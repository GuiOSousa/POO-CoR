export class Process {
    constructor(
        protected next?: Process
    ) {}

    process(data: string): void {}
    
    pass(data: string): void {
        if (this.next) {
            this.next.process(data)
        }
    }
}