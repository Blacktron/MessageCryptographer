'use strict';

import express from 'express';

import { signMessage } from '../../services/signMessage.js';

const router = express.Router();

router.post('/sign', async (req, res) => {
    const messageToSign = req.body.message;
    const signResult = await signMessage(messageToSign);

    if (!signResult.success) {
        res.json({
            result: signResult.errorMsg
        });

        return;
    }

    res.json({
        result: signResult.signature
    });
});

export default router;
