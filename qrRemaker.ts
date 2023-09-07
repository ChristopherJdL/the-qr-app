import { extractData } from "./qrDataExtractor";
import { toFile } from "qrcode"

export async function remakeQr(pdfFilePath: string) {
    var data = await extractData(pdfFilePath)

    toFile("./.samples/output.png", data!.data)
}