import jsQR from "jsqr";
import { makePic } from "./makePic";
import { PNG } from "pngjs"

export async function extractData(pdfFilePath: string) {
    var pic = await makePic(pdfFilePath)

    const data = PNG.sync.read(pic.content).data;
    var qrCodeText = jsQR(Uint8ClampedArray.from(data), pic.width, pic.height)

    return qrCodeText
}
