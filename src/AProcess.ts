import { Process } from "./Process";

export class AProcess extends Process {
    constructor(
        next?: Process
    ) {
        super(next)
    }

    process(data: string): void {
        const spaceSplit = data.split('a')
        const spaceCount = spaceSplit.length - 1
        console.log(`A's encontrados: ${spaceCount}`)
        this.pass(data)
    }
}