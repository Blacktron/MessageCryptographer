'use strict';

import crypto from 'node:crypto';
import sha3 from 'js-sha3';

import config from '../config/config.js';

/**
 * Hashes the message received for signing and then creates the signature.
 * @param messageToSign The message intended for signing.
 * @returns {Promise<{signature: (string|string), success: boolean, errorMsg: (string)}>}
 */
export const signMessage = async (messageToSign) => {
    const messageToSignHash = sha3.keccak256(messageToSign);
    const sign = crypto.createSign('SHA256');
    sign.write(messageToSignHash);
    sign.end();
    const signature = sign.sign(config.privateKey, 'base64');
    const verificationResult = await verifyMessage(signature, messageToSignHash, config.publicKey);

    return {
        success: verificationResult,
        signature: verificationResult ? signature : '',
        errorMsg: verificationResult ? '' : 'Signature verification failed'
    }
}

/**
 * Verifies that the correct message was signed thus ensuring
 * that the signature and the message are not corrupted or altered.
 * @param signature         The signature of the message.
 * @param messageToSign     The message (hashed) which is being signed.
 * @param publicKey         The Elliptic public key used for the verification.
 * @returns {Promise<boolean>}
 */
const verifyMessage = async (signature, messageToSign, publicKey) => {
    const verify = crypto.createVerify('SHA256');
    verify.write(messageToSign);
    verify.end();
    const verificationResult = verify.verify(publicKey, signature, 'base64');

    return verificationResult;
}
