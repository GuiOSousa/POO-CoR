import { AProcess } from "./src/AProcess"
import { DotProcess } from "./src/DotProcess"
import { SpaceProcess } from "./src/SpaceProcess"
import { createInterface } from 'readline';
import * as fs from 'fs'

function main() {
    const dotProcess = new DotProcess()
    const aProcess = new AProcess(dotProcess)
    const spaceProcess = new SpaceProcess(aProcess)

    const readlineInterface = createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readlineInterface.question('Digite um texto ou caminho de arquivo: ', (text: string) => {
        fs.readFile(text, 'utf8', (err, data) => {
            if (err) {
                spaceProcess.process(text)
                return
            }
            console.log("Caminho acessado com sucesso!")
            spaceProcess.process(data)
        })
        readlineInterface.close()
    })
}
''
main()