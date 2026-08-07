import { put } from '@vercel/blob';
export default async function handler(req,res){
 if(req.method!=='POST') return res.status(405).json({error:'method_not_allowed'});
 if((req.headers.authorization||'')!==`Bearer ${process.env.HA_PUSH_TOKEN}`) return res.status(401).json({error:'unauthorized'});
 const b=typeof req.body==='string'?JSON.parse(req.body):(req.body||{});
 const n=Array.isArray(b.natter)?b.natter.map(x=>({datum:String(x?.datum||'').slice(0,10),typ:x?.typ==='agare'?'agare':'gast',timmar:Number.isFinite(Number(x?.timmar))?Number(x.timmar):null,preliminar:Boolean(x?.preliminar)})).filter(x=>/^\d{4}-\d{2}-\d{2}$/.test(x.datum)):[];
 const payload={status:String(b.status||'unknown').toLowerCase(),uppdaterad:new Date().toISOString(),natter:n};
 await put('lagenhet-434/data.json',JSON.stringify(payload),{access:'public',addRandomSuffix:false,allowOverwrite:true,contentType:'application/json',token:process.env.BLOB_READ_WRITE_TOKEN});
 return res.status(200).json({ok:true,antal_natter:n.length});
}