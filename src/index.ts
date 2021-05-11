import * as admin from "firebase-admin";
import * as fs from "fs";
import { SaveConfiguration } from "./SaveConfiguration";

admin.initializeApp();
const firestore = admin.firestore();
const saveConfiguration = new SaveConfiguration(firestore);

const javascript = fs.readFileSync('./scripts/SP.js')

saveConfiguration.save({
    state: 'SP',
    initialUrl: 'https://satsp.fazenda.sp.gov.br/COMSAT/Public/ConsultaPublica/ConsultaPublicaCfe.aspx',
    javascript: javascript.toString()
}).then(()=>console.log('saved'))
