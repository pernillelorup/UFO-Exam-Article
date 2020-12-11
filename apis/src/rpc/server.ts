import express from 'express';
import * as http from 'http';
import { createServer, RPCFunctions } from '@node-rpc/server';
import { jsonDeserializer as deserializer } from '@node-rpc/server/dist/deserializers/jsonDeserializer';

// classes, interfaces & functions
import IContract from './contract';

const api: RPCFunctions<IContract, { lang: string }> = {
	helloWorld: () => async () => await 'Hello World',
};

const RPCServer = createServer({ api, deserializer });
async function RPCRequestHandler(req: http.IncomingMessage, res: http.ServerResponse) {
	try {
		const result = await RPCServer.handleAPIRequest(req, { lang: 'en' });
		const json: string = String(JSON.stringify(result));
		res.write(json);
	} catch (error: any) {
		res.writeHead(500);
		res.write(error.json());
	}

	res.end();
}

const port: number = 3002;
const app: express.Application = express();

app.post('/', RPCRequestHandler);
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
