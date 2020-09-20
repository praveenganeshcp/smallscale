import { IncomingMessage } from "http";

const formidable = require('formidable');

interface RequestBody {
    fields: any,
    files: any
}

export async function parseRequestBody(request: IncomingMessage): Promise<RequestBody> {
    return new Promise((resolve, reject) => {
        const form = formidable({ 
            multiples: true, 
            uploadDir:'./files',
            keepExtensions: true 
        });
        form.parse(request, (err, fields, files) => {
            if(err) {
                reject(err);
            }
            else{
               resolve({
                   fields, files
               })
            }
        });
    })
}