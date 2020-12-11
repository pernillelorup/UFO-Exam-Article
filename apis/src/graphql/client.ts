import fetch from 'node-fetch';
import benchmark from '../benchmark';

async function graphql_cb(): Promise<void> {
	const response = await fetch('http://localhost:3003/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({ query: '{ hello }' }),
	});
}

benchmark('GraphQL', 500, graphql_cb);
