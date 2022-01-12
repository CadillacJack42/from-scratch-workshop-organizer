const SUPABASE_URL = 'https://mvprkyusxesxhxvjspfk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTk0NDM2NSwiZXhwIjoxOTU3NTIwMzY1fQ.DdhfC1-l9aq_JmcdY4JnuiPNKupiUe4FuH4hz81BSl4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session();
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../'); 
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./workshops');
    }
}

export async function signupUser(email, password){
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export const getWorkshops = async() => {
    const response = await client
        .from('workshops')
        .select('*, students (*)');
    console.log(response);
    return checkError(response);
};
getWorkshops();