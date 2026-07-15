import conf from "../conf/Conf";
import { Client, Account, ID } from "appwrite";

export class AuthServices {
  client = new Client();
  account;

  constructor(parameters) {
    this.client
      .setEndpoint(conf.appwrite_URL)
      .setProject(conf.appwrite_Project_ID);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const user = await this.account.create(ID.unique(), email, password);
      if (user) {
        return this.login({ email, password });
      }
      return user;
    } catch (error) {
      console.log("Appwrite service :: Create Account :: error", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession({ email, password });
    } catch (error) {
      console.log("Appwrite service :: login :: error", error);
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      // Logged in
    } catch (err) {
      // Not logged in
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }
}

const AuthServices_obj = new AuthServices();

export default AuthServices_obj;
