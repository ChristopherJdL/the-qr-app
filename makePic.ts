import { pdfToPng } from 'pdf-to-png-converter'

export async function makePic(pdfFilePath: string) {
    var pages = await pdfToPng(pdfFilePath) //just first page for the moment

    var page = pages[0]

    return page
}
