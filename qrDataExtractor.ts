import jsQR from "jsqr";
import { makePic } from "./makePic";

export async function extractData(pdfFilePath: string) {
    var pic = await makePic(pdfFilePath)

    var qrCodeText = jsQR(Uint8ClampedArray.from(pic.data), pic.width, pic.height)

    return qrCodeText
}
