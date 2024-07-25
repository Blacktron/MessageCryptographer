'use strict';

import crypto from 'node:crypto';
import config from '../config/config.js';

/**
 * Stores the generated key pair in the config object.
 * @param keys The key objects to be stored.
 */
function saveKeysInConfig(keys) {
    config.publicKey = keys.publicKey;
    config.privateKey = keys.privateKey;
}

/**
 * Generates Elliptic curve key pair.
 * @returns {Promise<void>}
 */
export async function generateECKeys() {
    const { privateKey, publicKey } = crypto.generateKeyPairSync('ec', {
        namedCurve: 'sect239k1'
    });

    saveKeysInConfig({
        publicKey: publicKey,
        privateKey: privateKey
    });
}
