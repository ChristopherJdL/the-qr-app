//from: https://www.digitalocean.com/community/tutorials/typescript-new-project

import path from "path";
import { extractData } from "./qrDataExtractor";

const pdfFilePath = path.resolve(__dirname, '../.samples/403920195177-6015700849-ticket.pdf');

extractData(pdfFilePath).then(data => {
  console.log(data?.data)
})