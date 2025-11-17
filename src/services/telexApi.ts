// src/services/telexApi.ts

export interface TelexReleaseRequest {
  BL_NUMBER: string;
}

export interface TelexReleaseResponse {
  docs: TelexReleaseDoc[];
}

export interface TelexReleaseDoc {
  BL_VESSEL: string;
  BL_VOYAGE: string;
  BL_PORT: string;
  BL_NUMBER: string;
  BL_GEN_TYPE: string;
  ACTIONDATE: string | null;
  ACTION: string | null; 
  NOTE1: string | null;
  NOTE2: string | null;
  BL_SURRENDERED: string;
  NOTE3: string | null;
  NOTIFY: string | null;
  CONSIGNEE: string | null;
  SHIPPER: string | null;
  EFFECTIVE_DAY: string;
}

export interface SurrenderResponse {
  statusCode: number;
  message: string;
}

const API_BASE_URL = 'https://epd.tslines.com/v1';

export const telexApi = {
  // 原有的查詢功能，新增 log
  async queryTelexRelease(blNumber: string): Promise<TelexReleaseResponse> {
    const requestBody = { BL_NUMBER: blNumber };
    console.log('--- TelexRelease Query API Request ---');
    console.log('URL:', `${API_BASE_URL}/EXPBLSTSQRYB`);
    console.log('Method:', 'POST');
    console.log('Request Body:', JSON.stringify(requestBody, null, 2));

    try {
      const response = await fetch(`${API_BASE_URL}/EXPBLSTSQRYB`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();

      console.log('--- TelexRelease Query API Response ---');
      console.log('Status:', response.status);
      console.log('Response Body:', JSON.stringify(responseData, null, 2));
      console.log('--- Request Completed ---');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${responseData.message}`);
      }

      return responseData;
    } catch (error) {
      console.error('--- TelexRelease Query API Failed ---');
      console.error('Error:', error);
      console.error('--- Request Failed ---');
      throw error;
    }
  },

  // 新增的電放功能，加入 log
  async surrenderTelex(blNumber: string): Promise<SurrenderResponse> {
    const requestBody = { BL_NUMBER: blNumber };
    console.log('--- Surrender Telex API Request ---');
    console.log('URL:', `${API_BASE_URL}/SurrenderBL`);
    console.log('Method:', 'POST');
    console.log('Request Body:', JSON.stringify(requestBody, null, 2));

    try {
      const response = await fetch(`${API_BASE_URL}/SurrenderBL`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();
      
      console.log('--- Surrender Telex API Response ---');
      console.log('Status:', response.status);
      console.log('Response Body:', JSON.stringify(responseData, null, 2));
      console.log('--- Request Completed ---');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${responseData.message}`);
      }

      return responseData;
    } catch (error) {
      console.error('--- Surrender Telex API Failed ---');
      console.error('Error:', error);
      console.error('--- Request Failed ---');
      throw error;
    }
  },
};