import axios from "axios";
import Constants from "expo-constants";

const apiKey = Constants.expoConfig.extra.YELP_API_KEY;

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

// yelp.get('/search') => can be used like this
 