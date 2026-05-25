const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    projectId:  String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseId:  String(import.meta.env.VITE_APPWRITE_Database_ID),
    collectionId:  String(import.meta.env.VITE_APPWRITE_Table_ID),
    bucketId:  String(import.meta.env.VITE_APPWRITE_Bucket_ID),
}


export default conf;