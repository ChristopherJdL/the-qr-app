
import {fromPath} from 'pdf2pic' 


export function extractData(pdfFilePath: string)
/*TODO: Change to some sort of buffer type when moved to ws*/{


    //TODO: try to change the library because seems to not work
    const pdf2picOptions = {
    quality: 100,
    density: 300,
    format: 'png',
    width: 2000,
    height: 2000,
    };

    fromPath(pdfFilePath, pdf2picOptions)(
    1, // page number to be converted to image
    pdf2picOptions // returns base64 output
    ).then((data: { base64: any; }) => {
        
    const dataUri = data?.base64;
    console.log(dataUri)
});

}
