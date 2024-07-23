
import { drive_v3,sheets_v4 } from "googleapis"
export const createSpreadsheet = async (auth: any) => {
    const drive = new drive_v3.Drive({ auth });
    const fileMetadata = {
      name: 'New Spreadsheet',
      mimeType: 'application/vnd.google-apps.spreadsheet',
    };
  
    const response = await drive.files.create({
      requestBody: fileMetadata,
      fields: 'id',
    });
  
    return response.data.id;
  };
  
  export const insertHeader = async (auth: any, spreadsheetId: any) => {
    const sheets = new sheets_v4.Sheets({ auth });
    const range = 'Sheet1!A1:G1'; // Rango para el encabezado
    const headers = ['Nombre', 'Apellidos', 'EMAIL CORPORATIVO', 'NÚMERO DE CELULAR', 'NOMBRE DE LA EMPRESA', 'CIUDAD', 'DÉJANOS TU MENSAJE Y PRONTO NOS CONTACTAREMOS CONTIGO']; // Encabezados
  
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
  
    if (!response.data.values || response.data.values.length === 0) {
      const resource = {
        values: [headers],
      };
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range,
        valueInputOption: 'RAW',
        requestBody: resource,
      });
    }
  };
  
  export const googleSheetSave = async (data: any, auth: any, spreadsheetId: any) => {
    const sheets = new sheets_v4.Sheets({ auth });
    const range = "Sheet1!A2:G";
    const resource = {
      values: data,
    };
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: resource,
    });
  };