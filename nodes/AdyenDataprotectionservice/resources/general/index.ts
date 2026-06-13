import type { INodeProperties } from 'n8n-workflow';

export const generalDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					]
				}
			},
			"options": [
				{
					"name": "Post Request Subject Erasure",
					"value": "Post Request Subject Erasure",
					"action": "Submit a Subject Erasure Request.",
					"description": "Sends the PSP reference containing the shopper data that should be deleted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/requestSubjectErasure"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /requestSubjectErasure",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Request Subject Erasure"
					]
				}
			}
		},
		{
			"displayName": "Force Erasure",
			"name": "forceErasure",
			"type": "boolean",
			"default": true,
			"description": "Set this to **true** if you want to delete shopper-related data, even if the shopper has an existing recurring transaction. This only deletes the shopper-related data for the specific payment, but does not cancel the existing recurring transaction.",
			"routing": {
				"send": {
					"property": "forceErasure",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Request Subject Erasure"
					]
				}
			}
		},
		{
			"displayName": "Merchant Account",
			"name": "merchantAccount",
			"type": "string",
			"default": "",
			"description": "Your merchant account",
			"routing": {
				"send": {
					"property": "merchantAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Request Subject Erasure"
					]
				}
			}
		},
		{
			"displayName": "Psp Reference",
			"name": "pspReference",
			"type": "string",
			"default": "",
			"description": "The PSP reference of the payment. We will delete all shopper-related data for this payment.",
			"routing": {
				"send": {
					"property": "pspReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Request Subject Erasure"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Request Subject Erasure"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Request Subject Erasure"
					]
				}
			}
		},
];
