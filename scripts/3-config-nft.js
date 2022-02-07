import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x6590AF8622dcB5ddf389d9A39276Bb24BBE22595",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Gigabeer",
                description: "Drink this glass of hoppy bliss to gain access to Beer DAO.",
                image: readFileSync("scripts/assets/beer.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()