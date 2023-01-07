import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer N3fVgbBccSHN_aMc7A4C2pouMubGEt1dWjPRHgsrhLJQg8k8XdTHKg_qF5DWT30Utnc1eCl9JY4xh4atVr9udZa6qp0Tcv-7yKrF_ASEm58hURtR_KTzYTGQrpgYY3Yx'
    }
});