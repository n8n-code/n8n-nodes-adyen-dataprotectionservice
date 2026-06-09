import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { generalDescription } from './resources/general';

export class AdyenDataprotectionservice implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'adyen-dataprotectionservice',
		name: 'N8nDevAdyenDataprotectionservice',
		icon: { light: 'file:./adyen-dataprotectionservice.svg', dark: 'file:./adyen-dataprotectionservice.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Adyen Data Protection API provides a way for you to process Subject Erasure Requests as mandated in GDPR',
		defaults: { name: 'adyen-dataprotectionservice' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAdyenDataprotectionserviceApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "General",
					"value": "General",
					"description": ""
				}
			],
			"default": ""
		},
		...generalDescription
		],
	};
}
