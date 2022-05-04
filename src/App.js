import React, { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { Layout, Button, Switch } from 'antd';
import Header from './component/header';
import Raffle from './page/Raffle';
import Auction from './page/Auction';
import NftDetail from './page/detail';
import './App.css';

const { Footer, Sider, Content } = Layout;

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

function App() {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint
  // const endpoint = 'https://blue-delicate-wildflower.solana-mainnet.quiknode.pro/2f054b4c3a7d3f8841b584875204e3aa7c42d8ab/';
  // const endpoint = clusterApiUrl(network);
  let endpoint = 'https://solana-api.projectserum.com';

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <Layout style={{ background: 'transparent' }}>
          <Header />
          <Content style={{ background: 'transparent' }}>
            <Router>
              <Routes>
                <Route path="/" element={<Raffle />} />
                <Route path="/auction" element={<Auction />} />
                <Route path="/detail" element={<NftDetail />} />
                {/* <Route path="/admin" element={<AUpcoming />} /> */}
              </Routes>
            </Router>
          </Content>
        </Layout>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;