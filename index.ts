//from: https://www.digitalocean.com/community/tutorials/typescript-new-project

import path from "path";
import { extractData } from "./qrDataExtractor";

const world = 'world';


const pdfFilePath = path.resolve(__dirname, './sample.pdf');

extractData(pdfFilePath)