import { Process } from "./Process";

export class DotProcess extends Process {
    constructor(
        next?: Process
    ) {
        super(next)
    }

    process(data: string): void {
        const spaceSplit = data.split('.')
        const spaceCount = spaceSplit.length - 1
        console.log(`Pontos encontrados: ${spaceCount}`)
        this.pass(data)
    }
}