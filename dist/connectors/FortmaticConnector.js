"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FortmaticConnector = void 0;
const provider_type_1 = require("@beland/schemas/dist/dapps/provider-type");
const fortmatic_connector_1 = require("@web3-react/fortmatic-connector");
const configuration_1 = require("../configuration");
class FortmaticConnector extends fortmatic_connector_1.FortmaticConnector {
    constructor(chainId) {
        const { apiKeys } = configuration_1.getConfiguration()[provider_type_1.ProviderType.FORTMATIC];
        super({ chainId, apiKey: apiKeys[chainId] });
        this.apiKeys = apiKeys;
    }
    getApiKey() {
        return __awaiter(this, void 0, void 0, function* () {
            const chainId = yield this.getChainId();
            return this.apiKeys[chainId];
        });
    }
}
exports.FortmaticConnector = FortmaticConnector;
//# sourceMappingURL=FortmaticConnector.js.map