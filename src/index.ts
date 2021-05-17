import * as admin from "firebase-admin";
import * as fs from "fs";
import { SaveConfiguration } from "./SaveConfiguration";

admin.initializeApp();
const firestore = admin.firestore();
const saveConfiguration = new SaveConfiguration(firestore);


saveConfiguration.save({
    state: 'SP',
    initialURL: 'https://satsp.fazenda.sp.gov.br/COMSAT/Public/ConsultaPublica/ConsultaPublicaCfe.aspx',
    javascript: fs.readFileSync('./scripts/SP.js').toString()
}).then(()=>console.log('saved SP'))

saveConfiguration.save({
    state: 'MG',
    initialURL: 'https://nfce.fazenda.mg.gov.br/portalnfce/sistema/consultaarg.xhtml',
    javascript: fs.readFileSync('./scripts/MG.js').toString()
}).then(()=>console.log('saved MG'))

saveConfiguration.save({
    state: 'RJ',
    initialURL: 'https://www4.fazenda.rj.gov.br/consultaDFe/paginas/consultaChaveAcesso.faces',
    javascript: fs.readFileSync('./scripts/RJ.js').toString()
}).then(()=>console.log('saved RJ'))

