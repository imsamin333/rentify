// import conf from "./conf/conf.js"
import conf from "../conf/conf";
import {Client, Account, ID} from "appwrite"


export class AuthService{

    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) //API Endpoint
        .setProject(conf.projectId); //project ID

        this.account = new Account(this.client)

    }
    
    async createAccount({email, password,name}){
        try{
           const userAccount =  await this.account.create({userId:ID.unique(),email,password,name})

           if(userAccount){
            return this.logIn({email, password})
           }
           return userAccount;
        }catch(err){
            console.log("userAccount create", err)
            throw err
        }
    }

    async logIn({email,password}){
        try {
           return await this.account.createEmailPasswordSession({email,password})
        } catch (error) {
            console.log("logIn error",error)
            throw error;
        }
    }


    async currentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("currentUser error",error)
            return null;

        }
    }

    async logOut(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("logOut err", error)
            throw error
        }
    }
}


const authService = new AuthService();
export default authService;

