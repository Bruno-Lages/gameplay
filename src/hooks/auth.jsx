import React, {createContext, useContext, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import { api } from '../services/api';

const { SCOPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;



const AuthContext = createContext();

export function AuthProvider({children}) {
    
    const [user, setUSer] = useState({});

    const [loading, setLoading] = useState(false);

    async function signIn() {
        try{
            setLoading(true);

            // Discord api url
            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
            
            // expo function that allow a response URL
            const { type, params } = await AuthSession.startAsync({authUrl});

            if (type === "success") {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`;
                
                const userInfo = await api.get('/users/@me');
                    
                const firstName = userInfo.data.username.split(' ')[0];
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;
                
                setUSer({
                    ...userInfo.data, 
                    firstName, 
                    token: params.access_token
                })
                
            }
            setLoading(false);
        } catch{
            throw new Error('Erro na autenticação');
        }
    }

    return (
        <AuthContext.Provider
        value={{
            user,
            loading,
            signIn,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}