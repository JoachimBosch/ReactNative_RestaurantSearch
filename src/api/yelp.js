import axios from "axios";
import "process.env";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer _INSERT_API_LINK_HERE",
  },
});

// yelp.get('/search') => can be used like this
