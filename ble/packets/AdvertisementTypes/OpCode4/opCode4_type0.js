"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../util/Util");
function parseOpCode4_type0(serviceData, data) {
    if (data.length == 17) {
        // opCode   = data[0]
        // dataType = data[1]
        serviceData.switchState = data.readUInt8(2);
        serviceData.flagsBitmask = data.readUInt8(3);
        serviceData.temperature = data.readUInt8(4);
        let powerFactor = data.readInt8(5);
        let realPower = data.readInt16LE(6);
        serviceData.powerFactor = powerFactor / 127;
        // we cannot have a 0 for a powerfactor. To avoid division by 0, we set it to be either 0.01 or -0.01
        if (serviceData.powerFactor >= 0 && serviceData.powerFactor < 0.01) {
            serviceData.powerFactor = 0.01;
        }
        else if (serviceData.powerFactor < 0 && serviceData.powerFactor > -0.01) {
            serviceData.powerFactor = -0.01;
        }
        serviceData.powerUsageReal = realPower / 8;
        serviceData.powerUsageApparent = serviceData.powerUsageReal / serviceData.powerFactor;
        serviceData.errorsBitmask = data.readUInt32LE(8);
        // bitmask states
        let bitmaskArray = Util_1.Util.getBitMaskUInt8(serviceData.flagsBitmask);
        serviceData.dimmingAvailable = bitmaskArray[0];
        serviceData.dimmingAllowed = bitmaskArray[1];
        serviceData.hasError = bitmaskArray[2];
        serviceData.switchLocked = bitmaskArray[3];
        serviceData.timeIsSet = bitmaskArray[4];
        serviceData.switchCraftEnabled = bitmaskArray[5];
        serviceData.uniqueIdentifier = data.readUInt8(12);
    }
}
exports.parseOpCode4_type0 = parseOpCode4_type0;
//# sourceMappingURL=opCode4_type0.js.map