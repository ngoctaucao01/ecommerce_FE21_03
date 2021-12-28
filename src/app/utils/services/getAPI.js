import axios from 'axios';
import { BASE_URL } from '../../constants/Configs';

export default class getAPI {
  static config = {
    method: 'GET'
  }

  static async getProductsTags() {
    let url = `${BASE_URL}/tags`;
    return await axios(url, getAPI.config).catch(this.handleError);
  }

  static async getProductsCategory() {
    let url = `${BASE_URL}/category`;
    return await axios(url, getAPI.config).catch(this.handleError);
  }

  static handleError(error) {
    throw Error(error);
  }
}
