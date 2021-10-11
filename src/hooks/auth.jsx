import React, {createContext, useContext, useEffect, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import { api } from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_USERS } from '../config/database';

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

            if (type === "success" && !params.error) {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`;
                
                const userInfo = await api.get('/users/@me');
                    
                const firstName = userInfo.data.username.split(' ')[0];
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;
                
                const userData = {
                    ...userInfo.data, 
                    firstName, 
                    token: params.access_token
                }
                
                await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));

                setUSer(userData);
                
            }
        } catch{
            throw new Error('Erro na autenticação');
        } finally {
            setLoading(false);
        }
    }

    async function signOut() {
        setUSer({});
        await AsyncStorage.removeItem(COLLECTION_USERS);
    }

    async function loadUserStorageData() {
        const storage = await AsyncStorage.getItem(COLLECTION_USERS);

        if(storage) {
            const loggedUser = JSON.parse(storage);

            api.defaults.headers.authorization = `Bearer ${loggedUser.token}`
            
            setUSer(loggedUser);
        }
    }

    useEffect(() => {
        // function to prevent async in useEffect
        async function fetchData() {
            await loadUserStorageData();
        };
        fetchData();
    }, []);

    return (
        <AuthContext.Provider
        value={{
            user,
            loading,
            signIn,
            signOut,
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