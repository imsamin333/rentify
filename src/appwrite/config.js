import { Client, Databases, ID, Query, Storage} from "appwrite"
import conf from "../conf/conf.js"


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) //API Endpoint
        .setProject(conf.projectId); //project ID

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async createPost({title, description, price, location, city, amenities, images, ownerId, contactNumber, isAvailable}){
        try {
            return await this.databases.createDocument({
                databaseId:conf.databaseId,
                collectionId:conf.collectionId,
                documentId:ID.unique(),
                data:{
                 title, description, price, location, city, amenities, images, ownerId, contactNumber, isAvailable
                }}
            )
        } catch (error) {
            console.log("database post error",error)
            throw error;
        }
    }

    async updatePost(documentId,{title, description, price, location, city, amenities, images, contactNumber, isAvailable}){
        try {
            return await this.databases.updateDocument({
                 databaseId:conf.databaseId,
                collectionId:conf.collectionId,
                documentId:documentId,
                data:{
                 title, description, price, location, city, amenities, images, contactNumber, isAvailable
                }}
            )
        } catch (error) {
            console.log("database updatePost error",error)
            throw error;
        }
    }


    async deletePost(documentId){
       try {
         return await this.databases.deleteDocument({
           databaseId: conf.databaseId,
           collectionId: conf.collectionId,
           documentId: documentId })
       } catch (error) {
        console.log("deletepost database error", error)
        throw error
       }
        
    }

    async getPost(documentId){
        try {
            return await this.databases.getDocument({
           databaseId: conf.databaseId,
           collectionId: conf.collectionId,
           documentId: documentId }
            )
        } catch (error) {
            console.log("database get document error",error)
            throw error;
        }
    }

    async listPost(queries=[]){
        try {
            return await this.databases.listDocuments({
                databaseId:conf.databaseId,
                collectionId:conf.collectionId,
                queries}
            )
        } catch (error) {
            console.log("database listPost error",error)
            throw error;
        }
    }

    async createFile(file){
        try {
            return await this.bucket.createFile({
                bucketId: conf.bucketId,
                fileId: ID.unique(),
                file
            })
        } catch (error) {
            console.log("storage createFile error",error)
            throw error;
        }
    }



    getFileView(fileId){
        if(!fileId) return null;
        return this.bucket.getFileView(
            conf.bucketId,
            fileId
        )

    }

    
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile({
                bucketId: conf.bucketId,
                fileId: fileId
            })
        } catch (error) {
            console.log("storage deleteFile error",error)
            throw error;
        }
    }

}

const service = new Service()
export default service;