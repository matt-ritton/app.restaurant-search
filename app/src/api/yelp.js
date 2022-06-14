import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 7RRbcPQdS_OuyqDBUW67a9PwdxPlr_i_TQOh_jArTldsECLsikRULpGTwu_dK7RzCyf6OEgXXWXy3P1hk04T5VZ0ssPqATyshy7teMDJCdhsTra1mtYfTumbQOmWYnYx' 
    }
});