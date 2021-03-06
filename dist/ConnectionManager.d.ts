import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
import { ProviderType } from '@beland/schemas/dist/dapps/provider-type';
import { AbstractConnector } from './connectors';
import { Storage } from './storage';
import { ConnectionData, ConnectionResponse, Provider } from './types';
import './declarations';
export declare class ConnectionManager {
    storage: Storage;
    connector?: AbstractConnector;
    constructor(storage: Storage);
    connect(providerType: ProviderType, chainId?: ChainId): Promise<ConnectionResponse>;
    tryPreviousConnection(): Promise<ConnectionResponse>;
    getAvailableProviders(): ProviderType[];
    disconnect(): Promise<void>;
    getProvider(): Promise<Provider>;
    createProvider(providerType: ProviderType, chainId?: ChainId): Promise<Provider>;
    buildConnector(providerType: ProviderType, chainId: ChainId): AbstractConnector;
    getConnectionData(): ConnectionData | undefined;
    private setConnectionData;
    private isClosableConnector;
}
export declare const connection: ConnectionManager;
