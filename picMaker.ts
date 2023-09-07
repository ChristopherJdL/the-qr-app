import { pdfToPng } from 'pdf-to-png-converter'
import { PNG } from "pngjs"

export async function makePic(pdfFilePath: string) {
    var pages = await pdfToPng(pdfFilePath) //just first page for the moment

    var page = pages[0]
    const png = PNG.sync.read(page.content);

    return png
}
