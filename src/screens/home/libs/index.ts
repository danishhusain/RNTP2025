
import { ApiMethods } from '../../../constants/ApiMethods';
import apiFactory from '../../../factories/ApiFactory';


const HomeScreenHelper = {


  getData: async () => {
    try {
      const resp = await apiFactory({ url: '/posts', method: ApiMethods.GET });
    } catch (error) {
    }
  },
};
export default HomeScreenHelper;
