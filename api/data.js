import { head } from '@vercel/blob';
export default async function handler(req,res){
 if(req.method!=='GET') return res.status(405).json({error:'method_not_allowed'});
 try{
  const blob=await head('lagenhet-434/data.json',{token:process.env.BLOB_READ_WRITE_TOKEN});
  const r=await fetch(blob.downloadUrl,{cache:'no-store'});
  if(!r.ok) throw new Error('blob');
  res.setHeader('Cache-Control','no-store');
  return res.status(200).json(await r.json());
 }catch(e){return res.status(200).json({status:'unknown',uppdaterad:null,natter:[]});}
}