import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AdyenDataprotectionserviceApi implements ICredentialType {
        name = 'N8nDevAdyenDataprotectionserviceApi';

        displayName = 'Adyen Dataprotectionservice API';

        icon: Icon = { light: 'file:../nodes/AdyenDataprotectionservice/adyen-dataprotectionservice.svg', dark: 'file:../nodes/AdyenDataprotectionservice/adyen-dataprotectionservice.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://ca-test.adyen.com/ca/services/DataProtectionService/v1',
                        required: true,
                        placeholder: 'https://ca-test.adyen.com/ca/services/DataProtectionService/v1',
                        description: 'The base URL of your Adyen Dataprotectionservice API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-Key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
