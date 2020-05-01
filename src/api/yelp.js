import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer x6dUQ76_CZ2nu8UPSrlx2y8FmlS7fFMY4wzQhw1WZlNY13mPYpi4i02mAltMA4ai90vfpPU5EPm5FGdIv9GNaHuoGXbu3JIZwo7Up1tRb4jsvJbDtAsGd0g7CEOrXnYx'
    }
});