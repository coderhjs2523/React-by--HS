import conf from "../conf/Conf";
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class ConfigServices {
    client = new Client();
    tablesDB;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwrite_URL)
            .setProject(conf.appwrite_Project_ID);
        
        this.tablesDB = new TablesDB(this.client);

        this.bucket = new Storage(this.client);
    }
}

const ConfigServices_obj = new ConfigServices();
export default ConfigServices_obj;