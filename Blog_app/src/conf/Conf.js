const conf = {
    appwrite_URL: String(import.meta.env.VITE_APPERITE_URL),
    appwrite_Project_ID: String(import.meta.env.VITE_APPERITE_PROJECT_ID),
    appwrite_DB_ID: String(import.meta.env.VITE_APPERITE_DATABASE_ID),
    appwrite_Bucket_ID: String(import.meta.env.VITE_BUCKET_ID),
};
export default conf;