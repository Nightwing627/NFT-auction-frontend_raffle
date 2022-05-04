import React from 'react';
import { Button } from 'antd'
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

export default function ProjectHeader() {
    return (
        <div style={{ background: 'transparent', marginTop: '50px' }}>
            <div className="site-button-ghost-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <WalletModalProvider >
                    <WalletModalProvider>
                        <WalletMultiButton />
                    </WalletModalProvider>
                </WalletModalProvider>
                {/* <Button type="primary" ghost className='mybtn'>
                    Select Wallet
                </Button> */}
                <div style={{ fontFamily: 'font2', fontSize: '3.5rem', margin: '0px 20%' }}>
                    Mikuko Bay
                </div>
                <Button type="primary" ghost className='mybtn'>
                    Vials Power
                </Button>
            </div>
        </div>
    )
}
