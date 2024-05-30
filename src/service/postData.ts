import { supabase } from "../DB/db";

const sendData = async (dataPost: any) => {
  const { error,status,statusText
   } = await supabase.from("ContactoLanding").insert(dataPost);
  if (error) {
    throw {error,status,statusText};
  } 
  return {status,statusText}
};

export {sendData};