import { Directus } from '@directus/sdk'

const directusToken = import.meta.env.VITE_DIRECTUS_API_TOKEN;
const directusUrl = import.meta.env.VITE_DIRECTUS_URL;

if(!directusToken) {
    throw new Error('Por favor, incluya un token');
}

if(!directusUrl) {
    throw new Error('Por favor, incluya una url');
}

export const directus = new Directus(directusUrl, {
    auth: {
        staticToken: directusToken
    }
})

