import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 5M15dpk2DjYi9zp2UpeQx7k6AwejguKPfeI2IYuHnw__mxdZnO_6zLIeGpIqay2mMpRi8H7EzW-ceI_9d6MlukAdR1h-303tnIy3K6aHczMHajHcplwRxB65KJwpYnYx'
  }
})
