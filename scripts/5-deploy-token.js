import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x577Ee87d380F5978d5cD29059c14174047a54e38");

(async () => {
    try {
        // Deploy a standard ERC-20 contract.
        const tokenModule = await app.deployTokenModule({
            // What's your token's name? Ex. "Ethereum"
            name: "Beer DAO Governance Token",
            // What's your token's symbol? Ex. "ETH"
            symbol: "HOPS",
        });
        console.log(
            "✅ Successfully deployed token module, address:",
            tokenModule.address,
        );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();