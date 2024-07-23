import {Auth} from 'googleapis';

import path from 'node:path';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'];
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');

 const  authorize = async () => {
    const auth = new Auth.GoogleAuth({
      keyFile: CREDENTIALS_PATH,
      scopes: SCOPES,
    });
  
    return await auth.getClient();
  };

const authories = {
  authorize
}
export default authories