import axios from 'axios';
import { QueryClient } from '@tanstack/react-query';
import { ConversionRequest } from '../store/model/conversionRequest';
import { ConversionResponse } from '../store/model/conversionResponse';

export const queryClient = new QueryClient();

export async function convertFile(
  fileConversionData: ConversionRequest
): Promise<ConversionResponse> {
  try {
    const headers = {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
    };

    const response = await axios.post<ConversionResponse>(
      'http://vps-47726545.vps.ovh.net:5000/submit',
      fileConversionData,
      { headers }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to convert file');
  }
}
