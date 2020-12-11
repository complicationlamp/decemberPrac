import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
        Authorization:
          "Client-ID 669846175ffda44949671c358651113ffc9df9e4c4b81525f6358c50f4caf675",
      }
})