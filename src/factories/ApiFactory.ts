import axios, { AxiosResponse } from 'axios';
import applicationProperties from '../application.properties';
import {
  ApiFactoryOptions,
  ApiFactoryResult,
} from '../interface/interface/Common';
import userStore from '../store/userStore';


const apiFactory = async ({
  url,
  method,
  body = null,
}: ApiFactoryOptions): Promise<ApiFactoryResult> => {
  const completeUrl = `${applicationProperties.baseUrl}${url}`;
  const { authToken } = userStore.getState();


  const headers = {
    Authorization: `Token ${authToken}`,
  };
  try {
    const axiosConfig = {
      method,
      url: completeUrl,
      data: body,
      headers,
    };

    const axiosResponse: AxiosResponse = await axios(axiosConfig);
    console.log('axiosConfig',axiosConfig.url);
    return {
      response: axiosResponse.data,
      error: null,
      status: axiosResponse.status,
    };
  } catch (err) {
    const status = err?.response?.status;
    return { response: null, error: err, status };
  }
};

export default apiFactory;
