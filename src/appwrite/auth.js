import { Account, Client, ID } from "appwrite"
import conf from "../conf/conf"

export class AuthService {
    client = new Client();
    account;

    constructor () {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);

        this.account = new Account(this.client)
    }

    async createAccount ({name, email, password}) {
        try {
            const userAccount = await this.account.create(ID.unique(), name, email, password)
            if (userAccount) {
                // call another method
                return this.login({email, password})
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log('Appwrite service :: createAccount :: error', error);
        }
    }

    async login ({email, password}) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            console.log('Appwrite service :: Login :: error', error);
        }
    }

    async getCurrentUser () {
        try {
            return await this.account.get()
        } catch (error) {
            console.log('Appwrite service :: getCurrentUser :: error', error);
        }

        return null;
    }

    async logout () {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log('Appwrite service :: logout :: error', error);
        }
    }
}

const authService = new AuthService()
export default authService;