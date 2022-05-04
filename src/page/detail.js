import * as React from 'react';
import defaultNft from '../assets/img/default.png'
import discord from '../assets/img/discord.png'
import twitter from '../assets/img/twitter.png'
import congrat from '../assets/img/congrat.png'
import fPoint from '../assets/img/fPoint.png'
import 'animate.css';

import { Button, Card } from 'antd'
const { Meta } = Card;

export default function NftDetail() {

    return (
        <div style={{ marginTop: '100px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <div
                className='animate__animated animate__zoomInUp'
                style={{ display: 'flex', margin: '20px', width: '80%' }}
            >

                <div style={{ marginRight: '40px', width: '400px' }}>
                    <img src={defaultNft} style={{ width: '100%' }} />
                    <div className='nftDetaildescription'>
                        <span>Description</span>
                    </div>
                    <div className='nftDetaildescriptioncontent'>
                        <span>
                            Lorem Ipsum Dollar Lorem Ipsum Dollar Lorem
                            Ipsum Dollar Lorem Ipsum Dollar Lorem Ipsum
                            Dollar Lorem Ipsum Dollar Lorem Ipsum Dollar Lorem Ipsum Dollar Lorem
                            Ipsum Dollar Lorem Ipsum Dollar Lorem Ipsum
                            Dollar Lorem Ipsum Dollar
                            Lorem Ipsum Dollar Lorem Ipsum Dollar Lorem
                            Ipsum Dollar Lorem Ipsum Dollar Lorem Ipsum
                            Dollar Lorem Ipsum Dollar </span>
                    </div>
                </div>
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '30px', fontFamily: 'font1', marginRight: '20px' }}>Yoku Corp</span>
                        <img src={discord} style={{ width: '40px', marginLeft: '20px', borderRadius: '40px' }} />
                        <img src={twitter} style={{ width: '40px', margin: '0px 20px', borderRadius: '40px' }} />
                        <div style={{ marginLeft: '20px', background: 'black', color: 'white', fontFamily: 'font1', padding: '3px 10px', borderRadius: '50px' }}>
                            <img src={fPoint} style={{}} />
                            <span>Raffle Closed</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0px' }}>
                        <div className='nftDetailDiv' style={{ marginRight: '30px' }}>
                            <span style={{ flex: '1' }}>Project</span>
                            <span>Yoku Corp</span>
                        </div>
                        <div className='nftDetailDiv' style={{ marginRight: '30px' }}>
                            <span style={{ flex: '1' }}>Collection</span>
                            <span>2114</span>
                        </div>
                        <div className='nftDetailDiv' style={{ marginRight: '30px' }}>
                            <span style={{ flex: '1' }}>Winners</span>
                            <span>30</span>
                        </div>
                        <div className='nftDetailDiv'>
                            <span style={{ flex: '1' }}>Nfts</span>
                            <span>1</span>
                        </div>
                    </div>
                    <div className='nftDetailDiv' style={{ padding: '50px' }}>
                        <span style={{ textAlign: 'center', color: 'black' }}>Auction Closed</span>
                        <div style={{ justifyContent: 'center', marginTop: '20px' }}>
                            <img src={congrat} style={{ width: '40px', marginRight: '20px' }} />
                            <span>Congrats To </span>
                            <span style={{ color: '#a900ff', fontSize: '15px' }}>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                        </div>
                    </div>
                    <div className='nftDetailDivEnd' style={{ margin: '40px 0px' }}>
                        <span style={{ textAlign: 'center', color: 'black' }}>Bid History</span>
                        <div style={{ display: 'flex' }}>
                            <div style={{ flex: '4', display: 'grid', fontSize: '15px' }}>
                                <span style={{ fontSize: '20px', textDecoration: 'underline' }}>Wallet(s)</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                                <span>0x8B6e132456BEA45954befF3488B4c7e245128b7d</span>
                            </div>
                            <div style={{ flex: '1', display: 'grid', fontSize: '15px', textAlign: 'center' }}>
                                <span style={{ fontSize: '20px', textDecoration: 'underline' }}>Time</span>
                                <span>22 Days Ago</span>
                                <span>22 Days Ago</span>
                                <span>22 Days Ago</span>
                                <span>22 Days Ago</span>
                                <span>22 Days Ago</span>
                                <span>22 Days Ago</span>
                                <span>22 Days Ago</span>
                                <span>22 Days Ago</span>
                            </div>
                            <div style={{ flex: '1', display: 'grid', fontSize: '15px', textAlign: 'center' }}>
                                <span style={{ fontSize: '20px', textDecoration: 'underline' }}>Amount</span>
                                <span>$50</span>
                                <span>$50</span>
                                <span>$50</span>
                                <span>$50</span>
                                <span>$50</span>
                                <span>$50</span>
                                <span>$50</span>
                                <span>$50</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
