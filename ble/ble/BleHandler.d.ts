/// <reference types="node" />
import { BluenetSettings } from "../BluenetSettings";
export declare class BleHandler {
    settings: BluenetSettings;
    connectedPeripheral: any;
    connectionSessionId: any;
    connectionPending: boolean;
    constructor(settings: any);
    /**
     * Connect is either a handle or a peripheral object
     * @param connectData
     */
    connect(connectData: any): Promise<void>;
    _connect(peripheral: any): Promise<{}>;
    _getServices(peripheral: any): Promise<{}>;
    _getCharacteristics(services: any): Promise<{}>;
    _getCharacteristicsFromService(service: any): Promise<{}>;
    _setConnectedPeripheral(peripheral: any): void;
    disconnect(): Promise<{}>;
    waitForPeripheralToDisconnect(timeoutInSeconds: any): Promise<{}>;
    errorDisconnect(): Promise<void | {}>;
    writeToCharacteristic(serviceId: any, characteristicId: any, data: any, encryptionEnabled?: boolean): Promise<void>;
    readCharacteristic(serviceId: any, characteristicId: any, encryptionEnabled?: boolean): Promise<Buffer>;
    readCharacteristicWithoutEncryption(serviceId: any, characteristicId: any): Promise<Buffer>;
    getService(serviceId: any): Promise<{}>;
    getCharacteristic(serviceId: any, characteristicId: any): Promise<any>;
    setupSingleNotification(serviceId: any, characteristicId: any, writeCommand: any): Promise<{}>;
    setupNotificationStream(serviceId: any, characteristicId: any, writeCommand: any, processHandler: any, timeout?: number): Promise<{}>;
}
