import { supabase } from "../DB/db";

const fetchData = async (dataPost: any) => {
  const { data, error } = await supabase.from("ContactoLanding").insert(dataPost);
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
  console.log(data);
};

export {fetchData};