import { createClient } from '@node-rpc/client';
import { jsonSerializer as serializer } from '@node-rpc/client/dist/serializers/jsonSerializer';
import { axiosXHR as xhr } from '@node-rpc/client/dist/xhr/axios';

import IContract from './contract';
import benchmark from '../benchmark';

const endpoint: string = 'http://localhost:3002';

async function rpc_cb(): Promise<void> {
	const rpc = createClient<IContract>({ endpoint, serializer, xhr });
	await rpc.helloWorld().call();
}

benchmark('RPC', 500, rpc_cb);
