import { supabase } from "../DB/db";

async function POSTData( dataPost = {}) {
  try{
    const { error,data } = await supabase
    .from('ContactLanding')
    .insert(dataPost)

    return { error, data }
  }catch(error){
    console.log('Error in POSTData', error)
  }
  
} 

export {POSTData};