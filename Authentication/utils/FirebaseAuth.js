import axios from 'axios'

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const authenticate = async (email, password, mode) => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`
    const response = await axios.post(url, {email: email, password: password, returnSecureToken: true})
    console.log(response);
    return response.data.idToken

}

export const login = async ({email, password}) => {
    const token = await authenticate(email, password, 'signInWithPassword');
    return token

}

export const signup = async ({email, password}) => {
    return await authenticate(email, password, 'signUp')
}   