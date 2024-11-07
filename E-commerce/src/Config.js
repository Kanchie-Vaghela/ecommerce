import { Client , Account} from 'appwrite';

const client = new Client();
client.setProject('6720b06f0022d36fc40a').setEndpoint('https://cloud.appwrite.io/v1');

export default client;
export const account = new Account(client);

