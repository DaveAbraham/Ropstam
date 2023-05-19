import axios from 'axios';
import {Base_Url} from '../../../config/appConfigurations';
export function sendRequest(data, endpoint) {
  console.log(`${Base_Url}${endpoint}`, data);
  return axios
    .request({
      method: 'post',
      url: `${Base_Url}${endpoint}`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: data,
    })
    .then(function (response) {
      // console.log("api response",response)
      try {
        let json_resp = JSON.parse(JSON.stringify(response.data));
        if (json_resp.status.toLowerCase().search('fail') !== -1) {
          try {
            const testData = JSON.parse(json_resp.result);
            const testResult = Object.values(testData);
            json_resp.result = testResult.join('\n');
          } catch (e) {
            console.log('inside api wrapper');
          }
        }
        return json_resp;
      } catch (ex) {
        return {status: 'failure', result: 'Unexpected Error'};
      }
    })
}
