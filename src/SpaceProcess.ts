import { Process } from "./Process";

export class SpaceProcess extends Process {
    constructor(
        next?: Process
    ) {
        super(next)
    }

    process(data: string): void {
        const spaceSplit = data.split(' ')
        const spaceCount = spaceSplit.length - 1
        console.log(`Espacos encontrados: ${spaceCount}`)
        this.pass(data)
    }
}