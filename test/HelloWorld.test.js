const { expect } = require("chai")
const { ethers, deployments, getNamedAccounts } = require("hardhat")
const { VERIFICATION_BLOCK_CONFIRMATIONS } = require("../helper-hardhat-config")

describe("HelloWorld", function () {
    it("Should print a hello world greeting", async function () {
        /* Deploy the helloWorld contract */
        const { deploy, log } = deployments
        const { deployer } = await getNamedAccounts()
        const helloWorld = await deploy("HelloWorld", {
            from: deployer,
            args: ["HelloWorld"],
            log: true,
            waitConfirmations: VERIFICATION_BLOCK_CONFIRMATIONS,
        })
        log("------------------------------------")
        const greeting = await helloWorld.greet()
        expect(greeting).is.equal("Hello World!")
    })
})
